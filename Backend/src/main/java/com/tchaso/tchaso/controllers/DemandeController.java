package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.DemandeApi;
import com.tchaso.tchaso.models.Demande;
import com.tchaso.tchaso.services.DemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class DemandeController implements DemandeApi {

    private DemandeService demandeService;

    @Autowired
    public DemandeController(DemandeService demandeService){
        this.demandeService = demandeService;
    }
    @Override
    public Demande add_demande(Demande demande) {
        return demandeService.add_demande(demande);
    }

    @Override
    public Demande update_demande(Demande demande, Integer Id) {
        return demandeService.update_demande(Id,demande);
    }

    @Override
    public List<Demande> list_demande() {
        return demandeService.list_demande();
    }

    @Override
    public Demande afficher_demande_by_id(Integer Id) {
        return demandeService.afficher_demande_by_id(Id);
    }

    @Override
    public void delete_demande(Integer Id) {
        demandeService.delete_demande(Id);
    }

    @Override
    public List<Demande> getCpteNotifyClient(Integer Id) {
        return demandeService.CpteNotifyClient(Id);
    }

    @Override
    public List<Demande> getAllNotifyClient(Integer Id) {
        return demandeService.AllNotifyClient(Id);
    }

    @Override
    public List<Demande> getAllNotifyTravailleur(Integer Id) {
        return demandeService.AllNotifyTravailleur(Id);
    }

    @Override
    public List<Demande> DemandeByTravailleur(Integer Id) {
        return demandeService.DemandeByTravailleurs(Id);
    }


}
