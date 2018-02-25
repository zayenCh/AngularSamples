import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  displayName = true;
  couleur = 'bleu';
  public colors = ['red','blue','green','yellow'];

  constructor() { }

  ngOnInit() {
  }

}
