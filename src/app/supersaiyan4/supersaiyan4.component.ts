import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan4',
  templateUrl: './supersaiyan4.component.html',
  styleUrls: ['./supersaiyan4.component.css']
})
export class Supersaiyan4Component implements OnInit {
  @Input() powerLevel;

  sumPowerLevel(){
    this.powerLevel *= 500;
  }
  constructor() { }

  ngOnInit() {
  }

}
