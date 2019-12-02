package com.brq.mvc;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.brq.mvc.domain.Aluno;
import com.brq.mvc.domain.Categoria;
import com.brq.mvc.domain.Curso;
import com.brq.mvc.domain.Nota;
import com.brq.mvc.domain.Produto;
import com.brq.mvc.domain.Professor;
import com.brq.mvc.repositories.AlunoRepository;
import com.brq.mvc.repositories.CategoriaRepository;
import com.brq.mvc.repositories.CursoRepository;
import com.brq.mvc.repositories.NotaRepository;
import com.brq.mvc.repositories.ProdutoRepository;
import com.brq.mvc.repositories.ProfessorRepository;

@SpringBootApplication
public class MvcApplication implements CommandLineRunner {
	
	@Autowired
	private NotaRepository notaRepository;
	
	@Autowired
	private CursoRepository cursoRepository;
	
	@Autowired
	private ProfessorRepository professorRepository;
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(MvcApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
	//	notaRepository.save(new Nota(0, 1, "Nota "));
		
		Professor p1 = new Professor();
		p1.setNome("Prof 1");
		
		Curso c1 = new Curso();
		c1.setDescricao("Curso 1");
		c1.setProfessor(p1);
		
		Aluno a1 = new Aluno();
		a1.setIdade(20);
		a1.setNome("Caio");
		a1.setCurso(c1);
		professorRepository.save(p1);
		cursoRepository.save(c1);
		alunoRepository.save(a1);
		
		Categoria cat1 = new Categoria();
		cat1.setNome("CAT 1");
		
		Categoria cat2 = new Categoria();
		cat2.setNome("CAT 2");
	
		Produto prod1 = new Produto ();
		prod1.setNome("PROD 1");
		
		Produto prod2 = new Produto ();
		prod2.setNome("PROD 2");
		
		Produto prod3 = new Produto ();
		prod3.setNome("PROD 3");
		
		prod1.setCategorias(Arrays.asList(cat1));
		prod2.setCategorias(Arrays.asList(cat1, cat2));
		prod3.setCategorias(Arrays.asList(cat2));
		
		cat1.setProdutos(Arrays.asList(prod1, prod2));
		cat2.setProdutos(Arrays.asList(prod2, prod3));
		
		categoriaRepository.saveAll(Arrays.asList(cat1, cat2));
		produtoRepository.saveAll(Arrays.asList(prod1, prod2, prod3));
	}

}
