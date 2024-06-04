import { useStore } from '../data/store.js'
import Day from "./day/Day"
import PrioList from "./prio-list/PrioList.jsx"
import { splitTodosIntoDays } from '../utils/list.js'

const Main = () => {
	const todos = useStore(state => state.todos)
	const days = splitTodosIntoDays(todos)
	const dayNames = [
		'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'
	 ]

	return (
		<main>
			<div className="day-view">
				{days.map(day => (
					<Day day={day} key={day.id /* TODO kom på något sätt att ge varje dag en unik "key" */} />
				))}
			</div>

			<hr />

			<PrioList />

		</main>
	)
}

export default Main
