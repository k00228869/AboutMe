import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  private films:string[] = ['Forest Gump','Leon The Professional','The Shining', 'The Nightmare Before Christmas'];

  constructor() { }

  ngOnInit(): void {
  }

}
