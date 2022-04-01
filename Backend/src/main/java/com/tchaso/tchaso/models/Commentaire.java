package com.tchaso.tchaso.models;

import com.tchaso.tchaso.enumeration.Etat;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.Date;


@Data
@NoArgsConstructor
@Entity
@Table(name = "commentaire")
public class Commentaire {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "description")
    private String description;

    @Column(name = "datepub")
    private Date datepub;

    @Enumerated(EnumType.STRING)
    private Etat etat = Etat.actif;

    @ManyToOne
    private Client client;

    @ManyToOne
    private Travailleur travailleur;
}
