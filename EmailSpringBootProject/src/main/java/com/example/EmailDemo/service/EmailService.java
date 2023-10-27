package com.example.EmailDemo.service;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;

@Service
@Transactional
public class EmailService implements EmailServiceInt{

	@Autowired
	JavaMailSender jm;

	@Override
	public void sendSimpleMessage() {
	SimpleMailMessage message = new SimpleMailMessage();  
    message.setFrom("Your email?");
  
    message.setTo("Email Id to be send?");
    message.setSubject("Subject?");
    message.setText("Your Message here");
  
  //sending message  
    jm.send(message); 
    
	}
	
}
