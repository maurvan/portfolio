import { Component, HostBinding } from '@angular/core';

import * as AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'Maureen Vanhoren';
}