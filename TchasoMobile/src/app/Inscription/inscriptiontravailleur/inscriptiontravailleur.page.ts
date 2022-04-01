import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ServiceInscriptionService } from '../service-inscription.service';

@Component({
  selector: 'app-inscriptiontravailleur',
  templateUrl: './inscriptiontravailleur.page.html',
  styleUrls: ['./inscriptiontravailleur.page.scss'],
})
export class InscriptiontravailleurPage implements OnInit {
  worker = {nom:'', prenom:'', genre:'', telephone:null, ville:'', quartier:''};
  listeVille: any;

  constructor(
    public service: ServiceInscriptionService,
    public router: Router,
    private loading: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.service.getAllVilles().subscribe((data: any)=>{
      this.listeVille = data;
    })
  }

  login(){
    this.router.navigate(['/login']);
  }

  async inscription(form: NgForm){
    const load = await this.loading.create({
        message: 'Patientez...',
        backdropDismiss: false,
        mode: 'ios'
    });
    await load.present();
    this.service.detailVille(form.value['ville']).subscribe((vil: any)=>{
      let customer = {nom: form.value["nom"], prenom: form.value["prenom"], genre: form.value["genre"], 
                      numWhasapp: form.value["telephone"], email: form.value["email"], ville: vil,quartier: form.value["quartier"], 
                      etat: 'inactif', type: 'travailleur'
                    };
      localStorage.setItem('customerinscri', JSON.stringify(customer));
      load.dismiss();
      this.router.navigate(['/inscriptiontravailleur-suite']);
    })
   
  }

}
