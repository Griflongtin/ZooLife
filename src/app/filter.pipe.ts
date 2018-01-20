import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(animals: any, term: any): any {
    if (!term) return animals;
    return animals.filter(function(animal) {
      if(animal.Age <= term) return animal;
    })
    }

}
