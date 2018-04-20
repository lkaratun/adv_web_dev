import React from 'react';
// import './ToDoInput.css';

const ToDoInput = ({onEntry}) => {
  const handleEntry = (e) => {
  	e.preventDefault();
  	let inputField = document.querySelector("#textField");
  	onEntry(inputField.value);
  	inputField.value = "";
  }

  return (
  	<div>
  	<form onSubmit={handleEntry}>
  		<input type="text" id="textField" placeholder="What needs to be done?"/>
  		<input type="submit" value="Save"/>
  	</form>
  	</div>
  );
}

export default ToDoInput;
