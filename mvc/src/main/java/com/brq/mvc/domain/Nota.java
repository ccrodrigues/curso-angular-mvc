package com.brq.mvc.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Nota {
	
	//cria a tabela
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private int valor;
	private String nome;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getValor() {
		return valor;
	}
	public void setValor(int valor) {
		this.valor = valor;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public Nota(int id, int valor, String nome) {
		super();
		this.id = id;
		this.valor = valor;
		this.nome = nome;
	}
	
	public Nota() {}
}
