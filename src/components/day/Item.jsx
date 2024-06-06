import { useStore } from "../../data/store.js"

const Item = ({ item }) => {
	const toggleTodo = useStore(state => state.toggleTodo)
	const updateTodo = useStore(state => state.updateTodo)
	const removeTodo = useStore(state => state.removeTodo)
	let itemClass = `item ${item.done ? 'done' : ''} ${item.late ? 'due' : ''}`

	const handleToggleDone = () => {
		toggleTodo(item.id)
	}
	const handleEditItem = () => {
		const newText = prompt('Ange ny info för uppgiften', item.text)
		if (newText) {
			updateTodo(item.id, newText)
		}
	}
	const handleDeleteItem = () => {
		removeTodo(item.id)
	}

	return (
		<div className="item">
			<input type="checkbox" checked={item.done} onChange={handleToggleDone} />
			<label className={itemClass} onClick={handleToggleDone}>
				{item.text}
			</label>
			<button className="change" title="Ändra" onClick={handleEditItem}>✍️</button>
			<button className="delete" title="Ta bort" onClick={handleDeleteItem}>🗑️</button>
		</div>
	)
}

export default Item
