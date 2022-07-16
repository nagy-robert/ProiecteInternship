import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsListComponent } from './students-list.component';
import { StudentsListRoutingModule } from './students-list.routes';
import { NumeComponentaModule } from '../nume-componenta/nume-componenta.module';

const componentsList = [
  StudentsListComponent
]

@NgModule({
  declarations: [componentsList],

  imports: [
    CommonModule,
    StudentsListRoutingModule
  ],
  exports:[
    componentsList
  ]
})
export class StudentsListModule { }
