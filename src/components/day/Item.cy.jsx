import React from 'react'
import Item from './Item'

describe('<Item />', () => {
  it('renders', () => {
    const item = {id: 1, day: 'Måndag', text: 'Testing', done: false, late: false}
    cy.mount(<Item item={item} />)
  })
  it('toggles todo when checkbox is checked or unchecked', () => {
    const item = {id: 1, day: 'Måndag', text: 'Testing', done: false, late: false}
    cy.mount(<Item item={item} />)
    cy.get('input[type="checkbox"]').click()
  })
  it('updates the info text of todo when edit is clicked with "lala"', () => {
    const item = {id: 1, day: 'Måndag', text: 'Testing', done: false, late: false}
    cy.mount(<Item item={item} />)
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('lala')
    })
    cy.get('.change').click()
  })
})