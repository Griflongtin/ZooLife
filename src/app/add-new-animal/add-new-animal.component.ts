import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';
@Component({
  selector: 'app-add-new-animal',
  templateUrl: './add-new-animal.component.html',
  styleUrls: ['./add-new-animal.component.css']
})
export class AddNewAnimalComponent implements OnInit {

  @Output() newAnimalSender = new EventEmitter();

  submitForm(Species: string, Name: string, Age: number, Diet: string, Location: string, Caretakers: number, Sex: string, Likes: string, Dislikes: string) {
    const addNewAnimal: Animal = new Animal();
    addNewAnimal.Species = Species;
    addNewAnimal.Name = Name;
    addNewAnimal.Age = Age;
    addNewAnimal.Diet = Diet;
    addNewAnimal.Location = Location;
    addNewAnimal.Caretakers = Caretakers;
    addNewAnimal.Sex = Sex;
    addNewAnimal.Likes = Likes;
    addNewAnimal.Dislikes = Dislikes;
    this.newAnimalSender.emit(addNewAnimal);
  }

  constructor() { }

  ngOnInit() {
  }

}
