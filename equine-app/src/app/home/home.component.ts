import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import * as icons from '@fortawesome/free-solid-svg-icons';

import { UserService } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private config: NgbCarouselConfig
  ) {}

  isAuthenticated: boolean;
  icons = icons;
  articles = [
    {title: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", id: 1},
    {title: "Consectetuer adipiscing elit.", id: 2},
    {title: "Lorem ipsum dolor sit amet.", id: 3}
  ];

  ngOnInit() {
    this.config.showNavigationArrows = false;
    this.config.showNavigationIndicators = false;

    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
      }
    );
  }

}
