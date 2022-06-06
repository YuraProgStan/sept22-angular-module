import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../../../services/data.service";

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {
  form: FormGroup
  theme: string = 'light'

  constructor(private dataService:DataService) {
    this._createForm();
    this.form.valueChanges.subscribe(changes => {
      this.theme = changes.switchTheme;
      dataService.setTheme(this.theme);
    });
  }

  ngOnInit(): void {
  }

  _createForm(): void {
    this.form = new FormGroup({
      switchTheme: new FormControl('light'),
    })
  }

}
