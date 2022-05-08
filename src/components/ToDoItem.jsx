import { useState } from "react";

import DeleteIcon from "@mui/icons-material/Delete";

const ToDoItem = (props) => {
  const { label, id, completed, onToggleCompleted, onDeleteTask, onValueChange, index } = props;

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

  const inputStyle = inputChecked ? { textDecoration: 'line-through' } : null;

  return (
    <li className="day__item">
      <div className="day__number">
        {index}
      </div>
      <input type="text"
        value={inputValue}
        onChange={valueChange}
        className='day__input'
        style={inputStyle}
      />
      <div className="day__icons">

        <DeleteIcon
          className="deleteIcon"
          color="primary"
          style={{
            fontSize: 30,
            cursor: "pointer",
            color: '#32999b'
          }}
          onClick={() => {
            onDeleteTask(id)
          }}
        />
        <input
          className="day__checkbox"
          type="checkbox"
          checked={inputChecked}
          onChange={checkedChange}
        />
      </div>
    </li>
  );
};

export default ToDoItem;
