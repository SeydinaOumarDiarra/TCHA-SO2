import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { DemandeService } from 'src/app/Demande/service/demande.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lire-notify-client',
  templateUrl: './lire-notify-client.page.html',
  styleUrls: ['./lire-notify-client.page.scss'],
})
export class LireNotifyClientPage implements OnInit {
notify: any;
clients: any;
client: any;
photo= environment.PHOTO;
  constructor(
    public serviceD: DemandeService,
    public popover: PopoverController,
    public router: Router
  ) { }

  ngOnInit() {
    this.clients =  localStorage.getItem('user');
    this.client = JSON.parse(this.clients);
    this.notify = this.serviceD.getNotifyClient();
    console.log(this.notify);
    
    this.photo;
  }

  async close(){
    await this.popover.dismiss();
  }

  delete(data: any){
    console.log(data);
    this.serviceD.DetailDemande(data).subscribe((not:any)=>{
      not.etat = "inactif";
      console.log(not);
      this.serviceD.ModifierDemande(not, not.id).subscribe((result:any)=>{
        this.popover.dismiss();
        this.router.navigate(['client-notify', this.client.id]);
      })
    })
    
  }

}
