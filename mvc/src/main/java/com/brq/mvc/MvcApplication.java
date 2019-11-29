package com.brq.mvc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.brq.mvc.domain.Nota;
import com.brq.mvc.repositories.NotaRepository;

@SpringBootApplication
public class MvcApplication implements CommandLineRunner {
	
	@Autowired
	private NotaRepository notaRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(MvcApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		notaRepository.save(new Nota(0, 1, "Nota "));
	}

}
