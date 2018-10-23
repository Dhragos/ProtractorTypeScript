import {$, $$} from "protractor";

export class NewVetPage {
    //elements
    firstNameVet = $("#firstName");         //  # cauta dupa ID-ul din CSS
    lastNameVet = $("#lastName");
    type = $("#specialties");
    speciality = $(".ng-dirty > option:nth-child(1)")          // . - cauta dupa clasa din CSS
    saveButon = $(".btn.btn-default:nth-child(3)")

    //methods

    addVetInfo (firstName: string, lastName: string) {

        this.firstNameVet.sendKeys(firstName);
        this.lastNameVet.sendKeys(lastName);

    }
    clickSaveButton() {
        this.saveButon.click();
    }
}
