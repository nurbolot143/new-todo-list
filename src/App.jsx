import { useState } from "react";

import Nav from "./components/Nav";
import InputArea from './components/InputArea';
import ToDoItem from "./components/ToDoItem";

import "./App.scss";
import "./components/Nav";

function App() {
  const today = new Date().getDay();
  const days = ["sanday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  const [activeDay, setActiveDay] = useState(days[today]);
  const [idCounter, setIdCounter] = useState(1);

  const [data, setData] = useState([
    { id: 0, task: 'buy milk', completed: false, day: 'wednesday' },
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
      <Nav onToggleActiveDay={toggleActiveDay} data={data} />
      <div className="main">
        <h1 className="main__title">Задачи</h1>

        <InputArea onAddTask={addTask} />

        <div className="day">
          <ol className="day__list">
            {
              data.filter(({ day }) => day === activeDay)
                .map(({ task, id, completed }, idx) => {
                  return (
                    <ToDoItem
                      key={`${id}__${idx}`}
                      id={id}
                      label={task}
                      completed={completed}
                      onToggleCompleted={toggleCompleted}
                      onDeleteTask={deleteTask}
                      onValueChange={changeValue} />
                  )
                })
            }
          </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
