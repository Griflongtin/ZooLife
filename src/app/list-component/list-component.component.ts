import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() animalList: Animal[];
  @Output() clickAnimalEditbutton = new EventEmitter();

  editAnimalInfo(animalToEdit: Animal) {
    alert('edit');
    this.clickAnimalEditbutton.emit(animalToEdit);
  }

  constructor() { }

  ngOnInit() {
    console.log(this.animalList);
  }

}
