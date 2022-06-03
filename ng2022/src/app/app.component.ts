import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {UsersComponent} from "./components/users/users.component";


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy,AfterViewInit,AfterViewChecked {
  title = 'Some title';

  //access to child component
  @ViewChild(UsersComponent)
  inner: UsersComponent;

  constructor() {
    console.log('constructor');

  }

  // ngOnChanges(changes: SimpleChanges): void {
  // console.log('ngOnChanges', changes)
  // }
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }


  changeTitle() {
    this.title = 'new title'
  }

  ngAfterViewInit(): void {


  }

  ngAfterViewChecked(): void {
    console.log(this.inner.asd)
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }

}
