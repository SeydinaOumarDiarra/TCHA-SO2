package com.tchaso.tchaso.serviceimp;

import com.tchaso.tchaso.models.Notation;
import com.tchaso.tchaso.repository.NotationRepository;
import com.tchaso.tchaso.services.NotationService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class NotationServiceImp implements NotationService {

    NotationRepository notationRepository;

    public NotationServiceImp(NotationRepository notationRepository){
        this.notationRepository = notationRepository;
    }

    @Override
    public Notation add_notation(Notation note) {
        return notationRepository.save(note);
    }

    @Override
    public List<Notation> list_notation(Integer id) {
        return notationRepository.NotationByTravailleur(id);
    }
}
