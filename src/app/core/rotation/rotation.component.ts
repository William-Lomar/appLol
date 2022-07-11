import { Component } from "@angular/core";
import { LolService } from "src/app/services/lol.service";


@Component({
    templateUrl:'./rotation.component.html'
})
export class RotationComponent{

    rotation = ['veigar','heimer','irelia','jax','master','lux'];


    constructor(
        private lolService:LolService
    ){}



}