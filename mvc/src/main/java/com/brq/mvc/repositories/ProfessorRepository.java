package com.brq.mvc.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.brq.mvc.domain.Professor;

@Repository
public interface ProfessorRepository extends JpaRepository<Professor, Integer> {
	
}
