import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  alerta: string = 'alert-danger';
  propiedades: Object = {
    danger: true
  };

  loading: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar(){
    this.loading = true;

    setTimeout(() => this.loading = false, 3000)
  }

}
