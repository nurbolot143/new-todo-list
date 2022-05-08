import { useState } from "react";

const InputArea = (props) => {
   const [inputText, setInputText] = useState("");

   const handleChange = (event) => {
      setInputText(event.target.value);
   };

   return (
      <form
         className="form"
         onSubmit={(e) => {
            e.preventDefault()
            if (inputText.trim()) {
               props.onAddTask(inputText);
               setInputText("");
            }
         }}
      >
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
