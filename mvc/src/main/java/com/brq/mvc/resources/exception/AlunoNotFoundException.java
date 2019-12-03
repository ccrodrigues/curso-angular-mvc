package com.brq.mvc.resources.exception;

public class AlunoNotFoundException extends RuntimeException {
	
	public AlunoNotFoundException(int id) {
		super ("O Aluno com id " + id + " não foi localizado");
	}
	
}