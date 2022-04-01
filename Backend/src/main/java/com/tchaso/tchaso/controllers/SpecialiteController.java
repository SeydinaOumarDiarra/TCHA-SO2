package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.SpecialiteApi;
import com.tchaso.tchaso.models.Specialite;
import com.tchaso.tchaso.services.SpecialiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class SpecialiteController implements SpecialiteApi {

    private SpecialiteService specialiteService;

    @Autowired
    public SpecialiteController(SpecialiteService specialiteService){
        this.specialiteService = specialiteService;
    }

    @Override
    public Specialite add_specialite(Specialite specialite) {
        return specialiteService.add_specialite(specialite);
    }

    @Override
    public Specialite update_specialite(Specialite specialite,Integer Id) {
        return specialiteService.update_specialite(Id,specialite);
    }

    @Override
    public List<Specialite> list_specialite() {
        return specialiteService.list_specialite();
    }

    @Override
    public Specialite afficher_specialite_by_id(Integer Id) {
        return specialiteService.afficher_specialite_by_id(Id);
    }

    @Override
    public List<Specialite> afficher_service_specialite(Integer Id) {
        return specialiteService.afficher_service_specialite(Id);
    }

    @Override
    public void delete_specialite(Integer Id) {
        specialiteService.delete_specialite(Id);
    }
}
