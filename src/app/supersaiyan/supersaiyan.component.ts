import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit {
  @Input() powerLevel;

  sumPowerLevel(){
    this.powerLevel *=90;
  }

  constructor() { }

  ngOnInit() {
  }

}
