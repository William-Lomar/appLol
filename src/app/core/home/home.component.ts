import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CampeoesInterface } from "src/app/interfaces/campeoes.interface";
import { EloInterface } from "src/app/interfaces/elo.interface";
import { MatchupInterface } from "src/app/interfaces/matchup.interface";
import { RotaInterface } from "src/app/interfaces/rota.interface";
import { LolService } from "src/app/services/lol.service";


@Component({
    templateUrl:"./home.component.html",
    styleUrls:['./home.component.css']
})
export class HomeComponent{
    constructor(
        private lolService:LolService,
        private router:Router
    ){}

    matchup:MatchupInterface = {
        campeoes: [],
        oponente: '',
        rota: '',
        elo:''
    }

    opcoesCampeoes: Array<CampeoesInterface> = this.lolService.getCampeoes();

    rotas:Array<RotaInterface> = this.lolService.getRotas();

    elos:Array<EloInterface> = this.lolService.getElos();

    encontrarMatchup(e:any){
        this.lolService.atualizarMatchup(this.matchup);
        this.router.navigate(['/results']);
    }

}