import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'plb-juin-24';

  traitementDuApp(msg) {
    console.log(msg);
  }
}
