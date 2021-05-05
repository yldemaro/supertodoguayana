import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.page.html',
  styleUrls: ['./complete.page.scss'],
})
export class CompletePage implements OnInit {

  url=''

  constructor() { }

  async ngOnInit() {
    this.url= await 'https://askdemo-c24d7.web.app/assets/done.svg';
  }

}
