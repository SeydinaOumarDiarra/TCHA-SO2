import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  host = environment.URL;
  competence: any;
  idcp: any;
  constructor(private http: HttpClient) { }

   // Ajout competence
   public AjoutCompetence(competence: any){
    return this.http.post(this.host+'/competence/ajout', competence)
  }

  // Get competence par travailleur
   public getCompetence(id: any) {
    return this.http.get(this.host+`/compe/${id}`);
  }

  // detail competence
  public detailCompetence(id: any) {
    return this.http.get(this.host+`/competence/${id}`);
  }

   // modifier competence
   public updateCompetence(id: any, comp: any) {
    return this.http.put(this.host+`/updatecompetence/${id}`, comp);
  }

   // supprimer competence
   public deleteCompetence(id: any) {
    return this.http.delete(this.host+`/competence/delette/${id}`);
  }

  setComp(data: any){this.competence = data}
  getComp(){return this.competence}

  setIdComp(data: any){this.idcp = data}
  getIdComp(){return this.idcp}

}
