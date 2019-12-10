package com.brq.mvc.services;

import java.util.List;
import java.util.Optional;

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
	
	public Optional<Professor> id(int id) {
		return repo.findById(id);
	}

	public Professor updateProfessor(int id,Professor professor) {
		Optional<Professor> p = repo.findById(id);
		Professor ret ;
		if (p.isPresent()) {
			p.get().setNome(professor.getNome());
			ret = repo.save(p.get());
		}
		else {
			ret = p.get();
		}
		
		return ret;
	}

	public boolean deleteById(int id) {
		repo.deleteById(id);
		return true;
	}
}
