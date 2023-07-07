import { Injectable } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class DataResolver {
  constructor(private dataService: DataService) {}

  resolve(): ResolveFn<any> {
    return () => this.dataService.fetchData();
  }
}
