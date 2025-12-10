package com.excelr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excelr.entity.Jacket;

@Repository
public interface JacketRepo extends JpaRepository<Jacket, Integer> {

}
