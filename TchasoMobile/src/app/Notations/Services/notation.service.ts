import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotationService {
  host = environment.URL;
  note: any;

  constructor(private http: HttpClient) { }

  setTravNotation(data: any){
    this.note = data
  }

  getTravNotation(){
    return this.note;
  }

  
  // Ajout notation
  public AjoutNotation(note: any){
    return this.http.post(this.host+'/note/ajout', note)
  }


  // Get note par travailleur
  public getNotationByTravailleur(id: any) {
    return this.http.get(this.host+`/notationByTravailleur/${id}`)
  }
}
