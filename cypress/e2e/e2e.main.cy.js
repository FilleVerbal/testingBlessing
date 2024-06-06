

describe('US1 gets to the site', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
  })
})
describe('US1 displays the weekdayss neet and tidy', () => {
  it('should display the different days', () => {
    cy.visit('http://localhost:5173')
    cy.get('.day-view > div').should('have.length', 7)
    cy.get('.day-view').should('contain', 'Måndag')
    cy.get('.day-view').should('contain', 'Torsdag')
    cy.get('.day-view').should('contain', 'Söndag')
  })
})

describe('US2 deletes the todo when the delete button gets clicked', () => {
  it('deletes the todo making it nonexistent for "Onsdag"', () => {
    cy.visit('http://localhost:5173')
    cy.contains('h2', 'Onsdag').parent('.day').find('.delete').click()
    cy.contains('h2', 'Onsdag').parent('.day').find('.item').should('not.exist')
  })
  it('deletes just one todo when there are more todos for "Torsdag"', () => {
    cy.visit('http://localhost:5173')
    cy.contains('h2', 'Torsdag').parent('.day').children('.item').eq(1).find('.delete').click();
    cy.contains('h2', 'Torsdag').parent('.day').children('.item').should('have.length', 1)
  })
  it('should not have any delete buttons if there are no items for "Fredag"', () => {
    cy.visit('http://localhost:5173')
    cy.contains('h2', 'Fredag').parent('.day').find('.delete').should('not.exist')
  })
})

describe('US3 updates todo correctly after user interaction', () => {
  it('updates the text in a todo item with "kakans dag" for "Onsdag"', () => {
    cy.visit('http://localhost:5173')
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('kakans dag')
    })
    cy.contains('h2', 'Onsdag').parent('.day').find('.change').click()
    cy.contains('h2', 'Onsdag').parent('.day').find('label').should('contain.text', 'kakans dag')
  })
  it('updates the text on the correct todo item when there are more with "sämst på test" for "Torsdag"', () => {
    cy.visit('http://localhost:5173')
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('sämst på test')
    })
    cy.contains('h2', 'Torsdag').parent('.day').find('.change').eq(1).click()
    cy.contains('h2', 'Torsdag').parent('.day').find('label').eq(1).should('contain.text', 'sämst på test')
  })
  it('doesnt update anything when user cancels after clicking change for "Torsdag"', () => {
    cy.visit('http://localhost:5173')
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(null)
    })
    cy.contains('h2', 'Torsdag').parent('.day').find('.change').eq(1).click()
    cy.contains('h2', 'Torsdag').parent('.day').find('label').eq(1).should('contain.text', 'Distanslektion 9-16')
  })
})

describe('US4 searchinput works as intended displaying only items marked as not done', () => {
  it('shows only "Repetera lektionen" when user input is "repetera', () => {
    cy.visit('http://localhost:5173')
    cy.get('input[type="search"]').type('repetera')
    cy.get('.prio-items').should('have.length', 1)
    cy.get('.prio-items').should('contain', 'Repetera lektionen')
  })
  it('shows all items in prio-list if user clicks "Starta om vecka"', () => {
    cy.visit('http://localhost:5173')
    cy.get('.restart-week').click()
    cy.get('.prio-items').children('.item').should('have.length', 6)
  })
  it('shows three items if the user clicks "Starta om veckan" and then types "lek" in the search', () => {
    cy.visit('http://localhost:5173')
    cy.get('.restart-week').click()
    cy.get('input[type="search"]').type('lek')
    cy.get('.prio-items').children('.item').should('have.length', 3)
  })
})