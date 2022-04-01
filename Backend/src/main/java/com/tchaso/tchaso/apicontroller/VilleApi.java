package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Client;
import com.tchaso.tchaso.models.Demande;
import com.tchaso.tchaso.models.Ville;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

@Api(APP_ROOT + "/villle")
public interface VilleApi {

    @PostMapping(value = APP_ROOT +  "/ville/ajout")
    @ApiOperation(value = "Enregistrer une ville", notes = "Cette methode permet d'enregistrer une ville", response = Ville.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet ville crée avec succèss"),
            @ApiResponse(code = 400, message = "L'objet ville n'est pas créer")
    })
    Ville add_ville(@RequestBody Ville ville);

    @PutMapping(value = APP_ROOT +  "/updateville/{idVille}")
    @ApiOperation(value = "Modifier une ville", notes = "Cette methode permet de modifier une ville", response = Ville.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet ville modifié avec succèss"),
            @ApiResponse(code = 404, message = "Aucune ville n'existe dans la base de donnée avec l'Id fourni")
    })
    Ville update_ville(@RequestBody Ville ville,@PathVariable("idVille") Integer Id);

    @GetMapping(value = APP_ROOT +  "/ville/all")
    @ApiOperation(value = "Renvoie la liste des ville", notes = "Cette methode permet de demander et renvoyer la liste des ville qui existent", response = Ville.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La liste des ville")
    })
    List<Ville> list_ville();

    @GetMapping(value = APP_ROOT +  "/ville/{idVille}")
    @ApiOperation(value = "Recherche une ville par ID", notes = "Cette methode permet de rechercher une ville par Id", response = Ville.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La ville se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucune ville n'existe dans la base de donnée")
    })
    Ville afficher_ville_by_id(@PathVariable("idVille") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/ville/delette/{idVille}")
    @ApiOperation(value = "Supprime un ville", notes = "Cette methode permet de supprimer un ville ", response = Ville.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Le ville a été supprimer avec succèss")
    })
    void delete_ville(@PathVariable("idVille") Integer Id);

}
