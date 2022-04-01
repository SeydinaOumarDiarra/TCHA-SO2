package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.models.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.Optional;

@Transactional
public interface ClientRepository extends JpaRepository<Client,Integer> {

    Client findOneByLogin(String login);
    Client findOneByLoginAndPassword(String login, String password);
    Client findOneByLoginAndPasswordAndType(String login, String password, Type type);


   /*
   *  @Query("select c from Client c where c.login = :login AND c.password = :password AND c.type =: typeclient")
     public Client loginClient(@Param("login") String login,
                              @Param("password") String password,
                              @Param("typeclient") String typeclient);
   * */

    @Modifying
    @Query(value="UPDATE  Client SET etat = 'inactif' WHERE id = :id ")
    void delete_client(@Param("id") Integer Id);

}
