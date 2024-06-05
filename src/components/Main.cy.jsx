import React from 'react'
import Main from './Main'

describe('<Main />', () => {
  beforeEach(() => {
    cy.mount(<Main />)
  })
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Main />)
  })
  it('renders the whole week nice and tidy with priolist', () => {
    const dayNames = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag']
    dayNames.forEach(day => {
      cy.contains(day).should('be.visible')
    })
    cy.get('.day-view').children().should('have.length', dayNames.length)
    cy.get('.prio-list').should('exist')
  })
})