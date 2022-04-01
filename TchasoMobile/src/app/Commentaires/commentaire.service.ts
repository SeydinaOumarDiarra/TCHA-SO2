import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  host = environment.URL;

  constructor(private http: HttpClient) { }

  // Ajout commentaire
  public AjoutCommentaire(comment: any){
    return this.http.post(this.host+'/comment/ajout', comment)
  }


  // Get commentaire par travailleur
  public getCommmentaireByTravailleur(id: any) {
    return this.http.get(this.host+`/commentaireByTravailleur/${id}`)
  }
}
