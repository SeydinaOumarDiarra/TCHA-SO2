import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicespecialiteService } from 'src/app/Specialites/servicespecialite.service';
import { ServivevilleService } from 'src/app/Villes/serviveville.service';
import { ServiceutilisateurService } from '../../service/serviceutilisateur.service';

@Component({
  selector: 'app-ajout2-travailleur',
  templateUrl: './ajout2-travailleur.component.html',
  styleUrls: ['./ajout2-travailleur.component.scss']
})
export class Ajout2TravailleurComponent implements OnInit {

  listeVille: any;
  listeSpecialite: any;
  travailleurs: any;
  admin: any;
  adminConnect: any;
  specialiteId: any;
  villeId: any;
  specialite: any

  public imagePathPhoto: any;
  imgURLPhoto: any;
  photo: File | any;
  public messagePhoto: any;

  public imagePathPiece: any;
  imgURLPiece: any;
  piece: File | any;
  public messagePiece: any;

  constructor(
    private serviceVille: ServivevilleService,
    private serviceT: ServiceutilisateurService,
    private serviceS: ServicespecialiteService,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.admin =  localStorage.getItem('userData');
    this.adminConnect = JSON.parse(this.admin)

    this.serviceVille.getAllVilles().subscribe((data: any)=>{
      this.listeVille = data;
    })
    this.serviceS.getAllSpecialites().subscribe((data: any)=>{
      this.listeSpecialite = data;
    })
  }

  preview(files: any) { 
    this.photo = files;   
    console.log(files[0].name);
    
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.messagePhoto = "Type image non autorisé.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePathPhoto = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURLPhoto = reader.result; 
    }
  }

  previewpiece(files: any) { 
    this.piece = files;   
    console.log(files[0].name);
    
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.messagePiece = "Type image non autorisé.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePathPiece = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURLPiece = reader.result; 
    }
  }

  showToastSuccess() {
    this.toast.success('Service ajouté avec succès !')
  }
  showToastLogin() {
    this.toast.error('Ce nom d\'utilisateur existe déjà !')
  }
  showToastError() {
    this.toast.error('Erreur du système !')
  }

  AjoutTravailleur(form: NgForm) { 
    this.serviceT.checkLogTravailleur(form.value['username']).subscribe((login: any)=>{
      if(login != null){
        this.showToastLogin();
      }else{
        this.specialite = this.serviceS.getIdSpecialite();
        this.travailleurs = {
          'nom': form.value['nom'], 'prenom': form.value['prenom'], 'administrateur': this.adminConnect
        }
        this.serviceT.addTravailleur(this.travailleurs, this.photo[0], this.piece[0]).subscribe((tr:any)=>{
          this.serviceS.detailSpecialite(this.specialite).subscribe((spec: any)=>{
            this.specialiteId = spec;
            this.serviceVille.detailVille(form.value['ville']).subscribe((ville: any)=>{
              this.villeId = ville;
              tr.nom = form.value['nom'],
              tr.prenom = form.value['prenom'],
              tr.genre = form.value['genre'],
              tr.type = 'travailleur',
              tr.etat = 'actif',
              tr.administrateur = this.adminConnect,
              tr.login = form.value['username'],
              tr.password = "Tcha"+ form.value['prenom'].substr(0, 3)+ form.value['nom'].substr(0, 3),
              tr.quartier = form.value['quartier'],
              tr.numWhasapp = form.value['numWhasapp'],
              tr.specialite = this.specialiteId,
              tr.ville = this.villeId
    
              let trav = tr;
              this.serviceT.updateTravailleur(trav.id, trav).subscribe((worker: any)=>{
                let url: string = "/detailspecialite/" + spec.id
                this.showToastSuccess();
                window.location.reload();
                this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
                this.router.navigate(['detailspecialite', spec.id]));
               
              })
            });
          });
        })
      }
    })
  }

}
