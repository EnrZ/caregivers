(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div name = \"bodydiv\">\n<app-headnav></app-headnav>\n\n<div class=\"container-fluid py-3\" >\n    <div class=\"row my-3\">\n      <div class=\"col\">\n        <label for=\"exampleFormControlInput1\" class=\"form-label\">Email address</label>\n        <input type=\"email\" class=\"form-control form-control-sm\" id=\"exampleFormControlInput1\" placeholder=\"name@example.com\">\n      </div>\n    </div>\n    <div class=\"row my-3\">\n      <div class=\"col\">\n        <label for=\"exampleFormControlTextarea1\" class=\"form-label\">Example textarea</label>\n        <textarea class=\"form-control form-control-sm\" id=\"exampleFormControlTextarea1\" rows=\"3\"></textarea>\n      </div>\n    </div>\n    <div class=\"row my-3\">\n      <div class=\"col\">\n        <div class=\"form-check form-switch\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"flexSwitchCheckDefault\">\n          <label class=\"form-check-label\" for=\"flexSwitchCheckDefault\">Default switch checkbox input</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"row my-3\">\n      <div class=\"col\">\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"open(demoModal)\">Launch demo modal</button>\n      </div>\n    </div>\n  </div>\n  \n  <ng-template #demoModal let-modal>\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Profile update</h4>\n      <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\"></button>\n    </div>\n    <div class=\"modal-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"dateOfBirth\">Date of birth</label>\n          <div class=\"input-group\">\n            <input id=\"dateOfBirth\" name=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\">\n            <button type=\"button\" class=\"btn btn-outline-secondary bi bi-calendar\" (click)=\"dp.toggle()\"></button>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.close('Save click')\">Save</button>\n    </div>\n  </ng-template>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bootdrop/bootdrop.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bootdrop/bootdrop.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\n\t<li [ngbNavItem]=\"1\">\n\t\t<a ngbNavLink>Mission Statement</a>\n\t\t<ng-template ngbNavContent>\n\t\t <p> Company mission statement here</p>\n\t\t\t<img src=\"http://placehold.it/900x300\" class=\"img-fluid\">\n\t\t \n\t\t\t<br />\n\t\t \n\t\t</ng-template>\n\t</li>\n\t<li [ngbNavItem]=\"2\">\n\t\t<a ngbNavLink>What We Do</a>\n\t\t<ng-template ngbNavContent>\n\t\t\t<p>\n\t\t\t\tOur experienced and compassionate caregivers are commited to providing great care to sensure that you or your family member is being well cared for while helping them to remain independent at home. We offer help to seniors by providing services that are designed to help them live independently in their homes and communities.\nTakes advantage of our affordable rate services while recieving the best services for your loved one. Whether you need part time or around the clock help, we are here to offer care based on your specific needs.\nWe offer an individual care plan for your loved one.  The plan will be reviwed and updated based on your changing needs.\n\t\t\t</p>\n\t\t\t<p>We fully recognize your right to dignity and individuality in the care of your personal needs.Our patients are very important to us. Please let us know if you have any questions regarding our service to ensure that we meet your needs and expectations.\n\t\t\t\tOur experience caregivers offer help with bathing, housekeeping, laundry, hygience, dressing, toileting, mobility, transportation, medicationm reminders, pet care and more services that depend on your specific needs. We will be pleased to have the chance to provide care for you or your loved one.</p>\n\t\t</ng-template>\n\t</li>\n\t<li [ngbNavItem]=\"3\">\n\t\t<a ngbNavLink>Contact Us</a>\n\t\t<ng-template ngbNavContent>\n\t\t\t<p>\n\t\t\t\tSed commodo, leo at suscipit dictum, quam est porttitor sapien, eget sodales nibh elit id diam. Nulla facilisi.\n\t\t\t\tDonec egestas ligula vitae odio interdum aliquet. Duis lectus turpis, luctus eget tincidunt eu, congue et odio.\n\t\t\t\tDuis pharetra et nisl at faucibus. Quisque luctus pulvinar arcu, et molestie lectus ultrices et. Sed diam urna,\n\t\t\t\tegestas ut ipsum vel, volutpat volutpat neque. Praesent fringilla tortor arcu. Vivamus faucibus nisl enim, nec\n\t\t\t\ttristique ipsum euismod facilisis. Morbi ut bibendum est, eu tincidunt odio. Orci varius natoque penatibus et\n\t\t\t\tmagnis dis parturient montes, nascetur ridiculus mus. Mauris aliquet odio ac lorem aliquet ultricies in eget\n\t\t\t\tneque. Phasellus nec tortor vel tellus pulvinar feugiat.\n\t\t\t</p>\n\t\t</ng-template>\n\t</li>\n</ul>\n\n<div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n<pre>Active: {{ active }}</pre>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/headnav/headnav.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/headnav/headnav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n\t<div class =\"p-5 mb-4 bg-light rounded-3\" name=\"head\">\n        <div class=\"container-fluid py-5\">\n          <div class=\"text-center\"> <h1>St. Louis Angelic Caregivers</h1></div>\n</div></div>\n\n<div id=\"myCarousel\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n  <div class=\"carousel-indicators\">\n    <button type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\n    <button type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\n    <button type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide-to=\"2\" aria-label=\"Slide 3\"></button>\n  </div>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"><rect width=\"100%\" height=\"100%\" fill=\"#ffffff\"/></svg>\n\n      <div class=\"container\">\n        <div class=\"carousel-caption text-start\">\n          <p>Some representative placeholder content for the first slide of the carousel.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n      <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"><rect width=\"100%\" height=\"100%\" fill=\"#ffffff\"/></svg>\n\n      <div class=\"container\">\n        <div class=\"carousel-caption\">\n          <p>Some representative placeholder content for the second slide of the carousel.</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"carousel-item\">\n  <!carousel background color was here while font color is done in css>\n      <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\"><rect width=\"100%\" height=\"100%\" fill=\"#ffffff\"/></svg>\n\n      <div class=\"container\">\n        <div class=\"carousel-caption text-end\">\n          <p>Some representative placeholder content for the third slide of this carousel.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"visually-hidden\">Previous</span>\n  </button>\n  <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"visually-hidden\">Next</span>\n  </button>\n</div>\n\n<div name =\"angbar\">\n  \n  <app-bootdrop></app-bootdrop>\n  </div>"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
    }
    AppComponent.prototype.open = function (modal) {
        this.modalService.open(modal);
    };
    AppComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _headnav_headnav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./headnav/headnav.component */ "./src/app/headnav/headnav.component.ts");
/* harmony import */ var _bootdrop_bootdrop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bootdrop/bootdrop.component */ "./src/app/bootdrop/bootdrop.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _headnav_headnav_component__WEBPACK_IMPORTED_MODULE_4__["HeadnavComponent"],
                _bootdrop_bootdrop_component__WEBPACK_IMPORTED_MODULE_5__["BootdropComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bootdrop/bootdrop.component.css":
/*!*************************************************!*\
  !*** ./src/app/bootdrop/bootdrop.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb3Rkcm9wL2Jvb3Rkcm9wLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bootdrop/bootdrop.component.ts":
/*!************************************************!*\
  !*** ./src/app/bootdrop/bootdrop.component.ts ***!
  \************************************************/
/*! exports provided: BootdropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootdropComponent", function() { return BootdropComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BootdropComponent = /** @class */ (function () {
    function BootdropComponent() {
    }
    BootdropComponent.prototype.ngOnInit = function () {
    };
    BootdropComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bootdrop',
            template: __webpack_require__(/*! raw-loader!./bootdrop.component.html */ "./node_modules/raw-loader/index.js!./src/app/bootdrop/bootdrop.component.html"),
            styles: [__webpack_require__(/*! ./bootdrop.component.css */ "./src/app/bootdrop/bootdrop.component.css")]
        })
    ], BootdropComponent);
    return BootdropComponent;
}());



/***/ }),

/***/ "./src/app/headnav/headnav.component.css":
/*!***********************************************!*\
  !*** ./src/app/headnav/headnav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\nbody {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    /*color: #5a5a5a; */\n  }\n/* CUSTOMIZE THE CAROUSEL\n  -------------------------------------------------- */\n/* Carousel base class */\n.carousel {\n    margin-bottom: 4rem;\n  }\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n    bottom: 3rem;\n    z-index: 10;\n  }\n/* Declare heights because of positioning of img element */\n.carousel-item {\n    height: 16rem;\n  }\n.carousel-item > img {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-width: 100%;\n    height: 16rem;\n  }\n/* MARKETING CONTENT\n  -------------------------------------------------- */\n/* Center align the text within the three columns below the carousel */\n.marketing .col-lg-4 {\n    margin-bottom: 1.5rem;\n    text-align: center;\n  }\n.marketing h2 {\n    font-weight: 400;\n  }\n/* rtl:begin:ignore */\n.marketing .col-lg-4 p {\n    margin-right: .75rem;\n    margin-left: .75rem;\n  }\n/* rtl:end:ignore */\n/* Featurettes\n  ------------------------- */\n.featurette-divider {\n    margin: 5rem 0; /* Space out the Bootstrap <hr> more */\n  }\n/* Thin out the marketing headings */\n.featurette-heading {\n    font-weight: 300;\n    line-height: 1;\n    /* rtl:remove */\n    letter-spacing: -.05rem;\n  }\n/* RESPONSIVE CSS\n  -------------------------------------------------- */\n@media (min-width: 40em) {\n    /* Bump up size of carousel content */\n    .carousel-caption p {\n      margin-bottom: 1.25rem;\n      font-size: 1.25rem;\n      line-height: 1.4;\n      color: black;\n    }\n  \n    .carousel-caption h1 {\n        color: black;\n    }\n    \n    \n   /*The location of this matters, when carousel-control etc. were lower in the css, the arrows wouldnt\n   show up when the website was in its mobile version*/ \n   \n    .carousel-control-next,\n  .carousel-control-prev /*, .carousel-indicators */ {\n      -webkit-filter: invert(100%);\n              filter: invert(100%);\n  }\n  \n    .featurette-heading {\n      font-size: 50px;\n    }\n  }\n@media (min-width: 62em) {\n    .featurette-heading {\n      margin-top: 7rem;\n    }\n    \n  }\nh1 {\n    font-size: 70px;\n  }\ndiv[name=\"head\"] {\n    background-image: linear-gradient(to right,teal, pink);\n    color: white;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZG5hdi9oZWFkbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7b0RBQ29EO0FBQ3BELG1EQUFtRDtBQUVuRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0VBQ3JCO0FBR0E7c0RBQ29EO0FBRXBELHdCQUF3QjtBQUN4QjtJQUNFLG1CQUFtQjtFQUNyQjtBQUNBLGlFQUFpRTtBQUNqRTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFFQSwwREFBMEQ7QUFDMUQ7SUFDRSxhQUFhO0VBQ2Y7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGVBQWU7SUFDZixhQUFhO0VBQ2Y7QUFHQTtzREFDb0Q7QUFFcEQsc0VBQXNFO0FBQ3RFO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0EscUJBQXFCO0FBQ3JCO0lBQ0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtFQUNyQjtBQUNBLG1CQUFtQjtBQUduQjs2QkFDMkI7QUFFM0I7SUFDRSxjQUFjLEVBQUUsc0NBQXNDO0VBQ3hEO0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCO0FBR0E7c0RBQ29EO0FBRXBEO0lBQ0UscUNBQXFDO0lBQ3JDO01BQ0Usc0JBQXNCO01BQ3RCLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsWUFBWTtJQUNkOztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7O0dBR0Q7c0RBQ21EOztJQUVsRDs7TUFFRSw0QkFBb0I7Y0FBcEIsb0JBQW9CO0VBQ3hCOztJQUVFO01BQ0UsZUFBZTtJQUNqQjtFQUNGO0FBRUE7SUFDRTtNQUNFLGdCQUFnQjtJQUNsQjs7RUFFRjtBQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUVBO0lBQ0Usc0RBQXNEO0lBQ3RELFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2hlYWRuYXYvaGVhZG5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogR0xPQkFMIFNUWUxFU1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIFBhZGRpbmcgYmVsb3cgdGhlIGZvb3RlciBhbmQgbGlnaHRlciBib2R5IHRleHQgKi9cblxuYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDNyZW07XG4gICAgLypjb2xvcjogIzVhNWE1YTsgKi9cbiAgfVxuICBcbiAgXG4gIC8qIENVU1RPTUlaRSBUSEUgQ0FST1VTRUxcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgXG4gIC8qIENhcm91c2VsIGJhc2UgY2xhc3MgKi9cbiAgLmNhcm91c2VsIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICB9XG4gIC8qIFNpbmNlIHBvc2l0aW9uaW5nIHRoZSBpbWFnZSwgd2UgbmVlZCB0byBoZWxwIG91dCB0aGUgY2FwdGlvbiAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgYm90dG9tOiAzcmVtO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIFxuICAvKiBEZWNsYXJlIGhlaWdodHMgYmVjYXVzZSBvZiBwb3NpdGlvbmluZyBvZiBpbWcgZWxlbWVudCAqL1xuICAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgaGVpZ2h0OiAxNnJlbTtcbiAgfVxuICAuY2Fyb3VzZWwtaXRlbSA+IGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE2cmVtO1xuICB9XG4gIFxuICBcbiAgLyogTUFSS0VUSU5HIENPTlRFTlRcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgXG4gIC8qIENlbnRlciBhbGlnbiB0aGUgdGV4dCB3aXRoaW4gdGhlIHRocmVlIGNvbHVtbnMgYmVsb3cgdGhlIGNhcm91c2VsICovXG4gIC5tYXJrZXRpbmcgLmNvbC1sZy00IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tYXJrZXRpbmcgaDIge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cbiAgLyogcnRsOmJlZ2luOmlnbm9yZSAqL1xuICAubWFya2V0aW5nIC5jb2wtbGctNCBwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcbiAgICBtYXJnaW4tbGVmdDogLjc1cmVtO1xuICB9XG4gIC8qIHJ0bDplbmQ6aWdub3JlICovXG4gIFxuICBcbiAgLyogRmVhdHVyZXR0ZXNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICBcbiAgLmZlYXR1cmV0dGUtZGl2aWRlciB7XG4gICAgbWFyZ2luOiA1cmVtIDA7IC8qIFNwYWNlIG91dCB0aGUgQm9vdHN0cmFwIDxocj4gbW9yZSAqL1xuICB9XG4gIFxuICAvKiBUaGluIG91dCB0aGUgbWFya2V0aW5nIGhlYWRpbmdzICovXG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgLyogcnRsOnJlbW92ZSAqL1xuICAgIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xuICB9XG4gIFxuICBcbiAgLyogUkVTUE9OU0lWRSBDU1NcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgLyogQnVtcCB1cCBzaXplIG9mIGNhcm91c2VsIGNvbnRlbnQgKi9cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgXG4gICAgLmNhcm91c2VsLWNhcHRpb24gaDEge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuICAgIFxuICAgIFxuICAgLypUaGUgbG9jYXRpb24gb2YgdGhpcyBtYXR0ZXJzLCB3aGVuIGNhcm91c2VsLWNvbnRyb2wgZXRjLiB3ZXJlIGxvd2VyIGluIHRoZSBjc3MsIHRoZSBhcnJvd3Mgd291bGRudFxuICAgc2hvdyB1cCB3aGVuIHRoZSB3ZWJzaXRlIHdhcyBpbiBpdHMgbW9iaWxlIHZlcnNpb24qLyBcbiAgIFxuICAgIC5jYXJvdXNlbC1jb250cm9sLW5leHQsXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYgLyosIC5jYXJvdXNlbC1pbmRpY2F0b3JzICovIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICB9XG4gIFxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDYyZW0pIHtcbiAgICAuZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgICAgIG1hcmdpbi10b3A6IDdyZW07XG4gICAgfVxuICAgIFxuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgfVxuXG4gIGRpdltuYW1lPVwiaGVhZFwiXSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHRlYWwsIHBpbmspO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/headnav/headnav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/headnav/headnav.component.ts ***!
  \**********************************************/
/*! exports provided: HeadnavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadnavComponent", function() { return HeadnavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadnavComponent = /** @class */ (function () {
    function HeadnavComponent() {
    }
    HeadnavComponent.prototype.ngOnInit = function () {
    };
    HeadnavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-headnav',
            template: __webpack_require__(/*! raw-loader!./headnav.component.html */ "./node_modules/raw-loader/index.js!./src/app/headnav/headnav.component.html"),
            styles: [__webpack_require__(/*! ./headnav.component.css */ "./src/app/headnav/headnav.component.css")]
        })
    ], HeadnavComponent);
    return HeadnavComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/e/Javascript/caregivers/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map