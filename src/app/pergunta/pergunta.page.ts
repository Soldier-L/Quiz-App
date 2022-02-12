import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pergunta',
  templateUrl: './pergunta.page.html',
  styleUrls: ['./pergunta.page.scss'],
})
export class PerguntaPage implements OnInit {
  id: number;
  pergunta: string;
  resposta: string;
  opcao1: string;
  opcao2: string;
  opcao3: string;
  opcao4: string;
  opcao5: string;
  questoes: any;
  numero: number = 0;
  respostaescolhida: string;
  certo: any=0;
  errado: any=0;

  constructor(public navCtrl: NavController) { }

  //quando eu volto na tela ele executa
  ionViewWillEnter(){
    this.inicio();
  }

  inicio(){
    this.errado = 0;
    this.certo = 0;
    this.numero= 0;
    this.carregarperguntas();
  }

    //Iniciar o aplicativo
  ngOnInit() {
    this.numero=0;
    this.criacaoquestoes();
    this.carregarperguntas();
  }

  //Cria as perguntas
  criacaoquestoes(){
    //As 5 perguntas
    this.questoes = [
     {id:1, 
      pergunta:"Quem é o compositor da música: Garota de Ipanema",
      resposta:"2",
      op1:"João Gilberto",
      op2:"Tom Jobim",
      op3:"Roberto Carlos",
      op4:"Yamandu Costa",
      op5:"Restart"
     },
     {id:2, 
      pergunta:"Qual a maior música (duração) da legião Urbana?",
      resposta:"4",
      op1:"Clarisse",
      op2:"Quatro estações",
      op3:"Índios",
      op4:"Metal Contra as Nuvens",
      op5:"Faroeste Cabloco"
     },
     {id:3, 
      pergunta:"Quem é o protagonista principal do filme: De Volta Para o Futuro",
      resposta:"1",
      op1:"Marty McFly",
      op2:"Emmett Brown",
      op3:"Biff",
      op4:"George McFly",
      op5:"Einstein"
     },
     {id:4, 
      pergunta:"De qual banda é a música: Californication",
      resposta:"5",
      op1:"Green Day",
      op2:"Coldplay",
      op3:"Oasis",
      op4:"Nirvana",
      op5:"Red Hot Chilli Peapers"
     },
     {id:5, 
      pergunta:"O que está escrito na bandeira do Brasil?",
      resposta:"3",
      op1:"Desordem e Progresso",
      op2:"Ordem e Bagunça",
      op3:"Ordem e Progresso",
      op4:"Make american great again",
      op5:"O Bagulho é doido mesmo"
     },
     {id:6, 
      pergunta:"O que acontece no final de GTA SA?",
      resposta:"3",
      op1:"CJ continua sem nada",
      op2:"Policiais dominam tudo",
      op3:"CJ acaba com o Oficial Tempeny",
      op4:"Big Smoke come todos",
      op5:"Os Ballas dominam a Groove Street"
     },
     {id:7, 
      pergunta:"Em que país se passa o game Resident Evil 4?",
      resposta:"4",
      op1:"Alemanha",
      op2:"Nova Zelândia",
      op3:"Brasil",
      op4:"Espanha",
      op5:"Catar"
     },
     {id:8, 
      pergunta:"Qual é o protagonista da franquia Halo?",
      resposta:"2",
      op1:"Kratos",
      op2:"Master Cheif",
      op3:"Ezio",
      op4:"Link",
      op5:"Leon"
     },
     {id:9, 
      pergunta:"Quantos modelos o PS3 teve?",
      resposta:"3",
      op1:"1",
      op2:"2",
      op3:"3",
      op4:"4",
      op5:"5"
     },
     {id:10, 
      pergunta:"Minecraft é campeão em vendas em:",
      resposta:"2",
      op1:"Xbox One",
      op2:"Playstation 4",
      op3:"Nintendo",
      op4:"Playstation 2",
      op5:"Wii U"
     }
    ]
  }

  //Carregar pergunta no layout
carregarperguntas(){
  this.pergunta = this.questoes[this.numero].pergunta;
  this.resposta = this.questoes[this.numero].resposta;
  this.opcao1 = this.questoes[this.numero].op1;
  this.opcao2 = this.questoes[this.numero].op2;
  this.opcao3 = this.questoes[this.numero].op3;
  this.opcao4 = this.questoes[this.numero].op4;
  this.opcao5 = this.questoes[this.numero].op5;
}

//Pegar a resposta do usuário
pegarResposta(valor){
  this.respostaescolhida = valor;
}

 //Verificar se a resposta está correta
 //ir para a próxima pergunta
proximo(){
  //Somando acertos e erros
  if(this.respostaescolhida == this.resposta){
    this.certo++;
  }else{
    this.errado++;
  }

  //Chamando pagina de resultado se as perguntas chegar até o final
  if(this.numero >=9){
    this.navCtrl.navigateForward("resultado");
    localStorage.setItem('Certo', this.certo);
    localStorage.setItem('Errado', this.errado);
  }else{
    this.numero++;
    this.carregarperguntas();
  }

}

}
