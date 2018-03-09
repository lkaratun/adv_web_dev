function count_occurences(s){
	let occurences = new Map();
	s.forEach(i=>{
		if (occurences.has(i)) occurences.set(i, occurences.get(i)+1);
		else occurences.set(i, 1);
	})
	return occurences;
}

d3.select("form").
	on("submit", () => {
		d3.event.preventDefault();
		let s = d3.select("input").node().value.split("");
		let occurences = count_occurences(s);
		let letters = d3.select("#letters")
						.selectAll("div")		
						.data(Array.from(occurences.keys()), d=>d)


		console.log(d3.select("#letters").selectAll("div").data(['w','e','s','d'], d=>d));

		letters
			.exit()
			.remove();

		letters		
			.classed("new", false)
			.style('height', d => 30*occurences.get(d)+'px');

		//console.log()			
		
		letters
			.enter()
			.append("div")
			.classed("letter", true)
			.classed("new", true)
			.styles({'height': d => 30*occurences.get(d)+'px',
				'width': '25px'})
			.text(d => d);

		d3.select("#phrase")
			.text("Analysis of: " + d3.select("input").node().value)

		d3.select("#count").
			text("New characters: " + letters.enter().nodes().length);

		d3.select("input").node().value = "";
	});


d3.select("#reset").
	on("click", ()=>{
		d3.select("#letters")
			.selectAll("div")		
			.remove();

	d3.select("input").node().value = "";
	d3.select("#phrase")
		.text("")
	d3.select("#count").
		text("");
	});
