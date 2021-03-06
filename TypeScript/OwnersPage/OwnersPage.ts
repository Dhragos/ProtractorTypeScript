import {$, browser, by, element} from "protractor";
import {OwnersModel} from "../models/OwnersModel";

export class OwnersPage {
    //elements
    firstNameField = $("#firstName");
    lastNameField = $("#lastName");
    addressField = $("#address");
    cityField  = $("#city");
    telephoneField = $("#telephone");
    errorMessage = $(".help-block");
    addOwnerButton = $("[type=submit]")


    //methods
    addInformation (firstName: string, lastName: string, address: string, city: string, telephone: string){
        this.firstNameField.sendKeys(firstName);
        this.lastNameField.sendKeys(lastName);
        this.addressField.sendKeys(address);
        this.cityField.sendKeys(city);
        this.telephoneField.sendKeys(telephone);
    }

    addInformationForOwnerModel(owner: OwnersModel){

    this.firstNameField.sendKeys(owner.firstName);
    this.lastNameField.sendKeys(owner.lastName);
    this.addressField.sendKeys(owner.address);
    this.cityField.sendKeys(owner.city);
    this.telephoneField.sendKeys(owner.telephone);
    }

    addTelephone(telephone:string){
        this.telephoneField.clear();
        this.telephoneField.sendKeys(telephone);
    }

    isErrorDisplayed() {
        var EC = browser.ExpectedConditions;
        return EC.presenceOf(this.errorMessage);
    }

    getErrorMessage() {
        return this.errorMessage.getText().then(message => {
            return message;
        });
    }
    clickOnAddOwnerButton(): void {
        this.addOwnerButton.click();
    }
}

