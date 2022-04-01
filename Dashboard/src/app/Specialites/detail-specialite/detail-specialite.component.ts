import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';
import { Ajout2TravailleurComponent } from 'src/app/Utilisateurs/Travailleur/ajout2-travailleur/ajout2-travailleur.component';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ServicespecialiteService } from '../servicespecialite.service';

@Component({
  selector: 'app-detail-specialite',
  templateUrl: './detail-specialite.component.html',
  styleUrls: ['./detail-specialite.component.scss']
})
export class DetailSpecialiteComponent implements OnInit {
  searchText = '';
  p: number = 1;
  id: any;
  specialite: any;
  workers: any =[];
  photo = environment.PHOTO;
  ref: DynamicDialogRef | undefined;

  constructor(
    private service: ServicespecialiteService,
    private userService: ServiceutilisateurService,
    public router: Router,
    private route: ActivatedRoute,
    public dialoService: DialogService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.detailSpecialite(this.id).subscribe((data: any)=>{
    this.specialite = data;
    });
    this.service.getTravailleurBySpecialite(this.id).subscribe((data: any)=>{
      for(let i=0; i< data.length; i++){
        if(data[i].etat == "actif"){
          this.workers.push(data[i]);
        }
      }     
    });
    this.photo
  }

  deleteTravailleur(id: any){
    this.userService.deleteTravailleur(id).subscribe((data: any)=>{})
  }


  alertConfirmationTravailleur(id: any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Êtes vous sûr de vouloir supprimer ce travailleur ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.value) {
        this.deleteTravailleur(id);
        Swal.fire('Suppression!', 'Travailleur supprimé avec succès.', 'success');
        let url: string = "/detailspecialite/" + this.id
        window.location.reload();
        this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
        this.router.navigate([url]));
      }
    });
  }

  show(id: any) {
    this.service.setIdSpecialite(id);
    this.service.detailSpecialite(this.id).subscribe((data: any)=>{
      this.specialite = data;
      this.ref = this.dialoService.open(Ajout2TravailleurComponent, {
        header: 'Affecter un travailleur à la spécialité '+data.nomspe,
        width: '80%',
        // contentStyle: {"max-height": "500px", "overflow": "auto"},
        // baseZIndex: 10000
    });
      });
   
  }

}
