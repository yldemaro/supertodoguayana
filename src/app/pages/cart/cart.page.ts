import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  prod=[];
  number=0;

  constructor(private api: ApiService) {
   }

  ngOnInit() {
    
    this.getProd();
  }

  async getProd() {
    await this.api.getProductos().subscribe((data: any) => {
      this.prod=data.rows;
    });
  }

  boton(item, valor) {
    console.log(item, valor);
    if ((valor = 'sumar')) {
      this.number++;
      if (this.number > 10) {
        this.number = 10;
        alert(`máximo de ${this.number} artículos`);
      }
    } else {
      this.number--;
      if (this.number <= 0) {
        this.number = 0;
      }
    }
  }

}
