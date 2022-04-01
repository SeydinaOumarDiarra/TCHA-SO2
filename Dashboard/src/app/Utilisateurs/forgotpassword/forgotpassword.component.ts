import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServiceutilisateurService } from '../service/serviceutilisateur.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
tab: any = [];
  constructor(
    private service: ServiceutilisateurService,
    private router: Router,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  showErrorToast() {
    this.toast.error('Cet email n\'est pas enrégistré chez TCHA-SO')
  }

  showSuccessToast() {
    this.toast.success('Un lien a été envoyé à votre adresse email. Cliquez sur ce lien pour réinitialiser votre mot de passe')
  }

  send(form: NgForm){
    this.service.getAllAdmins().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].email == form.value['email']){
          this.tab.push(data[i]);
        }
      }
      if(this.tab.length > 0 ){
        this.service.forgotPassword(this.tab[0].email).subscribe((data: any)=>{
          this.router.navigateByUrl('', {skipLocationChange: true}).then(()=>
          this.router.navigate(['']));
         this.showSuccessToast();
        })
       
      }else{
        this.showErrorToast();
      }
    })
  }

}
