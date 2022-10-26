package com.example.back.Repositories;


import com.example.back.Entities.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccountRepository extends JpaRepository<Account,Long> {
    Boolean existsByUsername(String username);

    Optional<Account> findByUsername(String username);
}

