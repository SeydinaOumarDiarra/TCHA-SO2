import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicespecialiteService } from 'src/app/Specialites/servicespecialite.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ServivesserviceService } from '../servivesservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  searchText= '';
  p: number = 1;
  listeServices: any = [];
  iconimage = environment.ICONIMAGE;
  constructor(
    public service: ServivesserviceService,
    public serviceSpe: ServicespecialiteService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllService();
    this.iconimage;
  }

  getAllService(){
    this.service.getAllServices().subscribe((data:any)=> {
      for(let i = 0; i< data.length; i ++){
        if(data[i].etat == 'actif'){
          this.listeServices.push(data[i]);
        }
      }
    })
  }

  deleteService(id: any){
    this.service.deleteService(id).subscribe((data: any)=>{})
  }

  deleteServiceSpecialite(id: any){
    this.service.SpecialitesByService(id).subscribe((datas: any)=>{
      if (datas.length > 0){
        this.service.deleteService(id).subscribe((data: any)=>{})
        for(let i=0; i<datas.length; i++){
          this.serviceSpe.deleteSpecialite(datas[i].id).subscribe((spe:any)=>{});
        }
      }
    })
    this.service.deleteService(id).subscribe((data: any)=>{})
  }


  alertConfirmation(id: any) {
    this.service.SpecialitesByService(id).subscribe((data: any)=>{

      if (data.length > 0){
        Swal.fire({
          title: 'ATTENTION',
          text: 'Ce service contient des spécialités, êtes vous sûr de vouloir le supprimer ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Supprimer',
          confirmButtonColor:'#684f0e',
          cancelButtonText: 'Annuler',
          cancelButtonColor: '#f5bb20',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            this.deleteServiceSpecialite(id);
            Swal.fire('Suppression!', 'Service supprimé avec succès.', 'success');
            window.location.reload();
            this.router.navigateByUrl('services', {skipLocationChange: true}).then(()=>
            this.router.navigate(['services']));
          }
        });
      }
      if (data.length == 0){
        Swal.fire({
          title: 'ATTENTION',
          text: 'êtes vous sûr de vouloir supprimer ce service ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Supprimer',
          confirmButtonColor:'#684f0e',
          cancelButtonText: 'Annuler',
          cancelButtonColor: '#f5bb20',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            this.deleteService(id);
            Swal.fire('Suppression!', 'Service supprimé avec succès.', 'success');
            window.location.reload();
            this.router.navigateByUrl('services', {skipLocationChange: true}).then(()=>
            this.router.navigate(['services']));
          }
        });
      }
 
    })
    
  }
}
