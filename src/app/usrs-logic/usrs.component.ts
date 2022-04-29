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
    eml=""
    nmbr=""
  

// String Interpolation
EmailOrPhone="ByEmail"

// PropertyBinding
    btnStts=true
    emailType="Email"
    phoneType="number"
 
    phone="number"
    placeHolder="Enter Email"

// Boolean/not Binded
    sumbitt=false


    // methods
    getUsrNem(){
        this.sumbitt=true

    }
    toPhone_numb(){
       

    }
    revertEmlPhon(){
     

    }


}