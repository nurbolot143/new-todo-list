import { useState } from "react";

import Nav from "./components/Nav";
import InputArea from './components/InputArea';
import ToDoItem from "./components/ToDoItem";

import "./App.scss";
import "./components/Nav";

function App() {
  const today = new Date().getDay();
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  const [activeDay, setActiveDay] = useState(days[today]);
  const [idCounter, setIdCounter] = useState(0);

  const [data, setData] = useState([]);

  const addTask = (task) => {

    setData((tasks) => [
      ...tasks, { id: idCounter, task, completed: false, day: activeDay }
    ])

    setIdCounter(idCounter + 1)
  }

  const deleteTask = (id) => {
    setData((items) =>
      items.filter(item => item.id !== id)
    )
  }

  const toggleActiveDay = (activeDay) => {
    setActiveDay(activeDay)
  }

  const toggleCompleted = (id) => {
    setData((items) => {
      return items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    })
  }

  const changeValue = (id, task) => {
    setData((items) =>
      items.map(item => (item.id === id) ? { ...item, task } : item)
    )
  }

  const activeTaskList = data.filter(({ day }) => day === activeDay);

  const EmptyList = () => {
    return (
      <h2 className="empty-list">Спиcок пуст, добавьте задачи!</h2>
    )
  }

  const emptyList = activeTaskList.length > 0 ? null : <EmptyList />

  const taskList = activeTaskList.length === 0 ? null :
    activeTaskList.map(({ task, id, completed }, idx) => {
      return (
        <ToDoItem
          key={`${id}__${idx}`}
          id={id}
          index={idx + 1}
          label={task}
          completed={completed}
          onToggleCompleted={toggleCompleted}
          onDeleteTask={deleteTask}
          onValueChange={changeValue} />
      )
    })

  return (
    <div className="App">

      <header className="header">
        <div className="header__left">Дни недели</div>
        <div className="header__right">Задачи</div>
      </header>

      <div className="wrapper">
        <Nav onToggleActiveDay={toggleActiveDay} data={data} active={activeDay} />

        <div className="main">

          <div className="main__wrapper">
            <InputArea onAddTask={addTask} />

            <div className="day">
              <ul className="day__list">
                {taskList}
                {emptyList}
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
