package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Specialite;

import java.util.List;

public interface SpecialiteService {

    public Specialite add_specialite(Specialite specialite);

    public Specialite update_specialite(Integer Id,Specialite specialite);

    public List<Specialite> list_specialite();

    public Specialite afficher_specialite_by_id(Integer Id);

    public List<Specialite> afficher_service_specialite(Integer Id);

    public void delete_specialite(Integer Id);

}
