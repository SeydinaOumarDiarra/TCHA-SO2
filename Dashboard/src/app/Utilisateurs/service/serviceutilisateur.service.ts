import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceutilisateurService {
  idtravailleur: any
  host = environment.URL
  constructor(private http: HttpClient) { }

  setIdTravailleur(data: any){this.idtravailleur = data}
  getIdTravailleur(){return this.idtravailleur}

  // Gestion Administrateur
  public addAdmin(admin: any) {
    return this.http.post(this.host+"/administrateur/ajout", admin)
  }
  public getAllAdmins(){
    return this.http.get(this.host+"/administrateur/all")
  }
  public updateAdmin(id: any, utilisateur: any) {
    return this.http.put(this.host+`/updateadmin/${id}`, utilisateur);
  }
  detailAdmin(id:any){
    return this.http.get(this.host+"/administrateur/"+id)
  }
  public deleteAdmin(id:any) {
    return this.http.delete(this.host+"/administrateur/delette/"+id);
  }

  // Gestion des demandes
  public forgotPassword(email: any){
    return this.http.get(this.host+"/reinitialiser/"+ email)
  }

  // Gestion Travailleur
  public addTravailleur(travailleur: any, photo: File, piece: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("image", photo);
    formData.append("piece", piece);
    return this.http.post(this.host+"/travailleur/ajout", formData)
  }
  public getAllTravailleurs(){
    return this.http.get(this.host+"/travailleur/all")
  }
  public updateTravailleur(id: any, utilisateur: any) {
    return this.http.put(this.host+`/updatetravailleur/${id}`, utilisateur);
  }
  public updateTravailleurWithFile(id: any, travailleur: any, photo: File, piece: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("image", photo);
    formData.append("piece", piece);
    return this.http.put(this.host+`/updatetravailleurwithfile/${id}`, formData)
  }

  detailTravailleur(id:any){
    return this.http.get(this.host+"/travailleur/"+id)
  }

  demandeByTravailleur(id:any){
    return this.http.get(this.host+"/demandeByTravailleur/"+id)
  }

  public deleteTravailleur(id:any) {
    return this.http.delete(this.host+"/travailleur/delette/"+id);
  }
  public checkLogTravailleur(login:any) {
    return this.http.get(this.host+`/logtravailleur/${login}`);
  }

  // Gestion Clients
  public addClient(client: any) {
    return this.http.post(this.host+"/client/ajout", client)
  }
  public getAllClients(){
    return this.http.get(this.host+"/client/all")
  }
  public updateClient(id: any, utilisateur: any) {
    return this.http.put(this.host+`/updateclient/${id}`, utilisateur);
  }
  detailClient(id:any){
    return this.http.get(this.host+"/client/"+id)
  }
  public deleteClient(id:any) {
    return this.http.delete(this.host+"/client/delette/"+id);
  }

  // Gestion des demandes
  public getAllDemandes(){
    return this.http.get(this.host+"/demande/all")
  }

  // count clients
  public getCpteClient(){
    return this.http.get(this.host+"/count/client")
  }
  public  getCpteClientKal(){
    return this.http.get(this.host+"/count/client")
  }
}
