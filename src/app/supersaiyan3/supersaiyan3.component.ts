import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan3',
  templateUrl: './supersaiyan3.component.html',
  styleUrls: ['./supersaiyan3.component.css']
})
export class Supersaiyan3Component implements OnInit {
  @Input() powerLevel;

  sumPowerLevel(){
    this.powerLevel *= 250;
  }

  constructor() { }

  ngOnInit() {
  }

}
