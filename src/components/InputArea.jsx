import { useState } from "react";

const InputArea = (props) => {
   const [inputText, setInputText] = useState("");

   const handleChange = (event) => {
      setInputText(event.target.value);
   };

   const onSubmit = (event) => {
      event.preventDefault()
      if (inputText.trim()) {
         props.onAddTask(inputText);
         setInputText("");
      }
   }

   return (
      <form className="form" onSubmit={onSubmit} >
         <input
            className="form__input"
            placeholder="Введите задачу"
            onChange={handleChange}
            value={inputText}
         />

         <button className="form__btn" type="submit">Добавить</button>
      </form>
   );
};

export default InputArea;
