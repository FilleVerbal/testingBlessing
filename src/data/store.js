import { create } from "zustand";
import { todos } from './data.js'
import { getToday } from "../utils/date.js";

const useStore = create(set => ({
	todos: todos, 
	todayName: getToday(),
	setTodayName: (day) => set({ todayName: day}),


	toggleTodo: id => set(state => {
		const newTodos = state.todos.map(t => {
			if (t.id === id) {
				return {...t, done: !t.done}
			}
			return t
		})
		return { ...state, todos: newTodos }
	}),
	resetTodos: () => set(state => ({ todos: [] })),
	restartWeeklyTodoos: () => set(state => ({ todos: state.todos.map((t) => ({...t, done: false})) 
	})),
	setTodos: (newTodos) => set({ todos: newTodos }),
	addTodo: (newItem) => set(state => ({
		todos: [...state.todos, { id: state.todos.length + 1, day: newItem.day, text: newItem.text, done: false}]
	})),
	removeTodo: (id) => set(state => ({
		todos: state.todos.filter(t => t.id !== id)
	})),
	updateTodo: (id, newText) => set(state => ({
		todos: state.todos.map(t => (t.id === id ? { ...t, text: newText } : t))
	}))
}))

export { useStore }
