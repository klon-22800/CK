import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {
  constructor(private router: Router) {

  }

  goMain(): void {
    this.router.navigateByUrl("/")
  }

}
