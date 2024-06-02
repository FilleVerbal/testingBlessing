import Item from "./Item"
import { useState } from 'react'

// OBS, det är tillåtet att lägga till flera props
// När du testar, rendera komponenten med olika värden på props
const Day = ({ day, dayName }) => {
	// TODO: implement rest of week
	const [items, setItems] = useState(day)
	
	const addNewItem = () => {
		const newItem = {
			id: Math.random(),
			text: 'Ny uppgift',
			done: false,
			late: false
		}
		setItems([...items, newItem])
		
	}
	// const dayName = 'Måndag'

	return (
		<div className="day">
			<h2> {dayName} </h2>

			{day.map(item => (
				<Item key={item.id} item={item} />
			))}

			<div className="controls">
				<button onClick={addNewItem} > Ny uppgift </button>
			</div>
		</div>
	)
}

export default Day
