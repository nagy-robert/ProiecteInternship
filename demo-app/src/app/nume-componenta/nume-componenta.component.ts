import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nume-componenta',
  templateUrl: './nume-componenta.component.html'
})
export class NumeComponentaComponent implements OnInit {
  public listaStudenti = ['Darian', 'Matei', 'Ion'];

  ngOnInit(): void {
  }

}
