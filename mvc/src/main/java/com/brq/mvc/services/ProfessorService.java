package com.brq.mvc.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brq.mvc.domain.Professor;
import com.brq.mvc.repositories.ProfessorRepository;

@Service
public class ProfessorService {
	
	@Autowired
	private ProfessorRepository repo;
	
	public List<Professor> getAllProfessores(){
		
		List<Professor> listaProfessor = repo.findAll();
		
		return listaProfessor;
		
//		return repo.findAll();
	}
	
	public Professor criarProfessor(Professor professor){
		return repo.save(professor);
	}
}
