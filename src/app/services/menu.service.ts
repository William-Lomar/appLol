import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})
export class MenuService{
    constructor(
        private router:Router
    ){}

    rotasMenu(key:string){
        switch (key) {
            case 'Login':
                this.router.navigate(['/login'])
                return true
                break;
            
            case 'Preferências':
                this.router.navigate(['/options'])
                return true
                break;

            case 'home':
                this.router.navigate(['/home'])
                return true
                break;

            case 'Rotação semanal':
                this.router.navigate(['/rotation'])
                return true
                break;

            default:
                this.router.navigate(['/error'])
                return true
                break;
        }
    }
}
