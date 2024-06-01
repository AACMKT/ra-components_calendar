
import { Calendar } from './components/Calendar'
import './App.css'
import moment from 'moment'
import 'moment/dist/locale/ru'


function App() {
  moment.locale('ru');
  let dayOfWeek = moment().format('dddd').charAt(0).toUpperCase() +  moment().format('dddd').slice(1);
  let capitalizedMonth = moment().format('MMMM').charAt(0).toUpperCase() + moment().format('MMMM').slice(1);
  return (
  <>
  <div className="ui-datepicker">
  <div className="ui-datepicker-material-header">
    <div className="ui-datepicker-material-day">{ dayOfWeek }</div>
    <div className="ui-datepicker-material-date">
      <div className="ui-datepicker-material-day-num">{ moment().date() }</div>
      <div className="ui-datepicker-material-month">{ moment().format('MMMM') }</div>
      <div className="ui-datepicker-material-year">{ moment().format('YYYY')}</div>
    </div>
  </div>
  <div className="ui-datepicker-header">
    <div className="ui-datepicker-title">
      <span className="ui-datepicker-month">{ capitalizedMonth }</span>&nbsp;<span className="ui-datepicker-year">{ moment().format('YYYY') }</span>
    </div>
  </div>
  <table className="ui-datepicker-calendar">
  <colgroup>
      <col />
      <col />
      <col />
      <col />
      <col />
      <col className="ui-datepicker-week-end" />
      <col className="ui-datepicker-week-end" />
    </colgroup>
    <thead>
      <tr>
        <th scope="col" title="Понедельник">Пн</th>
        <th scope="col" title="Вторник">Вт</th>
        <th scope="col" title="Среда">Ср</th>
        <th scope="col" title="Четверг">Чт</th>
        <th scope="col" title="Пятница">Пт</th>
        <th scope="col" title="Суббота">Сб</th>
        <th scope="col" title="Воскресенье">Вс</th>
      </tr>
    </thead>
    <tbody>
      < Calendar/>
    </tbody>
  </table>
</div>
    </>
  )
}

export default App
