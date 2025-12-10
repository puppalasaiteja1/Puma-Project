package com.excelr.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Shoe {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private Integer shoeId;
	private String  shoeName;
	private Integer shoePrice;
	private String shoeImage;
	public Shoe() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Shoe(Integer shoeId, String shoeName, Integer shoePrice, String shoeImage) {
		super();
		this.shoeId = shoeId;
		this.shoeName = shoeName;
		this.shoePrice = shoePrice;
		this.shoeImage = shoeImage;
	}
	public Integer getShoeId() {
		return shoeId;
	}
	public void setShoeId(Integer shoeId) {
		this.shoeId = shoeId;
	}
	public String getShoeName() {
		return shoeName;
	}
	public void setShoeName(String shoeName) {
		this.shoeName = shoeName;
	}
	public Integer getShoePrice() {
		return shoePrice;
	}
	public void setShoeprice(Integer shoePrice) {
		this.shoePrice = shoePrice;
	}
	public String getShoeImage() {
		return shoeImage;
	}
	public void setShoeImage(String shoeImage) {
		this.shoeImage = shoeImage;
	}
	@Override
	public String toString() {
		return "Shoe [shoeId=" + shoeId + ", shoeName=" + shoeName + ", shoePrice=" + shoePrice + ", shoeImage="
				+ shoeImage + "]";
	}
	
	

}
