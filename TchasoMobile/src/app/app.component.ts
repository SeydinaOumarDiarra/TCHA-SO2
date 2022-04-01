import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  navigate: any;
  customers: any;
  customer: any;
  constructor(
    public router: Router
  ) {
    this.sideMenu();
  }
  ngOnInit() {
    this.customers =  localStorage.getItem('user');
    this.customer = JSON.parse(this.customers);
    console.log(this.customer);
    
  }

  sideMenu(){
    this.navigate = [
      // {
      //   title : "Accueil",
      //   icon: "home",
      //   url : "/accueil"
      // },
      {
        title : "A propos",
        icon:  "bag-handle-outline",
        url : "/reset"
      },
      {
        title : "Services",
        icon:  "person-circle-outline",
        url : "/profile"
      },
     
      {
        title : "Déconnexion",
        icon: "log-out-outline",
        url : "/home"
      },
      
    ]
  }

  deconnexion(){
    localStorage.removeItem('user');
    localStorage.clear();
    this.router.navigateByUrl('/accueilclient')
  }
}
