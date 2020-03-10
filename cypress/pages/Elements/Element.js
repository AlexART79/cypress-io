
class Element {
    constructor(locator) {
        this.locator = locator;
    }

    get Element() {
        return cy.get(this.locator);
    }
}


exports.Element = Element;
