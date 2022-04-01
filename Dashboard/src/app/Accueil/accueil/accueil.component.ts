import { Component, OnInit } from '@angular/core';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  admin: any;
  adminConnect: any;
  clientactif: any = [];
  travailleuractif: any = [];
  demandeactif: any = [];
  nbreclient: any;
  nbretravailleur: any;
  nbredemande: any;

  travAttente: any= [];
  searchText="";
  photo = environment.PHOTO;

  constructor(
    public serviceUser: ServiceutilisateurService,
  ) { }

  ngOnInit() {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin);

    this.serviceUser.getAllClients().subscribe((data: any)=>{
      for(let i =0; i< data.length; i++){
        if(data[i].etat == 'actif'){
          this.clientactif.push(data[i]);
        }
      }
      this.nbreclient = this.clientactif.length;
    })

    this.serviceUser.getAllTravailleurs().subscribe((data: any)=>{
      for(let i =0; i< data.length; i++){
        if(data[i].etat == 'actif'){
          this.travailleuractif.push(data[i]);
        }
      }
      this.nbretravailleur = this.travailleuractif.length;
    })

    this.serviceUser.getAllDemandes().subscribe((data: any)=>{
      for(let i =0; i< data.length; i++){
        if(data[i].etat == 'actif'){
          this.demandeactif.push(data[i]);
        }
      }
      this.nbredemande = this.demandeactif.length;
    })

    this.serviceUser.getAllTravailleurs().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].etat == "inactif"){
          this.travAttente.push(data[i]);
        }
      }
    });
    this.photo;
  }

  


}
