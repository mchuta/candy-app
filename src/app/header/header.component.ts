import { Component, OnInit } from '@angular/core';
import { CandyDataService } from '../candy-data.service';
@Component({
  selector: 'app-header',
  // templateUrl: './header.component.html',
  template: `<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" routerLink="/list">Candy</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse"
    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/list">List</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/add">Add</a>
      </li>
    </ul>
  </div>
  <div class="navbar-expand">
    <ul class="navbar-nav float-right">
      <li class="nav-item">
        <a class="nav-link" routerLink="/list">{{candyService.candies.length}} Candies</a>
      </li>
    </ul>
  </div>
</nav>
</div>`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public candyService: CandyDataService) { }

  ngOnInit() {
  }

}
