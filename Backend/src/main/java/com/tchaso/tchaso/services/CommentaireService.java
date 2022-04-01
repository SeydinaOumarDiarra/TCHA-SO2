package com.tchaso.tchaso.services;


import com.tchaso.tchaso.models.Commentaire;

import java.util.List;

public interface CommentaireService {

    public Commentaire add_commentaire(Commentaire comment);
    public List<Commentaire> list_commentaire(Integer id);
}
