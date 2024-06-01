import moment from 'moment'
import 'moment/dist/locale/ru'


moment.locale('ru');
moment.updateLocale('ru', {week: {dow: 1}});

let firstDay = moment().startOf('month').startOf('week');
let lastDay = moment().endOf('month').endOf('week');
let calendar = [];
let month = [];
let week = [];
let day = firstDay;

while(day <= lastDay) {
  month.push(day.date());
  day.add(1, 'd');
}

month.forEach((day, index) => {
    if (index % 7 == 0 && index != 0) {
      calendar.push(week);
      if (index <= 28) {
        week = [];  
      }
      
    }
    if ((index < 7) && (day > 7)){
        week.push(["ui-datepicker-other-month", day]);
    }
    else if ((index > 27) && (day < 7)) {
        week.push(["ui-datepicker-other-month", day]);
    }
    else if (day === moment().date()) {
      week.push(["ui-datepicker-today", day])
      
    }
    else {
        week.push([null, day]);
    }
    
    if (index === month.length - 1) {
      calendar.push(week);
    }
    
})


export const Calendar = () => {

  return (
    <>
        { calendar.map((week, index) => ( <tr key={10 + index}>
            {week.map((days, index) => (<td key={index} className={days[0]}>{days[1]}</td>))}

        </tr>))}

    </>
);
};

