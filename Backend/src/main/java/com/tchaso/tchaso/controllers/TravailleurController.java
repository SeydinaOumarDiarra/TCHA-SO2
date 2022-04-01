package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.TravailleurApi;
import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Travailleur;
import com.tchaso.tchaso.repository.TravailleurRepository;
import com.tchaso.tchaso.services.TravailleurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("*")
public class TravailleurController implements TravailleurApi {

    private TravailleurService travailleurService;
    private TravailleurRepository travailleurRepository;

    @Autowired
    public TravailleurController(TravailleurService travailleurService){
        this.travailleurService = travailleurService;
    }

    @Override
    public Travailleur authentification(String username, String password) {
        return travailleurService.authentification(username, password);
    }

    @Override
    public Travailleur verifilogin(String username) {
        return travailleurService.verifilogin(username);
    }

    @Override
    public Travailleur authtravailleur(String username, String password, Type type) {
        return travailleurService.authtravailleur(username, password, type);
    }

    public static String uploadDir = System.getProperty("user.home") + "C:/Users/ousmane.kane/Tchaso/profil/";

    @Override
    public Travailleur add_travailleur(Travailleur travailleur,
                                       @RequestParam("image") MultipartFile multipartFile,
                                       @RequestParam("piece") MultipartFile multipartFilePiece) throws IOException {
        return travailleurService.add_travailleur(travailleur, multipartFile, multipartFilePiece);
    }



    @Override
    public Travailleur update_travailleur(Travailleur travailleur,Integer Id) {
        return travailleurService.update_travailleur(Id,travailleur);
    }

    @Override
    public Travailleur updatetravailleurwithfile(Integer Id, Travailleur travailleur, MultipartFile multipartFile, MultipartFile piece) throws IOException {
        return travailleurService.updatetravailleurwithfile(Id, travailleur, multipartFile,piece);
    }

    @Override
    public List<Travailleur> list_travailleur() {
        return travailleurService.list_travailleur();
    }

    @Override
    public Travailleur afficher_travailleur_by_id(Integer Id) {
        return travailleurService.afficher_travailleur_by_id(Id);
    }

    @Override
    public List<Travailleur> afficher_travailleur_specialite(Integer Id) {
        return travailleurService.afficher_travailleur_specialite(Id);
    }

    @Override
    public void delete_travailleur(Integer Id) {
        travailleurService.delete_travailleur(Id);
    }

    @Override
    public byte[] getpHOTO(Integer Id) throws IOException {
        return travailleurService.getpHOTO(Id);
    }

    @Override
    public byte[] getpiece(Integer Id) throws IOException {
        return travailleurService.getpiece(Id);
    }
}
