import React from 'react';
import './ToDoList.css';

const ToDoList = ({items}) => {
  let renderedItems = [];
  items.forEach((d, i) => renderedItems.push(<li key={i}>{d}</li>));

  return (
    <ol className="ToDoList">
      {renderedItems}
    </ol>
  );
}

export default ToDoList;
