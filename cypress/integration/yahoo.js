context('yahoo print links script', () => {
  beforeEach(() => {
    cy.visit('https://www.yahoo.com/')
  })

  it('prink links', () => {

    const filePath = 'result.txt'
    let contents = [];
      cy.contains('More...').then(() => {
      cy.get('#ybar-navigation a').each(($el) => {
        const linkText = $el.text()
        cy.task('log',linkText)
        contents.push(linkText)
      })
      cy.writeFile(filePath, contents.join(', '))
    })
   
  })
})