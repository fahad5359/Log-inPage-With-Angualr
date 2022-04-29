import { Component } from "@angular/core";

@Component({
    selector: 'usrs-logic',
    templateUrl: './usrs.component.html',
    styleUrls: ['./usrs.component.css']
})
export class UsrsLogic {
    // LogIN
    userNem = ""
    passWrd = ""
    eml = ""
    nmbr = ""


    //Array
    usrsArray=["fahad"]; 

    // String Interpolation
    EmailOrPhone = "ByEmail"

    // PropertyBinding
    btnStts = true
    emailType = "Email"
    phoneType = "number"

    phone = "number"
    placeHolder = "Enter Email"

    // Boolean/not Binded
    sumbitt = false
    bool_eml = false
    bool_phne = false


    // methods
    getUsrNem() {
        this.sumbitt = true
        this.usrsArray.push(this.userNem)

    }
    // to get the the phone nuber only
    toPhone_numb() {
        if (this.bool_eml = true) {
            this.bool_phne = false

        }

    }
    // to get the the Email only
    revertEmlPhon() {
        if (this.bool_phne = true) {
            this.bool_eml = false

        }



    }


}