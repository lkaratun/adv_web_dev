function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

async function  getMostFollowers(...args){
	let promises = [];
	for (let i of args)
		promises.push($.getJSON(`https://api.github.com/users/${i}`));

	let data = await Promise.all(promises);
	data.sort((a,b) => b.followers-a.followers);
	return `${capitalizeFirstLetter(data[0].login)} has the most followers with ${data[0].followers}`;
}

getMostFollowers('elie','tigarcia','colt').then(function(data){
    console.log(data)
});

//"Colt has the most followers with 424" 



// 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.

async function starWarsString(num) {
	let url = `https://swapi.co/api/people/${num}/?format=json`;
	let s = '';
	let data = await $.getJSON(url);
	s += data.name;
	data = await $.getJSON(data.films[0]);
	s += " is featured in " + data.title + ", directed by " + data.director;
	data = await $.getJSON(data.planets[0]);
	s += " and it takes place on " + data.name;
	return s;		
}

starWarsString(1).then(data=>console.log(data));


// "Luke Skywalker"
// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
// "Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"
// `https://swapi.co/api/people/${i}`