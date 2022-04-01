package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Competence;
import com.tchaso.tchaso.models.Travailleur;
import com.tchaso.tchaso.repository.CompetenceRepository;
import com.tchaso.tchaso.services.CompetenceService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class CompetenceServiceImp implements CompetenceService {

    CompetenceRepository competenceRepository;

    @Autowired
    public CompetenceServiceImp(CompetenceRepository competenceRepository){
        this.competenceRepository = competenceRepository;
    }

    @Override
    public Competence add_competence(Competence competence) {
        return competenceRepository.save(competence);
    }

    @Override
    public Competence update_competence(Integer Id, Competence competence) {
        Competence comp = competenceRepository.findById(Id).get();
        comp.setNomCom(competence.getNomCom());
        comp.setDescription(competence.getDescription());
        return competenceRepository.save(comp);
    }

    @Override
    public List<Competence> list_competence() {

        return competenceRepository.findAll();
    }

    @Override
    public Competence afficher_competence_by_id(Integer Id) {
        if (Id == null ){
            log.error("Competence id est null");
            return null;
        }
        return competenceRepository.findById(Id).get();
    }

    @Override
    public void delete_competence(Integer Id) {
        if (Id == null ){
            log.error("Competence id est null");
            return ;
        }
        competenceRepository.delete_competence(Id);
    }

    @Override
    public List<Competence> afficher_competence_travailleur(Integer Id) {
        if (Id == null ){
            log.error("Specialite id est null");
            return null;
        }
        return competenceRepository.competenceByTravailleur(Id);
    }
}
