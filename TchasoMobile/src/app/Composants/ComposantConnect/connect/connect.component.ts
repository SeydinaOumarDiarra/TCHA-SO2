import { Component, OnInit } from '@angular/core';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent implements OnInit {
  customers: any;
  customer: any;
  nbreNotify: any;
  tabNotify: any =[];
  notifyClient: any ;
  constructor(
    public service: AccueilService
  ) { }

  ngOnInit() {
    this.customers =  localStorage.getItem('user');
    this.customer = JSON.parse(this.customers);
    
    this.service.getAllNotifyClient(this.customer.id).subscribe((dat: any)=>{
      for(let i =0; i<dat.length; i++){
        if(dat[i].statutdemandeclient == "non_lu" && dat[i].isaccept != null){
          this.tabNotify.push(dat[i]);
        }
      }
      console.log("demande ",dat);
      
      this.notifyClient = dat[0].client.id;     
      this.nbreNotify = this.tabNotify.length;
    })
  }

}
