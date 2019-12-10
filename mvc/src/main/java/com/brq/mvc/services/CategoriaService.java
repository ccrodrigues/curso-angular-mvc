package com.brq.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brq.mvc.domain.Categoria;
import com.brq.mvc.domain.Nota;

@Service
public class CategoriaService {
	
	@Autowired
	private com.brq.mvc.repositories.CategoriaRepository repo;
	
	public List<Categoria> getALL(){
		return repo.findAll();
	}
	
	public Optional<Categoria> findById(int id){
		return repo.findById(id);
	}
	
	public List<Categoria> findByNomeContains(String nomeBusca) {
		
		return repo.findByNomeContains(nomeBusca);
	}
	
	public boolean deleteById(int id) {
		repo.deleteById(id);
		return true;
	}
	
	public Categoria save(Categoria obj) {
		
		return repo.save(obj);
	}
	
	public Categoria update(int id, Categoria obj) {
		Optional<Categoria> r = repo.findById(id);
		
		if (r.isPresent() == true) {
			r.get().setId(obj.getId());
			r.get().setNome(obj.getNome());
			return repo.save(r.get());
		}
		else {
			return null;
		}
	}

}
