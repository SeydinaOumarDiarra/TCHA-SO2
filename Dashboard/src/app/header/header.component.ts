import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ServiceutilisateurService } from '../Utilisateurs/service/serviceutilisateur.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  admin: any;
  adminConnect: any;
  travAttente: any= [];
  nbreAttente = 0;
  
  constructor(
    public service: ServiceutilisateurService
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin);

    this.service.getAllTravailleurs().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].etat == "inactif"){
          this.travAttente.push(data[i]);
        }
      }
        this.nbreAttente = this.travAttente.length
    })
  }

}
