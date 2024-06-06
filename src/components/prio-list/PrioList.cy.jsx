import React from 'react'
import PrioList from './PrioList'
import { useStore } from '../../data/store'

describe('<PrioList />', () => {
  beforeEach(() => {
    cy.mount(<PrioList />)
  })
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PrioList />)
  })
  it('filters based on serach "distans" ', () => {
    const todos = useStore.getState().todos
    cy.get('input').type('distans')
    todos.filter(t => t.text.toLowerCase().includes('distans'.toLowerCase())).forEach(t => {
      cy.contains(t.text).should('be.visible')
    })
  })
  it('filters based on serach "repetera" ', () => {
    const todos = useStore.getState().todos
    cy.get('input').type('repetera')
    todos.filter(t => t.text.toLowerCase().includes('repetera'.toLowerCase())).forEach(t => {
      cy.contains(t.text).should('be.visible')
    })
  })
  it('shows only todos marked as not done when searching "lektion" ', () => {
    const todos = useStore.getState().todos
    cy.get('input').type('lektion')
    todos.filter(t => !t.done && t.text.toLowerCase().includes('lektion'.toLowerCase())).forEach(t => {
      cy.contains(t.text).should('be.visible')
    })
    todos.filter(t => t.done && t.text.toLowerCase().includes('lektion'.toLowerCase())).forEach(t => {
      cy.contains(t.text).should('not.exist')
    })
  })
})