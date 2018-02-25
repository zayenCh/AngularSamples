import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  @Input() public parentdata;
  @Output() public heroEvent = new EventEmitter();

  clickEvent(){
    this.heroEvent.emit('Hey Marvel');
    }
    
  constructor() { }

  ngOnInit() {
  }

}
