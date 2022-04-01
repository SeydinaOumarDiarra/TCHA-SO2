package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.models.EmailService;
import com.tchaso.tchaso.repository.AdministrateurRepository;
import com.tchaso.tchaso.services.AdministrateurService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;
import java.util.List;

@Service
@Slf4j
public class AdministrateurServiceImp implements AdministrateurService {

    AdministrateurRepository administrateurRepository;
    @Autowired
    EmailService emailService;

    @Autowired
    public AdministrateurServiceImp(AdministrateurRepository administrateurRepository){
        this.administrateurRepository = administrateurRepository;
    }

    @Override
    public Administrateur add_administrateur(Administrateur administrateur) {
            Administrateur a =  administrateurRepository.save(administrateur);
            emailService.SendSimpleEmail(
                    a.getEmail(),
                    "Un compte vous a été ouvert sur TCHA-SO comme "+"\n"+a.getProfile()+
                            ". Votre nom d'utilisateur est : "+ a.getLogin()+"\n"+ "votre mot de passe est : "+
                            a.getPassword() +"\n" + "Songer à changer votre mot de passe une fois connecté.",
                    "Ouverture de compte TCHA-SO");
            return  a;
    }

    @Override
    public Administrateur update_administrateur(Integer Id, Administrateur administrateur) {
        Administrateur admin = administrateurRepository.findById(Id).get();
        admin.setNom(administrateur.getNom());
        admin.setPrenom(administrateur.getPrenom());
        admin.setEmail(administrateur.getEmail());
        admin.setEtat(administrateur.getEtat());
        admin.setPassword(administrateur.getPassword());
        return administrateurRepository.save(admin);
    }

    @Override
    public List<Administrateur> list_administrateur() {
        return administrateurRepository.findAll();
    }

    @Override
    public Administrateur afficher_administrateur_by_id(Integer Id) {
        if (Id == null ){
            log.error("Administrateur id est null");
            return null;
        }
        return administrateurRepository.findById(Id).get();
    }

    @Override
    public void delete_administrateur(Integer Id) {
        if (Id == null ){
            log.error("Administrateur id est null");
            return ;
        }
        administrateurRepository.delete_admin(Id);
    }

    @Override
    public Administrateur authentification(String login, String password) {
        try {
            Administrateur administrateur = administrateurRepository.findOneByLoginAndPassword(login, password);
            return administrateur;
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public Administrateur reinitialiserPassword(String email) {
        Administrateur a  = administrateurRepository.findOneByEmail(email);
        System.out.println(a.getEmail());
        emailService.SendSimpleEmail(
                a.getEmail(),
                "Cliquez sur le lien ci-dessous pour réinitialiser votre compte TCHA-SO "+"\n"+
                        "http://localhost:4200/ffsftejsfbhdvmzhbgsxffsojdpodhfefbvhe",
                "Récupération de compte TCHA-SO");
        return  a;
    }
}
