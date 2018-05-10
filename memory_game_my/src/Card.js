import React from 'react';
import './Card.css';

const Card = ({color, opened, handleClick}) => {
	let classList = "card";
	// if (opened) classList+=" opened"
	let newColor = opened ? color : "#808080";
  	return  	(
  		<div
  	className={classList}
  	style={{backgroundColor: newColor}}
  	onClick={handleClick}
  	opened={opened.toString()}
  	>
  	</div>);
}

export default Card;
