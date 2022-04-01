import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./Login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./Accueil/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'inscriptionclient',
    loadChildren: () => import('./Inscription/inscriptionclient/inscriptionclient.module').then( m => m.InscriptionclientPageModule)
  },
  {
    path: 'inscriptiontravailleur',
    loadChildren: () => import('./Inscription/inscriptiontravailleur/inscriptiontravailleur.module').then( m => m.InscriptiontravailleurPageModule)
  },
  {
    path: 'accueilclient',
    loadChildren: () => import('./Accueil/accueilclient/accueilclient.module').then( m => m.AccueilclientPageModule)
  },
  {
    path: 'popupservice',
    loadChildren: () => import('./Popups/popupservice/popupservice.module').then( m => m.PopupservicePageModule)
  },
  {
    path: 'specialite',
    loadChildren: () => import('./Specialites/specialite/specialite.module').then( m => m.SpecialitePageModule)
  },
  {
    path: 'travailleur/:id',
    loadChildren: () => import('./Specialites/travailleur/travailleur.module').then( m => m.TravailleurPageModule)
  },
  {
    path: 'ajout-demande',
    loadChildren: () => import('./Demande/ajout-demande/ajout-demande.module').then( m => m.AjoutDemandePageModule)
  },
  {
    path: 'client-notify/:id',
    loadChildren: () => import('./Notifications/client-notify/client-notify.module').then( m => m.ClientNotifyPageModule)
  },
  {
    path: 'lire-notify-client',
    loadChildren: () => import('./Notifications/lire-notify-client/lire-notify-client.module').then( m => m.LireNotifyClientPageModule)
  },
  {
    path: 'profiltravailleur',
    loadChildren: () => import('./Profil/ProfilTravailleur/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'competences',
    loadChildren: () => import('./Competence/competences/competences.module').then( m => m.CompetencesPageModule)
  },
  {
    path: 'detail-competence/:id',
    loadChildren: () => import('./Competence/detail-competence/detail-competence.module').then( m => m.DetailCompetencePageModule)
  },
  {
    path: 'ajout-competence',
    loadChildren: () => import('./Competence/ajout-competence/ajout-competence.module').then( m => m.AjoutCompetencePageModule)
  },
  {
    path: 'modifier-competence',
    loadChildren: () => import('./Competence/modifier-competence/modifier-competence.module').then( m => m.ModifierCompetencePageModule)
  },
  {
    path: 'supprimer-competence',
    loadChildren: () => import('./Competence/supprimer-competence/supprimer-competence.module').then( m => m.SupprimerCompetencePageModule)
  },
  {
    path: 'liste-service',
    loadChildren: () => import('./ParcoursTravailleur/LesServices/liste-service/liste-service.module').then( m => m.ListeServicePageModule)
  },
  {
    path: 'popupservice2',
    loadChildren: () => import('./Popups/popupservice2/popupservice2.module').then( m => m.Popupservice2PageModule)
  },
  {
    path: 'les-specialites',
    loadChildren: () => import('./ParcoursTravailleur/LesSpecialites/les-specialites/les-specialites.module').then( m => m.LesSpecialitesPageModule)
  },
  {
    path: 'les-travailleurs/:id',
    loadChildren: () => import('./ParcoursTravailleur/LesTravailleurs/les-travailleurs/les-travailleurs.module').then( m => m.LesTravailleursPageModule)
  },
  {
    path: 'ajout-demande2',
    loadChildren: () => import('./Demande/ajout-demande2/ajout-demande2.module').then( m => m.AjoutDemande2PageModule)
  },
  {
    path: 'travailleur-notify/:id',
    loadChildren: () => import('./Notifications/travailleur-notify/travailleur-notify.module').then( m => m.TravailleurNotifyPageModule)
  },
  {
    path: 'lire-notify-travailleur',
    loadChildren: () => import('./Notifications/lire-notify-travailleur/lire-notify-travailleur.module').then( m => m.LireNotifyTravailleurPageModule)
  },
  {
    path: 'inscriptiontravailleur-suite',
    loadChildren: () => import('./Inscription/inscriptiontravailleur-suite/inscriptiontravailleur-suite.module').then( m => m.InscriptiontravailleurSuitePageModule)
  },
  {
    path: 'profil-client',
    loadChildren: () => import('./Profil/ProfilClient/profil-client/profil-client.module').then( m => m.ProfilClientPageModule)
  },
  {
    path: 'modifier-pwd',
    loadChildren: () => import('./Profil/ChangePswrd/modifier-pwd/modifier-pwd.module').then( m => m.ModifierPwdPageModule)
  },
  {
    path: 'modifier-infos',
    loadChildren: () => import('./Profil/ChangeInfos/modifier-infos/modifier-infos.module').then( m => m.ModifierInfosPageModule)
  },
  {
    path: 'commentaire',
    loadChildren: () => import('./Commentaires/commentaire/commentaire.module').then( m => m.CommentairePageModule)
  },
  {
    path: 'add-notation',
    loadChildren: () => import('./Notations/add-notation/add-notation.module').then( m => m.AddNotationPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
