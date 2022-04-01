import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChangepasswordComponent } from 'src/app/Utilisateurs/changepassword/changepassword.component';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  adminConnect: any;
  admin: any;

  ref: DynamicDialogRef | undefined;
  constructor(
    public service: ServiceutilisateurService,
    public dialoService: DialogService,
  ) { }

  ngOnInit(): void {
    this.adminConnect =  localStorage.getItem('userData');
    this.admin = JSON.parse(this.adminConnect)
  }

  changepassword(id: any){
    this.service.setIdTravailleur(id);
    this.service.detailAdmin(id).subscribe((data: any)=>{
      this.ref = this.dialoService.open(ChangepasswordComponent, {
        header: 'Changer mon mot de passe ',
        width: '30%'
    });
    })
  }
  
 

}
