package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Competence;
import com.tchaso.tchaso.models.Demande;
import com.tchaso.tchaso.models.Service;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

@Api(APP_ROOT + "/service")
public interface ServiceApi {

    @PostMapping(value = APP_ROOT +  "/service/ajout")
    @ApiOperation(value = "Enregistrer un service", notes = "Cette methode permet d'enregistrer un service", response = Service.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet service crée avec succèss"),
            @ApiResponse(code = 400, message = "L'objet service n'est pas créer")
    })
    Service add_service(Service service, @RequestParam("image") MultipartFile multipartFile)throws IOException;

    @PutMapping(value = APP_ROOT +  "/updateservice/{idservice}")
    @ApiOperation(value = "Modifier un service", notes = "Cette methode permet de modifier un service", response = Service.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet service modifié avec succèss"),
            @ApiResponse(code = 404, message = "Aucune service n'existe dans la base de donnée avec l'Id fourni")
    })
    Service update_service(@RequestBody Service service, @PathVariable("idservice") Integer Id);

    @GetMapping(value = APP_ROOT +  "/service/all")
    @ApiOperation(value = "Renvoie la liste des service", notes = "Cette methode permet de demande et renvoyer la liste des service qui existent", response = Service.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La liste des service")
    })
    List<Service> list_service();

    @GetMapping(value = APP_ROOT +  "/service/{idservice}")
    @ApiOperation(value = "Recherche un service par ID", notes = "Cette methode permet de rechercher un service par Id", response = Service.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Le service se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucun service n'existe dans la base de donnée")
    })
    Service afficher_service_by_id(@PathVariable("idservice") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/service/delette/{idservice}")
    @ApiOperation(value = "Supprime un service", notes = "Cette methode permet de supprimer un service ", response = Service.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Le service a été supprimer avec succèss")
    })
    void delete_service(@PathVariable("idservice") Integer Id);

    @GetMapping(value = APP_ROOT +  "/iconservice/{idservice}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    @ApiOperation(value = "Ajoute une photo", notes = "Cette methode permet d'ajouter une photo ", response = Service.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "ajouter avec succèss")
    })
    byte[] getIcon(@PathVariable("idservice") Integer Id) throws IOException;

}
