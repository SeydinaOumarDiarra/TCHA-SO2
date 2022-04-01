package com.tchaso.tchaso.services;


import com.tchaso.tchaso.models.Competence;
import com.tchaso.tchaso.models.Travailleur;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

public interface CompetenceService {

    public Competence add_competence(Competence competence);

    public Competence update_competence(Integer Id,Competence competence);

    public List<Competence> list_competence();

    public Competence afficher_competence_by_id( Integer Id);

    public void delete_competence( Integer Id);

    public List<Competence> afficher_competence_travailleur(Integer Id);

}
