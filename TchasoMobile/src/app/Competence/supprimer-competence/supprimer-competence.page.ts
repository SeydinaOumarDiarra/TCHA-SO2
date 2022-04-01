import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CompetenceService } from '../service/competence.service';

@Component({
  selector: 'app-supprimer-competence',
  templateUrl: './supprimer-competence.page.html',
  styleUrls: ['./supprimer-competence.page.scss'],
})
export class SupprimerCompetencePage implements OnInit {
  id : any;
  workers: any;
  worker: any;
  constructor(
    public service: CompetenceService,
    public popover: PopoverController,
    public router: Router,
  ) { }

  ngOnInit() {
    this.id = this.service.getIdComp();
    console.log(this.id);
    
    this.workers =  localStorage.getItem('user');
    this.worker = JSON.parse(this.workers);
  }

  retour(){
    this.popover.dismiss();
  }
  supprimer(){
    this.service.deleteCompetence(this.id).subscribe((data: any)=>{
      this.popover.dismiss();
      this.router.navigate(['competences']);
    })
  }

}
