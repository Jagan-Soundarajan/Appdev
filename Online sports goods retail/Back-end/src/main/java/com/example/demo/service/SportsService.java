package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Tennis;
import com.example.demo.repository.SportsRepository;

import jakarta.transaction.Transactional;

@Service
public class SportsService {
    @Autowired

    private SportsRepository vehicleRepository;

    public List<Tennis> getAllVehicles() {
        return vehicleRepository.findAll();
    }

    public Tennis saveVehicle(Tennis tennis) {
        return vehicleRepository.save(tennis);
    }

    @Transactional
    public void deleteVehicleById(Long id) throws Exception {
        if (!vehicleRepository.existsById(id)) {
            throw new Exception("Vehicle not found with id: " + id);
        }
        vehicleRepository.deleteById(id);
    }

    public List<Tennis> getAllTennis() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getAllTennis'");
    }

    public Tennis saveTennis(Tennis tennis) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'saveTennis'");
    }

}