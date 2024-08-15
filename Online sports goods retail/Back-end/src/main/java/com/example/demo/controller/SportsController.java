package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Tennis;
import com.example.demo.service.SportsService;

@RestController
@CrossOrigin // To allow requests from your React frontend
public class SportsController {


    @Autowired
    private SportsService tennisService;

    @GetMapping("/Tennis")
    public List<Tennis> getAllTennis() {
        return tennisService.getAllTennis();
    }

    @PostMapping("/tennis")
    public Tennis addVehicle(@RequestBody Tennis tennis) {
        return tennisService.saveTennis(tennis);
    }

}