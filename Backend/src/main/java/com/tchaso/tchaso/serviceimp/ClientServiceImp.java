package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.models.Client;
import com.tchaso.tchaso.repository.ClientRepository;
import com.tchaso.tchaso.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Id;
import javax.persistence.NoResultException;
import java.util.List;

@Service
public class ClientServiceImp implements ClientService {

    ClientRepository clientRepository;

    @Autowired
    public ClientServiceImp(ClientRepository clientRepository){
        this.clientRepository = clientRepository;
    }


    @Override
    public Client add_client(Client client) {
        return clientRepository.save(client);
    }

    @Override
    public Client update_client(Integer Id, Client client) {
        Client clt = clientRepository.findById(Id).get();
        clt.setNom(client.getNom());
        clt.setPrenom(client.getPrenom());
        clt.setGenre(client.getGenre());
        clt.setPassword(client.getPassword());
        clt.setEtat(client.getEtat());
        clt.setNumWhasapp(client.getNumWhasapp());
        clt.setEmail(client.getEmail());
        clt.setAdministrateur(client.getAdministrateur());
        return clientRepository.save(clt);
    }

    @Override
    public List<Client> list_client() {
        return clientRepository.findAll();
    }

    @Override
    public Long countClient() {
        return clientRepository.count();
    }

    @Override
    public Client afficher_client_by_id(Integer Id) {

        return clientRepository.findById(Id).get();
    }

    @Override
    public void delete_client(Integer Id) {
        clientRepository.delete_client(Id);
    }



    @Override
    public Client verifilogin(String login) {
        try {
            Client client = clientRepository.findOneByLogin(login);
            return client;
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public Client authentification(String login, String password) {
        try {
            Client client = clientRepository.findOneByLoginAndPassword(login, password);
            return client;
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public Client auth(String login, String password, Type type) {
        try {
            Client client = clientRepository.findOneByLoginAndPasswordAndType(login, password, type);
            return client;
        } catch (NoResultException e) {
            return null;
        }
    }

    /*
    * @Override
    public Client loginClient(String login, String password, String type) {
        try {
            Client client = clientRepository.loginClient(login, password, type);
            return client;
        } catch (NoResultException e) {
            return null;
        }
    }
    * */


}
