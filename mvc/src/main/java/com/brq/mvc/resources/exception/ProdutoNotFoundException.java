package com.brq.mvc.resources.exception;

public class ProdutoNotFoundException extends RuntimeException {
	
	public ProdutoNotFoundException(int id) {
		super ("O Produto com id " + id + " não foi localizada");
	}
	
}
