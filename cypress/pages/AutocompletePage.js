const { ReactAutocomplete } = require("./Elements/ReactAutocomplete");

class AutocompletePage {
    constructor() {
        this.url = 'https://www.primefaces.org/primereact/showcase/#/';
    }

    open() {
        console.log('Open URL: ' + this.url);
        cy.visit(this.url);
        cy.get('.layout-sidebar').within(() => {
            cy.contains('AutoComplete').click();
        });
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