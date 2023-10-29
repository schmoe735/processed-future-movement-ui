import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'processed-future-movement-ui';
  constructor(private router: Router) {

  }
  login(client: string) {
    console.log('navigating', client);
    
    this.router.navigate(['/daily-summary', client]);
  }
}
