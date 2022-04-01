package com.tchaso.tchaso.controllers;


import com.tchaso.tchaso.apicontroller.ClientApi;
import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Client;
import com.tchaso.tchaso.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController //@RestController nous permettent de définir des URL et le code à exécuter quand ces dernières sont requêtées
@CrossOrigin("*")
public class ClientController implements ClientApi {

    private ClientService clientService;

    @Autowired //permet d'activer l'injection automatique de dépendance.
    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @Override
    public Client authentification(String username, String password) {
        return clientService.authentification(username, password);
    }

    @Override
    public Client verifilogin(String username) {
        return clientService.verifilogin(username);
    }

    @Override
    public Client auth(String username, String password, Type type) {
        return clientService.auth(username, password, type);
    }

    @Override
    public Client add_client(Client client) {
        return clientService.add_client(client);
    }

    @Override
    public Client update_client(Client client, Integer Id) {
        return clientService.update_client(Id,client);
    }

    @Override
    public List<Client> list_client() {
        return clientService.list_client();
    }

    @Override
    public Client afficher_client_by_id(Integer Id) {
        return clientService.afficher_client_by_id(Id);
    }

    @Override
    public void delete_client(Integer Id) {
        clientService.delete_client(Id);
    }

    @Override
    public Long cpteClient() {
        return clientService.countClient();
    }
}
