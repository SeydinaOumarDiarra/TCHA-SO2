import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AccueilService } from 'src/app/Accueil/accueilclient/service/accueil.service';
import { TravailleurSpecialite } from 'src/app/model/TravailleurSpecialite';
import { environment } from 'src/environments/environment';
import { PopupService } from '../service/popup.service';

@Component({
  selector: 'app-popupservice',
  templateUrl: './popupservice.page.html',
  styleUrls: ['./popupservice.page.scss'],
})
export class PopupservicePage implements OnInit {
serviceP: any;
serv: any;
dats: any=[];
travails: any = [];
travaileurSp: TravailleurSpecialite[] = new Array;
cpte = 0;
iconimage = environment.ICONIMAGE;
  constructor(
    public router: Router,
    private popoverC: PopoverController,
    public serviceAccueil: AccueilService,
    public servicePopup: PopupService
  ) { }

  ngOnInit() {
    this.serv = this.serviceAccueil.getByServ();    
    this.serviceP = this.serviceAccueil.getByServicePopup();
    console.log(this.serviceP);
    
      for(let i=0; i<this.serviceP.length; i++){
        if(this.serviceP[i].etat == "actif"){
          let t = new TravailleurSpecialite();
          this.serviceAccueil.getTravailleur(this.serviceP[i].id).subscribe((dat: any)=>{
            
              console.log(dat);
              for(let j=0; j<dat.length; j++){
                if(dat[j].etat == 'actif'){
                  this.dats.push(dat[j]);
                }
              }
              console.log(this.dats.length);
              
              t.id = this.serviceP[i].id;
              t.specialite = this.serviceP[i].nomspe;
              t.total = dat.length;
  
              this.travaileurSp.push(t);
           
          })
        }
       
      }
      console.log(this.travaileurSp);
      
    this.iconimage;
  }

  async close(){
    this.serviceAccueil.setByServ(null);
    await this.popoverC.dismiss();
  }

  async travailleur(data: any){
    this.servicePopup.setTravailleurs(data);
    await this.popoverC.dismiss();
    this.router.navigate(['specialite']);
  }

}
