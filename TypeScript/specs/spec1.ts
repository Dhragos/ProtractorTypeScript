
import {Utils} from "../utils/utils";
import {MenuPage} from "../OwnersPage/MenuPage";
import {browser} from "protractor";
import {OwnersPage} from "../OwnersPage/OwnersPage";
import {OwnersData} from "../TestData/OwnersData";
import {CheckOwners} from "../OwnersPage/CheckOwners";
import {NewVetPage} from "../OwnersPage/NewVetPage";
import {VeterinariansData} from "../TestData/VeterinariansData";
import {CheckVeterinarians} from "../OwnersPage/CheckVeterinarian";
let menuPage = new MenuPage();
let ownersPage = new OwnersPage();
let checkOwnersPresent = new CheckOwners();
let newVetPage = new NewVetPage();
let checkVeterinarian = new CheckVeterinarians();


describe("first describe", () => {
    beforeEach(()=> {
        Utils.goToHomePage();
    });

    it("Add a new Owner", () => {
        menuPage.clickOwnersButton();
        browser.sleep(1000);
        menuPage.clickAddNewOwnerButton()
        browser.sleep(2000);

        ownersPage.addInformation(OwnersData.GigelHappyPath.firstName, OwnersData.GigelHappyPath.lastName, OwnersData.GigelHappyPath.address, OwnersData.GigelHappyPath.city, OwnersData.GigelHappyPath.telephone);
        ownersPage.clickOnAddOwnerButton();
        browser.sleep(1000);
    });
});

    it("Add a new owner and check phone validation", () => {
        //Utils.goToHome();
        menuPage.clickOwnersButton();
        browser.sleep(1000);
        menuPage.clickAddNewOwnerButton()
        browser.sleep(1000);

        //ownersPage.addInformation
        ownersPage.addInformation("Gigel", "Ionut", "Bucuresti", "Bucresti", "161631513");
        ownersPage.addTelephone("fvsrss");
        browser.sleep(1000);
        expect(ownersPage.isErrorDisplayed()).toBeTruthy();
        browser.sleep(1000);
        expect(ownersPage.getErrorMessage()).toMatch("Phone number only accept digits");
        browser.sleep(1000);
    });

    // it("Add a new owner - happy path", ()=>{
    //     menuPage.clickOwnersButton();
    //     browser.sleep(1000);
    //     menuPage.clickAddNewOwnerButton();
    //     browser.sleep(1000);
    //     ownersPage.addInformationForOwnerModel(OwnersData.GigelHappyPath);
    //     browser.sleep(1000);
    //     ownersPage.clickOnAddOwnerButton();
    //     browser.sleep(1000);
    // });

    it("Check that new owner was created",()=>{
        menuPage.clickOwnersButton();
        browser.sleep(1000);
        menuPage.clickAllOwnersButton();
        browser.sleep(1000);
        expect(checkOwnersPresent.checkOwnerPresent(OwnersData.GigelHappyPath.firstName + " " + OwnersData.GigelHappyPath.lastName)).toBeTruthy();

    });

    it("Create new veterinarian", ()=>{
        menuPage.clickVetsButton();
        browser.sleep(1000);
        menuPage.clickAddNewVetButton();
        newVetPage.addVetInfo(VeterinariansData.VeterinarNou.firstName, VeterinariansData.VeterinarNou.lastName);
        browser.sleep(1000);
        newVetPage.clickSaveButton();
        browser.sleep(1000);

    });

    it("Check new veterinarian was created", ()=>{
        menuPage.clickVetsButton();
        browser.sleep(1000);
        menuPage.clickAllVetButton()
        browser.sleep(1000);
        expect(checkVeterinarian.checkVetPresent(VeterinariansData.VeterinarNou.firstName + " " + VeterinariansData.VeterinarNou.lastName)).toBeTruthy();

    });


