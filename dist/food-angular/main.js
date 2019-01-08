(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _foods_foods_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foods/foods.component */ "./src/app/foods/foods.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-detail/food-detail.component */ "./src/app/food-detail/food-detail.component.ts");
/* harmony import */ var _ingred_detail_ingred_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingred-detail/ingred-detail.component */ "./src/app/ingred-detail/ingred-detail.component.ts");
/* harmony import */ var _ingreds_ingreds_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingreds/ingreds.component */ "./src/app/ingreds/ingreds.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'detail/:id', component: _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_4__["FoodDetailComponent"] },
    { path: 'detingr/:id1', component: _ingred_detail_ingred_detail_component__WEBPACK_IMPORTED_MODULE_5__["IngredDetailComponent"] },
    { path: 'foods', component: _foods_foods_component__WEBPACK_IMPORTED_MODULE_2__["FoodsComponent"] },
    { path: 'ingreds', component: _ingreds_ingreds_component__WEBPACK_IMPORTED_MODULE_6__["IngredsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
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

module.exports = "/* AppComponent's private CSS styles */\r\nh1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n  }\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #607d8b;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #cfd8dc;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBQ3ZDO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtHQUNoQjtBQUNEO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7R0FDcEI7QUFDRDtJQUNFLGVBQWU7R0FDaEI7QUFDRDtJQUNFLGVBQWU7SUFDZiwwQkFBMEI7R0FDM0I7QUFDRDtJQUNFLGVBQWU7R0FDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5oMSB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICB9XHJcbiAgbmF2IGEge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgbmF2IGE6dmlzaXRlZCwgYTpsaW5rIHtcclxuICAgIGNvbG9yOiAjNjA3ZDhiO1xyXG4gIH1cclxuICBuYXYgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbiAgfVxyXG4gIG5hdiBhLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogIzAzOWJlNTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\n<nav>\n        <a routerLink=\"/dashboard\">Dashboard</a>\n        <a routerLink=\"/foods\">Foods</a>\n        <a routerLink=\"/ingreds\">Ingredients</a>\n</nav>\n<router-outlet></router-outlet>\n<app-messages></app-messages>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Food-api-test';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _foods_foods_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foods/foods.component */ "./src/app/foods/foods.component.ts");
/* harmony import */ var _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-detail/food-detail.component */ "./src/app/food-detail/food-detail.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _food_search_food_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./food-search/food-search.component */ "./src/app/food-search/food-search.component.ts");
/* harmony import */ var _ingred_search_ingred_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ingred-search/ingred-search.component */ "./src/app/ingred-search/ingred-search.component.ts");
/* harmony import */ var _ingred_detail_ingred_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ingred-detail/ingred-detail.component */ "./src/app/ingred-detail/ingred-detail.component.ts");
/* harmony import */ var _ingreds_ingreds_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ingreds/ingreds.component */ "./src/app/ingreds/ingreds.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- NgModel lives here







//import { LocationStrategy,HashLocationStrategy }    from '@angular/common';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';




//import { AlertModule } from 'ngx-bootstrap';
//import { Provider } from '@angular/core';
//import { AppComponent} from ‘./app/’;

//import {CustExtBrowserXhr} from './cust-ext-browser-xhr';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _foods_foods_component__WEBPACK_IMPORTED_MODULE_4__["FoodsComponent"],
                _food_detail_food_detail_component__WEBPACK_IMPORTED_MODULE_5__["FoodDetailComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _food_search_food_search_component__WEBPACK_IMPORTED_MODULE_10__["FoodSearchComponent"],
                _ingred_search_ingred_search_component__WEBPACK_IMPORTED_MODULE_11__["IngredSearchComponent"],
                _ingred_detail_ingred_detail_component__WEBPACK_IMPORTED_MODULE_12__["IngredDetailComponent"],
                _ingreds_ingreds_component__WEBPACK_IMPORTED_MODULE_13__["IngredsComponent"],
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_14__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            ],
            // providers: [{provide: BrowserXhr, useClass:CustExtBrowserXhr},
            //   {provide: LocationStrategy, useClass: HashLocationStrategy}],
            // providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n    float: left;\r\n    padding-right: 20px;\r\n    padding-bottom: 20px;\r\n  }\r\n[class*='col-']:last-of-type {\r\n    padding-right: 0;\r\n  }\r\na {\r\n    text-decoration: none;\r\n  }\r\n*, *:after, *:before {\r\n    box-sizing: border-box;\r\n  }\r\nh3 {\r\n    text-align: center; margin-bottom: 0;\r\n  }\r\nh4 {\r\n    position: relative;\r\n  }\r\n.grid {\r\n    margin: 0;\r\n  }\r\n.col-1-4 {\r\n    width: 25%;\r\n  }\r\n.module {\r\n    padding: 20px;\r\n    text-align: center;\r\n    color: #eee;\r\n    max-height: 120px;\r\n    min-width: 120px;\r\n    background-color: #607d8b;\r\n    border-radius: 2px;\r\n  }\r\n.module:hover {\r\n    background-color: #eee;\r\n    cursor: pointer;\r\n    color: #607d8b;\r\n  }\r\n.grid-pad {\r\n    padding: 10px 0;\r\n  }\r\n.grid-pad > [class*='col-']:last-of-type {\r\n    padding-right: 20px;\r\n  }\r\n@media (max-width: 600px) {\r\n    .module {\r\n      font-size: 10px;\r\n      max-height: 75px; }\r\n  }\r\n@media (max-width: 1024px) {\r\n    .grid {\r\n      margin: 0;\r\n    }\r\n    .module {\r\n      min-width: 60px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztJQUNJLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIscUJBQXFCO0dBQ3RCO0FBQ0Q7SUFDRSxpQkFBaUI7R0FDbEI7QUFDRDtJQUNFLHNCQUFzQjtHQUN2QjtBQUNEO0lBR0UsdUJBQXVCO0dBQ3hCO0FBQ0Q7SUFDRSxtQkFBbUIsQ0FBQyxpQkFBaUI7R0FDdEM7QUFDRDtJQUNFLG1CQUFtQjtHQUNwQjtBQUNEO0lBQ0UsVUFBVTtHQUNYO0FBQ0Q7SUFDRSxXQUFXO0dBQ1o7QUFDRDtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG1CQUFtQjtHQUNwQjtBQUNEO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0dBQ2hCO0FBQ0Q7SUFDRSxnQkFBZ0I7R0FDakI7QUFDRDtJQUNFLG9CQUFvQjtHQUNyQjtBQUNEO0lBQ0U7TUFDRSxnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUU7R0FDdEI7QUFDRDtJQUNFO01BQ0UsVUFBVTtLQUNYO0lBQ0Q7TUFDRSxnQkFBZ0I7S0FDakI7R0FDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERhc2hib2FyZENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5bY2xhc3MqPSdjb2wtJ10ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gICosICo6YWZ0ZXIsICo6YmVmb3JlIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuZ3JpZCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5jb2wtMS00IHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5tb2R1bGUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZWVlO1xyXG4gICAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcbiAgLm1vZHVsZTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICM2MDdkOGI7XHJcbiAgfVxyXG4gIC5ncmlkLXBhZCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgfVxyXG4gIC5ncmlkLXBhZCA+IFtjbGFzcyo9J2NvbC0nXTpsYXN0LW9mLXR5cGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubW9kdWxlIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBtYXgtaGVpZ2h0OiA3NXB4OyB9XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5ncmlkIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgLm1vZHVsZSB7XHJcbiAgICAgIG1pbi13aWR0aDogNjBweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Top Foods</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let food of foods\" class=\"col-1-4\"\n  routerLink=\"/detail/{{food.iddish}}\">\n    <div class=\"module hero\">\n      <h4>{{food.dishname}}</h4>\n    </div>\n  </a>\n</div>\n\n<app-food-search></app-food-search>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.foods = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    DashboardComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getFoods()
            .subscribe(function (foods) { return _this.foods = foods.slice(1, 5); });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_1__["FoodService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/food-detail/food-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\ninput {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\nbutton {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer; cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\n/* HeroesComponent's private CSS styles */\r\n.heroes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.heroes li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.heroes a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.heroes a:hover {\r\n  color:#607D8B;\r\n}\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 194px;\r\n  top: -53px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC1kZXRhaWwvZm9vZC1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7QUFDOUM7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGVBQWU7SUFDZixlQUFlO0lBQ2Ysa0JBQWtCO0dBQ25CO0FBQ0Q7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtHQUNwQjtBQUNEO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCLENBQUMsYUFBYTtHQUMvQjtBQUNEO0lBQ0UsMEJBQTBCO0dBQzNCO0FBQ0Q7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7R0FDZDtBQUlELDBDQUEwQztBQUM1QztFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsY0FBYztDQUNmO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMkJBQTJCO0NBQzVCO0FBR0Q7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQ0FBa0M7RUFDbEMsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvZm9vZC1kZXRhaWwvZm9vZC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEhlcm9EZXRhaWxDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxubGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDNlbTtcclxuICAgIG1hcmdpbjogLjVlbSAwO1xyXG4gICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHBhZGRpbmctbGVmdDogLjRlbTtcclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IGN1cnNvcjogaGFuZDtcclxuICB9XHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XHJcbiAgfVxyXG4gIGJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6ICNjY2M7XHJcbiAgICBjdXJzb3I6IGF1dG87XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qIEhlcm9lc0NvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG4uaGVyb2VzIHtcclxuICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTVlbTtcclxufVxyXG4uaGVyb2VzIGxpIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XHJcbiAgbWFyZ2luOiAuNWVtO1xyXG4gIHBhZGRpbmc6IC4zZW0gMDtcclxuICBoZWlnaHQ6IDEuNmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmhlcm9lcyBsaTpob3ZlciB7XHJcbiAgY29sb3I6ICM2MDdEOEI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcclxuICBsZWZ0OiAuMWVtO1xyXG59XHJcblxyXG4uaGVyb2VzIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4uaGVyb2VzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiM2MDdEOEI7XHJcbn1cclxuXHJcbi5oZXJvZXMgLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMC44ZW0gMC43ZW0gMCAwLjdlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0xcHg7XHJcbiAgdG9wOiAtNHB4O1xyXG4gIGhlaWdodDogMS44ZW07XHJcbiAgbWluLXdpZHRoOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICBib3JkZXItcmFkaXVzOiA0cHggMCAwIDRweDtcclxufVxyXG5cclxuXHJcbmJ1dHRvbi5kZWxldGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAxOTRweDtcclxuICB0b3A6IC01M3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/food-detail/food-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"food\">\n    <h2>{{food.dishname | uppercase}} Details</h2>\n    <div><span>id: </span>{{food.iddish}}</div>\n    <div>\n      <label>name:\n        <input [(ngModel)]=\"food.dishname\" placeholder=\"name\"/>\n      </label>\n    </div>\n\n      <button (click)=\"goBack()\">go back</button>\n      <button (click)=\"save()\">save</button>\n\n    <h2>{{food.dishName | uppercase}} Ingreds</h2>\n\n<ul class=\"heroes\">\n    <li *ngFor=\"let ingred of ingreds\">\n        <a routerLink=\"/detingr/{{ingred.idingrenames}}\">\n          <span class=\"badge\">{{ingred.idingrenames}}</span> {{ingred.ingrname}}\n        </a>\n         <button class=\"delete\" title=\"delete food\"\n        (click)=\"deleteIngr(food,ingred)\">x</button> \n    </li>\n</ul>\n\n\n<app-ingred-search [food]=\"food\"></app-ingred-search>\n</div>\n\n "

/***/ }),

/***/ "./src/app/food-detail/food-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/food-detail/food-detail.component.ts ***!
  \******************************************************/
/*! exports provided: FoodDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDetailComponent", function() { return FoodDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food */ "./src/app/food.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
/* harmony import */ var _ingerd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ingerd.service */ "./src/app/ingerd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoodDetailComponent = /** @class */ (function () {
    function FoodDetailComponent(route, foodService, ingerdService, location) {
        this.route = route;
        this.foodService = foodService;
        this.ingerdService = ingerdService;
        this.location = location;
    }
    FoodDetailComponent.prototype.ngOnInit = function () {
        this.getFood();
        this.getIngreds();
    };
    FoodDetailComponent.prototype.getFood = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.foodService.getFood(id)
            .subscribe(function (food) { return _this.food = food; });
    };
    FoodDetailComponent.prototype.getIngreds = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.ingerdService.getIngreds(id)
            .subscribe(function (ingreds) { return _this.ingreds = ingreds; });
    };
    FoodDetailComponent.prototype.deleteIngr = function (food, ingred) {
        var a = food.iddish;
        var b = ingred.idingrenames;
        this.ingreds = this.ingreds.filter(function (h) { return h !== ingred; });
        this.ingerdService.deleteIngred({ idDish: a,
            idIngred: b }).subscribe();
    };
    FoodDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    FoodDetailComponent.prototype.save = function () {
        var _this = this;
        this.foodService.updateFood(this.food)
            .subscribe(function () { return _this.goBack(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _food__WEBPACK_IMPORTED_MODULE_1__["Food"])
    ], FoodDetailComponent.prototype, "food", void 0);
    FoodDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-detail',
            template: __webpack_require__(/*! ./food-detail.component.html */ "./src/app/food-detail/food-detail.component.html"),
            styles: [__webpack_require__(/*! ./food-detail.component.css */ "./src/app/food-detail/food-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _food_service__WEBPACK_IMPORTED_MODULE_4__["FoodService"],
            _ingerd_service__WEBPACK_IMPORTED_MODULE_5__["IngerdService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], FoodDetailComponent);
    return FoodDetailComponent;
}());



/***/ }),

/***/ "./src/app/food-search/food-search.component.css":
/*!*******************************************************!*\
  !*** ./src/app/food-search/food-search.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroSearch private styles */\r\n.search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width:195px;\r\n    height: 16px;\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n  }\r\n.search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n.search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n.search-result li a:hover {\r\n    color: white;\r\n  }\r\n.search-result li a:active {\r\n    color: white;\r\n  }\r\n#search-box {\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\nul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZC1zZWFyY2gvZm9vZC1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwrQkFBK0I7QUFDL0I7SUFDSSw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtHQUN2QjtBQUVEO0lBQ0UsMEJBQTBCO0dBQzNCO0FBRUQ7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtHQUN2QjtBQUVEO0lBQ0UsYUFBYTtHQUNkO0FBQ0Q7SUFDRSxhQUFhO0dBQ2Q7QUFDRDtJQUNFLGFBQWE7SUFDYixhQUFhO0dBQ2Q7QUFHRDtJQUNFLGNBQWM7SUFDZCxnQkFBZ0I7R0FDakIiLCJmaWxlIjoic3JjL2FwcC9mb29kLXNlYXJjaC9mb29kLXNlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb1NlYXJjaCBwcml2YXRlIHN0eWxlcyAqL1xyXG4uc2VhcmNoLXJlc3VsdCBsaSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZ3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgICB3aWR0aDoxOTVweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLXJlc3VsdCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA3RDhCO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLXJlc3VsdCBsaSBhIHtcclxuICAgIGNvbG9yOiAjODg4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuc2VhcmNoLXJlc3VsdCBsaSBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICNzZWFyY2gtYm94IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgdWwuc2VhcmNoLXJlc3VsdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/food-search/food-search.component.html":
/*!********************************************************!*\
  !*** ./src/app/food-search/food-search.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-component\">\n    <h4>Food Search</h4>\n   \n    <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n   \n    <ul class=\"search-result\">\n      <li *ngFor=\"let food of foods$ | async\" >\n        <a routerLink=\"/detail/{{food.iddish}}\">\n          {{food.dishName}}\n        </a>\n      </li>\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/food-search/food-search.component.ts":
/*!******************************************************!*\
  !*** ./src/app/food-search/food-search.component.ts ***!
  \******************************************************/
/*! exports provided: FoodSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodSearchComponent", function() { return FoodSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodSearchComponent = /** @class */ (function () {
    function FoodSearchComponent(foodService) {
        this.foodService = foodService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // Push a search term into the observable stream.
    FoodSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    FoodSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foods$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (term) { return _this.foodService.searchFoods(term); }));
    };
    FoodSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-food-search',
            template: __webpack_require__(/*! ./food-search.component.html */ "./src/app/food-search/food-search.component.html"),
            styles: [__webpack_require__(/*! ./food-search.component.css */ "./src/app/food-search/food-search.component.css")]
        }),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_3__["FoodService"]])
    ], FoodSearchComponent);
    return FoodSearchComponent;
}());



/***/ }),

/***/ "./src/app/food.service.ts":
/*!*********************************!*\
  !*** ./src/app/food.service.ts ***!
  \*********************************/
/*! exports provided: FoodService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodService", function() { return FoodService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FOODS } from './mock-foods';




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
var FoodService = /** @class */ (function () {
    function FoodService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseUrl0 = 'http://127.0.0.1:8080/rest';
        this.baseUrl = 'http://aaa-projm.7e14.starter-us-west-2.openshiftapps.com/rest';
        this.foodsUrl = this.baseUrl0 + '/dish'; // URL to web api
        this.foodsUrl1 = this.baseUrl0 + '/q'; // URL to web api
        this.foodsUrl0 = 'https://foodapi8.herokuapp.com'; /////////////
    }
    /** GET heroes from the server */
    FoodService.prototype.getFoods = function () {
        var _this = this;
        var url = this.foodsUrl0 + "/dishes";
        return this.http.get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (foods) { return _this.log('fetched foods'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getfoods', [])));
    };
    /** PUT: update the hero on the server */
    FoodService.prototype.updateFood = function (food) {
        var _this = this;
        var url = this.foodsUrl0 + "/dishes/" + food.iddish;
        return this.http.put(url, food, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated hero id=" + food.iddish); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateHero')));
    };
    /** GET hero by id. Will 404 if id not found */
    FoodService.prototype.getFood = function (id) {
        var _this = this;
        var url = this.foodsUrl0 + "/dishes/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched food id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getFood id=" + id)));
    };
    /** POST: add a new hero to the server */
    FoodService.prototype.addFood = function (food) {
        var _this = this;
        var url = this.foodsUrl0 + "/dishes";
        return this.http.post(url, food, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (food) { return _this.log("added food w/ id=" + food.iddish); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addFood')));
    };
    // getFood(id: number): Observable<Food> {
    //   // TODO: send the message _after_ fetching the hero
    //   this.messageService.add(`HeroService: fetched hero id=${id}`);
    //   return of(FOODS.find(food => food.id === id));
    // }
    /** DELETE: delete the hero from the server */
    FoodService.prototype.deleteFood = function (food) {
        var _this = this;
        var id = typeof food === 'number' ? food : food.iddish;
        var url = this.foodsUrl0 + "/dishes/" + id;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted food id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteFood')));
    };
    /* GET heroes whose name contains search term */
    FoodService.prototype.searchFoods = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get(this.foodsUrl0 + "/search?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("found foods matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchHeroes', [])));
    };
    //
    FoodService.prototype.log = function (message) {
        this.messageService.add("FoodService: " + message);
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    FoodService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    FoodService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], FoodService);
    return FoodService;
}());



/***/ }),

/***/ "./src/app/food.ts":
/*!*************************!*\
  !*** ./src/app/food.ts ***!
  \*************************/
/*! exports provided: Food */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Food", function() { return Food; });
var Food = /** @class */ (function () {
    function Food() {
    }
    return Food;
}());



/***/ }),

/***/ "./src/app/foods/foods.component.css":
/*!*******************************************!*\
  !*** ./src/app/foods/foods.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.heroes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.heroes li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.heroes a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.heroes a:hover {\r\n  color:#607D8B;\r\n}\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\nbutton {\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n  font-family: Arial;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 194px;\r\n  top: -32px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vZHMvZm9vZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQ0FBMEM7QUFDMUM7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0NBQ2I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0NBQ1o7QUFFRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0NBQ2Q7QUFFRDtFQUNFLGNBQWM7Q0FDZjtBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtDQUM1QjtBQUVEO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0NBQ3BCO0FBRUQ7RUFDRSwwQkFBMEI7Q0FDM0I7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLGtDQUFrQztFQUNsQyxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC9mb29kcy9mb29kcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbi5oZXJvZXMge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxNWVtO1xyXG59XHJcbi5oZXJvZXMgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICBtYXJnaW46IC41ZW07XHJcbiAgcGFkZGluZzogLjNlbSAwO1xyXG4gIGhlaWdodDogMS42ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uaGVyb2VzIGxpOmhvdmVyIHtcclxuICBjb2xvcjogIzYwN0Q4QjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gIGxlZnQ6IC4xZW07XHJcbn1cclxuXHJcbi5oZXJvZXMgYSB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5oZXJvZXMgYTpob3ZlciB7XHJcbiAgY29sb3I6IzYwN0Q4QjtcclxufVxyXG5cclxuLmhlcm9lcyAuYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTFweDtcclxuICB0b3A6IC00cHg7XHJcbiAgaGVpZ2h0OiAxLjhlbTtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY3Vyc29yOiBoYW5kO1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG59XHJcblxyXG5idXR0b24uZGVsZXRlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMTk0cHg7XHJcbiAgdG9wOiAtMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/foods/foods.component.html":
/*!********************************************!*\
  !*** ./src/app/foods/foods.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Foods</h2>\r\n<ul class=\"heroes\">\r\n    <li *ngFor=\"let food of foods\">\r\n        <a routerLink=\"/detail/{{food.iddish}}\">\r\n          <span class=\"badge\">{{food.iddish}}</span> {{food.dishname}}\r\n        </a>\r\n        <button class=\"delete\" title=\"delete food\"\r\n        (click)=\"delete(food)\">x</button>\r\n    </li>\r\n</ul>\r\n\r\n<div>\r\n    <label>Food name:\r\n      <input #foodName />\r\n    </label>\r\n    <!-- (click) passes input value to add() and then clears the input -->\r\n    <button (click)=\"add(foodName.value); foodName.value=''\">\r\n      add\r\n    </button>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/foods/foods.component.ts":
/*!******************************************!*\
  !*** ./src/app/foods/foods.component.ts ***!
  \******************************************/
/*! exports provided: FoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodsComponent", function() { return FoodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../food */ "./src/app/food.ts");
/* harmony import */ var _food_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../food.service */ "./src/app/food.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FOODS } from '../mock-foods';

var FoodsComponent = /** @class */ (function () {
    function FoodsComponent(foodService) {
        this.foodService = foodService;
    }
    FoodsComponent.prototype.ngOnInit = function () {
        this.getFoods();
    };
    FoodsComponent.prototype.getFoods = function () {
        var _this = this;
        this.foodService.getFoods()
            .subscribe(function (foods) { return _this.foods = foods; });
    };
    FoodsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        //dishName =name;
        var foodtmp = new _food__WEBPACK_IMPORTED_MODULE_1__["Food"]();
        foodtmp.dishname = name;
        this.foodService.addFood(foodtmp)
            .subscribe(function (food) {
            _this.foods.push(food);
        });
    };
    FoodsComponent.prototype.delete = function (food) {
        this.foods = this.foods.filter(function (h) { return h !== food; });
        this.foodService.deleteFood(food).subscribe();
    };
    FoodsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-foods',
            template: __webpack_require__(/*! ./foods.component.html */ "./src/app/foods/foods.component.html"),
            styles: [__webpack_require__(/*! ./foods.component.css */ "./src/app/foods/foods.component.css")]
        }),
        __metadata("design:paramtypes", [_food_service__WEBPACK_IMPORTED_MODULE_2__["FoodService"]])
    ], FoodsComponent);
    return FoodsComponent;
}());



/***/ }),

/***/ "./src/app/ingerd.service.ts":
/*!***********************************!*\
  !*** ./src/app/ingerd.service.ts ***!
  \***********************************/
/*! exports provided: IngerdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngerdService", function() { return IngerdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message.service */ "./src/app/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' })
};
var IngerdService = /** @class */ (function () {
    function IngerdService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseUrl = 'http://aaa-projm.7e14.starter-us-west-2.openshiftapps.com/rest';
        this.baseUrl0 = 'http://127.0.0.1:8080/rest';
        this.foodsUrl = this.baseUrl0 + '/ingr'; // URL to web api
        this.foodsUrl1 = this.baseUrl0 + '/q'; // URL to web api
        this.ingredSearchUrl = this.baseUrl0 + '/qingred';
        this.getIngredUrl = this.baseUrl0 + '/oneingre/retoneingre';
        this.foodsUrl0 = 'https://foodapi8.herokuapp.com'; /////////////
    }
    /** GET hero by id. Will 404 if id not found */
    IngerdService.prototype.getIngreds = function (id) {
        var _this = this;
        var url = this.foodsUrl0 + "/dishes/" + id + "/ingreds";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched ingreds for food id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getFood id=" + id)));
    };
    /** GET hero by id. Will 404 if id not found */
    IngerdService.prototype.getAllIngreds = function () {
        var _this = this;
        var url = this.foodsUrl0 + "/ingreds";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched ingreds"); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getIngreds")));
    };
    /** GET hero by id. Will 404 if id not found */
    IngerdService.prototype.getIngred = function (id) {
        var _this = this;
        var url = this.foodsUrl0 + "/ingreds/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched ingred id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getIngred id=" + id)));
    };
    // getIngreddat(id: number): Observable<Ingred> {
    //   const url = `${this.getIngredUrl}/${id}`;
    //   return this.http.get<Ingred>(url).pipe(
    //     tap(_ => this.log(`fetched ingred id=${id}`)),
    //     catchError(this.handleError<Ingred>(`getIngred id=${id}`))
    //   );
    // }
    IngerdService.prototype.deleteIngred = function (indish) {
        var _this = this;
        //const id = typeof food === 'number' ? food : food.id;
        var url = this.foodsUrl0 + "/dishes/" + indish.idDish + "/ingreds/" + indish.idIngred;
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("deleted ingredi id= " + indish.idIngred + " from food id=" + indish.idDish); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteIngred')));
    };
    IngerdService.prototype.deleteIngred1 = function (id) {
        var _this = this;
        //const id = typeof food === 'number' ? food : food.id;
        var url = this.foodsUrl0 + "/ingreds/" + id + "/dishes";
        return this.http.delete(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched ingred id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getIngred id=" + id)));
    };
    //count dishes for ingreds list
    IngerdService.prototype.addIngred = function (indish) {
        var _this = this;
        //const id = typeof food === 'number' ? food : food.id;
        var url = this.foodsUrl0 + "/dishes/" + indish.idDish + "/ingreds/" + indish.idIngred;
        return this.http.post(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("added ingredi id= " + indish.idIngred + " to food id=" + indish.idDish); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addIngred')));
    };
    IngerdService.prototype.addData = function (ingred) {
        var url = this.foodsUrl0 + "/count/ingreds/" + ingred.idingrenames;
        return this.http.get(url).pipe(
        //  tap(_ => this.log(`fetched ingred det id=${ingred.id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getIngred det id=" + ingred.idingrenames)));
    };
    IngerdService.prototype.foodsForIngred = function (ingred) {
        var url = this.foodsUrl0 + "/dishes/ingreds/" + ingred.idingrenames;
        return this.http.get(url).pipe(
        //  tap(_ => this.log(`fetched ingred det id=${ingred.id}`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getfoods for Ingred id=" + ingred.idingrenames)));
    };
    /** POST: add a new hero to the server */
    IngerdService.prototype.newInrged = function (ingred) {
        var _this = this;
        var url = this.foodsUrl0 + "/ingreds";
        return this.http.post(url, ingred, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (food) { return _this.log("added food w/ id=" + food); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addFood')));
    };
    IngerdService.prototype.log = function (message) {
        this.messageService.add("IngredService: " + message);
    };
    /* GET heroes whose name contains search term */
    IngerdService.prototype.searchIngreds = function (term) {
        var _this = this;
        if (!term.trim()) {
            // if not search term, return empty hero array.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }
        return this.http.get(this.foodsUrl0 + "/ingreds/search?name=" + term).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("found Ingreds matching \"" + term + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('searchIngreds', [])));
    };
    IngerdService.prototype.updateIngred = function (ingred) {
        var _this = this;
        var url = this.foodsUrl0 + "/ingreds";
        return this.http.put(url, ingred, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("updated ingred id=" + ingred.idingrenames); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('updateHero')));
    };
    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    IngerdService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    IngerdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], IngerdService);
    return IngerdService;
}());



/***/ }),

/***/ "./src/app/ingred-detail/ingred-detail.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ingred-detail/ingred-detail.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n    display: inline-block;\r\n    width: 3em;\r\n    margin: .5em 0;\r\n    color: #607D8B;\r\n    font-weight: bold;\r\n  }\r\ninput {\r\n    height: 2em;\r\n    font-size: 1em;\r\n    padding-left: .4em;\r\n  }\r\nbutton {\r\n    margin-top: 20px;\r\n    font-family: Arial;\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer; cursor: hand;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton:disabled {\r\n    background-color: #eee;\r\n    color: #ccc;\r\n    cursor: auto;\r\n  }\r\n/* HeroesComponent's private CSS styles */\r\n.heroes {\r\n  margin: 0 0 2em 0;\r\n  list-style-type: none;\r\n  padding: 0;\r\n  width: 15em;\r\n}\r\n.heroes li {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #EEE;\r\n  margin: .5em;\r\n  padding: .3em 0;\r\n  height: 1.6em;\r\n  border-radius: 4px;\r\n}\r\n.heroes li:hover {\r\n  color: #607D8B;\r\n  background-color: #DDD;\r\n  left: .1em;\r\n}\r\n.heroes a {\r\n  color: #888;\r\n  text-decoration: none;\r\n  position: relative;\r\n  display: block;\r\n  width: 250px;\r\n}\r\n.heroes a:hover {\r\n  color:#607D8B;\r\n}\r\n.heroes .badge {\r\n  display: inline-block;\r\n  font-size: small;\r\n  color: white;\r\n  padding: 0.8em 0.7em 0 0.7em;\r\n  background-color: #607D8B;\r\n  line-height: 1em;\r\n  position: relative;\r\n  left: -1px;\r\n  top: -4px;\r\n  height: 1.8em;\r\n  min-width: 16px;\r\n  text-align: right;\r\n  margin-right: .8em;\r\n  border-radius: 4px 0 0 4px;\r\n}\r\nbutton.delete {\r\n  position: relative;\r\n  left: 194px;\r\n  top: -53px;\r\n  background-color: gray !important;\r\n  color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkLWRldGFpbC9pbmdyZWQtZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsOENBQThDO0FBQzlDO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGtCQUFrQjtHQUNuQjtBQUNEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7R0FDcEI7QUFDRDtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQixDQUFDLGFBQWE7R0FDL0I7QUFDRDtJQUNFLDBCQUEwQjtHQUMzQjtBQUNEO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0dBQ2Q7QUFHQSwwQ0FBMEM7QUFDN0M7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0NBQ2I7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixXQUFXO0NBQ1o7QUFFRDtFQUNFLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0NBQ2Q7QUFFRDtFQUNFLGNBQWM7Q0FDZjtBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDJCQUEyQjtDQUM1QjtBQUdEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0NBQWtDO0VBQ2xDLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZC1kZXRhaWwvaW5ncmVkLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb0RldGFpbENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xyXG5sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgbWFyZ2luOiAuNWVtIDA7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjsgY3Vyc29yOiBoYW5kO1xyXG4gIH1cclxuICBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcclxuICB9XHJcbiAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBjb2xvcjogI2NjYztcclxuICAgIGN1cnNvcjogYXV0bztcclxuICB9XHJcblxyXG5cclxuICAgLyogSGVyb2VzQ29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXHJcbi5oZXJvZXMge1xyXG4gIG1hcmdpbjogMCAwIDJlbSAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxNWVtO1xyXG59XHJcbi5oZXJvZXMgbGkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICBtYXJnaW46IC41ZW07XHJcbiAgcGFkZGluZzogLjNlbSAwO1xyXG4gIGhlaWdodDogMS42ZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uaGVyb2VzIGxpOmhvdmVyIHtcclxuICBjb2xvcjogIzYwN0Q4QjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gIGxlZnQ6IC4xZW07XHJcbn1cclxuXHJcbi5oZXJvZXMgYSB7XHJcbiAgY29sb3I6ICM4ODg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuXHJcbi5oZXJvZXMgYTpob3ZlciB7XHJcbiAgY29sb3I6IzYwN0Q4QjtcclxufVxyXG5cclxuLmhlcm9lcyAuYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgbGluZS1oZWlnaHQ6IDFlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogLTFweDtcclxuICB0b3A6IC00cHg7XHJcbiAgaGVpZ2h0OiAxLjhlbTtcclxuICBtaW4td2lkdGg6IDE2cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG59XHJcblxyXG5cclxuYnV0dG9uLmRlbGV0ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDE5NHB4O1xyXG4gIHRvcDogLTUzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/ingred-detail/ingred-detail.component.html":
/*!************************************************************!*\
  !*** ./src/app/ingred-detail/ingred-detail.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ingred\">\n  <h2>{{ingred.ingrName | uppercase}} Details</h2>\n  <div><span>id: </span>{{ingred.idingrenames}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"ingred.ingrname\" placeholder=\"name\"/>\n    </label>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n  <button (click)=\"save()\">save</button>\n\n\n  <h2>{{ingred.ingrname | uppercase}} related foods</h2>\n\n  <ul class=\"heroes\">\n    <li *ngFor=\"let food of foods\">\n        <a routerLink=\"/detail/{{food.iddish}}\">\n          <span class=\"badge\">{{food.iddish}}</span> {{food.dishname}}\n        </a>\n\n    </li>\n</ul>\n\n  </div>"

/***/ }),

/***/ "./src/app/ingred-detail/ingred-detail.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ingred-detail/ingred-detail.component.ts ***!
  \**********************************************************/
/*! exports provided: IngredDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredDetailComponent", function() { return IngredDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ingredi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ingredi */ "./src/app/ingredi.ts");
/* harmony import */ var _ingerd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ingerd.service */ "./src/app/ingerd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IngredDetailComponent = /** @class */ (function () {
    function IngredDetailComponent(route, ingredService, location) {
        this.route = route;
        this.ingredService = ingredService;
        this.location = location;
    }
    IngredDetailComponent.prototype.ngOnInit = function () {
        this.getIngred();
    };
    IngredDetailComponent.prototype.getIngred = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id1');
        this.ingredService.getIngred(id)
            .subscribe(function (ingred) { _this.ingred = ingred; _this.getfoods(ingred); });
    };
    IngredDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    IngredDetailComponent.prototype.save = function () {
        var _this = this;
        this.ingredService.updateIngred(this.ingred)
            .subscribe(function () { return _this.goBack(); });
    };
    IngredDetailComponent.prototype.getfoods = function (ingre) {
        var _this = this;
        this.ingredService.foodsForIngred(ingre)
            .subscribe(function (foods) { return _this.foods = foods; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _ingredi__WEBPACK_IMPORTED_MODULE_3__["Ingred"])
    ], IngredDetailComponent.prototype, "ingred", void 0);
    IngredDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingred-detail',
            template: __webpack_require__(/*! ./ingred-detail.component.html */ "./src/app/ingred-detail/ingred-detail.component.html"),
            styles: [__webpack_require__(/*! ./ingred-detail.component.css */ "./src/app/ingred-detail/ingred-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ingerd_service__WEBPACK_IMPORTED_MODULE_4__["IngerdService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], IngredDetailComponent);
    return IngredDetailComponent;
}());



/***/ }),

/***/ "./src/app/ingred-search/ingred-search.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ingred-search/ingred-search.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroSearch private styles */\r\n.search-result li {\r\n    border-bottom: 1px solid gray;\r\n    border-left: 1px solid gray;\r\n    border-right: 1px solid gray;\r\n    width:195px;\r\n    height: 16px;\r\n    padding: 5px;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    list-style-type: none;\r\n  }\r\n.search-result li:hover {\r\n    background-color: #607D8B;\r\n  }\r\n.search-result li a {\r\n    color: #888;\r\n    display: block;\r\n    text-decoration: none;\r\n  }\r\n.search-result li a:hover {\r\n    color: white;\r\n  }\r\n.search-result li a:active {\r\n    color: white;\r\n  }\r\n#search-box {\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\nul.search-result {\r\n    margin-top: 0;\r\n    padding-left: 0;\r\n  }\r\nbutton.delete {\r\n    position: relative;\r\n    left: 194px;\r\n    top: -53px;\r\n    background-color: gray !important;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkLXNlYXJjaC9pbmdyZWQtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0JBQStCO0FBQy9CO0lBQ0ksOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixzQkFBc0I7R0FDdkI7QUFFRDtJQUNFLDBCQUEwQjtHQUMzQjtBQUVEO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixzQkFBc0I7R0FDdkI7QUFFRDtJQUNFLGFBQWE7R0FDZDtBQUNEO0lBQ0UsYUFBYTtHQUNkO0FBQ0Q7SUFDRSxhQUFhO0lBQ2IsYUFBYTtHQUNkO0FBR0Q7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCO0dBQ2pCO0FBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsYUFBYTtHQUNkIiwiZmlsZSI6InNyYy9hcHAvaW5ncmVkLXNlYXJjaC9pbmdyZWQtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvU2VhcmNoIHByaXZhdGUgc3R5bGVzICovXHJcbi5zZWFyY2gtcmVzdWx0IGxpIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOjE5NXB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtcmVzdWx0IGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGEge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1yZXN1bHQgbGkgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgI3NlYXJjaC1ib3gge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBcclxuICB1bC5zZWFyY2gtcmVzdWx0IHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgfVxyXG5cclxuICBidXR0b24uZGVsZXRlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDE5NHB4O1xyXG4gICAgdG9wOiAtNTNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/ingred-search/ingred-search.component.html":
/*!************************************************************!*\
  !*** ./src/app/ingred-search/ingred-search.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"selectedIngred\" >add {{selectedIngred.ingrname}} id {{selectedIngred.idingrenames}} to {{food.dishname}}       \n   <br> <button class=\"delete1\" title=\"add selected\"\n  (click)=\"addIngred(food,selectedIngred)\">yep</button> </div>\n<div id=\"search-component\">\n  <h4>Ingred Search</h4>\n\n\n\n  <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" [(ngModel)]='selectedIngred.ingrname'/>\n  <div *ngIf=\"(ingreds$ | async)?.length==0\">add {{searchBox.value}} to {{food.dishName}}</div>\n \n  <ul class=\"search-result\">\n    <li *ngFor=\"let ingred of ingreds$ | async\" >\n      <a (click)=\"setSelectedIngred(ingred)\" >     <!-- <a routerLink=\"/detingr/{{ingred.id}}\"> -->\n        {{ingred.ingrname}}\n      </a>\n    </li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/ingred-search/ingred-search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ingred-search/ingred-search.component.ts ***!
  \**********************************************************/
/*! exports provided: IngredSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredSearchComponent", function() { return IngredSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ingerd_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ingerd.service */ "./src/app/ingerd.service.ts");
/* harmony import */ var _food__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../food */ "./src/app/food.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AttachSession } from '../../../node_modules/protractor/built/driverProviders';
var IngredSearchComponent = /** @class */ (function () {
    function IngredSearchComponent(ingredService) {
        this.ingredService = ingredService;
        //name:string;
        //nullIngred:Ingred;
        this.nullIngred = { ingrname: "",
            idingrenames: -1 };
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    IngredSearchComponent.prototype.setSelectedIngred = function (ingr) { this.selectedIngred = ingr; };
    IngredSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
        // this.selectedIngred=this.nullIngred;
    };
    IngredSearchComponent.prototype.addIngred = function (food, ingred) {
        var _this = this;
        if (ingred.idingrenames > 0) {
            var a = food.iddish;
            var b = ingred.idingrenames;
            // this.ingreds = this.ingreds.filter(h => h !== ingred);
            this.ingredService.addIngred({ idDish: a,
                idIngred: b }).subscribe();
        }
        else {
            // const a=food.id;
            //const b=ingred.id;
            //c:String;
            this.c = ingred.ingrname;
            // this.ingreds = this.ingreds.filter(h => h !== ingred);
            this.ingredService.newInrged({ ingrname: this.c }).subscribe(function (num) { return _this.d = num; });
        }
        this.selectedIngred.ingrname = this.c;
        this.selectedIngred.idingrenames = this.d;
        if (this.d > 0) {
            this.addIngred(food, { idingrenames: this.d,
                ingrname: this.c });
        }
    };
    IngredSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.selectedIngred = { ingrname: "",
            idingrenames: -1 };
        this.ingreds$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (term) { return _this.ingredService.searchIngreds(term); }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _food__WEBPACK_IMPORTED_MODULE_3__["Food"])
    ], IngredSearchComponent.prototype, "food", void 0);
    IngredSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingred-search',
            template: __webpack_require__(/*! ./ingred-search.component.html */ "./src/app/ingred-search/ingred-search.component.html"),
            styles: [__webpack_require__(/*! ./ingred-search.component.css */ "./src/app/ingred-search/ingred-search.component.css")]
        }),
        __metadata("design:paramtypes", [_ingerd_service__WEBPACK_IMPORTED_MODULE_2__["IngerdService"]])
    ], IngredSearchComponent);
    return IngredSearchComponent;
}());



/***/ }),

/***/ "./src/app/ingredi.ts":
/*!****************************!*\
  !*** ./src/app/ingredi.ts ***!
  \****************************/
/*! exports provided: Ingred */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingred", function() { return Ingred; });
var Ingred = /** @class */ (function () {
    function Ingred() {
    }
    return Ingred;
}());



/***/ }),

/***/ "./src/app/ingreds/ingreds.component.css":
/*!***********************************************!*\
  !*** ./src/app/ingreds/ingreds.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\r\n.heroes {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n.heroes li {\r\n    position: relative;\r\n    cursor: pointer;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n.heroes li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n.heroes a {\r\n    color: #888;\r\n    text-decoration: none;\r\n    position: relative;\r\n    display: block;\r\n    width: 250px;\r\n  }\r\n.heroes a:hover {\r\n    color:#607D8B;\r\n  }\r\n.heroes .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    min-width: 16px;\r\n    text-align: right;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\nbutton {\r\n    background-color: #eee;\r\n    border: none;\r\n    padding: 5px 10px;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    cursor: hand;\r\n    font-family: Arial;\r\n  }\r\nbutton:hover {\r\n    background-color: #cfd8dc;\r\n  }\r\nbutton.delete {\r\n    position: relative;\r\n    left: 194px;\r\n    top: -32px;\r\n    background-color: gray !important;\r\n    color: white;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5ncmVkcy9pbmdyZWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMENBQTBDO0FBQzFDO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtHQUNiO0FBQ0Q7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7R0FDcEI7QUFFRDtJQUNFLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsV0FBVztHQUNaO0FBRUQ7SUFDRSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtHQUNkO0FBRUQ7SUFDRSxjQUFjO0dBQ2Y7QUFFRDtJQUNFLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiwyQkFBMkI7R0FDNUI7QUFFRDtJQUNFLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtHQUNwQjtBQUVEO0lBQ0UsMEJBQTBCO0dBQzNCO0FBRUQ7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsYUFBYTtHQUNkIiwiZmlsZSI6InNyYy9hcHAvaW5ncmVkcy9pbmdyZWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cclxuLmhlcm9lcyB7XHJcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTVlbTtcclxuICB9XHJcbiAgLmhlcm9lcyBsaSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xyXG4gICAgbWFyZ2luOiAuNWVtO1xyXG4gICAgcGFkZGluZzogLjNlbSAwO1xyXG4gICAgaGVpZ2h0OiAxLjZlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlcm9lcyBsaTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzYwN0Q4QjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XHJcbiAgICBsZWZ0OiAuMWVtO1xyXG4gIH1cclxuICBcclxuICAuaGVyb2VzIGEge1xyXG4gICAgY29sb3I6ICM4ODg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhlcm9lcyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiM2MDdEOEI7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZXJvZXMgLmJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgaGVpZ2h0OiAxLjhlbTtcclxuICAgIG1pbi13aWR0aDogMTZweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAuOGVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjdXJzb3I6IGhhbmQ7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgfVxyXG4gIFxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xyXG4gIH1cclxuICBcclxuICBidXR0b24uZGVsZXRlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDE5NHB4O1xyXG4gICAgdG9wOiAtMzJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/ingreds/ingreds.component.html":
/*!************************************************!*\
  !*** ./src/app/ingreds/ingreds.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Ingreds</h2>\n<ul class=\"heroes\">\n    <li *ngFor=\"let food of ingreds\">\n        <a routerLink=\"/detingr/{{food.idingrenames}}\">\n          <span class=\"badge\">{{food.idingrenames}}</span> {{food.ingrname}}, {{food.numOfDishes}}\n        </a>\n        <button class=\"delete\" title=\"delete food\"\n        (click)=\"delete(food)\">x</button>\n    </li>\n</ul>\n\n<div>\n    <label>Ingred name:\n      <input #foodName />\n    </label>\n    <!-- (click) passes input value to add() and then clears the input -->\n    <button (click)=\"add(foodName.value); foodName.value=''\">\n      add\n    </button>\n  </div>"

/***/ }),

/***/ "./src/app/ingreds/ingreds.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ingreds/ingreds.component.ts ***!
  \**********************************************/
/*! exports provided: IngredsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredsComponent", function() { return IngredsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ingerd_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ingerd.service */ "./src/app/ingerd.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { FOODS } from '../mock-foods';

var IngredsComponent = /** @class */ (function () {
    function IngredsComponent(ingerdService) {
        this.ingerdService = ingerdService;
        this.ingreds = [{ idingrenames: -1,
                ingrname: "a", numOfDishes: 0 }];
    }
    // id: number;
    // ingrName: string;
    // numOfDishes:number;
    IngredsComponent.prototype.ngOnInit = function () {
        // this.getFoods();
        this.getFoods();
    };
    IngredsComponent.prototype.getFoods = function () {
        var _this = this;
        this.ingerdService.getAllIngreds()
            .subscribe(function (foods) {
            _this.ingreds = foods;
            // this.ingreds.forEach( (element) => {
            //   this.ingerdService.addData(element)
            //   .subscribe(foods => element.numOfDishes = foods);
            // });
        });
        //    this.addData();
    };
    //   private dataStorage: string = null;
    // private retrieveDataResolver;
    //   displayData(): void {
    // this.addData();
    //     // your display code goes here
    //     console.log("2. DISPLAYING DATA", this.dataStorage);
    //   }
    //   retrieveData(): void {
    //     this.getFoods();
    //     // your async retrieval data logic goes here
    //     console.log("1. GETTING DATA FROM SERVER");
    //     setTimeout(() => { // <--- Change it - your service data retrieval
    //       //Promise.resolve(this.retrieveDataResolver);
    //       this.retrieveDataResolver.resolve();
    //     //  this.retrieveDataResolver(); // <--- This must be called as soon as the data are ready to be displayed
    //     }, 50);
    //   }
    //   retrieveDataPromise(): Promise<any> {
    //     return new Promise((resolve) => {
    //       //resolve()
    //       //this.retrieveDataResolver = resolve;
    //       resolve(this.retrieveDataResolver);
    //       this.retrieveData();
    //     })
    //   }
    //   logout(): Promise<Ingred[]> {
    //     return new Promise((resolve, reject) => {
    //       this.ingerdService.getAllIngreds()
    //       .subscribe(foods =>{ this.ingreds = foods;
    //         resolve(foods);
    //         })
    //     //     this.http.delete(this.baseUrl + url, { headers: this.headers() })
    //     //         .map((res: IResponse) => {
    //     //           var json = res.json();
    //     //           json.headers = res.headers;
    //     //           return json;
    //     //         })
    //     //         .subscribe(data => {
    //     //           //DO SOMETHING, THEN ----
    //     //           resolve(data);
    //     //         }, error => reject(error));
    //     });
    // }
    // // logout() {
    // //   this.userService.logout().then(response => this.router.navigate(['LandingPage']))
    // // }
    //  addString(): Promise<any>{
    //     return new Promise((resolve, reject) => {
    //       // setTimeout(() => { // <--- Change it - your service data retrieval
    //       //   //Promise.resolve(this.retrieveDataResolver);
    //       //   resolve(this.getFoods());
    //       // //  this.retrieveDataResolver(); // <--- This must be called as soon as the data are ready to be displayed
    //       // }, 400);
    //       this.getFoods();
    //       resolve('timer complete');
    //       // setTimeout(
    //       //   () => {
    //       //     resolve(previous + ' ' + current)
    //       //   }, 
    //       //   Math.floor(Math.random() * 100) + 1
    //       // )
    //     })
    //   }
    //   retrieveAndThenDisplay() {
    //   //  this.retrieveDataPromise().then(() => {this.displayData()});
    //   this.logout().then((a) => {this.addData2(a)});
    //   }
    //   onClick(){
    //     console.log('onClick calling process');
    //     this.process().then(
    //       (n) => {
    //         console.log('onClick process promise resolved');
    //        //this.name = n;
    //       });
    //     console.log('onClick done');
    //   }
    //   process() {
    //     return new Promise(
    //       (resolve)=>{ 
    //         console.log('process setting timer');
    //         window.setTimeout(()=>{
    //           console.log('process timer completed; calling resolve');
    //           resolve('timer complete')}, 1000);
    //       });
    //   }
    // "use strict";
    // performUpload (imgStatus : string) : Promise<{imgstatus : string}> {
    //   return new Promise((resolve) => {
    //     console.log(`Status: ${imgStatus}`);
    //     setTimeout(() => {
    //       resolve({ imgStatus: imgStatus });
    //     }, 1000);
    //   });
    // }
    // }
    // var upload;
    // var compress;
    // var transfer;
    // performUpload('uploading...')
    // .then((res) => {
    //   upload = res;
    //   return performUpload('compressing...');
    // })
    // .then((res) => {
    //   upload = res;
    //   return performUpload('transferring...');
    // })
    // .then((res) => {
    //   upload = res;
    //   return performUpload('Image upload completed.');
    // });
    IngredsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        //dishName =name;
        this.ingerdService.newInrged({ ingrname: name })
            .subscribe(function (idfood) {
            _this.ingreds.push({ ingrname: name, idingrenames: idfood });
        });
    };
    IngredsComponent.prototype.delete = function (food) {
        this.ingreds = this.ingreds.filter(function (h) { return h !== food; });
        this.ingerdService.deleteIngred1(food.idingrenames).subscribe();
    };
    IngredsComponent.prototype.addData = function () {
        var _this = this;
        this.ingreds.forEach(function (element) {
            _this.ingerdService.addData(element)
                .subscribe(function (foods) { return element.numOfDishes = foods; });
        });
    };
    IngredsComponent.prototype.addData2 = function (ingarr) {
        var _this = this;
        ingarr.forEach(function (element) {
            _this.ingerdService.addData(element)
                .subscribe(function (foods) { return element.numOfDishes = foods; });
        });
        this.ingreds = ingarr;
    };
    IngredsComponent.prototype.addData1 = function (ingre) {
        this.ingerdService.addData(ingre)
            .subscribe(function (foods) { return ingre.numOfDishes = foods; });
    };
    IngredsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingreds',
            template: __webpack_require__(/*! ./ingreds.component.html */ "./src/app/ingreds/ingreds.component.html"),
            styles: [__webpack_require__(/*! ./ingreds.component.css */ "./src/app/ingreds/ingreds.component.css")]
        }),
        __metadata("design:paramtypes", [_ingerd_service__WEBPACK_IMPORTED_MODULE_1__["IngerdService"]])
    ], IngredsComponent);
    return IngredsComponent;
}());



/***/ }),

/***/ "./src/app/message.service.ts":
/*!************************************!*\
  !*** ./src/app/message.service.ts ***!
  \************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        })
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\n\n    <h2>Messages</h2>\n    <button class=\"clear\"\n            (click)=\"messageService.clear()\">clear</button>\n    <div *ngFor='let message of messageService.messages'> {{message}} </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../message.service */ "./src/app/message.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_message_service__WEBPACK_IMPORTED_MODULE_1__["MessageService"]])
    ], MessagesComponent);
    return MessagesComponent;
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

module.exports = __webpack_require__(/*! c:\Users\owner\food-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map