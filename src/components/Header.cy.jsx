import React from 'react'
import Header from './Header'
import { useStore } from '../data/store'

// Det här fungerar inte trots att jag tycker att logiken ändå är på plats

describe('<Header />', () => {
  it('resets the all weeks todos to not done', () => {
    const todos = useStore.getState().todos
    cy.mount(<Header />)
    cy.get('.restart-week').click()
    todos.forEach((todo) => {
      expect(todo.done).to.be.false
    })    
  })
})