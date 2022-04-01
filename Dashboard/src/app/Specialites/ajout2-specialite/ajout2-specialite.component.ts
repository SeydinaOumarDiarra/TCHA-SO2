import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServivesserviceService } from 'src/app/Services/servivesservice.service';
import { ServicespecialiteService } from '../servicespecialite.service';

@Component({
  selector: 'app-ajout2-specialite',
  templateUrl: './ajout2-specialite.component.html',
  styleUrls: ['./ajout2-specialite.component.scss']
})
export class Ajout2SpecialiteComponent implements OnInit {

  listeService: any;
  idservice: any;
  specialite: any;
  constructor(
    private service: ServicespecialiteService,
    private serviceService: ServivesserviceService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe((data: any)=>{
      this.listeService = data;
    })

    this.idservice = this.serviceService.getIdService();
    console.log(this.idservice);
    
  }

  showToastSuccess() {
    this.toast.success('Spécialité ajoutée avec succès !')
  }

  showToastError() {
    this.toast.error('Erreur du système !')
  }

  AjoutSpecialite(form: NgForm) {
    console.log(form.value);
    if(form.valid){
      this.serviceService.detailService(this.idservice).subscribe((data: any)=>{
        this.specialite = {'service': data, 'nomspe': form.value['nom'], 'description': form.value['description']};
        this.service.addSpecialite(this.specialite).subscribe((data: any)=> {
          this.showToastSuccess();
        })
      })
    }else{
      this.showToastError();
    }
  }

}
