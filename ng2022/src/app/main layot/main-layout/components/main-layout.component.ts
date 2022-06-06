import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  themes: string
  constructor(private dataService:DataService) {
    dataService.storage$.subscribe(value => {
      this.themes = value.theme
    })
  }

  ngOnInit(): void {
  }

}
