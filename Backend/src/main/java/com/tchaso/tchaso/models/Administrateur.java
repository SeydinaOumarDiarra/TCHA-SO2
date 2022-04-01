package com.tchaso.tchaso.models;

import com.tchaso.tchaso.enumeration.Etat;
import com.tchaso.tchaso.enumeration.Profile;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "admin")

public class Administrateur extends User  {


    @Column(name = "email")
    private String email;
    @Enumerated(EnumType.STRING)
    private Profile profile;

}
