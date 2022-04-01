import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServivesserviceService } from 'src/app/Services/servivesservice.service';
import { ServicespecialiteService } from '../servicespecialite.service';

@Component({
  selector: 'app-modifier-specialite',
  templateUrl: './modifier-specialite.component.html',
  styleUrls: ['./modifier-specialite.component.scss']
})
export class ModifierSpecialiteComponent implements OnInit {
  id: any;
  specialites: any;
  listeService: any;
  constructor(
      public serviceS: ServivesserviceService,
      public serviceSP: ServicespecialiteService,
      private activatedRoute: ActivatedRoute,
      private route : Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
      this.serviceSP.detailSpecialite(this.id).subscribe((data: any)=>{
        this.specialites = data;
      })

      this.serviceS.getAllServices().subscribe((data: any)=>{
        this.listeService = data;
      })
  }

  updateSpecialite(){
    this.serviceSP.updateSpecialite(this.id, this.specialites).subscribe((res)=> {
      this.route.navigateByUrl('/specialites');
    })
  }

}
