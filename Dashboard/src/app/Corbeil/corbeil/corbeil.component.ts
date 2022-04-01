import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServivesserviceService } from 'src/app/Services/servivesservice.service';
import { ServicespecialiteService } from 'src/app/Specialites/servicespecialite.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corbeil',
  templateUrl: './corbeil.component.html',
  styleUrls: ['./corbeil.component.scss']
})
export class CorbeilComponent implements OnInit {
  searchText= '';
  listeServices: any = [];
  iconimage = environment.ICONIMAGE;

  constructor(public service: ServivesserviceService, public router: Router,public serviceSpe: ServicespecialiteService,) { }

  ngOnInit(): void {
    this.getAllService();
    this.iconimage;
  }

  getAllService(){
    this.service.getAllServices().subscribe((data:any)=> {
      for(let i=0; i <= data.length; i++){
        if(data[i].etat=='inactif'){
          this.listeServices.push(data[i]);
        }
      }
      
    })
  }

  restaurerService(id: any){
    this.service.detailService(id).subscribe((dat: any)=>{
      dat.etat = 'actif';
      this.service.updateService(id, dat).subscribe((data: any)=>{console.log(data);});
    })
  }

  restaurerServiceAndSpecialite(id: any){
    this.service.detailService(id).subscribe((serv: any)=>{
      this.service.SpecialitesByService(serv.id).subscribe((spe: any)=>{
        if(spe.length > 0){
          serv.etat = 'actif';
          this.service.updateService(serv.id, serv).subscribe((data: any)=>{
            for(let i=0; i< spe.length; i++){
              this.serviceSpe.detailSpecialite(spe[i].id).subscribe((dat: any)=>{
                dat.etat = 'actif';
                this.serviceSpe.updateSpecialite(dat.id, dat).subscribe((data: any)=>{console.log(data);});
              })
            }
          });

        }
      })
    })
  }



  alertConfirmation(id: any) {
    this.service.SpecialitesByService(id).subscribe((data: any)=>{
      console.log(data);
      
      if (data.length > 0){
        Swal.fire({
          title: 'ATTENTION',
          text: 'Ce service contient des spécialités, êtes vous sûr de vouloir restaurer ce service avec les spécialités liées ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Restaurer',
          confirmButtonColor:'#684f0e',
          cancelButtonText: 'Annuler',
          cancelButtonColor: '#f5bb20',
        }).then((result) => {
          if (result.value) {
            this.restaurerServiceAndSpecialite(id);
            Swal.fire('Restauration!', 'Le service est restauré avec succès.', 'success');
            window.location.reload();
            this.router.navigateByUrl('corbeil', {skipLocationChange: true}).then(()=>
            this.router.navigate(['corbeil']));
          }
        });
      }
      if (data.length == 0){
        Swal.fire({
          title: 'ATTENTION',
          text: 'êtes vous sûr de vouloir restaurer ce service ?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Restaurer',
          confirmButtonColor:'#684f0e',
          cancelButtonText: 'Annuler',
          cancelButtonColor: '#f5bb20',
      reverseButtons: true
        }).then((result) => {
          if (result.value) {
            this.restaurerService(id);
            Swal.fire('Restauration!', 'Le service est restauré avec succès.', 'success');
            window.location.reload();
            this.router.navigateByUrl('corbeil', {skipLocationChange: true}).then(()=>
            this.router.navigate(['corbeil']));
          }
        });
      }
 
    })
    
  }


}
