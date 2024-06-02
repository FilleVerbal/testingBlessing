import { test, it, expect, describe } from 'vitest'
import { splitTodosIntoDays } from './list'

it('filter todos for monday "må" ', () => {
    const todos = [{ day: 'må', task: 'Task 1' }, { day: 'ti', task: 'Task 2' }];
    const result = splitTodosIntoDays(todos)
    expect(result[0]).toEqual([{ day: 'må', task: 'Task 1' }])
})
it('splits a week of todos into days', () => {
    const todos = [
        { day: 'må', task: 'Task 1' }, 
        { day: 'ti', task: 'Task 2' }, 
        { day: 'on', task: 'Task 3' },
        { day: 'to', task: 'Task 4' },
        { day: 'fr', task: 'Task 5' },
        { day: 'lö', task: 'Task 6' },
        { day: 'sö', task: 'Task 7' }
    ]
    const result = splitTodosIntoDays(todos)
    expect(result.length).toBe(7)
})