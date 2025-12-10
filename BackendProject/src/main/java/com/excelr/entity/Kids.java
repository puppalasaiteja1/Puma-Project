package com.excelr.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Kids {
	   @GeneratedValue(strategy = GenerationType.IDENTITY)
	   @Id
	   private Integer kidId;
	   private String kidName;
	   private Integer kidPrice;
	   private String kidImage;
	   
	   public Kids() {
		super();
		// TODO Auto-generated constructor stub
	   }

	   public Kids(Integer kidId, String kidName, Integer kidPrice, String kidImage) {
		super();
		this.kidId = kidId;
		this.kidName = kidName;
		this.kidPrice = kidPrice;
		this.kidImage = kidImage;
	   }

	   public Integer getKidId() {
		   return kidId;
	   }

	   public void setKidId(Integer kidId) {
		   this.kidId = kidId;
	   }

	   public String getKidName() {
		   return kidName;
	   }

	   public void setKidname(String kidName) {
		   this.kidName = kidName;
	   }

	   public Integer getKidPrice() {
		   return kidPrice;
	   }

	   public void setKidPrice(Integer kidPrice) {
		   this.kidPrice = kidPrice;
	   }

	   public String getKidImage() {
		   return kidImage;
	   }

	   public void setKidImage(String kidImage) {
		   this.kidImage = kidImage;
	   }

	   @Override
	   public String toString() {
		return "Kids [kidId=" + kidId + ", kidName=" + kidName + ", kidPrice=" + kidPrice + ", kidImage=" + kidImage
				+ "]";
	   }
	   
	   
	   
	    
	    
}
