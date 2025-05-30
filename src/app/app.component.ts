import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mi-proyecto-no-stand-alone';

  constructor(private router: Router) {
    console.log('🔍 Rutas registradas:', this.router.config);
  }
}
