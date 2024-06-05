import { useStore } from '../data/store.js'

const Header = () => {
	const restartWeek = useStore(state => state.restartWeeklyTodoos)

	const handleRestart = () => {
		restartWeek()
	}
	return (
		<header>
			<h1> Min vecka </h1>
			<button className="restart-week" onClick={handleRestart}> Starta om vecka </button>
		</header>

	)
}
	



export default Header
