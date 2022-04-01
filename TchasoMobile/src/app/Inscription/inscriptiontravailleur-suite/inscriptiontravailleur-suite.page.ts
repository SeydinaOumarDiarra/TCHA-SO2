import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ServiceInscriptionService } from '../service-inscription.service';

@Component({
  selector: 'app-inscriptiontravailleur-suite',
  templateUrl: './inscriptiontravailleur-suite.page.html',
  styleUrls: ['./inscriptiontravailleur-suite.page.scss'],
})
export class InscriptiontravailleurSuitePage implements OnInit {
  worker = {username:'', specialite:'', photo:'', piece:''};
  listeSpecialite : any;
  travailleurs: any;
  specialiteId: any;
  debutincrit: any;

  public imagePathPhoto: any;
  imgURLPhoto: any;
  photo: File;
  public messagePhoto: any;

  public imagePathPiece: any;
  imgURLPiece: any;
  piece: File;
  public messagePiece: any;

  constructor(
    public service: ServiceInscriptionService,
    public router: Router,
    private loading: LoadingController,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
    this.service.getAllSpecialites().subscribe((data: any)=>{
      this.listeSpecialite = data;
    })

    this.debutincrit = JSON.parse(localStorage.getItem('customerinscri'));
    console.log(this.debutincrit.nom);
    
  }

  preview(event) { 
    this.photo = event.target.files[0];   
    console.log(this.photo.name); 
  }

  previewpiece(event: any) { 
    this.piece = event.target.files[0];   
    console.log(this.piece.name); 
  }

  async presentAlertUsername(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Erreur inscription',
      message: 'Ce nom d\'utilisateur existe déjà !',
      buttons: ['ok']
    });
    await alert.present();
  }

  async presentAlertSuccess(){
    const alert = await this.alertController.create({
      header:'alert',
      subHeader: 'Inscription Succès',
      message: 'Votre inscription a été soumise avec succès. Nous vous contacterons pour validation !',
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
 

    this.service.checkLogTravailleur(form.value['username']).subscribe((login: any)=>{
      if(login != null){
        load.dismiss();
        this.presentAlertUsername();
      }else{
        this.travailleurs = {'nom': form.value['nom'], 'prenom': form.value['prenom']}
        let username =  form.value['username'];
        let special = form.value['specialite'];

        this.service.addTravailleur(this.travailleurs, this.photo, this.piece).subscribe((tr:any)=>{
          this.service.detailSpecialite(special).subscribe((spec: any)=>{
            console.log(this.debutincrit.email);
            
            this.specialiteId = spec;
              tr.nom = this.debutincrit.nom,
              tr.prenom = this.debutincrit.prenom,
              tr.genre = this.debutincrit.genre,
              tr.etat = this.debutincrit.etat,
              tr.type = this.debutincrit.travailleur,
              tr.login = username,
              tr.password = "Tcha"+ this.debutincrit.prenom.substr(0, 3)+ this.debutincrit.nom.substr(0, 3),
              tr.quartier = this.debutincrit.quartier,
              tr.ville = this.debutincrit.ville,
              tr.numWhasapp = this.debutincrit.numWhasapp,
              tr.email = this.debutincrit.email,
              tr.specialite = this.specialiteId
    
              let trav = tr;
              console.log(trav);
              
              this.service.updateTravailleur(trav.id, trav).subscribe((worker: any)=>{
                load.dismiss();
                this.router.navigate(['login']);
                this.presentAlertSuccess();
              })
          });
        })
      }
    })
   
  }

}
