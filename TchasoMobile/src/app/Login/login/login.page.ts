import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { ServiceloginService } from './Service/servicelogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {username:'', password:''}
  constructor(
    public actionSheetController:ActionSheetController,
    public service: ServiceloginService,
    public router: Router,
    private loading: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  async presentAlertIdentifiant(){
    const alert = await this.alertController.create({
      subHeader: 'Erreur',
      message: 'indentifiants incorrects ou compte inactif  !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async onLogin(form: NgForm){
    const load = await this.loading.create({
      message: 'Patientez...',
      backdropDismiss: false,
      mode: 'ios'
  });
  await load.present();
  this.service.logTravailleur(form.value['username'], form.value['password'], 'travailleur').subscribe((travailleur: any)=>{
    if(travailleur !== null && travailleur.etat === 'actif'){
      load.dismiss();
      localStorage.setItem('user', JSON.stringify(travailleur));
      this.router.navigate(['/accueil']);
    }else{
      this.service.logClient(form.value['username'], form.value['password'], 'client').subscribe((client: any)=>{
        if(client !== null && client.etat === 'actif'){
          load.dismiss();
          localStorage.setItem('user', JSON.stringify(client));
          this.router.navigate(['/accueilclient']);
        }else{
          load.dismiss();
          this.presentAlertIdentifiant()          
        }
      })
    }
  })


  }





  async reset(){
    const alertForm = await this.alertController.create({
      header: 'Mot de passe oublié ?',
      subHeader: 'Récuperation de mot de passe',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'Saisissez votre email'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        },
        {
          text: 'Valider',
          handler:(data) => {

          }
        }
      ]
    });
    await alertForm.present();
  }

  async onSignIn(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Je m\'inscris en tant que : ',
      buttons: [
        {
          text: 'TCHA-GNININA (Client)',
          handler:()=>{
            this.router.navigate(['/inscriptionclient']);
          }
        },
        {
          text: 'TCHA-KELA (Tavailleur)',
          handler:()=>{
            this.router.navigate(['/inscriptiontravailleur']);
          }
        },
        {
          text: 'Annuler',
          icon: 'close',
          role: 'cancel',
          handler:()=>{}
        },
      ]
    });
    await actionSheet.present();
  }

}
