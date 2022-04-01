import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServivesserviceService } from '../servivesservice.service';

@Component({
  selector: 'app-modifier-service',
  templateUrl: './modifier-service.component.html',
  styleUrls: ['./modifier-service.component.scss']
})
export class ModifierServiceComponent implements OnInit {
  id: any;
  services: any;
  constructor(
    public service: ServivesserviceService,
    private activatedRoute: ActivatedRoute,
    private route : Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
      this.service.detailService(this.id).subscribe((data: any)=>{
        this.services = data;
      })
  }

  updateService(){
    this.service.updateService(this.id, this.services).subscribe((res)=> {
      console.log(res);
      this.route.navigateByUrl('/services');
    })
  }

}
