import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServivesserviceService {
  host = environment.URL
  idservice: any;
  constructor(private http: HttpClient) { }

  setIdService(serv: any){this.idservice = serv}
  getIdService(){return this.idservice}

  public addService(service: any, image: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append("image", image);
    return this.http.post(this.host+"/service/ajout", formData)
  }

  public getAllServices(){
    return this.http.get(this.host+"/service/all")
  }

  public updateService(id: any, service: any) {
    return this.http.put(this.host+`/updateservice/${id}`, service);
  }

  detailService(id:any){
    return this.http.get(this.host+"/service/"+id)
  }

  public deleteService(id:any) {
    return this.http.delete(this.host+"/service/delette/"+id);
  }

  // Get specialites par service
  public SpecialitesByService(id: any){
    return this.http.get(this.host+`/spec/${id}`)
  }

  public getIcon(id:any) {
    return this.http.get(this.host+"/iconservice/"+id);
  }
}
