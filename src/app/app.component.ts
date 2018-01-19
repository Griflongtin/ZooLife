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
  this.selectedAnimal = ClickedAnimal;
  alert("edit app");
  }
  finishedEditing() {
    this.selectedAnimal = null;
  }
  addAnimal(newAnimalMaker: Animal) {
    this.masterAnimalList.push(newAnimalMaker);
  }
}
