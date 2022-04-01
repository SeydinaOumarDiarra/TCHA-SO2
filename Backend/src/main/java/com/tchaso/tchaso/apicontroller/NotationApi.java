package com.tchaso.tchaso.apicontroller;

import com.tchaso.tchaso.models.Commentaire;
import com.tchaso.tchaso.models.Notation;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import static com.tchaso.tchaso.utils.Constant.APP_ROOT;

@Api(APP_ROOT + "/notation")
public interface NotationApi {
    @PostMapping(value = APP_ROOT +  "/note/ajout")
    Notation add_notation(@RequestBody Notation note);

    @GetMapping(value = APP_ROOT +  "/notationByTravailleur/{id}")
    List<Notation> NotationByTravailleur(@PathVariable("id") Integer Id);
}
