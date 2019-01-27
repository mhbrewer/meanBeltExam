import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPetsService() {
    return this._http.get("api/pets");
  }
  addPetService(newPet) {
    return this._http.post("api/pets", newPet);
  }
  getPetService(id) {
    return this._http.get("api/pets/" + id);
  }
  deletePetService(id) {
    return this._http.delete("api/pets/" + id);
  }
  updatePetService(id, updatedPet) {
    return this._http.put("api/pets/" + id, updatedPet);
  }
}
