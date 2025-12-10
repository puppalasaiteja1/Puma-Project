package com.excelr.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Jacket {
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
    private Integer jacketId;
    private String jacketName;
    private Integer jacketPrice;
    private String jacketImage;
	public Jacket() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Jacket(Integer jacketId, String jacketName, Integer jacketPrice, String jacketImage) {
		super();
		this.jacketId = jacketId;
		this.jacketName = jacketName;
		this.jacketPrice = jacketPrice;
		this.jacketImage = jacketImage;
	}
	public Integer getJacketId() {
		return jacketId;
	}
	public void setJacketId(Integer jacketId) {
		this.jacketId = jacketId;
	}
	public String getJacketName() {
		return jacketName;
	}
	public void setJacketName(String jacketName) {
		this.jacketName = jacketName;
	}
	public Integer getJacketPrice() {
		return jacketPrice;
	}
	public void setJacketPrice(Integer jacketPrice) {
		this.jacketPrice = jacketPrice;
	}
	public String getJacketImage() {
		return jacketImage;
	}
	public void setJacketImage(String jacketImage) {
		this.jacketImage = jacketImage;
	}
	@Override
	public String toString() {
		return "Jacket [jacketId=" + jacketId + ", jacketName=" + jacketName + ", jacketPrice=" + jacketPrice
				+ ", jacketImage=" + jacketImage + "]";
	}
	
    
	
    
    
    
}
