/// <reference types="cypress" />

const { Element } = require("./Elements/Element");

class BasePage {
    constructor(url) {
        this.url = url;
    }
    open() {
        console.log('Open URL: ' + this.url);
        cy.visit(this.url);
    }

    get header() {
        return new Element('.feature-intro h1');
    }
}

exports.BasePage = BasePage;
