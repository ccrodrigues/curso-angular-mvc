package com.brq.mvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brq.mvc.domain.Curso;

@Repository
public interface CursoRepository extends JpaRepository<Curso, Integer> {
	
}
