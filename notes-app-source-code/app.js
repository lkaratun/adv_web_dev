function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
	color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


d3.select('#new-note')
	.on('submit', () => {
		d3.event.preventDefault();
	});

d3.select("#addNote")
	.on('click', function() {
		console.log('addnote clicked');
	  d3.event.preventDefault();
	  var input = d3.select('input');
	  d3.select("#notes")
		.append('p')
		  .classed('note', true)
		  .text(input.property('value'));
	  input.property('value', '');
	});


d3.select("#removeNotes")
	.on('click', () => {
	  d3.selectAll(".note")
		.remove();
	});    

d3.select("#lucky")
	.on('click', () => {
	  d3.selectAll(".note")
		.style('background-color', getRandomColor);
	});    

let input = d3.select("input");
var preview_created = false;
input.on("keyup", () => {
	if (d3.event.keyCode === 13){
		d3.event.preventDefault();
		d3.select(".preview")
			.classed('note', true)
			.classed('preview', false);
		// console.log(d3.select(".preview"));
		// console.log(d3.select(".preview").classed('note'));
		preview_created = false;
		input.property('value','');
	}
	else if (!preview_created) 
	{
		d3.select("#notes")
		.append('p')
		  .classed('preview', true)
		  .text(input.property('value'));
		preview_created = true;
	}
	else
		d3.select(".preview")
			.text(input.property('value'));
		
})