import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { SpecialiteService } from 'src/app/Specialites/service/specialite.service';
import { CommentaireService } from '../commentaire.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit, ViewWillEnter{
  clients: any;
  client: any;
  travailleur;
  commentaire = {description:''};

  constructor(public service: CommentaireService,
              public serviceSpe: SpecialiteService,
              public router: Router) { }

  ngOnInit() {
    this.clients =  localStorage.getItem('user');
    this.client = JSON.parse(this.clients);
    this.travailleur = this.serviceSpe.getTravComment();
  }

  ionViewWillEnter() {
   
}

  addComment(form: NgForm){
    // console.log(form.value);

    let commentaire={
      description: form.value['description'],
      travailleur: this.travailleur,
      client: this.client,
      datepub: new Date()
    }

    this.service.AjoutCommentaire(commentaire).subscribe((data: any)=>{
      //this.commentaire
      form.reset();
      this.router.navigateByUrl('commentaire');
    })
    
  }

}
