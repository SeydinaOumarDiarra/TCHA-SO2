package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Demande;
import com.tchaso.tchaso.models.Service;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface DemandeService {

    public Demande add_demande(Demande demande);

    public Demande update_demande(Integer Id,Demande demande);

    public List<Demande> list_demande();

    public Demande afficher_demande_by_id(Integer Id);

    public List<Demande> DemandeByTravailleurs(Integer Id);

    public void delete_demande(Integer Id);

    public List<Demande> CpteNotifyClient(Integer Id);
    public List<Demande> AllNotifyClient(Integer Id);
    public List<Demande> AllNotifyTravailleur(Integer Id);


}
