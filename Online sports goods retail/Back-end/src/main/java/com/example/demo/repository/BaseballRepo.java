package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.football;

public interface BaseballRepo extends JpaRepository<football,Long>{

    
}