package com.tchaso.tchaso.validators;


import com.tchaso.tchaso.models.Competence;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class CompetenceValidator {

    public static List<String> validate(Competence competence){
        List<String> errors = new ArrayList<>();
        if (competence == null){
            errors.add("Veuillez renseigner la description");
            errors.add("Veuillez renseigner le nom de la competence");
            return errors;
        }

        if (!StringUtils.hasLength(competence.getDescription())){
            errors.add("Veuillez renseigner la description");
        }
        if (!StringUtils.hasLength(competence.getNomCom())){
            errors.add("Veuillez renseigner le nom de la competence");
        }
        return errors;
    }

}
