import PrioItem from "./PrioItem"
import { useStore } from '../../data/store.js'
import { useState } from 'react'

const PrioList = () => {
	const todos = useStore(state => state.todos)
	const [search, setSearch] = useState('')
	const items = todos.filter(t => !t.done && t.text.toLowerCase().includes(search.toLowerCase()))

	const searchHandler = e => {
		setSearch(e.target.value)
	}

	return (
		<div className="prio-list">
			<h2> Vad ska jag göra nu? </h2>
			<div className="list-container">
				<input type="search" placeholder="Filtrera uppgifter" value={search} onChange={searchHandler} />

				<div className="prio-items">
					{items.map((item, index) => (
						<PrioItem key={item.id} item={item} num={index+1} />
					))}
				</div>

			</div>
		</div>
	)
}
export default PrioList
