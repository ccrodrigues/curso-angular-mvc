package com.brq.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brq.mvc.domain.Aluno;
import com.brq.mvc.domain.Curso;
import com.brq.mvc.domain.Nota;
import com.brq.mvc.domain.Professor;
import com.brq.mvc.repositories.AlunoRepository;
import com.brq.mvc.repositories.CursoRepository;
import com.brq.mvc.repositories.NotaRepository;
import com.brq.mvc.repositories.ProfessorRepository;

@Service
public class AlunoService {
	
	@Autowired
	private AlunoRepository repo;
	
	@Autowired
	private ProfessorRepository repoProfessor;
	
	@Autowired
	private CursoRepository repoCurso;
	
	public List<Aluno> getAll() {
		List<Aluno> lista = repo.findAll();
		return lista;
	}
	
	public Optional<Aluno> findById(int id) {
		return repo.findById(id);
	}
	
	public boolean deleteById(int id) {
		repo.deleteById(id);
		return true;
	}
	
	
public Aluno save(Aluno aluno) {
	
	int idProf = aluno.getCurso().getProfessor().getIdprofessor();
	
	Optional<Professor> professor = repoProfessor.findById(idProf);
		
	Professor p;
	if (professor.isPresent() == false) {
		p = new Professor();
		//p.setIdprofessor(idProf);
		p.setNome(aluno.getCurso().getProfessor().getNome());
		repoProfessor.save(p);			
	}
	else {
		p = professor.get();
	}
	
	System.out.println(aluno);
	int idCurso = aluno.getCurso().getId();
	
	Optional<Curso> curso = repoCurso.findById(idCurso);
	
	if (curso.isPresent() == false) {
		Curso c = new Curso();
		c.setId(idCurso);
		c.setDescricao(aluno.getCurso().getDescricao());
		c.setProfessor(p);
		repoCurso.save(c);
	}
			
	return repo.save(aluno);
}
	
	public Aluno update(int id, Aluno aluno) {
		Optional<Aluno> r = repo.findById(id);
		
		if (r.isPresent() == true) {
			r.get().setIdade(aluno.getIdade());
			r.get().setNome(aluno.getNome());

			return repo.save(r.get());
		}
		else {
			return null;
		}
	}
	
	public Optional<Aluno> id(int id) {
		return repo.findById(id);
	}
}
