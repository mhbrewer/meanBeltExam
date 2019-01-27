import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  petId: any;
  currentPet: any;
  currentPetSkills: any;
  liked: Boolean;

  constructor(private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>  this.petId = params.id);
    console.log(this.petId);
    this.getPet();
    this.liked = false;
  }
  getPet() {
    this._httpService.getPetService(this.petId)
    .subscribe(response => {
      if(response['errors']) {
        console.log(response);
      } else {
        this.currentPet = response;
        this.getSkills();
        console.log("currentPet:", this.currentPet, "skills", this.currentPetSkills);
        console.log(this.currentPet._id);
      }
    })
  }
  getSkills() {
    this.currentPetSkills = this.currentPet.skills;
  }
  adoptPet() {
    this._httpService.deletePetService(this.petId)
    .subscribe(response => {
      console.log(response);
      this._router.navigate(['pets']);
    });
  }
  likePet() {
    console.log(this.currentPet);
    this.currentPet.likes++;
    this._httpService.updatePetService(this.petId, this.currentPet)
    .subscribe(response => console.log(response));
    this.liked = true;
  }
}
