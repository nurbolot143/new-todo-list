import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";

const ToDoItem = (props) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = (event) => {
    props.onChecked(
      event.target.checked
        ? { checked: true, id: props.id }
        : { checked: false, id: props.id }
    );
  };

  return (
    <li className="day__item">
      <div className="day__wrapper">
        {props.text}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <BorderColorIcon
            color="primary"
            style={{
              fontSize: 30,
              cursor: "pointer",
            }}
            onClick={() => props.onUpdate(props.text)}
          /> */}

          <DeleteIcon
            className="deleteIcon"
            color="primary"
            style={{
              fontSize: 30,
              cursor: "pointer",
            }}
            onClick={() => {
              props.onDelete(props.id);
            }}
          />
          <input
            style={{ width: 30, height: 30 }}
            type="checkbox"
            onChange={handleChecked}
          />
        </div>
      </div>
    </li>
  );
};

export default ToDoItem;
