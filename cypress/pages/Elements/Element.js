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
}


exports.Element = Element;
