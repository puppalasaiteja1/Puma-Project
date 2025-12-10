package com.excelr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excelr.entity.Shirt;
@Repository
public interface ShirtRepo extends JpaRepository<Shirt, Integer> {

}
