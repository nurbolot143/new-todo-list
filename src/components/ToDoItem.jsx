import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";

const ToDoItem = ({ label, id, completed, onToggleCompleted, onDeleteTask, onValueChange }) => {
  const [inputChecked, setInputChecked] = useState(completed);
  const [inputValue, setInputValue] = useState(label);

  const checkedChange = () => {
    setInputChecked(!inputChecked);

    onToggleCompleted(id)
  }

  const valueChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    onValueChange(id, value)
  }

  return (
    <li className="day__item">
      <div className="day__wrapper">
        <input type="text"
          value={inputValue}
          onChange={valueChange}
          style={{ flex: '1 1 auto', fontSize: 'inherit' }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>

          <DeleteIcon
            className="deleteIcon"
            color="primary"
            style={{
              fontSize: 30,
              cursor: "pointer",
            }}
            onClick={() => {
              onDeleteTask(id)
            }}
          />
          <input
            style={{ width: 30, height: 30 }}
            type="checkbox"
            checked={inputChecked}
            onChange={checkedChange}
          />
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
