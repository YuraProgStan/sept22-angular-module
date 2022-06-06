import {Component, Input, OnInit} from '@angular/core';
import {GenresListService} from "../../services/genres-list.service";
import {IGenre, IGenres} from "../../interfaces/genres-list.interface";
import {DataService} from "../../../../services/data.service";

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

genres: IGenres
  constructor(private genresListService:GenresListService, private dataService:DataService) {
  }

  ngOnInit(): void {
    this.genresListService.getAll().subscribe(value => {
      this.genres = value
      this.dataService.setGenres(this.genres);
    })
  }

}
