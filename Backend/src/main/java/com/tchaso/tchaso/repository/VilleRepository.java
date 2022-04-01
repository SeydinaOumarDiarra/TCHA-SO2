package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface VilleRepository extends JpaRepository<Ville,Integer> {
    @Modifying
    @Query(value="UPDATE  Ville SET etat = 'inactif' WHERE id = :id ")
    void delete_ville(@Param("id") Integer Id);
}
