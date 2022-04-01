import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corbeil-utilisateur',
  templateUrl: './corbeil-utilisateur.component.html',
  styleUrls: ['./corbeil-utilisateur.component.scss']
})
export class CorbeilUtilisateurComponent implements OnInit {

  searchText = '';
  utilisateurs: any;
  admins: any = [];
  workers: any = [];
  customers: any = [];
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
        if(data[i].etat == "inactif"){
          this.admins.push(data[i]);
        }
      }
  });
  this.userService.getAllTravailleurs().subscribe((data: any)=>{
    for(let i=0; i< data.length; i++){
      if(data[i].etat == "inactif"){
        this.workers.push(data[i]);
      }
    }    
  });
  this.userService.getAllClients().subscribe((data: any)=>{
    for(let i=0; i< data.length; i++){
      if(data[i].etat == "inactif"){
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
      this.utilisateurs = [].concat(this.admins);
      console.log(this.admins);
      
    }

    if(event.target.value == 'Travailleurs'){
      this.clientEtat = false;
      this.adminEtat = false;
      this.travailleurEtat = true;
      this.utilisateurs = this.workers;    
    }
  }

  restaurerAdmin(id: any){
    this.userService.detailAdmin(id).subscribe((dat: any)=>{
      dat.etat = 'actif';
      this.userService.updateAdmin(id, dat).subscribe((data: any)=>{console.log(data);});
    })
  }

  restaurerTravailleur(id: any){
    this.userService.detailTravailleur(id).subscribe((dat: any)=>{
      dat.etat = 'actif';
      this.userService.updateTravailleur(id, dat).subscribe((data: any)=>{console.log(data);});
    })
  }

  restaurerClient(id: any){
    this.userService.detailClient(id).subscribe((dat: any)=>{
      dat.etat = 'actif';
      this.userService.updateClient(id, dat).subscribe((data: any)=>{console.log(data);});
    })
  }


  alertConfirmationAdmin(id: any) {
    Swal.fire({
      title: 'RESTAURATION',
      text: 'Êtes vous sûr de vouloir restaurer cet administrateur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Restaurer',
      confirmButtonColor:'#684f0e',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#f5bb20',
    }).then((result) => {
      if (result.value) {
        this.restaurerAdmin(id);
        Swal.fire('Restauration!', 'Administrateur restauré avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('corbeil-utilisateur', {skipLocationChange: true}).then(()=>
        this.router.navigate(['corbeil-utilisateur']));
      }
    });
  }

  alertConfirmationTravailleur(id: any) {
    Swal.fire({
      title: 'RESTAURATION',
      text: 'Êtes vous sûr de vouloir restaurer ce travailleur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Restaurer',
      confirmButtonColor:'#684f0e',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#f5bb20',
    }).then((result) => {
      if (result.value) {
        this.restaurerTravailleur(id);
        Swal.fire('Restauration!', 'Travailleur restauré avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('corbeil-utilisateur', {skipLocationChange: true}).then(()=>
        this.router.navigate(['corbeil-utilisateur']));
      }
    });
  }

  alertConfirmationClient(id: any) {
    Swal.fire({
      title: 'RESTAURATION',
      text: 'Êtes vous sûr de vouloir restaurer ce client ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Restaurer',
      confirmButtonColor:'#684f0e',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#f5bb20',
    }).then((result) => {
      if (result.value) {
        this.restaurerClient(id);
        Swal.fire('Restauration!', 'Client restauré avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('corbeil-utilisateur', {skipLocationChange: true}).then(()=>
        this.router.navigate(['corbeil-utilisateur']));
      }
    });
  }

}
