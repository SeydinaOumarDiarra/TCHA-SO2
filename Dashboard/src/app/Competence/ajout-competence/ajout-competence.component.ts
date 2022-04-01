import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';
import { CompetenceService } from '../service/competence.service';

@Component({
  selector: 'app-ajout-competence',
  templateUrl: './ajout-competence.component.html',
  styleUrls: ['./ajout-competence.component.scss']
})
export class AjoutCompetenceComponent implements OnInit {
  id: any;
  travailleur: any;
  constructor(
    public service: ServiceutilisateurService,
    public serviceC: CompetenceService,
    private activatedRoute: ActivatedRoute,
    private route : Router,
    private toast: ToastrService

  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.detailTravailleur(this.id).subscribe((data: any)=>{
      this.travailleur = data;
    })
  }

  showToastSuccess() {
    this.toast.success('Service ajouté avec succès !')
  }

  showToastError() {
    this.toast.error('Erreur du système !')
  }

  AjoutCompetence(form: NgForm) {
    let com = {'nomCom': form.value['nom'], 'description': form.value['description'], 'travailleur': this.travailleur}
    this.serviceC.addCompetence(com).subscribe((data: any)=> {
      if(data){
        this.showToastSuccess();
      }
    })    
  }


}
