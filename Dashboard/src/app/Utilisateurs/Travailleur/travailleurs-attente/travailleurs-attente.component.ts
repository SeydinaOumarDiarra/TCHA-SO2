import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ServiceutilisateurService } from '../../service/serviceutilisateur.service';

@Component({
  selector: 'app-travailleurs-attente',
  templateUrl: './travailleurs-attente.component.html',
  styleUrls: ['./travailleurs-attente.component.scss']
})
export class TravailleursAttenteComponent implements OnInit {
  travAttente: any= [];
  searchText="";
  photo = environment.PHOTO;
  constructor(
    public service: ServiceutilisateurService
  ) { }

  ngOnInit(): void {
    this.service.getAllTravailleurs().subscribe((data: any)=>{
      for(let i = 0; i< data.length; i++){
        if(data[i].etat == "inactif"){
          this.travAttente.push(data[i]);
        }
      }
    });
    this.photo;
  }
  

}
