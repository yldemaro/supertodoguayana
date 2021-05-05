import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  rout = [
    { icon: 'navigate', name: 'Dirección', router: 'address' },
    { icon: 'heart', name: 'Lista de Deseo', router: 'wishlist' },
    { icon: 'list', name: 'Lista de Orden', router: 'order-list' },
    { icon: 'card', name: 'Monedero', router: 'wallet' },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  Router(router){
    this.router.navigateByUrl(`/${router}`);
  }
}
