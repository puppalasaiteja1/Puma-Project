package com.excelr.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cartId;

    private String productName;
    private Integer productPrice;
    private String productImage;
    private String category;
    private Integer quantity;

    public Cart() {
        super();
    }

    public Cart(Integer cartId, String productName, Integer productPrice, String productImage, String category,
            Integer quantity) {
        super();
        this.cartId = cartId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.productImage = productImage;
        this.category = category;
        this.quantity = quantity;
    }

    public Integer getCartId() {
        return cartId;
    }

    public void setCartId(Integer cartId) {
        this.cartId = cartId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public Integer getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Integer productPrice) {
        this.productPrice = productPrice;
    }

    public String getProductImage() {
        return productImage;
    }

    public void setProductImage(String productImage) {
        this.productImage = productImage;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "Cart [cartId=" + cartId + ", productName=" + productName + ", productPrice=" + productPrice
                + ", productImage=" + productImage + ", category=" + category + ", quantity=" + quantity + "]";
    }

}
