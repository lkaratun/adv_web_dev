const svgWidth = 600;
const svgHeight = 600;
const padding = 60;
const svg = d3.select("svg")
				.attr("width", svgWidth)
				.attr("height", svgHeight);

function drawPlot () {
	let xData = d3.select("#x_selector").node().value;
	let yData = d3.select("#y_selector").node().value;
	let rData = d3.select("#r_selector").node().value;
	let colorData = d3.select("#color_selector").node().value;
	let selectedIndex = d3.select("#x_selector").node().options.selectedIndex;
	let xLabel = d3.select("#x_selector").node().options[selectedIndex].text;
	selectedIndex = d3.select("#y_selector").node().options.selectedIndex;
	let yLabel = d3.select("#y_selector").node().options[selectedIndex].text;


	let xScale = d3.scaleLinear()
					.domain(d3.extent(regionData, d => d[xData]))
					.range([padding, svgWidth - padding]);
	let yScale = d3.scaleLinear()
					.domain(d3.extent(regionData, d => d[yData]))
					.range([svgHeight - padding, padding]);
	let xAxis = d3.axisBottom(xScale)
					.tickSize(-svgHeight + 2 * padding)
					.tickSizeOuter(0);
	let yAxis = d3.axisLeft(yScale)
					.tickSize(-svgWidth + 2 * padding)
					.tickSizeOuter(0);
	let colorScale = d3.scaleLinear()
					.domain(d3.extent(regionData, d => d[colorData]))
					.range([d3.rgb("#66ff33"), d3.rgb("#cc0000")]);
	let radiusScale = d3.scaleLinear()
					.domain(d3.extent(regionData, d => d[rData]))
					.range([2, 12]);

	svg
		.selectAll("g")
		.remove();

	svg
		.selectAll("text")
		.remove();

	svg
		.selectAll("circle")
		.remove();

	svg
		.append("g")
		.call(xAxis)
		.attr("transform", `translate (0, ${svgHeight - padding})`);


	svg
		.append("g")
		.call(yAxis)
		.attr("transform", `translate (${padding}, 0)`);

	// Data points
	svg
		.selectAll("circle")
		.data(regionData, d => d[xData])
		.enter()
		.append("circle")
			.attr("cx", d => d[xData] ? xScale(d[xData]) : 0)
			.attr("cy", d => d[yData] ? yScale(d[yData]) : 0)
			.attr("fill", d => d[colorData] ? colorScale(d[colorData]) : "#e1e1d0")
			.attr("r", d => d[rData] && d[yData] && d[xData] ? radiusScale(d[rData]) : 0)
			.attr("opacity", 0.75);



	// Plot label
	svg
		.append("text")
		.text(`${yLabel} vs ${xLabel}`)
		.attr("x", svgWidth / 2)
		.attr("y", padding)
		.attr("dy", "-0.5em")
		.attr("font-size", "1.2em")
		.attr("text-anchor", "middle");

	// Axes labels
	// X axis
	svg
		.append("text")
		.text(xLabel)
		.attr("x", svgWidth / 2)
		.attr("y", svgHeight - padding)
		.attr("dy", "1.5em")
		.attr("font-size", "1em")
		.attr("text-anchor", "middle");

	// Y axis
	svg
		.append("text")
		.text(yLabel)
		.attr("transform", "rotate(-90)")
		.attr("x", -svgHeight / 2)
		.attr("y", 0)
		.attr("dy", "2em")
		.attr("font-size", "1em")
		.attr("text-anchor", "middle");
}


d3.select("#Submit")
	.on("click", drawPlot);

document.addEventListener("DOMContentLoaded", drawPlot);
