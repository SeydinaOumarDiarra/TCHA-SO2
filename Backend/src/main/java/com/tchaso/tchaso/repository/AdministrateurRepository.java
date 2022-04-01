package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Administrateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface AdministrateurRepository extends JpaRepository<Administrateur,Integer> {
    Administrateur findOneByLoginAndPassword(String login,String password);

    Administrateur findOneByEmail(String email);

    @Modifying
    @Query(value="UPDATE  Administrateur SET etat = 'inactif' WHERE id = :id ")
    void delete_admin(@Param("id") Integer Id);

}
