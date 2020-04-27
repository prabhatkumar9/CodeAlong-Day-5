import { Injectable } from '@angular/core';
import { PROGRAD } from '../app/prograds';
import { Prograds } from '../app/Mock-Prograds';

@Injectable({
  providedIn: 'root'
})
export class ProgradService {

  constructor() { }

  getPrograds(): PROGRAD[] {
    return Prograds;
  }
}
