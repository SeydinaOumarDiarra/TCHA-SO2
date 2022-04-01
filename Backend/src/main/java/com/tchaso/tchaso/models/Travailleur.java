package com.tchaso.tchaso.models;

import com.tchaso.tchaso.enumeration.Type;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "travailleur")

public class Travailleur extends User {


    @Column(name = "photo")
    private String photo;

    @Column(name = "pieceiden")
    private String pieceiden;


    @Column(name = "quartier")
    private String quartier;

    @Enumerated(EnumType.STRING)
    private Type type = Type.travailleur;

    @ManyToOne
    private Administrateur administrateur;

    @ManyToOne
    private Specialite specialite;

    @ManyToOne
    private Ville ville;





}
