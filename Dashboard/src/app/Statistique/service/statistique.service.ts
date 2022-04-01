import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  nbreClient: any = 0;

  constructor() { }

  setNbreClients(data: any){this.nbreClient = data}
  getNbreClients(){return this.nbreClient}
}
