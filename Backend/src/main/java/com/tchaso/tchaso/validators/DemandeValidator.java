package com.tchaso.tchaso.validators;

import com.tchaso.tchaso.models.Demande;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class DemandeValidator {

    public static List<String> validate(Demande demande){
        List<String> errors = new ArrayList<>();
        if (demande == null){
            errors.add("Veuillez renseigner le statut de la demande");
            errors.add("Veuillez renseigner le motif de la demande");
            errors.add("Veuillez renseigner la date  de la demande");
            return errors;
        }

        if (!StringUtils.hasLength(demande.getStatutdemande())){
            errors.add("Veuillez renseigner le statut de la demande");
        }
        if (!StringUtils.hasLength(demande.getMotifdemande())){
            errors.add("Veuillez renseigner le motif de la demande");
        }
        if (demande.getDatedemande() == null ){
            errors.add("Veuillez renseigner la date  de la demande");
        }
        return errors;
    }

}
