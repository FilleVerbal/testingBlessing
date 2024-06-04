import Item from "./Item"
import { useState } from 'react'
import { useStore } from '../../data/store.js'

// OBS, det är tillåtet att lägga till flera props
// När du testar, rendera komponenten med olika värden på props
const Day = ({ day, todosByDay }) => {
	// TODO: implement rest of week
	const [items, setItems] = useState(day)
	const setTodos = useStore(state => state.setTodos)
	const addNewItem = () => {
		const newItem = {
			id: items.length + 1,
			day: '',
			text: 'Ny uppgift',
			done: false,
			late: false
		}
		setItems([...items, newItem])		
	}

	return (
		<div className="day">
			
			<h2> {day} </h2>	
				{todosByDay[day].map((todo) => (		
					<Item key={todo.id} item={todo} />
				))}

			<div className="controls">
				<button onClick={addNewItem} > Ny uppgift </button>
			</div>
		</div>
	)
}
export default Day