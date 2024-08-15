package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Tennis;


public interface SportsRepository extends JpaRepository<Tennis,Long>{

    
}