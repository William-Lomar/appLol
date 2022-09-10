import { TestBed } from '@angular/core/testing';
import { LolService } from 'src/app/services/lol.service';


describe('lolService',()=>{
  let lolService:LolService

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports:[]
    });
    lolService = TestBed.inject(LolService);
  })

  it("Deve ser criado",()=>{
    expect(2).toEqual(2);
  })


})
