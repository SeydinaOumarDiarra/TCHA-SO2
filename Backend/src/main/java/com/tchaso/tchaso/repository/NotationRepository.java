package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Notation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
public interface NotationRepository  extends JpaRepository<Notation, Integer> {
    @Modifying
    @Query(value="SELECT n FROM Notation n WHERE n.travailleur.id =:id")
    public List<Notation> NotationByTravailleur(@Param("id") Integer Id);
}
