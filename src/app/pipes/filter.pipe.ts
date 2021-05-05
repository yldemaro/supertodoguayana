import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProd=[];
    for(const plant of value){
      if(plant.value.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultProd.push(plant);
      };
    };

    return resultProd;
  }

}
