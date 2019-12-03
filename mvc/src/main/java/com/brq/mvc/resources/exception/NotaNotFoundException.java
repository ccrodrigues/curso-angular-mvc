package com.brq.mvc.resources.exception;

public class NotaNotFoundException extends RuntimeException {
	
	public NotaNotFoundException(int id) {
		super ("A Nota com id " + id + " não foi localizada");
	}
	
}
