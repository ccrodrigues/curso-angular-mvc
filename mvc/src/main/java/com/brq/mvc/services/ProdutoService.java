package com.brq.mvc.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brq.mvc.domain.Produto;
import com.brq.mvc.repositories.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository repo;
	
	public List<Produto> getAll() {
		List<Produto> lista = repo.findAll();
		return lista;
	}
	
	public Optional<Produto> findById(int id) {
		return repo.findById(id);
	}
	
	public boolean deleteById(int id) {
		repo.deleteById(id);
		return true;
	}
	
	public Produto save(Produto Produto) {
		return repo.save(Produto);
	}
	
	public Produto update(int id, Produto Produto) {
		Optional<Produto> r = repo.findById(id);
		
		if (r.isPresent() == true) {
			r.get().setNome(Produto.getNome());
			r.get().setValor(Produto.getValor());
			return repo.save(r.get());
		}
		else {
			return null;
		}
	}
}
