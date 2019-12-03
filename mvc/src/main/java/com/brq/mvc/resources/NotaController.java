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

import com.brq.mvc.domain.Nota;
import com.brq.mvc.resources.exception.NotaNotFoundException;
import com.brq.mvc.services.NotaService;

@RestController
@RequestMapping(value="/notas")
public class NotaController {
	
	@Autowired
	private NotaService service;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity< List<Nota> > getAll() {
		return ResponseEntity.ok().body(service.getAll());
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity< Optional<Nota> > findById(@PathVariable("id") int idNota) {
		Optional<Nota> obj = service.findById(idNota);
			
		if (obj.isPresent() == false) {
			throw new NotaNotFoundException(idNota);
		}
		
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@PathVariable("id") int id) {
		return ResponseEntity.ok().body(service.deleteById(id));
	}
	
	@RequestMapping(value="", method = RequestMethod.POST)
	public ResponseEntity<Nota> save(@RequestBody Nota nota){
		return ResponseEntity.ok().body(service.save(nota));
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Nota> update(@RequestBody Nota nota, @PathVariable("id") int id) {
		return ResponseEntity.ok().body(service.update(id, nota));
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Nota> put(@RequestBody Nota nota, @PathVariable("id") int id) {
		nota.setId(id);
		return ResponseEntity.ok().body(service.save(nota));
	}
}
