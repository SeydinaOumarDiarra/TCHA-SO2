import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AjoutDemande2Page } from 'src/app/Demande/ajout-demande2/ajout-demande2.page';
import { SpecialiteService } from 'src/app/Specialites/service/specialite.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-les-travailleurs',
  templateUrl: './les-travailleurs.page.html',
  styleUrls: ['./les-travailleurs.page.scss'],
})
export class LesTravailleursPage implements OnInit {
  id: any;
  travailleur: any;
  competences: any;
  image = environment.PHOTO;

  constructor(
    public service: SpecialiteService,
    private activatedRoute: ActivatedRoute,
    private route : Router,
    public popover: PopoverController,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getDetailTravailleur(this.id).subscribe((data: any)=>{
      this.travailleur = data;
    });
    this.service.getCompetenceByTravailleur(this.id).subscribe((dt: any)=>{
      this.competences = dt;
    })
    this.image;
  }

  async addDemande(data: any){
    this.service.setTrav(data);
    const popover = await this.popover.create({
      component: AjoutDemande2Page,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

  contact(){
    console.log("okk");
  }

}
