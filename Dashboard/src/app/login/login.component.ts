import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ForgotpasswordComponent } from '../Utilisateurs/forgotpassword/forgotpassword.component';
import { ServiceloginService } from './servicelogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ref: DynamicDialogRef | undefined;
  constructor(
     private service: ServiceloginService,
     private route: Router,
     private toast: ToastrService,
     public dialoService: DialogService
     ) { }

  ngOnInit(): void {
  }

  showErrorToast() {
    this.toast.error('Identifiants incorrects !')
  }

  onLogin(loginForm: NgForm) {
    this.service.login(loginForm.value['login'], loginForm.value['password'])
      .subscribe(
        (data:any)=> {
          if (data!=null) {
            localStorage.setItem('userData', JSON.stringify(data))
           this.route.navigateByUrl('accueil');
          }else{
            this.showErrorToast();
          }
        }
      )
  }

  show() {
    this.ref = this.dialoService.open(ForgotpasswordComponent, {
        header: 'Récupération de mot de passe',
        width: '30%',
    });
  }

}
