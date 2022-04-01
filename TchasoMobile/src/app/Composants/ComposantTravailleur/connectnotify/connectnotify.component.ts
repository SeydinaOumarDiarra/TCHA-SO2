import { Component, OnInit } from '@angular/core';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';

@Component({
  selector: 'app-connectnotify',
  templateUrl: './connectnotify.component.html',
  styleUrls: ['./connectnotify.component.scss'],
})
export class ConnectnotifyComponent implements OnInit {
  customers: any;
  customer: any;
  nbreNotify: any;
  tabNotify: any =[];
  notifyTravailleur: any ;

  constructor(
    public service: AccueilService
  ) { }

  ngOnInit() {
    this.customers =  localStorage.getItem('user');
    this.customer = JSON.parse(this.customers);
    
    this.service.getAllNotifyTravailleur(this.customer.id).subscribe((dat: any)=>{
      console.log(dat);
      
      for(let i =0; i<dat.length; i++){
        if(dat[i].statutdemande == "non_lu"){
          this.tabNotify.push(dat[i]);
        }
      }
      console.log("demande ",dat);
      
      this.notifyTravailleur = dat[0].travailleur.id;     
      this.nbreNotify = this.tabNotify.length;
    })
  }

}
