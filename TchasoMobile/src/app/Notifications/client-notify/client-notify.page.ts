import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';
import { DemandeService } from 'src/app/Demande/service/demande.service';
import { environment } from 'src/environments/environment';
import { LireNotifyClientPage } from '../lire-notify-client/lire-notify-client.page';

@Component({
  selector: 'app-client-notify',
  templateUrl: './client-notify.page.html',
  styleUrls: ['./client-notify.page.scss'],
})
export class ClientNotifyPage implements OnInit {
notify: any = [];
id: any;
image = environment.PHOTO;
  constructor(
    public serviceA: AccueilService,
    public serviceD: DemandeService,
    private route: ActivatedRoute,
    public popover: PopoverController,
    public router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.serviceA.getAllNotifyClient(this.id).subscribe((dt:any)=>{
      for(let i=0; i<dt.length; i++){
        if(dt[i].etat == 'actif'){
          this.notify.push(dt[i]);
        }
      }
    });
    this.image;
  }

  // Lecture de la notification;
  async lirenotify(data: any) {
    this.serviceD.DetailDemande(data).subscribe((demande: any)=>{
      demande.statutdemandeclient = "lu";
      
      this.serviceD.ModifierDemande(demande, demande.id).subscribe((dt: any)=>{
        console.log(dt);
        this.serviceD.setNotifyClient(dt);
      });
    })
    const popover = await this.popover.create({
      component: LireNotifyClientPage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();

    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

  accueil(){
    this.router.navigate(['accueilclient'])
  }

}
