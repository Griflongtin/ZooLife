import { Component, OnInit, Input, EventEmitter  } from '@angular/core';
import { Animal } from '../animal.model';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() animalList: Animal[];


  constructor() { }

  ngOnInit() {
    console.log(this.animalList);
  }

}
