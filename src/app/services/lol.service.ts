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

    campeoes : CampeoesInterface[] = [{
        img:'teste',nome:'kennen'
    },
    {
        img:'teste2',nome:'yasuo'
    },{
        nome:'ahri',img:'teste3'
    }]

    rotas : RotaInterface[] = [
        {
            rota:'TOP',img:""
        },{
            rota:'middle',img:""
        },{
            rota:"ADC",img:''
        },{
            rota:"SUP",img:""
        },{
            rota:"JUNGLER",img:''
        }
    ]

    elos : EloInterface[] = [
        {
            elo:'Ferro',img:''
        },{
            elo:"Bronze",img:''
        },{
            elo:'Prata',img:''
        },{
            elo:'gold',img:''
        }
    ]

    matchup:MatchupInterface = {
        campeoes: [],
        oponente: '',
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

    getCampeoes():Array<CampeoesInterface>{
        return this.campeoes;
    }

    getRotas():Array<RotaInterface>{
        return this.rotas;
    }

    getElos():Array<EloInterface>{
        return this.elos;
    }

    realizarMatchups():Observable<ResultMatchupInterface[]>{
        return this.http.post<ResultMatchupInterface[]>('http://localhost:3080/matchup',this.matchup);
    }
}