import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css',
})
export class HomeAccountComponent {
  allAccounts = [
    {
      name: 'Edouard Account',
      status: 'active',
    },
    {
      name: 'Bruno Account',
      status: 'inactive',
    },
  ];

  addAccount(newAccount) {
    this.allAccounts.push(newAccount);
  }
}
