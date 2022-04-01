import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServivevilleService } from '../serviveville.service';

@Component({
  selector: 'app-ajout-ville',
  templateUrl: './ajout-ville.component.html',
  styleUrls: ['./ajout-ville.component.scss']
})
export class AjoutVilleComponent implements OnInit {
  admin: any;
  adminConnect: any;
  villes: any;

  constructor(
    private service: ServivevilleService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
  }

  showToastSuccess() {
    this.toast.success('Ville ajoutée avec succès !')
  }

  showToastError() {
    this.toast.error('Erreur du système !')
  }

  AjoutVille(form: NgForm) {    
    if(form.valid){
      this.service.addVille(form.value).subscribe((data: any)=> {
        this.showToastSuccess();
      })
    }else{
      this.showToastError();
    }
  }

}
