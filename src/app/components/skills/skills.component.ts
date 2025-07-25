import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface Projeto {
  id: number;
  titulo: string;
  categoria: 'Cursos' | 'Freelance' | 'Documentação' | 'Teste Técnico' | 'Projeto Pessoal';
  descricaoCurta: string;
  descricaoDetalhada: string;
  imagens: string[];
  codigoUrl?: string;
  siteUrl?: string;
}

@Component({
  selector: 'app-projetos',
  imports: [NgForOf, NgIf, NgClass],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  projetos: Projeto[] = [
    {
      id: 1,
      titulo: 'Efood',
      categoria: 'Cursos',
      descricaoCurta: 'Projeto desenvolvido com React e integração com API, para simular pedidos em restaurantes',
      descricaoDetalhada: 'Desenvolvido para conclusão do modulo de FrontEnd do curso de Desenvolvedor FullStack Java da EBAC. O modelo foi disponibilizado via Figma e deveriamos desenvolver todo o site, bem como as funcionalidades de carrinho, autenticação de compra e finalização da venda, utilizando a API fornecida pela instituição.',
      imagens: [
        'assets/efood1.PNG',
        'assets/efood2.PNG',
        'assets/efood3.PNG',
        'assets/efood4.PNG',
        'assets/efood5.PNG',
        'assets/efood6.PNG',
        'assets/efood7.PNG',
      ],
      codigoUrl: 'https://github.com/naymaisa/ProjetoEbacFinalEfood',
      siteUrl: 'https://projeto-ebac-final-efood.vercel.app/'
    },
    {
      id: 2,
      titulo: 'Alimente o Monstrinho',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de alfabetização infantil, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/monstrinho1.PNG',
        'assets/monstrinho2.PNG',
        'assets/monstrinho3.PNG',
        'assets/monstrinho4.PNG',
      ],
      siteUrl: 'https://jogo-teste-mostrinho.vercel.app/'
    },
    {
      id: 3,
      titulo: 'Xilofone',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo musical de xilofone infantil, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/xilofone1.PNG',
        'assets/xilofone2.PNG',
      ],
      siteUrl: 'https://xilofane-teste.vercel.app/'
    },
    {
      id: 23,
      titulo: 'Tela de Cadastro/Login com integração ao banco de dados',
      categoria: 'Documentação',
      descricaoCurta: 'Autentificação criada com Angular e integrada ao MongoDB, usando Java',
      descricaoDetalhada: 'Tela de Cadastro/Login criada em Angular, com BackEnd desenvolvido em Java, integrando ao bando dde dados não relacional, MongoDB. Realizado para documentação de aprendizado em video no Youtube ',
      imagens: [
        'assets/cadastro.jpeg',
        'assets/cadastro2.PNG',
        'assets/cadastro3.PNG',
        'assets/cadastro4.PNG',
        'assets/cadastro5.PNG',

      ],
      codigoUrl: 'https://github.com/naymaisa/BackEndTelaLoginECadastro',
      siteUrl: 'https://www.youtube.com/watch?v=p3loMAoyd7c'
    },
    {
      id: 24,
      titulo: 'Tela de Cadastro/Login',
      categoria: 'Documentação',
      descricaoCurta: 'Autentificação criada com Angular',
      descricaoDetalhada: 'Tela de Cadastro/Login criada em Angular. Realizado para documentação de aprendizado em video no Youtube ',
      imagens: [
        'assets/login.jpeg',
        'assets/login.PNG',
        'assets/login2.PNG',
        'assets/login3.PNG',
        'assets/login4.PNG',

      ],
      codigoUrl: 'https://github.com/naymaisa/TelaLoginCadastro',
      siteUrl: 'https://www.youtube.com/watch?v=JoxuR6crOhM&t=2s'
    },
    {
      id: 4,
      titulo: 'Akihabara Store',
      categoria: 'Projeto Pessoal',
      descricaoCurta: 'Ecommerce ficticio. Design e desenvolvimento realizado por mim',
      descricaoDetalhada: 'Ecommerce desenvolvido para estudo de funcionalidades e design. Foi desenvolvido utilizando React e imagens disponibilizadas na insternet.',
      imagens: [
        'assets/akihabara1.PNG',
        'assets/akihabara2.PNG',
        'assets/akihabara3.PNG',
        'assets/akihabara4.PNG',


      ],
      codigoUrl: 'https://github.com/naymaisa/ProjetoAkihabaraStore',
      siteUrl: 'https://projeto-akihabara-store.vercel.app/#'
    },
    {
      id: 19,
      titulo: 'Consumindo API com Java',
      categoria: 'Documentação',
      descricaoCurta: 'VIdeo consumindo API do Rick and Morty usando Java',
      descricaoDetalhada: 'Video gravado para o Youtube, para documentação do meu estudo em programação',
      imagens: [
        'assets/rick.png',
        'assets/rick2.PNG',
        'assets/rick3.PNG',



      ],
      codigoUrl: 'https://github.com/naymaisa/ApiRickAndMorty',
      siteUrl: 'https://www.youtube.com/watch?v=1L85ti2Cce4&t=177s'
    },
    {
      id: 20,
      titulo: 'To-Do List integrada com banco de dados',
      categoria: 'Teste Técnico',
      descricaoCurta: 'To-Do list desenvolvida em VueJs e NodeJs, integrada ao MongoDB ',
      descricaoDetalhada: 'Lista de tarefas construida para realização de teste técnico. FrontEnd desenvolvido em VueJs e BackEnd em NodeJs, integrado ao banco de dados não relacional MongoDB',
      imagens: [
        'assets/todo1.1.png',




      ],
      codigoUrl: 'https://github.com/naymaisa/ToDoList',

    },
    {
      id: 5,
      titulo: 'Encaixe Musical',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de encaixe e educação musical, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/encaixe.PNG',
        'assets/encaixe1.PNG',
        'assets/encaixe2.PNG',

      ],
      siteUrl: 'https://encaixemusicalfinalizado1.vercel.app/#/'
    },
    {
      id: 6,
      titulo: 'Tocando Bateria',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo musical de bateria infantil, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/bateria.PNG',
        'assets/bateria2.PNG',

      ],
      siteUrl: 'https://tocando-bateria-7uns.vercel.app/#/'
    },
    {
      id: 21,
      titulo: 'To-Do List integrada com banco de dados',
      categoria: 'Documentação',
      descricaoCurta: 'To-Do list desenvolvida em Angular e Java, integrada ao MongoDB ',
      descricaoDetalhada: 'Lista de tarefas construida documentação no Youtube. FrontEnd desenvolvido em Angular e BackEnd em Java, integrado ao banco de dados não relacional MongoDB',
      imagens: [
        'assets/todo.png',
        'assets/todo2.png',
        'assets/todo3.png',
        'assets/todo4.png',
        'assets/todo5.png',




      ],
      codigoUrl: 'https://github.com/naymaisa/ApiToDoBancoJava',
      siteUrl: 'https://www.youtube.com/watch?v=bEVJWhD9cuU&t=1166s'

    },
    {
      id: 7,
      titulo: 'Piano Kids',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo musical de piano infantil, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/piano.PNG',
        'assets/piano2.PNG',
        'assets/piano3.PNG',
        'assets/piano4.PNG',


      ],
      siteUrl: 'https://piano-kids.vercel.app/#/'
    },
    {
      id: 8,
      titulo: 'Colorindo as Letras',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de colorir letras, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/letras.PNG',
        'assets/letras2.PNG',
        'assets/letras3.PNG',
        'assets/letras4.PNG',
        'assets/letras5.PNG',
        'assets/letras6.PNG',


      ],
      siteUrl: 'https://colorir-letras1-2-1zvm.vercel.app/#/'
    },
    {
      id: 9,
      titulo: 'Tocando o Saxofone',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo musical de saxofone infantil, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/sax.PNG',
        'assets/sax2.PNG',


      ],
      siteUrl: 'https://sax-teste.vercel.app/'
    },
    {
      id: 10,
      titulo: 'Tocando a Guitarra',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo musical de guitarra infantil, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/guitarra.PNG',
        'assets/guitarra2.PNG',


      ],
      siteUrl: 'https://guitarra-teste.vercel.app/'
    },
    {
      id: 11,
      titulo: 'Colorindo o Espaço',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de colorir o espaço, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/espaco.PNG',
        'assets/espaco2.PNG',
        'assets/espaco3.PNG',
        'assets/espaco4.PNG',


      ],
      siteUrl: 'https://colorindo-espaco-final.vercel.app/#/'
    },
    {
      id: 12,
      titulo: 'Colorindo Monstros',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de colorir monstros, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/monstros.PNG',
        'assets/monstros2.PNG',
        'assets/monstros3.PNG',
        'assets/monstro4.PNG',


      ],
      siteUrl: 'https://mosntrinho-colorir.vercel.app/#/'
    },
    {
      id: 13,
      titulo: 'Colorindo Cidades',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de colorir cidades, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/cidades.PNG',
        'assets/cidades2.PNG',
        'assets/cidades3.PNG',


      ],
      siteUrl: 'https://cidades-eight.vercel.app/#/'
    },
    {
      id: 14,
      titulo: 'Colorindo Dinossauros',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de colorir dinossauros, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/dino.PNG',
        'assets/dino2.PNG',
        'assets/dino3.PNG',
        'assets/dino4.PNG',


      ],
      siteUrl: 'https://dinossauro.vercel.app/#/'
    },
    {
      id: 15,
      titulo: 'Colorindo Carros',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de colorir carros, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/carros.PNG',
        'assets/carros2.PNG',
        'assets/carros3.PNG',
        'assets/carros4.PNG',



      ],
      siteUrl: 'https://carros-woad.vercel.app/#/'
    },
    {
      id: 16,
      titulo: 'Colorindo Animais',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de colorir animais, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/animais.PNG',
        'assets/animais2.PNG',
        'assets/animais3.PNG',
        'assets/animais4.PNG',


      ],
      siteUrl: 'https://animais-phi.vercel.app/#/'
    },
    {
      id: 17,
      titulo: 'Colorindo Super-Heróis',
      categoria: 'Freelance',
      descricaoCurta: 'Jogo de colorir super-heróis, desenvolvido para cliente',
      descricaoDetalhada: 'Jogo desenvolvido em VueJs de acordo com modelo fornecido pelo cliente em Figma. Funcionalidades e design fornecido pelo cliente, código e implementação desenvolvido pro mim ',
      imagens: [
        'assets/herois.PNG',
        'assets/herois2.PNG',
        'assets/herois3.PNG',
        'assets/herois4.PNG',


      ],
      siteUrl: 'https://dinossauro-ydeo.vercel.app/#/'
    },
    {
      id: 18,
      titulo: 'Livraria Infinito',
      categoria: 'Cursos',
      descricaoCurta: 'Landing Page de uma livraria ficticia',
      descricaoDetalhada: 'Landing Page desenvolvida para o curso da EBAC. Design e desenvolvimento realizado por mim',
      imagens: [
        'assets/livraria.PNG',
        'assets/livraria2.PNG',
        'assets/livraria3.PNG',
        'assets/livraria4.PNG',


      ],
      codigoUrl: 'https://github.com/naymaisa/livrariaBs',
      siteUrl: 'https://livraria-bs.vercel.app/'
    },
  ];
  projetosFiltrados: Projeto[] = this.projetos;
  categoriaSelecionada: string = 'todos';


  modalAberto = false;
  projetoSelecionado: Projeto | null = null;
  imagemAtualIndex = 0;

  abrirModal(projeto: Projeto) {
    this.projetoSelecionado = projeto;
    this.imagemAtualIndex = 0;
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
  }

  prevImagem() {
    if (!this.projetoSelecionado) return;
    this.imagemAtualIndex = (this.imagemAtualIndex - 1 + this.projetoSelecionado.imagens.length) % this.projetoSelecionado.imagens.length;
  }

  nextImagem() {
    if (!this.projetoSelecionado) return;
    this.imagemAtualIndex = (this.imagemAtualIndex + 1) % this.projetoSelecionado.imagens.length;
  }

  dropdownAberto = false;

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }

  fecharDropdown() {
    setTimeout(() => this.dropdownAberto = false, 200); // atraso para permitir clique
  }

  filtrarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
    this.dropdownAberto = false;

    if (categoria === 'todos') {
      this.projetosFiltrados = this.projetos;
    } else {
      this.projetosFiltrados = this.projetos.filter(
        (projeto) => projeto.categoria === categoria
      );
    }
  }

}
