import {Component, DoCheck, Input, OnInit} from '@angular/core';
import {IGenres} from "../../interfaces/genres-list.interface";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import {GenresListService} from "../../services/genres-list.service";
import {DataService} from "../../../../services/data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  genres: IGenres;
  newSelect: number;
  isSubmitted = true;

  constructor(private genresListService: GenresListService,
              private dataService: DataService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.dataService.storage$.subscribe(value => {
      this.newSelect = value.movies.genres;

    })
  }

  ngOnInit(): void {
    this.genresListService.getAll().subscribe(value => {
      this.genres = value;
      this._createForm();
      this._setFormControlValue();
    });
  }

  onOptionsSelected() {
    this.newSelect = this.form?.value.genreName;
    if (this.newSelect) {
      this.dataService.updateGenresMovies(String(this.newSelect));
    } else {
      this.dataService.updateGenresMovies('')
    }
    this.dataService.updatePage(1);
    this.router.navigate(['/movies/page/', 1], {relativeTo: this.activatedRoute});
  }

  onSubmit(form: FormGroup): void {
    // this.isSubmitted = true;
    // if (!this.form.valid) {
    //   false;
    // } else {
    //   console.log(form.value)
    // }
  }

  // form = new FormGroup({
  //   genreName: new FormControl('', Validators.required)
  // });

  _createForm(): void {
    this.form = new FormGroup({
      genreName: new FormControl(''),
    });

  }
  _setFormControlValue():void{
    if(this.newSelect) {
      this.form.controls['genreName'].setValue(this.newSelect);
    }
  };


}
