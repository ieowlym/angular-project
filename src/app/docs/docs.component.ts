import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {
  showIntro: boolean = true;
  showWia: boolean = false;
  showSet: boolean = false;




  constructor() { }

  ngOnInit(): void {
  }

  openWia(): void {
    this.showIntro = false;
    this.showSet = false;
    this.showWia = true;
  }
  openSet(): void {
    this.showIntro = false;
    this.showSet = true;
    this.showWia = false;
  }
  openIntro(): void {
    this.showIntro = true;
    this.showSet = false;
    this.showWia = false;
  }


}
