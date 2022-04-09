import React from "react";
import { Link } from "react-router-dom";

const days = [
  { link: "monday", name: "понедельник" },
  { link: "tuesday", name: "вторник" },
  { link: "wednesday", name: "среда" },
  { link: "thursday", name: "четверг" },
  { link: "friday", name: "пятница" },
  { link: "saturday", name: "суббота" },
  { link: "sunday", name: "воскресенье" },
];

const Nav = (props) => {
  return (
    <div className="nav">
      <h2 className="nav__title">Дни недели</h2>
      <div className="nav__wrapper">
        {days.map((el, idx) => {
          return (
            <Link to={`/${el.link}`} key={idx} className="nav__link">
              {el.name} <span className="nav__percent"></span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
