import {$$} from "protractor";

export class CheckVeterinarians {
    vetFullName = $$(".table-striped tr> td:nth-child(1)")                              //&& find class "ownerFullName" (by CSS)

    checkVetPresent(Name) {                                             //metoda

return this.vetFullName.getText().then(message => {     //getText- un promise
    return message.includes(Name);                               //then - rezolva promisul
});
}                                                                   //  returneaza returneaza rezolvarea si are conditia sa includa numele (parametru)
}
