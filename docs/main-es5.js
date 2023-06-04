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

module.exports = "<div name = \"all\">\n\n  <app-bootdrop></app-bootdrop>\n  <div class = \"row flex-lg-row-reverse align-items-centerv\">\n    <div class=\"col-lg-6\">\n      <div name = \"carousel\">\n        <app-carousel></app-carousel>\n      </div>\n    </div>\n  <div class=\"col-lg-6\">\n    <div name = \"bodydiv\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <app-footer></app-footer>\n  </div>\n\n  \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apply/apply.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apply/apply.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" style=\"border:1px solid #ddd;\">\n\nTo apply to work for Saint Louis Angelic Caregivers, download and fill out the\n<code><a target=\"_self\" href=\"../../assets/AngelCareApplication.pdf\" download=\"AngelCareApplication.pdf\">this</a> </code>\npdf.\n\nEmail the completed file to <code>apply@stlangelcare.com</code>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bootdrop/bootdrop.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bootdrop/bootdrop.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div class=\"container\">\n\t<ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-pills\" name=\"tabs\">\n\t\t<li [ngbNavItem]=\"1\">\n\t\t\t<a ngbNavLink>What We Do</a>\n\t\t\t<ng-template ngbNavContent>\n\t\t\t\t<app-what-we-do-exp></app-what-we-do-exp>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"2\">\n\t\t\t<a ngbNavLink>Contact Us</a>\n\t\t\t<ng-template ngbNavContent>\n\t\t\t\t<app-contact-us></app-contact-us>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"3\">\n\t\t\t<a ngbNavLink>Value</a>\n\t\t\t<ng-template ngbNavContent>\n\t\t\t\t<app-value></app-value>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"4\">\n\t\t\t<a ngbNavLink>Vision</a>\n\t\t\t<ng-template ngbNavContent>\n\t\t\t<app-vision></app-vision>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"5\">\n\t\t\t<a ngbNavLink>Mission</a>\n\t\t\t<ng-template ngbNavContent>\t\t\n\t\t\t\t<app-mission-statement></app-mission-statement>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"6\">\n\t\t\t<a ngbNavLink>Apply</a>\n\t\t\t<ng-template ngbNavContent>\t\t\n\t\t\t\t<app-apply></app-apply>\n\t\t\t</ng-template>\n\t\t</li>\n\t</ul>\n\n\n\n\t<div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n</div-->\n\n\t<nav class=\"navbar navbar-expand-lg navbar-light p-3 rounded-3\" style=\"background-image: linear-gradient(to right,teal, rgb(166,139,158));\">\n\t\t<a class=\"navbar-brand\" >St. Louis Angelic Caregivers</a>\n\t\t\t\t<!-- Step 3: Toggle the value of the property when the toggler button is clicked. -->\n\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" (click)=\"isMenuCollapsed = !isMenuCollapsed\">&#9776;</button>\n\n\t\t\t\t<!-- Step 2: Add the ngbCollapse directive to the element below. -->\n\t\t\t\t<div [ngbCollapse]=\"isMenuCollapsed\" class=\"collapse navbar-collapse\">\n\t\t\t\t\t<ul class=\"navbar-nav\">\n\t\t\t<li class=\"nav-item active\">\n\t\t\t  <a routerLink=\"home\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">What We Do</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t  <a [routerLink]=\"['/contact']\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Contact Us</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a [routerLink]=\"['/value']\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Value</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"nav-item\">\n\t\t\t\t<a [routerLink]=\"['/mission']\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Mission Statement</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"nav-item\">\n\t\t\t\t<a [routerLink]=\"['/vision']\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Vision</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"nav-item\">\n\t\t\t\t<a [routerLink]=\"['/apply']\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Job Application</a>\n\t\t\t  </li>\n\t\t  </ul>\n\t\t</div>\n\t  </nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n    <div class=\"carousel-indicators\">\n      <button type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\n      <button type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\n    </div>\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <div class=\"d-flex justify-content-center\"><img src=\"assets/20230307_160528_sized.jpg\" alt=\"care pic 1\"></div>\n        <div class=\"carousel-caption\">\n          <p> Dedicated to elderly care </p>\n        </div>\n        \n      </div>\n      <div class=\"carousel-item\">\n        <div class=\"d-flex justify-content-center\"><img src=\"assets/20230424_073207.jpg\" alt=\"care pic 2\"></div>\n      \n        <div class=\"carousel-caption\">\n          <p> 10+ years of experience </p>\n        </div>\n         \n      </div>\n     \n\n      <!--  d-none d-md blocks previous and next carousel buttons disappear for mobile\n      removed altogether for now with d-block after the images were realigned and no longer centered-->\n    <button class=\"d-none d-block carousel-control-prev\" type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide=\"prev\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"visually-hidden\">Previous</span>\n    </button>\n    <button class=\"d-none d-md-block carousel-control-next\" type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide=\"next\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"visually-hidden\">Next</span>\n    </button>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-form/contact-form.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-form/contact-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper container -->\n<div class=\"container py-4\">\n\n    <form [formGroup]=\"FormData\" (ngSubmit)=\"onSubmit(FormData.value)\">\n  \n      <div class=\"form-group\">\n      <!-- Name input -->\n      <div class=\"mb-3\">\n        <label class=\"form-label\" for=\"name\">Name</label>\n        <input class=\"form-control\" id=\"name\" type=\"text\" placeholder=\"Name\" \n        name=\"EmailerName\" formControlName=\"EmailerName\"/>\n      </div>\n  \n      <!-- Email address input -->\n      <div class=\"mb-3\">\n        <label class=\"form-label\" for=\"emailAddress\">Email Address</label>\n        <input class=\"form-control\" id=\"emailAddress\" type=\"email\" placeholder=\"Email Address\"\n        name=\"Email\" formControlName=\"Email\" />\n      </div>\n  \n      <!-- Message input -->\n      <div class=\"mb-3\">\n        <label class=\"form-label\" for=\"message\">Message</label>\n        <textarea class=\"form-control\" id=\"message\" type=\"text\" \n        name=\"Message\" formControlName=\"Message\" style=\"height: 10rem;\"></textarea>\n      </div>\n  \n      <!-- Form submit button -->\n      <div class=\"d-grid\">\n        <button class=\"btn btn-primary btn-lg\" type=\"submit\" [disabled]=\"!FormData.valid\">Submit</button>\n      </div>\n    </div>\n    </form>\n  \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" style=\"border:1px solid #ddd;\">\n    24 hours a day, seven days a week.\n    <br>\n    <br>\n    Schedule your Home Care Assessment by calling or using the contact form below\n    <br>\n    <br>\n    Phone Number: (314) 601-4345\n    <br>\n    <br>\n    <app-contact-form></app-contact-form>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"footer-bottom\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <!--text-center aligned center for all viewport sizes-->\n              <p class=\"text-center\"> &#169; Saint Louis Angelic Caregivers LLC</p>\n            </div>\n          </div>\n        </div>\n      </div>\n  \n    <button type = \"button\" class=\"btn btn-success\" *ngIf=\"isShow\" (click)=\"gotoTop()\"> &uarr; Go Back To Top</button>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/headnav/headnav.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/headnav/headnav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class =\"p-3 bg-light rounded-3\" name=\"head\">\n        <div class=\"container-fluid\">\n          <div class=\"text-center\"> <h1>St.Louis Angelic Caregivers</h1></div>\n</div></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/mission-statement/mission-statement.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/mission-statement/mission-statement.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" style=\"border:1px solid #ddd;\">\nWe strive to offer the highest level of professionalism, services, and support to our clients in order that our clients live independently.\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/value/value.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/value/value.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" style=\"border:1px solid #ddd;\">\n    \n        Integrity - we establish and preserve trust with all clients by applying our knowledge and skills fairly.\n     <br>\n     <br>\n        Professionalism- we are knowledgeable, accurate, conscientious, innovative, and service-oriented.\n     <br>\n     <br>\n        Respect- We interact with people in a way that makes them feel heard and valued. We Listen and respond wholeheartedly.\n     <br>\n     <br>\n        Collaboration- We recognize and act on opportunities to work together to deliver our company’s best. We consult, and share ideas, fostering innovation to improve the service experience, both internally and externally.\n     \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vision/vision.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vision/vision.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\" style=\"border:1px solid #ddd;\">\nPeople of different generations are heard, valued, and cared for. Our vision is to become a great trusted name and home care provider of choice in the St. Louis area. Our experienced and dedicated caregivers will continue to promote well-being through support and active daily interation with our clients and their relatives.\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/what-we-do-exp/what-we-do-exp.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/what-we-do-exp/what-we-do-exp.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container\" style=\"border:1px solid #ddd;\">\n    \n    Our experienced and compassionate caregivers are commited to providing great care to sensure that you or your family member is being well cared for while helping them to remain independent at home. We offer help to seniors by providing services that are designed to help them live independently in their homes and communities.\nTakes advantage of our affordable rate services while recieving the best services for your loved one.\n<br> <br> Whether you need part time or around the clock help, we are here to offer care based on your specific needs.\nWe offer an individual care plan for your loved one.  The plan will be reviwed and updated based on your changing needs.\n<br>\nWe fully recognize your right to dignity and individuality in the care of your personal needs. <br> <br> Our clients are very important to us. Please let us know if you have any questions regarding our service to ensure that we meet your needs and expectations.\n    Our experience caregivers offer help with: <br> <ul><li>bathing</li> <li>housekeeping</li> <li>laundry</li> <li>hygiene</li> <li>dressing</li> <li>toileting</li> <li>mobility</li> <li>transportation</li> <li>medication reminders</li> <li>pet care</li> <li>more services that depend on your specific needs</li></ul>We will be pleased to have the chance to provide care for you or your loved one.\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _what_we_do_exp_what_we_do_exp_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./what-we-do-exp/what-we-do-exp.component */ "./src/app/what-we-do-exp/what-we-do-exp.component.ts");
/* harmony import */ var _mission_statement_mission_statement_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mission-statement/mission-statement.component */ "./src/app/mission-statement/mission-statement.component.ts");
/* harmony import */ var _value_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./value/value.component */ "./src/app/value/value.component.ts");
/* harmony import */ var _vision_vision_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vision/vision.component */ "./src/app/vision/vision.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _apply_apply_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./apply/apply.component */ "./src/app/apply/apply.component.ts");









var routes = [
    { path: '', component: _what_we_do_exp_what_we_do_exp_component__WEBPACK_IMPORTED_MODULE_3__["WhatWeDoExpComponent"] },
    { path: 'home', component: _what_we_do_exp_what_we_do_exp_component__WEBPACK_IMPORTED_MODULE_3__["WhatWeDoExpComponent"] },
    { path: 'contact', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"] },
    { path: 'mission', component: _mission_statement_mission_statement_component__WEBPACK_IMPORTED_MODULE_4__["MissionStatementComponent"] },
    { path: 'value', component: _value_value_component__WEBPACK_IMPORTED_MODULE_5__["ValueComponent"] },
    { path: 'vision', component: _vision_vision_component__WEBPACK_IMPORTED_MODULE_6__["VisionComponent"] },
    { path: 'apply', component: _apply_apply_component__WEBPACK_IMPORTED_MODULE_8__["ApplyComponent"] },
];
/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div[name=\"bodydiv\"] {\n    font-size: 22px;\n    padding-top:2%;\n  }\n\n  \ndiv[name=\"all\"] {\n  background-color: rgb(226,228,255) ;\n}\n\n  \n/*div[name=\"carousel\"]{\n  background-color: rgb(228, 200, 224);\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7O0FBR0Y7RUFDRSxtQ0FBbUM7QUFDckM7OztBQUVBOztFQUVFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbbmFtZT1cImJvZHlkaXZcIl0ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBwYWRkaW5nLXRvcDoyJTtcbiAgfVxuXG4gIFxuZGl2W25hbWU9XCJhbGxcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LDIyOCwyNTUpIDtcbn1cblxuLypkaXZbbmFtZT1cImNhcm91c2VsXCJde1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LCAyMDAsIDIyNCk7XG59Ki8iXX0= */"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _what_we_do_exp_what_we_do_exp_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./what-we-do-exp/what-we-do-exp.component */ "./src/app/what-we-do-exp/what-we-do-exp.component.ts");
/* harmony import */ var _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact-form/contact-form.component */ "./src/app/contact-form/contact-form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _mission_statement_mission_statement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mission-statement/mission-statement.component */ "./src/app/mission-statement/mission-statement.component.ts");
/* harmony import */ var _value_value_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./value/value.component */ "./src/app/value/value.component.ts");
/* harmony import */ var _vision_vision_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vision/vision.component */ "./src/app/vision/vision.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/carousel/carousel.component.ts");
/* harmony import */ var _apply_apply_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./apply/apply.component */ "./src/app/apply/apply.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");



//import { NgAnimate } from @angular/



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _headnav_headnav_component__WEBPACK_IMPORTED_MODULE_4__["HeadnavComponent"],
                _bootdrop_bootdrop_component__WEBPACK_IMPORTED_MODULE_5__["BootdropComponent"],
                _what_we_do_exp_what_we_do_exp_component__WEBPACK_IMPORTED_MODULE_9__["WhatWeDoExpComponent"],
                _contact_form_contact_form_component__WEBPACK_IMPORTED_MODULE_10__["ContactFormComponent"],
                _mission_statement_mission_statement_component__WEBPACK_IMPORTED_MODULE_12__["MissionStatementComponent"],
                _value_value_component__WEBPACK_IMPORTED_MODULE_13__["ValueComponent"],
                _vision_vision_component__WEBPACK_IMPORTED_MODULE_14__["VisionComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"],
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_16__["CarouselComponent"],
                _apply_apply_component__WEBPACK_IMPORTED_MODULE_17__["ApplyComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"]
                // RouterModule.forRoot(routes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/apply/apply.component.css":
/*!*******************************************!*\
  !*** ./src/app/apply/apply.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    min-height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHkvYXBwbHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FwcGx5L2FwcGx5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/apply/apply.component.ts":
/*!******************************************!*\
  !*** ./src/app/apply/apply.component.ts ***!
  \******************************************/
/*! exports provided: ApplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyComponent", function() { return ApplyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ApplyComponent = /** @class */ (function () {
    function ApplyComponent() {
    }
    ApplyComponent.prototype.ngOnInit = function () {
    };
    ApplyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apply',
            template: __webpack_require__(/*! raw-loader!./apply.component.html */ "./node_modules/raw-loader/index.js!./src/app/apply/apply.component.html"),
            styles: [__webpack_require__(/*! ./apply.component.css */ "./src/app/apply/apply.component.css")]
        })
    ], ApplyComponent);
    return ApplyComponent;
}());



/***/ }),

/***/ "./src/app/bootdrop/bootdrop.component.css":
/*!*************************************************!*\
  !*** ./src/app/bootdrop/bootdrop.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.container{\n  padding-top:2%;\n  font-size: 22px;\n}*/\n\ndiv[name=\"tabs\"] {\n    font-size: 20px;\n  }\n\n::ng-deep .nav-pills a.nav-link.active, \n::ng-deep .nav-pills .show > a.nav-link {\n  color:white;\n  background-color: teal;\n}\n\n:ng-deep .navbar a.nav-link.active, \n::ng-deep .navbar .show > a.nav-link {\n  background-color:teal;\n}\n\nh1{\n  font-size:30px;\n}\n\n.navbar a.nav-link:hover {\n  font-weight:bolder;\n}\n\na.nav-link{\n  font-size:20px;\n  color:white;\n}\n\ncollapse ul li a { color:white }\n\n.navbar-brand { color:white }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vdGRyb3AvYm9vdGRyb3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0U7O0FBRUY7SUFDSSxlQUFlO0VBQ2pCOztBQUVBOztFQUVBLFdBQVc7RUFDWCxzQkFBc0I7QUFDeEI7O0FBQ0E7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBQ0EsbUJBQW1CLFlBQVk7O0FBQUMsZ0JBQWdCLFlBQVkiLCJmaWxlIjoic3JjL2FwcC9ib290ZHJvcC9ib290ZHJvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouY29udGFpbmVye1xuICBwYWRkaW5nLXRvcDoyJTtcbiAgZm9udC1zaXplOiAyMnB4O1xufSovXG5cbmRpdltuYW1lPVwidGFic1wiXSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgOjpuZy1kZWVwIC5uYXYtcGlsbHMgYS5uYXYtbGluay5hY3RpdmUsIFxuOjpuZy1kZWVwIC5uYXYtcGlsbHMgLnNob3cgPiBhLm5hdi1saW5rIHtcbiAgY29sb3I6d2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XG59XG46bmctZGVlcCAubmF2YmFyIGEubmF2LWxpbmsuYWN0aXZlLCBcbjo6bmctZGVlcCAubmF2YmFyIC5zaG93ID4gYS5uYXYtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6dGVhbDtcbn1cblxuaDF7XG4gIGZvbnQtc2l6ZTozMHB4O1xufVxuLm5hdmJhciBhLm5hdi1saW5rOmhvdmVyIHtcbiAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xufVxuYS5uYXYtbGlua3tcbiAgZm9udC1zaXplOjIwcHg7XG4gIGNvbG9yOndoaXRlO1xufVxuY29sbGFwc2UgdWwgbGkgYSB7IGNvbG9yOndoaXRlIH0ubmF2YmFyLWJyYW5kIHsgY29sb3I6d2hpdGUgfSJdfQ== */"

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
        this.isMenuCollapsed = true;
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

/***/ "./src/app/carousel/carousel.component.css":
/*!*************************************************!*\
  !*** ./src/app/carousel/carousel.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\nbody {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    /*color: #5a5a5a; */\n  }\n/* CUSTOMIZE THE CAROUSEL\n  -------------------------------------------------- */\n/* Since positioning the image, we need to help out the caption */\n/* Declare heights because of positioning of img element */\n.carousel-item {\n  //padding-bottom: 2%;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  min-height: 250px;\n  }\n/* MARKETING CONTENT\n  -------------------------------------------------- */\n/* Center align the text within the three columns below the carousel */\n/* Featurettes\n  ------------------------- */\n/* RESPONSIVE CSS\n  -------------------------------------------------- */\n@media (min-width: 1em) {\n    /* Bump up size of carousel content */\n    .carousel-caption p {\n      margin-bottom: 1.25rem;\n      font-size: 1.5rem;\n      line-height: 35;\n      color: white;\n      font-weight: bold;\n    }\n  \n    .carousel-caption h1 {\n        color: black;\n    }\n \n    \n    \n   /*The location of this matters, when carousel-control etc. were lower in the css, the arrows wouldnt\n   show up when the website was in its mobile version*/ \n    .carousel-control-next,\n  .carousel-control-prev /*, .carousel-indicators */ {\n      -webkit-filter: invert(100%);\n              filter: invert(100%);\n  }\n  \n    .featurette-heading {\n      font-size: 50px;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtvREFDb0Q7QUFDcEQsbURBQW1EO0FBRW5EO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7QUFHQTtzREFDb0Q7QUFFcEQsaUVBQWlFO0FBR2pFLDBEQUEwRDtBQUMxRDtFQUNBLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixpQkFBaUI7RUFDakI7QUFFQTtzREFDb0Q7QUFFcEQsc0VBQXNFO0FBSXRFOzZCQUMyQjtBQUkzQjtzREFDb0Q7QUFFcEQ7SUFDRSxxQ0FBcUM7SUFDckM7TUFDRSxzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZixZQUFZO01BQ1osaUJBQWlCO0lBQ25COztJQUVBO1FBQ0ksWUFBWTtJQUNoQjs7OztHQUlEO3NEQUNtRDtJQUNsRDs7TUFFRSw0QkFBb0I7Y0FBcEIsb0JBQW9CO0VBQ3hCOztJQUVFO01BQ0UsZUFBZTtJQUNqQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdMT0JBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBQYWRkaW5nIGJlbG93IHRoZSBmb290ZXIgYW5kIGxpZ2h0ZXIgYm9keSB0ZXh0ICovXG5cbmJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIC8qY29sb3I6ICM1YTVhNWE7ICovXG4gIH1cbiAgXG4gIFxuICAvKiBDVVNUT01JWkUgVEhFIENBUk9VU0VMXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIFxuICAvKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cblxuICBcbiAgLyogRGVjbGFyZSBoZWlnaHRzIGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cbiAgLmNhcm91c2VsLWl0ZW0ge1xuICAvL3BhZGRpbmctYm90dG9tOiAyJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgfVxuICBcbiAgLyogTUFSS0VUSU5HIENPTlRFTlRcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgXG4gIC8qIENlbnRlciBhbGlnbiB0aGUgdGV4dCB3aXRoaW4gdGhlIHRocmVlIGNvbHVtbnMgYmVsb3cgdGhlIGNhcm91c2VsICovXG5cbiAgXG4gIFxuICAvKiBGZWF0dXJldHRlc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gXG4gIFxuICBcbiAgLyogUkVTUE9OU0lWRSBDU1NcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxZW0pIHtcbiAgICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDM1O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICBcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBoMSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gXG4gICAgXG4gICAgXG4gICAvKlRoZSBsb2NhdGlvbiBvZiB0aGlzIG1hdHRlcnMsIHdoZW4gY2Fyb3VzZWwtY29udHJvbCBldGMuIHdlcmUgbG93ZXIgaW4gdGhlIGNzcywgdGhlIGFycm93cyB3b3VsZG50XG4gICBzaG93IHVwIHdoZW4gdGhlIHdlYnNpdGUgd2FzIGluIGl0cyBtb2JpbGUgdmVyc2lvbiovIFxuICAgIC5jYXJvdXNlbC1jb250cm9sLW5leHQsXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYgLyosIC5jYXJvdXNlbC1pbmRpY2F0b3JzICovIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICB9XG4gIFxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgIH1cbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/carousel/carousel.component.ts":
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
    };
    CarouselComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__(/*! raw-loader!./carousel.component.html */ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/carousel/carousel.component.css")]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/contact-form/contact-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {\n    background-color: teal !important;\n}\n\n.form-control{\n    background-color: rgb(228,230,255);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1wcmltYXJ5LCAuYnRuLXByaW1hcnk6aG92ZXIsIC5idG4tcHJpbWFyeTphY3RpdmUsIC5idG4tcHJpbWFyeTp2aXNpdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsICFpbXBvcnRhbnQ7XG59XG5cbi5mb3JtLWNvbnRyb2x7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwyMzAsMjU1KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/contact-form/contact-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-form/contact-form.component.ts ***!
  \********************************************************/
/*! exports provided: ContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormComponent", function() { return ContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services.service */ "./src/app/services.service.ts");




var ContactFormComponent = /** @class */ (function () {
    function ContactFormComponent(builder, contact) {
        this.builder = builder;
        this.contact = contact;
    }
    ContactFormComponent.prototype.ngOnInit = function () {
        this.FormData = this.builder.group({
            EmailerName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])]),
            Message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    ContactFormComponent.prototype.onSubmit = function (FormData) {
        console.log(FormData);
        this.contact.PostMessage(FormData)
            .subscribe(function (response) {
            location.href = 'https://mailthis.to/confirm';
            console.log(response);
        }, function (error) {
            console.warn(error.responseText);
            console.log({ error: error });
        });
    };
    ContactFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"] }
    ]; };
    ContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-form',
            template: __webpack_require__(/*! raw-loader!./contact-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-form/contact-form.component.html"),
            styles: [__webpack_require__(/*! ./contact-form.component.css */ "./src/app/contact-form/contact-form.component.css")]
        })
    ], ContactFormComponent);
    return ContactFormComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul { list-style: none; }\n\nbutton {\n    position: fixed;\n    bottom: 5px;\n    right: 5px;\n    font-size: 20px;\n    text-align: center;\n    border-radius: 5px;\n    outline: none;\n  }\n\n.footer-bottom{\n    padding: .25em;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssZ0JBQWdCLEVBQUU7O0FBRXZCO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztBQUVBO0lBQ0UsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHsgbGlzdC1zdHlsZTogbm9uZTsgfVxuXG5idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDVweDtcbiAgICByaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuZm9vdGVyLWJvdHRvbXtcbiAgICBwYWRkaW5nOiAuMjVlbTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.topPosToStartShowing = 250;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.checkScroll = function () {
        // window의 scroll top
        // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        console.log('[scroll]', scrollPosition);
        if (scrollPosition >= this.topPosToStartShowing) {
            this.isShow = true;
        }
        else {
            this.isShow = false;
        }
    };
    // TODO: Cross browsing
    FooterComponent.prototype.gotoTop = function () {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll')
    ], FooterComponent.prototype, "checkScroll", null);
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/headnav/headnav.component.css":
/*!***********************************************!*\
  !*** ./src/app/headnav/headnav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\n  font-size:30px;\n}\n@media (min-width: 900px) { \n  h1 {\n    font-size: 70px;\n  }\n}\ndiv[name=\"head\"] {\n    background-image: linear-gradient(to right,teal, rgb(166,139,158));\n    /*background-image: linear-gradient(to right,rgb(68, 172, 129), rgb(228,200,224))matches business card;*/\n    color: white;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZG5hdi9oZWFkbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjtBQUlFO0lBQ0Usa0VBQWtFO0lBQ2xFLHdHQUF3RztJQUN4RyxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9oZWFkbmF2L2hlYWRuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xuICBmb250LXNpemU6MzBweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkgeyBcbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgfVxufVxuXG4gIFxuXG4gIGRpdltuYW1lPVwiaGVhZFwiXSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHRlYWwsIHJnYigxNjYsMTM5LDE1OCkpO1xuICAgIC8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYig2OCwgMTcyLCAxMjkpLCByZ2IoMjI4LDIwMCwyMjQpKW1hdGNoZXMgYnVzaW5lc3MgY2FyZDsqL1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4iXX0= */"

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

/***/ "./src/app/mission-statement/mission-statement.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/mission-statement/mission-statement.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    min-height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzc2lvbi1zdGF0ZW1lbnQvbWlzc2lvbi1zdGF0ZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21pc3Npb24tc3RhdGVtZW50L21pc3Npb24tc3RhdGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mission-statement/mission-statement.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/mission-statement/mission-statement.component.ts ***!
  \******************************************************************/
/*! exports provided: MissionStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MissionStatementComponent", function() { return MissionStatementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MissionStatementComponent = /** @class */ (function () {
    function MissionStatementComponent() {
    }
    MissionStatementComponent.prototype.ngOnInit = function () {
    };
    MissionStatementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mission-statement',
            template: __webpack_require__(/*! raw-loader!./mission-statement.component.html */ "./node_modules/raw-loader/index.js!./src/app/mission-statement/mission-statement.component.html"),
            styles: [__webpack_require__(/*! ./mission-statement.component.css */ "./src/app/mission-statement/mission-statement.component.css")]
        })
    ], MissionStatementComponent);
    return MissionStatementComponent;
}());



/***/ }),

/***/ "./src/app/services.service.ts":
/*!*************************************!*\
  !*** ./src/app/services.service.ts ***!
  \*************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
        //private mailApi = `https://mailthis.to/${process.env.ALIAS}`
        this.mailApi = 'https://mailthis.to/care';
    }
    ServicesService.prototype.PostMessage = function (input) {
        return this.http.post(this.mailApi, input, { responseType: 'text' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response) {
                return response;
            }
            else {
                return null;
            }
        }, function (error) {
            return error;
        }));
    };
    ServicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ServicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ServicesService);
    return ServicesService;
}());



/***/ }),

/***/ "./src/app/value/value.component.css":
/*!*******************************************!*\
  !*** ./src/app/value/value.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsdWUvdmFsdWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVlL3ZhbHVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAzMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/value/value.component.ts":
/*!******************************************!*\
  !*** ./src/app/value/value.component.ts ***!
  \******************************************/
/*! exports provided: ValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueComponent", function() { return ValueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValueComponent = /** @class */ (function () {
    function ValueComponent() {
    }
    ValueComponent.prototype.ngOnInit = function () {
    };
    ValueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-value',
            template: __webpack_require__(/*! raw-loader!./value.component.html */ "./node_modules/raw-loader/index.js!./src/app/value/value.component.html"),
            styles: [__webpack_require__(/*! ./value.component.css */ "./src/app/value/value.component.css")]
        })
    ], ValueComponent);
    return ValueComponent;
}());



/***/ }),

/***/ "./src/app/vision/vision.component.css":
/*!*********************************************!*\
  !*** ./src/app/vision/vision.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    min-height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaW9uL3Zpc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdmlzaW9uL3Zpc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWluLWhlaWdodDogMzAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/vision/vision.component.ts":
/*!********************************************!*\
  !*** ./src/app/vision/vision.component.ts ***!
  \********************************************/
/*! exports provided: VisionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisionComponent", function() { return VisionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VisionComponent = /** @class */ (function () {
    function VisionComponent() {
    }
    VisionComponent.prototype.ngOnInit = function () {
    };
    VisionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vision',
            template: __webpack_require__(/*! raw-loader!./vision.component.html */ "./node_modules/raw-loader/index.js!./src/app/vision/vision.component.html"),
            styles: [__webpack_require__(/*! ./vision.component.css */ "./src/app/vision/vision.component.css")]
        })
    ], VisionComponent);
    return VisionComponent;
}());



/***/ }),

/***/ "./src/app/what-we-do-exp/what-we-do-exp.component.css":
/*!*************************************************************!*\
  !*** ./src/app/what-we-do-exp/what-we-do-exp.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    min-height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdC13ZS1kby1leHAvd2hhdC13ZS1kby1leHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3doYXQtd2UtZG8tZXhwL3doYXQtd2UtZG8tZXhwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/what-we-do-exp/what-we-do-exp.component.ts":
/*!************************************************************!*\
  !*** ./src/app/what-we-do-exp/what-we-do-exp.component.ts ***!
  \************************************************************/
/*! exports provided: WhatWeDoExpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatWeDoExpComponent", function() { return WhatWeDoExpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WhatWeDoExpComponent = /** @class */ (function () {
    function WhatWeDoExpComponent() {
    }
    WhatWeDoExpComponent.prototype.ngOnInit = function () {
    };
    WhatWeDoExpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-what-we-do-exp',
            template: __webpack_require__(/*! raw-loader!./what-we-do-exp.component.html */ "./node_modules/raw-loader/index.js!./src/app/what-we-do-exp/what-we-do-exp.component.html"),
            styles: [__webpack_require__(/*! ./what-we-do-exp.component.css */ "./src/app/what-we-do-exp/what-we-do-exp.component.css")]
        })
    ], WhatWeDoExpComponent);
    return WhatWeDoExpComponent;
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

module.exports = __webpack_require__(/*! /mnt/e/javascript/caregivers/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map