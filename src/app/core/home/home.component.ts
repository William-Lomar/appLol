import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
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
export class HomeComponent implements OnInit{
    constructor(
        private lolService:LolService,
        private router:Router
    ){}


    matchup:MatchupInterface = {
        campeoes: [],
        oponente: {nome:'',img:''},
        rota: '',
        elo:''
    }

    rotaImg:string = '';

    eloImg:string = '';

    opcoesCampeoes!:CampeoesInterface[];

    rotas:Array<RotaInterface> = this.lolService.getRotas();

    elos:Array<EloInterface> = this.lolService.getElos();

    ngOnInit(){
        this.getCampeoes();
    }

    atualizarImgRota(){
        this.rotaImg = this.lolService.getRotaImg(this.matchup.rota);
    }

    atualizarImgElo(){
        this.eloImg = this.lolService.getEloImg(this.matchup.elo);
    }
    
    encontrarMatchup(e:any){
        this.lolService.atualizarMatchup(this.matchup);
        this.router.navigate(['/results']);
    }

    getCampeoes(){
        this.lolService.getCampeoesBackEnd().subscribe({
            next:(results)=>{
                this.opcoesCampeoes = results
            },error:(erro)=>{
                console.log(erro)
            }
        });
    }

}