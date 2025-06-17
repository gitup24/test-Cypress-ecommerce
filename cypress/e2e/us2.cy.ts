describe('us1 : acces page acceuil spec', () => {
    it('tc-us1-01 : acces page d acceuil', () => {
        cy.visit('https://automationexercise.com/')
        //home page visible
        cy.get('body')
            .should('be.visible')
         //SUBSCRIPTION visible
        cy.get('.single-widget > h2')
        cy.contains('Subscription').should('be.visible');

        //Click on arrow at bottom right side to move downward
        cy.get('#slider-carousel > .right > .fa').click();

        //verify that page is scrolled up and 'ull-Fledged practice website for Automation Engineers' text is visible
        cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');
    })
})