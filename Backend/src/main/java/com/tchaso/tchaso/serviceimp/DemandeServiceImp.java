package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Demande;
import com.tchaso.tchaso.models.EmailService;
import com.tchaso.tchaso.repository.DemandeRepository;
import com.tchaso.tchaso.services.DemandeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class DemandeServiceImp implements DemandeService {

    DemandeRepository demandeRepository;
    @Autowired
    EmailService emailService;

    @Autowired
    public DemandeServiceImp(DemandeRepository demandeRepository){
        this.demandeRepository = demandeRepository;
    }
    @Override
    public Demande add_demande(Demande demande) {
         Demande d = demandeRepository.save(demande);
         if(d.getTravailleur().getEmail() != null){
             emailService.SendSimpleEmail(
                     d.getTravailleur().getEmail(),
                     "Bonjour "+ d.getTravailleur().getNom()+" "+ d.getTravailleur().getPrenom()+"\n"+
                             "Vous avez une demande de service sur TCHA-SO, veuillez s'il vous plait aller confirmer votre disponibilité sur TCHA-SO",
                     "Demande de service sur TCHA-SO");
         }
        return d;
    }

    @Override
    public Demande update_demande(Integer Id, Demande demande) {
        Demande dmd = demandeRepository.findById(Id).get();
        dmd.setMotifdemande(demande.getMotifdemande());
        dmd.setStatutdemande(demande.getStatutdemande());
        dmd.setEtat(demande.getEtat());
        dmd.setDatedemande(demande.getDatedemande());
        dmd.setStatutdemandeclient(demande.getStatutdemandeclient());
        dmd.setIsaccept(demande.getIsaccept());
        return demandeRepository.save(dmd);
    }

    @Override
    public List<Demande> list_demande() {
        return demandeRepository.findAll();
    }

    @Override
    public Demande afficher_demande_by_id(Integer Id) {
        if (Id == null ){
            log.error("Demande id est null");
            return null;
        }
        return demandeRepository.findById(Id).get();
    }

    @Override
    public List<Demande> DemandeByTravailleurs(Integer Id) {
        return demandeRepository.DemandeByTravailleur(Id);
    }

    @Override
    public void delete_demande(Integer Id) {
        if (Id == null ){
            log.error("Demande id est null");
            return ;
        }
        demandeRepository.delete_demande(Id);
    }

    @Override
    public List<Demande> CpteNotifyClient(Integer Id) {
        if (Id == null ){
            log.error("client id est null");
            return null;
        }
        return demandeRepository.CpteNotifyClient(Id);
    }

    @Override
    public List<Demande> AllNotifyClient(Integer Id) {
        if (Id == null ){
            log.error("client id est null");
            return null;
        }
        return demandeRepository.AllNotifyClient(Id);
    }

    @Override
    public List<Demande> AllNotifyTravailleur(Integer Id) {
        if (Id == null ){
            log.error("travailleur id est null");
            return null;
        }
        return demandeRepository.AllNotifyTravailleur(Id);
    }
}
