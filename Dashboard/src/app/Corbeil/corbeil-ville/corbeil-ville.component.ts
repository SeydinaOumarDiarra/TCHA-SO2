import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServivevilleService } from 'src/app/Villes/serviveville.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corbeil-ville',
  templateUrl: './corbeil-ville.component.html',
  styleUrls: ['./corbeil-ville.component.scss']
})
export class CorbeilVilleComponent implements OnInit {
  searchText= '';
  listeVilles: any = [];
  constructor(public service: ServivevilleService, public router: Router) { }

  ngOnInit(): void {
    this.getAllVille();
  }

  getAllVille(){
    this.service.getAllVilles().subscribe((data:any)=> {
      for(let i=0; i<= data.length; i++){
        if(data[i].etat == 'inactif'){
          this.listeVilles.push(data[i]);
        }
      }
    })
  }

  restaurerVille(id: any){
    this.service.detailVille(id).subscribe((dat: any)=>{
      dat.etat = 'actif';
      this.service.updateVille(id, dat).subscribe((data: any)=>{console.log(data);});
    })
  }


  alertConfirmation(id: any) {
    Swal.fire({
      title: 'RESTAURATION',
      text: 'Êtes vous sûr de vouloir restaurer cette ville ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Restaurer',
      confirmButtonColor:'#684f0e',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#f5bb20',
    }).then((result) => {
      if (result.value) {
        this.restaurerVille(id);
        Swal.fire('Restauration!', 'La ville est restaurée avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('corbeil-ville', {skipLocationChange: true}).then(()=>
        this.router.navigate(['corbeil-ville']));
      }
    });
  }

}
