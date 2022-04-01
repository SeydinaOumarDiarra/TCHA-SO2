import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';
import { Popupservice2Page } from 'src/app/Popups/popupservice2/popupservice2.page';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-liste-service',
  templateUrl: './liste-service.page.html',
  styleUrls: ['./liste-service.page.scss'],
})
export class ListeServicePage implements OnInit {
  listeServices: any=[];
  iconimage = environment.ICONIMAGE;
  constructor(
    public router: Router,
    public popover: PopoverController,
    public service: AccueilService
  ) { }

  ngOnInit() {
    this.getAllService();
    this.iconimage;
  }


  getAllService(){
    this.service.getAllServices().subscribe((data:any)=> {
      for(let i=0; i<data.length; i++){
      if(data[i].etat == 'actif'){
        this.listeServices.push(data[i]);
      }
    }
    });
  }

  async showServices(data: any) {
    this.service.setByServ(data);
    this.service.SpecialitesByService(data.id).subscribe((spe: any)=>{
      this.service.setByServicePopup(spe);
    })
    const popover = await this.popover.create({
      component: Popupservice2Page,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();

    const{role} = await popover.onDidDismiss();
    this.service.setByServ(null);
    console.log('Fermer !', role);
  }

}
