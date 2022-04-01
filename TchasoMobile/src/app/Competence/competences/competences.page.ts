import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AjoutCompetencePage } from '../ajout-competence/ajout-competence.page';
import { CompetenceService } from '../service/competence.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.page.html',
  styleUrls: ['./competences.page.scss'],
})
export class CompetencesPage implements OnInit {
customers: any;
customer: any;
id: any;
competences: any
  constructor(
    public service: CompetenceService,
    public popover: PopoverController,
  ) { }

  ngOnInit() {
    this.customers =  localStorage.getItem('user');
    this.customer = JSON.parse(this.customers);

    this.service.getCompetence(this.customer.id).subscribe((data: any)=>{
      this.competences =  data;
    })
  }

  async addCompetence(data: any){
    this.service.setComp(data);
    const popover = await this.popover.create({
      component: AjoutCompetencePage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

  
}
