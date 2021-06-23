import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description'
})
export class DescriptionPipe implements PipeTransform {

  transform(value: string, description: string): string {
    if (description.length > 3) {
        value = value.slice(0,5);
      return value +'...';
    } else {
      return value;
    }
  }

}
