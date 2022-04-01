package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Demande;
import com.tchaso.tchaso.models.Service;
import com.tchaso.tchaso.models.Specialite;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;
@Api(APP_ROOT + "/specialite")
public interface SpecialiteApi {

    @PostMapping(value = APP_ROOT +  "/specialite/ajout")
    @ApiOperation(value = "Enregistrer une specialite", notes = "Cette methode permet d'enregistrer une specialite", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet specialite crée avec succèss"),
            @ApiResponse(code = 400, message = "L'objet specialite n'est pas créer")
    })
    Specialite add_specialite(@RequestBody Specialite specialite);

    @PutMapping(value = APP_ROOT +  "/updatespecialite/{idspecialite}")
    @ApiOperation(value = "Modifier une specialite", notes = "Cette methode permet de modifier une specialite", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet specialite modifié avec succèss"),
            @ApiResponse(code = 404, message = "Aucune specialite n'existe dans la base de donnée avec l'Id fourni")
    })
    Specialite update_specialite(@RequestBody Specialite specialite, @PathVariable("idspecialite") Integer Id);

    @GetMapping(value = APP_ROOT +  "/specialite/all")
    @ApiOperation(value = "Renvoie la liste des specialités", notes = "Cette methode permet de demande et renvoyer la liste des specialités qui existent", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La liste des specialités")
    })
    List<Specialite> list_specialite();

    @GetMapping(value = APP_ROOT +  "/specialite/{idspecialite}")
    @ApiOperation(value = "Recherche une specialité par ID", notes = "Cette methode permet de rechercher une specialité par Id", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La specialités se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucune specialités n'existe dans la base de donnée")
    })
    Specialite afficher_specialite_by_id(@PathVariable("idspecialite") Integer Id);

    @GetMapping(value = APP_ROOT +  "/spec/{idspec}")
    @ApiOperation(value = "Recherche une specialité par ID", notes = "Cette methode permet de rechercher les specialités par d'un service donné", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La specialités se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucune specialités n'existe dans la base de donnée")
    })
    List<Specialite> afficher_service_specialite(@PathVariable("idspec") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/specialite/delette/{idspecialite}")
    @ApiOperation(value = "Supprime une specialité", notes = "Cette methode permet de supprimer une specialité ", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La specialité a été supprimer avec succèss")
    })
    void delete_specialite(@PathVariable("idspecialite") Integer Id);

}
