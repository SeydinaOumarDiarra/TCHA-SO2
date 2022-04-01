package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Administrateur;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

@Api(APP_ROOT + "/administrateur")
public interface AdministrateurApi {

    @GetMapping(value = APP_ROOT + "/log-admin/{login}/{password}")
    @ApiOperation(value = "S'authentifier", notes = "Cette methode permet de s'authentifier avec un login et mot de passe", response = Administrateur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Authentifier avec succèss")
    })
    @ResponseBody
    public Administrateur authentification(@PathVariable("login") String username, @PathVariable("password") String password);

    @PostMapping(value = APP_ROOT +  "/administrateur/ajout")
    @ApiOperation(value = "Enregistrer un administrateur", notes = "Cette methode permet d'enregistrer un administrateur", response = Administrateur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet administrateur crée avec succèss"),
            @ApiResponse(code = 400, message = "L'objet administrateur n'est pas créer")
    })
    Administrateur add_administrateur(@RequestBody Administrateur administrateur);

    @PutMapping(value = APP_ROOT +  "/updateadmin/{idadministrateur}")
    @ApiOperation(value = "Modifier un administrateur", notes = "Cette methode permet de modifier un administrateur", response = Administrateur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet administrateur modifié avec succèss"),
            @ApiResponse(code = 404, message = "Aucun administrateur n'existe dans la base de donnée avec l'Id fourni")
    })
    Administrateur update_administrateur(@RequestBody Administrateur administrateur,@PathVariable("idadministrateur")Integer Id);

    @GetMapping(value = APP_ROOT +  "/administrateur/all")
    @ApiOperation(value = "Renvoie la liste des administrateurs", notes = "Cette methode permet de rechercher et renvoyer la liste des administrateurs qui existent", response = Administrateur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La liste des administrateurs")
    })
    List<Administrateur> list_administrateur();

    @GetMapping(value = APP_ROOT +  "/administrateur/{idadministrateur}")
    @ApiOperation(value = "Recherche un administrateur par ID", notes = "Cette methode permet de rechercher un administrateur par Id", response = Administrateur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Le administrateur se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucun administrateur n'existe dans la base de donnée")
    })
    Administrateur afficher_administrateur_by_id(@PathVariable("idadministrateur") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/administrateur/delette/{idadministrateur}")
    @ApiOperation(value = "Supprime un administrateur", notes = "Cette methode permet de supprimer un administrateurs ", response = Administrateur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'administrateur a été supprimer avec succèss")
    })
    void delete_administrateur(@PathVariable("idadministrateur") Integer Id);



    @GetMapping(value = APP_ROOT +  "/reinitialiser/{email}")
    Administrateur reinitialiserPassword(@PathVariable("email") String email);

}
