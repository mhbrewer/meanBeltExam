import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  allPets: any;

  constructor( private _httpService: HttpService ) { }

  ngOnInit() {
    this.getPets();
  }
  getPets() {
    this._httpService.getAllPetsService()
    .subscribe(response => {
      console.log(response);
      this.allPets = response;
    })
  }
}
