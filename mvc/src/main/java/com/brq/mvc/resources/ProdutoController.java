package com.brq.mvc.resources;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.brq.mvc.domain.Nota;
import com.brq.mvc.domain.Produto;
import com.brq.mvc.resources.exception.NotaNotFoundException;
import com.brq.mvc.resources.exception.ObjectNotFoundException;
import com.brq.mvc.resources.exception.ProdutoNotFoundException;
import com.brq.mvc.services.NotaService;
import com.brq.mvc.services.ProdutoService;

@RestController
@RequestMapping(value="/produtos")
public class ProdutoController {
	
	@Autowired
	private ProdutoService service;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity< List<Produto> > getAll() {
		return ResponseEntity.ok().body(service.getAll());
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<Optional<Produto> > findById(@PathVariable("id") int id) {
		Optional<Produto> obj = service.findById(id);
			
		if (obj.isPresent() == false) {
			throw new ObjectNotFoundException(id, new Produto());
		}
		
		return ResponseEntity.ok().body(obj);
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Boolean> deleteById(@PathVariable("id") int id) {
		return ResponseEntity.ok().body(service.deleteById(id));
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ResponseEntity<Produto> save(@RequestBody @Valid Produto obj){
		return ResponseEntity.ok().body(service.save(obj));
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Produto> update(@RequestBody Produto Produto, @PathVariable("id") int id) {
		return ResponseEntity.ok().body(service.update(id, Produto));
	}
	
	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Produto> put(@RequestBody Produto Produto, @PathVariable("id") int id) {
		Produto.setId(id);
		return ResponseEntity.ok().body(service.save(Produto));
	}
}
