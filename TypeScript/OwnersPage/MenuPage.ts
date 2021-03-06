import {$$, by, element} from "protractor";

export class MenuPage {
    //elements
    menuItems = element.all(by.css(".nav.navbar-nav li a"));
    homeButton = this.menuItems.get(0);
    ownersButton = this.menuItems.get(1);
    veterinariansButton = this.menuItems.get(4);
    petTypeButton = this.menuItems.get(7);
    specialitiesButton = this.menuItems.get(8);
    addNewOwnerButton = this.menuItems.get(3);
    allOwnerButton = this.menuItems.get(2);
    addNewVetButton = this.menuItems.get(6);
    allVetButton = this.menuItems.get(5)


    //methods

    clickOwnersButton(): void {
        this.ownersButton.click();
    }

    clickAddNewOwnerButton(): void {
        this.addNewOwnerButton.click();
    }

    clickAllOwnersButton(): void {
        this.allOwnerButton.click();
    }

    clickVetsButton(): void {
        this.veterinariansButton.click();
    }

    clickAddNewVetButton(): void {
        this.addNewVetButton.click();
    }

    clickAllVetButton(): void {
        this.allVetButton.click();
    }
}

