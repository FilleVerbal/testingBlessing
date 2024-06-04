
const PrioItem = ({ item, num }) => {
	let itemClass = `item ${item.late ? 'due' : ''}`

	return (
		<div className={itemClass}>
			{num}. {item.text}
		</div>
	)
}
export default PrioItem
