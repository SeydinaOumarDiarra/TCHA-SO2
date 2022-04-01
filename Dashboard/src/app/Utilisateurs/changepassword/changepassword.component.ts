import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceutilisateurService } from '../service/serviceutilisateur.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {
admin: any;
adminConnect: any;

  constructor(
    public service: ServiceutilisateurService,
    public router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
  }

  showToastSuccessPass() {
    this.toast.success('Mot de passe modifié avec succès !')
  }

  showToastErrorApass() {
    this.toast.error('L\'ancien de mot de passe incorrect!')
  }

  showToastErrorRNpass() {
    this.toast.error('Les deux  nouveaux mots de passe sont diffétrents!')
  }

  changerpassword(form: NgForm){
    if(form.value['apass'] == this.adminConnect.password){
      if(form.value['npass'] == form.value['rnpass']){
          this.adminConnect.password = form.value['npass'];
            this.service.updateAdmin(this.adminConnect.id, this.adminConnect).subscribe((data: any)=>{
              this.router.navigate(['profil']);
              this.showToastSuccessPass();
            })
      }else{
        this.showToastErrorRNpass();
      }
    }else{
      this.showToastErrorApass();
    }
    
  }

}
