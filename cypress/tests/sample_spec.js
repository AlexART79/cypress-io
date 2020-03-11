/// <reference types="cypress" />

const { AutocompletePage } = require('../pages/AutocompletePage')


describe('AutoComplete control tests', () => {
    let acpage;
    
    beforeEach(()=>{
        acpage = new AutocompletePage();
        acpage.open();
    });

    it('Autocomplete demos page load test', () => {                
        acpage.header.text.should('eq', 'AutoComplete');
    });

    it('Basic autocomplte type and select test', () => {                
        let ac = acpage.basicAc;

        ac.type('Uni');
        ac.list.should('be.visible');
                    
        ac.select('United States');       
        ac.value.should('eq', 'United States');           
    });
    
    it('Advanced AC expand/collapse test', () => {
        let ac = acpage.advancedAc;

        // expand element
        ac.expand();
        ac.list.should('be.visible');        
        ac.list.should('have.class', 'p-input-overlay-visible')

        ac.collapse();
        ac.list.should('not.be.visible');
        ac.list.should('not.have.class', 'p-input-overlay-visible')
    });

    it('Advanced AC select value test', () => {
        let ac = acpage.advancedAc;

        ac.expand();
        ac.select('Audi');
        ac.list.should('not.be.visible');

        ac.value.should('eq', 'Audi');           
    });
})