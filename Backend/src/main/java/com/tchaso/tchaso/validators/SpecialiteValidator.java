package com.tchaso.tchaso.validators;

import com.tchaso.tchaso.models.Specialite;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class SpecialiteValidator {

    public static List<String> validate(Specialite specialite){
        List<String> errors = new ArrayList<>();
        if (specialite == null){
            errors.add("Veuillez renseigner la description de la specialite");
            errors.add("Veuillez renseigner le nom de la specialite");
            return errors;
        }

        if (!StringUtils.hasLength(specialite.getDescription())){
            errors.add("Veuillez renseigner la description de la specialite");
        }
        if (!StringUtils.hasLength(specialite.getNomspe())){
            errors.add("Veuillez renseigner le nom de la specialite");
        }
        return errors;
    }

}
