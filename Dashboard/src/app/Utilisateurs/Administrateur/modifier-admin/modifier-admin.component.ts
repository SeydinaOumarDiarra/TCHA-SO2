import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceutilisateurService } from '../../service/serviceutilisateur.service';

@Component({
  selector: 'app-modifier-admin',
  templateUrl: './modifier-admin.component.html',
  styleUrls: ['./modifier-admin.component.scss']
})
export class ModifierAdminComponent implements OnInit {
  id: any;
  admins: any;
  constructor(
    public service: ServiceutilisateurService,
    private activatedRoute: ActivatedRoute,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
      this.service.detailAdmin(this.id).subscribe((data: any)=>{
        this.admins = data;
      })
  }

  updateAdmin(){
    this.service.updateAdmin(this.id, this.admins).subscribe((res)=> {
      console.log(res);
      
      this.route.navigateByUrl('/utilisateurs');
    })
  }

}
