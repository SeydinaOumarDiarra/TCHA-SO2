import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceloginService {

  host = environment.URL
  constructor(private http: HttpClient) { }

  // Gestion Authentification
  public logTravailleur(username: any, password: any, type: any) {
    return this.http.get(this.host+`/logtravailleur/${username}/${password}/${type}`)
  }

  public logClient(username: any, password: any, type: any) {
    return this.http.get(this.host+`/logclient/${username}/${password}/${type}`)
  }
}
