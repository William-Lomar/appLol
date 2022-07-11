import { Component } from "@angular/core";


@Component({
    templateUrl:'./login.component.html',
    styleUrls:['./login.component.css']
})
export class LoginComponent{
    
    dadosUser = {
        nome:'',
        senha:''
    }

    buttonOptions: any = {
        text: 'Logar',
        type: 'normal',
        useSubmitBehavior: true
    };

    logar(e:Event){
        console.log("tentando logar")
        console.log(this.dadosUser)
        e.preventDefault()
    }
}