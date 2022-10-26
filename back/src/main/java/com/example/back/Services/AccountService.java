package com.example.back.Services;


import com.example.back.Entities.Account;
import com.example.back.Repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public Page<Account> getAccount(Pageable pageable){
        return accountRepository.findAll(pageable);
    }

    public Optional<Account> getAccountById(Long id){
        return accountRepository.findById(id);
    }

    public Account addAccount(Account newAccount){
        return accountRepository.save(newAccount);
    }
}
