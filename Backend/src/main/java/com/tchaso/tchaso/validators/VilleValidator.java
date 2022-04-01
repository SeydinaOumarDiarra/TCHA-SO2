package com.tchaso.tchaso.validators;

import com.tchaso.tchaso.models.Ville;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class VilleValidator {

    public static List<String> validate(Ville ville){
        List<String> errors = new ArrayList<>();
        if (ville == null){
            errors.add("Veuillez renseigner le nom de la ville");
            return errors;
        }
        if (!StringUtils.hasLength(ville.getNomville())){
            errors.add("Veuillez renseigner le nom de la ville");
        }
        return errors;
    }

}
