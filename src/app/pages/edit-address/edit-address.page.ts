import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.page.html',
  styleUrls: ['./edit-address.page.scss'],
})
export class EditAddressPage implements OnInit {

  public form = [
    { val: 'Casa', isChecked: true },
    { val: 'Oficina', isChecked: false },
    { val: 'Otros', isChecked: false }
  ];

  constructor() { }

  ngOnInit() {
  }

}
