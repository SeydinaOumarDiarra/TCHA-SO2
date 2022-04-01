import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ModifierPwdPage } from '../../ChangePswrd/modifier-pwd/modifier-pwd.page';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
  travailleurs: any;
  travailleur: any;
  photo = environment.PHOTO;

  constructor(
    public popover: PopoverController,
  ) { }

  ngOnInit() {
    this.travailleurs =  localStorage.getItem('user');
    this.travailleur = JSON.parse(this.travailleurs);
    this.photo
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

}
