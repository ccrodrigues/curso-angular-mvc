package com.brq.mvc.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.brq.mvc.domain.Produto;
import com.brq.mvc.domain.Professor;
import com.brq.mvc.services.ProfessorService;

@RestController

public class ProfessorController {
	
	@Autowired
	private ProfessorService service;
	
	List <Professor> listaProfessor = new ArrayList<Professor> ();
	
	@RequestMapping(value="/professores", method= RequestMethod.GET)
	public List<Professor> getAllProfessores() {
		
		return service.getAllProfessores();
	}
	
	@RequestMapping(value="/professores", method= RequestMethod.POST)
	public Professor criarProfessor (@RequestBody Professor prof) {
/*		Professor p1 = new Professor();
		p1.setId(1);
		p1.setNome("Fabrizio"); */
		
		System.out.println(prof);
		
	//	listaProfessor.add(prof);
		return service.criarProfessor(prof);
		}
	
//	@RequestMapping(value="/professores/{id}", method= RequestMethod.GET)
//	public Professor getProfessor(@PathVariable("id") int idProfessor) {
//		
//		System.out.println("ID Professor " + idProfessor);
//		
//		return listaProfessor.get(idProfessor);
//
//	}
	
	@RequestMapping(value="/professores/{id}", method= RequestMethod.GET)
	public Professor buscaId(@PathVariable("id") int idProfessor) {
		
		System.out.println("ID Professor " + idProfessor);
		
		return service.id(idProfessor).get();

	}
	
	@RequestMapping(value="/professores/{id}", method = RequestMethod.PATCH)
	public Professor updateProfessor(@PathVariable("id") int idProfessor,
			@RequestBody Professor professor) {
		
		return service.updateProfessor(idProfessor, professor);
	}
	
	@RequestMapping(value="/professores/{id}", method= RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteProfessor(@PathVariable("id") int idProfessor) {
		
		
		System.out.println("ID Professor " + idProfessor);
		return ResponseEntity.ok().body(service.deleteById(idProfessor));
	}
}
