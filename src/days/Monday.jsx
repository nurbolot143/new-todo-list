import React, { useState } from "react";
import DayList from "../components/Day";
const navItems = document.getElementsByClassName("nav__percent");

const Monday = () => {
  const [item, setItem] = useState([]);

  const addItem = (inputText) => {
    setItem((prevItems) => [
      ...prevItems,
      { completed: false, inputText: inputText },
    ]);
  };

  const deleteItem = (id) => {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => index !== id);
    });
  };

  // const updateItem = (prop) => {
  //   setItem((prevItems) => {
  //     return prevItems.map(
  //       (el, id) =>
  //         id == prop.id && { completed: el.completed, inputText: prop.text }
  //     );
  //   });
  // };

  const checkItem = (prop) => {
    setItem((prevItems) => {
      return prevItems.map((el, id) =>
        id == prop.id
          ? { completed: prop.checked, inputText: el.inputText }
          : el
      );
    });
  };

  const check = item.reduce((sum, el) => sum + Number(el.completed), 0);
  const percent = item.length > 0 ? (check * 100) / item.length : 0;

  if (navItems[0] !== undefined) {
    navItems[0].style.width = `${percent}%`;
  }

  return (
    <DayList
      items={item}
      add={addItem}
      onDelete={deleteItem}
      onChecked={checkItem}
      // onUpdate={updateItem}
    />
  );
};

export default Monday;
