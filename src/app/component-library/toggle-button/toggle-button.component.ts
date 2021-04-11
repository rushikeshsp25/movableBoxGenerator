import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.scss']
})
export class ToggleButtonComponent implements OnInit {
  @Output() onToggle = new EventEmitter();
  isChecked: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleCheckbox(){
    this.isChecked = !this.isChecked;
    this.onToggle.emit(this.isChecked);
  }

}
