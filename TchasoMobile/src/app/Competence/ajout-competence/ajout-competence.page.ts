import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { CompetenceService } from '../service/competence.service';

@Component({
  selector: 'app-ajout-competence',
  templateUrl: './ajout-competence.page.html',
  styleUrls: ['./ajout-competence.page.scss'],
})
export class AjoutCompetencePage implements OnInit {
  cp = {nom: '', description:''}
  workers: any;
  worker: any;
  constructor(
    public popover: PopoverController,
    public router: Router,
    public service: CompetenceService,
    private loading: LoadingController,
    public alertController: AlertController,
  ) { }


  ngOnInit() {
    this.workers =  localStorage.getItem('user');
    this.worker = JSON.parse(this.workers);
  }

  async close(){
    await this.popover.dismiss();
  }

  async presentAlertSuccess(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Compétence ajoutée',
      message: 'Une compétence a été ajoutée avec succès !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async addCompetence(form: NgForm){
    const load = await this.loading.create({
      message: 'Patientez...',
      backdropDismiss: false,
      mode: 'ios'
  });
  await load.present();
  let comp = {'nomCom': form.value['nom'], 
              'description': form.value['description'],
              'etat': 'actif',
              'travailleur': this.worker,
             }
  // console.log(demande);
  
  this.service.AjoutCompetence(comp).subscribe((data: any)=>{
    load.dismiss();
    this.popover.dismiss();
    this.presentAlertSuccess();
    this.router.navigateByUrl('competences', {skipLocationChange: true}).then(()=>
    this.router.navigate(['competences']));
  })
  }

}
