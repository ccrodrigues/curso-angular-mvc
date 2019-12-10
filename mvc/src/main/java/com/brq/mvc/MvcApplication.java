package com.brq.mvc;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
		
		this.notaDemo();		
		this.cursoProfessorDemo();		
		this.categoriaProdutoDemo();
//		this.funcaoLambda();
		
	} // fim do método run
	
	private void funcaoLambda() {
		
		List<Integer> listaAlunos = new ArrayList<Integer>();
		List<Integer> listaAlunosDobro = new ArrayList<Integer>();
		
		for (int i = 1; i <= 9; i++) {
			listaAlunos.add(i);
		}
/*			listaAlunosDobro.add(2*i);
		}
		
		// 1º ->
		// listaAlunos.stream().map( n -> 2*n )
							.forEach( p -> System.out.println(p) ); */
		
		listaAlunosDobro = listaAlunos
				.stream()
				.filter(i -> i > 2)
				.map( n -> 2*n )
				.collect(Collectors.toList());
		
		System.out.println(listaAlunos);
		System.out.println(listaAlunosDobro);
//		
		// List<Integer> listaNumeros = Arrays.asList(1,2,3,4,5,6,7,8,9);
	}
	
	private void notaDemo() {
		notaRepository.save(new Nota(0, 1, "NOTA 1: "));
	}
	
	private void cursoProfessorDemo() {
		Professor p1 = new Professor();
		p1.setNome("Prof 1");
//		p1.setIdprofessor(1);
		Professor p2 = new Professor();
		p2.setNome("Prof 2");
//		p2.setIdprofessor(2);
		
		Curso c1 = new Curso();
		c1.setDescricao("Curso 1");
		c1.setProfessor(p1);
		Curso c2 = new Curso();
		c2.setDescricao("Curso 2");
		
		professorRepository.save(p1);
		professorRepository.save(p2);
		cursoRepository.save(c1);
		cursoRepository.save(c2);
		
		Aluno a1 = new Aluno();
		a1.setIdade(20);
		a1.setNome("Caio");
		a1.setCurso(c1);
		Aluno a2 = new Aluno();
		a2.setIdade(26);
		a2.setNome("Luan");
		a2.setCurso(c2);
		
		alunoRepository.save(a1);
		alunoRepository.save(a2);
	}
	
	private void categoriaProdutoDemo() {
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
