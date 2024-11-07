import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sandwich, SanduchesService } from '../../Services/sanduches.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  newSandwich: Sandwich = { name: '', description: '', price: 0 };
  sandwiches: Sandwich[] = []; // Almacenará la lista de sándwiches
  editingSandwich: Sandwich | null = null; // Almacenará el sándwich que se está editando

  constructor(private sanduchesService: SanduchesService) {}

  ngOnInit() {
    this.sanduchesService.sandwiches$.subscribe(sandwiches => {
      this.sandwiches = sandwiches;
    });
  }

  onSubmit() {
    if (this.newSandwich.name && this.newSandwich.description && this.newSandwich.price) {
      if (this.editingSandwich) {
        this.sanduchesService.updateSandwich(this.newSandwich);
        this.editingSandwich = null;
      } else {
        this.sanduchesService.addSandwich(this.newSandwich);
      }
      this.newSandwich = { name: '', description: '', price: 0 };
    }
  }

  deleteSandwich(sandwich: Sandwich) {
    this.sanduchesService.deleteSandwich(sandwich);
  }

  editSandwich(sandwich: Sandwich) {
    this.newSandwich = { ...sandwich };
    this.editingSandwich = sandwich;
  }

}
