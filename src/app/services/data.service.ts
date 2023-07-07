import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable()
export class DataService {
  fetchData(): Observable<any> {
    return of({ data: 'Some data' });
  }
}
