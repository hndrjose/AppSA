import { Component, OnInit } from '@angular/core';




declare function barra();

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    barra();
  }

}
