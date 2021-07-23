import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-history-list',
  templateUrl: './medical-history-list.component.html',
  styleUrls: ['./medical-history-list.component.scss']
})
export class MedicalHistoryListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getScrollbarHidden(): boolean {
    let isTouch = false;
    if ("ontouchstart" in window || navigator.msMaxTouchPoints) {
      isTouch = true;
    } else {
      isTouch = false;
    }
    return isTouch;
  }
}
