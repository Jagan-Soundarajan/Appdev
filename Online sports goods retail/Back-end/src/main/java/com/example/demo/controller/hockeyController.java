package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.football;
import com.example.demo.service.BaseballService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin
@RestController
public class hockeyController {
    @Autowired
    private BaseballService bikeservice;

    @GetMapping("/bike")
    public List<football> getALLBikes(){
        return bikeservice.getALLBikes();
    }

    @PostMapping("/bikes")
    public football addBike(@RequestBody football bike) {
        return bikeservice.savebike(bike);
    }
    
}
