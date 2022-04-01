package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.NotationApi;
import com.tchaso.tchaso.models.Notation;
import com.tchaso.tchaso.services.NotationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class NotationController implements NotationApi {
    private NotationService notationService;

    @Autowired
    public NotationController(NotationService notationService){
        this.notationService = notationService;
    }

    @Override
    public Notation add_notation(Notation note) {
        return notationService.add_notation(note);
    }

    @Override
    public List<Notation> NotationByTravailleur(Integer Id) {
        return notationService.list_notation(Id);
    }
}
