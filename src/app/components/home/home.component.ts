import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <p [appResaltado]="'blue'">Hola mundo desde app.component</p>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
