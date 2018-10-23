"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class NewVetPage {
    constructor() {
        //elements
        this.firstNameVet = protractor_1.$("#firstName"); //  # cauta dupa ID-ul din CSS
        this.lastNameVet = protractor_1.$("#lastName");
        this.type = protractor_1.$("#specialties");
        this.speciality = protractor_1.$(".ng-dirty > option:nth-child(1)"); // . - cauta dupa clasa din CSS
        this.saveButon = protractor_1.$(".btn.btn-default:nth-child(3)");
    }
    //methods
    addVetInfo(firstName, lastName) {
        this.firstNameVet.sendKeys(firstName);
        this.lastNameVet.sendKeys(lastName);
    }
    clickSaveButton() {
        this.saveButon.click();
    }
}
exports.NewVetPage = NewVetPage;
