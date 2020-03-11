/// <reference types="cypress" />

const { Element } = require("./Element");

class ReactAutocomplete extends Element {
    constructor(locator) {
        super(locator);
    }
    
    get input() {
        return this.element.find('input');
    }

    get list() {
        return this.element.find('ul.p-autocomplete-items');
    }

    get button() {
        return this.element.find('button');
    }

    get value() {
        cy.log('Get autocomplete value');        
        return this.input.then( el => el.val() ); // return this.input.invoke('val'); // - alternative command to get value
    }

    isExpanded() {
        return this.list.should('be.visible');        
    }

    type(text) {
        cy.log('Type text into autocomplete: ' + text);
        return this.input.type(text);
    }

    select(val) {
        cy.log('Select value from the list: ' + val);
        return this.list.contains(val).click();        
    }

    expand() {
        return this.button.click().wait(1000).click();                
    }

    collapse() {
        return this.input.type('{esc}');
    }
}


exports.ReactAutocomplete = ReactAutocomplete;