import Item from "./Item"
import { useState } from 'react'

// OBS, det är tillåtet att lägga till flera props
// När du testar, rendera komponenten med olika värden på props
const Day = ({ day }) => {
	// TODO: implement rest of week
	console.log(day.map(day => day.day));
	const [items, setItems] = useState(day)
//  console.log(items);
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
	const dayName = [...new Set(day.map(day => day.day))]

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
