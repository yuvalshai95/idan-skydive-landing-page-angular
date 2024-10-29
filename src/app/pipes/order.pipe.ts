import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  standalone: true,
})
export class OrderPipe implements PipeTransform {
  transform<T>(array: T[], field: keyof T): T[] {
    return array?.slice().sort((a, b) => (a[field] > b[field] ? 1 : -1)) || [];
  }
}
