import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'employee-thumbnail',
  templateUrl: './employee-thumbnail.component.html',
  styleUrls: ['./employee-thumbnail.component.css'],
})
export class EmployeeThumbnailComponent {
  @Input() employee: any;
  @Output() idEvent = new EventEmitter<number>();

  getId(id: number) {
    this.idEvent.emit(id);
  }

  calcAmountOfStars(number: number) {
    return new Array(number);
  }
}
