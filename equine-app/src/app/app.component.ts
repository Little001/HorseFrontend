import { Component, OnInit } from '@angular/core';
import {UserService} from "./core/services";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'equine-app';

  constructor (
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.populate();
  }
}
