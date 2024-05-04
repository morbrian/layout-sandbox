
import 'primeflex/primeflex.css';
import './App.css'
import { Week } from './components/Schedule/Week';
import { EventItem } from './components/Schedule/WeekDayEvent';
import { MultiWeek } from './components/Schedule/MultiWeek';

const eventItems: EventItem[] = [
  { label: "thing1", date: new Date("2024-03-12"), data: {} },
    { label: "more things", date: new Date("2024-03-12"), data: {}, colors: { border: '#88f0ff', background: '#0044ff'}},
    { label: "thing 4", date: new Date("2024-03-13"), data: {}, colors: { border: '#ff00ff', background: '#00ff00'}},
    { label: "so many things", date: new Date("2024-03-13"), data: {}},
    { label: "some scheduled stuff", date: new Date("2024-03-16"), data: {}},
]

function App() {
  return (
    <>
      <div>
        <MultiWeek focusWeek={11} year={2024} pastWeekCount={1} futureWeekCount={1} eventItems={eventItems} collapsible={false} />
        {/* <div class="grid md:justify-content-between justify-content-left">
          <Week weekNumber={11} year={2024} eventItems={eventItems} />
        </div> */}
      </div>
    </>
  )
}

export default App
