package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Client;
import com.tchaso.tchaso.models.Competence;
import com.tchaso.tchaso.models.Specialite;
import com.tchaso.tchaso.models.Travailleur;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

@Api(APP_ROOT + "/competence")
public interface CompetenceApi {

    @PostMapping(value = APP_ROOT +  "/competence/ajout")
    @ApiOperation(value = "Enregistrer une competence", notes = "Cette methode permet d'enregistrer une competence", response = Competence.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet competence crée avec succèss"),
            @ApiResponse(code = 400, message = "L'objet competence n'est pas créer")
    })
    Competence add_competence(@RequestBody Competence competence);

    @PutMapping(value = APP_ROOT +  "/updatecompetence/{idcompetence}")
    @ApiOperation(value = "Modifier une competence", notes = "Cette methode permet de modifier une competence", response = Competence.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet competence modifié avec succèss"),
            @ApiResponse(code = 404, message = "Aucune competence n'existe dans la base de donnée avec l'Id fourni")
    })
    Competence update_competence(@RequestBody Competence competence, @PathVariable("idcompetence") Integer Id);

    @GetMapping(value = APP_ROOT +  "/competence/all")
    @ApiOperation(value = "Renvoie la liste des competences", notes = "Cette methode permet de rechercher et renvoyer la liste des competences qui existent", response = Competence.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La liste des client")
    })
    List<Competence> list_competence();

    @GetMapping(value = APP_ROOT +  "/competence/{idcompetence}")
    @ApiOperation(value = "Recherche une competence par ID", notes = "Cette methode permet de rechercher une competence par Id", response = Competence.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La competence se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucune competence n'existe dans la base de donnée")
    })
    Competence afficher_competence_by_id(@PathVariable("idcompetence") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/competence/delette/{idservice}")
    @ApiOperation(value = "Supprime une competence", notes = "Cette methode permet de supprimer une competence ", response = Competence.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La competence a été supprimer avec succèss")
    })
    void delete_competence(@PathVariable("idservice") Integer Id);

    @GetMapping(value = APP_ROOT +  "/compe/{idcomp}")
    @ApiOperation(value = "Recherche une compétence par ID", notes = "Cette methode permet de rechercher les competences par d'un travailleur donné", response = Competence.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La compétence se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucune compétence n'existe dans la base de donnée")
    })
    List<Competence> afficher_competence_travailleur(@PathVariable("idcomp") Integer Id);

}
