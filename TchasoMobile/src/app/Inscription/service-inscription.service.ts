import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceInscriptionService {

  host = environment.URL

  constructor(private http: HttpClient) { }

  // get All ville
  public getAllVilles(){
    return this.http.get(this.host+"/ville/all")
  }

  // detail ville
  detailVille(id:any){
    return this.http.get(this.host+"/ville/"+id)
  }

  // get All specialite
  public getAllSpecialites(){
    return this.http.get(this.host+"/specialite/all")
  }

  // detail specialite
  detailSpecialite(id:any){
    return this.http.get(this.host+"/specialite/"+id)
  }

  // verfier le login de travailleur
  public checkLogTravailleur(login:any) {
    return this.http.get(this.host+`/logtravailleur/${login}`);
  }

  // inscription travailleur
  public addTravailleur(travailleur: any, photo: File, piece: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("image", photo);
    formData.append("piece", piece);
    return this.http.post(this.host+"/travailleur/ajout", formData)
  }

  // Modifier travailleur
  public updateTravailleur(id: any, utilisateur: any) {
    return this.http.put(this.host+`/updatetravailleur/${id}`, utilisateur);
  }

  // Gestion Clients
  public inscriptionClient(client: any) {
    return this.http.post(this.host+"/client/ajout", client)
  }
}
