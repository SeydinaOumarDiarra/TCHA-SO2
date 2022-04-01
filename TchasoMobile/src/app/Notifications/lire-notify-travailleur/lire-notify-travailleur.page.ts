import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { DemandeService } from 'src/app/Demande/service/demande.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lire-notify-travailleur',
  templateUrl: './lire-notify-travailleur.page.html',
  styleUrls: ['./lire-notify-travailleur.page.scss'],
})
export class LireNotifyTravailleurPage implements OnInit {
idNotify: any;
noti: any;
image = environment.PHOTO;
customers: any;
customer: any;
  constructor(
    public serviceD: DemandeService,
    private loading: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.customers =  localStorage.getItem('user');
    this.customer = JSON.parse(this.customers);
    this.idNotify = this.serviceD.getNotifyTravailleur()
    this.serviceD.DetailDemande(this.idNotify).subscribe((notif: any)=>{ this.noti = notif});
    this.image;
  }

  async presentAlertConfirmer(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Demande Confirmée',
      message: 'Vous avez confirmez avec succès la demande!',
      buttons: ['ok']
    });
    await alert.present();
  }

  async presentAlertDecliner(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Demande declinée',
      message: 'Vous avez declinez avec succès la demande !',
      buttons: ['ok']
    });
    await alert.present();
  }


  async confirmer(data: any){
    const load = await this.loading.create({
      message: 'Patientez...',
      backdropDismiss: false,
      mode: 'ios'
  });
  await load.present();
      data.isaccept = true 
      this.serviceD.ModifierDemande(data, data.id).subscribe((data: any)=>{
        load.dismiss();
        this.presentAlertConfirmer();
      })
   
  }

  async decliner(data: any){
    const load = await this.loading.create({
      message: 'Patientez...',
      backdropDismiss: false,
      mode: 'ios'
  });
  await load.present();
    data.isaccept = false
    this.serviceD.ModifierDemande(data, data.id).subscribe((data: any)=>{
      load.dismiss();
      this.presentAlertConfirmer();
    })
  }
  

}
