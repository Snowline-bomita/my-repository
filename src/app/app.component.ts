import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentNameComponent } from './file1/component-name.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ComponentNameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'snow';
}
