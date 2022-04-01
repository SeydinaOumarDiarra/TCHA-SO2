package com.tchaso.tchaso.models;

import com.tchaso.tchaso.enumeration.Etat;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@MappedSuperclass // Ses champs sont enregistrés en base, et sont associés aux champs de toutes les entités

public class User implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "numWhasapp")
    private String numWhasapp;

    @Column(name = "genre")
    private String genre;

    @Column(name = "email")
    private String email;

    @Enumerated(EnumType.STRING)
    private Etat etat;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;


}
