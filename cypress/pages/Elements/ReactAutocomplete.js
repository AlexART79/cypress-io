const { Element } = require("./Element");

class ReactAutocomplete extends Element {
    constructor(locator) {
        super(locator);
    }
    
    get input() {
        return this.Element.find('input');
    }

    get list() {
        return this.Element.find('.p-autocomplete-items');
    }

    get button() {
        return this.Element.find('button');
    }

    get value() {
        console.log('Get autocomplete value');
        return this.input.invoke('val');
    }

    get isExpanded() {
    }

    type(text) {
        console.log('Type text into autocomplete: ' + text);
        return this.input.type(text);
    }

    select(val) {
        console.log('Select value from the list: ' + val);
        return this.list.within(() => {
            cy.contains(val).click();
        });
    }

    expand() {
        return this.button.click().then(() => {
            return (async () => {
                await cy.sleep(1000);
            })().then(() => {
                return this.button.click();
            });
        });
    }
}


exports.ReactAutocomplete = ReactAutocomplete;