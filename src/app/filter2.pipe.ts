import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(animals: any, term2: any): any {
    if (!term2) return animals;
    return animals.filter(function(animal) {
      if(animal.Age >= term2) return animal;
    })
    }

}
