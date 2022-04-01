import { Component, OnInit } from '@angular/core';
import { ServiceutilisateurService } from 'src/app/Utilisateurs/service/serviceutilisateur.service';

@Component({
  selector: 'app-demandebytravailleur',
  templateUrl: './demandebytravailleur.component.html',
  styleUrls: ['./demandebytravailleur.component.scss']
})
export class DemandebytravailleurComponent implements OnInit {
idWorker: any;
demande: any;
searchText = '';
p: number = 1;
  constructor(
    private service: ServiceutilisateurService,
  ) { }

  ngOnInit(): void {
    this.idWorker = this.service.getIdTravailleur();
    this.service.demandeByTravailleur(this.idWorker).subscribe((data: any)=>{
      this.demande = data;
    })
  }

}
