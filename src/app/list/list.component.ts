import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  started = ["commit last update"]
  finished = ["build an angular framework","create a git project"]
  ongoing = ["build an app","commit updates"]
  constructor() { }

  ngOnInit(): void {
  }

}
