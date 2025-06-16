/// <reference types="cypress" />

describe('us1 : acces page acceuil spec', () => {
    //ici chq cqs de test
    it('tc-us1-01 : acces page d acceuil', () => {
        //fct flechee
        cy.visit('https://automationexercise.com/')

        //pr un carousel entier
        cy.get('#slider-carousel > .carousel-inner')
            //.should('have.class', 'carousel-inner')
            .should('be.visible')

        //pr un produit
        cy.get('.features_items > :nth-child(3) > .product-image-wrapper')
            .should('be.visible')



    })
    it('tc-us01 : register user', () => {
        cy.visit('https://automationexercise.com/')
        //home page visible
        cy.get('body')
            .should('be.visible')
        //clic signup button
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

        //verify that 'New User Signup!' is visible
        cy.contains('New User Signup!').should('be.visible');

        //enter name 'user-test' and 'user-test@mail.com'
        cy.get('[data-qa="signup-name"]').type('user-test');
        cy.get('[data-qa="signup-email"]').type('user-test@mail.com');

        //click signup button
        cy.get('[data-qa="signup-button"]').click()

        /*==== End Cypress Studio ====*/
    })
})

