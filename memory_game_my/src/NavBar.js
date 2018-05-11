import React from 'react';
import './NavBar.css';

const NavBar = ({handleClick}) => {
	return (
		<nav>
			<div style={{fontWeight: "bold", fontSize: "20px"}}>The memory game</div>
			<ul>
				<li><a>Difficulty</a></li>
				<li onClick={handleClick}><a>New game</a></li>
			</ul>
		</nav>
	)
}

export default NavBar;