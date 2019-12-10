package com.brq.mvc.resources;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.brq.mvc.domain.Categoria;
import com.brq.mvc.dto.CategoriaDTO;
import com.brq.mvc.services.CategoriaService;

@RestController
@RequestMapping(value="/categorias")
public class CategoriaController {
	
	@Autowired
	private CategoriaService service;
	
	@RequestMapping(value="", method=RequestMethod.GET)
	public ResponseEntity<List<CategoriaDTO> > getAll() {
		
		List<Categoria> lista = service.getALL();
		List<CategoriaDTO> listaDTO = lista
				.stream()
				.map(obj -> new CategoriaDTO(obj) )
				.collect(Collectors.toList());
		
		return ResponseEntity.ok().body( listaDTO );
	}
	
	@RequestMapping(value="{id}", method=RequestMethod.GET)
	public ResponseEntity<CategoriaDTO> findById(@PathVariable("id") int idCategoria) {
		Optional<Categoria> obj = service.findById(idCategoria);
		
		return ResponseEntity.ok().body( new CategoriaDTO(obj.get() ) );
	}
	
	@RequestMapping(value="/nome/{nomeBusca}", method=RequestMethod.GET)
	public ResponseEntity<List<CategoriaDTO>>
		findById(@PathVariable("nomeBusca") String nomeBusca) {
		
		List<Categoria> lista = service.findByNomeContains(nomeBusca);
		
		List<CategoriaDTO> listaDTO = lista
				.stream()
				.map(obj -> new CategoriaDTO( obj ) )
				.collect(Collectors.toList()); 
		
		return ResponseEntity.ok().body( listaDTO  );	
	}
//	
//	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
//	public ResponseEntity<Boolean> deleteById(@PathVariable("id") int id) {
//		return ResponseEntity.ok().body(service.deleteById(id));
//	}
//	
//	@RequestMapping(value="", method = RequestMethod.POST)
//	public ResponseEntity<Categoria> save(@RequestBody Categoria categoria){
//		return ResponseEntity.ok().body(service.save(categoria));
//	}
//	
//	@RequestMapping(value="/{id}", method = RequestMethod.PATCH)
//	public ResponseEntity<Categoria> update(@RequestBody Categoria categoria, @PathVariable("id") int id) {
//		return ResponseEntity.ok().body(service.update(id, categoria));
//	}
//	
//	@RequestMapping(value="/{id}", method = RequestMethod.PUT)
//	public ResponseEntity<Categoria> put(@RequestBody Categoria categoria, @PathVariable("id") int id) {
//		categoria.setId(id);
//		return ResponseEntity.ok().body(service.save(categoria));
//	}
}

