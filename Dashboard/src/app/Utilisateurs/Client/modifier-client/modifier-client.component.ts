import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceutilisateurService } from '../../service/serviceutilisateur.service';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.scss']
})
export class ModifierClientComponent implements OnInit {
  id: any;
  client: any

  constructor(
    public service: ServiceutilisateurService,
    private activatedRoute: ActivatedRoute,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
      this.service.detailClient(this.id).subscribe((data: any)=>{
        this.client = data;
        console.log(this.client);
        
      })
  }

  updateClient(){
    this.service.updateClient(this.id, this.client).subscribe((res)=> {
      this.route.navigateByUrl('/utilisateurs');
    })
  }

}
