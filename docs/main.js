"use strict";
(self["webpackChunksoon_portal_angular"] = self["webpackChunksoon_portal_angular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 8068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '**',
  component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_collection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/collection.service */ 4857);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);








function AppComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "On Sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AppComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "On Auction");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
let AppComponent = class AppComponent {
  constructor(collectionService) {
    this.collectionService = collectionService;
    this.collection$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
  }
  ngOnInit() {
    this.collectionService.getOne(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collection).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.untilDestroyed)(this)).subscribe(this.collection$);
  }
  showAuction() {
    return src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mode === 'auction';
  }
};
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_collection_service__WEBPACK_IMPORTED_MODULE_1__.CollectionService));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 9,
  vars: 5,
  consts: [[1, "py-6", "px-6", "text-center", "bg-gradient-to-tr", "from-red-300", "to-yellow-200", "flex", "justify-center", "items-center"], [1, "mb-6", "text-5xl", "font-medium"], [1, "inline-block", "whitespace-nowrap", "rounded-full", "bg-neutral-50", "px-[0.65em]", "pt-[0.35em]", "pb-[0.25em]", "text-center", "align-baseline", "text-[0.5em]", "font-bold", "leading-none", "text-neutral-600"], [4, "ngIf"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header")(1, "div", 0)(2, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_span_6_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_span_7_Template, 2, 0, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "router-outlet");
    }
    if (rf & 2) {
      let tmp_0_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, ctx.collection$)) == null ? null : tmp_0_0.name, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.showAuction());
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showAuction());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: [".main-div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__.UntilDestroy)()], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 8068);
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product/product.component */ 3995);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/products/products.component */ 697);
/* harmony import */ var _utils_format_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/format.utils */ 221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__.HomepageComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_4__.ProductsComponent, _components_product_product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent, _utils_format_utils__WEBPACK_IMPORTED_MODULE_5__.UnitFormatPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule]
  });
})();

/***/ }),

/***/ 8068:
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../products/products.component */ 697);


class HomepageComponent {}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
  return new (t || HomepageComponent)();
};
HomepageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: HomepageComponent,
  selectors: [["app-homepage"]],
  decls: 1,
  vars: 0,
  template: function HomepageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-products");
    }
  },
  dependencies: [_products_products_component__WEBPACK_IMPORTED_MODULE_0__.ProductsComponent],
  styles: ["h2[_ngcontent-%COMP%] {\n  padding: 0.5em 0;\n}\n\n.jumbo[_ngcontent-%COMP%] {\n  font-family: \"Pacifico\", cursive;\n}\n\n@media (min-width: 900px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n    padding: 0.5em 0;\n  }\n  .header[_ngcontent-%COMP%] {\n    padding: 4em 0;\n  }\n  .jumbo[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFDRjtFQUVBO0lBQ0UsY0FBQTtFQUFGO0VBR0E7SUFDRSxlQUFBO0VBREY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgcGFkZGluZzogMC41ZW0gMDtcbn1cblxuLmp1bWJvIHtcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA0ZW0gMDtcbiAgfVxuXG4gIC5qdW1ibyB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 3995:
/*!*********************************************************!*\
  !*** ./src/app/components/product/product.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductComponent": () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @soonaverse/interfaces */ 6752);
/* harmony import */ var _soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _utils_format_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format.utils */ 221);




function ProductComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "trade");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProductComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "trades");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ProductComponent {
  getUrl(org, size) {
    var _a, _b;
    const extensionPat = /\.[^/.]+$/;
    const ext = (_b = (_a = org.match(extensionPat)) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.replace('.', '_');
    return org.replace(extensionPat, ext + '_' + size + '.webp');
  }
  medSizeImg(org) {
    if (!org) return '';
    return this.getUrl(org, _soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__.FILE_SIZES.medium);
  }
  goToSoonaverseNft() {
    var _a;
    window.open('https://soonaverse.com/nft/' + ((_a = this.nft) === null || _a === void 0 ? void 0 : _a.uid));
  }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) {
  return new (t || ProductComponent)();
};
ProductComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProductComponent,
  selectors: [["app-product"]],
  inputs: {
    nft: "nft"
  },
  decls: 21,
  vars: 10,
  consts: [[1, "max-w-sm", "bg-white", "px-6", "pt-6", "pb-2", "rounded-xl", "shadow-lg", "transform", "hover:scale-105", "transition", "duration-500"], [1, "mb-3", "text-xl", "font-bold", "text-indigo-600"], [1, "relative"], ["alt", "Colors", 1, "w-full", "rounded-xl", 3, "src"], [1, "absolute", "top-0", "bg-yellow-300", "text-gray-800", "font-semibold", "py-1", "px-3", "rounded-br-lg", "rounded-tl-lg"], [1, "mt-4", "text-gray-800", "text-sm", "font-bold", "cursor-pointer"], [1, "my-4"], [1, "flex", "space-x-1", "items-center"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke", "currentColor", 1, "h-6", "w-6", "text-indigo-600", "mb-1.5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "2", "d", "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"], [4, "ngIf"], [1, "mt-4", "text-xl", "w-full", "text-white", "bg-indigo-600", "py-2", "rounded-xl", "shadow-lg", 3, "click"]],
  template: function ProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "unitFormat");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "svg", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ProductComponent_span_17_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ProductComponent_span_18_Template, 2, 0, "span", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_19_listener() {
        return ctx.goToSoonaverseNft();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Buy Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nft == null ? null : ctx.nft.name);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.medSizeImg(ctx.nft == null ? null : ctx.nft.media), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 7, ctx.nft == null ? null : ctx.nft.availablePrice, ctx.nft == null ? null : ctx.nft.mintingData == null ? null : ctx.nft.mintingData.network), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.nft == null ? null : ctx.nft.description);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.nft == null ? null : ctx.nft.totalTrades, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.nft == null ? null : ctx.nft.totalTrades) === 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((ctx.nft == null ? null : ctx.nft.totalTrades) || 0) > 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _utils_format_utils__WEBPACK_IMPORTED_MODULE_1__.UnitFormatPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 697:
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsComponent": () => (/* binding */ ProductsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_nft_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/nft.service */ 3238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product.component */ 3995);








function ProductsComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function ProductsComponent_app_product_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-product", 7);
  }
  if (rf & 2) {
    const p_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nft", p_r2);
  }
}
let ProductsComponent = class ProductsComponent {
  constructor(nftService) {
    this.nftService = nftService;
    this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
  }
  ngOnInit() {
    // TODO Add pagination and virtual scroll
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.mode === 'auction') {
      this.nftService.getByCollectionAvailableForAuction(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collection).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(this.products$);
    } else {
      this.nftService.getByCollectionAvailableForSale(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collection).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(this.products$);
    }
  }
};
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
  return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_nft_service__WEBPACK_IMPORTED_MODULE_1__.NftService));
};
ProductsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductsComponent,
  selectors: [["app-products"]],
  decls: 6,
  vars: 6,
  consts: [[1, "min-h-screen", "bg-gradient-to-tr", "from-red-300", "to-yellow-200", "flex", "justify-center", "items-center", "py-20"], [1, "md:px-4", "md:grid", "md:grid-cols-2", "lg:grid-cols-3", "gap-5", "space-y-4", "md:space-y-0"], ["class", "flex items-center justify-center", 4, "ngIf"], [3, "nft", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "justify-center"], ["role", "status", 1, "inline-block", "h-8", "w-8", "animate-spin", "rounded-full", "border-4", "border-solid", "border-current", "border-r-transparent", "align-[-0.125em]", "motion-reduce:animate-[spin_1.5s_linear_infinite]"], [1, "!absolute", "!-m-px", "!h-px", "!w-px", "!overflow-hidden", "!whitespace-nowrap", "!border-0", "!p-0", "![clip:rect(0,0,0,0)]"], [3, "nft"]],
  template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProductsComponent_div_2_Template, 4, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ProductsComponent_app_product_4_Template, 1, 1, "app-product", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, ctx.products$) === undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, ctx.products$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _product_product_component__WEBPACK_IMPORTED_MODULE_2__.ProductComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()], ProductsComponent);


/***/ }),

/***/ 5136:
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var _soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @soonaverse/lib */ 2384);
/* harmony import */ var _soonaverse_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9346);


class BaseService {
  constructor(repository) {
    this.repo = new repository(_soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__.SoonEnv.PROD);
  }
  getOne(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.repo.getById(id));
  }
}

/***/ }),

/***/ 4857:
/*!************************************************!*\
  !*** ./src/app/services/collection.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionService": () => (/* binding */ CollectionService)
/* harmony export */ });
/* harmony import */ var _soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @soonaverse/lib */ 2384);
/* harmony import */ var _soonaverse_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ 5136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class CollectionService extends _base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor() {
    super(_soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__.CollectionRepository);
  }
}
CollectionService.ɵfac = function CollectionService_Factory(t) {
  return new (t || CollectionService)();
};
CollectionService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: CollectionService,
  factory: CollectionService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3238:
/*!*****************************************!*\
  !*** ./src/app/services/nft.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NftService": () => (/* binding */ NftService)
/* harmony export */ });
/* harmony import */ var _soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @soonaverse/lib */ 2384);
/* harmony import */ var _soonaverse_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9346);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ 5136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




class NftService extends _base_service__WEBPACK_IMPORTED_MODULE_1__.BaseService {
  constructor() {
    super(_soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__.NftRepository);
  }
  getByCollection(col) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.repo.getByField('collection', col));
  }
  getByCollectionAvailableForSale(col) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.repo.getByField(['collection', 'available'], [col, _soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__.NftAvailable.SALE]));
  }
  getByCollectionAvailableForAuction(col) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.repo.getByField(['collection', 'available'], [col, _soonaverse_lib__WEBPACK_IMPORTED_MODULE_0__.NftAvailable.AUCTION]));
  }
}
NftService.ɵfac = function NftService_Factory(t) {
  return new (t || NftService)();
};
NftService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: NftService,
  factory: NftService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 221:
/*!***************************************!*\
  !*** ./src/app/utils/format.utils.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NETWORK_DETAIL": () => (/* binding */ NETWORK_DETAIL),
/* harmony export */   "UnitFormatPipe": () => (/* binding */ UnitFormatPipe)
/* harmony export */ });
/* harmony import */ var _soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @soonaverse/interfaces */ 6752);
/* harmony import */ var _soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


const NETWORK_DETAIL = {
  [_soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.IOTA]: {
    label: 'MIOTA',
    divideBy: 1000 * 1000
  },
  [_soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.ATOI]: {
    label: 'MATOI',
    divideBy: 1000 * 1000
  },
  [_soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.SMR]: {
    label: 'SMR',
    divideBy: 1000 * 1000
  },
  [_soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.RMS]: {
    label: 'RMS',
    divideBy: 1000 * 1000
  }
};
class UnitFormatPipe {
  transform(value, network, removeZeroes = false, showUnit = true, defDecimals = 2) {
    if (!network) {
      network = _soonaverse_interfaces__WEBPACK_IMPORTED_MODULE_0__.Network.IOTA;
    }
    if (!value) {
      value = 0;
    }
    value = value / NETWORK_DETAIL[network].divideBy;
    const parts = (removeZeroes ? value : value.toFixed(defDecimals)).toString().split('.');
    const formattedValue = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts.length === 2 ? '.' + parts[1] : '');
    return formattedValue + (showUnit ? ` ${NETWORK_DETAIL[network].label}` : '');
  }
}
UnitFormatPipe.ɵfac = function UnitFormatPipe_Factory(t) {
  return new (t || UnitFormatPipe)();
};
UnitFormatPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
  name: "unitFormat",
  type: UnitFormatPipe,
  pure: true
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  mode: 'sale',
  collection: '0xcbe28532602d67eec7c937c0037509d426f38223'
};

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map