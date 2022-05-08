const Nav = ({ onToggleActiveDay, data, active }) => {
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
         {days.map(({ day, ru }, idx) => {
            const activeDays = data.filter(item => item.day === day)
            const completedDays = activeDays.filter(item => item.completed).length;
            const activeDaysPercent = (completedDays * 100) / activeDays.length;

            const btnClass = active === day ? "nav__link nav__link-active" : "nav__link";

            return (
               <button
                  key={idx}
                  className={btnClass}
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
   );
};

export default Nav;
