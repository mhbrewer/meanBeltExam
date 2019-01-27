import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPet = {
    name: "",
    type: "",
    description: "",
    skills: ["", "", ""]
  };
  myErrors: any;

  constructor( 
    private _httpService: HttpService,
    private _router: Router ) { }

  ngOnInit() {
  }

  newPetSubmit() {
    for(let i = 0; i < this.newPet.skills.length; i++) {
      if(this.newPet.skills[i] == "") {
        this.newPet.skills.splice(i, 1);
      }
    }
    this._httpService.addPetService(this.newPet)
    .subscribe(response => {
      if(response['errors']) {
        console.log("ERROR", response);
        this.myErrors = response;
      } else if (response['custErrors']) {
        console.log("ERROR", response);
        this.myErrors = response['custErrors'];
      } else {
        console.log(response);
        this._router.navigate(['pets']);
      }
    })
  }
  cancel() {
    this._router.navigate(['/pets']);
  }
}
