import React, { Component } from 'react';
import Card from './Card'
import './Board.css';

class Board extends Component {
	constructor(props){
		super(props);
		let cards = [];
		for (let i = 0; i < 16; i += 2){
			let color = this.getRandomColor();
			//delete color from allColors to prevent duplicates
			var index = this.props.allColors.indexOf(color);
			if (index !== -1) this.props.allColors.splice(index, 1);

			//Add 2 cards of the same color to the cards array
			cards.push({
				key: i,
				color: color,
				opened: false
			});
			cards.push({
				key: i+1,
				color: color,
				opened: false
			});
		}

		this.state = {
			cards : this.shuffleArray(cards),
			activeCards: [],
			openedCards: new Set()
		}
		this.handleClick = this.handleClick.bind(this);

	}
	getRandomColor() {
		let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
		return this.props.allColors[colorIndex];
	}
	handleClick(card, e) {
		//When an opened card clicked again, do nothing
		if (card.opened || this.state.openedCards.has(card.key) || this.state.activeCards[0] === card) return;

		//Flip clicked card
		let newCards = this.state.cards.map(d => d.key === card.key ? {...d, opened: true} : d);
		this.setState({cards: newCards, activeCards: [newCards.filter(d => d.key === card.key)[0]]});

		//Case when card clicked is second
		if (this.state.activeCards.length > 0){
			//We didn't find a match
			if (this.state.activeCards[0].color !== card.color) {
				let newCards = this.state.cards.map(d => {
					if (d.key === card.key || d.key === this.state.activeCards[0].key)
						return {...d, opened: false};
					else return d;
				});
				setTimeout(() => this.setState({cards: newCards}), 500);
			}
			//Match found
			else this.setState(prevState => {openedCards : prevState.openedCards.add(card.key)});
			//In any case, reset active cards list
			this.setState({activeCards: []});
		}
	}

	render () {
		const cards = this.state.cards.map(d =>
			{return	<Card color={d.color} key={d.key} opened={d.opened} handleClick={this.handleClick.bind(this, d)}/>}
		)//map
		return (
			<div className="board">
				{cards}
			</div>
		)}//render

	//Used for shuffling the card order
	shuffleArray (arr) {
	  return arr
			    .map(a => [Math.random(), a])
			    .sort((a, b) => a[0] - b[0])
			    .map(a => a[1]);
	};
}//Board

Board.defaultProps = {
  // allColors: ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond",
  //             "Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate",
  //             "Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod",
  //             "DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange",
  //             "DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey",
  //             "DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
  //             "FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod",
  //             "Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki",
  //             "Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan",
  //             "LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon",
  //             "LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow",
  //             "Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
  //             "MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise",
  //             "MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy",
  //             "OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen",
  //             "PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
  //             "Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen",
  //             "SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen",
  //             "SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke",
  //             "Yellow","YellowGreen"]
  allColors: ["#e6194b", "#3cb44b", "#ffe119", "#0082c8", "#f58231", "#911eb4", "#46f0f0", "#f032e6", "#d2f53c", "#fabebe", "#008080", "#e6beff", "#aa6e28", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000080", "#FFFFFF", "#000000"]
};

export default Board;