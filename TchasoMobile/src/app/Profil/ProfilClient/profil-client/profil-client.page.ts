import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModifierInfosPage } from '../../ChangeInfos/modifier-infos/modifier-infos.page';
import { ModifierPwdPage } from '../../ChangePswrd/modifier-pwd/modifier-pwd.page';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.page.html',
  styleUrls: ['./profil-client.page.scss'],
})
export class ProfilClientPage implements OnInit {
  clients: any;
  client: any;
  constructor(public popover: PopoverController,) { }

  ngOnInit() {
    this.clients =  localStorage.getItem('user');
    this.client = JSON.parse(this.clients);
  }

  async changePwd(){
    const popover = await this.popover.create({
      component: ModifierPwdPage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

  async changeInfos(){
    const popover = await this.popover.create({
      component: ModifierInfosPage,
      cssClass:'taille',
      translucent: false
    });
    await popover.present();
    const{role} = await popover.onDidDismiss();
    console.log('Fermer !', role);
  }

}
