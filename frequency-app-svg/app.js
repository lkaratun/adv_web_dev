function count_occurences(s){
	let occurences = new Map();
	s.forEach(i=>{
		if (occurences.has(i)) occurences.set(i, occurences.get(i)+1);
		else occurences.set(i, 1);
	})
	return occurences;
}


var svgWidth = parseFloat(d3.select("#letters").style("width"));
console.log(svgWidth);
var svgHeight = 200;
var barPadding = 3;
var svg = d3.select("svg");

d3.select("form").
	on("submit", () => {
		d3.event.preventDefault();
		let s = d3.select("input").node().value.split("");
		let occurences = count_occurences(s);
		console.log(Array.from(occurences.keys()).length);
		var barWidth = svgWidth/Array.from(occurences.keys()).length-barPadding;
		var bar_height_per_occurence = svgHeight / d3.max(Array.from(occurences.values()));
		let letters = d3.select("#letters")
							.attr("width", svgWidth)
							.attr("height", svgHeight)
						.selectAll(".letter")		
						.data(Array.from(occurences.keys()), d=>d)

      // var letters = svg
      //                 .selectAll(".letter")
      //                 .data(Array.from(occurences.keys()), d=>d);

	letters
		.classed("new", false)
		.exit()
		.remove();

		var newLetters = letters
			.enter()
			.append("g")
          		.classed("letter", true)
          		.classed("new", true);


      newLetters.append("rect");
      newLetters.append("text");

		newLetters
			.merge(letters)
			.select("rect")
				.attr("x", (d, i) => (barWidth+barPadding)*i)
				.attr("y", d => svgHeight - bar_height_per_occurence*occurences.get(d))
				.attr("height", d => bar_height_per_occurence*occurences.get(d))
				.attr("width", barWidth);

		newLetters
			.merge(letters)
			.select("text")
				.text(d => d)
				.attr("x", (d, i) => (barWidth+barPadding)*i + barWidth/2)
				.attr("y", svgHeight-10 )
				.style("text-anchor", "middle")



		d3.select("#phrase")
			.text("Analysis of: " + d3.select("input").node().value)

		d3.select("#count").
			text("New characters: " + letters.enter().nodes().length);

		d3.select("input").node().value = "";
	});


d3.select("#reset").
	on("click", ()=>{
		d3.select("#letters")
			.selectAll("rect")		
			.remove();
		d3.select("#letters")
			.selectAll("text")		
			.remove();
	d3.select("input").node().value = "";
	d3.select("#phrase")
		.text("")
	d3.select("#count").
		text("");
	});
