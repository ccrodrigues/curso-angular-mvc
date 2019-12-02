package com.brq.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brq.mvc.domain.Nota;
import com.brq.mvc.repositories.NotaRepository;

@Service
public class NotaService {
	
	@Autowired
	private NotaRepository repo;
	
	public List<Nota> getAll() {
		List<Nota> lista = repo.findAll();
		return lista;
	}
	
	public Optional<Nota> findById(int id) {
		return repo.findById(id);
	}
	
	public boolean deleteById(int id) {
		repo.deleteById(id);
		return true;
	}
	
	public Nota save(Nota nota) {
		return repo.save(nota);
	}
	
	public Nota update(int id, Nota nota) {
		Optional<Nota> r = repo.findById(id);
		
		if (r.isPresent() == true) {
			r.get().setNome(nota.getNome());
			r.get().setValor(nota.getValor());
			return repo.save(r.get());
		}
		else {
			return null;
		}
	}
}
