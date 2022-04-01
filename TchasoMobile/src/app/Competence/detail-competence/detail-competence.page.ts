import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { ModifierCompetencePage } from '../modifier-competence/modifier-competence.page';
import { CompetenceService } from '../service/competence.service';
import { SupprimerCompetencePage } from '../supprimer-competence/supprimer-competence.page';

@Component({
  selector: 'app-detail-competence',
  templateUrl: './detail-competence.page.html',
  styleUrls: ['./detail-competence.page.scss'],
})
export class DetailCompetencePage implements OnInit {
id: any;
comp: any
  constructor(
    public route: ActivatedRoute,
    public service: CompetenceService,
    public popover: PopoverController,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.service.detailCompetence(this.id).subscribe((data: any)=>{
    this.comp = data;
    console.log("comppp ",this.comp.nomCom);
    })
  }

  async updateDemande(data: any){
    this.service.setIdComp(data);
    const popover = await this.popover.create({
      component: ModifierCompetencePage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

  async deleteDemande(data: any){
    this.service.setIdComp(data);
    const popover = await this.popover.create({
      component: SupprimerCompetencePage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

}
