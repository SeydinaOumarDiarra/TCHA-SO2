package com.tchaso.tchaso.repository;

import com.tchaso.tchaso.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
