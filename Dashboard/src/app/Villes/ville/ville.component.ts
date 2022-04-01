import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServivevilleService } from '../serviveville.service';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.scss']
})
export class VilleComponent implements OnInit {
  searchText= '';
  listeVilles: any=[];
  p: number = 1;
  constructor(
    public service: ServivevilleService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllVille();
  }

  getAllVille(){
    this.service.getAllVilles().subscribe((data:any)=> {
      for(let i=0; i< data.length; i++){
        if(data[i].etat == 'actif'){
          this.listeVilles.push(data[i]);
        }
      }
    })
  }

  deleteVille(id: any){
    this.service.deleteVille(id).subscribe((data: any)=>{})
  }


  alertConfirmation(id: any) {
    Swal.fire({
      title: 'ATTENTION',
      text: 'Êtes vous sûr de vouloir supprimer cette ville ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      confirmButtonColor:'#684f0e',
      cancelButtonText: 'Annuler',
      cancelButtonColor: '#f5bb20',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.deleteVille(id);
        Swal.fire('Suppression!', 'Ville supprimée avec succès.', 'success');
        window.location.reload();
        this.router.navigateByUrl('ville', {skipLocationChange: true}).then(()=>
        this.router.navigate(['ville']));
      }
    });
  }

}
