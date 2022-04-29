import { Component } from "@angular/core";

@Component({
    selector: 'usrs-logic',
    templateUrl:'./usrs.component.html',
    styleUrls: ['./usrs.component.css']
})
export class UsrsLogic{
    // LogIN
    userNem=""
    passWrd=""

// String Interpolation
EmailOrPhone="ByEmail"

// PropertyBinding
    btnStts=true
    emlOrPhone="Email"
    placeHolder="Enter Email"

// Boolean/not Binded
    sumbitt=false


    // methods
    getUsrNem(){
        this.sumbitt=true

    }
    toPhone_numb(){
        this.EmailOrPhone="ByPhone"
        this.emlOrPhone="number"
        this.placeHolder="EnterPhoneNumber"

    }
    revertEmlPhon(){
        this.emlOrPhone="Email"
        this.placeHolder="Enter Email"

    }


}