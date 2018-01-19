import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from '../animal.model';
@Component({
  selector: 'app-edit-animal',
  templateUrl: './edit-animal.component.html',
  styleUrls: ['./edit-animal.component.css']
})
export class EditAnimalComponent implements OnInit {

  @Input() selectedEditAnimal: Animal[];
  @Output() doneclickAnimalEditbutton = new EventEmitter();


  doneButtonClicked() {
    this.doneclickAnimalEditbutton.emit();
  }
  constructor() { }

  ngOnInit() {
  }

}
