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
        cy.get('[data-qa="signup-name"]').type('user12-test');
        cy.get('[data-qa="signup-email"]').type('user12-test@mail.com');

        //click signup button
        cy.get('[data-qa="signup-button"]').click()

        // verify that 'ENTER ACCOUNT INFORMATION' is present


        // Vérifier que 'ENTER ACCOUNT INFORMATION' est présent

        cy.get('b').should('be.visible');
        //cy.contains('Enter Account Information').should('be.visible');

        //select sign up for news letter
        cy.get('#newsletter').click();

        //select 'Receive special offers from our partners!'
        cy.get('#optin').click();


        //Fill in
        //Title
        cy.get('#id_gender1').click();
        //Name
        cy.get('[data-qa="name"]').type('name12-test');
        //Email
        //cy.get('[data-qa="email"]').type('user-test@mail.com');
        //Password
        cy.get('[data-qa="password"]').type('*Password0');
        //Date of birth
        cy.get('[data-qa="days"]').type('1');
        cy.get('[data-qa="months"]').type('1');
        cy.get('[data-qa="years"]').type('2010');

        //Fill details:
        //First name
        cy.get('[data-qa="first_name"]').type('FirstName-test');
        //Last name
        cy.get('[data-qa="last_name"]').type('LastName-test');

        //Company
        cy.get('[data-qa="company"]').type('Company-test');

        //Address
        cy.get('[data-qa="address"]').type('Address-test');
        //Address2
        cy.get('[data-qa="address2"]').type('Address2-test');
        //Country
        cy.get('[data-qa="country"]').type('country-test');
        //State
        cy.get('[data-qa="state"]').type('state-test');
        //City
        cy.get('[data-qa="city"]').type('city-tast');
        //Zipcode
        cy.get('[data-qa="zipcode"]').type('12345');
        //Mobile Number
        cy.get('[data-qa="mobile_number"]').type('1234567');

        //Click 'Create Account button'

        cy.get('[data-qa="create-account"]').click();

        //Verify that 'ACCOUNT CREATED!' is visible
        cy.contains('Account Created').should('be.visible');

        //click button Continue
        cy.get('[data-qa="continue-button"]').click()

        //Verify that 'Logged in as' is visible
        cy.contains('Logged in as').should('be.visible');

        //click 'Delete Account' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()

        //Verify that 'ACCOUNT DELETED!' is visible

        cy.contains('Account Deleted').should('be.visible');

















        /*==== End Cypress Studio ====*/
    })
})

