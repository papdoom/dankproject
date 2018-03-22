import { Component } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dank App';
  text1 = 'Bruuuuuuh';
  memeJson;

  constructor() {

  }
}
