package com.tchaso.tchaso.services;

import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.models.Client;


import java.util.List;


public interface ClientService {

    public Client add_client(Client client);

    public Client update_client(Integer Id,Client client);

    public List<Client> list_client();

    public Client afficher_client_by_id(Integer Id);

    public void delete_client(Integer Id);

    public Long countClient();

    //Authentification
    public Client verifilogin(String login);
    public Client authentification(String login, String password);
    public Client auth(String login, String password, Type type);

}
