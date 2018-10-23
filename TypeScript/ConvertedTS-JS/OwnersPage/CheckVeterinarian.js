"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CheckVeterinarians {
    constructor() {
        this.vetFullName = protractor_1.$$(".table-striped tr> td:nth-child(1)"); //&& find class "ownerFullName" (by CSS)
    }
    checkVetPresent(Name) {
        return this.vetFullName.getText().then(message => {
            return message.includes(Name); //then - rezolva promisul
        });
    } //  returneaza returneaza rezolvarea si are conditia sa includa numele (parametru)
}
exports.CheckVeterinarians = CheckVeterinarians;
