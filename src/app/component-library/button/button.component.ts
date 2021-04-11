import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() customClass: string = '';
  @Input() label: string = '';
  
  @Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.onClick.emit();
  }

}
