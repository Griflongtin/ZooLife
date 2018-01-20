import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from '../animal.model';

import { FilterPipe } from '../filter.pipe';
import { Filter2Pipe } from '../filter2.pipe';
@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() animalList: Animal[];
  @Output() clickAnimalEditbutton = new EventEmitter();

  editAnimalInfo(animalToEdit: Animal) {
    this.clickAnimalEditbutton.emit(animalToEdit);
  }

  constructor() { }

  ngOnInit() {
  }

}
