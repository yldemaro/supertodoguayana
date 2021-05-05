import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderListPageRoutingModule } from './order-list-routing.module';

import { OrderListPage } from './order-list.page';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderListPageRoutingModule
  ],
  declarations: [OrderListPage, FilterPipe]
})
export class OrderListPageModule {}
