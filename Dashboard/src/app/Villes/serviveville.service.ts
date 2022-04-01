import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServivevilleService {
  host = environment.URL
  constructor(private http: HttpClient) { }

  public addVille(service: any) {
    return this.http.post(this.host+"/ville/ajout", service)
  }

  public getAllVilles(){
    return this.http.get(this.host+"/ville/all")
  }

  public updateVille(id: any, service: any) {
    return this.http.put(this.host+`/updateville/${id}`, service);
  }

  detailVille(id:any){
    return this.http.get(this.host+"/ville/"+id)
  }

  public deleteVille(id:any) {
    return this.http.delete(this.host+"/ville/delette/"+id);
  }
}
