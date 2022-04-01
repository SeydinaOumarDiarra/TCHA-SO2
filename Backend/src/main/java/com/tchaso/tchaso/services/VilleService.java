package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Ville;

import java.util.List;

public interface VilleService {

    public Ville add_ville(Ville ville);

    public Ville update_ville(Integer Id,Ville ville);

    public List<Ville> list_ville();

    public Ville afficher_ville_by_id(Integer Id);

    public void delete_ville(Integer Id);

}
