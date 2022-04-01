import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceutilisateurService } from '../../service/serviceutilisateur.service';

@Component({
  selector: 'app-ajout-admin',
  templateUrl: './ajout-admin.component.html',
  styleUrls: ['./ajout-admin.component.scss']
})
export class AjoutAdminComponent implements OnInit {
admin: any;
verifieAdmin: any;
existeLogin = false;
existeEmail = false;

  constructor(
    private service: ServiceutilisateurService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.service.getAllAdmins().subscribe((datas: any)=>{
      this.verifieAdmin = datas;
 })
  }

  showToastSuccess() {
    this.toast.success('Administrateur ajouté avec succès !')
  }
  showToastLoginError() {
    this.toast.error('Ce nom d\'utilisateur est déjà utilisé !')
  }

  showToastEmailError() {
    this.toast.error('Cet email est déjà utilisé !')
  }

  showToastError() {
    this.toast.error('Erreur du système !')
  }

  AjoutAdmin(form: NgForm) {    
    if(form.valid){
      this.admin = {
        'nom': form.value['nom'],
        'prenom': form.value['prenom'],
        'genre': form.value['genre'],
        'etat': 'actif',
        'email': form.value['email'],
        'login': form.value['login'],
        'profile': form.value['profil'],
        'password': "Tcha"+ form.value['prenom'].substr(0, 3)+ form.value['nom'].substr(0, 3),
      }

      for(let i=0; i<this.verifieAdmin.length; i++){
        if(this.verifieAdmin[i].login == form.value['login']){
          this.existeLogin = true;
          this.showToastLoginError();
        }
        if(this.verifieAdmin[i].email == form.value['email']){
          this.existeEmail = true;
         this.showToastEmailError() ;
        }
      }

      if(this.existeEmail == false && this.existeLogin == false){
        this.service.addAdmin(this.admin).subscribe((data: any)=> {
          this.showToastSuccess();
        })
      }
    }else{
      this.showToastError();
    }
  }

}
