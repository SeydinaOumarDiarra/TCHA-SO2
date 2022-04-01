package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Specialite;
import com.tchaso.tchaso.models.Travailleur;
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
@Api(APP_ROOT + "/travailleur")
public interface TravailleurApi {

    @GetMapping(value = APP_ROOT + "/log-travailleur/{login}/{password}")
    @ApiOperation(value = "S'authentifier", notes = "Cette methode permet de s'authentifier avec un login et mot de passe", response = Travailleur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Authentifier avec succèss")
    })
    @ResponseBody
    Travailleur authentification(@PathVariable("login") String username, @PathVariable("password") String password);

    @GetMapping(value = APP_ROOT + "/logtravailleur/{login}")
    @ApiOperation(value = "Verification", notes = "Cette methode permet de verifier si le login existe au niveau de l'inscription", response = Travailleur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Ok")
    })
    @ResponseBody
    public Travailleur verifilogin(@PathVariable("login") String username);

    @GetMapping(value = APP_ROOT + "/logtravailleur/{login}/{password}/{type}")
    @ApiOperation(value = "Verification", notes = "Cette methode permet de verifier si le login,mot de passe et le type existe au niveau de l'inscription", response = Travailleur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Ok")
    })
    @ResponseBody
    Travailleur authtravailleur(@PathVariable("login") String username, @PathVariable("password") String password,@PathVariable("type") Type type);


    @PostMapping(value = APP_ROOT + "/travailleur/ajout")
    @ApiOperation(value = "Enregistrer un travailleur", notes = "Cette methode permet d'enregistrer un travailleur", response = Travailleur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet travailleur crée avec succèss"),
            @ApiResponse(code = 400, message = "L'objet travailleur n'est pas créer")
    })
     Travailleur add_travailleur (Travailleur travailleur,
                                 @RequestParam("image") MultipartFile multipartFile,
                                  @RequestParam("piece") MultipartFile piece) throws IOException;

    @PutMapping(value = APP_ROOT +  "/updatetravailleur/{idTravailleur}")
    @ApiOperation(value = "Modifier un travailleur", notes = "Cette methode permet de modifier un travailleur", response = Travailleur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet travailleur modifié avec succèss"),
            @ApiResponse(code = 404, message = "Aucun travailleur n'existe dans la base de donnée avec l'Id fourni")
    })
    Travailleur update_travailleur(@RequestBody Travailleur travailleur,@PathVariable("idTravailleur") Integer Id);

    @PutMapping(value = APP_ROOT +  "/updatetravailleurwithfile/{idTravailleur}")
    @ApiOperation(value = "Modifier un travailleur avec photo et pièce", notes = "Cette methode permet de modifier un travailleur avec photo et pièce", response = Travailleur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "L'objet travailleur modifié avec succèss"),
            @ApiResponse(code = 404, message = "Aucun travailleur n'existe dans la base de donnée avec l'Id fourni")
    })
    Travailleur updatetravailleurwithfile(@PathVariable("idTravailleur") Integer Id, @RequestBody Travailleur travailleur, @RequestParam("image") MultipartFile multipartFile, @RequestParam("piece") MultipartFile piece) throws IOException;

    @GetMapping(value = APP_ROOT +  "/travailleur/all")
    @ApiOperation(value = "Renvoie la liste des travailleur", notes = "Cette methode permet de rechercher et renvoyer la liste des travailleur qui existent", response = Travailleur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La liste des travailleur")
    })
    List<Travailleur> list_travailleur();

    @GetMapping(value = APP_ROOT +  "/travailleur/{idTravailleur}")
    @ApiOperation(value = "Recherche un travailleur par ID", notes = "Cette methode permet de rechercher un travailleur par Id", response = Travailleur.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Le travailleur se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucun travailleur n'existe dans la base de donnée")
    })
    Travailleur afficher_travailleur_by_id(@PathVariable("idTravailleur") Integer Id );

    @GetMapping(value = APP_ROOT +  "/trava/{idtrv}")
    @ApiOperation(value = "Recherche un travailleur par ID", notes = "Cette methode permet de rechercher les travailleurs par d'une specialité donné", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "La specialités se trouve dans la base de donnée"),
            @ApiResponse(code = 404, message = "Aucune specialité n'existe dans la base de donnée")
    })
    List<Travailleur> afficher_travailleur_specialite(@PathVariable("idtrv") Integer Id);

    @DeleteMapping(value = APP_ROOT +  "/travailleur/delette/{idTravailleur}")
    @ApiOperation(value = "Supprime un client", notes = "Cette methode permet de supprimer un travailleur ", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Le travailleur a été supprimer avec succèss")
    })
    void delete_travailleur(@PathVariable("idTravailleur") Integer Id );

    @GetMapping(value = APP_ROOT +  "/phototravailleur/{idtrav}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    @ApiOperation(value = "Ajoute une photo", notes = "Cette methode permet d'ajouter une photo ", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "ajouter avec succèss")
    })
    byte[] getpHOTO(@PathVariable("idtrav") Integer Id) throws IOException;

    @GetMapping(value = APP_ROOT +  "/piecetravailleur/{idtrav}", produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    @ApiOperation(value = "Ajoute une photo", notes = "Cette methode permet d'ajouter une photo ", response = Specialite.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "ajouter avec succèss")
    })
    byte[] getpiece(@PathVariable("idtrav") Integer Id) throws IOException;

}
