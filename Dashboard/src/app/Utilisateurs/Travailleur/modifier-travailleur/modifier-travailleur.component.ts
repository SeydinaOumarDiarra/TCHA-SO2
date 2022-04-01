import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicespecialiteService } from 'src/app/Specialites/servicespecialite.service';
import { ServivevilleService } from 'src/app/Villes/serviveville.service';
import { ServiceutilisateurService } from '../../service/serviceutilisateur.service';

@Component({
  selector: 'app-modifier-travailleur',
  templateUrl: './modifier-travailleur.component.html',
  styleUrls: ['./modifier-travailleur.component.scss']
})
export class ModifierTravailleurComponent implements OnInit {
  id: any;
  travailleur: any;
  listeSpecialite: any;
  listeVille: any;

  public imagePathPhoto: any;
  imgURLPhoto: any;
  photo: File | any;
  public messagePhoto: any;

  public imagePathPiece: any;
  imgURLPiece: any;
  piece: File | any;
  public messagePiece: any;

  
  constructor(
    public service: ServiceutilisateurService,
    private activatedRoute: ActivatedRoute,
    private serviceVille: ServivevilleService,
    private serviceS: ServicespecialiteService,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
      this.service.detailTravailleur(this.id).subscribe((data: any)=>{
        this.travailleur = data;             
      })
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

    updateTravailleur(){
      this.service.updateTravailleurWithFile(this.travailleur.id, this.travailleur, this.photo[0], this.piece[0]).subscribe((res)=> {
        this.route.navigateByUrl('/utilisateurs');
      })
    }
   
}
