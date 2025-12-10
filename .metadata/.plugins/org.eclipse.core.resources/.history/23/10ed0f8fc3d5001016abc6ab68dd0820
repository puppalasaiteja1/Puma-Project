package com.excelr.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.excelr.entity.Cart;
import com.excelr.entity.Jacket;
import com.excelr.entity.Kids;
import com.excelr.entity.Shirt;
import com.excelr.entity.Shoe;
import com.excelr.entity.Slide;
import com.excelr.entity.Users;
import com.excelr.repository.CartRepo;
import com.excelr.repository.JacketRepo;
import com.excelr.repository.KidsRepo;
import com.excelr.repository.ShirtRepo;
import com.excelr.repository.ShoeRepo;
import com.excelr.repository.SlideRepo;
import com.excelr.repository.UsersRepo;
import com.excelr.requests.LoginRequest;

@Service
public class UserService {

  

	@Autowired
	UsersRepo usersRepo;

    
	
    //register
	public Users addUser(Users user) { // saves a new Users entity to the database
		return usersRepo.save(user);
	}
   
	//login
	public Boolean loginUser(LoginRequest loginRequest) { // This method handles the login check logic
		Optional<Users> user = usersRepo.findByEmail(loginRequest.getEmail()); // to search for a user by email

		if (user.isEmpty()) { // f no user with the given email exists → return false (login failed).
			return false;
		}

		Users user1 = user.get(); // f the user exists, extract it with .get()
		return user1.getPassword().equals(loginRequest.getPassword()); // Compare the stored password with the password
																		// provided in LoginRequest
	}
	
	@Autowired
	ShoeRepo repo1;
	public List<Shoe> getAllshoes(){
		return repo1.findAll();
	}

	@Autowired 
	ShirtRepo repo2;
	public List<Shirt> getAllShirt(){
		return repo2.findAll();
		}
	
	@Autowired 
	KidsRepo repo3;
	public List<Kids> getAllKid(){
		return repo3.findAll();
	}
	
	@Autowired 
	SlideRepo repo4;
	public List<Slide> getAllSlide(){
		return repo4.findAll();
	}
	
	@Autowired
	JacketRepo repo5;
	public List<Jacket> getAlljacket(){
		return repo5.findAll();
	}
	
	
	@Autowired
	CartRepo cartRepo;

	public Cart addToCart(Cart cart) {
	    return cartRepo.save(cart);
	}

	public List<Cart> getAllCartItems() {
	    return cartRepo.findAll();
	}

	public void deleteCartItem(Integer id) {
	    cartRepo.deleteById(id);
	}
  
	 
	public Cart updateCartQuantity(Integer id, Integer quantity) {
		Optional<Cart> optionalCart = cartRepo.findById(id);

		if (optionalCart.isPresent()) {
			Cart cart = optionalCart.get();
			cart.setQuantity(quantity);
			return cartRepo.save(cart);
		}

		return null; // if no cart with that id
	}
	
}
