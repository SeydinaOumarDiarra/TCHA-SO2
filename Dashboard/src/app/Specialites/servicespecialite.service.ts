import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicespecialiteService {
  host = environment.URL
  idspecialite: any;
  constructor(private http: HttpClient) { }

  setIdSpecialite(serv: any){this.idspecialite = serv}
  getIdSpecialite(){return this.idspecialite}

  public addSpecialite(specialite: any) {
    return this.http.post(this.host+"/specialite/ajout", specialite)
  }

  public getAllSpecialites(){
    return this.http.get(this.host+"/specialite/all")
  }

  public updateSpecialite(id: any, specialite: any) {
    return this.http.put(this.host+`/updatespecialite/${id}`, specialite);
  }

  detailSpecialite(id:any){
    return this.http.get(this.host+"/specialite/"+id)
  }

  public deleteSpecialite(id:any) {
    return this.http.delete(this.host+"/specialite/delette/"+id);
  }

   // Get travailleurs par spécialité
   public getTravailleurBySpecialite(id: any) {
    return this.http.get(this.host+`/trava/${id}`);
  }
}
