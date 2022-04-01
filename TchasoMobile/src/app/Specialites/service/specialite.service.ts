import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  host = environment.URL;
  tra: any;
  travcomment: any;
  
  constructor(private http: HttpClient) { }

  setTrav(data: any){
    this.tra = data
  }
  getTrav(){
    return this.tra;
  }

  setTravComment(data: any){
    this.travcomment = data
  }
  getTravComment(){
    return this.travcomment;
  }
   // Get travailleurs par spécialité
   public getTravailleur(id: any) {
    return this.http.get(this.host+`/trava/${id}`);
  }

   // Get detail travailleur
   public getDetailTravailleur(id: any) {
    return this.http.get(this.host+`/travailleur/${id}`);
  }

   // Get competences par travailleurs
   public getCompetenceByTravailleur(id: any) {
    return this.http.get(this.host+`/compe/${id}`)
  }
  
}
