import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';
@Component({
  selector: 'app-add-new-animal',
  templateUrl: './add-new-animal.component.html',
  styleUrls: ['./add-new-animal.component.css']
})
export class AddNewAnimalComponent implements OnInit {

  @Output() newAnimal = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
