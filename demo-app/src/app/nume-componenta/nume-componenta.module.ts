import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NumeComponentaComponent } from './nume-componenta.component';
import { StudentsListModule } from '../students-list/students-list.module';

@NgModule({
  declarations: [
    NumeComponentaComponent
  ],
  imports: [
    BrowserModule,
    StudentsListModule
  ],
  exports: [
    NumeComponentaComponent
  ],
  providers: [],
  bootstrap: [NumeComponentaComponent]
})
export class NumeComponentaModule { }
