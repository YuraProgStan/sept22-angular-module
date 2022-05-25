import {Component, OnInit} from '@angular/core';
import {CarService} from "../../services/car.service";
import {ICar} from "../../interfaces";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: ICar[]

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe({
      next: value => console.log(value)
    })
  }

}
