import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'YukselisERP';
  /**
   *
   */
  constructor(private primengConfig: PrimeNGConfig ) {
    
    this.primengConfig.ripple = true;
    document.documentElement.style.fontSize = '13px';
  }
}
