package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Specialite;
import com.tchaso.tchaso.repository.SpecialiteRepository;
import com.tchaso.tchaso.services.SpecialiteService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class SpecialiteServiceImp implements SpecialiteService {

    SpecialiteRepository specialiteRepository;

    @Autowired
    public SpecialiteServiceImp(SpecialiteRepository specialiteRepository){
        this.specialiteRepository = specialiteRepository;
    }

    @Override
    public Specialite add_specialite(Specialite specialite) {
        return specialiteRepository.save(specialite);
    }

    @Override
    public Specialite update_specialite(Integer Id, Specialite specialite) {
        Specialite spe = specialiteRepository.findById(Id).get();
        spe.setDescription(specialite.getDescription());
        spe.setNomspe(specialite.getNomspe());
        spe.setEtat(specialite.getEtat());
        return specialiteRepository.save(spe);
    }

    @Override
    public List<Specialite> list_specialite() {
        return specialiteRepository.findAll();
    }

    @Override
    public Specialite afficher_specialite_by_id(Integer Id) {
        if (Id == null ){
            log.error("Specialite id est null");
            return null;
        }
        return specialiteRepository.findById(Id).get();
    }

    @Override
    public List<Specialite> afficher_service_specialite(Integer Id) {
        if (Id == null ){
            log.error("Specialite id est null");
            return null;
        }
        return specialiteRepository.specialiteByService(Id);
    }

    @Override
    public void delete_specialite(Integer Id) {
        if (Id == null ){
            log.error("Specialite id est null");
            return ;
        }
        specialiteRepository.delete_specialite(Id);
    }
}
