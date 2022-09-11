import { Component, OnInit } from "@angular/core";
import { ResultMatchupInterface } from "src/app/interfaces/resultMatchup.interface";
import { LolService } from "src/app/services/lol.service";

@Component({
    templateUrl:'./results.component.html',
    styleUrls:['./results.component.css']
})
export class ResultsComponent implements OnInit{
    resultados!:Array<ResultMatchupInterface>;
    loading:boolean = true;

    constructor(
        private lolService:LolService
    ){}

    ngOnInit(): void {
        //Solicitar dados de resultado
       this.lolService.realizarMatchups().subscribe({
            next:(results)=>{
                this.resultados = results;
                this.loading = false;
            },error:(erro)=>{
                console.log(erro);
            }
        })
    }
}
