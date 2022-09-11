import { TestesService } from './testes.service';
import { Component } from "@angular/core";


@Component({
    templateUrl:'./testes.component.html'
})
export class TestesComponent{
  constructor(
    private service:TestesService
  ){}

    matchup = {
        campeoes: '',
        oponente: '',
        rota: '',
        elo:''
    }

    testes = 'testando';

    simpleProducts = [
        'HD Video Player',
        'SuperHD Video Player',
        'SuperPlasma 50',
        'SuperLED 50',
        'SuperLED 42',
        'SuperLCD 55',
        'SuperLCD 42',
        'SuperPlasma 65',
        'SuperLCD 70',
        'Projector Plus',
        'Projector PlusHT',
        'ExcelRemote IR',
        'ExcelRemote Bluetooth',
        'ExcelRemote IP',
      ];

    products = [{
        Id: 1,
        Name: 'HD Video Player',
        Price: 330,
        Current_Inventory: 225,
        Backorder: 0,
        Manufacturing: 10,
        Category: 'Video Players',
        ImageSrc: 'images/products/1.png',
      }, {
        Id: 2,
        Name: 'SuperHD Video Player',
        Price: 400,
        Current_Inventory: 150,
        Backorder: 0,
        Manufacturing: 25,
        Category: 'Video Players',
        ImageSrc: 'images/products/2.png',
      }, {
        Id: 3,
        Name: 'SuperPlasma 50',
        Price: 2400,
        Current_Inventory: 0,
        Backorder: 0,
        Manufacturing: 0,
        Category: 'Televisions',
        ImageSrc: 'images/products/3.png',
      }]

      buttonOptions: any = {
        text: 'Register',
        type: 'success',
        useSubmitBehavior: true,
      };

    rotas = ['TOP','MID','ADC','SUP','JUNGLER'];

    elos = ['Ferro','Bronze','Prata','Ouro'];

    submitButtonOptions = {
        text: "Encontrar Matchup!!",
        useSubmitBehavior: true
    }

    encontrarMatchup(e:any){
        e.preventDefault();//Impede a pagina de recarregar
        this.service.get().subscribe({
          next:(r)=>{
            console.log(r);
          },error:(e)=>{
            console.log(e);

          }
        })


    }

}
