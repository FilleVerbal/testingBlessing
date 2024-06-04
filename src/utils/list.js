
// TODO: write unit tests for this function, and finish it
function splitTodosIntoDays(todos) {
	const mo = todos.filter(t => t.day === 'Måndag')
	const tu = todos.filter(t => t.day === 'Tisdag')
	const we = todos.filter(t => t.day === 'Onsdag')
	const th = todos.filter(t => t.day === 'Torsdag')
	const fr = todos.filter(t => t.day === 'Fredag')
	const sa = todos.filter(t => t.day === 'Lördag')
	const su = todos.filter(t => t.day === 'Söndag')

	return [mo, tu, we, th, fr, sa, su]
}

// Tips! Du kan få användning för funktioner som:
// + kopierar en lista och byter plats på två element (snooze)
// + lägger till ett element på en viss plats i en lista
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://www.freecodecamp.org/news/javascript-splice-how-to-use-the-splice-js-array-method/

export { splitTodosIntoDays }
