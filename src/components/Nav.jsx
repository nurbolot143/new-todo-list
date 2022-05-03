const Nav = ({ onToggleActiveDay, data }) => {
   const days = [
      { day: "monday", ru: "понедельник" },
      { day: "tuesday", ru: "вторник" },
      { day: "wednesday", ru: "среда" },
      { day: "thursday", ru: "четверг" },
      { day: "friday", ru: "пятница" },
      { day: "saturday", ru: "суббота" },
      { day: "sunday", ru: "воскресенье" },
   ];

   return (
      <div className='nav' >
         <h2 className="nav__title">Дни недели</h2>
         <div className="nav__wrapper">
            {days.map(({ day, ru }, idx) => {
               const activeDays = data.filter(item => item.day === day)
               const completedDays = activeDays ?
                  activeDays.filter(item => item.completed).length : 0

               const activeDaysPercent = (activeDays && completedDays) ?
                  (completedDays * 100) / activeDays.length : 0

               return (
                  <button
                     key={idx}
                     className="nav__link"
                     onClick={() => onToggleActiveDay(day)}
                  >
                     {ru}
                     <span
                        className="nav__percent"
                        style={{ width: `${activeDaysPercent}%` }}
                     ></span>
                  </button>
               );
            })}
         </div>
      </div>
   );
};

export default Nav;
