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

module.exports = "<div name = \"all\">\r\n\r\n  <app-bootdrop></app-bootdrop>\r\n\r\n  <div class = \"row d-none d-md-block\" name=\"bigscreenpad\"> </div>\r\n\r\n  <div class = \"row justify-content-center flex-lg-row-reverse\">\r\n    <div class=\"col-xxl-4\">\r\n      <div name = \"carousel\">\r\n        <app-carousel></app-carousel>\r\n      </div>\r\n    </div>\r\n  <div class=\"col-xxl-3\">\r\n    <div name = \"bodydiv\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class = \"before-footer\"></div>\r\n  \r\n  </div>\r\n\r\n  \r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/apply/apply.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/apply/apply.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  name = \"component-sec\" class=\"container\">\n    <div class = \"card\">\n        <div class = \"card-body\">\nTo apply to work for Saint Louis Angelic Caregivers, download and fill out\n<code><a target=\"_self\" href=\"../../assets/AngelCareApplication.pdf\" download=\"AngelCareApplication.pdf\">this</a> </code>\npdf.\n\nEmail the completed file to <code>apply@stlangelcare.com</code>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/bootdrop/bootdrop.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/bootdrop/bootdrop.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--div class=\"container\">\n\t<ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-pills\" name=\"tabs\">\n\t\t<li [ngbNavItem]=\"1\">\n\t\t\t<a ngbNavLink>What We Do</a>\n\t\t\t<ng-template ngbNavContent>\n\t\t\t\t<app-what-we-do-exp></app-what-we-do-exp>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"2\">\n\t\t\t<a ngbNavLink>Contact Us</a>\n\t\t\t<ng-template ngbNavContent>\n\t\t\t\t<app-contact-us></app-contact-us>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"3\">\n\t\t\t<a ngbNavLink>Value</a>\n\t\t\t<ng-template ngbNavContent>\n\t\t\t\t<app-value></app-value>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"4\">\n\t\t\t<a ngbNavLink>Vision</a>\n\t\t\t<ng-template ngbNavContent>\n\t\t\t<app-vision></app-vision>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"5\">\n\t\t\t<a ngbNavLink>Mission</a>\n\t\t\t<ng-template ngbNavContent>\t\t\n\t\t\t\t<app-mission-statement></app-mission-statement>\n\t\t\t</ng-template>\n\t\t</li>\n\t\t<li [ngbNavItem]=\"6\">\n\t\t\t<a ngbNavLink>Apply</a>\n\t\t\t<ng-template ngbNavContent>\t\t\n\t\t\t\t<app-apply></app-apply>\n\t\t\t</ng-template>\n\t\t</li>\n\t</ul>\n\n\n\n\t<div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n</div-->\n\n\t<nav class=\"navbar navbar-expand-lg navbar-light p-3 rounded-3\">\n\t\t\n\t\t\t\t<!-- Step 3: Toggle the value of the property when the toggler button is clicked. -->\n\t\t\t\t<button class=\"navbar-toggler\" type=\"button\" (click)=\"isMenuCollapsed = !isMenuCollapsed\">&#9776;</button>\n\t\t\t\t<a class=\"navbar-brand d-lg-none d-xl-none d-xxl-none\" >St. Louis Angelic Caregivers</a>\n\t\t\t\t<!-- Step 2: Add the ngbCollapse directive to the element below. -->\n\t\t\t\t<div [ngbCollapse]=\"isMenuCollapsed\" class=\"collapse navbar-collapse\">\n\t\t\t\t\t<ul class=\"navbar-nav\">\n\t\t\t\t\t\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<a class=\"navbar-brand d-none d-lg-block\" >St. Louis Angelic Caregivers</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\n\t\t\t<li class=\"nav-item active\">\n\t\t\t  <a routerLink=\"home\" routerLinkActive=\"active_route\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">What We Do</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t  <a [routerLink]=\"['/contact']\" routerLinkActive=\"active_route\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Contact Us</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item\">\n\t\t\t\t<a [routerLink]=\"['/value']\" routerLinkActive=\"active_route\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Values</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"nav-item\">\n\t\t\t\t<a [routerLink]=\"['/mission']\" routerLinkActive=\"active_route\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Mission Statement</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"nav-item\">\n\t\t\t\t<a [routerLink]=\"['/vision']\" routerLinkActive=\"active_route\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Vision</a>\n\t\t\t  </li>\n\t\t\t  <li class=\"nav-item\">\n\t\t\t\t<a [routerLink]=\"['/apply']\" routerLinkActive=\"active_route\" (click)=\"isMenuCollapsed = !isMenuCollapsed\" class=\"nav-link\">Job Application</a>\n\t\t\t  </li>\n\t\t  </ul>\n\n\t\t  </div>\n\t  </nav>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/carousel/carousel.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/carousel/carousel.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-bs-ride=\"carousel\">\r\n  <div class=\"carousel-indicators\">\r\n    <button type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide-to=\"0\" class=\"active\" aria-current=\"true\" aria-label=\"Slide 1\"></button>\r\n    <button type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide-to=\"1\" aria-label=\"Slide 2\"></button>\r\n  </div>\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\">\r\n      <div class=\"d-flex justify-content-center\"><img src=\"assets/20230307_160528_sized.jpg\" class=\"img-fluid\" alt=\"care pic 1\"></div>\r\n      <div class=\"carousel-caption\">\r\n        <p class=\"d-none d-sm-block\"> Dedicated to elderly care </p><p class=\"d-block d-sm-none\">Dedication</p>\r\n      </div>\r\n      \r\n    </div>\r\n    <div class=\"carousel-item\">\r\n      <div class=\"d-flex justify-content-center\"><img src=\"assets/20230424_073207.jpg\" class=\"img-fluid\" alt=\"care pic 2\"></div>\r\n    \r\n      <div class=\"carousel-caption\">\r\n        <p class=\"d-none d-sm-block\"> 10+ years of experience </p> <p class=\"d-block d-sm-none\">Experience</p>\r\n      </div>\r\n       \r\n    </div>\r\n   \r\n\r\n    <!--  d-none d-md blocks previous and next carousel buttons disappear for mobile\r\n    d-block removes altogether\r\n    blocked for sizes other than xxl-->\r\n\r\n\r\n  <button class=\"d-none carousel-control-prev\" type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"visually-hidden\">Previous</span>\r\n  </button>\r\n  <button class=\"d-none carousel-control-next\" type=\"button\" data-bs-target=\"#myCarousel\" data-bs-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"visually-hidden\">Next</span>\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-form/contact-form.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-form/contact-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Wrapper container -->\n<div class=\"container py-4\">\n\n    <form [formGroup]=\"FormData\" (ngSubmit)=\"onSubmit(FormData.value)\">\n  \n      <div class=\"form-group\">\n      <!-- Name input -->\n      <div class=\"mb-2\">\n        <label class=\"form-label\" for=\"name\">Name</label>\n        <input class=\"form-control\" id=\"name\" type=\"text\" [class.error]=\"FormData.controls['EmailerName'].dirty && FormData.hasError('required','EmailerName')\"\n        name=\"EmailerName\" formControlName=\"EmailerName\"/>\n        <small *ngIf=\"FormData.controls['EmailerName'].dirty && FormData.hasError('required','EmailerName')\" class=\"text-danger\">Name is required</small>\n      </div>\n      <!-- Email address input -->\n      <div class=\"mb-2\">\n        <label class=\"form-label\" for=\"emailAddress\">Email Address</label>\n        <input class=\"form-control\" id=\"emailAddress\" type=\"email\" [class.error]=\"FormData.controls['Email'].dirty && FormData.hasError('required','Email')\"\n        name=\"Email\" formControlName=\"Email\" />\n        <small *ngIf=\"FormData.controls['Email'].dirty && FormData.hasError('required','Email')\" class=\"text-danger\">Email Address is required</small>\n      </div>\n      <!-- Message input -->\n      <div class=\"mb-2\">\n        <label class=\"form-label\" for=\"message\">Message</label>\n        <textarea class=\"form-control\" id=\"message\" type=\"text\" [class.error]=\"FormData.controls['Message'].dirty && FormData.hasError('required','Message')\"\n        name=\"Message\" formControlName=\"Message\" style=\"height: 10rem;\"></textarea>\n        <small *ngIf=\"FormData.controls['Message'].dirty && FormData.hasError('required','Message')\" class=\"text-danger\">Message is required</small>\n      </div>\n      <!-- Form submit button -->\n      <div class=\"d-grid\">\n        <!--button class=\"btn btn-primary btn-lg\" type=\"submit\" [disabled]=\"!FormData.valid\">Submit</button-->\n        <button class=\"btn btn-primary btn-lg\" type=\"submit\">Submit</button>\n      </div>\n    </div>\n    </form>\n  \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    \n        <div class = \"container\">\n        <div class = \"card\">\n            <div class = \"card-body\">\n                24 hours a day, seven days a week.\n                <br>\n                Schedule your Home Care Assessment by calling or using the contact form below.\n                <br>\n                <br>\n                Phone Number: (314) 601-4345\n              \n        </div>\n    </div>\n</div>\n\n<br>\n\n<div name = \"component-sec\" class = \"container\">\n    <div class = \"card\">\n        <div class = \"card-body\">\n<app-contact-form></app-contact-form>\n</div></div></div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/extra-components/testimonials/testimonials.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/extra-components/testimonials/testimonials.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Honest, loving, kind and patient</p>\n<p>You will be completely satisfied with the results</p>\n<p>I can't imagine anyone better in her field</p>\n<p>A top-notch caregiver and quality human being</p>\n<p>Smart and capable of running a household. Our parents best interests are her first and \nhighest priority.\n</p>\n<p>She's an advocate for them and makes sure they get what they need and that they are treated fairly and kindly</p>\n<p>We feel like she's irreplaceable!</p>\n\n<!--Pat S one testimonial giver name-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-dark\">\n  <footer>\n      <div class=\"container\">\n          <div class=\"row\">\n              <div class=\"col-md-6 item\">\n                  <h3>Contact Us</h3>\n                  <ul>\n                      <li><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> (314) 601-4345 </li>\n                  </ul>\n              </div>\n              <div class=\"col-md-6 item text\">\n                  <h3>St. Louis Angelic Caregivers</h3>\n                  <p>Thank you for visiting our website</p>\n              </div>\n          </div>\n          <p class=\"copyright\">&#169; 2023 Saint Louis Angelic Caregivers LLC</p>\n      </div>\n  </footer>\n</div>\n  \n<!--  <div class=\"footer-bottom\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-xs-12\">\n              <p class=\"text-center\"> &#169; 2023 Saint Louis Angelic Caregivers LLC</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    -->\n    <button type = \"button\" class=\"btn btn-success\" *ngIf=\"isShow\" (click)=\"gotoTop()\"> \n      <i class='fa fa-arrow-up'></i> Back To Top</button>\n"

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

module.exports = "<div name = \"component-sec\" class=\"container\">\n<div class = \"card\">\n    <div class = \"card-body\">\nWe strive to offer the highest level of professionalism, services, and support to our clients in order that our clients live independently.\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/value/value.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/value/value.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "   <div name = \"component-sec\" class = \"container\">\n      <div class = \"card\">\n         <div class = \"card-body\">\n         Integrity - We establish and preserve trust with all clients by applying our knowledge and skills fairly.\n      <br>\n      <br>\n         Professionalism- We are knowledgeable, accurate, conscientious, innovative, and service-oriented.\n      <br>\n      <br>\n\n         Respect- We interact with people in a way that makes them feel heard and valued. We Listen and respond wholeheartedly.\n      <br>\n      <br>\n         Collaboration- We recognize and act on opportunities to work together to deliver our company’s best. We consult, and share ideas, fostering innovation to improve the service experience, both internally and externally.\n      \n         </div>\n         </div>\n   </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/vision/vision.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/vision/vision.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div name = \"component-sec\"  class=\"container\">\n    <div class = \"card\">\n        <div class = \"card-body\">\nPeople of different generations are heard, valued, and cared for. Our vision is to become a great trusted name and home care provider of choice in the St. Louis area. Our experienced and dedicated caregivers will continue to promote well-being through support and active daily interation with our clients and their relatives.\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/what-we-do-exp/what-we-do-exp.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/what-we-do-exp/what-we-do-exp.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class = \"container\" style=\"border:1px solid #ddd;\">\n    \n    Our experienced and compassionate caregivers are commited to providing great care to ensure that you or your family member is being well cared for while helping them to remain independent at home. We offer help to seniors by providing services that are designed to help them live independently in their homes and communities.\nTake advantage of our affordable rate services while recieving the best services for your loved one.\n<br> <br> Whether you need part time or around the clock help, we are here to offer care based on your specific needs.\nWe offer an individual care plan for your loved one.  The plan will be reviewed and updated based on your changing needs.\n<br>\nWe fully recognize your right to dignity and individuality in the care of your personal needs. <br> <br> Our clients are very important to us. Please let us know if you have any questions regarding our service to ensure that we meet your needs and expectations.\n    Our experience caregivers offer help with: <br> <ul><li>bathing</li> <li>housekeeping</li> <li>laundry</li> <li>hygiene</li> <li>dressing</li> <li>toileting</li> <li>mobility</li> <li>transportation</li> <li>medication reminders</li> <li>pet care</li> <li>more services that depend on your specific needs</li></ul>We will be pleased to have the chance to provide care for you or your loved one.\n</div>"

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

module.exports = "div[name=\"bodydiv\"] {\r\n    font-size:17px;\r\n    padding-top:2%;\r\n  }\r\n\r\ndiv[name=\"bigscreenpad\"] {\r\n  padding-top:1%;\r\n}\r\n\r\ndiv[name=\"all\"] {\r\n  background-color: rgb(226,228,255) ;\r\n  padding-bottom:13%;\r\n}\r\n\r\n/* RESPONSIVE CSS -------------------------------------------------- */\r\n\r\n/*moved footer down for 4k(3840 width) */\r\n\r\n@media (min-width:2000px) {\r\n  div[name=\"bodydiv\"] {\r\n    padding-bottom:12%;\r\n  }\r\n}\r\n\r\n/*should be less than 1080*/\r\n\r\n@media (max-width:900px) {\r\n  div[name=\"bodydiv\"] {\r\n    font-size:22px;\r\n  }\r\n}\r\n\r\n/*i should try to take a @media between those two with 17 font\r\n\r\nalso given ultrawide montiors, I should try if max-height works for bootstrap*/\r\n\r\n/*div[name=\"carousel\"]{\r\n  background-color: rgb(228, 200, 224);\r\n}*/\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztFQUNoQjs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBR0E7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCOztBQUNDLHNFQUFzRTs7QUFDdkUsd0NBQXdDOztBQUN4QztFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsMkJBQTJCOztBQUMzQjtFQUNFO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUdBOzs4RUFFOEU7O0FBRTlFOztFQUVFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbbmFtZT1cImJvZHlkaXZcIl0ge1xyXG4gICAgZm9udC1zaXplOjE3cHg7XHJcbiAgICBwYWRkaW5nLXRvcDoyJTtcclxuICB9XHJcblxyXG5kaXZbbmFtZT1cImJpZ3NjcmVlbnBhZFwiXSB7XHJcbiAgcGFkZGluZy10b3A6MSU7XHJcbn1cclxuXHJcbiAgXHJcbmRpdltuYW1lPVwiYWxsXCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LDIyOCwyNTUpIDtcclxuICBwYWRkaW5nLWJvdHRvbToxMyU7XHJcbn1cclxuIC8qIFJFU1BPTlNJVkUgQ1NTIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcbi8qbW92ZWQgZm9vdGVyIGRvd24gZm9yIDRrKDM4NDAgd2lkdGgpICovXHJcbkBtZWRpYSAobWluLXdpZHRoOjIwMDBweCkge1xyXG4gIGRpdltuYW1lPVwiYm9keWRpdlwiXSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMiU7XHJcbiAgfVxyXG59XHJcblxyXG4vKnNob3VsZCBiZSBsZXNzIHRoYW4gMTA4MCovXHJcbkBtZWRpYSAobWF4LXdpZHRoOjkwMHB4KSB7XHJcbiAgZGl2W25hbWU9XCJib2R5ZGl2XCJdIHtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qaSBzaG91bGQgdHJ5IHRvIHRha2UgYSBAbWVkaWEgYmV0d2VlbiB0aG9zZSB0d28gd2l0aCAxNyBmb250XHJcblxyXG5hbHNvIGdpdmVuIHVsdHJhd2lkZSBtb250aW9ycywgSSBzaG91bGQgdHJ5IGlmIG1heC1oZWlnaHQgd29ya3MgZm9yIGJvb3RzdHJhcCovXHJcblxyXG4vKmRpdltuYW1lPVwiY2Fyb3VzZWxcIl17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyOCwgMjAwLCAyMjQpO1xyXG59Ki9cclxuXHJcbiAiXX0= */"

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
/* harmony import */ var _extra_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./extra-components/testimonials/testimonials.component */ "./src/app/extra-components/testimonials/testimonials.component.ts");



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
                _extra_components_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_20__["TestimonialsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_18__["AppRoutingModule"]
                // RouterModule.forRoot(routes)
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]],
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

module.exports = ".container {\n    min-height: 150px;\n}\n.card{\n    background-color: rgb(226,228,255) ;\n  }\n/* 2000px maximum bootstrap*/\n@media (min-width:2000px) {\n    div[name=\"component-sec\"] {\n      padding-bottom:85%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbHkvYXBwbHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUNBQW1DO0VBQ3JDO0FBRUEsNEJBQTRCO0FBQzVCO0lBQ0U7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcGx5L2FwcGx5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcbn1cbi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsMjI4LDI1NSkgO1xuICB9XG5cbiAgLyogMjAwMHB4IG1heGltdW0gYm9vdHN0cmFwKi9cbiAgQG1lZGlhIChtaW4td2lkdGg6MjAwMHB4KSB7XG4gICAgZGl2W25hbWU9XCJjb21wb25lbnQtc2VjXCJdIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOjg1JTtcbiAgICB9XG4gIH0iXX0= */"

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

module.exports = "/*.container{\r\n  padding-top:2%;\r\n  font-size: 22px;\r\n}*/\r\n\r\ndiv[name=\"tabs\"] {\r\n    font-size: 20px;\r\n  }\r\n\r\nh1{\r\n  font-size:30px;\r\n}\r\n\r\na.nav-link{\r\n  font-size:20px;\r\n  color:white;\r\n}\r\n\r\ncollapse ul li a { color:white }\r\n\r\n.navbar-brand { color:white }\r\n\r\n.active_route {\r\n  text-decoration: overline;\r\n}\r\n\r\n/* the brightness option isnt necessary here but good to know*/\r\n\r\n.navbar {\r\n  background-image: linear-gradient(to right,teal, rgb(166,139,158));\r\n  -webkit-filter: brightness(100%);\r\n\t-moz-filter: brightness(100%);\r\n\t-o-filter: brightness(100%);\r\n\t-ms-filter: brightness(100%);\r\n\tfilter: brightness(100%);\r\n}\r\n\r\n.nav-link:hover{\r\n    -webkit-filter: brightness(85%);\r\n\t-moz-filter: brightness(85%);\r\n\t-o-filter: brightness(85%);\r\n\t-ms-filter: brightness(85%);\r\n\tfilter: brightness(85%);\r\n\r\n}\r\n\r\n@media (min-width: 1079px) {\r\n.navbar-nav {\r\n  float:none;\r\n  margin:0 auto;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.navbar-nav > li {\r\n  display: inline-block;\r\n  float:none;\r\n}\r\n\r\n\r\n\r\n}\r\n\r\n::ng-deep .nav-pills a.nav-link.active, \r\n::ng-deep .nav-pills .show > a.nav-link {\r\n  color:white;\r\n  background-color: teal;\r\n}\r\n\r\n:ng-deep .navbar a.nav-link.active, \r\n::ng-deep .navbar .show > a.nav-link {\r\n  background-color:teal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vdGRyb3AvYm9vdGRyb3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0U7O0FBRUY7SUFDSSxlQUFlO0VBQ2pCOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBQ0EsbUJBQW1CLFlBQVk7O0FBQUMsZ0JBQWdCLFlBQVk7O0FBRTVEO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLDhEQUE4RDs7QUFDOUQ7RUFDRSxrRUFBa0U7RUFDbEUsZ0NBQWdDO0NBQ2pDLDZCQUE2QjtDQUM3QiwyQkFBMkI7Q0FDM0IsNEJBQTRCO0NBQzVCLHdCQUF3QjtBQUN6Qjs7QUFFQTtJQUNJLCtCQUErQjtDQUNsQyw0QkFBNEI7Q0FDNUIsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQix1QkFBdUI7O0FBRXhCOztBQUVBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtBQUNaOzs7O0FBSUE7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFDQTs7RUFFRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ib290ZHJvcC9ib290ZHJvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyouY29udGFpbmVye1xyXG4gIHBhZGRpbmctdG9wOjIlO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufSovXHJcblxyXG5kaXZbbmFtZT1cInRhYnNcIl0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuXHJcbmgxe1xyXG4gIGZvbnQtc2l6ZTozMHB4O1xyXG59XHJcblxyXG5hLm5hdi1saW5re1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbmNvbGxhcHNlIHVsIGxpIGEgeyBjb2xvcjp3aGl0ZSB9Lm5hdmJhci1icmFuZCB7IGNvbG9yOndoaXRlIH1cclxuXHJcbi5hY3RpdmVfcm91dGUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmU7XHJcbn1cclxuXHJcbi8qIHRoZSBicmlnaHRuZXNzIG9wdGlvbiBpc250IG5lY2Vzc2FyeSBoZXJlIGJ1dCBnb29kIHRvIGtub3cqL1xyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsdGVhbCwgcmdiKDE2NiwxMzksMTU4KSk7XHJcbiAgLXdlYmtpdC1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XHJcblx0LW1vei1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XHJcblx0LW8tZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xyXG5cdC1tcy1maWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7XHJcblx0ZmlsdGVyOiBicmlnaHRuZXNzKDEwMCUpO1xyXG59XHJcblxyXG4ubmF2LWxpbms6aG92ZXJ7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xyXG5cdC1tb3otZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XHJcblx0LW8tZmlsdGVyOiBicmlnaHRuZXNzKDg1JSk7XHJcblx0LW1zLWZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xyXG5cdGZpbHRlcjogYnJpZ2h0bmVzcyg4NSUpO1xyXG5cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwNzlweCkge1xyXG4ubmF2YmFyLW5hdiB7XHJcbiAgZmxvYXQ6bm9uZTtcclxuICBtYXJnaW46MCBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci1uYXYgPiBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZsb2F0Om5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIC5uYXYtcGlsbHMgYS5uYXYtbGluay5hY3RpdmUsIFxyXG46Om5nLWRlZXAgLm5hdi1waWxscyAuc2hvdyA+IGEubmF2LWxpbmsge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRlYWw7XHJcbn1cclxuOm5nLWRlZXAgLm5hdmJhciBhLm5hdi1saW5rLmFjdGl2ZSwgXHJcbjo6bmctZGVlcCAubmF2YmFyIC5zaG93ID4gYS5uYXYtbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp0ZWFsO1xyXG59Il19 */"

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

module.exports = "/* GLOBAL STYLES\n-------------------------------------------------- */\n/* Padding below the footer and lighter body text */\nbody {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    /*color: #5a5a5a; */\n  }\n/* CUSTOMIZE THE CAROUSEL\n  -------------------------------------------------- */\n.carousel-item {\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  }\n/* Declare height because of positioning of img element */\n.carousel-caption p {\n      margin-bottom: 1.25rem;\n      font-size: 24px;\n      color: white;\n      font-weight: 700;\n    }\n@media (max-width:250px){\n      .carousel-caption p {\n        line-height: 33; /*not visible*/\n      }\n    }\n@media (min-width:250px) and (max-width:260px) {\n      .carousel-caption p {\n        line-height: 15\n      }\n    }\n@media (min-width:260px) and (max-width:275px) {\n      .carousel-caption p {\n        line-height: 16;\n      }\n    }\n@media (min-width:275px) and (max-width:290px) {\n      .carousel-caption p {\n        line-height: 17;\n      }\n    }\n@media (min-width:290px) and (max-width:300px) {\n      .carousel-caption p {\n        line-height: 18;\n      }\n    }\n@media (min-width:300px) and (max-width:305px) {\n      .carousel-caption p {\n        line-height: 19;\n      }\n    }\n@media (min-width:305px) and (max-width:320px) {\n      .carousel-caption p {\n        line-height: 20;\n      }\n    }\n@media (min-width:320px) and (max-width:340px) {\n      .carousel-caption p {\n        line-height: 21;\n      }\n    }\n@media (min-width:340px) and (max-width:350px) {\n      .carousel-caption p {\n        line-height: 22;\n      }\n    }\n@media (min-width:350px) and (max-width:360px) {\n      .carousel-caption p {\n        line-height: 23;\n      }\n    }\n@media (min-width:360px) and (max-width:370px) {\n      .carousel-caption p {\n        line-height: 24;\n      }\n    }\n@media (min-width:370px) and (max-width:380px) {\n      .carousel-caption p {\n        line-height: 25;\n      }\n    }\n@media (min-width:380px) and (max-width:390px) {\n      .carousel-caption p {\n        line-height: 26;\n      }\n    }\n@media (min-width:390px) and (max-width:400px) {\n      .carousel-caption p {\n        line-height: 27;\n      }\n    }\n@media (min-width:400px) and (max-width:424px) {\n      .carousel-caption p {\n        line-height: 28;\n      }\n    }\n@media (min-width:424px) and (max-width:430px) {\n      .carousel-caption p {\n        line-height: 29\n      }\n    }\n@media (min-width:430px) and (max-width:439px) {\n      .carousel-caption p {\n        line-height: 29.5\n      }\n    }\n@media (min-width:439px) and (max-width:450px) {\n      .carousel-caption p {\n        line-height: 30;\n      }\n    }\n@media (min-width:450px) and (max-width:460px) {\n      .carousel-caption p {\n        line-height: 31;\n      }\n    }\n@media (min-width:460px) and (max-width:470px) {\n      .carousel-caption p {\n        line-height: 32;\n      }\n    }\n@media (min-width:470px) {\n      .carousel-caption p {\n        line-height: 34;\n      }\n    }\n/*  @media (min-width:1081px) {\n      .carousel-caption p {\n        margin-bottom: 1.25rem;\n        font-size: 24px;\n        line-height: 35;\n        color: white;\n        font-weight: bold;\n      }\n    }*/\n.carousel-caption h1 {\n        color: black;\n    }\n/*The location of this matters, when carousel-control etc. were lower in the css, the arrows wouldnt\n   show up when the website was in its mobile version*/\n.carousel-control-next,\n  .carousel-control-prev /*, .carousel-indicators */ {\n      -webkit-filter: invert(100%);\n              filter: invert(100%);\n  }\n.featurette-heading {\n      font-size: 50px;\n    }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtvREFDb0Q7QUFDcEQsbURBQW1EO0FBRW5EO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7RUFDckI7QUFHQTtzREFDb0Q7QUFFcEQ7RUFDQSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QjtBQUlFLHlEQUF5RDtBQUN6RDtNQUNFLHNCQUFzQjtNQUN0QixlQUFlO01BQ2YsWUFBWTtNQUNaLGdCQUFnQjtJQUNsQjtBQUdBO01BQ0U7UUFDRSxlQUFlLEVBQUUsY0FBYztNQUNqQztJQUNGO0FBR0E7TUFDRTtRQUNFO01BQ0Y7SUFDRjtBQUNBO01BQ0U7UUFDRSxlQUFlO01BQ2pCO0lBQ0Y7QUFFQTtNQUNFO1FBQ0UsZUFBZTtNQUNqQjtJQUNGO0FBRUE7TUFDRTtRQUNFLGVBQWU7TUFDakI7SUFDRjtBQUNBO01BQ0U7UUFDRSxlQUFlO01BQ2pCO0lBQ0Y7QUFFQTtNQUNFO1FBQ0UsZUFBZTtNQUNqQjtJQUNGO0FBRUE7TUFDRTtRQUNFLGVBQWU7TUFDakI7SUFDRjtBQUVBO01BQ0U7UUFDRSxlQUFlO01BQ2pCO0lBQ0Y7QUFDQTtNQUNFO1FBQ0UsZUFBZTtNQUNqQjtJQUNGO0FBQ0E7TUFDRTtRQUNFLGVBQWU7TUFDakI7SUFDRjtBQUVBO01BQ0U7UUFDRSxlQUFlO01BQ2pCO0lBQ0Y7QUFDQTtNQUNFO1FBQ0UsZUFBZTtNQUNqQjtJQUNGO0FBQ0E7TUFDRTtRQUNFLGVBQWU7TUFDakI7SUFDRjtBQUNBO01BQ0U7UUFDRSxlQUFlO01BQ2pCO0lBQ0Y7QUFFQTtNQUNFO1FBQ0U7TUFDRjtJQUNGO0FBQ0E7TUFDRTtRQUNFO01BQ0Y7SUFDRjtBQUNBO01BQ0U7UUFDRSxlQUFlO01BQ2pCO0lBQ0Y7QUFDQTtNQUNFO1FBQ0UsZUFBZTtNQUNqQjtJQUNGO0FBRUE7TUFDRTtRQUNFLGVBQWU7TUFDakI7SUFDRjtBQUVBO01BQ0U7UUFDRSxlQUFlO01BQ2pCO0lBQ0Y7QUFFRjs7Ozs7Ozs7TUFRSTtBQUVGO1FBQ0ksWUFBWTtJQUNoQjtBQUdEO3NEQUNtRDtBQUNsRDs7TUFFRSw0QkFBb0I7Y0FBcEIsb0JBQW9CO0VBQ3hCO0FBRUU7TUFDRSxlQUFlO0lBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdMT0JBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBQYWRkaW5nIGJlbG93IHRoZSBmb290ZXIgYW5kIGxpZ2h0ZXIgYm9keSB0ZXh0ICovXG5cbmJvZHkge1xuICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICAgIC8qY29sb3I6ICM1YTVhNWE7ICovXG4gIH1cbiAgXG4gIFxuICAvKiBDVVNUT01JWkUgVEhFIENBUk9VU0VMXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4gIFxuICAuY2Fyb3VzZWwtaXRlbSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgfSBcblxuICBcblxuICAgIC8qIERlY2xhcmUgaGVpZ2h0IGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cblxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6MjUwcHgpe1xuICAgICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMzsgLypub3QgdmlzaWJsZSovXG4gICAgICB9XG4gICAgfVxuICAgIFxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MjUwcHgpIGFuZCAobWF4LXdpZHRoOjI2MHB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOjI2MHB4KSBhbmQgKG1heC13aWR0aDoyNzVweCkge1xuICAgICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDoyNzVweCkgYW5kIChtYXgtd2lkdGg6MjkwcHgpIHtcbiAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMTc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MjkwcHgpIGFuZCAobWF4LXdpZHRoOjMwMHB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4O1xuICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6MzA1cHgpIHtcbiAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMTk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzA1cHgpIGFuZCAobWF4LXdpZHRoOjMyMHB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDozNDBweCkge1xuICAgICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDozNDBweCkgYW5kIChtYXgtd2lkdGg6MzUwcHgpIHtcbiAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMjI7XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOjM1MHB4KSBhbmQgKG1heC13aWR0aDozNjBweCkge1xuICAgICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMztcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzYwcHgpIGFuZCAobWF4LXdpZHRoOjM3MHB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0O1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOjM3MHB4KSBhbmQgKG1heC13aWR0aDozODBweCkge1xuICAgICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNTtcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzgwcHgpIGFuZCAobWF4LXdpZHRoOjM5MHB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI2O1xuICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDozOTBweCkgYW5kIChtYXgtd2lkdGg6NDAwcHgpIHtcbiAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMjc7XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSAobWluLXdpZHRoOjQwMHB4KSBhbmQgKG1heC13aWR0aDo0MjRweCkge1xuICAgICAgLmNhcm91c2VsLWNhcHRpb24gcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyODtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDo0MjRweCkgYW5kIChtYXgtd2lkdGg6NDMwcHgpIHtcbiAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMjlcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6NDMwcHgpIGFuZCAobWF4LXdpZHRoOjQzOXB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI5LjVcbiAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6NDM5cHgpIGFuZCAobWF4LXdpZHRoOjQ1MHB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwO1xuICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgKG1pbi13aWR0aDo0NTBweCkgYW5kIChtYXgtd2lkdGg6NDYwcHgpIHtcbiAgICAgIC5jYXJvdXNlbC1jYXB0aW9uIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMzE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6NDYwcHgpIGFuZCAobWF4LXdpZHRoOjQ3MHB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMyO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOjQ3MHB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM0O1xuICAgICAgfVxuICAgIH1cblxuICAvKiAgQG1lZGlhIChtaW4td2lkdGg6MTA4MXB4KSB7XG4gICAgICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfSovXG5cbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiBoMSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gXG4gICAgXG4gICAvKlRoZSBsb2NhdGlvbiBvZiB0aGlzIG1hdHRlcnMsIHdoZW4gY2Fyb3VzZWwtY29udHJvbCBldGMuIHdlcmUgbG93ZXIgaW4gdGhlIGNzcywgdGhlIGFycm93cyB3b3VsZG50XG4gICBzaG93IHVwIHdoZW4gdGhlIHdlYnNpdGUgd2FzIGluIGl0cyBtb2JpbGUgdmVyc2lvbiovIFxuICAgIC5jYXJvdXNlbC1jb250cm9sLW5leHQsXG4gIC5jYXJvdXNlbC1jb250cm9sLXByZXYgLyosIC5jYXJvdXNlbC1pbmRpY2F0b3JzICovIHtcbiAgICAgIGZpbHRlcjogaW52ZXJ0KDEwMCUpO1xuICB9XG4gIFxuICAgIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgIH1cbiAgIl19 */"

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

module.exports = ".btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {\n    background-color: teal !important;\n}\n\n.form-control{\n    background-color: rgb(228,230,255);\n}\n\nsmall{\n    font-size:16px;\n}\n\n.form-control.error{\n    border: 1px solid red;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1mb3JtL2NvbnRhY3QtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFCQUFxQjs7QUFFekIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWZvcm0vY29udGFjdC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXByaW1hcnksIC5idG4tcHJpbWFyeTpob3ZlciwgLmJ0bi1wcmltYXJ5OmFjdGl2ZSwgLmJ0bi1wcmltYXJ5OnZpc2l0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRlYWwgIWltcG9ydGFudDtcbn1cblxuLmZvcm0tY29udHJvbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI4LDIzMCwyNTUpO1xufVxuXG5zbWFsbHtcbiAgICBmb250LXNpemU6MTZweDtcbn1cblxuLmZvcm0tY29udHJvbC5lcnJvcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG5cbn0iXX0= */"

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
        if (this.FormData.valid) {
            console.log(FormData);
            this.contact.PostMessage(FormData)
                .subscribe(function (response) {
                location.href = 'https://mailthis.to/confirm';
                console.log(response);
            }, function (error) {
                console.warn(error.responseText);
                console.log({ error: error });
            });
        }
        else {
            //throw error if the required fields aren't valid 
            this.validateAllFormFields(this.FormData);
        }
    };
    ContactFormComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsDirty({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                _this.validateAllFormFields(control);
            }
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

module.exports = ".card{\n    background-color: rgb(226,228,255) ;\n  }\n\n@media (min-width: 1400px) and (max-width: 1919px) {\n  div[name=\"component-sec\"] {\n    padding-bottom:25%;\n  }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7RUFDckM7O0FBRUY7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LDIyOCwyNTUpIDtcbiAgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSBhbmQgKG1heC13aWR0aDogMTkxOXB4KSB7XG4gIGRpdltuYW1lPVwiY29tcG9uZW50LXNlY1wiXSB7XG4gICAgcGFkZGluZy1ib3R0b206MjUlO1xuICB9XG4gIH0iXX0= */"

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

/***/ "./src/app/extra-components/testimonials/testimonials.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/extra-components/testimonials/testimonials.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4dHJhLWNvbXBvbmVudHMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/extra-components/testimonials/testimonials.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/extra-components/testimonials/testimonials.component.ts ***!
  \*************************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! raw-loader!./testimonials.component.html */ "./node_modules/raw-loader/index.js!./src/app/extra-components/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.css */ "./src/app/extra-components/testimonials/testimonials.component.css")]
        })
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul { list-style: none; }\n\nbutton {\n    position: fixed;\n    bottom: 5px;\n    right: 5px;\n    font-size: 20px;\n    text-align: center;\n    border-radius: 5px;\n    outline: none;\n  }\n\n.footer-bottom{\n    padding: .25em;\n  }\n\n.footer-dark {\n    padding:50px 0;\n    color:#f0f9ff;\n    background-image: linear-gradient(to right,teal, rgb(166,139,158));\n  }\n\n.footer-dark h3 {\n    margin-top:0;\n    margin-bottom:12px;\n    font-weight:bold;\n    font-size:16px;\n  }\n\n.footer-dark ul {\n    padding:0;\n    list-style:none;\n    line-height:1.6;\n    font-size:14px;\n    margin-bottom:0;\n  }\n\n.footer-dark ul a {\n    color:inherit;\n    text-decoration:none;\n    opacity:0.6;\n  }\n\n.footer-dark ul a:hover {\n    opacity:0.8;\n  }\n\n@media (max-width:767px) {\n    .footer-dark .item:not(.social) {\n      text-align:center;\n      padding-bottom:20px;\n    }\n  }\n\n.footer-dark .item.text {\n    margin-bottom:36px;\n  }\n\n@media (max-width:767px) {\n    .footer-dark .item.text {\n      margin-bottom:0;\n    }\n  }\n\n.footer-dark .item.text p {\n    opacity:0.6;\n    margin-bottom:0;\n  }\n\n.footer-dark .item.social {\n    text-align:center;\n  }\n\n@media (max-width:991px) {\n    .footer-dark .item.social {\n      text-align:center;\n      margin-top:20px;\n    }\n  }\n\n.footer-dark .item.social > a {\n    font-size:20px;\n    width:36px;\n    height:36px;\n    line-height:36px;\n    display:inline-block;\n    text-align:center;\n    border-radius:50%;\n    box-shadow:0 0 0 1px rgba(255,255,255,0.4);\n    margin:0 8px;\n    color:#fff;\n    opacity:0.75;\n  }\n\n.footer-dark .item.social > a:hover {\n    opacity:0.9;\n  }\n\n.footer-dark .copyright {\n    text-align:center;\n    padding-top:24px;\n    opacity:0.3;\n    font-size:13px;\n    margin-bottom:0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssZ0JBQWdCLEVBQUU7O0FBRXZCO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0VBQWtFO0VBQ3BFOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7QUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixtQkFBbUI7SUFDckI7RUFDRjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0UsV0FBVztJQUNYLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtFQUNkOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bCB7IGxpc3Qtc3R5bGU6IG5vbmU7IH1cblxuYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgcmlnaHQ6IDVweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG5cbiAgLmZvb3Rlci1ib3R0b217XG4gICAgcGFkZGluZzogLjI1ZW07XG4gIH1cblxuICAuZm9vdGVyLWRhcmsge1xuICAgIHBhZGRpbmc6NTBweCAwO1xuICAgIGNvbG9yOiNmMGY5ZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHRlYWwsIHJnYigxNjYsMTM5LDE1OCkpO1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgaDMge1xuICAgIG1hcmdpbi10b3A6MDtcbiAgICBtYXJnaW4tYm90dG9tOjEycHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBmb250LXNpemU6MTZweDtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIHVsIHtcbiAgICBwYWRkaW5nOjA7XG4gICAgbGlzdC1zdHlsZTpub25lO1xuICAgIGxpbmUtaGVpZ2h0OjEuNjtcbiAgICBmb250LXNpemU6MTRweDtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayB1bCBhIHtcbiAgICBjb2xvcjppbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIG9wYWNpdHk6MC42O1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgdWwgYTpob3ZlciB7XG4gICAgb3BhY2l0eTowLjg7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XG4gICAgLmZvb3Rlci1kYXJrIC5pdGVtOm5vdCguc29jaWFsKSB7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gICAgfVxuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgLml0ZW0udGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTozNnB4O1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xuICAgIC5mb290ZXItZGFyayAuaXRlbS50ZXh0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICB9XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayAuaXRlbS50ZXh0IHAge1xuICAgIG9wYWNpdHk6MC42O1xuICAgIG1hcmdpbi1ib3R0b206MDtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIC5pdGVtLnNvY2lhbCB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KSB7XG4gICAgLmZvb3Rlci1kYXJrIC5pdGVtLnNvY2lhbCB7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6MjBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5mb290ZXItZGFyayAuaXRlbS5zb2NpYWwgPiBhIHtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICB3aWR0aDozNnB4O1xuICAgIGhlaWdodDozNnB4O1xuICAgIGxpbmUtaGVpZ2h0OjM2cHg7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XG4gICAgYm94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjQpO1xuICAgIG1hcmdpbjowIDhweDtcbiAgICBjb2xvcjojZmZmO1xuICAgIG9wYWNpdHk6MC43NTtcbiAgfVxuICBcbiAgLmZvb3Rlci1kYXJrIC5pdGVtLnNvY2lhbCA+IGE6aG92ZXIge1xuICAgIG9wYWNpdHk6MC45O1xuICB9XG4gIFxuICAuZm9vdGVyLWRhcmsgLmNvcHlyaWdodCB7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6MjRweDtcbiAgICBvcGFjaXR5OjAuMztcbiAgICBmb250LXNpemU6MTNweDtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gIH0iXX0= */"

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
        //250 from the top, the button appears. More scrolling needs to before button appears if number is made bigger.
        this.topPosToStartShowing = 250;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.checkScroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
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

module.exports = ".container {\n    min-height: 150px;\n}\n.card{\n    background-color: rgb(226,228,255) ;\n  }\n@media (min-width:1920px) {\n    div[name=\"component-sec\"] {\n      padding-bottom:85%;\n    }\n  }\n\n\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWlzc2lvbi1zdGF0ZW1lbnQvbWlzc2lvbi1zdGF0ZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksbUNBQW1DO0VBQ3JDO0FBSUE7SUFDRTtNQUNFLGtCQUFrQjtJQUNwQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbWlzc2lvbi1zdGF0ZW1lbnQvbWlzc2lvbi1zdGF0ZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xufVxuLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNiwyMjgsMjU1KSA7XG4gIH1cblxuXG5cbiAgQG1lZGlhIChtaW4td2lkdGg6MTkyMHB4KSB7XG4gICAgZGl2W25hbWU9XCJjb21wb25lbnQtc2VjXCJdIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOjg1JTtcbiAgICB9XG4gIH1cblxuXG4gICJdfQ== */"

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

module.exports = ".container {\n    min-height: 300px;\n}\n\n.card{\n    background-color: rgb(226,228,255) ;\n  }\n\n@media (min-width:1920px) {\n    div[name=\"component-sec\"] {\n      padding-bottom:55%;\n    }\n  }\n\n@media (min-width: 1400px) and (max-width: 1919px) {\n    div[name=\"component-sec\"] {\n      padding-bottom:67%;\n    }\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsdWUvdmFsdWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1DQUFtQztFQUNyQzs7QUFFQTtJQUNFO01BQ0Usa0JBQWtCO0lBQ3BCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLGtCQUFrQjtJQUNwQjtJQUNBIiwiZmlsZSI6InNyYy9hcHAvdmFsdWUvdmFsdWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4uY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LDIyOCwyNTUpIDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOjE5MjBweCkge1xuICAgIGRpdltuYW1lPVwiY29tcG9uZW50LXNlY1wiXSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTo1NSU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgYW5kIChtYXgtd2lkdGg6IDE5MTlweCkge1xuICAgIGRpdltuYW1lPVwiY29tcG9uZW50LXNlY1wiXSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTo2NyU7XG4gICAgfVxuICAgIH1cbiJdfQ== */"

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

module.exports = ".container {\n    min-height: 300px;\n}\n\n.card{\n    background-color: rgb(226,228,255) ;\n  }\n\n@media (min-width:1920px) {\n    div[name=\"component-sec\"] {\n      padding-bottom:75%;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlzaW9uL3Zpc2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUNBQW1DO0VBQ3JDOztBQUVBO0lBQ0U7TUFDRSxrQkFBa0I7SUFDcEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3Zpc2lvbi92aXNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4uY2FyZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LDIyOCwyNTUpIDtcbiAgfVxuXG4gIEBtZWRpYSAobWluLXdpZHRoOjE5MjBweCkge1xuICAgIGRpdltuYW1lPVwiY29tcG9uZW50LXNlY1wiXSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTo3NSU7XG4gICAgfVxuICB9Il19 */"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var WhatWeDoExpComponent = /** @class */ (function () {
    function WhatWeDoExpComponent(metaService) {
        this.metaService = metaService;
    }
    WhatWeDoExpComponent.prototype.ngOnInit = function () {
        this.metaService.addTag({ name: 'keywords', content: "Saint Louis Caregivers, Caregivers, St. Louis Caregivers, Angelic Caregivers, Elder Care, Elderly Care, Independent Living" });
        this.metaService.addTag({ name: 'description', content: "Saint Louis Angelic Caregivers is a company commited to providing great care and ensuring that you or your family member is being well cared for while helping them to remain independent" });
    };
    WhatWeDoExpComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
    ]; };
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

module.exports = __webpack_require__(/*! /mnt/h/programming/caregivers/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map