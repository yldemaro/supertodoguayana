import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  fecha = '';
  prod = [];
  filterpost = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getProd();
    setInterval(() => {
      const fecha = new Date();
      this.fecha = fecha.toLocaleString();
      return this.fecha;
    }, 1000);
  }

  async getProd() {
    await this.api.getProductos().subscribe((data: any) => {
      console.log(data);
      this.prod = data.rows;
    });
  }
}
