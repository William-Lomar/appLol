import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { CampeoesInterface } from "../interfaces/campeoes.interface";
import { EloInterface } from "../interfaces/elo.interface";
import { MatchupInterface } from "../interfaces/matchup.interface";
import { ResultMatchupInterface } from "../interfaces/resultMatchup.interface";
import { RotaInterface } from "../interfaces/rota.interface";


@Injectable({
    providedIn:'root'
})
export class LolService implements OnInit{

    // https://developer.riotgames.com/docs/portal -> API oficial de League of Legends
 
    // Chave de API deve ser recriada dia a dia através do link:https://developer.riotgames.com/
    // Chave atual: RGAPI-e56afd4c-eb4c-4668-8e4e-d185c6599a4e -> Sempre atualizar no config.js

    rotas : RotaInterface[] = [
        {
            rota:'top',img:"/assets/rotas/top.png",nome:'TOP'
        },{
            rota:'middle',img:"/assets/rotas/mid.png",nome:'MID'
        },{
            rota:"adc",img:'/assets/rotas/adc.png',nome:"ADC"
        },{
            rota:"support",img:"/assets/rotas/sup.png",nome:'SUP'
        },{
            rota:"jungle",img:'/assets/rotas/jungler.png',nome:"JUNGLER"
        }
    ]

    elos : EloInterface[] = [
        {
            elo:'iron',img:'/assets/emblemas/ferro.png',nome:'Ferro'
        },{
            elo:"bronze",img:'/assets/emblemas/bronze.png',nome:'Bronze'
        },{
            elo:'silver',img:'/assets/emblemas/prata.png',nome:'Prata'
        },{
            elo:'gold',img:'/assets/emblemas/ouro.png',nome:'Ouro'
        },{
           elo:'platina',img:'/assets/emblemas/platina.png',nome:'Platina' 
        },{
            elo:"diamond",img:'/assets/emblemas/diamante.png',nome:'Diamante'
        },{
            elo:'master',img:'/assets/emblemas/mestre.png',nome:'Mestre'
        }
    ]

    matchup:MatchupInterface = {
        campeoes: [],
        oponente: {nome:'',img:''},
        rota: '',
        elo:''
    }

    resultsMatchups !: ResultMatchupInterface[];
 
    constructor(
        private http:HttpClient
    ){}

    ngOnInit(): void {
        
    }

    atualizarMatchup(matchup:MatchupInterface){
        this.matchup = matchup;
    }

    getCampeoesBackEnd():Observable<CampeoesInterface[]>{
        return this.http.get<CampeoesInterface[]>('http://localhost:3080/campeoes');
    }

    getRotas():Array<RotaInterface>{
        return this.rotas;
    }

    getRotaImg(rota:string):string{
        let rotaObj = this.rotas.find(value => value.rota == rota);
        let img = <string>rotaObj?.img;
        return img
    }

    getEloImg(elo:string):string{
        let eloObj = this.elos.find(value => value.elo == elo);
        let img = <string>eloObj?.img;
        return img
    }

    getElos():Array<EloInterface>{
        return this.elos;
    }

    realizarMatchups():Observable<ResultMatchupInterface[]>{
        return this.http.post<ResultMatchupInterface[]>('http://localhost:3080/matchup',this.matchup);
    }
}