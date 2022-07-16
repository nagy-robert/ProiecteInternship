import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {
  @Input() public studentsList: string[];
  public isVisible = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isVisible = true;
    }, 5000);
    console.log('on init');
  }

  public onButtonClick() {
    console.log('12312312');
  }
}

// ng new sadkaspodkaspda
// ng g component 12312312
// ng g module 12312312
