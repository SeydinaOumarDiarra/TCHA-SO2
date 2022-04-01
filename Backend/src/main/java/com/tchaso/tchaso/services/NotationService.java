package com.tchaso.tchaso.services;

import com.tchaso.tchaso.models.Notation;

import java.util.List;

public interface NotationService {
    public Notation add_notation(Notation note);
    public List<Notation> list_notation(Integer id);
}
