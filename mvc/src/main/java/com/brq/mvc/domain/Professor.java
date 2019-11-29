package com.brq.mvc.domain;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Professor implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idprofessor;
	private String none;
	
	public Professor() { }
	
	public Professor(int idprofessor, String none) {
		super();
		this.idprofessor = idprofessor;
		this.none = none;
	}
	public int getIdprofessor() {
		return idprofessor;
	}
	public void setIdprofessor(int idprofessor) {
		this.idprofessor = idprofessor;
	}
	public String getNone() {
		return none;
	}
	public void setNone(String nome) {
		this.none = nome;
	}
	
	@Override
	public String toString() {
		return "Professor [id=" + idprofessor + ", nome=" + none + "]";
	}
	
}
