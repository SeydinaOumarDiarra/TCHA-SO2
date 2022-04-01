import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccueilService {
  host = environment.URL
  serviceP: any;
  serv: any;
  constructor(private http: HttpClient) { }
  
  // Get tous les services
  public getAllServices(){
    return this.http.get(this.host+"/service/all")
  }

  // Get specialites par service
  public SpecialitesByService(id: any){
    return this.http.get(this.host+`/spec/${id}`)
  }

  // Get travailleurs par spécialité
  public getTravailleur(id: any) {
    return this.http.get(this.host+`/trava/${id}`);
  }

   // Get notify client
   public getNotifyClient(id: any) {
    return this.http.get(this.host+`/getNotifyClient/${id}`);
  }

  // Get all notify client
  public getAllNotifyClient(id: any) {
    return this.http.get(this.host+`/getAllNotifyClient/${id}`);
  }

  // Get all notify client
  public getAllNotifyTravailleur(id: any) {
    return this.http.get(this.host+`/getAllNotifyTravailleur/${id}`);
  }

  // Modifier client
  public updateClient(id: any, utilisateur: any) {
    return this.http.put(this.host+`/updateclient/${id}`, utilisateur);
  }

  // Modifier travailleur
  public updateTravailleur(id: any, utilisateur: any) {
    return this.http.put(this.host+`/updatetravailleur/${id}`, utilisateur);
  }

  // Verifier login client
  public checkLogClient(login:any) {
    return this.http.get(this.host+`/logclient/${login}`);
  }

  // Verifier login travailleur
  public checkLogTravailleur(login:any) {
    return this.http.get(this.host+`/logtravailleur/${login}`);
  }

  setByServ(data: any){
    this.serv = data;
  }

  getByServ(){
    return this.serv;
  }

  setByServicePopup(data: any){
    this.serviceP = data;
  }

  getByServicePopup(){
    return this.serviceP;
  }

}
