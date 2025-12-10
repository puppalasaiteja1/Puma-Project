package com.excelr.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Slide {
	@GeneratedValue(strategy = GenerationType.IDENTITY)  
	@Id
      private Integer slideId;
      private String slideName;
      private Integer slidePrice;
      private String slideImage;
	  public Slide() {
		super();
		// TODO Auto-generated constructor stub
	  }
	  public Slide(Integer slideId, String slideName, Integer slidePrice, String slideImage) {
		super();
		this.slideId = slideId;
		this.slideName = slideName;
		this.slidePrice = slidePrice;
		this.slideImage = slideImage;
	  }
	  public Integer getSlideId() {
		  return slideId;
	  }
	  public void setSlideId(Integer slideId) {
		  this.slideId = slideId;
	  }
	  public String getSlideName() {
		  return slideName;
	  }
	  public void setSlideName(String slideName) {
		  this.slideName = slideName;
	  }
	  public Integer getSlidePrice() {
		  return slidePrice;
	  }
	  public void setSlidePrice(Integer slidePrice) {
		  this.slidePrice = slidePrice;
	  }
	  public String getSlideImage() {
		  return slideImage;
	  }
	  public void setSlideImage(String slideImage) {
		  this.slideImage = slideImage;
	  }
	  @Override
	  public String toString() {
		return "Slide [slideId=" + slideId + ", slideName=" + slideName + ", slidePrice=" + slidePrice + ", slideImage="
				+ slideImage + "]";
	  }
      
}
