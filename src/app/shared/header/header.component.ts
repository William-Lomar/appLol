import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuService } from "src/app/services/menu.service";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{
    constructor(
        private menuService:MenuService
    ){}

    mudarRota(event:any){
        let rota = '';
        //Criar função para seleção de rotas
        if(Object.keys(event.itemData)[0] == 'icon'){
            rota = 'home'
        }else{
            rota = event.itemData.text;
        }

        this.menuService.rotasMenu(rota);
    }
}
