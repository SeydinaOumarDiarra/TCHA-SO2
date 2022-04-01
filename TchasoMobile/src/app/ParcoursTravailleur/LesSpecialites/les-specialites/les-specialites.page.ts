import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from 'src/app/Popups/service/popup.service';
import { SpecialiteService } from 'src/app/Specialites/service/specialite.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-les-specialites',
  templateUrl: './les-specialites.page.html',
  styleUrls: ['./les-specialites.page.scss'],
})
export class LesSpecialitesPage implements OnInit {
  tr: any;
  travailleurs: any;
  specialite: any;
  trav: any;
  image = environment.PHOTO;
  customers: any;
  customer: any;

  constructor(
    public router: Router,
    public service: SpecialiteService,
    public servicePopup: PopupService
  ) { }

  ngOnInit() {
    this.tr = this.servicePopup.getTravailleurs();
    this.service.getTravailleur(this.tr).subscribe((data: any)=>{
      this.travailleurs = data;
      this.trav = data;
      this.specialite = this.travailleurs[0].specialite.nomspe;
    });
    this.image;
    this.customers =  localStorage.getItem('user');
    this.customer = JSON.parse(this.customers);
  }

  detailTravailleur(){
    this.router.navigate(['travailleur'])
  }

  async initUser() {
    this.travailleurs= this.trav;
  }

  async filterList(evt) {
    this.initUser();
    const searchTerm = evt.srcElement.value;
  
    if (searchTerm && searchTerm !=='') {
      this.travailleurs = this.travailleurs.filter((item) => {
        return(
          item.ville.nomville.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item.quartier.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item.genre.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item.nom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item.prenom.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
          item.specialite.nomspe.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
      })
    }
  }

}
