package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.AdministrateurApi;
import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.services.AdministrateurService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.Id;
import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

@RestController
@CrossOrigin("*")

public class AdministrateurController implements AdministrateurApi {

    private AdministrateurService administrateurService;

    @Autowired
    public AdministrateurController(AdministrateurService administrateurService){
        this.administrateurService = administrateurService;
    }

    @Override
    public Administrateur authentification(String username, String password) {
        return administrateurService.authentification(username, password);
    }

    @Override
    public Administrateur add_administrateur(Administrateur administrateur) {
        return administrateurService.add_administrateur(administrateur);
    }

    @Override
    public Administrateur update_administrateur(Administrateur administrateur, Integer Id) {
        return administrateurService.update_administrateur(Id,administrateur);
    }

    @Override
    public List<Administrateur> list_administrateur() {
        return administrateurService.list_administrateur();
    }

    @Override
    public Administrateur afficher_administrateur_by_id(Integer Id) {
        return administrateurService.afficher_administrateur_by_id(Id);
    }

    @Override
    public void delete_administrateur(Integer Id) {
        administrateurService.delete_administrateur(Id);
    }

    @Override
    public Administrateur reinitialiserPassword(String email) {
        return administrateurService.reinitialiserPassword(email);
    }
}
