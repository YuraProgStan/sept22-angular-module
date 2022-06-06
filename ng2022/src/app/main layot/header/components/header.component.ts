import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataService: DataService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }


  navigateChangeGenre(): void {
   this.dataService.updateGenresMovies('');
    this.router.navigate(['/movies/page/1'],)
  }

}



