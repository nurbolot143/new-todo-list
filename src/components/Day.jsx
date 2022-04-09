import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

const DayList = (props) => {
  return (
    <div className="day">
      <InputArea onAdd={props.add} />
      <ol className="day__list">
        {props.items.map((toDoItem, index) => {
          return (
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem.inputText}
              onDelete={props.onDelete}
              onChecked={props.onChecked}
              onUpdate={(text) => setUpdateText(text)}
            />
          );
        })}
      </ol>
    </div>
  );
};

export default DayList;
