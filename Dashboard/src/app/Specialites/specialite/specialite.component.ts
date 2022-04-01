import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';
import Swal from 'sweetalert2';
import { ServicespecialiteService } from '../servicespecialite.service';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.scss']
})
export class SpecialiteComponent implements OnInit {
  searchText= '';
  p: number = 1;
  listeSpecialites: any = [];
  constructor(public service: ServicespecialiteService, public serviceUser: ServiceutilisateurService, public router: Router) { }

  ngOnInit(): void {
    this.getAllSpecialite();    
  }

  getAllSpecialite(){
    this.service.getAllSpecialites().subscribe((data:any)=> {
      for (let i = 0; i<= data.length; i++){
        if(data[i].etat == 'actif'){
          this.listeSpecialites.push(data[i]);
        }
      }
    })
  }

  deleteSpecialite(id: any){
    this.service.deleteSpecialite(id).subscribe((data: any)=>{})
  }

  deleteSpecialiteTravailleur(id: any){
    this.service.getTravailleurBySpecialite(id).subscribe((datas: any)=>{
      if (datas.length > 0){
        this.service.deleteSpecialite(id).subscribe((data: any)=>{
          for(let i=0; i<datas.length; i++){
            this.serviceUser.deleteTravailleur(datas[i].id).subscribe((spe:any)=>{});
          }
        })
       
      }
    })
  }

  alertConfirmation(id: any) {
    this.service.getTravailleurBySpecialite(id).subscribe((data: any)=>{
      if (data.length > 0){
        Swal.fire({
          title: 'ATTENTION',
          text: 'Des travailleurs sont rattachés à cette spécialité, êtes vous sûr de vouloir supprimer cette spécialité ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Supprimer',
          confirmButtonColor:'#684f0e',
          cancelButtonText: 'Annuler',
          cancelButtonColor: '#f5bb20',
      reverseButtons: true
        }).then((result) => {
          if (result.value) {
            this.deleteSpecialiteTravailleur(id);
            Swal.fire('Suppression!', 'Spécialité supprimée avec succès.', 'success');
            window.location.reload();
            this.router.navigateByUrl('specialites', {skipLocationChange: true}).then(()=>
            this.router.navigate(['specialites']));
          }
        });
      }
      if (data.length == 0){
        Swal.fire({
          title: 'ATTENTION',
          text: 'Êtes vous sûr de vouloir supprimer cette spécialité ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Supprimer',
          confirmButtonColor:'#684f0e',
          cancelButtonText: 'Annuler',
          cancelButtonColor: '#f5bb20',
        }).then((result) => {
          if (result.value) {
            this.deleteSpecialite(id);
            Swal.fire('Suppression!', 'Spécialité supprimée avec succès.', 'success');
            window.location.reload();
            this.router.navigateByUrl('specialites', {skipLocationChange: true}).then(()=>
            this.router.navigate(['specialites']));
          }
        });
      }
    })

  }
}
