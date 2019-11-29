package com.brq.mvc.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.brq.mvc.domain.Professor;

@RestController

public class ProfessorController {
	
	List <Professor> listaProfessor = new ArrayList<Professor> ();
	
	@RequestMapping(value="/professor", method= RequestMethod.GET)
	public List<Professor> welcome() {
		
		return listaProfessor;
	}
	
	@RequestMapping(value="/professor", method= RequestMethod.POST)
	public boolean criarProfessor () {
		Professor p1 = new Professor();
		p1.setId(1);
		p1.setNome("Fabrizio");
		
		System.out.println(p1);
		
		listaProfessor.add(p1);
		
		return true;
	}
	
	@RequestMapping(value="/professor/{id}", method= RequestMethod.GET)
	public Professor getProfessor(@PathVariable("id") int idProfessor) {
		
		System.out.println("ID Professor " + idProfessor);
		
		return listaProfessor.get(idProfessor);

	}
	
//	@RequestMapping(value="/professor/{id}", method= RequestMethod.DELETE)
//	public List<Professor> deleteProfessor(@PathVariable("id") int idProfessor) {
//		
//		
//		System.out.println("ID Professor " + idProfessor);
//		return listaProfessor;
//	}
}
