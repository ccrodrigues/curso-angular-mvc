package com.brq.mvc.resources.exception;

public class ObjectNotFoundException extends RuntimeException {
	
	private static final long serialVersionUID = 1L;
	
	public ObjectNotFoundException(int id, Object obj) {
		super ("O " + obj.getClass().getSimpleName() + 
				" com id " + id + " não foi localizado");
	}
	
}
