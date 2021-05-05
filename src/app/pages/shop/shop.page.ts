import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  fecha='';
  prod=[];
  filterpost='';

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getProd();
  
    setInterval(()=>{
      const fecha= new Date();
      this.fecha= fecha.toLocaleString();
      return this.fecha;
    }, 1000);
  }


  async getProd() {
    await this.api.getProductos().subscribe((data: any) => {
      this.prod=data.rows;
    });
  }

}
