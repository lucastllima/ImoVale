import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeAnnouncement'
})
export class TypeAnnouncementPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value == 'aluguel' ? 'Aluguel' : 'Venda';
  }

}
