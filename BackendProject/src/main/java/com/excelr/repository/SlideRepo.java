package com.excelr.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.excelr.entity.Slide;
@Repository
public interface SlideRepo extends JpaRepository<Slide, Integer> {

}
