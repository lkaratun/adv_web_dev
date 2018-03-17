const svgWidth = 500;
const svgHeight = 500;
const padding = 60;
const innerRadius = svgWidth / 4;
const outerRadius = svgWidth / 2 - 10;
const orderedMonths = [
   "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const colors = ["#aec7e8", "#a7cfc9", "#9fd7a9", "#98df8a", "#bac78e", "#ddb092",
  "#ff9896", "#ffa48c", "#ffaf82", "#ffbb78", "#e4bf9d", "#c9c3c3"];
const orderedSeasons = ["winter", "spring", "summer", "fall"];
const seasonColors = ["#1f77b4", "#2ca02c", "#d62728", "#ff7f0e"];



const svg = d3.select("svg")
				.attr("width", svgWidth)
				.attr("height", svgHeight);

svg
	.append("g")
	.attr("transform", `translate(${svgWidth / 2}, ${svgHeight / 2})`)
	.classed("chart", true);

d3.select("#year")
	.property("min", d3.min(birthData, d => d.year))
	.property("max", d3.max(birthData, d => d.year))
	.property("value", d3.min(birthData, d => d.year))

function season(month) {
	let winter = new Set(["March", "January", "February"]);
	let spring = new Set(["June", "April", "May"]);
	let summer = new Set(["September", "July", "August"]);
	let fall = new Set(["December", "October", "November"]);
	if (winter.has(month)) return 'winter';
	if (spring.has(month)) return 'spring';
	if (summer.has(month)) return 'summer';
	if (fall.has(month)) return 'fall';
}

function drawPlot (year) {
	d3.select("#yearLabel").html(`Data for year ${year}`);
	let yearData = birthData.filter(d => d.year == year);
	yearData.forEach(d => {d.season = season(d.month)});
	let seasonData = new Map();
	yearData.forEach(d => {
		if (seasonData.has(d.season)) seasonData.set(d.season, seasonData.get(d.season)+d.births);
		else seasonData.set(d.season, d.births);
	})
	let temp = [];
	for (let [key, value] of seasonData.entries()) temp.push({season: key, births: value});
	seasonData = temp;

	let months = new Set();
	yearData.forEach(d => months.add(d.month));
	let colorScale = d3.scaleOrdinal()
					.domain(months)
					.range(colors);
	let seasonColorScale = d3.scaleOrdinal()
							.domain(orderedSeasons)
							.range(seasonColors);


	let outerArcs = d3.pie()
		.value(d => d.births)
		.sort((a, b) => orderedMonths.indexOf(a.month) - orderedMonths.indexOf(b.month))
		(yearData);

	let innerArcs = d3.pie()
		.value(d => d.births)
		.sort((a, b) => orderedMonths.indexOf(a.month) - orderedMonths.indexOf(b.month))
		(seasonData);


	let pathOuter = d3.arc()
		.innerRadius(innerRadius)
		.outerRadius(outerRadius);

	let pathInner = d3.arc()
		.innerRadius(0)
		.outerRadius(innerRadius);

	let updateOuter = d3.select(".chart")
						.selectAll(".outerArc")
						.data(outerArcs);

	let updateInner = d3.select(".chart")
						.selectAll(".innerArc")
						.data(innerArcs);

	updateInner.exit().remove();
	updateOuter.exit().remove();

	updateOuter
		.enter()
			.append("path")
			.classed("outerArc", true)
		.merge(updateOuter)
			.attr("fill", d => colorScale(d.data.month))
			.attr("stroke", "black")
			.attr("d", pathOuter);

	updateInner
		.enter()
			.append("path")
			.classed("innerArc", true)
		.merge(updateInner)
			.attr("fill", d => seasonColorScale(d.data.season))
			.attr("stroke", "black")
			.attr("d", pathInner);
}


d3.select("#Submit")
	.on("click", drawPlot);

d3.select("#year")
	.on("input", () => drawPlot(d3.event.target.value));

document.addEventListener("DOMContentLoaded", drawPlot(1967));
