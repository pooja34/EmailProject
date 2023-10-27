package com.example.EmailDemo.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.EmailDemo.service.EmailServiceInt;

@RestController
public class EmailController {

    @Autowired
    private EmailServiceInt applicant;
    
    public EmailController() {
		System.out.println("Hello");
	}
	
	@GetMapping("/send")
	public void sendmail() {
		applicant.sendSimpleMessage();
		System.out.println("mail sent");
	}

}
