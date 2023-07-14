package no.skibuddies.skibuddies_api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class SkibuddiesApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(SkibuddiesApiApplication.class, args);
	}

	@GetMapping
	public String apiRoot() {
		return "Skibuddies API";
	}
}
