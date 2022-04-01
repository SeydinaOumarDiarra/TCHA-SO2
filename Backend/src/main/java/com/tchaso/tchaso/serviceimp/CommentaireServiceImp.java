package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Commentaire;
import com.tchaso.tchaso.repository.CommentaireRepository;
import com.tchaso.tchaso.repository.DemandeRepository;
import com.tchaso.tchaso.repository.VilleRepository;
import com.tchaso.tchaso.services.CommentaireService;
import com.tchaso.tchaso.services.DemandeService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
@Slf4j
public class CommentaireServiceImp implements CommentaireService {

    CommentaireRepository commentaireRepository;

    public CommentaireServiceImp(CommentaireRepository commentaireRepository){
        this.commentaireRepository = commentaireRepository;
    }

    @Override
    public Commentaire add_commentaire(@RequestBody Commentaire comment) {
        return commentaireRepository.save(comment);
    }

    @Override
    public List<Commentaire> list_commentaire(Integer id) {
        return commentaireRepository.CommentaireByTravailleur(id);
    }
}
