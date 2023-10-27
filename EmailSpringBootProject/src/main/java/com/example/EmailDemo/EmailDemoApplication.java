package com.example.EmailDemo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class EmailDemoApplication {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(EmailDemoApplication.class, args);
		System.out.println("hello pooo");
	}
}
