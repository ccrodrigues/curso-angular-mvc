package com.brq.mvc.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.brq.mvc.domain.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
	
	//SELECT * FROM CATEGORIA WHERE nome = ''
	List<Categoria>  findByNome(String nome);
	
	//SELECT * FROM CATEGORIA WHERE nome  ''
	List<Categoria>  findByNomeLike(String nome);
	
	//select * from categoria where nome like '%nome%' and id = idCat
	List<Categoria>  findByNomeContains(String nome);
	
	@Query("SELECT c FROM Categoria c where c.id = :idCat")
	List<Categoria>  luan(@Param("idCat") int idCat);
	
}