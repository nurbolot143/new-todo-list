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
  const [idCounter, setIdCounter] = useState(1);

  const [data, setData] = useState([
    { id: 0, task: 'buy milk', completed: true, day: days[today] }
  ]);

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
                {
                  data.filter(({ day }) => day === activeDay)
                    .map(({ task, id, completed }, idx) => {
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
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
