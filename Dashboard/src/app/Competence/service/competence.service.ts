import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  host = environment.URL
  constructor(private http: HttpClient) { }

  // Ajout de compétences
  public addCompetence(com: any) {
    return this.http.post(this.host+"/competence/ajout", com)
  }

  // Get competences par travailleurs
  public getCompetenceByTravailleur(id: any) {
    return this.http.get(this.host+`/compe/${id}`)
  }
}
