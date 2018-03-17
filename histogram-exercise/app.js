const svgWidth = 600;
const svgHeight = 600;
const padding = 60;
const barPadding = 2;
const svg = d3.select("svg")
				.attr("width", svgWidth)
				.attr("height", svgHeight);

function drawPlot () {
	let yData = d3.select("#y_selector").node().value;
	let opacityData = d3.select("#opacitySelector").node().value;
	let colorData = d3.select("#color_selector").node().value;
	let selectedIndex = d3.select("#x_selector").node().options.selectedIndex;
	let xLabel = d3.select("#x_selector").node().options[selectedIndex].text;
	selectedIndex = d3.select("#y_selector").node().options.selectedIndex;
	let yLabel = d3.select("#y_selector").node().options[selectedIndex].text;
	let numTicks = d3.select("#numTicks").node().value;
	console.log(numTicks);



	let xScale = d3.scaleLinear()
					.domain([0, d3.max(regionData, d => d[yData])])
					.rangeRound([padding, svgWidth - padding]);

	let histogram = d3.histogram()
					.domain(xScale.domain())
					.thresholds(numTicks)
					.value(d => d[yData]);
	let bins = histogram(regionData);
	let yScale = d3.scaleLinear()
					.domain([0, d3.max(bins, d => d.length)])
					.range([svgHeight, padding * 2]);


	let colorScale = d3.scaleLinear()
					.domain(d3.extent(regionData, d => d[colorData]))
					.range([d3.rgb("#66ff33"), d3.rgb("#cc0000")]);
	let opacityScale = d3.scaleLinear()
					.domain(d3.extent(regionData, d => d[opacityData]))
					.range([2, 12]);

	let xAxis = d3.axisBottom(xScale)
					.ticks(numTicks)
					.tickSizeOuter(0);
	let yAxis = d3.axisLeft(yScale);


	svg.selectAll("g").remove();
	svg.selectAll("text").remove();


	// Data bars
	let bars = svg.selectAll(".bar")
			.data(bins)
			.enter()
			.append("g")
			.classed("bar", true);

	bars.append("rect")
			.attr("x", (d, i) => xScale(d.x0))
			.attr("y", d => yScale(d.length) - padding)
			.attr("height", d => svgHeight - yScale(d.length))
			.attr("width", d => d.x1 > d.x0 ? xScale(d.x1) - xScale(d.x0) - barPadding : 0)
			.attr("fill", "blue")
			// .attr("fill", d => d[colorData] ? colorScale(d[colorData]) : "#e1e1d0")
			.attr("opacity", 0.5);
			// .attr("opacity", d => d[opacityData] ? opacityScale(d[opacityData]) : 0.5);

	bars.append("text")
			.text(d => `${d.x0} - ${d.x1} (bar height: ${d.length})`)
			.attr("transform", "rotate(-90)")
			.attr("y", d => (xScale(d.x1) + xScale(d.x0)) / 2)
			.attr("x", -svgHeight + 70)
			.style("alignment-baseline", "middle");


	svg
		.append("g")
		.call(xAxis)
		.attr("transform", `translate (0, ${svgHeight - padding})`);


	svg
		.append("g")
		.call(yAxis)
		.attr("transform", `translate (${padding}, -${padding})`);


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
		.attr("dy", "2em")
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

d3.select("#numTicks")
	.on("input", drawPlot);

document.addEventListener("DOMContentLoaded", drawPlot);
