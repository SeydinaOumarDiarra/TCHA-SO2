import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';
import { ServiceInscriptionService } from 'src/app/Inscription/service-inscription.service';

@Component({
  selector: 'app-modifier-infos',
  templateUrl: './modifier-infos.page.html',
  styleUrls: ['./modifier-infos.page.scss'],
})
export class ModifierInfosPage implements OnInit {
users:any;
user: any;
us: any;
  constructor(
    public service: AccueilService,
    public serviceA: AccueilService,
    public popover: PopoverController,
    private loading: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.users =  localStorage.getItem('user');
    this.user = JSON.parse(this.users); 
    this.us = this.user; 
  }

  async close(){
    await this.popover.dismiss();
  }

  async presentAlertSuccess(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Profil Modifié',
      message: 'Vos informations ont été modifiée avec succès !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async updateInfos(){
    const load = await this.loading.create({
      message: 'Patientez...',
      backdropDismiss: false,
      mode: 'ios'
    });
    await load.present();
    this.service.updateClient(this.us.id, this.us).subscribe((res)=> {
        if(res){
          load.dismiss();
          this.popover.dismiss();
          this.presentAlertSuccess();
        }
        console.log(res);
    })
  }

}
