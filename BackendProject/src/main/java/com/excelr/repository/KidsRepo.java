package com.excelr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excelr.entity.Kids;
@Repository
public interface KidsRepo extends JpaRepository<Kids, Integer>{

}
