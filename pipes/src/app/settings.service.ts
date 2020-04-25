import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  // essa poderia ser obtida do servidor
  getLocale() {
    return 'en-US'
  }
}
