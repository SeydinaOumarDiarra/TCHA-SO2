import { Component, OnInit } from '@angular/core';
import { SpecialiteService } from 'src/app/Specialites/service/specialite.service';
import { CommentaireService } from '../commentaire.service';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.page.html',
  styleUrls: ['./commentaire.page.scss'],
})
export class CommentairePage implements OnInit {
  comment: any;
  travailleur: any;
  
  constructor(public service: CommentaireService,
              public serviceSpe: SpecialiteService) { }

  ngOnInit() {
    this.travailleur = this.serviceSpe.getTravComment();
    this.service.getCommmentaireByTravailleur(this.travailleur.id).subscribe((dat: any)=>{
      console.log(dat);
      
      this.comment = dat;      
    })
  }

  ionViewWillEnter() {
   
  }

}
