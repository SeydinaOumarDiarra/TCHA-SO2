package com.tchaso.tchaso.models;

import com.tchaso.tchaso.enumeration.Etat;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "competence")

public class Competence {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "description")
    private String description;

    @Column(name = "nomCom")
    private String nomCom;

    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.actif;

    @ManyToOne
    private Travailleur travailleur;

}
