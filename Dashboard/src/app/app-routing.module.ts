import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './Accueil/accueil/accueil.component';
import { AjoutCompetenceComponent } from './Competence/ajout-competence/ajout-competence.component';
import { ModifierCompetenceComponent } from './Competence/modifier-competence/modifier-competence.component';
import { CorbeilSpecialiteComponent } from './Corbeil/corbeil-specialite/corbeil-specialite.component';
import { CorbeilUtilisateurComponent } from './Corbeil/corbeil-utilisateur/corbeil-utilisateur.component';
import { CorbeilVilleComponent } from './Corbeil/corbeil-ville/corbeil-ville.component';
import { CorbeilComponent } from './Corbeil/corbeil/corbeil.component';
import { GuardService } from './Guard/guard.service';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './Profil/profil/profil.component';
import { AjoutServiceComponent } from './Services/ajout-service/ajout-service.component';
import { DetatilServiceComponent } from './Services/detatil-service/detatil-service.component';
import { ModifierServiceComponent } from './Services/modifier-service/modifier-service.component';
import { ServiceComponent } from './Services/service/service.component';
import { AjoutSpecialiteComponent } from './Specialites/ajout-specialite/ajout-specialite.component';
import { DetailSpecialiteComponent } from './Specialites/detail-specialite/detail-specialite.component';
import { ModifierSpecialiteComponent } from './Specialites/modifier-specialite/modifier-specialite.component';
import { SpecialiteComponent } from './Specialites/specialite/specialite.component';
import { StatistiquesComponent } from './Statistique/statistiques/statistiques.component';
import { AjoutAdminComponent } from './Utilisateurs/Administrateur/ajout-admin/ajout-admin.component';
import { DetailAdminComponent } from './Utilisateurs/Administrateur/detail-admin/detail-admin.component';
import { ModifierAdminComponent } from './Utilisateurs/Administrateur/modifier-admin/modifier-admin.component';
import { DetailClientComponent } from './Utilisateurs/Client/detail-client/detail-client.component';
import { ModifierClientComponent } from './Utilisateurs/Client/modifier-client/modifier-client.component';
import { ResetpasswordComponent } from './Utilisateurs/resetpassword/resetpassword.component';
import { AjoutTravailleurComponent } from './Utilisateurs/Travailleur/ajout-travailleur/ajout-travailleur.component';
import { DetailTravailleurComponent } from './Utilisateurs/Travailleur/detail-travailleur/detail-travailleur.component';
import { ModifierTravailleurComponent } from './Utilisateurs/Travailleur/modifier-travailleur/modifier-travailleur.component';
import { TravailleursAttenteComponent } from './Utilisateurs/Travailleur/travailleurs-attente/travailleurs-attente.component';
import { UtilisateurComponent } from './Utilisateurs/utilisateur/utilisateur.component';
import { AjoutVilleComponent } from './Villes/ajout-ville/ajout-ville.component';
import { ModifierVilleComponent } from './Villes/modifier-ville/modifier-ville.component';
import { VilleComponent } from './Villes/ville/ville.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent, canActivate:[GuardService] },

  // Gestion services
  { path: 'services', component: ServiceComponent, canActivate:[GuardService] },
  { path: 'ajoutservice', component: AjoutServiceComponent, canActivate:[GuardService] },
  { path: 'modifierservice/:id', component: ModifierServiceComponent, canActivate:[GuardService] },
  { path: 'detailservice/:id', component: DetatilServiceComponent, canActivate:[GuardService] },

  // Gestion specialités
  { path: 'specialites', component: SpecialiteComponent, canActivate:[GuardService] },
  { path: 'ajoutspecialite', component: AjoutSpecialiteComponent, canActivate:[GuardService] },
  { path: 'modifierspecialite/:id', component: ModifierSpecialiteComponent, canActivate:[GuardService] },
  { path: 'detailspecialite/:id', component: DetailSpecialiteComponent, canActivate:[GuardService] },

  // Gestion villes
  { path: 'villes', component: VilleComponent, canActivate:[GuardService] },
  { path: 'ajoutville', component: AjoutVilleComponent, canActivate:[GuardService] },
  { path: 'modifierville/:id', component: ModifierVilleComponent, canActivate:[GuardService] },

  // Gestion utilisateurs
  { path: 'utilisateurs', component: UtilisateurComponent },
  { path: 'profil', component: ProfilComponent, canActivate:[GuardService] },
  { path: 'ffsftejsfbhdvmzhbgsxffsojdpodhfefbvhe', component: ResetpasswordComponent },

  { path: 'ajoutadmin', component: AjoutAdminComponent },
  { path: 'modifieradmin/:id', component: ModifierAdminComponent },
  { path: 'detailadmin/:id', component: DetailAdminComponent },

  { path: 'ajouttravailleur', component: AjoutTravailleurComponent },
  { path: 'modifiertravailleur/:id', component: ModifierTravailleurComponent },
  { path: 'detailtravailleur/:id', component: DetailTravailleurComponent },
  { path: 'travailleur-attente', component: TravailleursAttenteComponent },

  { path: 'modifierclient/:id', component: ModifierClientComponent },
  { path: 'detailclient/:id', component: DetailClientComponent },

  // Gestion competences
  { path: 'ajoutcompetence/:id', component: AjoutCompetenceComponent, canActivate:[GuardService] },
  { path: 'modifiercompetence/:id', component: ModifierCompetenceComponent, canActivate:[GuardService] },

   // Gestion statistiques
   { path: 'statistiques', component: StatistiquesComponent, canActivate:[GuardService] },

    // Gestion statistiques
    { path: 'corbeil', component: CorbeilComponent, canActivate:[GuardService] },
    { path: 'corbeil-specialite', component: CorbeilSpecialiteComponent, canActivate:[GuardService] },
    { path: 'corbeil-ville', component: CorbeilVilleComponent, canActivate:[GuardService] },
    { path: 'corbeil-utilisateur', component: CorbeilUtilisateurComponent, canActivate:[GuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
