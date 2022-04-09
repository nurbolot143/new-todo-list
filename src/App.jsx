import "./App.scss";
import "./components/Nav";
import Nav from "./components/Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import Monday from "./days/Monday";
import Tuesday from "./days/Tuesday";
import Wednesday from "./days/Wednesday";
import Thursday from "./days/Thursday";
import Friday from "./days/Friday";
import Saturday from "./days/Saturday";
import Sunday from "./days/Sunday";

function App() {
  const date = new Date().getDay();
  const days = [
    "/sanday",
    "/monday",
    "/tuesday",
    "/wednesday",
    "/thursday",
    "/friday",
    "/saturday",
  ];
  const day = days[date];

  return (
    <div className="App">
      <Nav />
      <div className="main">
        <h1 className="main__title">Задачи</h1>

        <Routes>
          <Route path="monday" element={<Monday />} />
          <Route path="tuesday" element={<Tuesday />} />
          <Route path="wednesday" element={<Wednesday />} />
          <Route path="thursday" element={<Thursday />} />
          <Route path="friday" element={<Friday />} />
          <Route path="saturday" element={<Saturday />} />
          <Route path="sunday" element={<Sunday />} />
          <Route path="" element={<Navigate to={day} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
