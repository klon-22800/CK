import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GreetingComponent } from "./greeting/greeting.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [GreetingComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digital-department-application';
}