import React from 'react'
import Day from './Day'
import { useStore } from '../../data/store'

// Även här så förstår jag inte hur det funkar med andra testet men inte första iom 
// att bägge är exakt samma test och ui uppdaterar som det ska!!

describe('<Day />', () => {
  it('renders the right day and allows addage of todos does only work the second time for some reason unknown', () => {
    // see: https://on.cypress.io/mounting-react
    const todos = useStore.getState().todos
    const addTodo = useStore.getState().addTodo
    const dayNames = [
      'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'
    ]
    const todosByDay = {}
    dayNames.forEach((weekday) => {
      todosByDay[weekday] = todos.filter((day) => day.day === weekday);
      })
    cy.mount(<Day day="Onsdag" todosByDay={todosByDay} />)
    todos.filter(t => t.day === 'Onsdag').forEach(t => {
      cy.contains(t.text).should('be.visible')
    })
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Färdigställa testningen')
    })
    cy.get('.controls button').contains('Ny uppgift').click()
    cy.then(() => {
      addTodo({
        id: todos.length + 1,
        day: 'Onsdag',
        text: 'Färdigställa testningen',
        done: false,
        late: false
      })
    })
    cy.get('.day').find('label').should('contain.text', 'Färdigställa testningen')
  })
})

describe('<Day />', () => {
  it('renders the right day and allows addage of todos and now it comes back green', () => {
    // see: https://on.cypress.io/mounting-react
    const todos = useStore.getState().todos
    const addTodo = useStore.getState().addTodo
    const dayNames = [
      'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'
    ]
    const todosByDay = {}
    dayNames.forEach((weekday) => {
      todosByDay[weekday] = todos.filter((day) => day.day === weekday);
      })
    cy.mount(<Day day="Onsdag" todosByDay={todosByDay} />)
    todos.filter(t => t.day === 'Onsdag').forEach(t => {
      cy.contains(t.text).should('be.visible')
    })
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Färdigställa testningen')
    })
    cy.get('.controls button').contains('Ny uppgift').click()
    cy.then(() => {
      addTodo({
        id: todos.length + 1,
        day: 'Onsdag',
        text: 'Färdigställa testningen',
        done: false,
        late: false
      })
    })
    cy.get('.day').find('label').should('contain.text', 'Färdigställa testningen')
  })
})

// describe('<Day />', () => {
//   it('renders the right day and allows addage of todos', () => {
//     // see: https://on.cypress.io/mounting-react
//     const todos = useStore.getState().todos
//     const addTodo = useStore.getState().addTodo
//     const dayNames = [
//       'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'
//     ]
//     const todosByDay = {}
//     dayNames.forEach((weekday) => {
//       todosByDay[weekday] = todos.filter((day) => day.day === weekday);
//       })
//     cy.mount(<Day day="Onsdag" todosByDay={todosByDay} />)
//     todos.filter(t => t.day === 'Onsdag').forEach(t => {
//       cy.contains(t.text).should('be.visible')
//     })
//     cy.window().then((win) => {
//       cy.stub(win, 'prompt').returns('Färdigställa testningen')
//     })
//     cy.get('button').contains('Ny uppgift').click()
//     cy.then(() => {
//       addTodo({
//         id: todos.length + 1,
//         day: 'Onsdag',
//         text: 'Färdigställa testningen',
//         done: false,
//         late: false
//       })

//     })
//     cy.contains('Färdigställa testningen').should('be.visible')
//   })
// })


