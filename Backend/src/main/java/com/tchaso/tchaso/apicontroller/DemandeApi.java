package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Competence;
import com.tchaso.tchaso.models.Demande;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

@Api(APP_ROOT + "/demande")
public interface DemandeApi {

    @PostMapping(value = APP_ROOT +  "/demande/ajout")
    @ApiOperation(value = "Enregistrer une demande", notes = "Cette methode permet d'enregistrer une demande", response = Demande.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet demande crée avec succèss"),
            @ApiResponse(code = 400, message = "L'objet demande n'est pas créer")
    })
    Demande add_demande(@RequestBody Demande demande);

        @PutMapping(value = APP_ROOT +  "/updatedemande/{iddemande}")
    @ApiOperation(value = "Modifier une demande", notes = "Cette methode permet de modifier une demande", response = Demande.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet demande modifié avec succèss"),
            @ApiResponse(code = 404, message = "Aucune demande n'existe dans la base de donnée avec l'Id fourni")
    })
    Demande update_demande(@RequestBody Demande demande ,@PathVariable("iddemande") Integer Id);
    @GetMapping(value = APP_ROOT +  "/demande/all")
    @ApiOperation(value = "Renvoie la liste des demande", notes = "Cette methode permet de demande et renvoyer la liste des demande qui existent", response = Demande.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La liste des demande")
    })
    List<Demande> list_demande();

    @GetMapping(value = APP_ROOT +  "/demande/{iddemande}")
    @ApiOperation(value = "Recherche une demande par ID", notes = "Cette methode permet de rechercher une demande par Id", response = Demande.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La demande se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucune demande n'existe dans la base de donnée")
    })
    Demande afficher_demande_by_id(@PathVariable("iddemande") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/demande/delette/{iddemande}")
    @ApiOperation(value = "Supprime une demande", notes = "Cette methode permet de supprimer une demande ", response = Competence.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La demande a été supprimer avec succèss")
    })
    void delete_demande(@PathVariable("iddemande") Integer Id);


    @GetMapping(value = APP_ROOT +  "/getNotifyClient/{id}")
    List<Demande> getCpteNotifyClient(@PathVariable("id") Integer Id);

    @GetMapping(value = APP_ROOT +  "/getAllNotifyClient/{id}")
    List<Demande> getAllNotifyClient(@PathVariable("id") Integer Id);

    @GetMapping(value = APP_ROOT +  "/getAllNotifyTravailleur/{id}")
    List<Demande> getAllNotifyTravailleur(@PathVariable("id") Integer Id);

    @GetMapping(value = APP_ROOT +  "/demandeByTravailleur/{id}")
    List<Demande> DemandeByTravailleur(@PathVariable("id") Integer Id);

}
