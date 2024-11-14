import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
  private apiUrl = 'http://localhost:8082/sanduchez/rs/sandwich'; // Reemplaza con la URL de tu API

  constructor(private http: HttpClient) {
    this.loadSandwiches();
  }

  private loadSandwiches(): void {
    this.http.get<Sandwich[]>(this.apiUrl).subscribe(sandwiches => {
      this.sandwichesSubject.next(sandwiches);
    });
  }

  addSandwich(sandwich: Sandwich): void {
    this.http.post<Sandwich>(this.apiUrl, sandwich).pipe(
      tap(newSandwich => {
        const currentSandwiches = this.sandwichesSubject.value;
        const updatedSandwiches = [...currentSandwiches, newSandwich];
        this.sandwichesSubject.next(updatedSandwiches);
        console.log("Sándwich agregado:", newSandwich);
      })
    ).subscribe();
  }

  deleteSandwich(sandwich: Sandwich): void {
    const url = `${this.apiUrl}/${sandwich.id}`;
    this.http.delete(url).pipe(
      tap(() => {
        const currentSandwiches = this.sandwichesSubject.value;
        const updatedSandwiches = currentSandwiches.filter(s => s.id !== sandwich.id);
        this.sandwichesSubject.next(updatedSandwiches);
        console.log("Sándwich eliminado:", sandwich);
      })
    ).subscribe();
  }

  updateSandwich(updatedSandwich: Sandwich): void {
    const url = `${this.apiUrl}/${updatedSandwich.id}`;
    this.http.put<Sandwich>(url, updatedSandwich).pipe(
      tap(() => {
        const currentSandwiches = this.sandwichesSubject.value;
        const index = currentSandwiches.findIndex(s => s.id === updatedSandwich.id);
        if (index !== -1) {
          currentSandwiches[index] = updatedSandwich;
          this.sandwichesSubject.next([...currentSandwiches]);
          console.log("Sándwich modificado:", updatedSandwich);
        }
      })
    ).subscribe();
  }
}