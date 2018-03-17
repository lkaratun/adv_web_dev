
let svgWidth = 600;
let svgHeight = 600;
let padding = 50;
let maxX = d3.max (regionData, d => d.adultLiteracyRate);
let maxY = d3.max (regionData, d => d.subscribersPer100);

var svg = d3.select("svg")
                .attr("width", svgWidth)
                .attr("height", svgHeight);


let xScale = d3.scaleLinear()
				.domain(d3.extent(regionData, d => d.adultLiteracyRate))
				.range([padding, svgWidth - padding]);
let yScale = d3.scaleLinear()
				.domain(d3.extent(regionData, d => d.subscribersPer100))
				.range([svgHeight - padding, padding]);
let xAxis = d3.axisBottom (xScale)
				.tickSize(-svgHeight+ 2*padding)
				.tickSizeOuter(0);
let yAxis = d3.axisLeft (yScale)
				.tickSize(-svgWidth + 2*padding)
				.tickSizeOuter(0);
svg
	.append("g")
	.call(xAxis)
	.attr("transform", `translate (0, ${svgHeight-padding})`);

	

svg
	.append("g")
	.call(yAxis)
	.attr("transform", `translate (${padding}, 0)`);

svg
	.selectAll("circle")
	.data(regionData, d => d.adultLiteracyRate)
	.enter()
	.append("circle")
		.attr("cx", d => {

			if (d.adultLiteracyRate !== null) return xScale(d.adultLiteracyRate)
			else return 0})
		.attr("cy", d => {
			if (d.subscribersPer100 !== null) return yScale(d.subscribersPer100);
			else return 0})
		.attr("r", d => {
			if (d.subscribersPer100 && d.adultLiteracyRate) return 3;
			else return 0;
		});

// Plot label
svg
	.append("text")
	.text("Cell phones vs literacy")
	.attr("x", svgWidth/2)
	.attr("y", padding)	
	.attr("dy", "-0.5em")
	.attr("font-size", "2em")
	.attr("text-anchor", "middle");

// Axes labels
// X axis
svg
	.append("text")
	.text("Adult literacy %")
	.attr("x", svgWidth/2)
	.attr("y", svgHeight - padding)	
	.attr("dy", "1.5em")
	.attr("font-size", "1.5em")
	.attr("text-anchor", "middle");

// Y axis
svg
	.append("text")
	.text("Cell phone subscribers")
	.attr("transform", "rotate(-90)")
	.attr("x", -svgHeight/2)
	.attr("y", 0)	
	.attr("dy", "1em")
	.attr("font-size", "1.5em")
	.attr("text-anchor", "middle");



	// .attr({
	// 	"x": svgWidth/2,
	// 	"y": 50
	// });
	


	// newLetters
	// 	.merge(letters)
	// 	.select("rect")
	// 		.attr("x", (d, i) => (barWidth+barPadding)*i)
	// 		.attr("y", d => svgHeight - bar_height_per_occurence*occurences.get(d))
	// 		.attr("height", d => bar_height_per_occurence*occurences.get(d))
	// 		.attr("width", barWidth);


	// d3.select("#phrase")
	// 	.text("Analysis of: " + d3.select("input").node().value)

	// d3.select("#count").
	// 	text("New characters: " + letters.enter().nodes().length);

	// d3.select("input").node().value = "";


