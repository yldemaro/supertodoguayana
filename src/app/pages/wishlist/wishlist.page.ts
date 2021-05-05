import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {
  prod = [];
  filterpost = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getProd();
  }

  async getProd() {
    await this.api.getProductos().subscribe((data: any) => {
      console.log(data);
      this.prod = data.rows;
    });
  }
}
