import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServivevilleService } from '../serviveville.service';

@Component({
  selector: 'app-modifier-ville',
  templateUrl: './modifier-ville.component.html',
  styleUrls: ['./modifier-ville.component.scss']
})
export class ModifierVilleComponent implements OnInit {
  id: any;
  villes: any;

  constructor(
    public service: ServivevilleService,
    private activatedRoute: ActivatedRoute,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
      this.service.detailVille(this.id).subscribe((data: any)=>{
        this.villes = data;
        console.log(this.villes);
        
      })
  }

  updateVille(){
    this.service.updateVille(this.id, this.villes).subscribe((res)=> {
      this.route.navigateByUrl('/villes');
    })
  }

}
