import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NumeComponentaModule } from './nume-componenta/nume-componenta.module';
import { StudentsListModule } from './students-list/students-list.module';
import { AppRoutingModule } from './app.routes';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { AlertDirective } from './alert.directive';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponentComponent,
    AlertDirective,
  ],
  imports: [
    BrowserModule,
    NumeComponentaModule,
    StudentsListModule,
    AppRoutingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


