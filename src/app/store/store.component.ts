import { Component, OnInit } from '@angular/core';
import {PetService} from "../services/pet.service";

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  isAdd: boolean;

  constructor(
    private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets() {
    this.petService.getSelectedPet()
      .subscribe(pet => this.isAdd = false);
  }

  addNewPet() {
    this.petService.setSelectedPet(null);
    this.isAdd = true;
  }
}
