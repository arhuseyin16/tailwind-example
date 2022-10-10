import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  favoriteView = false;
  favoritePage = false;

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    this.favoriteView = !this.favoriteView;
  }

  favoriteImageClick() {
    this.favoriteView = !this.favoriteView;
  }
}
