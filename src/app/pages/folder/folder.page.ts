import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };
  number = 0;
  filterpost=''

  prod: any = [];
  bestSell: any=[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getProd();
  }

  async getProd() {
    await this.api.getProductos().subscribe((data: any) => {
      this.prod=data.rows;
    });
  }

  buscar(e){
    console.log(e);
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
