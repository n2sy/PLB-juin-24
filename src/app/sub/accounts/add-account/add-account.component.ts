import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allStatus = ['', 'active', 'inactive', 'unknown'];
  // newAccountName = '';
  // newAccountStatus = '';
  @Output() addEvent = new EventEmitter();

  onAddAccount(inp, sel) {
    console.log(inp.value, sel.value);
    this.addEvent.emit({
      name: inp.value,
      status: sel.value,
    });
  }
}
