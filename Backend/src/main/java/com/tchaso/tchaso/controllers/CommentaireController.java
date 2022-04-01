package com.tchaso.tchaso.controllers;

import com.tchaso.tchaso.apicontroller.CommentaireApi;
import com.tchaso.tchaso.models.Commentaire;
import com.tchaso.tchaso.services.CommentaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CommentaireController implements CommentaireApi {

    private CommentaireService commentaireservice;

    @Autowired
    public CommentaireController(CommentaireService commentaireservice){
        this.commentaireservice = commentaireservice;
    }


    @Override
    public Commentaire add_commentaire(Commentaire comment) {
        return commentaireservice.add_commentaire(comment);
    }

    @Override
    public List<Commentaire> CommentaireByTravailleur(Integer Id) {
        return commentaireservice.list_commentaire(Id);
    }
}
