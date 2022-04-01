package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Ville;
import com.tchaso.tchaso.repository.VilleRepository;
import com.tchaso.tchaso.services.VilleService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class VilleServiceImp implements VilleService {

    VilleRepository villeRepository;

    public VilleServiceImp(VilleRepository villeRepository){
        this.villeRepository = villeRepository;
    }

    @Override
    public Ville add_ville(Ville ville) {
        return villeRepository.save(ville);
    }

    @Override
    public Ville update_ville(Integer Id, Ville ville) {
        Ville vl = villeRepository.findById(Id).get();
        vl.setNomville(ville.getNomville());
        vl.setEtat(ville.getEtat());
        return villeRepository.save(vl);
    }

    @Override
    public List<Ville> list_ville() {
        return villeRepository.findAll();
    }

    @Override
    public Ville afficher_ville_by_id(Integer Id) {
        if (Id == null ){
            log.error("Ville id est null");
            return null;
        }
        return villeRepository.findById(Id).get();
    }

    @Override
    public void delete_ville(Integer Id) {
        if (Id == null ){
            log.error("Ville id est null");
            return ;
        }
        villeRepository.delete_ville(Id);
    }
}
