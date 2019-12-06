package com.brq.mvc.resources;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.brq.mvc.domain.Aluno;
import com.brq.mvc.domain.Professor;
import com.brq.mvc.resources.exception.AlunoNotFoundException;
import com.brq.mvc.services.AlunoService;

@RestController
@RequestMapping(value="/alunos")
public class AlunoController {
	
	@Autowired
	private AlunoService service;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity< List<Aluno> > getAll() {
		return ResponseEntity.ok().body(service.getAll());
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity< Optional<Aluno> > findById(@PathVariable("id") int idAluno) {
		Optional<Aluno> obj = service.findById(idAluno);
			
		if (obj.isPresent() == false) {
			throw new AlunoNotFoundException(idAluno);
		}
		
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value="/alunos/{id}", method= RequestMethod.GET)
	public Aluno buscaId(@PathVariable("id") int idAluno) {
		
		System.out.println("ID Aluno " + idAluno);
		
		return service.id(idAluno).get();

	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@PathVariable("id") int id) {
		return ResponseEntity.ok().body(service.deleteById(id));
	}
	
	@RequestMapping(value="", method = RequestMethod.POST)
	public ResponseEntity<Aluno> save(@RequestBody Aluno aluno){
		return ResponseEntity.ok().body(service.save(aluno));
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Aluno> update(@RequestBody Aluno aluno, @PathVariable("id") int id) {
		return ResponseEntity.ok().body(service.update(id, aluno));
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Aluno> put(@RequestBody Aluno aluno, @PathVariable("id") int id) {
		aluno.setId(id);
		return ResponseEntity.ok().body(service.save(aluno));
	}
}
