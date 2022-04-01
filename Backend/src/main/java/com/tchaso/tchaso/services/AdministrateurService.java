package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Administrateur;

import java.util.List;

public interface AdministrateurService {

    public Administrateur add_administrateur(Administrateur administrateur) ;

    public Administrateur update_administrateur(Integer Id,Administrateur administrateur);

    public List<Administrateur> list_administrateur();

    public Administrateur afficher_administrateur_by_id(Integer Id);

    public void delete_administrateur(Integer Id);

    //Authentification
    public Administrateur authentification(String login, String password);

    public Administrateur reinitialiserPassword(String email);
}
