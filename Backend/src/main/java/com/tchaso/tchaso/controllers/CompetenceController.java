package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.CompetenceApi;
import com.tchaso.tchaso.models.Competence;
import com.tchaso.tchaso.services.CompetenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CompetenceController implements CompetenceApi {

    private CompetenceService competenceService;

    @Autowired
    public CompetenceController(CompetenceService competenceService){
        this.competenceService = competenceService;
    }

    @Override
    public Competence add_competence(Competence competence) {
        return competenceService.add_competence(competence);
    }

    @Override
    public Competence update_competence(Competence competence,Integer Id) {
        return competenceService.update_competence(Id,competence);
    }

    @Override
    public List<Competence> list_competence() {
        return competenceService.list_competence();
    }

    @Override
    public Competence afficher_competence_by_id(Integer Id) {
        return competenceService.afficher_competence_by_id(Id);
    }

    @Override
    public void delete_competence(Integer Id) {
        competenceService.delete_competence(Id);
    }

    @Override
    public List<Competence> afficher_competence_travailleur(Integer Id) {
        return competenceService.afficher_competence_travailleur(Id);
    }
}
