import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem(key: string) {
    if (this.verifyItem(key)) {
      return JSON.parse(localStorage.getItem(key));
    }
  }

  verifyItem(key: string) {
    if (localStorage.getItem(key)) {
      return true;
    }
    return false;
  }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  deleteItem(key: string) {
    if (this.verifyItem(key)) {
      localStorage.removeItem(key);
    }
  }

}
