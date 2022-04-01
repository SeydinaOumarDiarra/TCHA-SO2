package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

@Transactional
public interface ServiceRepository extends JpaRepository<Service,Integer> {

    @Modifying
    @Query(value="UPDATE  Service SET etat = 'inactif' WHERE id = :id ")
    void delete_service(@Param("id") Integer Id);

}
