import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  mouseEnter(div: string) {
    console.log(`div ${div}`);
  }
  mouseLeave(div: string) {
    console.log(`div ${div}`);
  }

}
