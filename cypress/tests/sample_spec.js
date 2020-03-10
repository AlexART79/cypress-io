const { AutocompletePage } = require('../pages/AutocompletePage')


describe('First cypress test', () => {
    let acpage;

    beforeEach(()=>{
        acpage = new AutocompletePage();
        acpage.open();
    });

    it('Goto Autocomplete demos page', () => {
        
        cy.get('.feature-intro h1').should(($h1) => {
            expect($h1.text()).to.equal('AutoComplete');
        })

    });

    it('Basic autocomplte test', () => {                
        let ac = acpage.basicAc;

        ac.type('Uni');
        ac.list.should('be.visible');
        
            
        ac.select('United States');       
        ac.value.should('eq', 'United States');           
    })

    it('Advanced AC test', () => {
        let ac = acpage.advancedAc;

        ac.expand();
        ac.list.should('be.visible');

        ac.select('Audi');
        ac.list.should('not.be.visible');

        ac.value.should('eq', 'Audi');           
    });
})