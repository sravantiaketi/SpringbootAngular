package com.example.rest.webservices.restfulwebservices.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	
	@GetMapping("/hello-world-bean")
	public HelloWorldBean hellowWorld() {
		return new HelloWorldBean("Hello World!");
	}

	@GetMapping("/hello-world-bean/{username}")
	public HelloWorldBean hellowWorldBeanParam(@PathVariable String username) {
		return new HelloWorldBean("Hello "+username);
	}
}
