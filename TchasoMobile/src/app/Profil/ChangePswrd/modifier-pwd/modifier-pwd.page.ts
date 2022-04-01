import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';


@Component({
  selector: 'app-modifier-pwd',
  templateUrl: './modifier-pwd.page.html',
  styleUrls: ['./modifier-pwd.page.scss'],
})
export class ModifierPwdPage implements OnInit {
  users: any;
  user: any;
  mp = {apass:'', npass:'',cpass:''}
  constructor(
    public router: Router,
    public serviceA: AccueilService,
    private loading: LoadingController,
    public alertController: AlertController,
    public popover: PopoverController,
  ) { }

  ngOnInit() {
    this.users =  localStorage.getItem('user');
    this.user = JSON.parse(this.users);    
  }

  async close(){
    await this.popover.dismiss();
  }

  async presentAlertSuccess(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Opération reussit',
      message: 'Votre mot de passe a été ajoutée avec succès !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async presentAlertAncienPwd(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Erreur',
      message: 'L\'ancen mot de passe est incorrect !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async presentAlertNCPwd(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Erreur',
      message: 'Les deux mots de passe ne sont pas identiques',
      buttons: ['ok']
    });
    await alert.present();
  }

  async modifierpwd(form: NgForm){
    const load = await this.loading.create({
      message: 'Patientez...',
      backdropDismiss: false,
      mode: 'ios'
  });
  await load.present();
  console.log(form.value['apass']);
  
    if(form.value['apass'] == this.user.password){
      if(form.value['npass'] == form.value['cpass']){
          this.user.password = form.value['npass'];
          if(this.user.type == "client"){
            this.serviceA.updateClient(this.user.id, this.user).subscribe((data: any)=>{
              load.dismiss();
              this.popover.dismiss();
              this.presentAlertSuccess()
            })
          }else{
            if(this.user.type == "travailleur"){
              this.serviceA.updateTravailleur(this.user.id, this.user).subscribe((data: any)=>{
                load.dismiss();
                this.popover.dismiss();
                this.presentAlertSuccess()
              })
            }
          }
      }else{
        load.dismiss();
        this.presentAlertNCPwd();
      }
    }else{
      load.dismiss();
      this.presentAlertAncienPwd();
    }
  }

}
