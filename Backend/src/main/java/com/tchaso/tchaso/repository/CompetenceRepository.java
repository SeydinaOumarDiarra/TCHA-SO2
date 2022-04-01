package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Competence;
import com.tchaso.tchaso.models.Travailleur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface CompetenceRepository extends JpaRepository<Competence,Integer> {

    @Modifying
    @Query(value="UPDATE  Competence SET etat = 'inactif' WHERE id = :id ")
    void delete_competence(@Param("id") Integer Id);

    @Query(value="SELECT c FROM Competence c WHERE c.travailleur.id =:id ")
    List<Competence> competenceByTravailleur(@Param("id") Integer Id);

}
