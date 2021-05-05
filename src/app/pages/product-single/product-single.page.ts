import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.page.html',
  styleUrls: ['./product-single.page.scss'],
})
export class ProductSinglePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    speed: 400,
  };

  number=0;

  producto = {
    id: 1,
    nombre: 'Cerveza Corona',
    cant:1,
    presentacion:'350cc',
    pict: [
      'http://dondeeladio.cl/delivery/wp-content/uploads/2020/11/cervcorona.jpg',
      'https://vimas.store/attachments/shop_images/Corona_011.png',
      'https://cdnx.jumpseller.com/vinalolen/image/8847278/resize/570/765?1598749923',
    ],
    ofert:false,
    "price":0.73
  };
  constructor() {
    this.number = 1;
  }

  ngOnInit() {
    console.log(this.producto);
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
