import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ServiceutilisateurService } from '../service/serviceutilisateur.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  searchText = '';
  p: number = 1;
  a: number = 1;
  utilisateurs: any;
  admins: any =[];
  workers: any =[];
  customers: any =[];
  adminEtat = false;
  clientEtat = false;
  travailleurEtat = false;
  travailleurs: any;
  clients: any;
  photo = environment.PHOTO;

  constructor(
    private userService: ServiceutilisateurService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.photo
    this.userService.getAllAdmins().subscribe((data: any)=>{
      for(let i=0; i< data.length; i++){
        if(data[i].etat == "actif"){
          this.admins.push(data[i]);
        }
      }   
  });
  this.userService.getAllTravailleurs().subscribe((data: any)=>{
    for(let i=0; i< data.length; i++){
      if(data[i].etat == "actif"){
        this.workers.push(data[i]);
      }
    }     
  });
  this.userService.getAllClients().subscribe((data: any)=>{
    for(let i=0; i< data.length; i++){
      if(data[i].etat == "actif"){
        this.customers.push(data[i]);
      }
    }  
  });
    this.adminEtat;
    this.clientEtat;
    this.travailleurEtat; 
    
  }

  users(event: any){
    console.log(event.target.value);
    this.utilisateurs=[];
    if(event.target.value == 'Clients' || event.target.value == ''){
      this.adminEtat = false;
      this.travailleurEtat = false;
      this.clientEtat = true;
      this.utilisateurs = this.customers;
    }
    if(event.target.value == 'Administrateurs'){
      this.clientEtat = false;
      this.travailleurEtat = false;
      this.adminEtat = true;
      this.utilisateurs = this.admins;
    }

    if(event.target.value == 'Travailleurs'){
      this.clientEtat = false;
      this.adminEtat = false;
      this.travailleurEtat = true;
      this.utilisateurs = this.workers;    
    }
  }


  deleteAdmin(id: any){
    this.userService.deleteAdmin(id).subscribe((data: any)=>{})
  }

  deleteTravailleur(id: any){
    this.userService.deleteTravailleur(id).subscribe((data: any)=>{})
  }

  deleteClient(id: any){
    this.userService.deleteClient(id).subscribe((data: any)=>{})
  }


  alertConfirmationAdmin(id: any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Êtes vous sûr de vouloir supprimer cet administrateur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      confirmButtonColor:'#684f0e',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#f5bb20',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.deleteAdmin(id);
        Swal.fire('Suppression!', 'Administrateur supprimé avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('utilisateurs', {skipLocationChange: true}).then(()=>
        this.router.navigate(['utilisateurs']));
      }
    });
  }

  alertConfirmationTravailleur(id: any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Êtes vous sûr de vouloir supprimer ce travailleur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      confirmButtonColor:'#684f0e',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#f5bb20',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.deleteTravailleur(id);
        Swal.fire('Suppression!', 'Travailleur supprimé avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('utilisateurs', {skipLocationChange: true}).then(()=>
        this.router.navigate(['utilisateurs']));
      }
    });
  }

  alertConfirmationClient(id: any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Êtes vous sûr de vouloir supprimer ce client ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      confirmButtonColor:'#684f0e',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#f5bb20',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.deleteClient(id);
        Swal.fire('Suppression!', 'Client supprimé avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('utilisateurs', {skipLocationChange: true}).then(()=>
        this.router.navigate(['utilisateurs']));
      }
    });
  }
    
    
}
