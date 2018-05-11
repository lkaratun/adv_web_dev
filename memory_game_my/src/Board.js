import React, { Component } from 'react';
import Card from './Card'
import NavBar from './NavBar'
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
			activeCard: null,
			// openedCards: new Set(),
			clicksBlocked: false
		}
		this.handleClick = this.handleClick.bind(this);
		this.resetGame = this.resetGame.bind(this);

	}
	resetGame () {
		let cards = this.shuffleArray(this.state.cards.map(d => ({...d, opened: false})));
		this.setState({cards});
	}
	getRandomColor() {
		let colorIndex = Math.floor(Math.random() * this.props.allColors.length);
		return this.props.allColors[colorIndex];
	}
	handleClick(card, e) {
		//When clicked too fast or an opened card clicked, do nothing
		if (this.state.clicksBlocked || card.opened) return;

		//Flip clicked card
		let newCards = this.state.cards.map(d => d.key === card.key ? {...d, opened: true} : d);
		this.setState({cards: newCards, activeCard: card});

		//Case when card clicked is second
		if (this.state.activeCard){
			//We didn't find a match
			if (this.state.activeCard.color !== card.color) {
				let newCards = this.state.cards.map(d => {
					if (d.key === card.key || d.key === this.state.activeCard.key)
						return {...d, opened: false};
					else return d;
				});
				this.setState({clicksBlocked: true}, () =>
				setTimeout(() => this.setState({cards: newCards, clicksBlocked: false}), 500));
			}
			//Match found
			// else this.setState(prevState => {return {openedCards : prevState.openedCards.add(card.key)}});
			//In any case, reset active cards list
			this.setState({activeCard: null});
		}
	}
	render () {
		const cards = this.state.cards.map(d =>
			{return	<Card color={d.color} key={d.key} opened={d.opened} handleClick={this.handleClick.bind(this, d)}/>}
		)//map
		return (
			<div>
				<NavBar handleClick={this.resetGame}/>
				<div className="board">
					{cards}
				</div>
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
  // allColors: ["#e6194b", "#3cb44b", "#ffe119", "#0082c8", "#f58231", "#911eb4", "#46f0f0", "#f032e6", "#d2f53c", "#fabebe", "#008080", "#e6beff", "#aa6e28", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000080", "#FFFFFF", "#000000"]
  allColors: ["#1D2B53", "#00E436", "#FFF1E8", "#29ADFF", "#AB5236", "#FF77A8", "#FFEC27", "#FF004D"]
};

export default Board;