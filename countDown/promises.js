function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function  getMostFollowers(...args){
	let followers = new Map();
	let promises = [];

	for (let i of args){
		promises.push($.getJSON(`https://api.github.com/users/${i}`, function(data) {
			console.log(`${i} retrieved successfully`);	
			followers.set(i,data.followers);
			//return data.followers;
		}));
	}

	return Promise.all(promises).then(() => {
		var max_so_far = -1;
		var max_user = -1;
		for (let [key, value] of followers) if (value > max_so_far) {max_so_far = value; max_user = key;}
		//return new Promise(resolve, reject){}
		return `${capitalizeFirstLetter(max_user)} has the most followers with ${max_so_far}`;


	});


}

getMostFollowers('elie','tigarcia','colt').then(function(data){
    console.log(data)
});

//"Colt has the most followers with 424" 



// 2. Write a function called starWarsString, which accepts a number. You should then make an AJAX call to the Star Wars API (https://swapi.co/ ) to search for a specific character by the number passed to the function. Your function should return a promise that when resolved will console.log the name of the character.

function starWarsString(num) {
	let url = `https://swapi.co/api/people/${num}/?format=json`;
	let s = '';
	return $.getJSON(url).then(data => {
		s += data.name;
		return data})
	.then(data => $.getJSON(data.films[0]))
	.then(data => 
		{s += " is featured in " + data.title + ", directed by " + data.director;
		return data;})
	.then(data => $.getJSON(data.planets[0]))
	.then(data => {
		s += " and it takes place on " + data.name;
		return s;		
	});	
}


starWarsString(1).then(function(data){
    console.log(data);
})



// .then(data=>{
// 	let url = console.log(data.films[0]);
// 	return $.getJSON(url);

// });

// "Luke Skywalker"
"Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner"
"Luke Skywalker is featured in The Empire Strikes Back, directed by Irvin Kershner and it takes place on Hoth"
// `https://swapi.co/api/people/${i}`