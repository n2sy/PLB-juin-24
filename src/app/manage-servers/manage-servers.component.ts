import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  allServers = [
    {
      name: 'Production server',
      type: 'small',
      date_d: new Date(2020, 4, 5),
      status: 'critical',
    },
    {
      name: 'Development server',
      type: 'small',
      date_d: new Date(2020, 4, 5),
      status: 'stable',
    },
    {
      name: 'Development test server',
      type: 'medium',
      date_d: new Date(),
      status: 'offline',
    },
    {
      name: 'Bruno server',
      type: 'large',
      date_d: new Date(2020, 4, 5),
      status: 'stable',
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-warning': st == 'offline',
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
    };
  }
}
