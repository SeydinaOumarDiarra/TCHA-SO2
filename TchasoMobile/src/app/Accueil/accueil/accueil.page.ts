import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import SwiperCore, {SwiperOptions, Autoplay, Pagination, EffectCoverflow} from 'swiper';

SwiperCore.use([Autoplay, Pagination, EffectCoverflow])

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  workers: any;
  worker: any;
  photo = environment.PHOTO;
  constructor() { }

  ngOnInit() {
    this.workers =  localStorage.getItem('user');
    this.worker = JSON.parse(this.workers);
    this.photo
  }

  

}
