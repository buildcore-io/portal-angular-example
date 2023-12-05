"use strict";
(self["webpackChunksoon_portal_angular"] = self["webpackChunksoon_portal_angular"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 96048);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '**',
  component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _build_5_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @build-5/client */ 45723);
/* harmony import */ var _build_5_client_lib_https__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @build-5/client/lib/https */ 80598);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_collection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/collection.service */ 68886);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 27947);










function AppComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "On Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AppComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "On Auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
let AppComponent = class AppComponent {
  constructor(collectionService) {
    this.collectionService = collectionService;
    this.collection$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(undefined);
  }
  ngOnInit() {
    window.build5 = (0,_build_5_client__WEBPACK_IMPORTED_MODULE_0__.https)(_build_5_client_lib_https__WEBPACK_IMPORTED_MODULE_1__.Build5.TEST);
    this.collectionService.getOne(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.collection).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(this.collection$);
  }
  showAuction() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mode === 'auction';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_collection_service__WEBPACK_IMPORTED_MODULE_3__.CollectionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 9,
    vars: 5,
    consts: [[1, "py-6", "px-6", "text-center", "bg-gradient-to-tr", "from-red-300", "to-yellow-200", "flex", "justify-center", "items-center"], [1, "mb-6", "text-5xl", "font-medium"], [1, "inline-block", "whitespace-nowrap", "rounded-full", "bg-neutral-50", "px-[0.65em]", "pt-[0.35em]", "pb-[0.25em]", "text-center", "align-baseline", "text-[0.5em]", "font-bold", "leading-none", "text-neutral-600"], [4, "ngIf"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppComponent_span_6_Template, 2, 0, "span", 3)(7, AppComponent_span_7_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "router-outlet");
      }
      if (rf & 2) {
        let tmp_0_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, ctx.collection$)) == null ? null : tmp_0_0.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.showAuction());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showAuction());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: [".main-div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1kaXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGO0FBQ0EsNFJBQTRSIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)()], AppComponent);


/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 96048);
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product/product.component */ 69486);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/products/products.component */ 89510);
/* harmony import */ var _utils_format_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/format.utils */ 33654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);








class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__.HomepageComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_4__.ProductsComponent, _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent, _utils_format_utils__WEBPACK_IMPORTED_MODULE_5__.UnitFormatPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]
  });
})();

/***/ }),

/***/ 96048:
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomepageComponent: () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/event.service */ 91457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../products/products.component */ 89510);




function HomepageComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](p_r1);
  }
}
class HomepageComponent {
  constructor(log) {
    this.log = log;
  }
  static #_ = this.ɵfac = function HomepageComponent_Factory(t) {
    return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_0__.EventLogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HomepageComponent,
    selectors: [["app-homepage"]],
    decls: 9,
    vars: 3,
    consts: [["id", "chat-container", 1, "fixed", "bottom-2", "right-4", 2, "width", "32rem"], [1, "bg-white", "shadow-md", "rounded-lg", "max-w-lg", "w-full"], [1, "p-4", "border-b", "bg-blue-500", "text-white", "rounded-t-lg", "flex", "justify-between", "items-center"], [1, "text-lg", "font-semibold"], ["id", "chatbox", 1, "p-4", "h-96", "overflow-y-auto"], ["class", "mb-2 text-xs font-serif", 4, "ngFor", "ngForOf"], [1, "mb-2", "text-xs", "font-serif"], [1, "bg-gray-200", "text-gray-700", "rounded-lg", "py-2", "px-4", "inline-block"]],
    template: function HomepageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Application Log");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HomepageComponent_div_7_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 1, ctx.log.events$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _products_products_component__WEBPACK_IMPORTED_MODULE_1__.ProductsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
    styles: ["h2[_ngcontent-%COMP%] {\n  padding: 0.5em 0;\n}\n\n.jumbo[_ngcontent-%COMP%] {\n  font-family: \"Pacifico\", cursive;\n}\n\n@media (min-width: 900px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n    padding: 0.5em 0;\n  }\n  .header[_ngcontent-%COMP%] {\n    padding: 4em 0;\n  }\n  .jumbo[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQUNGO0VBRUE7SUFDRSxjQUFBO0VBQUY7RUFHQTtJQUNFLGVBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBwYWRkaW5nOiAwLjVlbSAwO1xufVxuXG4uanVtYm8ge1xuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgcGFkZGluZzogMC41ZW0gMDtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDRlbSAwO1xuICB9XG5cbiAgLmp1bWJvIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gIH1cbn1cbiJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFDRjtFQUVBO0lBQ0UsY0FBQTtFQUFGO0VBR0E7SUFDRSxlQUFBO0VBREY7QUFDRjtBQUNBLGd1QkFBZ3VCIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICBwYWRkaW5nOiAwLjVlbSAwO1xufVxuXG4uanVtYm8ge1xuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgcGFkZGluZzogMC41ZW0gMDtcbiAgfVxuXG4gIC5oZWFkZXIge1xuICAgIHBhZGRpbmc6IDRlbSAwO1xuICB9XG5cbiAgLmp1bWJvIHtcbiAgICBmb250LXNpemU6IDQ4cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 69486:
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _Users_visitorunchained_workspace_moves_portal_angular_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @build-5/interfaces */ 21862);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ 70292);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_nft_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/nft.service */ 58000);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/event.service */ 91457);
/* harmony import */ var src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/transaction.service */ 9184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _utils_format_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/format.utils */ 33654);












function ProductComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ProductComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ProductComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ProductComponent_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.signAndBuy(ctx_r3.nft.uid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Buy Now");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
let ProductComponent = class ProductComponent {
  getUrl(org, size) {
    const extensionPat = /\.[^/.]+$/;
    const ext = org.match(extensionPat)?.[0]?.replace('.', '_');
    return org.replace(extensionPat, ext + '_' + size + '.webp');
  }
  constructor(nftService, log, tranService) {
    this.nftService = nftService;
    this.log = log;
    this.tranService = tranService;
    // none.
  }

  medSizeImg(org) {
    if (!org) return '';
    return this.getUrl(org, _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__.FILE_SIZES.medium);
  }
  monitorOrderProgress(id) {
    const listeningToTransaction = [];
    const linkedTransactions$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(undefined);
    linkedTransactions$.subscribe(val => {
      // Ignore delete or empty
      if (!val) {
        return;
      }
      if (val.type === _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__.TransactionType.PAYMENT) {
        this.log.add('Received payment for ' + (val.payload.amount || 0) / 1000 / 1000 + ' ' + val.network.toUpperCase());
        if (val.payload.invalidPayment === false) {
          this.log.add('Payment has been considered invalid. Refund initiated.');
        }
      }
      if (val.type === _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__.TransactionType.CREDIT) {
        if (val.payload.reconciled === true) {
          this.log.add('Credit issued and reconciled.');
        }
      }
      if (val.type === _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__.TransactionType.BILL_PAYMENT) {
        this.log.add('Bill Payment issued. Previous owner / Royalties paid.');
      }
    });
    // Let's monitor order to understand progress of the transaction.
    this.tranService.getOneLive(id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this)).subscribe(val => {
      if (val && val.type === _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__.TransactionType.ORDER) {
        const expiresOn = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(val.payload.expiresOn.toDate());
        if (expiresOn.isBefore(dayjs__WEBPACK_IMPORTED_MODULE_2___default()()) || val.payload?.void) {
          this.log.add('Order has expired. Any funds will now be refunded.');
        }
        if (val.linkedTransactions && val.linkedTransactions?.length > 0) {
          // Listen to other transactions.
          for (const tranId of val.linkedTransactions) {
            if (listeningToTransaction.indexOf(tranId) > -1) {
              continue;
            }
            listeningToTransaction.push(tranId);
            this.tranService.getOneLive(id).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.untilDestroyed)(this)).subscribe(linkedTransactions$);
          }
        }
        if (val.payload.reconciled === true) {
          this.log.add('NFT Sold to user ' + val.member);
        }
      }
    });
  }
  signAndBuy(id) {
    var _this = this;
    return (0,_Users_visitorunchained_workspace_moves_portal_angular_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const tran = yield _this.nftService.order(id);
        _this.log.add('Order created. Sent ' + (tran.payload.amount || 0) / 1000 / 1000 + ' ' + tran.network.toUpperCase() + ' to ' + tran.payload.targetAddress);
        _this.monitorOrderProgress(tran.uid);
      } catch (e) {
        _this.log.add('ERRROR: ' + e.key);
      }
    })();
  }
  static #_ = this.ɵfac = function ProductComponent_Factory(t) {
    return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_nft_service__WEBPACK_IMPORTED_MODULE_3__.NftService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_4__.EventLogService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_transaction_service__WEBPACK_IMPORTED_MODULE_5__.TransactionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: ProductComponent,
    selectors: [["app-product"]],
    inputs: {
      nft: "nft"
    },
    decls: 20,
    vars: 11,
    consts: [[1, "max-w-sm", "bg-white", "px-6", "pt-6", "pb-2", "rounded-xl", "shadow-lg", "transform", "hover:scale-105", "transition", "duration-500"], [1, "mb-3", "text-xl", "font-bold", "text-indigo-600"], [1, "relative"], ["alt", "Colors", 1, "w-full", "rounded-xl", 3, "src"], [1, "absolute", "top-0", "bg-yellow-300", "text-gray-800", "font-semibold", "py-1", "px-3", "rounded-br-lg", "rounded-tl-lg"], [1, "mt-4", "text-gray-800", "text-sm", "font-bold", "cursor-pointer"], [1, "my-4"], [1, "flex", "space-x-1", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-indigo-600", "mb-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [4, "ngIf"], ["class", "mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg", 3, "click", 4, "ngIf"], [1, "mt-4", "text-xl", "w-full", "text-white", "bg-indigo-600", "py-2", "rounded-xl", "shadow-lg", 3, "click"]],
    template: function ProductComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "unitFormat");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ProductComponent_span_17_Template, 2, 0, "span", 10)(18, ProductComponent_span_18_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ProductComponent_button_19_Template, 2, 0, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.nft == null ? null : ctx.nft.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.medSizeImg(ctx.nft == null ? null : ctx.nft.media), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](7, 8, ctx.nft == null ? null : ctx.nft.availablePrice, ctx.nft == null ? null : ctx.nft.mintingData == null ? null : ctx.nft.mintingData.network), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.nft == null ? null : ctx.nft.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx.nft == null ? null : ctx.nft.totalTrades, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (ctx.nft == null ? null : ctx.nft.totalTrades) === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((ctx.nft == null ? null : ctx.nft.totalTrades) || 0) > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.nft);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _utils_format_utils__WEBPACK_IMPORTED_MODULE_6__.UnitFormatPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
};
ProductComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_9__.UntilDestroy)()], ProductComponent);


/***/ }),

/***/ 89510:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductsComponent: () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 42321);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngneat/until-destroy */ 52813);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_nft_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/nft.service */ 58000);
/* harmony import */ var src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/event.service */ 91457);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../product/product.component */ 69486);









function ProductsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function ProductsComponent_app_product_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-product", 7);
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nft", p_r2);
  }
}
let ProductsComponent = class ProductsComponent {
  constructor(nftService, log) {
    this.nftService = nftService;
    this.log = log;
    this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(undefined);
  }
  ngOnInit() {
    // TODO Add pagination and virtual scroll
    this.log.add('Loading available NFTs for sale within collection: ' + src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collection.slice(0, 9) + '...');
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mode === 'auction') {
      this.nftService.getByCollectionAvailableForAuctionLive(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collection).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(this.products$);
    } else {
      this.nftService.getByCollectionAvailableForSaleLive(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collection).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.untilDestroyed)(this)).subscribe(this.products$);
    }
  }
  static #_ = this.ɵfac = function ProductsComponent_Factory(t) {
    return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_nft_service__WEBPACK_IMPORTED_MODULE_1__.NftService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventLogService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: ProductsComponent,
    selectors: [["app-products"]],
    decls: 6,
    vars: 6,
    consts: [[1, "min-h-screen", "bg-gradient-to-tr", "from-red-300", "to-yellow-200", "flex", "justify-center", "items-center", "py-20"], [1, "md:px-4", "md:grid", "md:grid-cols-2", "lg:grid-cols-3", "gap-5", "space-y-4", "md:space-y-0"], ["class", "flex items-center justify-center", 4, "ngIf"], [3, "nft", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-center"], ["role", "status", 1, "inline-block", "h-8", "w-8", "animate-spin", "rounded-full", "border-4", "border-solid", "border-current", "border-r-transparent", "align-[-0.125em]", "motion-reduce:animate-[spin_1.5s_linear_infinite]"], [1, "!absolute", "!-m-px", "!h-px", "!w-px", "!overflow-hidden", "!whitespace-nowrap", "!border-0", "!p-0", "![clip:rect(0,0,0,0)]"], [3, "nft"]],
    template: function ProductsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ProductsComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ProductsComponent_app_product_4_Template, 1, 1, "app-product", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, ctx.products$) === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, ctx.products$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _product_product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0cy5jb21wb25lbnQuc2NzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0tBQW9LIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
};
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_6__.UntilDestroy)()], ProductsComponent);


/***/ }),

/***/ 68886:
/*!************************************************!*\
  !*** ./src/app/services/collection.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollectionService: () => (/* binding */ CollectionService)
/* harmony export */ });
/* harmony import */ var _build_5_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @build-5/client */ 45723);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @build-5/interfaces */ 21862);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 56231);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);





class CollectionService {
  constructor() {
    this.client = (0,_build_5_client__WEBPACK_IMPORTED_MODULE_0__.https)(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.build5Env).dataset(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__.Dataset.COLLECTION);
  }
  getOne(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.client.id(id).get());
  }
  static #_ = this.ɵfac = function CollectionService_Factory(t) {
    return new (t || CollectionService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: CollectionService,
    factory: CollectionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 91457:
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventLogService: () => (/* binding */ EventLogService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class EventLogService {
  constructor() {
    this.events$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
  }
  add(s) {
    this.events$.next([...this.events$.value, s]);
  }
  static #_ = this.ɵfac = function EventLogService_Factory(t) {
    return new (t || EventLogService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: EventLogService,
    factory: EventLogService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 22371:
/*!********************************************!*\
  !*** ./src/app/services/member.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MemberService: () => (/* binding */ MemberService)
/* harmony export */ });
/* harmony import */ var _build_5_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @build-5/client */ 45723);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @build-5/interfaces */ 21862);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 56231);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);





class MemberService {
  constructor() {
    this.client = (0,_build_5_client__WEBPACK_IMPORTED_MODULE_0__.https)(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.build5Env).dataset(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__.Dataset.MEMBER);
  }
  getOne(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.from)(this.client.id(id).get());
  }
  createIfNotExists(address) {
    return this.client.create({
      address,
      projectApiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.build5Token,
      body: {
        address
      }
    });
  }
  static #_ = this.ɵfac = function MemberService_Factory(t) {
    return new (t || MemberService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: MemberService,
    factory: MemberService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 58000:
/*!*****************************************!*\
  !*** ./src/app/services/nft.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NftService: () => (/* binding */ NftService)
/* harmony export */ });
/* harmony import */ var _Users_visitorunchained_workspace_moves_portal_angular_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _build_5_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @build-5/client */ 45723);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @build-5/interfaces */ 21862);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 56231);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ 23076);







class NftService {
  constructor(user) {
    this.user = user;
    this.client = (0,_build_5_client__WEBPACK_IMPORTED_MODULE_1__.https)(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.build5Env).dataset(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_2__.Dataset.NFT);
  }
  order(nftId) {
    var _this = this;
    return (0,_Users_visitorunchained_workspace_moves_portal_angular_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const d = yield _this.user.signWithMetamask({
        collection: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.collection,
        nft: nftId
      });
      return _this.client.order(d);
    })();
  }
  getByCollection(col) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.client.getByField('collection', col));
  }
  getByCollectionAvailableForSaleLive(col) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.client.getByFieldLive(['collection', 'available'], [col, _build_5_interfaces__WEBPACK_IMPORTED_MODULE_2__.NftAvailable.SALE]));
  }
  getByCollectionAvailableForAuctionLive(col) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.client.getByFieldLive(['collection', 'available'], [col, _build_5_interfaces__WEBPACK_IMPORTED_MODULE_2__.NftAvailable.AUCTION]));
  }
  static #_ = this.ɵfac = function NftService_Factory(t) {
    return new (t || NftService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
    token: NftService,
    factory: NftService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 9184:
/*!*************************************************!*\
  !*** ./src/app/services/transaction.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TransactionService: () => (/* binding */ TransactionService)
/* harmony export */ });
/* harmony import */ var _build_5_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @build-5/client */ 45723);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @build-5/interfaces */ 21862);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);




class TransactionService {
  constructor() {
    this.client = (0,_build_5_client__WEBPACK_IMPORTED_MODULE_0__.https)(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.build5Env).dataset(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_1__.Dataset.TRANSACTION);
  }
  getOneLive(id) {
    return this.client.id(id).getLive();
  }
  static #_ = this.ɵfac = function TransactionService_Factory(t) {
    return new (t || TransactionService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: TransactionService,
    factory: TransactionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 23076:
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _Users_visitorunchained_workspace_moves_portal_angular_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @metamask/detect-provider */ 32115);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 20553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member.service */ 22371);
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event.service */ 91457);






class UserService {
  constructor(memberService, log) {
    this.memberService = memberService;
    this.log = log;
    // none.
  }

  signWithMetamask(params = {}) {
    var _this = this;
    return (0,_Users_visitorunchained_workspace_moves_portal_angular_example_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.log.add('Metamask signing initialized!');
      const provider = yield _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_1___default()();
      if (provider) {
        try {
          try {
            if (!(yield provider._metamask.isUnlocked())) {
              console.log(`You must unlock your MetaMask first!`, '');
              return undefined;
            }
            // Make sure account is always selected.
            yield provider.request({
              method: 'eth_requestAccounts',
              params: [{
                eth_accounts: {}
              }]
            });
          } catch (e) {
            console.log(`You must enable access to read your account address.`, '');
            return undefined;
          }
          if (!provider.selectedAddress) {
            console.log(`Please make sure you select address in MetaMask!`, '');
            return undefined;
          }
          const member = yield _this.memberService.createIfNotExists(provider.selectedAddress);
          if (!member) {
            console.log(`Unable to get nonce to authenticate!`, '');
            return undefined;
          }
          const signature = yield provider.request({
            method: 'personal_sign',
            params: [`0x${_this.toHex(member.nonce)}`, provider.selectedAddress]
          });
          return {
            address: provider.selectedAddress,
            signature: signature,
            projectApiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.build5Token,
            body: params
          };
        } catch (e) {
          return undefined;
        }
      } else {
        return false;
      }
    })();
  }
  toHex(stringToConvert) {
    return stringToConvert.split('').map(c => {
      return c.charCodeAt(0).toString(16).padStart(2, '0');
    }).join('');
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_member_service__WEBPACK_IMPORTED_MODULE_3__.MemberService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_event_service__WEBPACK_IMPORTED_MODULE_4__.EventLogService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 33654:
/*!***************************************!*\
  !*** ./src/app/utils/format.utils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NETWORK_DETAIL: () => (/* binding */ NETWORK_DETAIL),
/* harmony export */   UnitFormatPipe: () => (/* binding */ UnitFormatPipe)
/* harmony export */ });
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @build-5/interfaces */ 21862);
/* harmony import */ var _build_5_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_build_5_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


const NETWORK_DETAIL = {
  [_build_5_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.IOTA]: {
    label: 'MIOTA',
    divideBy: 1000 * 1000
  },
  [_build_5_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.ATOI]: {
    label: 'MATOI',
    divideBy: 1000 * 1000
  },
  [_build_5_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.SMR]: {
    label: 'SMR',
    divideBy: 1000 * 1000
  },
  [_build_5_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.RMS]: {
    label: 'RMS',
    divideBy: 1000 * 1000
  }
};
class UnitFormatPipe {
  transform(value, network, removeZeroes = false, showUnit = true, defDecimals = 2) {
    if (!network) {
      network = _build_5_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.IOTA;
    }
    if (!value) {
      value = 0;
    }
    value = value / NETWORK_DETAIL[network].divideBy;
    const parts = (removeZeroes ? value : value.toFixed(defDecimals)).toString().split('.');
    const formattedValue = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts.length === 2 ? '.' + parts[1] : '');
    return formattedValue + (showUnit ? ` ${NETWORK_DETAIL[network].label}` : '');
  }
  static #_ = this.ɵfac = function UnitFormatPipe_Factory(t) {
    return new (t || UnitFormatPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
    name: "unitFormat",
    type: UnitFormatPipe,
    pure: true
  });
}

/***/ }),

/***/ 20553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _build_5_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @build-5/client */ 45723);

const environment = {
  production: false,
  mode: 'sale',
  collection: '0x267b6d288fc7568e099a929b649e8d5b55c2b39d',
  build5Token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIweDU1MWZkMmM3YzdiZjM1NmJhYzE5NDU4N2RhYjJmY2Q0NjQyMDA1NGIiLCJwcm9qZWN0IjoiMHg0NjIyM2VkZDQxNTc2MzVkZmM2Mzk5MTU1NjA5ZjMwMWRlY2JmZDg4IiwiaWF0IjoxNjk1ODUyNTk2fQ.WT9L4H9eDdFfJZMrfxTKhEq4PojNWSGNv_CbmlG9sJg',
  build5Env: _build_5_client__WEBPACK_IMPORTED_MODULE_0__.Build5.TEST
};

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 20553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map