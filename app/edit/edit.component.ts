import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  petId: string;
  currentPet: any;
  myErrors: any;

  constructor(private _route: ActivatedRoute,
    private _httpService: HttpService,
    private _router: Router ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>  this.petId = params.id);
    console.log(this.petId);
    this.getPett();
  }
  getPett() {
    this._httpService.getPetService(this.petId)
    .subscribe(response => {
      if(response['errors']) {
        console.log(response);
      } else {
        this.currentPet = response;
        // this.getSkills();
        // console.log("currentPet:", this.currentPet, "skills", this.currentPetSkills);
        console.log(this.currentPet._id);
      }
    })
  }
  editPetSubmit() {
    for(let i = 0; i < this.currentPet.skills.length; i++) {
      if(this.currentPet.skills[i] == "") {
        this.currentPet.skills.splice(i, 1);
      }
    }
    this._httpService.updatePetService(this.petId, this.currentPet)
    .subscribe(response => {
      if(response['errors']) {
        console.log("ERROR", response);
        this.myErrors = response;
      } else if (response['custErrors']) {
        console.log("ERROR", response);
        this.myErrors = response['custErrors'];
      } else {
        console.log(response);
        this._router.navigate(['/pets', this.petId]);
      }
    })
  }
}
