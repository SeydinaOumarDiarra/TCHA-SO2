package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Commentaire;
import com.tchaso.tchaso.models.Demande;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

@Api(APP_ROOT + "/commentaire")
public interface CommentaireApi {

    @PostMapping(value = APP_ROOT +  "/comment/ajout")
    Commentaire add_commentaire(@RequestBody Commentaire comment);

    @GetMapping(value = APP_ROOT +  "/commentaireByTravailleur/{id}")
    List<Commentaire> CommentaireByTravailleur(@PathVariable("id") Integer Id);
}
