import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AjoutSpecialiteComponent } from 'src/app/Specialites/ajout-specialite/ajout-specialite.component';
import { Ajout2SpecialiteComponent } from 'src/app/Specialites/ajout2-specialite/ajout2-specialite.component';
import { ServicespecialiteService } from 'src/app/Specialites/servicespecialite.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ServivesserviceService } from '../servivesservice.service';

@Component({
  selector: 'app-detatil-service',
  templateUrl: './detatil-service.component.html',
  styleUrls: ['./detatil-service.component.scss']
})
export class DetatilServiceComponent implements OnInit {
  searchText= '';
  p: number = 1;
  service: any;
  listeSpecialites: any=[];
  iconimage = environment.ICONIMAGE;
  id: any;
  ref: DynamicDialogRef | undefined;

  constructor(
    private services: ServivesserviceService,
    private serviceSpe: ServicespecialiteService,
    private route: ActivatedRoute,
    public router: Router,
    public dialoService: DialogService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.services.detailService(this.id).subscribe((data: any)=>{
      this.service = data;
    });

    this.services.SpecialitesByService(this.id).subscribe((data: any)=>{
      for(let i=0; i<data.length; i++){
        if(data[i].etat == "actif"){
          this.listeSpecialites.push(data[i]);
        }
      }
     
    });

    this.iconimage;
  }

  show(id: any) {
    this.services.setIdService(id);
    this.ref = this.dialoService.open(Ajout2SpecialiteComponent, {
        header: 'Ajouter une spécialité',
        width: '30%',
        // contentStyle: {"max-height": "500px", "overflow": "auto"},
        // baseZIndex: 10000
    });
  }


  deleteSpecialite(id: any){
    this.serviceSpe.deleteSpecialite(id).subscribe((data: any)=>{})
  }


  alertConfirmation(id: any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Êtes vous sûr de vouloir supprimer cette spécialité ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      confirmButtonColor:'#684f0e',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#f5bb20',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.deleteSpecialite(id);
        Swal.fire('Suppression!', 'Spécialité supprimée avec succès.', 'success');
        let url: string = "/detailservice/" + this.id
        window.location.reload();
        this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
        this.router.navigate([url]));
      }
    });
  }

}
