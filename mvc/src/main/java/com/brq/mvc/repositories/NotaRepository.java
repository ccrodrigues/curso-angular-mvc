package com.brq.mvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brq.mvc.domain.Nota;

public interface NotaRepository extends JpaRepository<Nota, Integer> {
	
}
