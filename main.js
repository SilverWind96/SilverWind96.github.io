(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/silverwind/Downloads/covidmock1/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Bho8":
/*!******************************************!*\
  !*** ./src/app/chart/chart.component.ts ***!
  \******************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart.service */ "y41v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");





const _c0 = function (a0, a1) { return [a0, a1]; };
function ChartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-charts-line-chart", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ChartComponent_div_0_Template_ngx_charts_line_chart_select_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelect($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("view", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c0, _r1.offsetWidth, _r1.offsetHeight - 32))("scheme", ctx_r0.colorScheme)("legend", ctx_r0.legend)("showXAxisLabel", ctx_r0.showXAxisLabel)("showYAxisLabel", ctx_r0.showYAxisLabel)("xAxis", ctx_r0.xAxis)("yAxis", ctx_r0.yAxis)("timeline", ctx_r0.timeline)("results", ctx_r0.test)("legendPosition", ctx_r0.legendPosition)("legendTitle", ctx_r0.legendTitle);
} }
class ChartComponent {
    constructor(chartService) {
        this.chartService = chartService;
        this.init = true;
        this.fixedData = [
            {
                name: 'Confirmed',
                series: [],
            },
            {
                name: 'Deaths',
                series: [],
            },
            {
                name: 'Recovered',
                series: [],
            },
        ];
        this.test = [];
        this.view = [550, 350];
        // options
        this.legendTitle = '';
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.timeline = true;
        this.legendPosition = 'below';
        this.colorScheme = {
            domain: ['#5746a7', '#c6405d', '#2f7a68'],
        };
    }
    change(chosenCountry) {
        if (this.init) {
            this.init = false;
            this.chartService.getData().subscribe((data) => {
                this.data = [...data];
                this.testObject(data[chosenCountry.index].timeseries);
            });
        }
        else {
            this.testObject(this.data[chosenCountry.index].timeseries);
        }
    }
    ngOnInit() { }
    onSelect(event) { }
    testObject(data) {
        this.fixedData[0].series.length = 0;
        this.fixedData[1].series.length = 0;
        this.fixedData[2].series.length = 0;
        for (const i in data) {
            if (data.hasOwnProperty(i)) {
                if (data[i].confirmed > -1 && data[i].deaths > -1) {
                    this.fixedData[0].series.push({ name: i, value: data[i].confirmed });
                    this.fixedData[1].series.push({ name: i, value: data[i].deaths });
                }
                this.fixedData[2].series.push({ name: i, value: data[i].recovered });
            }
        }
        this.test = [...this.fixedData];
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_chart_service__WEBPACK_IMPORTED_MODULE_1__["ChartService"])); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["app-chart"]], decls: 1, vars: 1, consts: [["class", "chartcontainer", 4, "ngIf"], [1, "chartcontainer"], ["chartcontainer", ""], [3, "view", "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "xAxis", "yAxis", "timeline", "results", "legendPosition", "legendTitle", "select"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ChartComponent_div_0_Template, 3, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.init);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_3__["LineChartComponent"]], styles: [".chartcontainer[_ngcontent-%COMP%] {\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6ImNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0Y29udGFpbmVyIHtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-chart',
                templateUrl: './chart.component.html',
                styleUrls: ['./chart.component.scss'],
            }]
    }], function () { return [{ type: _chart_service__WEBPACK_IMPORTED_MODULE_1__["ChartService"] }]; }, null); })();


/***/ }),

/***/ "Fqp/":
/*!************************************************!*\
  !*** ./src/app/worldwide/worldwide.service.ts ***!
  \************************************************/
/*! exports provided: WorldwideService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldwideService", function() { return WorldwideService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WorldwideService {
    constructor(http) {
        this.http = http;
    }
    getWorldWideData() {
        return this.http.get('https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/brief');
    }
}
WorldwideService.ɵfac = function WorldwideService_Factory(t) { return new (t || WorldwideService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WorldwideService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WorldwideService, factory: WorldwideService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorldwideService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _worldwide_worldwide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worldwide/worldwide.component */ "dk2K");
/* harmony import */ var _regional_regional_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./regional/regional.component */ "pOxd");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chart/chart.component */ "Bho8");






class AppComponent {
    constructor() {
        this.title = 'covidmock1';
        this.chosenCountry = {};
    }
    childEvent(event) {
        this.chosenCountry = Object.assign({}, event);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[3, "eventChange"], [1, "container"], [1, "row"], [1, "col-12", "col-md-6"], ["chart", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-worldwide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-regional", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventChange", function AppComponent_Template_app_regional_eventChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); ctx.childEvent($event); return _r0.change(ctx.chosenCountry); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-chart", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_worldwide_worldwide_component__WEBPACK_IMPORTED_MODULE_1__["WorldwideComponent"], _regional_regional_component__WEBPACK_IMPORTED_MODULE_2__["RegionalComponent"], _map_map_component__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _chart_chart_component__WEBPACK_IMPORTED_MODULE_4__["ChartComponent"]], styles: ["[_nghost-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _worldwide_worldwide_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worldwide/worldwide.component */ "dk2K");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _regional_regional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./regional/regional.component */ "pOxd");
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map/map.component */ "cNoH");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chart/chart.component */ "Bho8");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ "zQsl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












// import { NgxGraphModule } from '@swimlane/ngx-graph';


class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__["LeafletModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _worldwide_worldwide_component__WEBPACK_IMPORTED_MODULE_5__["WorldwideComponent"],
        _regional_regional_component__WEBPACK_IMPORTED_MODULE_7__["RegionalComponent"],
        _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
        _chart_chart_component__WEBPACK_IMPORTED_MODULE_10__["ChartComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__["LeafletModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _worldwide_worldwide_component__WEBPACK_IMPORTED_MODULE_5__["WorldwideComponent"],
                    _regional_regional_component__WEBPACK_IMPORTED_MODULE_7__["RegionalComponent"],
                    _map_map_component__WEBPACK_IMPORTED_MODULE_8__["MapComponent"],
                    _chart_chart_component__WEBPACK_IMPORTED_MODULE_10__["ChartComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__["LeafletModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__["NgxChartsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "cNoH":
/*!**************************************!*\
  !*** ./src/app/map/map.component.ts ***!
  \**************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_heat_dist_leaflet_heat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet.heat/dist/leaflet-heat.js */ "pmIE");
/* harmony import */ var leaflet_heat_dist_leaflet_heat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_heat_dist_leaflet_heat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _regional_regional_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../regional/regional.service */ "njKR");
/* harmony import */ var _worldwide_worldwide_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../worldwide/worldwide.service */ "Fqp/");
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "OwhE");







class MapComponent {
    constructor(regionService, wwService) {
        this.regionService = regionService;
        this.wwService = wwService;
        this.addressPoints = [];
        // options = {
        //   layers: [
        //     L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //       maxZoom: 18,
        //       attribution: '',
        //     }),
        //   ],
        //   zoom: 5,
        //   center: L.latLng(21.0278, 105.8342),
        //   worldCopyJump: true,
        // };
        this.options = {
            layers: [
                leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    maxZoom: 18,
                }),
            ],
            zoom: 5,
            center: leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"](21.0278, 105.8342),
            worldCopyJump: true,
        };
        this.layersControl = {
            baseLayers: {
                'Open Street Map': leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
                'Open Cycle Map': leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
            },
        };
        this.layers = [];
    }
    ngOnInit() {
        this.wwService.getWorldWideData().subscribe((data) => {
            this.confirmed = data.confirmed;
        });
        if (this.regionService.getData()) {
            this.regionService.getData().subscribe((data) => {
                let limit = 500000;
                data.forEach((country) => {
                    if (country.confirmed)
                        this.layers.push(leaflet__WEBPACK_IMPORTED_MODULE_1__["circle"]([country.location.lat, country.location.lng], {
                            radius: country.confirmed > limit
                                ? limit
                                : country.confirmed < 50000
                                    ? 50000
                                    : country.confirmed,
                            color: 'red',
                            // opacity: 0.5,
                            stroke: false,
                        }));
                    // this.addressPoints.push([
                    //   country.location.lat,
                    //   country.location.lng,
                    //   country.confirmed,
                    // ]);
                });
            });
        }
    }
    onMapReady(map) {
        // const heat = (L as any).heatLayer(this.addressPoints).addTo(map);
    }
}
MapComponent.ɵfac = function MapComponent_Factory(t) { return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_regional_regional_service__WEBPACK_IMPORTED_MODULE_3__["RegionalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_worldwide_worldwide_service__WEBPACK_IMPORTED_MODULE_4__["WorldwideService"])); };
MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapComponent, selectors: [["app-map"]], decls: 1, vars: 3, consts: [["leaflet", "", 2, "height", "50vh", 3, "leafletOptions", "leafletLayersControl", "leafletLayers"]], template: function MapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("leafletOptions", ctx.options)("leafletLayersControl", ctx.layersControl)("leafletLayers", ctx.layers);
    } }, directives: [_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__["LeafletDirective"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__["LeafletLayersControlDirective"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_5__["LeafletLayersDirective"]], styles: ["[_nghost-%COMP%] {\n  widows: 100%;\n}\n\n[_nghost-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL21hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUVGIiwiZmlsZSI6Im1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkb3dzOiAxMDAlO1xufVxuOmhvc3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-map',
                templateUrl: './map.component.html',
                styleUrls: ['./map.component.scss'],
            }]
    }], function () { return [{ type: _regional_regional_service__WEBPACK_IMPORTED_MODULE_3__["RegionalService"] }, { type: _worldwide_worldwide_service__WEBPACK_IMPORTED_MODULE_4__["WorldwideService"] }]; }, null); })();


/***/ }),

/***/ "dk2K":
/*!**************************************************!*\
  !*** ./src/app/worldwide/worldwide.component.ts ***!
  \**************************************************/
/*! exports provided: WorldwideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldwideComponent", function() { return WorldwideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _worldwide_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worldwide.service */ "Fqp/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




class WorldwideComponent {
    constructor(wwService) {
        this.wwService = wwService;
        this.wwData = { rate: 0, recovered: 0, deaths: 0, confirmed: 0 };
    }
    ngOnInit() {
        this.wwService.getWorldWideData().subscribe((data) => {
            this.wwData = Object.assign({}, data);
            this.wwData['rate'] = (this.wwData.deaths / this.wwData.confirmed) * 100;
        });
    }
}
WorldwideComponent.ɵfac = function WorldwideComponent_Factory(t) { return new (t || WorldwideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_worldwide_service__WEBPACK_IMPORTED_MODULE_1__["WorldwideService"])); };
WorldwideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorldwideComponent, selectors: [["app-worldwide"]], decls: 45, vars: 16, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-12"], [1, "col-12", "col-md-3"], [1, "card", "text-white", "confirmed", "mb-3"], [1, "card-body"], [1, "card-text"], [1, "fas", "fa-user-alt"], [1, "card-title", "m-0"], [1, "card", "text-white", "recovered", "mb-3"], [1, "fas", "fa-plus-square"], [1, "card", "text-white", "deaths", "mb-3"], [1, "fas", "fa-bed"], [1, "card", "text-white", "rate", "mb-3"], [1, "fas", "fa-exclamation-circle"]], template: function WorldwideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "World Wide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Confirmed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Recovered ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Fatality rate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 4, ctx.wwData.confirmed, "2."));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](24, 7, ctx.wwData.recovered, "2."));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](34, 10, ctx.wwData.deaths, "2."));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](44, 13, ctx.wwData.rate, "1.0-2"), "%");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".confirmed[_ngcontent-%COMP%] {\n  background-color: #6a4fb8;\n}\n\n.recovered[_ngcontent-%COMP%] {\n  background-color: #3a968a;\n}\n\n.deaths[_ngcontent-%COMP%] {\n  background-color: #ec4b64;\n}\n\n.rate[_ngcontent-%COMP%] {\n  background-color: #c6405d;\n}\n\n.MuiSvgIcon-root[_ngcontent-%COMP%] {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  font-size: 1.5rem;\n  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  flex-shrink: 0;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n[_nghost-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dvcmxkd2lkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFEQTtFQUNFLHlCQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVEQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFLRjs7QUFIQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQU1GIiwiZmlsZSI6Indvcmxkd2lkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25maXJtZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmE0ZmI4O1xufVxuLnJlY292ZXJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzYTk2OGE7XG59XG4uZGVhdGhzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjNGI2NDtcbn1cbi5yYXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2NDA1ZDtcbn1cbi5NdWlTdmdJY29uLXJvb3Qge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgMG1zO1xuICBmbGV4LXNocmluazogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG46aG9zdCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorldwideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-worldwide',
                templateUrl: './worldwide.component.html',
                styleUrls: ['./worldwide.component.scss'],
            }]
    }], function () { return [{ type: _worldwide_service__WEBPACK_IMPORTED_MODULE_1__["WorldwideService"] }]; }, null); })();


/***/ }),

/***/ "njKR":
/*!**********************************************!*\
  !*** ./src/app/regional/regional.service.ts ***!
  \**********************************************/
/*! exports provided: RegionalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionalService", function() { return RegionalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RegionalService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get('https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/latest');
    }
}
RegionalService.ɵfac = function RegionalService_Factory(t) { return new (t || RegionalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RegionalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RegionalService, factory: RegionalService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionalService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "pOxd":
/*!************************************************!*\
  !*** ./src/app/regional/regional.component.ts ***!
  \************************************************/
/*! exports provided: RegionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegionalComponent", function() { return RegionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _regional_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./regional.service */ "njKR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function RegionalComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r0.chosenCountry.index === i_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", country_r2.provincestate ? country_r2.countryregion + " (" + country_r2.provincestate + ")" : country_r2.countryregion, " ");
} }
function RegionalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Confirmed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Recovered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Deaths");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Fatality rate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 4, ctx_r1.chosenCountry.confirmed, "2."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 7, ctx_r1.chosenCountry.recovered, "2."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](30, 10, ctx_r1.chosenCountry.deaths, "2."), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](40, 13, ctx_r1.chosenCountry.deaths / ctx_r1.chosenCountry.confirmed * 100, "1.0-2"), "% ");
} }
class RegionalComponent {
    constructor(regionService) {
        this.regionService = regionService;
        this.eventChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.countryArray = [];
        this.chosenCountry = {};
    }
    ngOnInit() {
        this.regionService.getData().subscribe((data) => {
            this.countryArray = [...data];
            let index = data.findIndex((country) => country.countryregion === 'Vietnam');
            this.chosenCountry = data[index];
            this.chosenCountry['index'] = index;
            data[index]['index'] = index;
            this.eventChange.emit(data[index]);
        });
    }
    setRegion(i) {
        this.chosenCountry = Object.assign({}, this.countryArray[i]);
        this.chosenCountry['index'] = i;
    }
    onChange() {
        this.eventChange.emit(this.chosenCountry);
    }
}
RegionalComponent.ɵfac = function RegionalComponent_Factory(t) { return new (t || RegionalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_regional_service__WEBPACK_IMPORTED_MODULE_1__["RegionalService"])); };
RegionalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegionalComponent, selectors: [["app-regional"]], outputs: { eventChange: "eventChange" }, decls: 9, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col-12", "col-md-3"], [1, "form-control", 3, "change"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["class", "row mt-3", 4, "ngIf"], [3, "value", "selected"], [1, "row", "mt-3"], [1, "card", "text-white", "confirmed", "mb-3"], [1, "card-body"], [1, "card-text"], [1, "fas", "fa-user-alt"], [1, "card-title", "m-0"], [1, "card", "text-white", "recovered", "mb-3"], [1, "fas", "fa-plus-square"], [1, "card", "text-white", "deaths", "mb-3"], [1, "fas", "fa-bed"], [1, "card", "text-white", "rate", "mb-3"], [1, "fas", "fa-exclamation-circle"]], template: function RegionalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Regional");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function RegionalComponent_Template_select_change_6_listener($event) { ctx.setRegion($event.target.value); return ctx.onChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RegionalComponent_option_7_Template, 2, 3, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegionalComponent_div_8_Template, 41, 16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.chosenCountry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".confirmed[_ngcontent-%COMP%] {\n  background-color: #5746a7;\n}\n\n.recovered[_ngcontent-%COMP%] {\n  background-color: #2f7a68;\n}\n\n.deaths[_ngcontent-%COMP%] {\n  background-color: #c6405d;\n}\n\n.rate[_ngcontent-%COMP%] {\n  background-color: #892d4f;\n}\n\n[_nghost-%COMP%] {\n  box-sizing: border-box;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlZ2lvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtBQUdGOztBQURBO0VBQ0UseUJBQUE7QUFJRjs7QUFGQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQUtGIiwiZmlsZSI6InJlZ2lvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm1lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzQ2YTc7XG59XG4ucmVjb3ZlcmVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmN2E2ODtcbn1cbi5kZWF0aHMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzY0MDVkO1xufVxuLnJhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODkyZDRmO1xufVxuOmhvc3Qge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegionalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-regional',
                templateUrl: './regional.component.html',
                styleUrls: ['./regional.component.scss'],
            }]
    }], function () { return [{ type: _regional_service__WEBPACK_IMPORTED_MODULE_1__["RegionalService"] }]; }, { eventChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "y41v":
/*!****************************************!*\
  !*** ./src/app/chart/chart.service.ts ***!
  \****************************************/
/*! exports provided: ChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartService", function() { return ChartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ChartService {
    constructor(http) {
        this.http = http;
    }
    getData() {
        return this.http.get('https://master-covid-19-api-laeyoung.endpoint.ainize.ai/jhu-edu/timeseries');
    }
}
ChartService.ɵfac = function ChartService_Factory(t) { return new (t || ChartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ChartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChartService, factory: ChartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map