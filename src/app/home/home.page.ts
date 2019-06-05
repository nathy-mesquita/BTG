import { Component } from '@angular/core';
import { btgService } from 'src/services/btg.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { PAGAMENTO } from 'src/models/pagamento';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pag:PAGAMENTO = {
    Amount: 100,
    Counterpart: '2C3MSBV5RL8I9EgKaXfhu7hvbjYpcdl5BLmDqqbb',
    Desc: 'Pagamento'
  };
  
  
  constructor(
    private router: Router,
    public menu: MenuController,
    public btg:btgService
    ){}


    testar(){
      console.log(this.pag);
    }

  enviar(){
    
    this.btg.transferir(this.pag).subscribe(response => {
      console.log(response);
    })
  }

}
