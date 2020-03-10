
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

class ReactAutocomplete {
    constructor(locator) {
        this.locator = locator
    }

    get Element() {
        return cy.get(this.locator); 
    }

    get input() {
        return this.Element.find('input')
    }

    get list() {
        return this.Element.find('.p-autocomplete-items')
    }

    get button() {
        return this.Element.find('button')
    }

    get value (){
        console.log('Get autocomplete value');
        return this.input.invoke('val');
    }

    get isExpanded(){
        
    }

    type(text) {
        console.log('Type text into autocomplete: ' + text);
        return this.input.type(text);
    }

    select(val) {
        console.log('Select value from the list: ' + val);

        return this.list.within(()=> {
            cy.contains(val).click();
        })
    }

    expand(){
        return this.button.click().then(() => {
            return (async () => {
                    await sleep(1000)
                })().then(() => {
                    return this.button.click();
                });
        });
    }

    // collapse(){
    //     return this.input.SendKeys(Key.ESC);
    // }
}


class AcPage {
    constructor(){
        this.url = 'https://www.primefaces.org/primereact/showcase/#/'
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




describe('First cypress test', () => {
    let acpage;

    beforeEach(()=>{
        acpage = new AcPage();
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