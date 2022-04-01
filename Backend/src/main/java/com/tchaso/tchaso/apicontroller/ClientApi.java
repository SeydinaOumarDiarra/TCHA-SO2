package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Client;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

@Api(APP_ROOT + "/client")
public interface ClientApi {

    @GetMapping(value = APP_ROOT + "/log-client/{login}/{password}")
    @ApiOperation(value = "S'authentifier", notes = "Cette methode permet de s'authentifier avec un login et mot de passe", response = Client.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Authentifier avec succèss")
    })
    @ResponseBody
    public Client authentification(@PathVariable("login") String username, @PathVariable("password") String password);

    @GetMapping(value = APP_ROOT + "/logclient/{login}")
    @ApiOperation(value = "Verification", notes = "Cette methode permet de verifier si le login existe au niveau de l'inscription", response = Client.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Ok")
    })
    @ResponseBody
    public Client verifilogin(@PathVariable("login") String username);

    @GetMapping(value = APP_ROOT + "/logclient/{login}/{password}/{type}")
    @ApiOperation(value = "Verification", notes = "Cette methode permet de verifier si le login,mot de passe et le type existe au niveau de l'inscription", response = Client.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Ok")
    })
     @ResponseBody
     public Client auth(@PathVariable("login") String username, @PathVariable("password") String password,@PathVariable("type") Type type);


    @PostMapping(value = APP_ROOT +  "/client/ajout")
    @ApiOperation(value = "Enregistrer un Client", notes = "Cette methode permet d'enregistrer un client", response = Client.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet client crée avec succèss"),
            @ApiResponse(code = 400, message = "L'objet client n'est pas créer")
    })
    Client add_client(@RequestBody Client client);

    @PutMapping(value = APP_ROOT +  "/updateclient/{idclient}")
    @ApiOperation(value = "Modifier un client", notes = "Cette methode permet de modifier un client", response = Client.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet client modifié avec succèss"),
            @ApiResponse(code = 404, message = "Aucun client n'existe dans la base de donnée avec l'Id fourni")
    })
    Client update_client(@RequestBody Client client, @PathVariable("idclient") Integer Id);

    @GetMapping(value = APP_ROOT +  "/client/all")
    @ApiOperation(value = "Renvoie la liste des client", notes = "Cette methode permet de rechercher et renvoyer la liste des client qui existent", response = Client.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La liste des client")
    })
    List<Client> list_client();

    @GetMapping(value = APP_ROOT +  "/client/{idclient}")
    @ApiOperation(value = "Recherche un client par ID", notes = "Cette methode permet de rechercher un client par Id", response = Client.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Le client se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucun client n'existe dans la base de donnée")
    })
    Client afficher_client_by_id(@PathVariable("idclient") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/client/delette/{idclient}")
    @ApiOperation(value = "Supprime un client", notes = "Cette methode permet de supprimer un client ", response = Client.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Le client a été supprimer avec succèss")
    })
    void delete_client(@PathVariable("idclient") Integer Id);

    @GetMapping(value = APP_ROOT +  "/count/client")
    @ApiOperation(value = "Renvoie le nombre des client", notes = "Cette methode permet de rechercher et renvoyer le nombre des clients qui existent", response = Client.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Le nombre des clients")
    })
    Long cpteClient();

}
