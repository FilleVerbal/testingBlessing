import { useStore } from '../data/store.js'
import Day from "./day/Day"
import PrioList from "./prio-list/PrioList.jsx"
// import { splitTodosIntoDays } from '../utils/list.js'

const Main = () => {
	const todos = useStore(state => state.todos)
	// const days = splitTodosIntoDays(todos)
	const dayNames = [
		'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'
	]
	const todosByDay = {}
	dayNames.forEach((weekday) => {
		todosByDay[weekday] = todos.filter((day) => day.day === weekday);
	  });
	console.log(todosByDay);

	return (
		<main>
			<div className="day-view">
				{dayNames.map((day) => (
					<Day key={day} todosByDay={todosByDay} day={day}/>
				))}
			</div>

			<hr />

			<PrioList />

		</main>
	)
}

export default Main
