import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categorias: any=[];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getCategories();
  }


  async getCategories(){
    await this.api.getProductos().subscribe((data:any)=>{
      console.log(data.categories);
      this.categorias= data.categories;
    });
  }

  shop(item){
    console.log(item);
  }

}
