/// <reference types="cypress" />

const { BasePage } = require("./BasePage");
const { ReactAutocomplete } = require("./Elements/ReactAutocomplete");


class AutocompletePage extends BasePage {
    constructor() {
        super('https://www.primefaces.org/primereact/showcase/#/')
    }

    open() {
        super.open();        
        cy.get('.layout-sidebar').contains('AutoComplete').click();        
    }

    get basicAc() {
        console.log('Get basic AC');
        return new ReactAutocomplete('.p-autocomplete:first');
    }
    
    get advancedAc() {
        console.log('Get advanced AC');
        return new ReactAutocomplete('.p-autocomplete:eq(1)');
    }
}


exports.AutocompletePage = AutocompletePage;