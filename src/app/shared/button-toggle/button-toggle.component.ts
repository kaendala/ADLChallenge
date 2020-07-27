import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {
  @Output() pressed= new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  clicktogle(){
    this.pressed.emit('true');
  }
}
