package com.excelr.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Shirt {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
    private Integer shirtId;
    private String shirtName;
    private Integer shirtPrice;
    private String shirtImage;
	public Shirt() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Shirt(Integer shirtId, String shirtName, Integer shirtPrice, String shirtImage) {
		super();
		this.shirtId = shirtId;
		this.shirtName = shirtName;
		this.shirtPrice = shirtPrice;
		this.shirtImage = shirtImage;
	}
	public Integer getShirtId() {
		return shirtId;
	}
	public void setShirtId(Integer shirtId) {
		this.shirtId = shirtId;
	}
	public String getShirtName() {
		return shirtName;
	}
	public void setShirtName(String shirtName) {
		this.shirtName = shirtName;
	}
	public Integer getShirtPrice() {
		return shirtPrice;
	}
	public void setShirtPrice(Integer shirtPrice) {
		this.shirtPrice = shirtPrice;
	}
	public String getShirtImage() {
		return shirtImage;
	}
	public void setShirtImage(String shirtImage) {
		this.shirtImage = shirtImage;
	}
	@Override
	public String toString() {
		return "Shirt [shirtId=" + shirtId + ", shirtName=" + shirtName + ", shirtPrice=" + shirtPrice + ", shirtImage="
				+ shirtImage + "]";
	}
    
    
}
