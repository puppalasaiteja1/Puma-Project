package com.excelr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excelr.entity.Shoe;

@Repository
public interface ShoeRepo extends JpaRepository<Shoe, Integer> {

}
