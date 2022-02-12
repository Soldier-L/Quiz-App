(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pergunta-pergunta-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pergunta/pergunta.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pergunta/pergunta.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Pergunta {{numero + 1}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"primary\">\n  <div id=\"container\">\n    <div id=\"perguntas\">\n      {{pergunta}}\n    </div>\n  \n  <div id=\"respostas\">\n    <ion-list>\n    <ion-radio-group>\n      <ion-item lines=\"full\" (click)=\"pegarResposta(1)\">\n      <ion-label>{{opcao1}}</ion-label>\n      <ion-radio slot=\"end\" value=\"op1\" color=\"danger\"></ion-radio>\n    </ion-item>\n      <ion-item lines=\"full\" (click)=\"pegarResposta(2)\">\n      <ion-label>{{opcao2}}</ion-label>\n      <ion-radio slot=\"end\" value=\"op2\" color=\"danger\"></ion-radio>\n    </ion-item>\n      <ion-item lines=\"full\" (click)=\"pegarResposta(3)\">\n      <ion-label>{{opcao3}}</ion-label>\n      <ion-radio slot=\"end\" value=\"op3\" color=\"danger\"></ion-radio>\n    </ion-item>\n      <ion-item lines=\"full\" (click)=\"pegarResposta(4)\">\n      <ion-label>{{opcao4}}</ion-label>\n      <ion-radio slot=\"end\" value=\"op4\" color=\"danger\"></ion-radio>\n    </ion-item>\n      <ion-item lines=\"full\" (click)=\"pegarResposta(5)\">\n      <ion-label>{{opcao5}}</ion-label>\n      <ion-radio slot=\"end\" value=\"op5\" color=\"danger\"></ion-radio>\n    </ion-item>\n  </ion-radio-group>\n  </ion-list>\n  </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-row>\n    <ion-col>\n      <ion-button expand=\"block\" color=\"dark\" (click)=\"inicio()\">Início</ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button expand=\"block\" color=\"dark\" (click)=\"proximo()\">Próximo</ion-button> \n    </ion-col>\n  </ion-row>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pergunta/pergunta-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pergunta/pergunta-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PerguntaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerguntaPageRoutingModule", function() { return PerguntaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pergunta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pergunta.page */ "./src/app/pergunta/pergunta.page.ts");




const routes = [
    {
        path: '',
        component: _pergunta_page__WEBPACK_IMPORTED_MODULE_3__["PerguntaPage"]
    }
];
let PerguntaPageRoutingModule = class PerguntaPageRoutingModule {
};
PerguntaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PerguntaPageRoutingModule);



/***/ }),

/***/ "./src/app/pergunta/pergunta.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pergunta/pergunta.module.ts ***!
  \*********************************************/
/*! exports provided: PerguntaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerguntaPageModule", function() { return PerguntaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pergunta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pergunta-routing.module */ "./src/app/pergunta/pergunta-routing.module.ts");
/* harmony import */ var _pergunta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pergunta.page */ "./src/app/pergunta/pergunta.page.ts");







let PerguntaPageModule = class PerguntaPageModule {
};
PerguntaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pergunta_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerguntaPageRoutingModule"]
        ],
        declarations: [_pergunta_page__WEBPACK_IMPORTED_MODULE_6__["PerguntaPage"]]
    })
], PerguntaPageModule);



/***/ }),

/***/ "./src/app/pergunta/pergunta.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pergunta/pergunta.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n}\n\n#perguntas {\n  text-align: center;\n  font-size: 15pt;\n  font-weight: bold;\n  height: 100px;\n}\n\nion-label {\n  font-size: 16px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyZ3VudGEvcGVyZ3VudGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvcGVyZ3VudGEvcGVyZ3VudGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jcGVyZ3VudGFze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pergunta/pergunta.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pergunta/pergunta.page.ts ***!
  \*******************************************/
/*! exports provided: PerguntaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerguntaPage", function() { return PerguntaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let PerguntaPage = class PerguntaPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.numero = 0;
        this.certo = 0;
        this.errado = 0;
    }
    //quando eu volto na tela ele executa
    ionViewWillEnter() {
        this.inicio();
    }
    inicio() {
        this.errado = 0;
        this.certo = 0;
        this.numero = 0;
        this.carregarperguntas();
    }
    //Iniciar o aplicativo
    ngOnInit() {
        this.numero = 0;
        this.criacaoquestoes();
        this.carregarperguntas();
    }
    //Cria as perguntas
    criacaoquestoes() {
        //As 5 perguntas
        this.questoes = [
            { id: 1,
                pergunta: "Quem é o compositor da música: Garota de Ipanema",
                resposta: "2",
                op1: "João Gilberto",
                op2: "Tom Jobim",
                op3: "Roberto Carlos",
                op4: "Yamandu Costa",
                op5: "Restart"
            },
            { id: 2,
                pergunta: "Qual a maior música (duração) da legião Urbana?",
                resposta: "4",
                op1: "Clarisse",
                op2: "Quatro estações",
                op3: "Índios",
                op4: "Metal Contra as Nuvens",
                op5: "Faroeste Cabloco"
            },
            { id: 3,
                pergunta: "Quem é o protagonista principal do filme: De Volta Para o Futuro",
                resposta: "1",
                op1: "Marty McFly",
                op2: "Emmett Brown",
                op3: "Biff",
                op4: "George McFly",
                op5: "Einstein"
            },
            { id: 4,
                pergunta: "De qual banda é a música: Californication",
                resposta: "5",
                op1: "Green Day",
                op2: "Coldplay",
                op3: "Oasis",
                op4: "Nirvana",
                op5: "Red Hot Chilli Peapers"
            },
            { id: 5,
                pergunta: "O que está escrito na bandeira do Brasil?",
                resposta: "3",
                op1: "Desordem e Progresso",
                op2: "Ordem e Bagunça",
                op3: "Ordem e Progresso",
                op4: "Make american great again",
                op5: "O Bagulho é doido mesmo"
            },
            { id: 6,
                pergunta: "O que acontece no final de GTA SA?",
                resposta: "3",
                op1: "CJ continua sem nada",
                op2: "Policiais dominam tudo",
                op3: "CJ acaba com o Oficial Tempeny",
                op4: "Big Smoke come todos",
                op5: "Os Ballas dominam a Groove Street"
            },
            { id: 7,
                pergunta: "Em que país se passa o game Resident Evil 4?",
                resposta: "4",
                op1: "Alemanha",
                op2: "Nova Zelândia",
                op3: "Brasil",
                op4: "Espanha",
                op5: "Catar"
            },
            { id: 8,
                pergunta: "Qual é o protagonista da franquia Halo?",
                resposta: "2",
                op1: "Kratos",
                op2: "Master Cheif",
                op3: "Ezio",
                op4: "Link",
                op5: "Leon"
            },
            { id: 9,
                pergunta: "Quantos modelos o PS3 teve?",
                resposta: "3",
                op1: "1",
                op2: "2",
                op3: "3",
                op4: "4",
                op5: "5"
            },
            { id: 10,
                pergunta: "Minecraft é campeão em vendas em:",
                resposta: "2",
                op1: "Xbox One",
                op2: "Playstation 4",
                op3: "Nintendo",
                op4: "Playstation 2",
                op5: "Wii U"
            }
        ];
    }
    //Carregar pergunta no layout
    carregarperguntas() {
        this.pergunta = this.questoes[this.numero].pergunta;
        this.resposta = this.questoes[this.numero].resposta;
        this.opcao1 = this.questoes[this.numero].op1;
        this.opcao2 = this.questoes[this.numero].op2;
        this.opcao3 = this.questoes[this.numero].op3;
        this.opcao4 = this.questoes[this.numero].op4;
        this.opcao5 = this.questoes[this.numero].op5;
    }
    //Pegar a resposta do usuário
    pegarResposta(valor) {
        this.respostaescolhida = valor;
    }
    //Verificar se a resposta está correta
    //ir para a próxima pergunta
    proximo() {
        //Somando acertos e erros
        if (this.respostaescolhida == this.resposta) {
            this.certo++;
        }
        else {
            this.errado++;
        }
        //Chamando pagina de resultado se as perguntas chegar até o final
        if (this.numero >= 9) {
            this.navCtrl.navigateForward("resultado");
            localStorage.setItem('Certo', this.certo);
            localStorage.setItem('Errado', this.errado);
        }
        else {
            this.numero++;
            this.carregarperguntas();
        }
    }
};
PerguntaPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
PerguntaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pergunta',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pergunta.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pergunta/pergunta.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pergunta.page.scss */ "./src/app/pergunta/pergunta.page.scss")).default]
    })
], PerguntaPage);



/***/ })

}]);
//# sourceMappingURL=pergunta-pergunta-module-es2015.js.map