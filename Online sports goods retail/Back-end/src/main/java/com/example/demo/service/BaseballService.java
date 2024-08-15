package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.football;
import com.example.demo.repository.BaseballRepo;

@Service
public class BaseballService {
    @Autowired

    private BaseballRepo bikerepo;

    public List<football> getALLBikes(){
        return bikerepo.findAll();
    }
    public football savebike(football bike){
        return bikerepo.save(bike);
    }
}
