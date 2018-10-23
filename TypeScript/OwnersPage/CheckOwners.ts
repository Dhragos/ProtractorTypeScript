import {$$} from "protractor";

export class CheckOwners {
    ownersFullName = $$(".ownerFullName")            //&& find class "ownerFullName" (by CSS)

    checkOwnerPresent(Name) {          //metoda

        return this.ownersFullName.getText().then(message => {  //getText- un promise
            return message.includes(Name);                        //then - rezolva promisul
        });
    }                                                                 //  returneaza returneaza rezolvarea si are conditia sa includa numele (parametru)
}
