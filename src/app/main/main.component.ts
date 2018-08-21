import { Component, OnInit, Renderer } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  constructor(private renderer: Renderer) {

    this.renderer.listenGlobal('window', 'scroll', (evt) => {
      console.log(evt.path[1]['pageYOffset']);
      if ( evt.path[1]['pageYOffset'] >= 284) {
        console.log(document.getElementById('topnav'));
      }
    });
  }

  ngOnInit() {
  }


}


