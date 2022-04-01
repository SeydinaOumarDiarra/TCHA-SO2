package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Demande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface DemandeRepository extends JpaRepository<Demande, Integer> {
    @Modifying
    @Query(value="UPDATE  Demande SET etat = 'inactif' WHERE id = :id ")
    void delete_demande(@Param("id") Integer Id);

    @Modifying
    @Query(value="SELECT d FROM Demande d WHERE d.travailleur.id =:id")
    public List<Demande> DemandeByTravailleur(@Param("id") Integer Id);

    @Modifying
    @Query(value="SELECT d FROM Demande d WHERE d.isaccept != null AND d.statutdemandeclient = 'non_lu' AND  d.client.id =:id")
    public List<Demande> CpteNotifyClient(@Param("id") Integer Id);

    @Modifying
    @Query(value="SELECT d FROM Demande d WHERE d.isaccept != null AND d.client.id =:id ORDER BY (d.id) DESC")
    public List<Demande> AllNotifyClient(@Param("id") Integer Id);

    @Modifying
    @Query(value="SELECT d FROM Demande d WHERE d.travailleur.id =:id OR d.travailleurclient.id =:id ORDER BY (d.id) DESC")
    public List<Demande> AllNotifyTravailleur(@Param("id") Integer Id);
}
