import { Component } from '@angular/core';
import { Animal } from './animal.model';
import { ANIMAL } from './animal-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zoo Animal Tracker';

  masterAnimalList: Animal[] = ANIMAL;

  selectedAnimal = null;
  editAnimal(ClickedAnimal) {
  alert("edit app");
  }
}
