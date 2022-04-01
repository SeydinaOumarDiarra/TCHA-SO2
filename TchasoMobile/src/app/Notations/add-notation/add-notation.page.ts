import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, LoadingController, PopoverController } from '@ionic/angular';
import { NotationService } from '../Services/notation.service';

@Component({
  selector: 'app-add-notation',
  templateUrl: './add-notation.page.html',
  styleUrls: ['./add-notation.page.scss'],
})
export class AddNotationPage implements OnInit {
  notation = {note:''};
  clients: any;
  client: any;
  travailleur: any;

  constructor(
    public popover: PopoverController,
    private loading: LoadingController,
    public alertController: AlertController,
    public serviceNote: NotationService,
  ) { }

  ngOnInit() {
    this.clients =  localStorage.getItem('user');
    this.client = JSON.parse(this.clients);
    this.travailleur = this.serviceNote.getTravNotation();
  }

  async close(){
    await this.popover.dismiss();
  }


  async presentAlertSuccess(){
    const alert = await this.alertController.create({
      subHeader: 'Notation',
      message: 'Votre note est prise en compte avec succès !',
      buttons: ['ok']
    });
    await alert.present();
  }

 async  addNote(form: NgForm){
    const load = await this.loading.create({
      message: 'Patientez...',
      backdropDismiss: false,
      mode: 'ios'
  });
  await load.present();
  let note = {
    note: Number(form.value['note']),
    client: this.client,
    travailleur: this.travailleur
  }
  
    this.serviceNote.AjoutNotation(note).subscribe((data: any)=>{
      load.dismiss();
      this.popover.dismiss();
      this.presentAlertSuccess();
    })
  }


}
