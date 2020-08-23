import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'employee-thumbnail',
  templateUrl: './employee-thumbnail.component.html',
  styleUrls: ['./employee-thumbnail.component.css'],
})
export class EmployeeThumbnailComponent implements OnInit {
  @Input() employee: any;
  @Input() time: Date; // FIX: current implementation use it 9 times per page
  @Output() idEvent = new EventEmitter<number>();

  private date: string;
  private hours: string;

  getId(id: number) {
    this.idEvent.emit(id);
  }

  ngOnInit() {
    this.formatTime();
  }

  formatTime() {
    const UtcDate = new Date(this.time).toUTCString();
    this.date = UtcDate.slice(0, -18);
    this.hours = UtcDate.slice(16, -7);
  }

  amountOfStars(number: number) {
    return new Array(number);
  }
}
