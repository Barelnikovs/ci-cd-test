describe('Home page', () => {
  it('Should open home page', () => {
    cy.visit('/')
    cy.contains('Vite')
  })
})
