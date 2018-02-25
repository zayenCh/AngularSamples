import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
//Property Binding 
  public isDisabled = true;
 //Class Binding 
  public successClass = 'text-success';
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
  'text-success': !this.hasError,
  'text-erreur': this.hasError,
  'text-special': this.isSpecial
  }
  //Style Binding 
  public highlightColor = 'orange';
  public hasError2 = false;

  public titleStyles = {
    color: 'blue',
    fontStyle: 'italic'
    }
  //Event Binding  
  public salut = "";
  onClick(){
  console.log('Hello Paris');
  this.salut = 'Hello Paris';}

  onClick2(event){
  console.log(event)
  this.salut = event.type;}

  public name = 'Spiderman'; 

  constructor() { }

  ngOnInit() {
  }

}
