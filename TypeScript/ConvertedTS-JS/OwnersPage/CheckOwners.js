"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CheckOwners {
    constructor() {
        this.ownersFullName = protractor_1.$$(".ownerFullName"); //&& find class "ownerFullName" (by CSS)
    }
    checkOwnerPresent(Name) {
        return this.ownersFullName.getText().then(message => {
            return message.includes(Name); //then - rezolva promisul
        });
    } //  returneaza returneaza rezolvarea si are conditia sa includa numele (parametru)
}
exports.CheckOwners = CheckOwners;
