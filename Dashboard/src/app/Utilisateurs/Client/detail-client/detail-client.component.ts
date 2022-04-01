import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ServiceutilisateurService } from '../../service/serviceutilisateur.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss']
})
export class DetailClientComponent implements OnInit {
  id: any;
  client: any
 
  constructor(
    private service: ServiceutilisateurService,
    private route: ActivatedRoute,
    private router: Router,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.id = this.route.snapshot.params['id'];
    this.service.detailClient(this.id).subscribe((data: any)=>{
    this.client = data;
    })
  }
  

  activer(data: any): void{
    this.client.etat = "actif";
    this.service.updateClient(this.client.id, this.client).subscribe((client: any)=>{
      let url: string = "/detail-client/" + client.id
    //window.location.reload();
    this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
    this.router.navigate(['detail-client', client.id]));
    })
    
  }
  desactiver(data: any){
    this.client.etat = "inactif";
    this.service.updateClient(this.client.id, this.client).subscribe((client: any)=>{
      let url: string = "/detail-client/" + client.id
    //window.location.reload();
    this.router.navigateByUrl(url, {skipLocationChange: true}).then(()=>
    this.router.navigate(['detail-client', client.id]));
    })
  }

  geeks: boolean | any;;
  
  modifier() {
    this.geeks = true;
  }

  
}
