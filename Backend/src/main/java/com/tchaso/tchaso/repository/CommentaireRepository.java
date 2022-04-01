package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Demande;
import org.springframework.data.jpa.repository.JpaRepository;
import com.tchaso.tchaso.models.Commentaire;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface CommentaireRepository extends JpaRepository<Commentaire, Integer> {
    @Modifying
    @Query(value="SELECT c FROM Commentaire c WHERE c.travailleur.id =:id")
    public List<Commentaire> CommentaireByTravailleur(@Param("id") Integer Id);
}
