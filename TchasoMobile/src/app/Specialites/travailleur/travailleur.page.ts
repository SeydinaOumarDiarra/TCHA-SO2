import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, ViewWillEnter } from '@ionic/angular';
import { CommentaireService } from 'src/app/Commentaires/commentaire.service';
import { AjoutDemandePage } from 'src/app/Demande/ajout-demande/ajout-demande.page';
import { AddNotationPage } from 'src/app/Notations/add-notation/add-notation.page';
import { NotationService } from 'src/app/Notations/Services/notation.service';
import { environment } from 'src/environments/environment';
import { SpecialiteService } from '../service/specialite.service';

@Component({
  selector: 'app-travailleur',
  templateUrl: './travailleur.page.html',
  styleUrls: ['./travailleur.page.scss'],
})
export class TravailleurPage implements OnInit {
  id: any;
  travailleur: any;
  competences: any;
  nbreComment: any;
  nbreNote: any;
  image = environment.PHOTO;

  constructor(
    public service: SpecialiteService,
    public serviceCom: CommentaireService,
    public serviceNote: NotationService,
    private activatedRoute: ActivatedRoute,
    private route : Router,
    public popover: PopoverController,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
      this.service.getDetailTravailleur(this.id).subscribe((data: any)=>{
        this.travailleur = data;
      });
      this.service.getCompetenceByTravailleur(this.id).subscribe((dt: any)=>{
        this.competences = dt;
      })

      this.serviceCom.getCommmentaireByTravailleur(this.id).subscribe((dat: any)=>{        
        this.nbreComment = dat.length;      
      })

      this.serviceNote.getNotationByTravailleur(this.id).subscribe((nt: any)=>{
        if(nt.length == 0){
          this.nbreNote = 0
        }else{
          let somme = 0;
          let moyenne = 0;
          for(let i = 0; i< nt.length; i++){
            somme = somme + nt[i].note
          }
          moyenne = somme/nt.length;
          this.nbreNote = Math.trunc(moyenne);          
        }
      })
      this.image;
  }





  async addDemande(data: any){
    this.service.setTrav(data);
    const popover = await this.popover.create({
      component: AjoutDemandePage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

  comment(id: any){
   this.service.setTravComment(id);
    this.route.navigate(['commentaire']);
  }

  async note(data: any){
    this.serviceNote.setTravNotation(data);
    const popover = await this.popover.create({
      component: AddNotationPage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }


}
