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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);



class AppComponent {}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 0,
  consts: [["fxLayout", "row", "fxLayoutAlign", "center", 1, "main-div", "mat-typography"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective],
  styles: [".main-div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/homepage/homepage.component */ 8068);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/product/product.component */ 3995);
/* harmony import */ var _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/products/products.component */ 697);
/* harmony import */ var _utils_format_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/format.utils */ 221);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_2__.HomepageComponent, _components_products_products_component__WEBPACK_IMPORTED_MODULE_5__.ProductsComponent, _components_product_product_component__WEBPACK_IMPORTED_MODULE_4__.ProductComponent, _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _utils_format_utils__WEBPACK_IMPORTED_MODULE_6__.UnitFormatPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/collection.service */ 4857);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../products/products.component */ 697);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _utils_format_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/format.utils */ 221);










let HomepageComponent = class HomepageComponent {
  constructor(collectionService) {
    this.collectionService = collectionService;
    this.collection$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(undefined);
  }
  ngOnInit() {
    this.collectionService.getOne(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collection).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(this.collection$);
  }
};
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
  return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_collection_service__WEBPACK_IMPORTED_MODULE_1__.CollectionService));
};
HomepageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: HomepageComponent,
  selectors: [["app-homepage"]],
  decls: 11,
  vars: 14,
  consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "header"], [1, "jumbo"]],
  template: function HomepageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "unitFormat");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "app-products");
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 3, ctx.collection$)) == null ? null : tmp_0_0.name, " (floor price: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 5, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 8, ctx.collection$)) == null ? null : tmp_0_0.floorPrice, (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](6, 10, ctx.collection$)) == null ? null : tmp_0_0.mintingData == null ? null : tmp_0_0.mintingData.network), ") ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 12, ctx.collection$)) == null ? null : tmp_1_0.description);
    }
  },
  dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _products_products_component__WEBPACK_IMPORTED_MODULE_2__.ProductsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _utils_format_utils__WEBPACK_IMPORTED_MODULE_3__.UnitFormatPipe],
  styles: ["h2[_ngcontent-%COMP%] {\n  padding: 0.5em 0;\n}\n\n.jumbo[_ngcontent-%COMP%] {\n  font-family: \"Pacifico\", cursive;\n}\n\n@media (min-width: 900px) {\n  h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n    padding: 0.5em 0;\n  }\n  .header[_ngcontent-%COMP%] {\n    padding: 4em 0;\n  }\n  .jumbo[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUFDRjtFQUVBO0lBQ0UsY0FBQTtFQUFGO0VBR0E7SUFDRSxlQUFBO0VBREY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcbiAgcGFkZGluZzogMC41ZW0gMDtcbn1cblxuLmp1bWJvIHtcbiAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIGN1cnNpdmU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICBoMiB7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA0ZW0gMDtcbiAgfVxuXG4gIC5qdW1ibyB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});
HomepageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()], HomepageComponent);


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);





class NavbarComponent {
  constructor() {}
  ngOnInit() {}
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
  return new (t || NavbarComponent)();
};
NavbarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavbarComponent,
  selectors: [["app-navbar"]],
  decls: 4,
  vars: 0,
  consts: [["mat-icon-button", "", "aria-label", "Home button", "routerLink", "/"]],
  template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar")(1, "button", 0)(2, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar],
  styles: [".spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _utils_format_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/format.utils */ 221);




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
  decls: 6,
  vars: 7,
  consts: [[1, "product-card", 3, "click"], ["mat-card-image", "", 3, "src"]],
  template: function ProductComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductComponent_Template_mat_card_click_0_listener() {
        return ctx.goToSoonaverseNft();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "unitFormat");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.nft == null ? null : ctx.nft.name, " (price: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 4, ctx.nft == null ? null : ctx.nft.price, ctx.nft == null ? null : ctx.nft.mintingData == null ? null : ctx.nft.mintingData.network), ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.nft == null ? null : ctx.nft.description, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.medSizeImg(ctx.nft == null ? null : ctx.nft.media), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    }
  },
  dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _utils_format_utils__WEBPACK_IMPORTED_MODULE_1__.UnitFormatPipe],
  styles: [".product-card[_ngcontent-%COMP%] {\n  background-color: #fdf6eb;\n  color: black;\n  font-family: \"Pacifico\", cursive;\n  height: 100%;\n  width: 80%;\n}\n\n.product-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.mat-card-image[_ngcontent-%COMP%] {\n  object-fit: contain;\n  max-height: 290px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjZlYjtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgY3Vyc2l2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODAlO1xufVxuXG4ucHJvZHVjdC1jYXJkOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0LWNhcmQtaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXgtaGVpZ2h0OiAyOTBweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/until-destroy */ 2777);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_nft_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/nft.service */ 3238);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../product/product.component */ 3995);









function ProductsComponent_app_product_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-product", 2);
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nft", p_r1);
  }
}
let ProductsComponent = class ProductsComponent {
  constructor(nftService) {
    this.nftService = nftService;
    this.products$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
  }
  ngOnInit() {
    this.nftService.getByCollection(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.collection).pipe((0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.untilDestroyed)(this)).subscribe(this.products$);
  }
};
ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
  return new (t || ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_nft_service__WEBPACK_IMPORTED_MODULE_1__.NftService));
};
ProductsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProductsComponent,
  selectors: [["app-products"]],
  decls: 4,
  vars: 7,
  consts: [["fxLayout", "row", "fxLayout.xs", "column", "fxLayoutAlign", "center"], [3, "nft", 4, "ngFor", "ngForOf"], [3, "nft"]],
  template: function ProductsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProductsComponent_app_product_1_Template, 1, 1, "app-product", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 5, ctx.products$), 0, 3));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _product_product_component__WEBPACK_IMPORTED_MODULE_2__.ProductComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.SlicePipe],
  styles: ["ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});
ProductsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_5__.UntilDestroy)()], ProductsComponent);


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
  collection: '0x5427acc3b31ee211caffb35ddd276c75ceff82ef'
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