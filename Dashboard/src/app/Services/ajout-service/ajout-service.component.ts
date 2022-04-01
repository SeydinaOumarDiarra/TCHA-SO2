import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServivesserviceService } from '../servivesservice.service';

@Component({
  selector: 'app-ajout-service',
  templateUrl: './ajout-service.component.html',
  styleUrls: ['./ajout-service.component.scss']
})
export class AjoutServiceComponent implements OnInit {
  admin: any;
  adminConnect: any;
  services: any;
  public imagePath: any;
  imgURL: any;
  icon: File | any;
  public message: any;
  messageNomService: any;

  constructor(
    private service: ServivesserviceService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)
  }

  preview(files: any) { 
    this.icon = files;   
    console.log(files[0].name);
    
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  showToastSuccess() {
    this.toast.success('Service ajouté avec succès !')
  }

  showToastError() {
    this.toast.error('Erreur du système !')
  }

  AjoutService(form: NgForm) {
    const formData: FormData = new FormData();
    formData.append("image", this.icon[0], this.icon[0].name);
    if ((form.value['nom'].length > 50)){
      this.messageNomService = "Le nom du service ne doit pas dépasser 50 caractères"
    }
    this.services = {'nomser': form.value['nom'], 'description': form.value['description'], 'administrateur': this.adminConnect}
    this.service.addService(this.services, this.icon[0]).subscribe((data: any)=> {
      
      data.nomser = form.value['nom'];
      data.description = form.value['description'];
      data.administrateur = this.adminConnect;
      
      let ser = data
      this.service.updateService(ser.id, ser).subscribe((tt:any)=>{
        this.showToastSuccess();
      });
           
    })
    
    
  }

}
