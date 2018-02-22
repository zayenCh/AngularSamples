import { Component, OnInit } from '@angular/core';
import { Film } from '../film';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  monfilm: Film = {
    id: 1,
    name: 'Titanic',
    year: 1999
  };
  constructor() { }

  ngOnInit() {
  }

}
