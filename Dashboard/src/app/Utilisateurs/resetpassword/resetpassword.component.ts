import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceutilisateurService } from '../service/serviceutilisateur.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  tab: any = [];
  constructor(
    private service: ServiceutilisateurService,
    private router: Router,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  showErrorToast() {
    this.toast.error('Nom d\'utilisateur incorrect')
  }

  showErrorPassToast() {
    this.toast.error('les deux mots de passes ne sont pas identiques')
  }

  showSuccessToast() {
    this.toast.success('Votre mot de passe a été réinitialisé avec succès')
  }

  resetPwd(form: NgForm){
    this.service.getAllAdmins().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].login == form.value['login']){
          this.tab.push(data[i]);
        }
      }
      if(this.tab.length > 0 ){
        if(form.value['password'] == form.value['cpassword']){
          this.tab[0].password = form.value['password']
          this.service.updateAdmin(this.tab[0].id, this.tab[0]).subscribe((dat: any)=>{
            localStorage.setItem('userData', JSON.stringify(dat))
            this.router.navigate(['accueil']);
            this.showSuccessToast();
          })  
        }else{
          this.showErrorPassToast();
        }
      }else{
        this.showErrorToast();
      }
    })
  }

}
