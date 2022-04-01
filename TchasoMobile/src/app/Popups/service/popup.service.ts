import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  host = environment.URL;
  travailleurs: any;

  constructor(private http: HttpClient) { }

  setTravailleurs(data: any){
    this.travailleurs = data;
  }

  getTravailleurs(){
    return this.travailleurs;
  }
}
