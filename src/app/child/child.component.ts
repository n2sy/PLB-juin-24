import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input({ required: true }) childColor: string = 'grey';
  @Output() childEvent = new EventEmitter<string>();

  sendEvent() {
    this.childEvent.emit('Message de la part du Child Component');
  }
}
