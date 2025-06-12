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
})

