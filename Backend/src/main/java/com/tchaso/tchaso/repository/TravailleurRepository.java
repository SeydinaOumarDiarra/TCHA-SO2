package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.enumeration.Type;
import com.tchaso.tchaso.models.Administrateur;
import com.tchaso.tchaso.models.Client;
import com.tchaso.tchaso.models.Specialite;
import com.tchaso.tchaso.models.Travailleur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface TravailleurRepository extends JpaRepository<Travailleur,Integer> {

    Travailleur findOneByLogin(String login);
    Travailleur findOneByLoginAndPassword(String login, String password);
    Travailleur findOneByLoginAndPasswordAndType(String login, String password, Type type);

    @Modifying
    @Query(value="UPDATE  Travailleur SET etat = 'inactif' WHERE id = :id ")
    void delete_travailleur(@Param("id") Integer Id);

    @Query(value="SELECT t FROM Travailleur t WHERE t.etat = 'actif' AND t.specialite.id =:id ")
    List<Travailleur> specialiteByService(@Param("id") Integer Id);

}
