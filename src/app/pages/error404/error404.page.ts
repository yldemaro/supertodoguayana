import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.page.html',
  styleUrls: ['./error404.page.scss'],
})
export class Error404Page implements OnInit {
  url=''
  constructor() { }

  async ngOnInit() {
    this.url= await 'https://askdemo-c24d7.web.app/assets/404.svg';
  }

}
