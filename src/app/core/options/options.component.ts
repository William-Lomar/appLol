import { Component } from "@angular/core";
import { OptionsInterface } from "src/app/interfaces/options.interface";
import { LolService } from "src/app/services/lol.service";


@Component({
    templateUrl:'./options.component.html'
})
export class OptionsComponent{
    options:OptionsInterface = {
        top:[],
        mid:[],
        adc:[],
        sup:[],
        jg:[]
    }


    opcoesCampeoes = ['irelia','veigar','mundo'];

    constructor(private lolService:LolService){}

    atualizarOptions(e:any){
        console.log('Atualizando preferencias');
    }

}