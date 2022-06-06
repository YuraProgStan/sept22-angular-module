import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenresListComponent } from './components/genres-list/genres-list.component';
import { FormComponent } from './components/form/form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SwitcherComponent } from './components/switcher/switcher.component';



@NgModule({
    declarations: [
        GenresListComponent,
        FormComponent,
        SwitcherComponent
    ],
    exports: [
        GenresListComponent,
    ],
    imports: [
        CommonModule,
      ReactiveFormsModule,
      FormsModule,
    ]
})
export class GenresListModule { }
