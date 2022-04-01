import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { SpecialiteService } from 'src/app/Specialites/service/specialite.service';
import { environment } from 'src/environments/environment';
import { DemandeService } from '../service/demande.service';

@Component({
  selector: 'app-ajout-demande',
  templateUrl: './ajout-demande.page.html',
  styleUrls: ['./ajout-demande.page.scss'],
})
export class AjoutDemandePage implements OnInit {
  demande = {motif:''};
  clients: any;
  client: any;
  idTrav: any;
  travailleur: any;
  photo =  environment.PHOTO;
  constructor(
    public popover: PopoverController,
    public router: Router,
    public service: DemandeService,
    public serviceS: SpecialiteService,
    private loading: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.clients =  localStorage.getItem('user');
    this.client = JSON.parse(this.clients);
    this.idTrav = this.serviceS.getTrav();
    this.serviceS.getDetailTravailleur(this.idTrav).subscribe((worker: any)=>{
      this.travailleur = worker;
    });
    this.photo;
  }

  async close(){
    await this.popover.dismiss();
  }

  async presentAlertSuccess(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Message envoyé',
      message: 'Votre quête a été soumise avec succès !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async addDemande(form: NgForm){
    const load = await this.loading.create({
      message: 'Patientez...',
      backdropDismiss: false,
      mode: 'ios'
  });
  await load.present();
  let demande = {'motifdemande': form.value['motif'], 
                 'datedemande': new Date(),
                 'statutdemande': 'non_lu',
                 'statutdemandeclient': 'non_lu',
                 'travailleur': this.travailleur,
                 'client':this.client,
                }
  console.log(demande);
  
  this.service.AjoutDemande(demande).subscribe((data: any)=>{
    load.dismiss();
    this.popover.dismiss();
    this.presentAlertSuccess();
  })
  }
  

}
