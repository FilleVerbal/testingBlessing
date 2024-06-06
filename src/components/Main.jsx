import { useStore } from '../data/store.js'
import Day from "./day/Day"
import PrioList from "./prio-list/PrioList.jsx"

const Main = () => {
	const todos = useStore(state => state.todos)
	const dayNames = [
		'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'
	]
	const todosByDay = {}
	dayNames.forEach((weekday) => {
		todosByDay[weekday] = todos.filter((day) => day.day === weekday);
	  });

	return (
		<main>
			<div className="day-view">
				{dayNames.map((day) => (
					<Day key={day} todosByDay={todosByDay} day={day}/>
				))}
			</div>

			<hr />

			<PrioList className="prio-list" />

		</main>
	)
}

export default Main
