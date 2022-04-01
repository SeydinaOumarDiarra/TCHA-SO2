import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {
statRoute: any;
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    let loginData = localStorage["userData"];
    if(loginData){
      return true
    }
    this.router.navigateByUrl('')
    return false;
  }
}
