import { Pipe, PipeTransform } from '@angular/core';

// decorator
@Pipe({
  name: 'convertToSpaces'
})

export class ConvertToSpacesPipe implements PipeTransform {

    transform(value: string, character: string): string {
      return value.replace(character, ' ');
    }
}
