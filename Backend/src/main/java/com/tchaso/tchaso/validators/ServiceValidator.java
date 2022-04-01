package com.tchaso.tchaso.validators;

import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.models.Service;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

public class ServiceValidator {

    public static List<String> validate(Service service){
        List<String> errors = new ArrayList<>();
        if (service == null){
            errors.add("Veuillez renseigner la description du service");
            errors.add("Veuillez renseigner le nom du service");
            errors.add("Veuillez renseigner l'icone de service");
            return errors;
        }

        if (!StringUtils.hasLength(service.getDescription())){
            errors.add("Veuillez renseigner la description du service");
        }
        if (!StringUtils.hasLength(service.getIcone())){
            errors.add("Veuillez renseigner l'icone de service");
        }
        if (!StringUtils.hasLength(service.getNomser())){
            errors.add("Veuillez renseigner le nom du service");
        }
        return errors;
    }

}
