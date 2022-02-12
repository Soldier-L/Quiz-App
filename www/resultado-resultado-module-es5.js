(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resultado-resultado-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/resultado/resultado.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/resultado/resultado.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppResultadoResultadoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Resultado</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"container\">\n    <ion-grid>\n    <ion-row>\n    <ion-col>\n      <b>Acertos</b>\n    </ion-col>\n    <ion-col>\n      <b>Erros</b>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n    <ion-col>\n      {{recebeCerto}}\n    </ion-col>\n    <ion-col>\n      {{recebeErrado}}\n    </ion-col>\n    </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      \n      <ion-row>\n      <ion-col>\n        <b>Resposta das perguntas</b>\n      </ion-col>\n      </ion-row>\n      \n      <ion-row>\n      <ion-col>\n        <b>1ª Pergunta:</b> Tom Jobim \n      </ion-col>\n      </ion-row>\n      \n      <ion-row>\n      <ion-col>\n        <b>2ª Pergunta:</b> Metal Contra As Nuvens \n      </ion-col>\n      </ion-row>\n      \n      <ion-row>\n      <ion-col>\n        <b>3ª Pergunta:</b> Martin McFly\n      </ion-col>\n      </ion-row>\n      \n      <ion-row>\n      <ion-col>\n        <b>4ª Pergunta:</b> Red Hot Chilli Peppers\n      </ion-col>\n      </ion-row>\n      \n      <ion-row>\n      <ion-col>\n        <b>5ª Pergunta:</b> Ordem e Progresso\n      </ion-col>\n      </ion-row>\n\n      <ion-row>\n      <ion-col>\n        <b>6ª Pergunta:</b> CJ acaba com o Oficial Tempeny\n      </ion-col>\n      </ion-row>\n\n      <ion-row>\n      <ion-col>\n        <b>7ª Pergunta:</b> Espanha\n      </ion-col>\n      </ion-row>\n\n      <ion-row>\n      <ion-col>\n        <b>8ª Pergunta:</b> Master Cheif\n      </ion-col>\n      </ion-row>\n\n      <ion-row>\n      <ion-col>\n        <b>9ª Pergunta:</b> 3\n      </ion-col>\n      </ion-row>\n\n      <ion-row>\n      <ion-col>\n        <b>10ª Pergunta:</b> Playstation 4\n      </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-button color=\"dark\" expand = \"block\" (click)=\"voltaInicio()\">Inicio</ion-button>\n  </div>\n  \n</ion-content>";
      /***/
    },

    /***/
    "./src/app/resultado/resultado-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/resultado/resultado-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: ResultadoPageRoutingModule */

    /***/
    function srcAppResultadoResultadoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultadoPageRoutingModule", function () {
        return ResultadoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _resultado_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./resultado.page */
      "./src/app/resultado/resultado.page.ts");

      var routes = [{
        path: '',
        component: _resultado_page__WEBPACK_IMPORTED_MODULE_3__["ResultadoPage"]
      }];

      var ResultadoPageRoutingModule = function ResultadoPageRoutingModule() {
        _classCallCheck(this, ResultadoPageRoutingModule);
      };

      ResultadoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResultadoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/resultado/resultado.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/resultado/resultado.module.ts ***!
      \***********************************************/

    /*! exports provided: ResultadoPageModule */

    /***/
    function srcAppResultadoResultadoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultadoPageModule", function () {
        return ResultadoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _resultado_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./resultado-routing.module */
      "./src/app/resultado/resultado-routing.module.ts");
      /* harmony import */


      var _resultado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./resultado.page */
      "./src/app/resultado/resultado.page.ts");

      var ResultadoPageModule = function ResultadoPageModule() {
        _classCallCheck(this, ResultadoPageModule);
      };

      ResultadoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _resultado_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultadoPageRoutingModule"]],
        declarations: [_resultado_page__WEBPACK_IMPORTED_MODULE_6__["ResultadoPage"]]
      })], ResultadoPageModule);
      /***/
    },

    /***/
    "./src/app/resultado/resultado.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/resultado/resultado.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppResultadoResultadoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n}\n\nion-col {\n  border: 1px solid #db2100;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0YWRvL3Jlc3VsdGFkby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdGFkby9yZXN1bHRhZG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tY29se1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIxOSwgMzMsIDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/resultado/resultado.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/resultado/resultado.page.ts ***!
      \*********************************************/

    /*! exports provided: ResultadoPage */

    /***/
    function srcAppResultadoResultadoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResultadoPage", function () {
        return ResultadoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ResultadoPage = /*#__PURE__*/function () {
        function ResultadoPage(navCtrl) {
          _classCallCheck(this, ResultadoPage);

          this.navCtrl = navCtrl;
        }

        _createClass(ResultadoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.recebeCerto = localStorage.getItem('Certo');
            this.recebeErrado = localStorage.getItem('Errado');
            this.respostaescolhida = localStorage.getItem('respostaescolhida');
          }
        }, {
          key: "voltaInicio",
          value: function voltaInicio() {
            this.navCtrl.navigateForward("pergunta");
          }
        }]);

        return ResultadoPage;
      }();

      ResultadoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      ResultadoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resultado',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./resultado.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/resultado/resultado.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./resultado.page.scss */
        "./src/app/resultado/resultado.page.scss"))["default"]]
      })], ResultadoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=resultado-resultado-module-es5.js.map