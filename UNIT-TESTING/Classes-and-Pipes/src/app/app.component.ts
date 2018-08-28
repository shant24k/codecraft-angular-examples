import { Component } from '@angular/core';
import { DefaultPipe } from './default.pipe'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Classes-and-Pipes';
  image = "";
}
