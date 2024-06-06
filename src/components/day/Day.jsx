import React from 'react' 
import Item from "./Item"
import { useState } from 'react'
import { useStore } from '../../data/store.js'

const Day = ({ day, todosByDay }) => {
	const [items, setItems] = useState(day)
	const addTodo = useStore(state => state.addTodo)
	const addNewItem = () => {
		const newText = prompt('Ange info för uppgiften', '')
		const newItem = {
			id: items.length + 1,
			day: day,
			text: newText,
			done: false,
			late: false
		}
		if (newText != null) {
			addTodo(newItem)
		} else {
			return;
		} 
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