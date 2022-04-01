package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.VilleApi;
import com.tchaso.tchaso.models.Ville;
import com.tchaso.tchaso.services.VilleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class VilleController implements VilleApi {

    private VilleService villeService;

    @Autowired
    public VilleController(VilleService villeService){
        this.villeService = villeService;
    }

    @Override
    public Ville add_ville(Ville ville) {
        return villeService.add_ville(ville);
    }

    @Override
    public Ville update_ville(Ville ville ,Integer Id) {
        return villeService.update_ville(Id,ville);
    }

    @Override
    public List<Ville> list_ville() {
        return villeService.list_ville();
    }

    @Override
    public Ville afficher_ville_by_id(Integer Id) {
        return villeService.afficher_ville_by_id(Id);
    }

    @Override
    public void delete_ville(Integer Id) {
        villeService.delete_ville(Id);
    }
}
