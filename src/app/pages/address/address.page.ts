import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {
  direccion = [
    { name: 'Hogar', icon: 'home-outline', desc: 'Venezuela, edo Bolívar' },
    { name: 'Trabajo', icon: 'briefcase-outline', desc: 'Venezuela, edo Bolívar, unare' },
    { name: 'Otros', icon: 'navigate-outline', desc: 'Venezuela, edo Bolívar, san felix' },
  ];

  constructor() {}

  ngOnInit() {}
}
