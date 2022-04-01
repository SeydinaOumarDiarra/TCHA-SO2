package com.tchaso.tchaso.validators;

import com.tchaso.tchaso.models.Administrateur;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class AdministrateurValidator {

    public static List<String> validate(Administrateur administrateur){
        List<String> errors = new ArrayList<>();
        if (administrateur == null){
            errors.add("Veuillez renseigner l'email");
            errors.add("Veuillez renseigner le profil");
            return errors;
        }

        //StringUtils gère silencieusement les chaînes d'entrée nulles. C'est-à-dire qu'une entrée null renverra null .
        if (!StringUtils.hasLength(administrateur.getEmail())){
            errors.add("Veuillez renseigner l'email");
        }
        if (!StringUtils.hasLength(administrateur.getEmail())){
            errors.add("Veuillez renseigner le profil");
        }
        return errors;
    }
}
