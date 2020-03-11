/// <reference types="cypress" />

class Element {
    constructor(locator) {
        this.locator = locator;
    }

    get element() {
        return cy.get(this.locator);
    }

    get text() {
        return this.element.then( e => e.text() );        
    }

    get value() {
        return this.element.then( e => e.val() );        
    }
}


exports.Element = Element;
