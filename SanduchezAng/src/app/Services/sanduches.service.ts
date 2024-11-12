import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Sandwich {
  id: number;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class SanduchesService {
  private sandwichesSubject = new BehaviorSubject<Sandwich[]>([]);
  sandwiches$ = this.sandwichesSubject.asObservable();

  constructor() {}

  addSandwich(sandwich: Sandwich): void {
    const currentSandwiches = this.sandwichesSubject.value; 
    const updatedSandwiches = [...currentSandwiches, sandwich]; 
    this.sandwichesSubject.next(updatedSandwiches); 
    console.log("Sándwich agregado:", sandwich);
  }

  deleteSandwich(sandwich: Sandwich): void {
    const currentSandwiches = this.sandwichesSubject.value;
    const updatedSandwiches = currentSandwiches.filter(s => s.id !== sandwich.id);
    this.sandwichesSubject.next(updatedSandwiches);
    console.log("Sándwich eliminado:", sandwich);
  }

  updateSandwich(updatedSandwich: Sandwich): void {
    const currentSandwiches = this.sandwichesSubject.value;
    const index = currentSandwiches.findIndex(s => s.id === updatedSandwich.id);
    if (index !== -1) {
      currentSandwiches[index] = updatedSandwich;
      this.sandwichesSubject.next([...currentSandwiches]);
      console.log("Sándwich modificado:", updatedSandwich);
    }
  }

}
