import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { CompetenceService } from '../service/competence.service';

@Component({
  selector: 'app-modifier-competence',
  templateUrl: './modifier-competence.page.html',
  styleUrls: ['./modifier-competence.page.scss'],
})
export class ModifierCompetencePage implements OnInit {
id: any;
cp : any
  constructor(
    private activatedRoute: ActivatedRoute,
    public service: CompetenceService,
    public popover: PopoverController,
    private loading: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.id = this.service.getIdComp();
      this.service.detailCompetence(this.id).subscribe((data: any)=>{
        this.cp = data;
        console.log(data);
        
      })
  }

  async close(){
    await this.popover.dismiss();
  }

  async presentAlertSuccess(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Compétence Modifiée',
      message: 'La compétence a été modifiée avec succès !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async updateCompet(){
    const load = await this.loading.create({
      message: 'Patientez...',
      backdropDismiss: false,
      mode: 'ios'
  });
  await load.present();
    this.service.updateCompetence(this.id, this.cp).subscribe((res)=> {
      if(res){
        load.dismiss();
        this.popover.dismiss();
        this.presentAlertSuccess();
      }
      console.log(res);
    })
  }

}
