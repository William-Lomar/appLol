import { Component } from "@angular/core";
import { LolService } from "src/app/services/lol.service";


@Component({
    templateUrl:"./home.component.html",
    styleUrls:['./home.component.css']
})
export class HomeComponent{
    constructor(
        private lolService:LolService
    ){}

    dataSource!:any;
    rotaSelecionanda!: any;
    campeoesEscolhidos !: any;
    oponente !: any;
    eloSelecionado !: any;

    matchup = {
        campeoes: '',
        oponente: '',
        rota: '',
        elo:''
    }

    opcoesCampeoes = ['irelia','veigar','mundo'];

    rotas = ['TOP','MID','ADC','SUP','JUNGLER'];

    elos = ['Ferro','Bronze','Prata','Ouro'];

    encontrarMatchup(e:any){
        console.log("Enviando form!");
    }
}