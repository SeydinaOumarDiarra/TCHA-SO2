import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';
import { ServiceInscriptionService } from '../service-inscription.service';

@Component({
  selector: 'app-inscriptionclient',
  templateUrl: './inscriptionclient.page.html',
  styleUrls: ['./inscriptionclient.page.scss'],
})
export class InscriptionclientPage implements OnInit {
  
client = {nom:'', prenom:'', genre:'', telephone:null, username:'', password:'', repeatpassword:''};
customer: any;
loginCheck: any;
  constructor(
    public service: ServiceInscriptionService,
    public serviceA: AccueilService,
    public router: Router,
    private loading: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  async presentAlertUsername(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Erreur inscription',
      message: 'Le nom d\'utilisateur existe déjà !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async presentAlertPassword(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Mot de passe incorrecte',
      message: 'Les deux mots de passe sont différents !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async presentAlertLogin(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Login existant',
      message: 'Le nom d\'utilisateur choisi est déjà pris !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async inscription(form: NgForm){
    const load = await this.loading.create({
        message: 'Patientez...',
        backdropDismiss: false,
        mode: 'ios'
    });
    await load.present();
    this.customer = {nom: form.value["nom"], prenom: form.value["prenom"], genre: form.value["genre"], 
                    numWhasapp: form.value["telephone"], login: form.value["username"],
                    password: form.value["password"], etat: 'actif', type: 'client'};
    this.serviceA.checkLogClient(form.value["username"]).subscribe((log: any)=>{
      this.loginCheck = log;
      if(this.loginCheck == null){
        if(form.value["password"] == form.value["repeatpassword"]){
          this.service.inscriptionClient(this.customer)      
          .subscribe((response: any) => {
                  load.dismiss();
                  localStorage.setItem('user', JSON.stringify(response));
                  this.router.navigate(['/accueilclient']);
              }
          );
        }else{
          load.dismiss();
          this.presentAlertPassword();
        }
      }else{
        load.dismiss();
        this.presentAlertLogin();
      }                
    
    })
 
  }

  login(){
    this.router.navigate(['/login']);
  }

}
