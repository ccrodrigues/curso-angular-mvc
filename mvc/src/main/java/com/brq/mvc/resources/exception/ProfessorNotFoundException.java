package com.brq.mvc.resources.exception;

public class ProfessorNotFoundException extends RuntimeException {
	
	public ProfessorNotFoundException(int id) {
		super ("O professor com id " + id + " não foi localizado");
	}
	
}