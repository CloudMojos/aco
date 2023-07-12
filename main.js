/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mapbox/geojson-rewind/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@mapbox/geojson-rewind/index.js ***!
  \******************************************************/
/***/ ((module) => {


module.exports = rewind;

function rewind(gj, outer) {
    var type = gj && gj.type, i;

    if (type === 'FeatureCollection') {
        for (i = 0; i < gj.features.length; i++) rewind(gj.features[i], outer);

    } else if (type === 'GeometryCollection') {
        for (i = 0; i < gj.geometries.length; i++) rewind(gj.geometries[i], outer);

    } else if (type === 'Feature') {
        rewind(gj.geometry, outer);

    } else if (type === 'Polygon') {
        rewindRings(gj.coordinates, outer);

    } else if (type === 'MultiPolygon') {
        for (i = 0; i < gj.coordinates.length; i++) rewindRings(gj.coordinates[i], outer);
    }

    return gj;
}

function rewindRings(rings, outer) {
    if (rings.length === 0) return;

    rewindRing(rings[0], outer);
    for (var i = 1; i < rings.length; i++) {
        rewindRing(rings[i], !outer);
    }
}

function rewindRing(ring, dir) {
    var area = 0, err = 0;
    for (var i = 0, len = ring.length, j = len - 1; i < len; j = i++) {
        var k = (ring[i][0] - ring[j][0]) * (ring[j][1] + ring[i][1]);
        var m = area + k;
        err += Math.abs(area) >= Math.abs(k) ? area - m + k : k - m + area;
        area = m;
    }
    if (area + err >= 0 !== !!dir) ring.reverse();
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Reset */\n* {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    box-sizing: border-box;\n    /* border: 1px solid red; */\n}\n/* Reset */\n\n/* Body and :root */\n:root {\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    background-color: #c9c9c9;\n}\n/* Body and :root */\n\n/* Header */\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem 1.5rem 1rem 1.5rem;\n    background-color: whitesmoke;\n\n    margin-bottom: 3vh;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.281);\n}\n\nheader .logo {\n    font-size: 2.5rem;\n    font-weight: bold;\n}\n\n.links {\n    list-style: none;\n}\n\nheader .links {\n    display: flex;\n    align-items: center;\n}\n\nheader .links li {\n    font-size: 1rem;\n    padding: 1rem;\n    margin-left: 1rem;\n    border-radius: 5px;\n}\n\nheader .links li:hover {\n    background-color: #00000050;\n}\n/* Header */\n\nbutton {\n    border-radius: 3px;\n    background-color: #4CAF50; /* Green */\n    border: none;\n    color: white;\n    padding: 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n#map {\n    height: 60vh;\n    width: 60vh;\n    border: 1px solid black;\n    grid-area: map;\n}\n\n.map-container {\n    display: flex;\n    position: relative; /* Add this */\n}\n\n.button-group-1 {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    right: -130px;\n}\n\n.button-group-1 > * {\n    margin-bottom: 5px;\n}\n\n.button-group-2 {\n    margin-top: 10px;\n}\n\n.leaflet-routing-container {\n    display: none;\n}\n\n#code {\n    min-width: 300px;\n    min-height: 2rem;\n    background-color: whitesmoke;\n    box-shadow: 0px 0px 5px black;\n    border-radius: 15px;\n    padding: 5px;  \n    position: fixed;\n    bottom: 20px;\n    left: 20px;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA,UAAU;AACV;IACI,UAAU;IACV,SAAS;IACT,SAAS;IACT,sBAAsB;IACtB,2BAA2B;AAC/B;AACA,UAAU;;AAEV,mBAAmB;AACnB;IACI,kCAAkC;AACtC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,yBAAyB;AAC7B;AACA,mBAAmB;;AAEnB,WAAW;AACX;IACI,WAAW;IACX,aAAa;IACb,8BAA8B;IAC9B,gCAAgC;IAChC,4BAA4B;;IAE5B,kBAAkB;IAClB,gDAAgD;AACpD;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,2BAA2B;AAC/B;AACA,WAAW;;AAEX;IACI,kBAAkB;IAClB,yBAAyB,EAAE,UAAU;IACrC,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,kBAAkB,EAAE,aAAa;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,MAAM;IACN,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,4BAA4B;IAC5B,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,UAAU;AACd","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\n\n/* Reset */\n* {\n    padding: 0;\n    border: 0;\n    margin: 0;\n    box-sizing: border-box;\n    /* border: 1px solid red; */\n}\n/* Reset */\n\n/* Body and :root */\n:root {\n    font-family: 'Poppins', sans-serif;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100vh;\n    background-color: #c9c9c9;\n}\n/* Body and :root */\n\n/* Header */\nheader {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 1rem 1.5rem 1rem 1.5rem;\n    background-color: whitesmoke;\n\n    margin-bottom: 3vh;\n    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.281);\n}\n\nheader .logo {\n    font-size: 2.5rem;\n    font-weight: bold;\n}\n\n.links {\n    list-style: none;\n}\n\nheader .links {\n    display: flex;\n    align-items: center;\n}\n\nheader .links li {\n    font-size: 1rem;\n    padding: 1rem;\n    margin-left: 1rem;\n    border-radius: 5px;\n}\n\nheader .links li:hover {\n    background-color: #00000050;\n}\n/* Header */\n\nbutton {\n    border-radius: 3px;\n    background-color: #4CAF50; /* Green */\n    border: none;\n    color: white;\n    padding: 5px;\n    text-align: center;\n    text-decoration: none;\n    display: inline-block;\n    font-size: 16px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n#map {\n    height: 60vh;\n    width: 60vh;\n    border: 1px solid black;\n    grid-area: map;\n}\n\n.map-container {\n    display: flex;\n    position: relative; /* Add this */\n}\n\n.button-group-1 {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    right: -130px;\n}\n\n.button-group-1 > * {\n    margin-bottom: 5px;\n}\n\n.button-group-2 {\n    margin-top: 10px;\n}\n\n.leaflet-routing-container {\n    display: none;\n}\n\n#code {\n    min-width: 300px;\n    min-height: 2rem;\n    background-color: whitesmoke;\n    box-shadow: 0px 0px 5px black;\n    border-radius: 15px;\n    padding: 5px;  \n    position: fixed;\n    bottom: 20px;\n    left: 20px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/osm-polygon-features/index.js":
/*!****************************************************!*\
  !*** ./node_modules/osm-polygon-features/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./polygon-features.json */ "./node_modules/osm-polygon-features/polygon-features.json")


/***/ }),

/***/ "./node_modules/osmtogeojson/index.js":
/*!********************************************!*\
  !*** ./node_modules/osmtogeojson/index.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _ = __webpack_require__(/*! ./lodash.custom.js */ "./node_modules/osmtogeojson/lodash.custom.js");
var rewind = __webpack_require__(/*! @mapbox/geojson-rewind */ "./node_modules/@mapbox/geojson-rewind/index.js");

// see https://wiki.openstreetmap.org/wiki/Overpass_turbo/Polygon_Features
var polygonFeatures = {};
(__webpack_require__(/*! osm-polygon-features */ "./node_modules/osm-polygon-features/index.js").forEach)(function(tags) {
  if (tags.polygon === "all")
    polygonFeatures[tags.key] = true;
  else {
    var list = (tags.polygon === "whitelist") ? "included_values" : "excluded_values",
        tagValuesObj = {};
    tags.values.forEach(function(value) { tagValuesObj[value] = true; });
    polygonFeatures[tags.key] = {};
    polygonFeatures[tags.key][list] = tagValuesObj;
  }
});

// default deduplication helper function
function default_deduplicator(objectA, objectB) {
  // default deduplication handler:
  // if object versions differ, use highest available version
  if ((objectA.version || objectB.version) &&
      (objectA.version !== objectB.version)) {
    return (+objectA.version || 0) > (+objectB.version || 0)
      ? objectA
      : objectB;
  }
  // otherwise: return merged obj properties
  return _.merge(objectA, objectB);
}

var osmtogeojson = {};

osmtogeojson = function( data, options, featureCallback ) {

  options = _.merge(
    {
      verbose: false,
      flatProperties: true,
      uninterestingTags: {
        "source": true,
        "source_ref": true,
        "source:ref": true,
        "history": true,
        "attribution": true,
        "created_by": true,
        "tiger:county": true,
        "tiger:tlid": true,
        "tiger:upload_uuid": true
      },
      polygonFeatures: polygonFeatures,
      deduplicator: default_deduplicator
    },
    options
  );

  var result;
  if ( ((typeof XMLDocument !== "undefined") && data instanceof XMLDocument ||
        (typeof XMLDocument === "undefined") && data.childNodes) )
    result = _osmXML2geoJSON(data);
  else
    result = _overpassJSON2geoJSON(data);
  return result;

  function _overpassJSON2geoJSON(json) {
    // sort elements
    var nodes = new Array();
    var ways  = new Array();
    var rels  = new Array();
    // helper functions
    function centerGeometry(object) {
      var pseudoNode = _.clone(object);
      pseudoNode.lat = object.center.lat;
      pseudoNode.lon = object.center.lon;
      pseudoNode.__is_center_placeholder = true;
      nodes.push(pseudoNode);
    }
    function boundsGeometry(object) {
      var pseudoWay = _.clone(object);
      pseudoWay.nodes = [];
      function addPseudoNode(lat,lon,i) {
        var pseudoNode = {
          type:"node",
          id:  "_"+pseudoWay.type+"/"+pseudoWay.id+"bounds"+i,
          lat: lat,
          lon: lon
        }
        pseudoWay.nodes.push(pseudoNode.id);
        nodes.push(pseudoNode);
      }
      addPseudoNode(pseudoWay.bounds.minlat,pseudoWay.bounds.minlon,1);
      addPseudoNode(pseudoWay.bounds.maxlat,pseudoWay.bounds.minlon,2);
      addPseudoNode(pseudoWay.bounds.maxlat,pseudoWay.bounds.maxlon,3);
      addPseudoNode(pseudoWay.bounds.minlat,pseudoWay.bounds.maxlon,4);
      pseudoWay.nodes.push(pseudoWay.nodes[0]);
      pseudoWay.__is_bounds_placeholder = true;
      ways.push(pseudoWay);
    }
    function fullGeometryWay(way) {
      function addFullGeometryNode(lat,lon,id) {
        var geometryNode = {
          type:"node",
          id:  id,
          lat: lat,
          lon: lon
        }
        nodes.push(geometryNode);
      }
      if (!_.isArray(way.nodes)) {
        way.nodes = way.geometry.map(function(nd) {
          if (nd !== null) // have to skip ref-less nodes
            return "_anonymous@"+nd.lat+"/"+nd.lon;
          else
            return "_anonymous@unknown_location";
        });
      }
      way.geometry.forEach(function(nd, i) {
        if (nd) {
          addFullGeometryNode(
            nd.lat,
            nd.lon,
            way.nodes[i]
          );
        }
      });
    }
    function fullGeometryRelation(rel) {
      function addFullGeometryNode(lat,lon,id) {
        var geometryNode = {
          type:"node",
          id:  id,
          lat: lat,
          lon: lon
        }
        nodes.push(geometryNode);
      }
      function addFullGeometryWay(geometry,id) {
        // shared multipolygon ways cannot be defined multiple times with the same id.
        if (ways.some(function (way) { // todo: this is slow :(
          return way.type == "way" && way.id == id;
        })) return;
        var geometryWay = {
          type: "way",
          id:   id,
          nodes:[]
        }
        function addFullGeometryWayPseudoNode(lat,lon) {
          // todo? do not save the same pseudo node multiple times
          var geometryPseudoNode = {
            type:"node",
            id:  "_anonymous@"+lat+"/"+lon,
            lat: lat,
            lon: lon
          }
          geometryWay.nodes.push(geometryPseudoNode.id);
          nodes.push(geometryPseudoNode);
        }
        geometry.forEach(function(nd) {
          if (nd) {
            addFullGeometryWayPseudoNode(
              nd.lat,
              nd.lon
            );
          } else {
            geometryWay.nodes.push(undefined);
          }
        });
        ways.push(geometryWay);
      }
      rel.members.forEach(function(member, i) {
        if (member.type == "node") {
          if (member.lat) {
            addFullGeometryNode(
              member.lat,
              member.lon,
              member.ref
            );
          }
        } else if (member.type == "way") {
          if (member.geometry) {
            member.ref = "_fullGeom"+member.ref;
            addFullGeometryWay(
              member.geometry,
              member.ref
            );
          }
        }
      });
    }
    // create copies of individual json objects to make sure the original data doesn't get altered
    // todo: cloning is slow: see if this can be done differently!
    for (var i=0;i<json.elements.length;i++) {
      switch (json.elements[i].type) {
      case "node":
        var node = json.elements[i];
        nodes.push(node);
      break;
      case "way":
        var way = _.clone(json.elements[i]);
        way.nodes = _.clone(way.nodes);
        ways.push(way);
        if (way.center)
          centerGeometry(way);
        if (way.geometry)
          fullGeometryWay(way);
        else if (way.bounds)
          boundsGeometry(way);
      break;
      case "relation":
        var rel = _.clone(json.elements[i]);
        rel.members = _.clone(rel.members);
        rels.push(rel);
        var has_full_geometry = rel.members && rel.members.some(function (member) {
          return member.type == "node" && member.lat ||
                 member.type == "way"  && member.geometry && member.geometry.length > 0
        });
        if (rel.center)
          centerGeometry(rel);
        if (has_full_geometry)
          fullGeometryRelation(rel);
        else if (rel.bounds)
          boundsGeometry(rel);
      break;
      default:
      // type=area (from coord-query) is an example for this case.
      }
    }
    return _convert2geoJSON(nodes,ways,rels);
  }
  function _osmXML2geoJSON(xml) {
    // sort elements
    var nodes = new Array();
    var ways  = new Array();
    var rels  = new Array();
    // helper function
    function copy_attribute( x, o, attr ) {
      if (x.hasAttribute(attr))
        o[attr] = x.getAttribute(attr);
    }
    function centerGeometry(object, centroid) {
      var pseudoNode = _.clone(object);
      copy_attribute(centroid, pseudoNode, 'lat');
      copy_attribute(centroid, pseudoNode, 'lon');
      pseudoNode.__is_center_placeholder = true;
      nodes.push(pseudoNode);
    }
    function boundsGeometry(object, bounds) {
      var pseudoWay = _.clone(object);
      pseudoWay.nodes = [];
      function addPseudoNode(lat,lon,i) {
        var pseudoNode = {
          type:"node",
          id:  "_"+pseudoWay.type+"/"+pseudoWay.id+"bounds"+i,
          lat: lat,
          lon: lon
        }
        pseudoWay.nodes.push(pseudoNode.id);
        nodes.push(pseudoNode);
      }
      addPseudoNode(bounds.getAttribute('minlat'),bounds.getAttribute('minlon'),1);
      addPseudoNode(bounds.getAttribute('maxlat'),bounds.getAttribute('minlon'),2);
      addPseudoNode(bounds.getAttribute('maxlat'),bounds.getAttribute('maxlon'),3);
      addPseudoNode(bounds.getAttribute('minlat'),bounds.getAttribute('maxlon'),4);
      pseudoWay.nodes.push(pseudoWay.nodes[0]);
      pseudoWay.__is_bounds_placeholder = true;
      ways.push(pseudoWay);
    }
    function fullGeometryWay(way, nds) {
      function addFullGeometryNode(lat,lon,id) {
        var geometryNode = {
          type:"node",
          id:  id,
          lat: lat,
          lon: lon
        }
        nodes.push(geometryNode);
        return geometryNode.id;
      }
      if (!_.isArray(way.nodes)) {
        way.nodes = [];
        _.each( nds, function( nd, i ) {
          way.nodes.push("_anonymous@"+nd.getAttribute('lat')+"/"+nd.getAttribute('lon'));
        });
      }
      _.each( nds, function( nd, i ) {
        if (nd.getAttribute('lat')) {
          addFullGeometryNode(
            nd.getAttribute('lat'),
            nd.getAttribute('lon'),
            way.nodes[i]
          );
        }
      });
    }
    function fullGeometryRelation(rel, members) {
      function addFullGeometryNode(lat,lon,id) {
        var geometryNode = {
          type:"node",
          id:  id,
          lat: lat,
          lon: lon
        }
        nodes.push(geometryNode);
      }
      function addFullGeometryWay(nds,id) {
        // shared multipolygon ways cannot be defined multiple times with the same id.
        if (ways.some(function (way) { // todo: this is slow :(
          return way.type == "way" && way.id == id;
        })) return;
        var geometryWay = {
          type: "way",
          id:   id,
          nodes:[]
        }
        function addFullGeometryWayPseudoNode(lat,lon) {
          // todo? do not save the same pseudo node multiple times
          var geometryPseudoNode = {
            type:"node",
            id:  "_anonymous@"+lat+"/"+lon,
            lat: lat,
            lon: lon
          }
          geometryWay.nodes.push(geometryPseudoNode.id);
          nodes.push(geometryPseudoNode);
        }
        _.each(nds, function(nd) {
          if (nd.getAttribute('lat')) {
            addFullGeometryWayPseudoNode(
              nd.getAttribute('lat'),
              nd.getAttribute('lon')
            );
          } else {
            geometryWay.nodes.push(undefined);
          }
        });
        ways.push(geometryWay);
      }
      _.each( members, function( member, i ) {
        if (rel.members[i].type == "node") {
          if (member.getAttribute('lat')) {
            addFullGeometryNode(
              member.getAttribute('lat'),
              member.getAttribute('lon'),
              rel.members[i].ref
            );
          }
        } else if (rel.members[i].type == "way") {
          if (member.getElementsByTagName('nd').length > 0) {
            rel.members[i].ref = "_fullGeom"+rel.members[i].ref;
            addFullGeometryWay(
              member.getElementsByTagName('nd'),
              rel.members[i].ref
            );
          }
        }
      });
    }
    // nodes
    _.each( xml.getElementsByTagName('node'), function( node, i ) {
      var tags = {};
      _.each( node.getElementsByTagName('tag'), function( tag ) {
        tags[tag.getAttribute('k')] = tag.getAttribute('v');
      });
      var nodeObject = {
        'type': 'node'
      };
      copy_attribute( node, nodeObject, 'id' );
      copy_attribute( node, nodeObject, 'lat' );
      copy_attribute( node, nodeObject, 'lon' );
      copy_attribute( node, nodeObject, 'version' );
      copy_attribute( node, nodeObject, 'timestamp' );
      copy_attribute( node, nodeObject, 'changeset' );
      copy_attribute( node, nodeObject, 'uid' );
      copy_attribute( node, nodeObject, 'user' );
      if (!_.isEmpty(tags))
        nodeObject.tags = tags;
      nodes.push(nodeObject);
    });
    // ways
    var centroid,bounds;
    _.each( xml.getElementsByTagName('way'), function( way, i ) {
      var tags = {};
      var wnodes = [];
      _.each( way.getElementsByTagName('tag'), function( tag ) {
        tags[tag.getAttribute('k')] = tag.getAttribute('v');
      });
      var has_full_geometry = false;
      _.each( way.getElementsByTagName('nd'), function( nd, i ) {
        var id;
        if (id = nd.getAttribute('ref'))
          wnodes[i] = id;
        if (!has_full_geometry && nd.getAttribute('lat'))
          has_full_geometry = true;
      });
      var wayObject = {
        "type": "way"
      };
      copy_attribute( way, wayObject, 'id' );
      copy_attribute( way, wayObject, 'version' );
      copy_attribute( way, wayObject, 'timestamp' );
      copy_attribute( way, wayObject, 'changeset' );
      copy_attribute( way, wayObject, 'uid' );
      copy_attribute( way, wayObject, 'user' );
      if (wnodes.length > 0)
        wayObject.nodes = wnodes;
      if (!_.isEmpty(tags))
        wayObject.tags = tags;
      if (centroid = way.getElementsByTagName('center')[0])
        centerGeometry(wayObject,centroid);
      if (has_full_geometry)
        fullGeometryWay(wayObject, way.getElementsByTagName('nd'));
      else if (bounds = way.getElementsByTagName('bounds')[0])
        boundsGeometry(wayObject,bounds);
      ways.push(wayObject);
    });
    // relations
    _.each( xml.getElementsByTagName('relation'), function( relation, i ) {
      var tags = {};
      var members = [];
      _.each( relation.getElementsByTagName('tag'), function( tag ) {
        tags[tag.getAttribute('k')] = tag.getAttribute('v');
      });
      var has_full_geometry = false;
      _.each( relation.getElementsByTagName('member'), function( member, i ) {
        members[i] = {};
        copy_attribute( member, members[i], 'ref' );
        copy_attribute( member, members[i], 'role' );
        copy_attribute( member, members[i], 'type' );
        if (!has_full_geometry &&
             (members[i].type == 'node' && member.getAttribute('lat')) ||
             (members[i].type == 'way'  && member.getElementsByTagName('nd').length>0) )
          has_full_geometry = true;
      });
      var relObject = {
        "type": "relation"
      }
      copy_attribute( relation, relObject, 'id' );
      copy_attribute( relation, relObject, 'version' );
      copy_attribute( relation, relObject, 'timestamp' );
      copy_attribute( relation, relObject, 'changeset' );
      copy_attribute( relation, relObject, 'uid' );
      copy_attribute( relation, relObject, 'user' );
      if (members.length > 0)
        relObject.members = members;
      if (!_.isEmpty(tags))
        relObject.tags = tags;
      if (centroid = relation.getElementsByTagName('center')[0])
        centerGeometry(relObject,centroid);
      if (has_full_geometry)
        fullGeometryRelation(relObject, relation.getElementsByTagName('member'));
      else if (bounds = relation.getElementsByTagName('bounds')[0])
        boundsGeometry(relObject,bounds);
      rels.push(relObject);
    });
    return _convert2geoJSON(nodes,ways,rels);
  }
  function _convert2geoJSON(nodes,ways,rels) {

    // helper function that checks if there are any tags other than "created_by", "source", etc. or any tag provided in ignore_tags
    function has_interesting_tags(t, ignore_tags) {
      if (typeof ignore_tags !== "object")
        ignore_tags={};
      if (typeof options.uninterestingTags === "function")
        return !options.uninterestingTags(t, ignore_tags);
      for (var k in t)
        if (!(options.uninterestingTags[k]===true) &&
            !(ignore_tags[k]===true || ignore_tags[k]===t[k]))
          return true;
      return false;
    };
    // helper function to extract meta information
    function build_meta_information(object) {
      var res = {
        "timestamp": object.timestamp,
        "version": object.version,
        "changeset": object.changeset,
        "user": object.user,
        "uid": object.uid
      };
      for (var k in res)
        if (res[k] === undefined)
          delete res[k];
      return res;
    }

    // some data processing (e.g. filter nodes only used for ways)
    var nodeids = new Object();
    var poinids = new Object();
    for (var i=0;i<nodes.length;i++) {
      var node = nodes[i];
      if (nodeids[node.id] !== undefined) {
        // handle input data duplication
        node = options.deduplicator(node, nodeids[node.id]);
      }
      nodeids[node.id] = node;
      if (typeof node.tags != 'undefined' &&
          has_interesting_tags(node.tags)) // this checks if the node has any tags other than "created_by"
        poinids[node.id] = true;
    }
    // todo -> after deduplication of relations??
    for (var i=0;i<rels.length;i++) {
      if (_.isArray(rels[i].members)) {
        for (var j=0;j<rels[i].members.length;j++) {
          if (rels[i].members[j].type == "node")
            poinids[rels[i].members[j].ref] = true;
        }
      }
    }
    var wayids = new Object();
    var waynids = new Object();
    for (var i=0;i<ways.length;i++) {
      var way = ways[i];
      if (wayids[way.id]) {
        // handle input data duplication
        way = options.deduplicator(way, wayids[way.id]);
      }
      wayids[way.id] = way;
      if (_.isArray(way.nodes)) {
        for (var j=0;j<way.nodes.length;j++) {
          if (typeof way.nodes[j] === "object") continue; // ignore already replaced way node objects
          waynids[way.nodes[j]] = true;
          way.nodes[j] = nodeids[way.nodes[j]];
        }
      }
    }
    var pois = new Array();
    for (var id in nodeids) {
      var node = nodeids[id];
      if (!waynids[id] || poinids[id])
        pois.push(node);
    }
    var relids = new Array();
    for (var i=0;i<rels.length;i++) {
      var rel = rels[i];
      if (relids[rel.id]) {
        // handle input data duplication
        rel = options.deduplicator(rel, relids[rel.id]);
      }
      relids[rel.id] = rel;
    }
    var relsmap = {node: {}, way: {}, relation: {}};
    for (var id in relids) {
      var rel = relids[id];
      if (!_.isArray(rel.members)) {
        if (options.verbose) console.warn('Relation',rel.type+'/'+rel.id,'ignored because it has no members');
        continue; // ignore relations without members (e.g. returned by an ids_only query)
      }
      for (var j=0;j<rel.members.length;j++) {
        var m_type = rel.members[j].type;
        var m_ref = rel.members[j].ref;
        if (typeof m_ref !== "number") {
          // de-namespace full geometry content
          m_ref = m_ref.replace("_fullGeom", "");
        }
        if (!relsmap[m_type]) {
          if (options.verbose) console.warn('Relation',rel.type+'/'+rel.id,'member',m_type+'/'+m_ref,'ignored because it has an invalid type');
          continue;
        }
        if (typeof relsmap[m_type][m_ref] === "undefined")
          relsmap[m_type][m_ref] = [];
        relsmap[m_type][m_ref].push({
          "role" : rel.members[j].role,
          "rel" : rel.id,
          "reltags" : rel.tags,
        });
      }
    }
    // construct geojson
    var geojson;
    var geojsonnodes = [];
    for (i=0;i<pois.length;i++) {
      if (typeof pois[i].lon == "undefined" || typeof pois[i].lat == "undefined") {
        if (options.verbose) console.warn('POI',pois[i].type+'/'+pois[i].id,'ignored because it lacks coordinates');
        continue; // lon and lat are required for showing a point
      }
      var feature = {
        "type"       : "Feature",
        "id"         : pois[i].type+"/"+pois[i].id,
        "properties" : {
          "type" : pois[i].type,
          "id"   : pois[i].id,
          "tags" : pois[i].tags || {},
          "relations" : relsmap["node"][pois[i].id] || [],
          "meta": build_meta_information(pois[i])
        },
        "geometry"   : {
          "type" : "Point",
          "coordinates" : [+pois[i].lon, +pois[i].lat],
        }
      };
      if (pois[i].__is_center_placeholder)
        feature.properties["geometry"] = "center";
      if (!featureCallback)
        geojsonnodes.push(feature);
      else
        featureCallback(feature);
    }
    var geojsonlines = [];
    var geojsonpolygons = [];
    // process multipolygons
    for (var i=0;i<rels.length;i++) {
      // todo: refactor such that this loops over relids instead of rels?
      if (relids[rels[i].id] !== rels[i]) {
        // skip relation because it's a deduplication artifact
        continue;
      }
      if ((typeof rels[i].tags != "undefined") &&
          (rels[i].tags["type"] == "route" || rels[i].tags["type"] == "waterway")) {
        if (!_.isArray(rels[i].members)) {
          if (options.verbose) console.warn('Route',rels[i].type+'/'+rels[i].id,'ignored because it has no members');
          continue; // ignore relations without members (e.g. returned by an ids_only query)
        }
        rels[i].members.forEach(function(m) {
          if (wayids[m.ref] && !has_interesting_tags(wayids[m.ref].tags))
              wayids[m.ref].is_skippablerelationmember = true;
        });
        feature = construct_multilinestring(rels[i]);
        if (feature === false) {
          if (options.verbose) console.warn('Route relation',rels[i].type+'/'+rels[i].id,'ignored because it has invalid geometry');
          continue; // abort if feature could not be constructed
        }
        if (!featureCallback)
          geojsonpolygons.push(feature);
        else
          featureCallback(rewind(feature));

        function construct_multilinestring(rel) {
          var is_tainted = false;
          // prepare route members
          var members;
          members = rel.members.filter(function(m) {return m.type === "way";});
          members = members.map(function(m) {
            var way = wayids[m.ref];
            if (way === undefined || way.nodes === undefined) { // check for missing ways
              if (options.verbose) console.warn('Route '+rel.type+'/'+rel.id, 'tainted by a missing or incomplete  way', m.type+'/'+m.ref);
              is_tainted = true;
              return;
            }
            return { // TODO: this is slow! :(
              id: m.ref,
              role: m.role,
              way: way,
              nodes: way.nodes.filter(function(n) {
                if (n !== undefined)
                  return true;
                is_tainted = true;
                if (options.verbose) console.warn('Route', rel.type+'/'+rel.id,  'tainted by a way', m.type+'/'+m.ref, 'with a missing node');
                return false;
              })
            };
          });
          members = _.compact(members);
          // construct connected linestrings
          var linestrings;
          linestrings = join(members);

          // sanitize mp-coordinates (remove empty clusters or rings, {lat,lon,...} to [lon,lat]
          var coords = [];
          coords = _.compact(linestrings.map(function(linestring) {
            return _.compact(linestring.map(function(node) {
              return [+node.lon,+node.lat];
            }));
          }));

          if (coords.length == 0) {
            if (options.verbose) console.warn('Route', rel.type+'/'+rel.id, 'contains no coordinates');
            return false; // ignore routes without coordinates
          }

          // mp parsed, now construct the geoJSON
          var feature = {
            "type"       : "Feature",
            "id"         : rel.type+"/"+rel.id,
            "properties" : {
              "type" : rel.type,
              "id"   : rel.id,
              "tags" : rel.tags || {},
              "relations" :  relsmap[rel.type][rel.id] || [],
              "meta": build_meta_information(rel)
            },
            "geometry"   : {
              "type" : coords.length === 1 ? "LineString" : "MultiLineString",
              "coordinates" : coords.length === 1 ? coords[0] : coords,
            }
          }
          if (is_tainted) {
            if (options.verbose) console.warn('Route', rel.type+'/'+rel.id, 'is tainted');
            feature.properties["tainted"] = true;
          }
          return feature;
        }
      } // end construct multilinestring for route relations
      if ((typeof rels[i].tags != "undefined") &&
          (rels[i].tags["type"] == "multipolygon" || rels[i].tags["type"] == "boundary")) {
        if (!_.isArray(rels[i].members)) {
          if (options.verbose) console.warn('Multipolygon',rels[i].type+'/'+rels[i].id,'ignored because it has no members');
          continue; // ignore relations without members (e.g. returned by an ids_only query)
        }
        var outer_count = 0;
        for (var j=0;j<rels[i].members.length;j++)
          if (rels[i].members[j].role == "outer")
            outer_count++;
          else if (options.verbose && rels[i].members[j].role != "inner")
            console.warn('Multipolygon',rels[i].type+'/'+rels[i].id,'member',rels[i].members[j].type+'/'+rels[i].members[j].ref,'ignored because it has an invalid role: "' + rels[i].members[j].role + '"');
        rels[i].members.forEach(function(m) {
          if (wayids[m.ref]) {
            // this even works in the following corner case:
            // a multipolygon amenity=xxx with outer line tagged amenity=yyy
            // see https://github.com/tyrasd/osmtogeojson/issues/7
            if (m.role==="outer" && !has_interesting_tags(wayids[m.ref].tags,rels[i].tags))
              wayids[m.ref].is_skippablerelationmember = true;
            if (m.role==="inner" && !has_interesting_tags(wayids[m.ref].tags))
              wayids[m.ref].is_skippablerelationmember = true;
          }
        });
        if (outer_count == 0) {
          if (options.verbose) console.warn('Multipolygon relation',rels[i].type+'/'+rels[i].id,'ignored because it has no outer ways');
          continue; // ignore multipolygons without outer ways
        }
        var simple_mp = false;
        if (outer_count == 1 && !has_interesting_tags(rels[i].tags, {"type":true}))
          simple_mp = true;
        var feature = null;
        if (!simple_mp) {
          feature = construct_multipolygon(rels[i], rels[i]);
        } else {
          // simple multipolygon
          var outer_way = rels[i].members.filter(function(m) {return m.role === "outer";})[0];
          outer_way = wayids[outer_way.ref];
          if (outer_way === undefined) {
            if (options.verbose) console.warn('Multipolygon relation',rels[i].type+'/'+rels[i].id,'ignored because outer way', outer_way.type+'/'+outer_way.ref,'is missing');
            continue; // abort if outer way object is not present
          }
          outer_way.is_skippablerelationmember = true;
          feature = construct_multipolygon(outer_way, rels[i]);
        }
        if (feature === false) {
          if (options.verbose) console.warn('Multipolygon relation',rels[i].type+'/'+rels[i].id,'ignored because it has invalid geometry');
          continue; // abort if feature could not be constructed
        }
        if (!featureCallback)
          geojsonpolygons.push(feature);
        else
          featureCallback(rewind(feature));

        function construct_multipolygon(tag_object, rel) {
          var is_tainted = false;
          var mp_geometry = simple_mp ? 'way' : 'relation',
              mp_id = typeof tag_object.id === "number" ? tag_object.id : +(tag_object.id.replace("_fullGeom", ""));
          // prepare mp members
          var members;
          members = rel.members.filter(function(m) {return m.type === "way";});
          members = members.map(function(m) {
            var way = wayids[m.ref];
            if (way === undefined || way.nodes === undefined) { // check for missing ways
              if (options.verbose) console.warn('Multipolygon', mp_geometry+'/'+mp_id, 'tainted by a missing or incomplete way', m.type+'/'+m.ref);
              is_tainted = true;
              return;
            }
            return { // TODO: this is slow! :(
              id: m.ref,
              role: m.role || "outer",
              way: way,
              nodes: way.nodes.filter(function(n) {
                if (n !== undefined)
                  return true;
                is_tainted = true;
                if (options.verbose) console.warn('Multipolygon', mp_geometry+'/'+mp_id,  'tainted by a way', m.type+'/'+m.ref, 'with a missing node');
                return false;
              })
            };
          });
          members = _.compact(members);
          // construct outer and inner rings
          var outers, inners;
          outers = join(members.filter(function(m) {return m.role==="outer";}));
          inners = join(members.filter(function(m) {return m.role==="inner";}));
          // sort rings
          var mp;
          function findOuter(inner) {
            var polygonIntersectsPolygon = function(outer, inner) {
              for (var i=0; i<inner.length; i++)
                if (pointInPolygon(inner[i], outer))
                  return true;
              return false;
            }
            var mapCoordinates = function(from) {
              return from.map(function(n) {
                return [+n.lat,+n.lon];
              });
            }
            // stolen from iD/geo.js,
            // based on https://github.com/substack/point-in-polygon,
            // ray-casting algorithm based on http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
            var pointInPolygon = function(point, polygon) {
              var x = point[0], y = point[1], inside = false;
              for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
                var xi = polygon[i][0], yi = polygon[i][1];
                var xj = polygon[j][0], yj = polygon[j][1];
                var intersect = ((yi > y) != (yj > y)) &&
                  (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                if (intersect) inside = !inside;
              }
              return inside;
            };
            // stolen from iD/relation.js
            var o, outer;
            // todo: all this coordinate mapping makes this unneccesarily slow.
            // see the "todo: this is slow! :(" above.
            inner = mapCoordinates(inner);
            /*for (o = 0; o < outers.length; o++) {
              outer = mapCoordinates(outers[o]);
              if (polygonContainsPolygon(outer, inner))
                return o;
            }*/
            for (o = 0; o < outers.length; o++) {
              outer = mapCoordinates(outers[o]);
              if (polygonIntersectsPolygon(outer, inner))
                return o;
            }
          }
          mp = outers.map(function(o) {return [o];});
          for (var j=0; j<inners.length; j++) {
            var o = findOuter(inners[j]);
            if (o !== undefined)
              mp[o].push(inners[j]);
            else
              if (options.verbose) console.warn('Multipolygon', mp_geometry+'/'+mp_id, 'contains an inner ring with no containing outer');
              // so, no outer ring for this inner ring is found.
              // We're going to ignore holes in empty space.
              ;
          }
          // sanitize mp-coordinates (remove empty clusters or rings, {lat,lon,...} to [lon,lat]
          var mp_coords = [];
          mp_coords = _.compact(mp.map(function(cluster) {
            var cl = _.compact(cluster.map(function(ring) {
              if (ring.length < 4) { // todo: is this correct: ring.length < 4 ?
                if (options.verbose) console.warn('Multipolygon', mp_geometry+'/'+mp_id, 'contains a ring with less than four nodes');
                return;
              }
              return _.compact(ring.map(function(node) {
                return [+node.lon,+node.lat];
              }));
            }));
            if (cl.length == 0) {
              if (options.verbose) console.warn('Multipolygon', mp_geometry+'/'+mp_id, 'contains an empty ring cluster');
              return;
            }
            return cl;
          }));

          if (mp_coords.length == 0) {
            if (options.verbose) console.warn('Multipolygon', mp_geometry+'/'+mp_id, 'contains no coordinates');
            return false; // ignore multipolygons without coordinates
          }
          var mp_type = "MultiPolygon";
          if (mp_coords.length === 1) {
            mp_type = "Polygon";
            mp_coords = mp_coords[0];
          }
          // mp parsed, now construct the geoJSON
          var feature = {
            "type"       : "Feature",
            "id"         : tag_object.type+"/"+mp_id,
            "properties" : {
              "type" : tag_object.type,
              "id"   : mp_id,
              "tags" : tag_object.tags || {},
              "relations" :  relsmap[tag_object.type][tag_object.id] || [],
              "meta": build_meta_information(tag_object)
            },
            "geometry"   : {
              "type" : mp_type,
              "coordinates" : mp_coords,
            }
          }
          if (is_tainted) {
            if (options.verbose) console.warn('Multipolygon', mp_geometry+'/'+mp_id, 'is tainted');
            feature.properties["tainted"] = true;
          }
          return feature;
        }
      }
    }
    // process lines and polygons
    for (var i=0;i<ways.length;i++) {
      // todo: refactor such that this loops over wayids instead of ways?
      if (wayids[ways[i].id] !== ways[i]) {
        // skip way because it's a deduplication artifact
        continue;
      }
      if (!_.isArray(ways[i].nodes)) {
        if (options.verbose) console.warn('Way',ways[i].type+'/'+ways[i].id,'ignored because it has no nodes');
        continue; // ignore ways without nodes (e.g. returned by an ids_only query)
      }
      if (ways[i].is_skippablerelationmember)
        continue; // ignore ways which are already rendered as (part of) a multipolygon
      if (typeof ways[i].id !== "number") {
        // remove full geometry namespace for output
        ways[i].id = +ways[i].id.replace("_fullGeom", "");
      }
      ways[i].tainted = false;
      ways[i].hidden = false;
      var coords = new Array();
      for (j=0;j<ways[i].nodes.length;j++) {
        if (typeof ways[i].nodes[j] == "object")
          coords.push([+ways[i].nodes[j].lon, +ways[i].nodes[j].lat]);
        else {
          if (options.verbose) console.warn('Way',ways[i].type+'/'+ways[i].id,'is tainted by an invalid node');
          ways[i].tainted = true;
        }
      }
      if (coords.length <= 1) { // invalid way geometry
        if (options.verbose) console.warn('Way',ways[i].type+'/'+ways[i].id,'ignored because it contains too few nodes');
        continue;
      }
      var way_type = "LineString"; // default
      if (typeof ways[i].nodes[0] != "undefined" && typeof ways[i].nodes[ways[i].nodes.length-1] != "undefined" && // way has its start/end nodes loaded
        ways[i].nodes[0].id === ways[i].nodes[ways[i].nodes.length-1].id && // ... and forms a closed ring
        (
          typeof ways[i].tags != "undefined" && // ... and has tags
          _isPolygonFeature(ways[i].tags) // ... and tags say it is a polygon
          || // or is a placeholder for a bounds geometry
          ways[i].__is_bounds_placeholder
        )
      ) {
        way_type = "Polygon";
        coords = [coords];
      }
      var feature = {
        "type"       : "Feature",
        "id"         : ways[i].type+"/"+ways[i].id,
        "properties" : {
          "type" : ways[i].type,
          "id"   : ways[i].id,
          "tags" : ways[i].tags || {},
          "relations" : relsmap["way"][ways[i].id] || [],
          "meta": build_meta_information(ways[i])
        },
        "geometry"   : {
          "type" : way_type,
          "coordinates" : coords,
        }
      }
      if (ways[i].tainted) {
        if (options.verbose) console.warn('Way',ways[i].type+'/'+ways[i].id,'is tainted');
        feature.properties["tainted"] = true;
      }
      if (ways[i].__is_bounds_placeholder)
        feature.properties["geometry"] = "bounds";
      if (!featureCallback) {
        if (way_type == "LineString")
          geojsonlines.push(feature);
        else
          geojsonpolygons.push(feature);
      } else {
        featureCallback(rewind(feature));
      }
    }

    if (featureCallback)
      return true;

    geojson = {
      "type": "FeatureCollection",
      "features": []
    };
    geojson.features = geojson.features.concat(geojsonpolygons);
    geojson.features = geojson.features.concat(geojsonlines);
    geojson.features = geojson.features.concat(geojsonnodes);
    // optionally, flatten properties
    if (options.flatProperties) {
      geojson.features.forEach(function(f) {
        f.properties = _.merge(
          f.properties.meta,
          f.properties.tags,
          {id: f.properties.type+"/"+f.properties.id}
        );
      });
    }
    // fix polygon winding
    geojson = rewind(geojson);
    return geojson;
  }
  function _isPolygonFeature( tags ) {
    var polygonFeatures = options.polygonFeatures;
    if (typeof polygonFeatures === "function")
      return polygonFeatures(tags);
    // explicitely tagged non-areas
    if ( tags['area'] === 'no' )
      return false;
    // assuming that a typical OSM way has in average less tags than
    // the polygonFeatures list, this way around should be faster
    for ( var key in tags ) {
      var val = tags[key];
      var pfk = polygonFeatures[key];
      // continue with next if tag is unknown or not "categorizing"
      if ( typeof pfk === 'undefined' )
        continue;
      // continue with next if tag is explicitely un-set ("building=no")
      if ( val === 'no' )
        continue;
      // check polygon features for: general acceptance, included or excluded values
      if ( pfk === true )
        return true;
      if ( pfk.included_values && pfk.included_values[val] === true )
        return true;
      if ( pfk.excluded_values && pfk.excluded_values[val] !== true )
        return true;
    }
    // if no tags matched, this ain't no area.
    return false;
  }
};

// helper that joins adjacent osm ways into linestrings or linear rings
function join(ways) {
  var _first = function(arr) {return arr[0]};
  var _last  = function(arr) {return arr[arr.length-1]};
  var _fitTogether = function(n1, n2) {
    return n1 !== undefined && n2 !== undefined && n1.id === n2.id;
  }
  // stolen from iD/relation.js
  var joined = [], current, first, last, i, how, what;
  while (ways.length) {
    current = ways.pop().nodes.slice();
    joined.push(current);
    while (ways.length && !_fitTogether(_first(current), _last(current))) {
      first = _first(current);
      last  = _last(current);
      for (i = 0; i < ways.length; i++) {
        what = ways[i].nodes;
        if (_fitTogether(last, _first(what))) {
          how  = current.push;
          what = what.slice(1);
          break;
        } else if (_fitTogether(last, _last(what))) {
          how  = current.push;
          what = what.slice(0, -1).reverse();
          break;
        } else if (_fitTogether(first, _last(what))) {
          how  = current.unshift;
          what = what.slice(0, -1);
          break;
        } else if (_fitTogether(first, _first(what))) {
          how  = current.unshift;
          what = what.slice(1).reverse();
          break;
        } else {
          what = how = null;
        }
      }
      if (!what)
        break; // Invalid geometry (dangling way, unclosed ring)
      ways.splice(i, 1);
      how.apply(current, what);
    }
  }
  return joined;
}

// for backwards compatibility
osmtogeojson.toGeojson = osmtogeojson;

module.exports = osmtogeojson;


/***/ }),

/***/ "./node_modules/osmtogeojson/lodash.custom.js":
/*!****************************************************!*\
  !*** ./node_modules/osmtogeojson/lodash.custom.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * @license
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash exports="node" include="clone,merge,isEmpty,isArray,compact,each" -d`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function() {

  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
  var undefined;

  /** Used as the semantic version number. */
  var VERSION = '4.15.0';

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used to compose bitmasks for comparison styles. */
  var UNORDERED_COMPARE_FLAG = 1,
      PARTIAL_COMPARE_FLAG = 2;

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
      MAX_SAFE_INTEGER = 9007199254740991;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      promiseTag = '[object Promise]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      symbolTag = '[object Symbol]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to match property names within property paths. */
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/,
      reLeadingDot = /^\./,
      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to match backslashes in property paths. */
  var reEscapeChar = /\\(\\)?/g;

  /** Used to match `RegExp` flags from their coerced string values. */
  var reFlags = /\w*$/;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /** Used to identify `toStringTag` values supported by `_.clone`. */
  var cloneableTags = {};
  cloneableTags[argsTag] = cloneableTags[arrayTag] =
  cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
  cloneableTags[boolTag] = cloneableTags[dateTag] =
  cloneableTags[float32Tag] = cloneableTags[float64Tag] =
  cloneableTags[int8Tag] = cloneableTags[int16Tag] =
  cloneableTags[int32Tag] = cloneableTags[mapTag] =
  cloneableTags[numberTag] = cloneableTags[objectTag] =
  cloneableTags[regexpTag] = cloneableTags[setTag] =
  cloneableTags[stringTag] = cloneableTags[symbolTag] =
  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
  cloneableTags[errorTag] = cloneableTags[funcTag] =
  cloneableTags[weakMapTag] = false;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports =  true && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      return freeProcess && freeProcess.binding('util');
    } catch (e) {}
  }());

  /* Node.js helper references. */
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

  /*--------------------------------------------------------------------------*/

  /**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
  function addMapEntry(map, pair) {
    // Don't return `map.set` because it's not chainable in IE 11.
    map.set(pair[0], pair[1]);
    return map;
  }

  /**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
  function addSetEntry(set, value) {
    // Don't return `set.add` because it's not chainable in IE 11.
    set.add(value);
    return set;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array ? array.length : 0;

    if (initAccum && length) {
      accumulator = array[++index];
    }
    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
  }

  /**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
  function arraySome(array, predicate) {
    var index = -1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }

  /**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Checks if `value` is a host object in IE < 9.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
   */
  function isHostObject(value) {
    // Many host objects are `Object` objects that can coerce to strings
    // despite having improperly defined `toString` methods.
    var result = false;
    if (value != null && typeof value.toString != 'function') {
      try {
        result = !!(value + '');
      } catch (e) {}
    }
    return result;
  }

  /**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);

    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  /**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
  function setToArray(set) {
    var index = -1,
        result = Array(set.size);

    set.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /** Used for built-in method references. */
  var arrayProto = Array.prototype,
      funcProto = Function.prototype,
      objectProto = Object.prototype;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /** Built-in value references. */
  var Buffer = moduleExports ? root.Buffer : undefined,
      Symbol = root.Symbol,
      Uint8Array = root.Uint8Array,
      getPrototype = overArg(Object.getPrototypeOf, Object),
      objectCreate = Object.create,
      propertyIsEnumerable = objectProto.propertyIsEnumerable,
      splice = arrayProto.splice;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeGetSymbols = Object.getOwnPropertySymbols,
      nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
      nativeKeys = overArg(Object.keys, Object),
      nativeMax = Math.max;

  /* Built-in method references that are verified to be native. */
  var DataView = getNative(root, 'DataView'),
      Map = getNative(root, 'Map'),
      Promise = getNative(root, 'Promise'),
      Set = getNative(root, 'Set'),
      WeakMap = getNative(root, 'WeakMap'),
      nativeCreate = getNative(Object, 'create');

  /** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
  var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

  /** Used to lookup unminified function names. */
  var realNames = {};

  /** Used to detect maps, sets, and weakmaps. */
  var dataViewCtorString = toSource(DataView),
      mapCtorString = toSource(Map),
      promiseCtorString = toSource(Promise),
      setCtorString = toSource(Set),
      weakMapCtorString = toSource(WeakMap);

  /** Used to convert symbols to primitives and strings. */
  var symbolProto = Symbol ? Symbol.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined,
      symbolToString = symbolProto ? symbolProto.toString : undefined;

  /*------------------------------------------------------------------------*/

  /**
   * Creates a `lodash` object which wraps `value` to enable implicit method
   * chain sequences. Methods that operate on and return arrays, collections,
   * and functions can be chained together. Methods that retrieve a single value
   * or may return a primitive value will automatically end the chain sequence
   * and return the unwrapped value. Otherwise, the value must be unwrapped
   * with `_#value`.
   *
   * Explicit chain sequences, which must be unwrapped with `_#value`, may be
   * enabled using `_.chain`.
   *
   * The execution of chained methods is lazy, that is, it's deferred until
   * `_#value` is implicitly or explicitly called.
   *
   * Lazy evaluation allows several methods to support shortcut fusion.
   * Shortcut fusion is an optimization to merge iteratee calls; this avoids
   * the creation of intermediate arrays and can greatly reduce the number of
   * iteratee executions. Sections of a chain sequence qualify for shortcut
   * fusion if the section is applied to an array of at least `200` elements
   * and any iteratees accept only one argument. The heuristic for whether a
   * section qualifies for shortcut fusion is subject to change.
   *
   * Chaining is supported in custom builds as long as the `_#value` method is
   * directly or indirectly included in the build.
   *
   * In addition to lodash methods, wrappers have `Array` and `String` methods.
   *
   * The wrapper `Array` methods are:
   * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
   *
   * The wrapper `String` methods are:
   * `replace` and `split`
   *
   * The wrapper methods that support shortcut fusion are:
   * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
   * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
   * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
   *
   * The chainable wrapper methods are:
   * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
   * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
   * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
   * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
   * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
   * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
   * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
   * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
   * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
   * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
   * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
   * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
   * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
   * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
   * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
   * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
   * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
   * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
   * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
   * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
   * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
   * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
   * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
   * `zipObject`, `zipObjectDeep`, and `zipWith`
   *
   * The wrapper methods that are **not** chainable by default are:
   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
   * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
   * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
   * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
   * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
   * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
   * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
   * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
   * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
   * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
   * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
   * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
   * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
   * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
   * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
   * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
   * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
   * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
   * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
   * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
   * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
   * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
   * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
   * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
   * `upperFirst`, `value`, and `words`
   *
   * @name _
   * @constructor
   * @category Seq
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // Returns an unwrapped value.
   * wrapped.reduce(_.add);
   * // => 6
   *
   * // Returns a wrapped value.
   * var squares = wrapped.map(square);
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */
  function lodash() {
    // No operation performed.
  }

  /*------------------------------------------------------------------------*/

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
  }

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    return this.has(key) && delete this.__data__[key];
  }

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
  }

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
  }

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
    return this;
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  /*------------------------------------------------------------------------*/

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
  }

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    return true;
  }

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  /*------------------------------------------------------------------------*/

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries ? entries.length : 0;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.__data__ = {
      'hash': new Hash,
      'map': new (Map || ListCache),
      'string': new Hash
    };
  }

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    return getMapData(this, key)['delete'](key);
  }

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    getMapData(this, key).set(key, value);
    return this;
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;

  /*------------------------------------------------------------------------*/

  /**
   *
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */
  function SetCache(values) {
    var index = -1,
        length = values ? values.length : 0;

    this.__data__ = new MapCache;
    while (++index < length) {
      this.add(values[index]);
    }
  }

  /**
   * Adds `value` to the array cache.
   *
   * @private
   * @name add
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
  }

  /**
   * Checks if `value` is in the array cache.
   *
   * @private
   * @name has
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {number} Returns `true` if `value` is found, else `false`.
   */
  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  // Add methods to `SetCache`.
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  /*------------------------------------------------------------------------*/

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    this.__data__ = new ListCache(entries);
  }

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new ListCache;
  }

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    return this.__data__['delete'](key);
  }

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        return this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    cache.set(key, value);
    return this;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;

  /*------------------------------------------------------------------------*/

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    // Safari 9 makes `arguments.length` enumerable in strict mode.
    var result = (isArray(value) || isArguments(value))
      ? baseTimes(value.length, String)
      : [];

    var length = result.length,
        skipIndexes = !!length;

    for (var key in value) {
      if ((inherited || hasOwnProperty.call(value, key)) &&
          !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq(object[key], value)) ||
        (typeof key == 'number' && value === undefined && !(key in object))) {
      object[key] = value;
    }
  }

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
      object[key] = value;
    }
  }

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.assign` without support for multiple sources
   * or `customizer` functions.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @returns {Object} Returns `object`.
   */
  function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
  }

  /**
   * The base implementation of `_.clone` and `_.cloneDeep` which tracks
   * traversed objects.
   *
   * @private
   * @param {*} value The value to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @param {boolean} [isFull] Specify a clone including symbols.
   * @param {Function} [customizer] The function to customize cloning.
   * @param {string} [key] The key of `value`.
   * @param {Object} [object] The parent object of `value`.
   * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
   * @returns {*} Returns the cloned value.
   */
  function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
    var result;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
      return result;
    }
    if (!isObject(value)) {
      return value;
    }
    var isArr = isArray(value);
    if (isArr) {
      result = initCloneArray(value);
      if (!isDeep) {
        return copyArray(value, result);
      }
    } else {
      var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;

      if (isBuffer(value)) {
        return cloneBuffer(value, isDeep);
      }
      if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
        if (isHostObject(value)) {
          return object ? value : {};
        }
        result = initCloneObject(isFunc ? {} : value);
        if (!isDeep) {
          return copySymbols(value, baseAssign(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag(value, tag, baseClone, isDeep);
      }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);

    if (!isArr) {
      var props = isFull ? getAllKeys(value) : keys(value);
    }
    arrayEach(props || value, function(subValue, key) {
      if (props) {
        key = subValue;
        subValue = value[key];
      }
      // Recursively populate clone (susceptible to call stack limits).
      assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
    });
    return result;
  }

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} prototype The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  function baseCreate(proto) {
    return isObject(proto) ? objectCreate(proto) : {};
  }

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */
  var baseEach = createBaseEach(baseForOwn);

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = createBaseFor();

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */
  function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
  }

  /**
   * The base implementation of `_.get` without support for default values.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @returns {*} Returns the resolved value.
   */
  function baseGet(object, path) {
    path = isKey(path, object) ? [path] : castPath(path);

    var index = 0,
        length = path.length;

    while (object != null && index < length) {
      object = object[toKey(path[index++])];
    }
    return (index && index == length) ? object : undefined;
  }

  /**
   * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
   * `keysFunc` and `symbolsFunc` to get the enumerable property names and
   * symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @param {Function} symbolsFunc The function to get the symbols of `object`.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  /**
   * The base implementation of `getTag`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    return objectToString.call(value);
  }

  /**
   * The base implementation of `_.hasIn` without support for deep paths.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {Array|string} key The key to check.
   * @returns {boolean} Returns `true` if `key` exists, else `false`.
   */
  function baseHasIn(object, key) {
    return object != null && key in Object(object);
  }

  /**
   * The base implementation of `_.isEqual` which supports partial comparisons
   * and tracks traversed objects.
   *
   * @private
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {boolean} [bitmask] The bitmask of comparison flags.
   *  The bitmask may be composed of the following flags:
   *     1 - Unordered comparison
   *     2 - Partial comparison
   * @param {Object} [stack] Tracks traversed `value` and `other` objects.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   */
  function baseIsEqual(value, other, customizer, bitmask, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
  }

  /**
   * A specialized version of `baseIsEqual` for arrays and objects which performs
   * deep comparisons and tracks traversed objects enabling objects with circular
   * references to be compared.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Function} [customizer] The function to customize comparisons.
   * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
   *  for more details.
   * @param {Object} [stack] Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
    var objIsArr = isArray(object),
        othIsArr = isArray(other),
        objTag = arrayTag,
        othTag = arrayTag;

    if (!objIsArr) {
      objTag = getTag(object);
      objTag = objTag == argsTag ? objectTag : objTag;
    }
    if (!othIsArr) {
      othTag = getTag(other);
      othTag = othTag == argsTag ? objectTag : othTag;
    }
    var objIsObj = objTag == objectTag && !isHostObject(object),
        othIsObj = othTag == objectTag && !isHostObject(other),
        isSameTag = objTag == othTag;

    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack);
      return (objIsArr || isTypedArray(object))
        ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
        : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
    }
    if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;

        stack || (stack = new Stack);
        return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
  }

  /**
   * The base implementation of `_.isMatch` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to inspect.
   * @param {Object} source The object of property values to match.
   * @param {Array} matchData The property names, values, and compare flags to match.
   * @param {Function} [customizer] The function to customize comparisons.
   * @returns {boolean} Returns `true` if `object` is a match, else `false`.
   */
  function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length,
        length = index,
        noCustomizer = !customizer;

    if (object == null) {
      return !length;
    }
    object = Object(object);
    while (index--) {
      var data = matchData[index];
      if ((noCustomizer && data[2])
            ? data[1] !== object[data[0]]
            : !(data[0] in object)
          ) {
        return false;
      }
    }
    while (++index < length) {
      data = matchData[index];
      var key = data[0],
          objValue = object[key],
          srcValue = data[1];

      if (noCustomizer && data[2]) {
        if (objValue === undefined && !(key in object)) {
          return false;
        }
      } else {
        var stack = new Stack;
        if (customizer) {
          var result = customizer(objValue, srcValue, key, object, source, stack);
        }
        if (!(result === undefined
              ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
              : result
            )) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike(value) &&
      isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
  }

  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */
  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }
    if (value == null) {
      return identity;
    }
    if (typeof value == 'object') {
      return isArray(value)
        ? baseMatchesProperty(value[0], value[1])
        : baseMatches(value);
    }
    return property(value);
  }

  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject(object)) {
      return nativeKeysIn(object);
    }
    var isProto = isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * The base implementation of `_.matches` which doesn't clone `source`.
   *
   * @private
   * @param {Object} source The object of property values to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
      return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
      return object === source || baseIsMatch(object, source, matchData);
    };
  }

  /**
   * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
   *
   * @private
   * @param {string} path The path of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
      return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
      var objValue = get(object, path);
      return (objValue === undefined && objValue === srcValue)
        ? hasIn(object, path)
        : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
    };
  }

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    if (!(isArray(source) || isTypedArray(source))) {
      var props = baseKeysIn(source);
    }
    arrayEach(props || source, function(srcValue, key) {
      if (props) {
        key = srcValue;
        srcValue = source[key];
      }
      if (isObject(srcValue)) {
        stack || (stack = new Stack);
        baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      }
      else {
        var newValue = customizer
          ? customizer(object[key], srcValue, (key + ''), object, source, stack)
          : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        assignMergeValue(object, key, newValue);
      }
    });
  }

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = object[key],
        srcValue = source[key],
        stacked = stack.get(srcValue);

    if (stacked) {
      assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, (key + ''), object, source, stack)
      : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      newValue = srcValue;
      if (isArray(srcValue) || isTypedArray(srcValue)) {
        if (isArray(objValue)) {
          newValue = objValue;
        }
        else if (isArrayLikeObject(objValue)) {
          newValue = copyArray(objValue);
        }
        else {
          isCommon = false;
          newValue = baseClone(srcValue, true);
        }
      }
      else if (isPlainObject(srcValue) || isArguments(srcValue)) {
        if (isArguments(objValue)) {
          newValue = toPlainObject(objValue);
        }
        else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
          isCommon = false;
          newValue = baseClone(srcValue, true);
        }
        else {
          newValue = objValue;
        }
      }
      else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    assignMergeValue(object, key, newValue);
  }

  /**
   * A specialized version of `baseProperty` which supports deep paths.
   *
   * @private
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
  function basePropertyDeep(path) {
    return function(object) {
      return baseGet(object, path);
    };
  }

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = array;
      return apply(func, this, otherArgs);
    };
  }

  /**
   * The base implementation of `_.toString` which doesn't convert nullish
   * values to empty strings.
   *
   * @private
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   */
  function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
      return value;
    }
    if (isSymbol(value)) {
      return symbolToString ? symbolToString.call(value) : '';
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  /**
   * Casts `value` to a path array if it's not one.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Array} Returns the cast property path array.
   */
  function castPath(value) {
    return isArray(value) ? value : stringToPath(value);
  }

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var result = new buffer.constructor(buffer.length);
    buffer.copy(result);
    return result;
  }

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
  }

  /**
   * Creates a clone of `dataView`.
   *
   * @private
   * @param {Object} dataView The data view to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned data view.
   */
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }

  /**
   * Creates a clone of `map`.
   *
   * @private
   * @param {Object} map The map to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned map.
   */
  function cloneMap(map, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
    return arrayReduce(array, addMapEntry, new map.constructor);
  }

  /**
   * Creates a clone of `regexp`.
   *
   * @private
   * @param {Object} regexp The regexp to clone.
   * @returns {Object} Returns the cloned regexp.
   */
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }

  /**
   * Creates a clone of `set`.
   *
   * @private
   * @param {Object} set The set to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned set.
   */
  function cloneSet(set, isDeep, cloneFunc) {
    var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
    return arrayReduce(array, addSetEntry, new set.constructor);
  }

  /**
   * Creates a clone of the `symbol` object.
   *
   * @private
   * @param {Object} symbol The symbol object to clone.
   * @returns {Object} Returns the cloned symbol object.
   */
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      assignValue(object, key, newValue === undefined ? source[key] : newValue);
    }
    return object;
  }

  /**
   * Copies own symbol properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy symbols from.
   * @param {Object} [object={}] The object to copy symbols to.
   * @returns {Object} Returns `object`.
   */
  function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
  }

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      if (collection == null) {
        return collection;
      }
      if (!isArrayLike(collection)) {
        return eachFunc(collection, iteratee);
      }
      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  /**
   * A specialized version of `baseIsEqualDeep` for arrays with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Array} array The array to compare.
   * @param {Array} other The other array to compare.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Function} customizer The function to customize comparisons.
   * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
   *  for more details.
   * @param {Object} stack Tracks traversed `array` and `other` objects.
   * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
   */
  function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
    var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1,
        result = true,
        seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

    stack.set(array, other);
    stack.set(other, array);

    // Ignore non-index properties.
    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, arrValue, index, other, array, stack)
          : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== undefined) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      // Recursively compare arrays (susceptible to call stack limits).
      if (seen) {
        if (!arraySome(other, function(othValue, othIndex) {
              if (!seen.has(othIndex) &&
                  (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
                return seen.add(othIndex);
              }
            })) {
          result = false;
          break;
        }
      } else if (!(
            arrValue === othValue ||
              equalFunc(arrValue, othValue, customizer, bitmask, stack)
          )) {
        result = false;
        break;
      }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for comparing objects of
   * the same `toStringTag`.
   *
   * **Note:** This function only supports comparing values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {string} tag The `toStringTag` of the objects to compare.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Function} customizer The function to customize comparisons.
   * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
   *  for more details.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
    switch (tag) {
      case dataViewTag:
        if ((object.byteLength != other.byteLength) ||
            (object.byteOffset != other.byteOffset)) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag:
        if ((object.byteLength != other.byteLength) ||
            !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
          return false;
        }
        return true;

      case boolTag:
      case dateTag:
      case numberTag:
        // Coerce booleans to `1` or `0` and dates to milliseconds.
        // Invalid dates are coerced to `NaN`.
        return eq(+object, +other);

      case errorTag:
        return object.name == other.name && object.message == other.message;

      case regexpTag:
      case stringTag:
        // Coerce regexes to strings and treat strings, primitives and objects,
        // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
        // for more details.
        return object == (other + '');

      case mapTag:
        var convert = mapToArray;

      case setTag:
        var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }
        // Assume cyclic values are equal.
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= UNORDERED_COMPARE_FLAG;

        // Recursively compare objects (susceptible to call stack limits).
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }
    }
    return false;
  }

  /**
   * A specialized version of `baseIsEqualDeep` for objects with support for
   * partial deep comparisons.
   *
   * @private
   * @param {Object} object The object to compare.
   * @param {Object} other The other object to compare.
   * @param {Function} equalFunc The function to determine equivalents of values.
   * @param {Function} customizer The function to customize comparisons.
   * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
   *  for more details.
   * @param {Object} stack Tracks traversed `object` and `other` objects.
   * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
   */
  function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
    var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
        objProps = keys(object),
        objLength = objProps.length,
        othProps = keys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
        return false;
      }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);

    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial
          ? customizer(othValue, objValue, key, other, object, stack)
          : customizer(objValue, othValue, key, object, other, stack);
      }
      // Recursively compare objects (susceptible to call stack limits).
      if (!(compared === undefined
            ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
            : compared
          )) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      // Non `Object` object instances with different constructors are not equal.
      if (objCtor != othCtor &&
          ('constructor' in object && 'constructor' in other) &&
          !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
            typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  /**
   * Creates an array of own enumerable property names and symbols of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names and symbols.
   */
  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
  }

  /**
   * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
   * this function returns the custom method, otherwise it returns `baseIteratee`.
   * If arguments are provided, the chosen function is invoked with them and
   * its result is returned.
   *
   * @private
   * @param {*} [value] The value to convert to an iteratee.
   * @param {number} [arity] The arity of the created iteratee.
   * @returns {Function} Returns the chosen function or its result.
   */
  function getIteratee() {
    var result = lodash.iteratee || iteratee;
    result = result === iteratee ? baseIteratee : result;
    return arguments.length ? result(arguments[0], arguments[1]) : result;
  }

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  /**
   * Gets the property names, values, and compare flags of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the match data of `object`.
   */
  function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
      var key = result[length],
          value = object[key];

      result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  /**
   * Creates an array of the own enumerable symbol properties of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of symbols.
   */
  var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

  /**
   * Gets the `toStringTag` of `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  var getTag = baseGetTag;

  // Fallback for data views, maps, sets, and weak maps in IE 11,
  // for data views in Edge < 14, and promises in Node.js.
  if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map && getTag(new Map) != mapTag) ||
      (Promise && getTag(Promise.resolve()) != promiseTag) ||
      (Set && getTag(new Set) != setTag) ||
      (WeakMap && getTag(new WeakMap) != weakMapTag)) {
    getTag = function(value) {
      var result = objectToString.call(value),
          Ctor = result == objectTag ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : undefined;

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString: return dataViewTag;
          case mapCtorString: return mapTag;
          case promiseCtorString: return promiseTag;
          case setCtorString: return setTag;
          case weakMapCtorString: return weakMapTag;
        }
      }
      return result;
    };
  }

  /**
   * Checks if `path` exists on `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @param {Function} hasFunc The function to check properties.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   */
  function hasPath(object, path, hasFunc) {
    path = isKey(path, object) ? [path] : castPath(path);

    var result,
        index = -1,
        length = path.length;

    while (++index < length) {
      var key = toKey(path[index]);
      if (!(result = object != null && hasFunc(object, key))) {
        break;
      }
      object = object[key];
    }
    if (result) {
      return result;
    }
    var length = object ? object.length : 0;
    return !!length && isLength(length) && isIndex(key, length) &&
      (isArray(object) || isArguments(object));
  }

  /**
   * Initializes an array clone.
   *
   * @private
   * @param {Array} array The array to clone.
   * @returns {Array} Returns the initialized clone.
   */
  function initCloneArray(array) {
    var length = array.length,
        result = array.constructor(length);

    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !isPrototype(object))
      ? baseCreate(getPrototype(object))
      : {};
  }

  /**
   * Initializes an object clone based on its `toStringTag`.
   *
   * **Note:** This function only supports cloning values with tags of
   * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {string} tag The `toStringTag` of the object to clone.
   * @param {Function} cloneFunc The function to clone values.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneByTag(object, tag, cloneFunc, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag:
        return cloneArrayBuffer(object);

      case boolTag:
      case dateTag:
        return new Ctor(+object);

      case dataViewTag:
        return cloneDataView(object, isDeep);

      case float32Tag: case float64Tag:
      case int8Tag: case int16Tag: case int32Tag:
      case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
        return cloneTypedArray(object, isDeep);

      case mapTag:
        return cloneMap(object, isDeep, cloneFunc);

      case numberTag:
      case stringTag:
        return new Ctor(object);

      case regexpTag:
        return cloneRegExp(object);

      case setTag:
        return cloneSet(object, isDeep, cloneFunc);

      case symbolTag:
        return cloneSymbol(object);
    }
  }

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
      (typeof value == 'number' || reIsUint.test(value)) &&
      (value > -1 && value % 1 == 0 && value < length);
  }

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike(object) && isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq(object[index], value);
    }
    return false;
  }

  /**
   * Checks if `value` is a property name and not a property path.
   *
   * @private
   * @param {*} value The value to check.
   * @param {Object} [object] The object to query keys on.
   * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
   */
  function isKey(value, object) {
    if (isArray(value)) {
      return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' ||
        value == null || isSymbol(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
      (object != null && value in Object(object));
  }

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

    return value === proto;
  }

  /**
   * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` if suitable for strict
   *  equality comparisons, else `false`.
   */
  function isStrictComparable(value) {
    return value === value && !isObject(value);
  }

  /**
   * A specialized version of `matchesProperty` for source values suitable
   * for strict equality comparisons, i.e. `===`.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @param {*} srcValue The value to match.
   * @returns {Function} Returns the new spec function.
   */
  function matchesStrictComparable(key, srcValue) {
    return function(object) {
      if (object == null) {
        return false;
      }
      return object[key] === srcValue &&
        (srcValue !== undefined || (key in Object(object)));
    };
  }

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  /**
   * Converts `string` to a property path array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the property path array.
   */
  var stringToPath = memoize(function(string) {
    string = toString(string);

    var result = [];
    if (reLeadingDot.test(string)) {
      result.push('');
    }
    string.replace(rePropName, function(match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  });

  /**
   * Converts `value` to a string key if it's not a string or symbol.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {string|symbol} Returns the key.
   */
  function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
      return value;
    }
    var result = (value + '');
    return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
  }

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to process.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  /*------------------------------------------------------------------------*/

  /**
   * Creates an array with all falsey values removed. The values `false`, `null`,
   * `0`, `""`, `undefined`, and `NaN` are falsey.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to compact.
   * @returns {Array} Returns the new array of filtered values.
   * @example
   *
   * _.compact([0, 1, false, 2, '', 3]);
   * // => [1, 2, 3]
   */
  function compact(array) {
    var index = -1,
        length = array ? array.length : 0,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];
      if (value) {
        result[resIndex++] = value;
      }
    }
    return result;
  }

  /*------------------------------------------------------------------------*/

  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _([1, 2]).forEach(function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */
  function forEach(collection, iteratee) {
    var func = isArray(collection) ? arrayEach : baseEach;
    return func(collection, getIteratee(iteratee, 3));
  }

  /*------------------------------------------------------------------------*/

  /**
   * Creates a function that memoizes the result of `func`. If `resolver` is
   * provided, it determines the cache key for storing the result based on the
   * arguments provided to the memoized function. By default, the first argument
   * provided to the memoized function is used as the map cache key. The `func`
   * is invoked with the `this` binding of the memoized function.
   *
   * **Note:** The cache is exposed as the `cache` property on the memoized
   * function. Its creation may be customized by replacing the `_.memoize.Cache`
   * constructor with one whose instances implement the
   * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
   * method interface of `delete`, `get`, `has`, and `set`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to have its output memoized.
   * @param {Function} [resolver] The function to resolve the cache key.
   * @returns {Function} Returns the new memoized function.
   * @example
   *
   * var object = { 'a': 1, 'b': 2 };
   * var other = { 'c': 3, 'd': 4 };
   *
   * var values = _.memoize(_.values);
   * values(object);
   * // => [1, 2]
   *
   * values(other);
   * // => [3, 4]
   *
   * object.a = 2;
   * values(object);
   * // => [1, 2]
   *
   * // Modify the result cache.
   * values.cache.set(object, ['a', 'b']);
   * values(object);
   * // => ['a', 'b']
   *
   * // Replace `_.memoize.Cache`.
   * _.memoize.Cache = WeakMap;
   */
  function memoize(func, resolver) {
    if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments,
          key = resolver ? resolver.apply(this, args) : args[0],
          cache = memoized.cache;

      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result);
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
  }

  // Assign cache to `_.memoize`.
  memoize.Cache = MapCache;

  /*------------------------------------------------------------------------*/

  /**
   * Creates a shallow clone of `value`.
   *
   * **Note:** This method is loosely based on the
   * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
   * and supports cloning arrays, array buffers, booleans, date objects, maps,
   * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
   * arrays. The own enumerable properties of `arguments` objects are cloned
   * as plain objects. An empty object is returned for uncloneable values such
   * as error objects, functions, DOM nodes, and WeakMaps.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to clone.
   * @returns {*} Returns the cloned value.
   * @see _.cloneDeep
   * @example
   *
   * var objects = [{ 'a': 1 }, { 'b': 2 }];
   *
   * var shallow = _.clone(objects);
   * console.log(shallow[0] === objects[0]);
   * // => true
   */
  function clone(value) {
    return baseClone(value, false, true);
  }

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  function isArguments(value) {
    // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
    return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
      (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
  }

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike(value) && isArrayLike(value);
  }

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse;

  /**
   * Checks if `value` is an empty object, collection, map, or set.
   *
   * Objects are considered empty if they have no own enumerable string keyed
   * properties.
   *
   * Array-like values such as `arguments` objects, arrays, buffers, strings, or
   * jQuery-like collections are considered empty if they have a `length` of `0`.
   * Similarly, maps and sets are considered empty if they have a `size` of `0`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is empty, else `false`.
   * @example
   *
   * _.isEmpty(null);
   * // => true
   *
   * _.isEmpty(true);
   * // => true
   *
   * _.isEmpty(1);
   * // => true
   *
   * _.isEmpty([1, 2, 3]);
   * // => false
   *
   * _.isEmpty({ 'a': 1 });
   * // => false
   */
  function isEmpty(value) {
    if (isArrayLike(value) &&
        (isArray(value) || typeof value == 'string' ||
          typeof value.splice == 'function' || isBuffer(value) || isArguments(value))) {
      return !value.length;
    }
    var tag = getTag(value);
    if (tag == mapTag || tag == setTag) {
      return !value.size;
    }
    if (nonEnumShadows || isPrototype(value)) {
      return !nativeKeys(value).length;
    }
    for (var key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 8-9 which returns 'object' for typed array and other constructors.
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return !!value && typeof value == 'object';
  }

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) ||
        objectToString.call(value) != objectTag || isHostObject(value)) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return (typeof Ctor == 'function' &&
      Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return typeof value == 'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag);
  }

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return copyObject(value, keysIn(value));
  }

  /**
   * Converts `value` to a string. An empty string is returned for `null`
   * and `undefined` values. The sign of `-0` is preserved.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {string} Returns the string.
   * @example
   *
   * _.toString(null);
   * // => ''
   *
   * _.toString(-0);
   * // => '-0'
   *
   * _.toString([1, 2, 3]);
   * // => '1,2,3'
   */
  function toString(value) {
    return value == null ? '' : baseToString(value);
  }

  /*------------------------------------------------------------------------*/

  /**
   * Gets the value at `path` of `object`. If the resolved value is
   * `undefined`, the `defaultValue` is returned in its place.
   *
   * @static
   * @memberOf _
   * @since 3.7.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path of the property to get.
   * @param {*} [defaultValue] The value returned for `undefined` resolved values.
   * @returns {*} Returns the resolved value.
   * @example
   *
   * var object = { 'a': [{ 'b': { 'c': 3 } }] };
   *
   * _.get(object, 'a[0].b.c');
   * // => 3
   *
   * _.get(object, ['a', '0', 'b', 'c']);
   * // => 3
   *
   * _.get(object, 'a.b.c', 'default');
   * // => 'default'
   */
  function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
  }

  /**
   * Checks if `path` is a direct or inherited property of `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @param {Array|string} path The path to check.
   * @returns {boolean} Returns `true` if `path` exists, else `false`.
   * @example
   *
   * var object = _.create({ 'a': _.create({ 'b': 2 }) });
   *
   * _.hasIn(object, 'a');
   * // => true
   *
   * _.hasIn(object, 'a.b');
   * // => true
   *
   * _.hasIn(object, ['a', 'b']);
   * // => true
   *
   * _.hasIn(object, 'b');
   * // => false
   */
  function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
  }

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */
  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
  }

  /**
   * This method is like `_.assign` except that it recursively merges own and
   * inherited enumerable string keyed properties of source objects into the
   * destination object. Source properties that resolve to `undefined` are
   * skipped if a destination value exists. Array and plain object properties
   * are merged recursively. Other objects and value types are overridden by
   * assignment. Source objects are applied from left to right. Subsequent
   * sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {
   *   'a': [{ 'b': 2 }, { 'd': 4 }]
   * };
   *
   * var other = {
   *   'a': [{ 'c': 3 }, { 'e': 5 }]
   * };
   *
   * _.merge(object, other);
   * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
   */
  var merge = createAssigner(function(object, source, srcIndex) {
    baseMerge(object, source, srcIndex);
  });

  /*------------------------------------------------------------------------*/

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * Creates a function that invokes `func` with the arguments of the created
   * function. If `func` is a property name, the created function returns the
   * property value for a given element. If `func` is an array or object, the
   * created function returns `true` for elements that contain the equivalent
   * source properties, otherwise it returns `false`.
   *
   * @static
   * @since 4.0.0
   * @memberOf _
   * @category Util
   * @param {*} [func=_.identity] The value to convert to a callback.
   * @returns {Function} Returns the callback.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
   * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, _.iteratee(['user', 'fred']));
   * // => [{ 'user': 'fred', 'age': 40 }]
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, _.iteratee('user'));
   * // => ['barney', 'fred']
   *
   * // Create custom iteratee shorthands.
   * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
   *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
   *     return func.test(string);
   *   };
   * });
   *
   * _.filter(['abc', 'def'], /ef/);
   * // => ['def']
   */
  function iteratee(func) {
    return baseIteratee(typeof func == 'function' ? func : baseClone(func, true));
  }

  /**
   * Creates a function that returns the value at `path` of a given object.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {Array|string} path The path of the property to get.
   * @returns {Function} Returns the new accessor function.
   * @example
   *
   * var objects = [
   *   { 'a': { 'b': 2 } },
   *   { 'a': { 'b': 1 } }
   * ];
   *
   * _.map(objects, _.property('a.b'));
   * // => [2, 1]
   *
   * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
   * // => [1, 2]
   */
  function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
  }

  /**
   * This method returns a new empty array.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {Array} Returns the new empty array.
   * @example
   *
   * var arrays = _.times(2, _.stubArray);
   *
   * console.log(arrays);
   * // => [[], []]
   *
   * console.log(arrays[0] === arrays[1]);
   * // => false
   */
  function stubArray() {
    return [];
  }

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  /*------------------------------------------------------------------------*/

  // Add methods that return wrapped values in chain sequences.
  lodash.compact = compact;
  lodash.iteratee = iteratee;
  lodash.keys = keys;
  lodash.keysIn = keysIn;
  lodash.memoize = memoize;
  lodash.merge = merge;
  lodash.property = property;
  lodash.toPlainObject = toPlainObject;

  /*------------------------------------------------------------------------*/

  // Add methods that return unwrapped values in chain sequences.
  lodash.clone = clone;
  lodash.eq = eq;
  lodash.forEach = forEach;
  lodash.get = get;
  lodash.hasIn = hasIn;
  lodash.identity = identity;
  lodash.isArguments = isArguments;
  lodash.isArray = isArray;
  lodash.isArrayLike = isArrayLike;
  lodash.isArrayLikeObject = isArrayLikeObject;
  lodash.isBuffer = isBuffer;
  lodash.isEmpty = isEmpty;
  lodash.isFunction = isFunction;
  lodash.isLength = isLength;
  lodash.isObject = isObject;
  lodash.isObjectLike = isObjectLike;
  lodash.isPlainObject = isPlainObject;
  lodash.isSymbol = isSymbol;
  lodash.isTypedArray = isTypedArray;
  lodash.stubArray = stubArray;
  lodash.stubFalse = stubFalse;
  lodash.toString = toString;

  // Add aliases.
  lodash.each = forEach;

  /*------------------------------------------------------------------------*/

  /**
   * The semantic version number.
   *
   * @static
   * @memberOf _
   * @type {string}
   */
  lodash.VERSION = VERSION;

  /*--------------------------------------------------------------------------*/

  if (freeModule) {
    // Export for Node.js.
    (freeModule.exports = lodash)._ = lodash;
    // Export for CommonJS support.
    freeExports._ = lodash;
  }
}.call(this));


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/endpoints.js":
/*!**************************!*\
  !*** ./src/endpoints.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Endpoint)
/* harmony export */ });
class Endpoint {
    constructor(name) {
        this.name = name
        this.inMap = false
        this.latlng = {}
    }

    setCoord(latlng) {
        this.latlng = latlng
    }

    clear() {
        this.inMap = false
        this.coord = []
    }

    getLatLng() {
        return this.latlng
    }
}

/***/ }),

/***/ "./node_modules/osm-polygon-features/polygon-features.json":
/*!*****************************************************************!*\
  !*** ./node_modules/osm-polygon-features/polygon-features.json ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"key":"building","polygon":"all"},{"key":"highway","polygon":"whitelist","values":["services","rest_area","escape","elevator"]},{"key":"natural","polygon":"blacklist","values":["coastline","cliff","ridge","arete","tree_row"]},{"key":"landuse","polygon":"all"},{"key":"waterway","polygon":"whitelist","values":["riverbank","dock","boatyard","dam"]},{"key":"amenity","polygon":"all"},{"key":"leisure","polygon":"all"},{"key":"barrier","polygon":"whitelist","values":["city_wall","ditch","hedge","retaining_wall","wall","spikes"]},{"key":"railway","polygon":"whitelist","values":["station","turntable","roundhouse","platform"]},{"key":"area","polygon":"all"},{"key":"boundary","polygon":"all"},{"key":"man_made","polygon":"blacklist","values":["cutline","embankment","pipeline"]},{"key":"power","polygon":"whitelist","values":["plant","substation","generator","transformer"]},{"key":"place","polygon":"all"},{"key":"shop","polygon":"all"},{"key":"aeroway","polygon":"blacklist","values":["taxiway"]},{"key":"tourism","polygon":"all"},{"key":"historic","polygon":"all"},{"key":"public_transport","polygon":"all"},{"key":"office","polygon":"all"},{"key":"building:part","polygon":"all"},{"key":"military","polygon":"all"},{"key":"ruins","polygon":"all"},{"key":"area:highway","polygon":"all"},{"key":"craft","polygon":"all"},{"key":"golf","polygon":"all"},{"key":"indoor","polygon":"all"}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endpoints */ "./src/endpoints.js");


// import AntColonyOptimization from "./aco";
let osmtogeojson = __webpack_require__(/*! osmtogeojson */ "./node_modules/osmtogeojson/index.js");

let showRoutes = document.querySelector("#show-routes");
let hideRoutes = document.querySelector("#hide-routes");
let addOrigin = document.querySelector("#add-origin");
let addDestination = document.querySelector("#add-destination");

let estimatedTimeDiv = document.querySelector("#estimated-time");
let estimatedDistanceDiv = document.querySelector("#estimated-distance");

let origin = new _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"]("origin");
let dest = new _endpoints__WEBPACK_IMPORTED_MODULE_1__["default"]("dest");

let originMarker = null;
let destMarker = null;

// Map initialization
let map = L.map("map").setView([14.58722099685053, 120.98439219018271], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Map updates

showRoutes.addEventListener("click", (e) => {
  if (!originMarker) {
    alert(
      !destMarker ? "Add origin and destination first" : "Add an origin first"
    );
    return;
  } else if (!destMarker) {
    alert("Add a destination first");
    return;
  }

  // let bbox = map.getBounds().toBBoxString();

  // bbox = bbox.split(",");
  // let validBbox = bbox[1] + ',' + bbox[0] + ',' + bbox[3] + ',' + bbox[2]

  // let validBbox =
  //   origin.getLatLng().lat +
  //   "," +
  //   origin.getLatLng().lng +
  //   "," +
  //   dest.getLatLng().lat +
  //   "," +
  //   dest.getLatLng().lng;
  // console.log(validBbox);

  // let overpassUrl =
  //   'https://www.overpass-api.de/api/interpreter?data=[out:json];way(around:500)["highway"](' +
  //   origin.getLatLng().lat +
  //   "," +
  //   origin.getLatLng().lng +
  //   ');way(around:500)["highway"](' +
  //   dest.getLatLng().lat +
  //   "," +
  //   dest.getLatLng().lng +
  //   ");out body;out skel qt;";

  // let validRoutes;
  // fetch(overpassUrl)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     map.eachLayer((layer) => {
  //       if (!layer.options.attribution) {
  //         map.removeLayer(layer);
  //       }
  //     });
  //     validRoutes = L.geoJSON(osmtogeojson(data));
  //   });

  // const ant = new AntColonyOptimization(15, 100, 0.5);
  // ant.initialize(routes);
  // const optimizedRoute = antColonyOptimization.run();

  // optimizedRoute.addTo(map);

  map.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

  let control = L.Routing.control({
    waypoints: [
      originMarker.getLatLng(), // Start point coordinates
      destMarker.getLatLng(), // End point coordinates
    ],
    routeWhileDragging: false,
    addWaypoints: false,
    draggableWaypoints: false,
  }).addTo(map);

  // Listen for the 'routeselected' event
  control.on("routeselected", function (e) {
    let route = e.route;
    let summary = route.summary;

    // Access the estimated time and distance
    let estimatedTime = summary.totalTime; // in seconds
    let estimatedDistance = summary.totalDistance; // in meters

    // Convert estimated time to minutes
    let estimatedTimeInMinutes = Math.round(estimatedTime / 60);

    clearTimeAndDistance();
    displayTimeAndDistance(estimatedTimeInMinutes, estimatedDistance);

    console.log("Estimated Time: " + estimatedTimeInMinutes + " minutes");
    console.log("Estimated Distance: " + estimatedDistance + " meters");
  });
});

hideRoutes.addEventListener("click", (e) => {
  map.eachLayer((layer) => {
    if (!layer.options.attribution) {
      map.removeLayer(layer);
    }
  });
  origin.clear();
  dest.clear();
  console.log("this happens");
  clearTimeAndDistance();
});

addOrigin.addEventListener("click", (e) => {
  map.off("click");

  map.on("click", function (event) {
    console.log("origin clicked");
    if (origin.inMap === false) {
      if (originMarker) {
        map.removeLayer(originMarker); // Remove existing marker
      }
      originMarker = L.marker(event.latlng, { draggable: true }).addTo(map);
      originMarker.bindPopup("This is an origin").openPopup();
      origin.setCoord(event.latlng);
      origin.inMap = true;
    }
  });
  return;
});

addDestination.addEventListener("click", (e) => {
  map.off("click");
  if (origin.inMap === false) {
    return;
  }

  map.on("click", function (event) {
    if (dest.inMap === false) {
      if (destMarker) {
        map.removeLayer(destMarker); // Remove existing marker
      }
      destMarker = L.marker(event.latlng, { draggable: true }).addTo(map);
      destMarker.bindPopup("This is a destination").openPopup();
      dest.setCoord(event.latlng);
      dest.inMap = true;
    }
  });
});

function clearTimeAndDistance() {
  estimatedTimeDiv.textContent = "";
  estimatedDistanceDiv.textContent = "";
}

function displayTimeAndDistance(time, distance) {
  let timeText = document.createTextNode(time + " minute(s)");
  let distanceText = document.createTextNode(distance + " meter(s)");

  estimatedTimeDiv.appendChild(timeText);
  estimatedDistanceDiv.appendChild(distanceText);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3QkFBd0I7O0FBRTVDLE1BQU07QUFDTixvQkFBb0IsMEJBQTBCOztBQUU5QyxNQUFNO0FBQ047O0FBRUEsTUFBTTtBQUNOOztBQUVBLE1BQU07QUFDTixvQkFBb0IsMkJBQTJCO0FBQy9DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0QsU0FBUztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSEFBcUg7QUFDckg7QUFDQSwwREFBMEQsaUJBQWlCLGdCQUFnQixnQkFBZ0IsNkJBQTZCLGdDQUFnQyxLQUFLLDhDQUE4Qyx5Q0FBeUMsR0FBRyxVQUFVLG9CQUFvQiw2QkFBNkIsMEJBQTBCLG9CQUFvQixnQ0FBZ0MsR0FBRyxnREFBZ0Qsa0JBQWtCLG9CQUFvQixxQ0FBcUMsdUNBQXVDLG1DQUFtQywyQkFBMkIsdURBQXVELEdBQUcsa0JBQWtCLHdCQUF3Qix3QkFBd0IsR0FBRyxZQUFZLHVCQUF1QixHQUFHLG1CQUFtQixvQkFBb0IsMEJBQTBCLEdBQUcsc0JBQXNCLHNCQUFzQixvQkFBb0Isd0JBQXdCLHlCQUF5QixHQUFHLDRCQUE0QixrQ0FBa0MsR0FBRywwQkFBMEIseUJBQXlCLGlDQUFpQyw4QkFBOEIsbUJBQW1CLG1CQUFtQix5QkFBeUIsNEJBQTRCLDRCQUE0QixzQkFBc0IsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsVUFBVSxtQkFBbUIsa0JBQWtCLDhCQUE4QixxQkFBcUIsR0FBRyxvQkFBb0Isb0JBQW9CLDBCQUEwQixpQkFBaUIscUJBQXFCLG9CQUFvQiw2QkFBNkIseUJBQXlCLGFBQWEsb0JBQW9CLEdBQUcseUJBQXlCLHlCQUF5QixHQUFHLHFCQUFxQix1QkFBdUIsR0FBRyxnQ0FBZ0Msb0JBQW9CLEdBQUcsV0FBVyx1QkFBdUIsdUJBQXVCLG1DQUFtQyxvQ0FBb0MsMEJBQTBCLHFCQUFxQixzQkFBc0IsbUJBQW1CLGlCQUFpQixHQUFHLFNBQVMsc0ZBQXNGLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sV0FBVyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE1BQU0sYUFBYSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxXQUFXLEtBQUssWUFBWSx1QkFBdUIsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxzQkFBc0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsc0dBQXNHLG9CQUFvQixpQkFBaUIsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsZ0NBQWdDLEtBQUssOENBQThDLHlDQUF5QyxHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QiwwQkFBMEIsb0JBQW9CLGdDQUFnQyxHQUFHLGdEQUFnRCxrQkFBa0Isb0JBQW9CLHFDQUFxQyx1Q0FBdUMsbUNBQW1DLDJCQUEyQix1REFBdUQsR0FBRyxrQkFBa0Isd0JBQXdCLHdCQUF3QixHQUFHLFlBQVksdUJBQXVCLEdBQUcsbUJBQW1CLG9CQUFvQiwwQkFBMEIsR0FBRyxzQkFBc0Isc0JBQXNCLG9CQUFvQix3QkFBd0IseUJBQXlCLEdBQUcsNEJBQTRCLGtDQUFrQyxHQUFHLDBCQUEwQix5QkFBeUIsaUNBQWlDLDhCQUE4QixtQkFBbUIsbUJBQW1CLHlCQUF5Qiw0QkFBNEIsNEJBQTRCLHNCQUFzQixHQUFHLGtCQUFrQixzQkFBc0IsR0FBRyxVQUFVLG1CQUFtQixrQkFBa0IsOEJBQThCLHFCQUFxQixHQUFHLG9CQUFvQixvQkFBb0IsMEJBQTBCLGlCQUFpQixxQkFBcUIsb0JBQW9CLDZCQUE2Qix5QkFBeUIsYUFBYSxvQkFBb0IsR0FBRyx5QkFBeUIseUJBQXlCLEdBQUcscUJBQXFCLHVCQUF1QixHQUFHLGdDQUFnQyxvQkFBb0IsR0FBRyxXQUFXLHVCQUF1Qix1QkFBdUIsbUNBQW1DLG9DQUFvQywwQkFBMEIscUJBQXFCLHNCQUFzQixtQkFBbUIsaUJBQWlCLEdBQUcscUJBQXFCO0FBQzlvSztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNmQSxnSUFBbUQ7Ozs7Ozs7Ozs7O0FDQW5ELFFBQVEsbUJBQU8sQ0FBQyx3RUFBb0I7QUFDcEMsYUFBYSxtQkFBTyxDQUFDLDhFQUF3Qjs7QUFFN0M7QUFDQTtBQUNBLHlHQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLDZCQUE2QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix1QkFBdUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEdBQUc7QUFDaEIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGNBQWM7QUFDM0IsYUFBYSxVQUFVO0FBQ3ZCLGVBQWUsY0FBYztBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsVUFBVTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsYUFBYSxjQUFjO0FBQzNCLGVBQWUsR0FBRztBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFVBQVU7QUFDdkIsYUFBYSxVQUFVO0FBQ3ZCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLGNBQWM7QUFDM0IsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxh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QUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsYUFBYSxVQUFVO0FBQ3ZCLGFBQWEsVUFBVTtBQUN2QixhQUFhLFFBQVE7QUFDckI7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxHQUFHO0FBQ2hCLGFBQWEsUUFBUTtBQUNyQixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixlQUFlLEdBQUc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQixhQUFhLFFBQVE7QUFDckIsZUFBZSxHQUFHO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEdB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Q0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQSw4Q0FBOEMsaUJBQWlCO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBLDRDQUE0QyxpQkFBaUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNvLW9wdGltaXplZC1yb3V0ZS8uL25vZGVfbW9kdWxlcy9AbWFwYm94L2dlb2pzb24tcmV3aW5kL2luZGV4LmpzIiwid2VicGFjazovL2Fjby1vcHRpbWl6ZWQtcm91dGUvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYWNvLW9wdGltaXplZC1yb3V0ZS8uL25vZGVfbW9kdWxlcy9vc20tcG9seWdvbi1mZWF0dXJlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlLy4vbm9kZV9tb2R1bGVzL29zbXRvZ2VvanNvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlLy4vbm9kZV9tb2R1bGVzL29zbXRvZ2VvanNvbi9sb2Rhc2guY3VzdG9tLmpzIiwid2VicGFjazovL2Fjby1vcHRpbWl6ZWQtcm91dGUvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2Fjby1vcHRpbWl6ZWQtcm91dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYWNvLW9wdGltaXplZC1yb3V0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYWNvLW9wdGltaXplZC1yb3V0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Fjby1vcHRpbWl6ZWQtcm91dGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYWNvLW9wdGltaXplZC1yb3V0ZS8uL3NyYy9lbmRwb2ludHMuanMiLCJ3ZWJwYWNrOi8vYWNvLW9wdGltaXplZC1yb3V0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Fjby1vcHRpbWl6ZWQtcm91dGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Fjby1vcHRpbWl6ZWQtcm91dGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWNvLW9wdGltaXplZC1yb3V0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Fjby1vcHRpbWl6ZWQtcm91dGUvd2VicGFjay9ydW50aW1lL25vZGUgbW9kdWxlIGRlY29yYXRvciIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hY28tb3B0aW1pemVkLXJvdXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxubW9kdWxlLmV4cG9ydHMgPSByZXdpbmQ7XG5cbmZ1bmN0aW9uIHJld2luZChnaiwgb3V0ZXIpIHtcbiAgICB2YXIgdHlwZSA9IGdqICYmIGdqLnR5cGUsIGk7XG5cbiAgICBpZiAodHlwZSA9PT0gJ0ZlYXR1cmVDb2xsZWN0aW9uJykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZ2ouZmVhdHVyZXMubGVuZ3RoOyBpKyspIHJld2luZChnai5mZWF0dXJlc1tpXSwgb3V0ZXIpO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnR2VvbWV0cnlDb2xsZWN0aW9uJykge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZ2ouZ2VvbWV0cmllcy5sZW5ndGg7IGkrKykgcmV3aW5kKGdqLmdlb21ldHJpZXNbaV0sIG91dGVyKTtcblxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ0ZlYXR1cmUnKSB7XG4gICAgICAgIHJld2luZChnai5nZW9tZXRyeSwgb3V0ZXIpO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnUG9seWdvbicpIHtcbiAgICAgICAgcmV3aW5kUmluZ3MoZ2ouY29vcmRpbmF0ZXMsIG91dGVyKTtcblxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ011bHRpUG9seWdvbicpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGdqLmNvb3JkaW5hdGVzLmxlbmd0aDsgaSsrKSByZXdpbmRSaW5ncyhnai5jb29yZGluYXRlc1tpXSwgb3V0ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBnajtcbn1cblxuZnVuY3Rpb24gcmV3aW5kUmluZ3MocmluZ3MsIG91dGVyKSB7XG4gICAgaWYgKHJpbmdzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgcmV3aW5kUmluZyhyaW5nc1swXSwgb3V0ZXIpO1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcmV3aW5kUmluZyhyaW5nc1tpXSwgIW91dGVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJld2luZFJpbmcocmluZywgZGlyKSB7XG4gICAgdmFyIGFyZWEgPSAwLCBlcnIgPSAwO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSByaW5nLmxlbmd0aCwgaiA9IGxlbiAtIDE7IGkgPCBsZW47IGogPSBpKyspIHtcbiAgICAgICAgdmFyIGsgPSAocmluZ1tpXVswXSAtIHJpbmdbal1bMF0pICogKHJpbmdbal1bMV0gKyByaW5nW2ldWzFdKTtcbiAgICAgICAgdmFyIG0gPSBhcmVhICsgaztcbiAgICAgICAgZXJyICs9IE1hdGguYWJzKGFyZWEpID49IE1hdGguYWJzKGspID8gYXJlYSAtIG0gKyBrIDogayAtIG0gKyBhcmVhO1xuICAgICAgICBhcmVhID0gbTtcbiAgICB9XG4gICAgaWYgKGFyZWEgKyBlcnIgPj0gMCAhPT0gISFkaXIpIHJpbmcucmV2ZXJzZSgpO1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFJlc2V0ICovXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCByZWQ7ICovXFxufVxcbi8qIFJlc2V0ICovXFxuXFxuLyogQm9keSBhbmQgOnJvb3QgKi9cXG46cm9vdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljOWM5O1xcbn1cXG4vKiBCb2R5IGFuZCA6cm9vdCAqL1xcblxcbi8qIEhlYWRlciAqL1xcbmhlYWRlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtIDFyZW0gMS41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcblxcbiAgICBtYXJnaW4tYm90dG9tOiAzdmg7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjgxKTtcXG59XFxuXFxuaGVhZGVyIC5sb2dvIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubGlua3Mge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5oZWFkZXIgLmxpbmtzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIC5saW5rcyBsaSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuaGVhZGVyIC5saW5rcyBsaTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA1MDtcXG59XFxuLyogSGVhZGVyICovXFxuXFxuYnV0dG9uIHtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwOyAvKiBHcmVlbiAqL1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI21hcCB7XFxuICAgIGhlaWdodDogNjB2aDtcXG4gICAgd2lkdGg6IDYwdmg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBncmlkLWFyZWE6IG1hcDtcXG59XFxuXFxuLm1hcC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IC8qIEFkZCB0aGlzICovXFxufVxcblxcbi5idXR0b24tZ3JvdXAtMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogLTEzMHB4O1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwLTEgPiAqIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwLTIge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4ubGVhZmxldC1yb3V0aW5nLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjb2RlIHtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG4gICAgbWluLWhlaWdodDogMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIHBhZGRpbmc6IDVweDsgIFxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgbGVmdDogMjBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsVUFBVTtBQUNWO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjtBQUNBLFVBQVU7O0FBRVYsbUJBQW1CO0FBQ25CO0lBQ0ksa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QjtBQUNBLG1CQUFtQjs7QUFFbkIsV0FBVztBQUNYO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLDRCQUE0Qjs7SUFFNUIsa0JBQWtCO0lBQ2xCLGdEQUFnRDtBQUNwRDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0EsV0FBVzs7QUFFWDtJQUNJLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBRSxVQUFVO0lBQ3JDLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0IsRUFBRSxhQUFhO0FBQ3JDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXAnKTtcXG5cXG4vKiBSZXNldCAqL1xcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcbn1cXG4vKiBSZXNldCAqL1xcblxcbi8qIEJvZHkgYW5kIDpyb290ICovXFxuOnJvb3Qge1xcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M5YzljOTtcXG59XFxuLyogQm9keSBhbmQgOnJvb3QgKi9cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxcmVtIDEuNXJlbSAxcmVtIDEuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG5cXG4gICAgbWFyZ2luLWJvdHRvbTogM3ZoO1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI4MSk7XFxufVxcblxcbmhlYWRlciAubG9nbyB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxpbmtzIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuaGVhZGVyIC5saW5rcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciAubGlua3MgbGkge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbmhlYWRlciAubGlua3MgbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNTA7XFxufVxcbi8qIEhlYWRlciAqL1xcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgLyogR3JlZW4gKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNtYXAge1xcbiAgICBoZWlnaHQ6IDYwdmg7XFxuICAgIHdpZHRoOiA2MHZoO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgZ3JpZC1hcmVhOiBtYXA7XFxufVxcblxcbi5tYXAtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBBZGQgdGhpcyAqL1xcbn1cXG5cXG4uYnV0dG9uLWdyb3VwLTEge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IC0xMzBweDtcXG59XFxuXFxuLmJ1dHRvbi1ncm91cC0xID4gKiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuXFxuLmJ1dHRvbi1ncm91cC0yIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmxlYWZsZXQtcm91dGluZy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY29kZSB7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBwYWRkaW5nOiA1cHg7ICBcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDIwcHg7XFxuICAgIGxlZnQ6IDIwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3BvbHlnb24tZmVhdHVyZXMuanNvbicpXG4iLCJ2YXIgXyA9IHJlcXVpcmUoXCIuL2xvZGFzaC5jdXN0b20uanNcIik7XG52YXIgcmV3aW5kID0gcmVxdWlyZShcIkBtYXBib3gvZ2VvanNvbi1yZXdpbmRcIik7XG5cbi8vIHNlZSBodHRwczovL3dpa2kub3BlbnN0cmVldG1hcC5vcmcvd2lraS9PdmVycGFzc190dXJiby9Qb2x5Z29uX0ZlYXR1cmVzXG52YXIgcG9seWdvbkZlYXR1cmVzID0ge307XG5yZXF1aXJlKFwib3NtLXBvbHlnb24tZmVhdHVyZXNcIikuZm9yRWFjaChmdW5jdGlvbih0YWdzKSB7XG4gIGlmICh0YWdzLnBvbHlnb24gPT09IFwiYWxsXCIpXG4gICAgcG9seWdvbkZlYXR1cmVzW3RhZ3Mua2V5XSA9IHRydWU7XG4gIGVsc2Uge1xuICAgIHZhciBsaXN0ID0gKHRhZ3MucG9seWdvbiA9PT0gXCJ3aGl0ZWxpc3RcIikgPyBcImluY2x1ZGVkX3ZhbHVlc1wiIDogXCJleGNsdWRlZF92YWx1ZXNcIixcbiAgICAgICAgdGFnVmFsdWVzT2JqID0ge307XG4gICAgdGFncy52YWx1ZXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkgeyB0YWdWYWx1ZXNPYmpbdmFsdWVdID0gdHJ1ZTsgfSk7XG4gICAgcG9seWdvbkZlYXR1cmVzW3RhZ3Mua2V5XSA9IHt9O1xuICAgIHBvbHlnb25GZWF0dXJlc1t0YWdzLmtleV1bbGlzdF0gPSB0YWdWYWx1ZXNPYmo7XG4gIH1cbn0pO1xuXG4vLyBkZWZhdWx0IGRlZHVwbGljYXRpb24gaGVscGVyIGZ1bmN0aW9uXG5mdW5jdGlvbiBkZWZhdWx0X2RlZHVwbGljYXRvcihvYmplY3RBLCBvYmplY3RCKSB7XG4gIC8vIGRlZmF1bHQgZGVkdXBsaWNhdGlvbiBoYW5kbGVyOlxuICAvLyBpZiBvYmplY3QgdmVyc2lvbnMgZGlmZmVyLCB1c2UgaGlnaGVzdCBhdmFpbGFibGUgdmVyc2lvblxuICBpZiAoKG9iamVjdEEudmVyc2lvbiB8fCBvYmplY3RCLnZlcnNpb24pICYmXG4gICAgICAob2JqZWN0QS52ZXJzaW9uICE9PSBvYmplY3RCLnZlcnNpb24pKSB7XG4gICAgcmV0dXJuICgrb2JqZWN0QS52ZXJzaW9uIHx8IDApID4gKCtvYmplY3RCLnZlcnNpb24gfHwgMClcbiAgICAgID8gb2JqZWN0QVxuICAgICAgOiBvYmplY3RCO1xuICB9XG4gIC8vIG90aGVyd2lzZTogcmV0dXJuIG1lcmdlZCBvYmogcHJvcGVydGllc1xuICByZXR1cm4gXy5tZXJnZShvYmplY3RBLCBvYmplY3RCKTtcbn1cblxudmFyIG9zbXRvZ2VvanNvbiA9IHt9O1xuXG5vc210b2dlb2pzb24gPSBmdW5jdGlvbiggZGF0YSwgb3B0aW9ucywgZmVhdHVyZUNhbGxiYWNrICkge1xuXG4gIG9wdGlvbnMgPSBfLm1lcmdlKFxuICAgIHtcbiAgICAgIHZlcmJvc2U6IGZhbHNlLFxuICAgICAgZmxhdFByb3BlcnRpZXM6IHRydWUsXG4gICAgICB1bmludGVyZXN0aW5nVGFnczoge1xuICAgICAgICBcInNvdXJjZVwiOiB0cnVlLFxuICAgICAgICBcInNvdXJjZV9yZWZcIjogdHJ1ZSxcbiAgICAgICAgXCJzb3VyY2U6cmVmXCI6IHRydWUsXG4gICAgICAgIFwiaGlzdG9yeVwiOiB0cnVlLFxuICAgICAgICBcImF0dHJpYnV0aW9uXCI6IHRydWUsXG4gICAgICAgIFwiY3JlYXRlZF9ieVwiOiB0cnVlLFxuICAgICAgICBcInRpZ2VyOmNvdW50eVwiOiB0cnVlLFxuICAgICAgICBcInRpZ2VyOnRsaWRcIjogdHJ1ZSxcbiAgICAgICAgXCJ0aWdlcjp1cGxvYWRfdXVpZFwiOiB0cnVlXG4gICAgICB9LFxuICAgICAgcG9seWdvbkZlYXR1cmVzOiBwb2x5Z29uRmVhdHVyZXMsXG4gICAgICBkZWR1cGxpY2F0b3I6IGRlZmF1bHRfZGVkdXBsaWNhdG9yXG4gICAgfSxcbiAgICBvcHRpb25zXG4gICk7XG5cbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCAoKHR5cGVvZiBYTUxEb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIikgJiYgZGF0YSBpbnN0YW5jZW9mIFhNTERvY3VtZW50IHx8XG4gICAgICAgICh0eXBlb2YgWE1MRG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpICYmIGRhdGEuY2hpbGROb2RlcykgKVxuICAgIHJlc3VsdCA9IF9vc21YTUwyZ2VvSlNPTihkYXRhKTtcbiAgZWxzZVxuICAgIHJlc3VsdCA9IF9vdmVycGFzc0pTT04yZ2VvSlNPTihkYXRhKTtcbiAgcmV0dXJuIHJlc3VsdDtcblxuICBmdW5jdGlvbiBfb3ZlcnBhc3NKU09OMmdlb0pTT04oanNvbikge1xuICAgIC8vIHNvcnQgZWxlbWVudHNcbiAgICB2YXIgbm9kZXMgPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgd2F5cyAgPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgcmVscyAgPSBuZXcgQXJyYXkoKTtcbiAgICAvLyBoZWxwZXIgZnVuY3Rpb25zXG4gICAgZnVuY3Rpb24gY2VudGVyR2VvbWV0cnkob2JqZWN0KSB7XG4gICAgICB2YXIgcHNldWRvTm9kZSA9IF8uY2xvbmUob2JqZWN0KTtcbiAgICAgIHBzZXVkb05vZGUubGF0ID0gb2JqZWN0LmNlbnRlci5sYXQ7XG4gICAgICBwc2V1ZG9Ob2RlLmxvbiA9IG9iamVjdC5jZW50ZXIubG9uO1xuICAgICAgcHNldWRvTm9kZS5fX2lzX2NlbnRlcl9wbGFjZWhvbGRlciA9IHRydWU7XG4gICAgICBub2Rlcy5wdXNoKHBzZXVkb05vZGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBib3VuZHNHZW9tZXRyeShvYmplY3QpIHtcbiAgICAgIHZhciBwc2V1ZG9XYXkgPSBfLmNsb25lKG9iamVjdCk7XG4gICAgICBwc2V1ZG9XYXkubm9kZXMgPSBbXTtcbiAgICAgIGZ1bmN0aW9uIGFkZFBzZXVkb05vZGUobGF0LGxvbixpKSB7XG4gICAgICAgIHZhciBwc2V1ZG9Ob2RlID0ge1xuICAgICAgICAgIHR5cGU6XCJub2RlXCIsXG4gICAgICAgICAgaWQ6ICBcIl9cIitwc2V1ZG9XYXkudHlwZStcIi9cIitwc2V1ZG9XYXkuaWQrXCJib3VuZHNcIitpLFxuICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgIGxvbjogbG9uXG4gICAgICAgIH1cbiAgICAgICAgcHNldWRvV2F5Lm5vZGVzLnB1c2gocHNldWRvTm9kZS5pZCk7XG4gICAgICAgIG5vZGVzLnB1c2gocHNldWRvTm9kZSk7XG4gICAgICB9XG4gICAgICBhZGRQc2V1ZG9Ob2RlKHBzZXVkb1dheS5ib3VuZHMubWlubGF0LHBzZXVkb1dheS5ib3VuZHMubWlubG9uLDEpO1xuICAgICAgYWRkUHNldWRvTm9kZShwc2V1ZG9XYXkuYm91bmRzLm1heGxhdCxwc2V1ZG9XYXkuYm91bmRzLm1pbmxvbiwyKTtcbiAgICAgIGFkZFBzZXVkb05vZGUocHNldWRvV2F5LmJvdW5kcy5tYXhsYXQscHNldWRvV2F5LmJvdW5kcy5tYXhsb24sMyk7XG4gICAgICBhZGRQc2V1ZG9Ob2RlKHBzZXVkb1dheS5ib3VuZHMubWlubGF0LHBzZXVkb1dheS5ib3VuZHMubWF4bG9uLDQpO1xuICAgICAgcHNldWRvV2F5Lm5vZGVzLnB1c2gocHNldWRvV2F5Lm5vZGVzWzBdKTtcbiAgICAgIHBzZXVkb1dheS5fX2lzX2JvdW5kc19wbGFjZWhvbGRlciA9IHRydWU7XG4gICAgICB3YXlzLnB1c2gocHNldWRvV2F5KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZnVsbEdlb21ldHJ5V2F5KHdheSkge1xuICAgICAgZnVuY3Rpb24gYWRkRnVsbEdlb21ldHJ5Tm9kZShsYXQsbG9uLGlkKSB7XG4gICAgICAgIHZhciBnZW9tZXRyeU5vZGUgPSB7XG4gICAgICAgICAgdHlwZTpcIm5vZGVcIixcbiAgICAgICAgICBpZDogIGlkLFxuICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgIGxvbjogbG9uXG4gICAgICAgIH1cbiAgICAgICAgbm9kZXMucHVzaChnZW9tZXRyeU5vZGUpO1xuICAgICAgfVxuICAgICAgaWYgKCFfLmlzQXJyYXkod2F5Lm5vZGVzKSkge1xuICAgICAgICB3YXkubm9kZXMgPSB3YXkuZ2VvbWV0cnkubWFwKGZ1bmN0aW9uKG5kKSB7XG4gICAgICAgICAgaWYgKG5kICE9PSBudWxsKSAvLyBoYXZlIHRvIHNraXAgcmVmLWxlc3Mgbm9kZXNcbiAgICAgICAgICAgIHJldHVybiBcIl9hbm9ueW1vdXNAXCIrbmQubGF0K1wiL1wiK25kLmxvbjtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gXCJfYW5vbnltb3VzQHVua25vd25fbG9jYXRpb25cIjtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB3YXkuZ2VvbWV0cnkuZm9yRWFjaChmdW5jdGlvbihuZCwgaSkge1xuICAgICAgICBpZiAobmQpIHtcbiAgICAgICAgICBhZGRGdWxsR2VvbWV0cnlOb2RlKFxuICAgICAgICAgICAgbmQubGF0LFxuICAgICAgICAgICAgbmQubG9uLFxuICAgICAgICAgICAgd2F5Lm5vZGVzW2ldXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZ1bGxHZW9tZXRyeVJlbGF0aW9uKHJlbCkge1xuICAgICAgZnVuY3Rpb24gYWRkRnVsbEdlb21ldHJ5Tm9kZShsYXQsbG9uLGlkKSB7XG4gICAgICAgIHZhciBnZW9tZXRyeU5vZGUgPSB7XG4gICAgICAgICAgdHlwZTpcIm5vZGVcIixcbiAgICAgICAgICBpZDogIGlkLFxuICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgIGxvbjogbG9uXG4gICAgICAgIH1cbiAgICAgICAgbm9kZXMucHVzaChnZW9tZXRyeU5vZGUpO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gYWRkRnVsbEdlb21ldHJ5V2F5KGdlb21ldHJ5LGlkKSB7XG4gICAgICAgIC8vIHNoYXJlZCBtdWx0aXBvbHlnb24gd2F5cyBjYW5ub3QgYmUgZGVmaW5lZCBtdWx0aXBsZSB0aW1lcyB3aXRoIHRoZSBzYW1lIGlkLlxuICAgICAgICBpZiAod2F5cy5zb21lKGZ1bmN0aW9uICh3YXkpIHsgLy8gdG9kbzogdGhpcyBpcyBzbG93IDooXG4gICAgICAgICAgcmV0dXJuIHdheS50eXBlID09IFwid2F5XCIgJiYgd2F5LmlkID09IGlkO1xuICAgICAgICB9KSkgcmV0dXJuO1xuICAgICAgICB2YXIgZ2VvbWV0cnlXYXkgPSB7XG4gICAgICAgICAgdHlwZTogXCJ3YXlcIixcbiAgICAgICAgICBpZDogICBpZCxcbiAgICAgICAgICBub2RlczpbXVxuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGFkZEZ1bGxHZW9tZXRyeVdheVBzZXVkb05vZGUobGF0LGxvbikge1xuICAgICAgICAgIC8vIHRvZG8/IGRvIG5vdCBzYXZlIHRoZSBzYW1lIHBzZXVkbyBub2RlIG11bHRpcGxlIHRpbWVzXG4gICAgICAgICAgdmFyIGdlb21ldHJ5UHNldWRvTm9kZSA9IHtcbiAgICAgICAgICAgIHR5cGU6XCJub2RlXCIsXG4gICAgICAgICAgICBpZDogIFwiX2Fub255bW91c0BcIitsYXQrXCIvXCIrbG9uLFxuICAgICAgICAgICAgbGF0OiBsYXQsXG4gICAgICAgICAgICBsb246IGxvblxuICAgICAgICAgIH1cbiAgICAgICAgICBnZW9tZXRyeVdheS5ub2Rlcy5wdXNoKGdlb21ldHJ5UHNldWRvTm9kZS5pZCk7XG4gICAgICAgICAgbm9kZXMucHVzaChnZW9tZXRyeVBzZXVkb05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGdlb21ldHJ5LmZvckVhY2goZnVuY3Rpb24obmQpIHtcbiAgICAgICAgICBpZiAobmQpIHtcbiAgICAgICAgICAgIGFkZEZ1bGxHZW9tZXRyeVdheVBzZXVkb05vZGUoXG4gICAgICAgICAgICAgIG5kLmxhdCxcbiAgICAgICAgICAgICAgbmQubG9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZW9tZXRyeVdheS5ub2Rlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgd2F5cy5wdXNoKGdlb21ldHJ5V2F5KTtcbiAgICAgIH1cbiAgICAgIHJlbC5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24obWVtYmVyLCBpKSB7XG4gICAgICAgIGlmIChtZW1iZXIudHlwZSA9PSBcIm5vZGVcIikge1xuICAgICAgICAgIGlmIChtZW1iZXIubGF0KSB7XG4gICAgICAgICAgICBhZGRGdWxsR2VvbWV0cnlOb2RlKFxuICAgICAgICAgICAgICBtZW1iZXIubGF0LFxuICAgICAgICAgICAgICBtZW1iZXIubG9uLFxuICAgICAgICAgICAgICBtZW1iZXIucmVmXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZW1iZXIudHlwZSA9PSBcIndheVwiKSB7XG4gICAgICAgICAgaWYgKG1lbWJlci5nZW9tZXRyeSkge1xuICAgICAgICAgICAgbWVtYmVyLnJlZiA9IFwiX2Z1bGxHZW9tXCIrbWVtYmVyLnJlZjtcbiAgICAgICAgICAgIGFkZEZ1bGxHZW9tZXRyeVdheShcbiAgICAgICAgICAgICAgbWVtYmVyLmdlb21ldHJ5LFxuICAgICAgICAgICAgICBtZW1iZXIucmVmXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGNyZWF0ZSBjb3BpZXMgb2YgaW5kaXZpZHVhbCBqc29uIG9iamVjdHMgdG8gbWFrZSBzdXJlIHRoZSBvcmlnaW5hbCBkYXRhIGRvZXNuJ3QgZ2V0IGFsdGVyZWRcbiAgICAvLyB0b2RvOiBjbG9uaW5nIGlzIHNsb3c6IHNlZSBpZiB0aGlzIGNhbiBiZSBkb25lIGRpZmZlcmVudGx5IVxuICAgIGZvciAodmFyIGk9MDtpPGpzb24uZWxlbWVudHMubGVuZ3RoO2krKykge1xuICAgICAgc3dpdGNoIChqc29uLmVsZW1lbnRzW2ldLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJub2RlXCI6XG4gICAgICAgIHZhciBub2RlID0ganNvbi5lbGVtZW50c1tpXTtcbiAgICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIndheVwiOlxuICAgICAgICB2YXIgd2F5ID0gXy5jbG9uZShqc29uLmVsZW1lbnRzW2ldKTtcbiAgICAgICAgd2F5Lm5vZGVzID0gXy5jbG9uZSh3YXkubm9kZXMpO1xuICAgICAgICB3YXlzLnB1c2god2F5KTtcbiAgICAgICAgaWYgKHdheS5jZW50ZXIpXG4gICAgICAgICAgY2VudGVyR2VvbWV0cnkod2F5KTtcbiAgICAgICAgaWYgKHdheS5nZW9tZXRyeSlcbiAgICAgICAgICBmdWxsR2VvbWV0cnlXYXkod2F5KTtcbiAgICAgICAgZWxzZSBpZiAod2F5LmJvdW5kcylcbiAgICAgICAgICBib3VuZHNHZW9tZXRyeSh3YXkpO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmVsYXRpb25cIjpcbiAgICAgICAgdmFyIHJlbCA9IF8uY2xvbmUoanNvbi5lbGVtZW50c1tpXSk7XG4gICAgICAgIHJlbC5tZW1iZXJzID0gXy5jbG9uZShyZWwubWVtYmVycyk7XG4gICAgICAgIHJlbHMucHVzaChyZWwpO1xuICAgICAgICB2YXIgaGFzX2Z1bGxfZ2VvbWV0cnkgPSByZWwubWVtYmVycyAmJiByZWwubWVtYmVycy5zb21lKGZ1bmN0aW9uIChtZW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gbWVtYmVyLnR5cGUgPT0gXCJub2RlXCIgJiYgbWVtYmVyLmxhdCB8fFxuICAgICAgICAgICAgICAgICBtZW1iZXIudHlwZSA9PSBcIndheVwiICAmJiBtZW1iZXIuZ2VvbWV0cnkgJiYgbWVtYmVyLmdlb21ldHJ5Lmxlbmd0aCA+IDBcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZWwuY2VudGVyKVxuICAgICAgICAgIGNlbnRlckdlb21ldHJ5KHJlbCk7XG4gICAgICAgIGlmIChoYXNfZnVsbF9nZW9tZXRyeSlcbiAgICAgICAgICBmdWxsR2VvbWV0cnlSZWxhdGlvbihyZWwpO1xuICAgICAgICBlbHNlIGlmIChyZWwuYm91bmRzKVxuICAgICAgICAgIGJvdW5kc0dlb21ldHJ5KHJlbCk7XG4gICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAvLyB0eXBlPWFyZWEgKGZyb20gY29vcmQtcXVlcnkpIGlzIGFuIGV4YW1wbGUgZm9yIHRoaXMgY2FzZS5cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIF9jb252ZXJ0Mmdlb0pTT04obm9kZXMsd2F5cyxyZWxzKTtcbiAgfVxuICBmdW5jdGlvbiBfb3NtWE1MMmdlb0pTT04oeG1sKSB7XG4gICAgLy8gc29ydCBlbGVtZW50c1xuICAgIHZhciBub2RlcyA9IG5ldyBBcnJheSgpO1xuICAgIHZhciB3YXlzICA9IG5ldyBBcnJheSgpO1xuICAgIHZhciByZWxzICA9IG5ldyBBcnJheSgpO1xuICAgIC8vIGhlbHBlciBmdW5jdGlvblxuICAgIGZ1bmN0aW9uIGNvcHlfYXR0cmlidXRlKCB4LCBvLCBhdHRyICkge1xuICAgICAgaWYgKHguaGFzQXR0cmlidXRlKGF0dHIpKVxuICAgICAgICBvW2F0dHJdID0geC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNlbnRlckdlb21ldHJ5KG9iamVjdCwgY2VudHJvaWQpIHtcbiAgICAgIHZhciBwc2V1ZG9Ob2RlID0gXy5jbG9uZShvYmplY3QpO1xuICAgICAgY29weV9hdHRyaWJ1dGUoY2VudHJvaWQsIHBzZXVkb05vZGUsICdsYXQnKTtcbiAgICAgIGNvcHlfYXR0cmlidXRlKGNlbnRyb2lkLCBwc2V1ZG9Ob2RlLCAnbG9uJyk7XG4gICAgICBwc2V1ZG9Ob2RlLl9faXNfY2VudGVyX3BsYWNlaG9sZGVyID0gdHJ1ZTtcbiAgICAgIG5vZGVzLnB1c2gocHNldWRvTm9kZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGJvdW5kc0dlb21ldHJ5KG9iamVjdCwgYm91bmRzKSB7XG4gICAgICB2YXIgcHNldWRvV2F5ID0gXy5jbG9uZShvYmplY3QpO1xuICAgICAgcHNldWRvV2F5Lm5vZGVzID0gW107XG4gICAgICBmdW5jdGlvbiBhZGRQc2V1ZG9Ob2RlKGxhdCxsb24saSkge1xuICAgICAgICB2YXIgcHNldWRvTm9kZSA9IHtcbiAgICAgICAgICB0eXBlOlwibm9kZVwiLFxuICAgICAgICAgIGlkOiAgXCJfXCIrcHNldWRvV2F5LnR5cGUrXCIvXCIrcHNldWRvV2F5LmlkK1wiYm91bmRzXCIraSxcbiAgICAgICAgICBsYXQ6IGxhdCxcbiAgICAgICAgICBsb246IGxvblxuICAgICAgICB9XG4gICAgICAgIHBzZXVkb1dheS5ub2Rlcy5wdXNoKHBzZXVkb05vZGUuaWQpO1xuICAgICAgICBub2Rlcy5wdXNoKHBzZXVkb05vZGUpO1xuICAgICAgfVxuICAgICAgYWRkUHNldWRvTm9kZShib3VuZHMuZ2V0QXR0cmlidXRlKCdtaW5sYXQnKSxib3VuZHMuZ2V0QXR0cmlidXRlKCdtaW5sb24nKSwxKTtcbiAgICAgIGFkZFBzZXVkb05vZGUoYm91bmRzLmdldEF0dHJpYnV0ZSgnbWF4bGF0JyksYm91bmRzLmdldEF0dHJpYnV0ZSgnbWlubG9uJyksMik7XG4gICAgICBhZGRQc2V1ZG9Ob2RlKGJvdW5kcy5nZXRBdHRyaWJ1dGUoJ21heGxhdCcpLGJvdW5kcy5nZXRBdHRyaWJ1dGUoJ21heGxvbicpLDMpO1xuICAgICAgYWRkUHNldWRvTm9kZShib3VuZHMuZ2V0QXR0cmlidXRlKCdtaW5sYXQnKSxib3VuZHMuZ2V0QXR0cmlidXRlKCdtYXhsb24nKSw0KTtcbiAgICAgIHBzZXVkb1dheS5ub2Rlcy5wdXNoKHBzZXVkb1dheS5ub2Rlc1swXSk7XG4gICAgICBwc2V1ZG9XYXkuX19pc19ib3VuZHNfcGxhY2Vob2xkZXIgPSB0cnVlO1xuICAgICAgd2F5cy5wdXNoKHBzZXVkb1dheSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZ1bGxHZW9tZXRyeVdheSh3YXksIG5kcykge1xuICAgICAgZnVuY3Rpb24gYWRkRnVsbEdlb21ldHJ5Tm9kZShsYXQsbG9uLGlkKSB7XG4gICAgICAgIHZhciBnZW9tZXRyeU5vZGUgPSB7XG4gICAgICAgICAgdHlwZTpcIm5vZGVcIixcbiAgICAgICAgICBpZDogIGlkLFxuICAgICAgICAgIGxhdDogbGF0LFxuICAgICAgICAgIGxvbjogbG9uXG4gICAgICAgIH1cbiAgICAgICAgbm9kZXMucHVzaChnZW9tZXRyeU5vZGUpO1xuICAgICAgICByZXR1cm4gZ2VvbWV0cnlOb2RlLmlkO1xuICAgICAgfVxuICAgICAgaWYgKCFfLmlzQXJyYXkod2F5Lm5vZGVzKSkge1xuICAgICAgICB3YXkubm9kZXMgPSBbXTtcbiAgICAgICAgXy5lYWNoKCBuZHMsIGZ1bmN0aW9uKCBuZCwgaSApIHtcbiAgICAgICAgICB3YXkubm9kZXMucHVzaChcIl9hbm9ueW1vdXNAXCIrbmQuZ2V0QXR0cmlidXRlKCdsYXQnKStcIi9cIituZC5nZXRBdHRyaWJ1dGUoJ2xvbicpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBfLmVhY2goIG5kcywgZnVuY3Rpb24oIG5kLCBpICkge1xuICAgICAgICBpZiAobmQuZ2V0QXR0cmlidXRlKCdsYXQnKSkge1xuICAgICAgICAgIGFkZEZ1bGxHZW9tZXRyeU5vZGUoXG4gICAgICAgICAgICBuZC5nZXRBdHRyaWJ1dGUoJ2xhdCcpLFxuICAgICAgICAgICAgbmQuZ2V0QXR0cmlidXRlKCdsb24nKSxcbiAgICAgICAgICAgIHdheS5ub2Rlc1tpXVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmdWxsR2VvbWV0cnlSZWxhdGlvbihyZWwsIG1lbWJlcnMpIHtcbiAgICAgIGZ1bmN0aW9uIGFkZEZ1bGxHZW9tZXRyeU5vZGUobGF0LGxvbixpZCkge1xuICAgICAgICB2YXIgZ2VvbWV0cnlOb2RlID0ge1xuICAgICAgICAgIHR5cGU6XCJub2RlXCIsXG4gICAgICAgICAgaWQ6ICBpZCxcbiAgICAgICAgICBsYXQ6IGxhdCxcbiAgICAgICAgICBsb246IGxvblxuICAgICAgICB9XG4gICAgICAgIG5vZGVzLnB1c2goZ2VvbWV0cnlOb2RlKTtcbiAgICAgIH1cbiAgICAgIGZ1bmN0aW9uIGFkZEZ1bGxHZW9tZXRyeVdheShuZHMsaWQpIHtcbiAgICAgICAgLy8gc2hhcmVkIG11bHRpcG9seWdvbiB3YXlzIGNhbm5vdCBiZSBkZWZpbmVkIG11bHRpcGxlIHRpbWVzIHdpdGggdGhlIHNhbWUgaWQuXG4gICAgICAgIGlmICh3YXlzLnNvbWUoZnVuY3Rpb24gKHdheSkgeyAvLyB0b2RvOiB0aGlzIGlzIHNsb3cgOihcbiAgICAgICAgICByZXR1cm4gd2F5LnR5cGUgPT0gXCJ3YXlcIiAmJiB3YXkuaWQgPT0gaWQ7XG4gICAgICAgIH0pKSByZXR1cm47XG4gICAgICAgIHZhciBnZW9tZXRyeVdheSA9IHtcbiAgICAgICAgICB0eXBlOiBcIndheVwiLFxuICAgICAgICAgIGlkOiAgIGlkLFxuICAgICAgICAgIG5vZGVzOltdXG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gYWRkRnVsbEdlb21ldHJ5V2F5UHNldWRvTm9kZShsYXQsbG9uKSB7XG4gICAgICAgICAgLy8gdG9kbz8gZG8gbm90IHNhdmUgdGhlIHNhbWUgcHNldWRvIG5vZGUgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgICB2YXIgZ2VvbWV0cnlQc2V1ZG9Ob2RlID0ge1xuICAgICAgICAgICAgdHlwZTpcIm5vZGVcIixcbiAgICAgICAgICAgIGlkOiAgXCJfYW5vbnltb3VzQFwiK2xhdCtcIi9cIitsb24sXG4gICAgICAgICAgICBsYXQ6IGxhdCxcbiAgICAgICAgICAgIGxvbjogbG9uXG4gICAgICAgICAgfVxuICAgICAgICAgIGdlb21ldHJ5V2F5Lm5vZGVzLnB1c2goZ2VvbWV0cnlQc2V1ZG9Ob2RlLmlkKTtcbiAgICAgICAgICBub2Rlcy5wdXNoKGdlb21ldHJ5UHNldWRvTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgXy5lYWNoKG5kcywgZnVuY3Rpb24obmQpIHtcbiAgICAgICAgICBpZiAobmQuZ2V0QXR0cmlidXRlKCdsYXQnKSkge1xuICAgICAgICAgICAgYWRkRnVsbEdlb21ldHJ5V2F5UHNldWRvTm9kZShcbiAgICAgICAgICAgICAgbmQuZ2V0QXR0cmlidXRlKCdsYXQnKSxcbiAgICAgICAgICAgICAgbmQuZ2V0QXR0cmlidXRlKCdsb24nKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2VvbWV0cnlXYXkubm9kZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHdheXMucHVzaChnZW9tZXRyeVdheSk7XG4gICAgICB9XG4gICAgICBfLmVhY2goIG1lbWJlcnMsIGZ1bmN0aW9uKCBtZW1iZXIsIGkgKSB7XG4gICAgICAgIGlmIChyZWwubWVtYmVyc1tpXS50eXBlID09IFwibm9kZVwiKSB7XG4gICAgICAgICAgaWYgKG1lbWJlci5nZXRBdHRyaWJ1dGUoJ2xhdCcpKSB7XG4gICAgICAgICAgICBhZGRGdWxsR2VvbWV0cnlOb2RlKFxuICAgICAgICAgICAgICBtZW1iZXIuZ2V0QXR0cmlidXRlKCdsYXQnKSxcbiAgICAgICAgICAgICAgbWVtYmVyLmdldEF0dHJpYnV0ZSgnbG9uJyksXG4gICAgICAgICAgICAgIHJlbC5tZW1iZXJzW2ldLnJlZlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocmVsLm1lbWJlcnNbaV0udHlwZSA9PSBcIndheVwiKSB7XG4gICAgICAgICAgaWYgKG1lbWJlci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmQnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZWwubWVtYmVyc1tpXS5yZWYgPSBcIl9mdWxsR2VvbVwiK3JlbC5tZW1iZXJzW2ldLnJlZjtcbiAgICAgICAgICAgIGFkZEZ1bGxHZW9tZXRyeVdheShcbiAgICAgICAgICAgICAgbWVtYmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCduZCcpLFxuICAgICAgICAgICAgICByZWwubWVtYmVyc1tpXS5yZWZcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gbm9kZXNcbiAgICBfLmVhY2goIHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbm9kZScpLCBmdW5jdGlvbiggbm9kZSwgaSApIHtcbiAgICAgIHZhciB0YWdzID0ge307XG4gICAgICBfLmVhY2goIG5vZGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RhZycpLCBmdW5jdGlvbiggdGFnICkge1xuICAgICAgICB0YWdzW3RhZy5nZXRBdHRyaWJ1dGUoJ2snKV0gPSB0YWcuZ2V0QXR0cmlidXRlKCd2Jyk7XG4gICAgICB9KTtcbiAgICAgIHZhciBub2RlT2JqZWN0ID0ge1xuICAgICAgICAndHlwZSc6ICdub2RlJ1xuICAgICAgfTtcbiAgICAgIGNvcHlfYXR0cmlidXRlKCBub2RlLCBub2RlT2JqZWN0LCAnaWQnICk7XG4gICAgICBjb3B5X2F0dHJpYnV0ZSggbm9kZSwgbm9kZU9iamVjdCwgJ2xhdCcgKTtcbiAgICAgIGNvcHlfYXR0cmlidXRlKCBub2RlLCBub2RlT2JqZWN0LCAnbG9uJyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIG5vZGUsIG5vZGVPYmplY3QsICd2ZXJzaW9uJyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIG5vZGUsIG5vZGVPYmplY3QsICd0aW1lc3RhbXAnICk7XG4gICAgICBjb3B5X2F0dHJpYnV0ZSggbm9kZSwgbm9kZU9iamVjdCwgJ2NoYW5nZXNldCcgKTtcbiAgICAgIGNvcHlfYXR0cmlidXRlKCBub2RlLCBub2RlT2JqZWN0LCAndWlkJyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIG5vZGUsIG5vZGVPYmplY3QsICd1c2VyJyApO1xuICAgICAgaWYgKCFfLmlzRW1wdHkodGFncykpXG4gICAgICAgIG5vZGVPYmplY3QudGFncyA9IHRhZ3M7XG4gICAgICBub2Rlcy5wdXNoKG5vZGVPYmplY3QpO1xuICAgIH0pO1xuICAgIC8vIHdheXNcbiAgICB2YXIgY2VudHJvaWQsYm91bmRzO1xuICAgIF8uZWFjaCggeG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd3YXknKSwgZnVuY3Rpb24oIHdheSwgaSApIHtcbiAgICAgIHZhciB0YWdzID0ge307XG4gICAgICB2YXIgd25vZGVzID0gW107XG4gICAgICBfLmVhY2goIHdheS5nZXRFbGVtZW50c0J5VGFnTmFtZSgndGFnJyksIGZ1bmN0aW9uKCB0YWcgKSB7XG4gICAgICAgIHRhZ3NbdGFnLmdldEF0dHJpYnV0ZSgnaycpXSA9IHRhZy5nZXRBdHRyaWJ1dGUoJ3YnKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGhhc19mdWxsX2dlb21ldHJ5ID0gZmFsc2U7XG4gICAgICBfLmVhY2goIHdheS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmQnKSwgZnVuY3Rpb24oIG5kLCBpICkge1xuICAgICAgICB2YXIgaWQ7XG4gICAgICAgIGlmIChpZCA9IG5kLmdldEF0dHJpYnV0ZSgncmVmJykpXG4gICAgICAgICAgd25vZGVzW2ldID0gaWQ7XG4gICAgICAgIGlmICghaGFzX2Z1bGxfZ2VvbWV0cnkgJiYgbmQuZ2V0QXR0cmlidXRlKCdsYXQnKSlcbiAgICAgICAgICBoYXNfZnVsbF9nZW9tZXRyeSA9IHRydWU7XG4gICAgICB9KTtcbiAgICAgIHZhciB3YXlPYmplY3QgPSB7XG4gICAgICAgIFwidHlwZVwiOiBcIndheVwiXG4gICAgICB9O1xuICAgICAgY29weV9hdHRyaWJ1dGUoIHdheSwgd2F5T2JqZWN0LCAnaWQnICk7XG4gICAgICBjb3B5X2F0dHJpYnV0ZSggd2F5LCB3YXlPYmplY3QsICd2ZXJzaW9uJyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIHdheSwgd2F5T2JqZWN0LCAndGltZXN0YW1wJyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIHdheSwgd2F5T2JqZWN0LCAnY2hhbmdlc2V0JyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIHdheSwgd2F5T2JqZWN0LCAndWlkJyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIHdheSwgd2F5T2JqZWN0LCAndXNlcicgKTtcbiAgICAgIGlmICh3bm9kZXMubGVuZ3RoID4gMClcbiAgICAgICAgd2F5T2JqZWN0Lm5vZGVzID0gd25vZGVzO1xuICAgICAgaWYgKCFfLmlzRW1wdHkodGFncykpXG4gICAgICAgIHdheU9iamVjdC50YWdzID0gdGFncztcbiAgICAgIGlmIChjZW50cm9pZCA9IHdheS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnY2VudGVyJylbMF0pXG4gICAgICAgIGNlbnRlckdlb21ldHJ5KHdheU9iamVjdCxjZW50cm9pZCk7XG4gICAgICBpZiAoaGFzX2Z1bGxfZ2VvbWV0cnkpXG4gICAgICAgIGZ1bGxHZW9tZXRyeVdheSh3YXlPYmplY3QsIHdheS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbmQnKSk7XG4gICAgICBlbHNlIGlmIChib3VuZHMgPSB3YXkuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvdW5kcycpWzBdKVxuICAgICAgICBib3VuZHNHZW9tZXRyeSh3YXlPYmplY3QsYm91bmRzKTtcbiAgICAgIHdheXMucHVzaCh3YXlPYmplY3QpO1xuICAgIH0pO1xuICAgIC8vIHJlbGF0aW9uc1xuICAgIF8uZWFjaCggeG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdyZWxhdGlvbicpLCBmdW5jdGlvbiggcmVsYXRpb24sIGkgKSB7XG4gICAgICB2YXIgdGFncyA9IHt9O1xuICAgICAgdmFyIG1lbWJlcnMgPSBbXTtcbiAgICAgIF8uZWFjaCggcmVsYXRpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3RhZycpLCBmdW5jdGlvbiggdGFnICkge1xuICAgICAgICB0YWdzW3RhZy5nZXRBdHRyaWJ1dGUoJ2snKV0gPSB0YWcuZ2V0QXR0cmlidXRlKCd2Jyk7XG4gICAgICB9KTtcbiAgICAgIHZhciBoYXNfZnVsbF9nZW9tZXRyeSA9IGZhbHNlO1xuICAgICAgXy5lYWNoKCByZWxhdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWVtYmVyJyksIGZ1bmN0aW9uKCBtZW1iZXIsIGkgKSB7XG4gICAgICAgIG1lbWJlcnNbaV0gPSB7fTtcbiAgICAgICAgY29weV9hdHRyaWJ1dGUoIG1lbWJlciwgbWVtYmVyc1tpXSwgJ3JlZicgKTtcbiAgICAgICAgY29weV9hdHRyaWJ1dGUoIG1lbWJlciwgbWVtYmVyc1tpXSwgJ3JvbGUnICk7XG4gICAgICAgIGNvcHlfYXR0cmlidXRlKCBtZW1iZXIsIG1lbWJlcnNbaV0sICd0eXBlJyApO1xuICAgICAgICBpZiAoIWhhc19mdWxsX2dlb21ldHJ5ICYmXG4gICAgICAgICAgICAgKG1lbWJlcnNbaV0udHlwZSA9PSAnbm9kZScgJiYgbWVtYmVyLmdldEF0dHJpYnV0ZSgnbGF0JykpIHx8XG4gICAgICAgICAgICAgKG1lbWJlcnNbaV0udHlwZSA9PSAnd2F5JyAgJiYgbWVtYmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCduZCcpLmxlbmd0aD4wKSApXG4gICAgICAgICAgaGFzX2Z1bGxfZ2VvbWV0cnkgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgICB2YXIgcmVsT2JqZWN0ID0ge1xuICAgICAgICBcInR5cGVcIjogXCJyZWxhdGlvblwiXG4gICAgICB9XG4gICAgICBjb3B5X2F0dHJpYnV0ZSggcmVsYXRpb24sIHJlbE9iamVjdCwgJ2lkJyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIHJlbGF0aW9uLCByZWxPYmplY3QsICd2ZXJzaW9uJyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIHJlbGF0aW9uLCByZWxPYmplY3QsICd0aW1lc3RhbXAnICk7XG4gICAgICBjb3B5X2F0dHJpYnV0ZSggcmVsYXRpb24sIHJlbE9iamVjdCwgJ2NoYW5nZXNldCcgKTtcbiAgICAgIGNvcHlfYXR0cmlidXRlKCByZWxhdGlvbiwgcmVsT2JqZWN0LCAndWlkJyApO1xuICAgICAgY29weV9hdHRyaWJ1dGUoIHJlbGF0aW9uLCByZWxPYmplY3QsICd1c2VyJyApO1xuICAgICAgaWYgKG1lbWJlcnMubGVuZ3RoID4gMClcbiAgICAgICAgcmVsT2JqZWN0Lm1lbWJlcnMgPSBtZW1iZXJzO1xuICAgICAgaWYgKCFfLmlzRW1wdHkodGFncykpXG4gICAgICAgIHJlbE9iamVjdC50YWdzID0gdGFncztcbiAgICAgIGlmIChjZW50cm9pZCA9IHJlbGF0aW9uLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdjZW50ZXInKVswXSlcbiAgICAgICAgY2VudGVyR2VvbWV0cnkocmVsT2JqZWN0LGNlbnRyb2lkKTtcbiAgICAgIGlmIChoYXNfZnVsbF9nZW9tZXRyeSlcbiAgICAgICAgZnVsbEdlb21ldHJ5UmVsYXRpb24ocmVsT2JqZWN0LCByZWxhdGlvbi5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWVtYmVyJykpO1xuICAgICAgZWxzZSBpZiAoYm91bmRzID0gcmVsYXRpb24uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvdW5kcycpWzBdKVxuICAgICAgICBib3VuZHNHZW9tZXRyeShyZWxPYmplY3QsYm91bmRzKTtcbiAgICAgIHJlbHMucHVzaChyZWxPYmplY3QpO1xuICAgIH0pO1xuICAgIHJldHVybiBfY29udmVydDJnZW9KU09OKG5vZGVzLHdheXMscmVscyk7XG4gIH1cbiAgZnVuY3Rpb24gX2NvbnZlcnQyZ2VvSlNPTihub2Rlcyx3YXlzLHJlbHMpIHtcblxuICAgIC8vIGhlbHBlciBmdW5jdGlvbiB0aGF0IGNoZWNrcyBpZiB0aGVyZSBhcmUgYW55IHRhZ3Mgb3RoZXIgdGhhbiBcImNyZWF0ZWRfYnlcIiwgXCJzb3VyY2VcIiwgZXRjLiBvciBhbnkgdGFnIHByb3ZpZGVkIGluIGlnbm9yZV90YWdzXG4gICAgZnVuY3Rpb24gaGFzX2ludGVyZXN0aW5nX3RhZ3ModCwgaWdub3JlX3RhZ3MpIHtcbiAgICAgIGlmICh0eXBlb2YgaWdub3JlX3RhZ3MgIT09IFwib2JqZWN0XCIpXG4gICAgICAgIGlnbm9yZV90YWdzPXt9O1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnVuaW50ZXJlc3RpbmdUYWdzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIHJldHVybiAhb3B0aW9ucy51bmludGVyZXN0aW5nVGFncyh0LCBpZ25vcmVfdGFncyk7XG4gICAgICBmb3IgKHZhciBrIGluIHQpXG4gICAgICAgIGlmICghKG9wdGlvbnMudW5pbnRlcmVzdGluZ1RhZ3Nba109PT10cnVlKSAmJlxuICAgICAgICAgICAgIShpZ25vcmVfdGFnc1trXT09PXRydWUgfHwgaWdub3JlX3RhZ3Nba109PT10W2tdKSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIC8vIGhlbHBlciBmdW5jdGlvbiB0byBleHRyYWN0IG1ldGEgaW5mb3JtYXRpb25cbiAgICBmdW5jdGlvbiBidWlsZF9tZXRhX2luZm9ybWF0aW9uKG9iamVjdCkge1xuICAgICAgdmFyIHJlcyA9IHtcbiAgICAgICAgXCJ0aW1lc3RhbXBcIjogb2JqZWN0LnRpbWVzdGFtcCxcbiAgICAgICAgXCJ2ZXJzaW9uXCI6IG9iamVjdC52ZXJzaW9uLFxuICAgICAgICBcImNoYW5nZXNldFwiOiBvYmplY3QuY2hhbmdlc2V0LFxuICAgICAgICBcInVzZXJcIjogb2JqZWN0LnVzZXIsXG4gICAgICAgIFwidWlkXCI6IG9iamVjdC51aWRcbiAgICAgIH07XG4gICAgICBmb3IgKHZhciBrIGluIHJlcylcbiAgICAgICAgaWYgKHJlc1trXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgIGRlbGV0ZSByZXNba107XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIC8vIHNvbWUgZGF0YSBwcm9jZXNzaW5nIChlLmcuIGZpbHRlciBub2RlcyBvbmx5IHVzZWQgZm9yIHdheXMpXG4gICAgdmFyIG5vZGVpZHMgPSBuZXcgT2JqZWN0KCk7XG4gICAgdmFyIHBvaW5pZHMgPSBuZXcgT2JqZWN0KCk7XG4gICAgZm9yICh2YXIgaT0wO2k8bm9kZXMubGVuZ3RoO2krKykge1xuICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgIGlmIChub2RlaWRzW25vZGUuaWRdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gaGFuZGxlIGlucHV0IGRhdGEgZHVwbGljYXRpb25cbiAgICAgICAgbm9kZSA9IG9wdGlvbnMuZGVkdXBsaWNhdG9yKG5vZGUsIG5vZGVpZHNbbm9kZS5pZF0pO1xuICAgICAgfVxuICAgICAgbm9kZWlkc1tub2RlLmlkXSA9IG5vZGU7XG4gICAgICBpZiAodHlwZW9mIG5vZGUudGFncyAhPSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAgIGhhc19pbnRlcmVzdGluZ190YWdzKG5vZGUudGFncykpIC8vIHRoaXMgY2hlY2tzIGlmIHRoZSBub2RlIGhhcyBhbnkgdGFncyBvdGhlciB0aGFuIFwiY3JlYXRlZF9ieVwiXG4gICAgICAgIHBvaW5pZHNbbm9kZS5pZF0gPSB0cnVlO1xuICAgIH1cbiAgICAvLyB0b2RvIC0+IGFmdGVyIGRlZHVwbGljYXRpb24gb2YgcmVsYXRpb25zPz9cbiAgICBmb3IgKHZhciBpPTA7aTxyZWxzLmxlbmd0aDtpKyspIHtcbiAgICAgIGlmIChfLmlzQXJyYXkocmVsc1tpXS5tZW1iZXJzKSkge1xuICAgICAgICBmb3IgKHZhciBqPTA7ajxyZWxzW2ldLm1lbWJlcnMubGVuZ3RoO2orKykge1xuICAgICAgICAgIGlmIChyZWxzW2ldLm1lbWJlcnNbal0udHlwZSA9PSBcIm5vZGVcIilcbiAgICAgICAgICAgIHBvaW5pZHNbcmVsc1tpXS5tZW1iZXJzW2pdLnJlZl0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHZhciB3YXlpZHMgPSBuZXcgT2JqZWN0KCk7XG4gICAgdmFyIHdheW5pZHMgPSBuZXcgT2JqZWN0KCk7XG4gICAgZm9yICh2YXIgaT0wO2k8d2F5cy5sZW5ndGg7aSsrKSB7XG4gICAgICB2YXIgd2F5ID0gd2F5c1tpXTtcbiAgICAgIGlmICh3YXlpZHNbd2F5LmlkXSkge1xuICAgICAgICAvLyBoYW5kbGUgaW5wdXQgZGF0YSBkdXBsaWNhdGlvblxuICAgICAgICB3YXkgPSBvcHRpb25zLmRlZHVwbGljYXRvcih3YXksIHdheWlkc1t3YXkuaWRdKTtcbiAgICAgIH1cbiAgICAgIHdheWlkc1t3YXkuaWRdID0gd2F5O1xuICAgICAgaWYgKF8uaXNBcnJheSh3YXkubm9kZXMpKSB7XG4gICAgICAgIGZvciAodmFyIGo9MDtqPHdheS5ub2Rlcy5sZW5ndGg7aisrKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiB3YXkubm9kZXNbal0gPT09IFwib2JqZWN0XCIpIGNvbnRpbnVlOyAvLyBpZ25vcmUgYWxyZWFkeSByZXBsYWNlZCB3YXkgbm9kZSBvYmplY3RzXG4gICAgICAgICAgd2F5bmlkc1t3YXkubm9kZXNbal1dID0gdHJ1ZTtcbiAgICAgICAgICB3YXkubm9kZXNbal0gPSBub2RlaWRzW3dheS5ub2Rlc1tqXV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFyIHBvaXMgPSBuZXcgQXJyYXkoKTtcbiAgICBmb3IgKHZhciBpZCBpbiBub2RlaWRzKSB7XG4gICAgICB2YXIgbm9kZSA9IG5vZGVpZHNbaWRdO1xuICAgICAgaWYgKCF3YXluaWRzW2lkXSB8fCBwb2luaWRzW2lkXSlcbiAgICAgICAgcG9pcy5wdXNoKG5vZGUpO1xuICAgIH1cbiAgICB2YXIgcmVsaWRzID0gbmV3IEFycmF5KCk7XG4gICAgZm9yICh2YXIgaT0wO2k8cmVscy5sZW5ndGg7aSsrKSB7XG4gICAgICB2YXIgcmVsID0gcmVsc1tpXTtcbiAgICAgIGlmIChyZWxpZHNbcmVsLmlkXSkge1xuICAgICAgICAvLyBoYW5kbGUgaW5wdXQgZGF0YSBkdXBsaWNhdGlvblxuICAgICAgICByZWwgPSBvcHRpb25zLmRlZHVwbGljYXRvcihyZWwsIHJlbGlkc1tyZWwuaWRdKTtcbiAgICAgIH1cbiAgICAgIHJlbGlkc1tyZWwuaWRdID0gcmVsO1xuICAgIH1cbiAgICB2YXIgcmVsc21hcCA9IHtub2RlOiB7fSwgd2F5OiB7fSwgcmVsYXRpb246IHt9fTtcbiAgICBmb3IgKHZhciBpZCBpbiByZWxpZHMpIHtcbiAgICAgIHZhciByZWwgPSByZWxpZHNbaWRdO1xuICAgICAgaWYgKCFfLmlzQXJyYXkocmVsLm1lbWJlcnMpKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIGNvbnNvbGUud2FybignUmVsYXRpb24nLHJlbC50eXBlKycvJytyZWwuaWQsJ2lnbm9yZWQgYmVjYXVzZSBpdCBoYXMgbm8gbWVtYmVycycpO1xuICAgICAgICBjb250aW51ZTsgLy8gaWdub3JlIHJlbGF0aW9ucyB3aXRob3V0IG1lbWJlcnMgKGUuZy4gcmV0dXJuZWQgYnkgYW4gaWRzX29ubHkgcXVlcnkpXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBqPTA7ajxyZWwubWVtYmVycy5sZW5ndGg7aisrKSB7XG4gICAgICAgIHZhciBtX3R5cGUgPSByZWwubWVtYmVyc1tqXS50eXBlO1xuICAgICAgICB2YXIgbV9yZWYgPSByZWwubWVtYmVyc1tqXS5yZWY7XG4gICAgICAgIGlmICh0eXBlb2YgbV9yZWYgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAvLyBkZS1uYW1lc3BhY2UgZnVsbCBnZW9tZXRyeSBjb250ZW50XG4gICAgICAgICAgbV9yZWYgPSBtX3JlZi5yZXBsYWNlKFwiX2Z1bGxHZW9tXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVsc21hcFttX3R5cGVdKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdSZWxhdGlvbicscmVsLnR5cGUrJy8nK3JlbC5pZCwnbWVtYmVyJyxtX3R5cGUrJy8nK21fcmVmLCdpZ25vcmVkIGJlY2F1c2UgaXQgaGFzIGFuIGludmFsaWQgdHlwZScpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcmVsc21hcFttX3R5cGVdW21fcmVmXSA9PT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICByZWxzbWFwW21fdHlwZV1bbV9yZWZdID0gW107XG4gICAgICAgIHJlbHNtYXBbbV90eXBlXVttX3JlZl0ucHVzaCh7XG4gICAgICAgICAgXCJyb2xlXCIgOiByZWwubWVtYmVyc1tqXS5yb2xlLFxuICAgICAgICAgIFwicmVsXCIgOiByZWwuaWQsXG4gICAgICAgICAgXCJyZWx0YWdzXCIgOiByZWwudGFncyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnN0cnVjdCBnZW9qc29uXG4gICAgdmFyIGdlb2pzb247XG4gICAgdmFyIGdlb2pzb25ub2RlcyA9IFtdO1xuICAgIGZvciAoaT0wO2k8cG9pcy5sZW5ndGg7aSsrKSB7XG4gICAgICBpZiAodHlwZW9mIHBvaXNbaV0ubG9uID09IFwidW5kZWZpbmVkXCIgfHwgdHlwZW9mIHBvaXNbaV0ubGF0ID09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdQT0knLHBvaXNbaV0udHlwZSsnLycrcG9pc1tpXS5pZCwnaWdub3JlZCBiZWNhdXNlIGl0IGxhY2tzIGNvb3JkaW5hdGVzJyk7XG4gICAgICAgIGNvbnRpbnVlOyAvLyBsb24gYW5kIGxhdCBhcmUgcmVxdWlyZWQgZm9yIHNob3dpbmcgYSBwb2ludFxuICAgICAgfVxuICAgICAgdmFyIGZlYXR1cmUgPSB7XG4gICAgICAgIFwidHlwZVwiICAgICAgIDogXCJGZWF0dXJlXCIsXG4gICAgICAgIFwiaWRcIiAgICAgICAgIDogcG9pc1tpXS50eXBlK1wiL1wiK3BvaXNbaV0uaWQsXG4gICAgICAgIFwicHJvcGVydGllc1wiIDoge1xuICAgICAgICAgIFwidHlwZVwiIDogcG9pc1tpXS50eXBlLFxuICAgICAgICAgIFwiaWRcIiAgIDogcG9pc1tpXS5pZCxcbiAgICAgICAgICBcInRhZ3NcIiA6IHBvaXNbaV0udGFncyB8fCB7fSxcbiAgICAgICAgICBcInJlbGF0aW9uc1wiIDogcmVsc21hcFtcIm5vZGVcIl1bcG9pc1tpXS5pZF0gfHwgW10sXG4gICAgICAgICAgXCJtZXRhXCI6IGJ1aWxkX21ldGFfaW5mb3JtYXRpb24ocG9pc1tpXSlcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZW9tZXRyeVwiICAgOiB7XG4gICAgICAgICAgXCJ0eXBlXCIgOiBcIlBvaW50XCIsXG4gICAgICAgICAgXCJjb29yZGluYXRlc1wiIDogWytwb2lzW2ldLmxvbiwgK3BvaXNbaV0ubGF0XSxcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGlmIChwb2lzW2ldLl9faXNfY2VudGVyX3BsYWNlaG9sZGVyKVxuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbXCJnZW9tZXRyeVwiXSA9IFwiY2VudGVyXCI7XG4gICAgICBpZiAoIWZlYXR1cmVDYWxsYmFjaylcbiAgICAgICAgZ2VvanNvbm5vZGVzLnB1c2goZmVhdHVyZSk7XG4gICAgICBlbHNlXG4gICAgICAgIGZlYXR1cmVDYWxsYmFjayhmZWF0dXJlKTtcbiAgICB9XG4gICAgdmFyIGdlb2pzb25saW5lcyA9IFtdO1xuICAgIHZhciBnZW9qc29ucG9seWdvbnMgPSBbXTtcbiAgICAvLyBwcm9jZXNzIG11bHRpcG9seWdvbnNcbiAgICBmb3IgKHZhciBpPTA7aTxyZWxzLmxlbmd0aDtpKyspIHtcbiAgICAgIC8vIHRvZG86IHJlZmFjdG9yIHN1Y2ggdGhhdCB0aGlzIGxvb3BzIG92ZXIgcmVsaWRzIGluc3RlYWQgb2YgcmVscz9cbiAgICAgIGlmIChyZWxpZHNbcmVsc1tpXS5pZF0gIT09IHJlbHNbaV0pIHtcbiAgICAgICAgLy8gc2tpcCByZWxhdGlvbiBiZWNhdXNlIGl0J3MgYSBkZWR1cGxpY2F0aW9uIGFydGlmYWN0XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCh0eXBlb2YgcmVsc1tpXS50YWdzICE9IFwidW5kZWZpbmVkXCIpICYmXG4gICAgICAgICAgKHJlbHNbaV0udGFnc1tcInR5cGVcIl0gPT0gXCJyb3V0ZVwiIHx8IHJlbHNbaV0udGFnc1tcInR5cGVcIl0gPT0gXCJ3YXRlcndheVwiKSkge1xuICAgICAgICBpZiAoIV8uaXNBcnJheShyZWxzW2ldLm1lbWJlcnMpKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdSb3V0ZScscmVsc1tpXS50eXBlKycvJytyZWxzW2ldLmlkLCdpZ25vcmVkIGJlY2F1c2UgaXQgaGFzIG5vIG1lbWJlcnMnKTtcbiAgICAgICAgICBjb250aW51ZTsgLy8gaWdub3JlIHJlbGF0aW9ucyB3aXRob3V0IG1lbWJlcnMgKGUuZy4gcmV0dXJuZWQgYnkgYW4gaWRzX29ubHkgcXVlcnkpXG4gICAgICAgIH1cbiAgICAgICAgcmVsc1tpXS5tZW1iZXJzLmZvckVhY2goZnVuY3Rpb24obSkge1xuICAgICAgICAgIGlmICh3YXlpZHNbbS5yZWZdICYmICFoYXNfaW50ZXJlc3RpbmdfdGFncyh3YXlpZHNbbS5yZWZdLnRhZ3MpKVxuICAgICAgICAgICAgICB3YXlpZHNbbS5yZWZdLmlzX3NraXBwYWJsZXJlbGF0aW9ubWVtYmVyID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZlYXR1cmUgPSBjb25zdHJ1Y3RfbXVsdGlsaW5lc3RyaW5nKHJlbHNbaV0pO1xuICAgICAgICBpZiAoZmVhdHVyZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSBjb25zb2xlLndhcm4oJ1JvdXRlIHJlbGF0aW9uJyxyZWxzW2ldLnR5cGUrJy8nK3JlbHNbaV0uaWQsJ2lnbm9yZWQgYmVjYXVzZSBpdCBoYXMgaW52YWxpZCBnZW9tZXRyeScpO1xuICAgICAgICAgIGNvbnRpbnVlOyAvLyBhYm9ydCBpZiBmZWF0dXJlIGNvdWxkIG5vdCBiZSBjb25zdHJ1Y3RlZFxuICAgICAgICB9XG4gICAgICAgIGlmICghZmVhdHVyZUNhbGxiYWNrKVxuICAgICAgICAgIGdlb2pzb25wb2x5Z29ucy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZmVhdHVyZUNhbGxiYWNrKHJld2luZChmZWF0dXJlKSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY29uc3RydWN0X211bHRpbGluZXN0cmluZyhyZWwpIHtcbiAgICAgICAgICB2YXIgaXNfdGFpbnRlZCA9IGZhbHNlO1xuICAgICAgICAgIC8vIHByZXBhcmUgcm91dGUgbWVtYmVyc1xuICAgICAgICAgIHZhciBtZW1iZXJzO1xuICAgICAgICAgIG1lbWJlcnMgPSByZWwubWVtYmVycy5maWx0ZXIoZnVuY3Rpb24obSkge3JldHVybiBtLnR5cGUgPT09IFwid2F5XCI7fSk7XG4gICAgICAgICAgbWVtYmVycyA9IG1lbWJlcnMubWFwKGZ1bmN0aW9uKG0pIHtcbiAgICAgICAgICAgIHZhciB3YXkgPSB3YXlpZHNbbS5yZWZdO1xuICAgICAgICAgICAgaWYgKHdheSA9PT0gdW5kZWZpbmVkIHx8IHdheS5ub2RlcyA9PT0gdW5kZWZpbmVkKSB7IC8vIGNoZWNrIGZvciBtaXNzaW5nIHdheXNcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdSb3V0ZSAnK3JlbC50eXBlKycvJytyZWwuaWQsICd0YWludGVkIGJ5IGEgbWlzc2luZyBvciBpbmNvbXBsZXRlICB3YXknLCBtLnR5cGUrJy8nK20ucmVmKTtcbiAgICAgICAgICAgICAgaXNfdGFpbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7IC8vIFRPRE86IHRoaXMgaXMgc2xvdyEgOihcbiAgICAgICAgICAgICAgaWQ6IG0ucmVmLFxuICAgICAgICAgICAgICByb2xlOiBtLnJvbGUsXG4gICAgICAgICAgICAgIHdheTogd2F5LFxuICAgICAgICAgICAgICBub2Rlczogd2F5Lm5vZGVzLmZpbHRlcihmdW5jdGlvbihuKSB7XG4gICAgICAgICAgICAgICAgaWYgKG4gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGlzX3RhaW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIGNvbnNvbGUud2FybignUm91dGUnLCByZWwudHlwZSsnLycrcmVsLmlkLCAgJ3RhaW50ZWQgYnkgYSB3YXknLCBtLnR5cGUrJy8nK20ucmVmLCAnd2l0aCBhIG1pc3Npbmcgbm9kZScpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWVtYmVycyA9IF8uY29tcGFjdChtZW1iZXJzKTtcbiAgICAgICAgICAvLyBjb25zdHJ1Y3QgY29ubmVjdGVkIGxpbmVzdHJpbmdzXG4gICAgICAgICAgdmFyIGxpbmVzdHJpbmdzO1xuICAgICAgICAgIGxpbmVzdHJpbmdzID0gam9pbihtZW1iZXJzKTtcblxuICAgICAgICAgIC8vIHNhbml0aXplIG1wLWNvb3JkaW5hdGVzIChyZW1vdmUgZW1wdHkgY2x1c3RlcnMgb3IgcmluZ3MsIHtsYXQsbG9uLC4uLn0gdG8gW2xvbixsYXRdXG4gICAgICAgICAgdmFyIGNvb3JkcyA9IFtdO1xuICAgICAgICAgIGNvb3JkcyA9IF8uY29tcGFjdChsaW5lc3RyaW5ncy5tYXAoZnVuY3Rpb24obGluZXN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIF8uY29tcGFjdChsaW5lc3RyaW5nLm1hcChmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbK25vZGUubG9uLCtub2RlLmxhdF07XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgaWYgKGNvb3Jkcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdSb3V0ZScsIHJlbC50eXBlKycvJytyZWwuaWQsICdjb250YWlucyBubyBjb29yZGluYXRlcycpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBpZ25vcmUgcm91dGVzIHdpdGhvdXQgY29vcmRpbmF0ZXNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBtcCBwYXJzZWQsIG5vdyBjb25zdHJ1Y3QgdGhlIGdlb0pTT05cbiAgICAgICAgICB2YXIgZmVhdHVyZSA9IHtcbiAgICAgICAgICAgIFwidHlwZVwiICAgICAgIDogXCJGZWF0dXJlXCIsXG4gICAgICAgICAgICBcImlkXCIgICAgICAgICA6IHJlbC50eXBlK1wiL1wiK3JlbC5pZCxcbiAgICAgICAgICAgIFwicHJvcGVydGllc1wiIDoge1xuICAgICAgICAgICAgICBcInR5cGVcIiA6IHJlbC50eXBlLFxuICAgICAgICAgICAgICBcImlkXCIgICA6IHJlbC5pZCxcbiAgICAgICAgICAgICAgXCJ0YWdzXCIgOiByZWwudGFncyB8fCB7fSxcbiAgICAgICAgICAgICAgXCJyZWxhdGlvbnNcIiA6ICByZWxzbWFwW3JlbC50eXBlXVtyZWwuaWRdIHx8IFtdLFxuICAgICAgICAgICAgICBcIm1ldGFcIjogYnVpbGRfbWV0YV9pbmZvcm1hdGlvbihyZWwpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJnZW9tZXRyeVwiICAgOiB7XG4gICAgICAgICAgICAgIFwidHlwZVwiIDogY29vcmRzLmxlbmd0aCA9PT0gMSA/IFwiTGluZVN0cmluZ1wiIDogXCJNdWx0aUxpbmVTdHJpbmdcIixcbiAgICAgICAgICAgICAgXCJjb29yZGluYXRlc1wiIDogY29vcmRzLmxlbmd0aCA9PT0gMSA/IGNvb3Jkc1swXSA6IGNvb3JkcyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGlzX3RhaW50ZWQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIGNvbnNvbGUud2FybignUm91dGUnLCByZWwudHlwZSsnLycrcmVsLmlkLCAnaXMgdGFpbnRlZCcpO1xuICAgICAgICAgICAgZmVhdHVyZS5wcm9wZXJ0aWVzW1widGFpbnRlZFwiXSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmZWF0dXJlO1xuICAgICAgICB9XG4gICAgICB9IC8vIGVuZCBjb25zdHJ1Y3QgbXVsdGlsaW5lc3RyaW5nIGZvciByb3V0ZSByZWxhdGlvbnNcbiAgICAgIGlmICgodHlwZW9mIHJlbHNbaV0udGFncyAhPSBcInVuZGVmaW5lZFwiKSAmJlxuICAgICAgICAgIChyZWxzW2ldLnRhZ3NbXCJ0eXBlXCJdID09IFwibXVsdGlwb2x5Z29uXCIgfHwgcmVsc1tpXS50YWdzW1widHlwZVwiXSA9PSBcImJvdW5kYXJ5XCIpKSB7XG4gICAgICAgIGlmICghXy5pc0FycmF5KHJlbHNbaV0ubWVtYmVycykpIHtcbiAgICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSBjb25zb2xlLndhcm4oJ011bHRpcG9seWdvbicscmVsc1tpXS50eXBlKycvJytyZWxzW2ldLmlkLCdpZ25vcmVkIGJlY2F1c2UgaXQgaGFzIG5vIG1lbWJlcnMnKTtcbiAgICAgICAgICBjb250aW51ZTsgLy8gaWdub3JlIHJlbGF0aW9ucyB3aXRob3V0IG1lbWJlcnMgKGUuZy4gcmV0dXJuZWQgYnkgYW4gaWRzX29ubHkgcXVlcnkpXG4gICAgICAgIH1cbiAgICAgICAgdmFyIG91dGVyX2NvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaj0wO2o8cmVsc1tpXS5tZW1iZXJzLmxlbmd0aDtqKyspXG4gICAgICAgICAgaWYgKHJlbHNbaV0ubWVtYmVyc1tqXS5yb2xlID09IFwib3V0ZXJcIilcbiAgICAgICAgICAgIG91dGVyX2NvdW50Kys7XG4gICAgICAgICAgZWxzZSBpZiAob3B0aW9ucy52ZXJib3NlICYmIHJlbHNbaV0ubWVtYmVyc1tqXS5yb2xlICE9IFwiaW5uZXJcIilcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTXVsdGlwb2x5Z29uJyxyZWxzW2ldLnR5cGUrJy8nK3JlbHNbaV0uaWQsJ21lbWJlcicscmVsc1tpXS5tZW1iZXJzW2pdLnR5cGUrJy8nK3JlbHNbaV0ubWVtYmVyc1tqXS5yZWYsJ2lnbm9yZWQgYmVjYXVzZSBpdCBoYXMgYW4gaW52YWxpZCByb2xlOiBcIicgKyByZWxzW2ldLm1lbWJlcnNbal0ucm9sZSArICdcIicpO1xuICAgICAgICByZWxzW2ldLm1lbWJlcnMuZm9yRWFjaChmdW5jdGlvbihtKSB7XG4gICAgICAgICAgaWYgKHdheWlkc1ttLnJlZl0pIHtcbiAgICAgICAgICAgIC8vIHRoaXMgZXZlbiB3b3JrcyBpbiB0aGUgZm9sbG93aW5nIGNvcm5lciBjYXNlOlxuICAgICAgICAgICAgLy8gYSBtdWx0aXBvbHlnb24gYW1lbml0eT14eHggd2l0aCBvdXRlciBsaW5lIHRhZ2dlZCBhbWVuaXR5PXl5eVxuICAgICAgICAgICAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90eXJhc2Qvb3NtdG9nZW9qc29uL2lzc3Vlcy83XG4gICAgICAgICAgICBpZiAobS5yb2xlPT09XCJvdXRlclwiICYmICFoYXNfaW50ZXJlc3RpbmdfdGFncyh3YXlpZHNbbS5yZWZdLnRhZ3MscmVsc1tpXS50YWdzKSlcbiAgICAgICAgICAgICAgd2F5aWRzW20ucmVmXS5pc19za2lwcGFibGVyZWxhdGlvbm1lbWJlciA9IHRydWU7XG4gICAgICAgICAgICBpZiAobS5yb2xlPT09XCJpbm5lclwiICYmICFoYXNfaW50ZXJlc3RpbmdfdGFncyh3YXlpZHNbbS5yZWZdLnRhZ3MpKVxuICAgICAgICAgICAgICB3YXlpZHNbbS5yZWZdLmlzX3NraXBwYWJsZXJlbGF0aW9ubWVtYmVyID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAob3V0ZXJfY291bnQgPT0gMCkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIGNvbnNvbGUud2FybignTXVsdGlwb2x5Z29uIHJlbGF0aW9uJyxyZWxzW2ldLnR5cGUrJy8nK3JlbHNbaV0uaWQsJ2lnbm9yZWQgYmVjYXVzZSBpdCBoYXMgbm8gb3V0ZXIgd2F5cycpO1xuICAgICAgICAgIGNvbnRpbnVlOyAvLyBpZ25vcmUgbXVsdGlwb2x5Z29ucyB3aXRob3V0IG91dGVyIHdheXNcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2ltcGxlX21wID0gZmFsc2U7XG4gICAgICAgIGlmIChvdXRlcl9jb3VudCA9PSAxICYmICFoYXNfaW50ZXJlc3RpbmdfdGFncyhyZWxzW2ldLnRhZ3MsIHtcInR5cGVcIjp0cnVlfSkpXG4gICAgICAgICAgc2ltcGxlX21wID0gdHJ1ZTtcbiAgICAgICAgdmFyIGZlYXR1cmUgPSBudWxsO1xuICAgICAgICBpZiAoIXNpbXBsZV9tcCkge1xuICAgICAgICAgIGZlYXR1cmUgPSBjb25zdHJ1Y3RfbXVsdGlwb2x5Z29uKHJlbHNbaV0sIHJlbHNbaV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHNpbXBsZSBtdWx0aXBvbHlnb25cbiAgICAgICAgICB2YXIgb3V0ZXJfd2F5ID0gcmVsc1tpXS5tZW1iZXJzLmZpbHRlcihmdW5jdGlvbihtKSB7cmV0dXJuIG0ucm9sZSA9PT0gXCJvdXRlclwiO30pWzBdO1xuICAgICAgICAgIG91dGVyX3dheSA9IHdheWlkc1tvdXRlcl93YXkucmVmXTtcbiAgICAgICAgICBpZiAob3V0ZXJfd2F5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIGNvbnNvbGUud2FybignTXVsdGlwb2x5Z29uIHJlbGF0aW9uJyxyZWxzW2ldLnR5cGUrJy8nK3JlbHNbaV0uaWQsJ2lnbm9yZWQgYmVjYXVzZSBvdXRlciB3YXknLCBvdXRlcl93YXkudHlwZSsnLycrb3V0ZXJfd2F5LnJlZiwnaXMgbWlzc2luZycpO1xuICAgICAgICAgICAgY29udGludWU7IC8vIGFib3J0IGlmIG91dGVyIHdheSBvYmplY3QgaXMgbm90IHByZXNlbnRcbiAgICAgICAgICB9XG4gICAgICAgICAgb3V0ZXJfd2F5LmlzX3NraXBwYWJsZXJlbGF0aW9ubWVtYmVyID0gdHJ1ZTtcbiAgICAgICAgICBmZWF0dXJlID0gY29uc3RydWN0X211bHRpcG9seWdvbihvdXRlcl93YXksIHJlbHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmZWF0dXJlID09PSBmYWxzZSkge1xuICAgICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIGNvbnNvbGUud2FybignTXVsdGlwb2x5Z29uIHJlbGF0aW9uJyxyZWxzW2ldLnR5cGUrJy8nK3JlbHNbaV0uaWQsJ2lnbm9yZWQgYmVjYXVzZSBpdCBoYXMgaW52YWxpZCBnZW9tZXRyeScpO1xuICAgICAgICAgIGNvbnRpbnVlOyAvLyBhYm9ydCBpZiBmZWF0dXJlIGNvdWxkIG5vdCBiZSBjb25zdHJ1Y3RlZFxuICAgICAgICB9XG4gICAgICAgIGlmICghZmVhdHVyZUNhbGxiYWNrKVxuICAgICAgICAgIGdlb2pzb25wb2x5Z29ucy5wdXNoKGZlYXR1cmUpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgZmVhdHVyZUNhbGxiYWNrKHJld2luZChmZWF0dXJlKSk7XG5cbiAgICAgICAgZnVuY3Rpb24gY29uc3RydWN0X211bHRpcG9seWdvbih0YWdfb2JqZWN0LCByZWwpIHtcbiAgICAgICAgICB2YXIgaXNfdGFpbnRlZCA9IGZhbHNlO1xuICAgICAgICAgIHZhciBtcF9nZW9tZXRyeSA9IHNpbXBsZV9tcCA/ICd3YXknIDogJ3JlbGF0aW9uJyxcbiAgICAgICAgICAgICAgbXBfaWQgPSB0eXBlb2YgdGFnX29iamVjdC5pZCA9PT0gXCJudW1iZXJcIiA/IHRhZ19vYmplY3QuaWQgOiArKHRhZ19vYmplY3QuaWQucmVwbGFjZShcIl9mdWxsR2VvbVwiLCBcIlwiKSk7XG4gICAgICAgICAgLy8gcHJlcGFyZSBtcCBtZW1iZXJzXG4gICAgICAgICAgdmFyIG1lbWJlcnM7XG4gICAgICAgICAgbWVtYmVycyA9IHJlbC5tZW1iZXJzLmZpbHRlcihmdW5jdGlvbihtKSB7cmV0dXJuIG0udHlwZSA9PT0gXCJ3YXlcIjt9KTtcbiAgICAgICAgICBtZW1iZXJzID0gbWVtYmVycy5tYXAoZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgdmFyIHdheSA9IHdheWlkc1ttLnJlZl07XG4gICAgICAgICAgICBpZiAod2F5ID09PSB1bmRlZmluZWQgfHwgd2F5Lm5vZGVzID09PSB1bmRlZmluZWQpIHsgLy8gY2hlY2sgZm9yIG1pc3Npbmcgd2F5c1xuICAgICAgICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSBjb25zb2xlLndhcm4oJ011bHRpcG9seWdvbicsIG1wX2dlb21ldHJ5KycvJyttcF9pZCwgJ3RhaW50ZWQgYnkgYSBtaXNzaW5nIG9yIGluY29tcGxldGUgd2F5JywgbS50eXBlKycvJyttLnJlZik7XG4gICAgICAgICAgICAgIGlzX3RhaW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4geyAvLyBUT0RPOiB0aGlzIGlzIHNsb3chIDooXG4gICAgICAgICAgICAgIGlkOiBtLnJlZixcbiAgICAgICAgICAgICAgcm9sZTogbS5yb2xlIHx8IFwib3V0ZXJcIixcbiAgICAgICAgICAgICAgd2F5OiB3YXksXG4gICAgICAgICAgICAgIG5vZGVzOiB3YXkubm9kZXMuZmlsdGVyKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICBpZiAobiAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgaXNfdGFpbnRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdNdWx0aXBvbHlnb24nLCBtcF9nZW9tZXRyeSsnLycrbXBfaWQsICAndGFpbnRlZCBieSBhIHdheScsIG0udHlwZSsnLycrbS5yZWYsICd3aXRoIGEgbWlzc2luZyBub2RlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBtZW1iZXJzID0gXy5jb21wYWN0KG1lbWJlcnMpO1xuICAgICAgICAgIC8vIGNvbnN0cnVjdCBvdXRlciBhbmQgaW5uZXIgcmluZ3NcbiAgICAgICAgICB2YXIgb3V0ZXJzLCBpbm5lcnM7XG4gICAgICAgICAgb3V0ZXJzID0gam9pbihtZW1iZXJzLmZpbHRlcihmdW5jdGlvbihtKSB7cmV0dXJuIG0ucm9sZT09PVwib3V0ZXJcIjt9KSk7XG4gICAgICAgICAgaW5uZXJzID0gam9pbihtZW1iZXJzLmZpbHRlcihmdW5jdGlvbihtKSB7cmV0dXJuIG0ucm9sZT09PVwiaW5uZXJcIjt9KSk7XG4gICAgICAgICAgLy8gc29ydCByaW5nc1xuICAgICAgICAgIHZhciBtcDtcbiAgICAgICAgICBmdW5jdGlvbiBmaW5kT3V0ZXIoaW5uZXIpIHtcbiAgICAgICAgICAgIHZhciBwb2x5Z29uSW50ZXJzZWN0c1BvbHlnb24gPSBmdW5jdGlvbihvdXRlciwgaW5uZXIpIHtcbiAgICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPGlubmVyLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIGlmIChwb2ludEluUG9seWdvbihpbm5lcltpXSwgb3V0ZXIpKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtYXBDb29yZGluYXRlcyA9IGZ1bmN0aW9uKGZyb20pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZyb20ubWFwKGZ1bmN0aW9uKG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWytuLmxhdCwrbi5sb25dO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHN0b2xlbiBmcm9tIGlEL2dlby5qcyxcbiAgICAgICAgICAgIC8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zdWJzdGFjay9wb2ludC1pbi1wb2x5Z29uLFxuICAgICAgICAgICAgLy8gcmF5LWNhc3RpbmcgYWxnb3JpdGhtIGJhc2VkIG9uIGh0dHA6Ly93d3cuZWNzZS5ycGkuZWR1L0hvbWVwYWdlcy93cmYvUmVzZWFyY2gvU2hvcnRfTm90ZXMvcG5wb2x5Lmh0bWxcbiAgICAgICAgICAgIHZhciBwb2ludEluUG9seWdvbiA9IGZ1bmN0aW9uKHBvaW50LCBwb2x5Z29uKSB7XG4gICAgICAgICAgICAgIHZhciB4ID0gcG9pbnRbMF0sIHkgPSBwb2ludFsxXSwgaW5zaWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gcG9seWdvbi5sZW5ndGggLSAxOyBpIDwgcG9seWdvbi5sZW5ndGg7IGogPSBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeGkgPSBwb2x5Z29uW2ldWzBdLCB5aSA9IHBvbHlnb25baV1bMV07XG4gICAgICAgICAgICAgICAgdmFyIHhqID0gcG9seWdvbltqXVswXSwgeWogPSBwb2x5Z29uW2pdWzFdO1xuICAgICAgICAgICAgICAgIHZhciBpbnRlcnNlY3QgPSAoKHlpID4geSkgIT0gKHlqID4geSkpICYmXG4gICAgICAgICAgICAgICAgICAoeCA8ICh4aiAtIHhpKSAqICh5IC0geWkpIC8gKHlqIC0geWkpICsgeGkpO1xuICAgICAgICAgICAgICAgIGlmIChpbnRlcnNlY3QpIGluc2lkZSA9ICFpbnNpZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGluc2lkZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBzdG9sZW4gZnJvbSBpRC9yZWxhdGlvbi5qc1xuICAgICAgICAgICAgdmFyIG8sIG91dGVyO1xuICAgICAgICAgICAgLy8gdG9kbzogYWxsIHRoaXMgY29vcmRpbmF0ZSBtYXBwaW5nIG1ha2VzIHRoaXMgdW5uZWNjZXNhcmlseSBzbG93LlxuICAgICAgICAgICAgLy8gc2VlIHRoZSBcInRvZG86IHRoaXMgaXMgc2xvdyEgOihcIiBhYm92ZS5cbiAgICAgICAgICAgIGlubmVyID0gbWFwQ29vcmRpbmF0ZXMoaW5uZXIpO1xuICAgICAgICAgICAgLypmb3IgKG8gPSAwOyBvIDwgb3V0ZXJzLmxlbmd0aDsgbysrKSB7XG4gICAgICAgICAgICAgIG91dGVyID0gbWFwQ29vcmRpbmF0ZXMob3V0ZXJzW29dKTtcbiAgICAgICAgICAgICAgaWYgKHBvbHlnb25Db250YWluc1BvbHlnb24ob3V0ZXIsIGlubmVyKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgIH0qL1xuICAgICAgICAgICAgZm9yIChvID0gMDsgbyA8IG91dGVycy5sZW5ndGg7IG8rKykge1xuICAgICAgICAgICAgICBvdXRlciA9IG1hcENvb3JkaW5hdGVzKG91dGVyc1tvXSk7XG4gICAgICAgICAgICAgIGlmIChwb2x5Z29uSW50ZXJzZWN0c1BvbHlnb24ob3V0ZXIsIGlubmVyKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbXAgPSBvdXRlcnMubWFwKGZ1bmN0aW9uKG8pIHtyZXR1cm4gW29dO30pO1xuICAgICAgICAgIGZvciAodmFyIGo9MDsgajxpbm5lcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIHZhciBvID0gZmluZE91dGVyKGlubmVyc1tqXSk7XG4gICAgICAgICAgICBpZiAobyAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICBtcFtvXS5wdXNoKGlubmVyc1tqXSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIGNvbnNvbGUud2FybignTXVsdGlwb2x5Z29uJywgbXBfZ2VvbWV0cnkrJy8nK21wX2lkLCAnY29udGFpbnMgYW4gaW5uZXIgcmluZyB3aXRoIG5vIGNvbnRhaW5pbmcgb3V0ZXInKTtcbiAgICAgICAgICAgICAgLy8gc28sIG5vIG91dGVyIHJpbmcgZm9yIHRoaXMgaW5uZXIgcmluZyBpcyBmb3VuZC5cbiAgICAgICAgICAgICAgLy8gV2UncmUgZ29pbmcgdG8gaWdub3JlIGhvbGVzIGluIGVtcHR5IHNwYWNlLlxuICAgICAgICAgICAgICA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIHNhbml0aXplIG1wLWNvb3JkaW5hdGVzIChyZW1vdmUgZW1wdHkgY2x1c3RlcnMgb3IgcmluZ3MsIHtsYXQsbG9uLC4uLn0gdG8gW2xvbixsYXRdXG4gICAgICAgICAgdmFyIG1wX2Nvb3JkcyA9IFtdO1xuICAgICAgICAgIG1wX2Nvb3JkcyA9IF8uY29tcGFjdChtcC5tYXAoZnVuY3Rpb24oY2x1c3Rlcikge1xuICAgICAgICAgICAgdmFyIGNsID0gXy5jb21wYWN0KGNsdXN0ZXIubWFwKGZ1bmN0aW9uKHJpbmcpIHtcbiAgICAgICAgICAgICAgaWYgKHJpbmcubGVuZ3RoIDwgNCkgeyAvLyB0b2RvOiBpcyB0aGlzIGNvcnJlY3Q6IHJpbmcubGVuZ3RoIDwgNCA/XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdNdWx0aXBvbHlnb24nLCBtcF9nZW9tZXRyeSsnLycrbXBfaWQsICdjb250YWlucyBhIHJpbmcgd2l0aCBsZXNzIHRoYW4gZm91ciBub2RlcycpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gXy5jb21wYWN0KHJpbmcubWFwKGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWytub2RlLmxvbiwrbm9kZS5sYXRdO1xuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICBpZiAoY2wubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdNdWx0aXBvbHlnb24nLCBtcF9nZW9tZXRyeSsnLycrbXBfaWQsICdjb250YWlucyBhbiBlbXB0eSByaW5nIGNsdXN0ZXInKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNsO1xuICAgICAgICAgIH0pKTtcblxuICAgICAgICAgIGlmIChtcF9jb29yZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIGNvbnNvbGUud2FybignTXVsdGlwb2x5Z29uJywgbXBfZ2VvbWV0cnkrJy8nK21wX2lkLCAnY29udGFpbnMgbm8gY29vcmRpbmF0ZXMnKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gaWdub3JlIG11bHRpcG9seWdvbnMgd2l0aG91dCBjb29yZGluYXRlc1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgbXBfdHlwZSA9IFwiTXVsdGlQb2x5Z29uXCI7XG4gICAgICAgICAgaWYgKG1wX2Nvb3Jkcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIG1wX3R5cGUgPSBcIlBvbHlnb25cIjtcbiAgICAgICAgICAgIG1wX2Nvb3JkcyA9IG1wX2Nvb3Jkc1swXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gbXAgcGFyc2VkLCBub3cgY29uc3RydWN0IHRoZSBnZW9KU09OXG4gICAgICAgICAgdmFyIGZlYXR1cmUgPSB7XG4gICAgICAgICAgICBcInR5cGVcIiAgICAgICA6IFwiRmVhdHVyZVwiLFxuICAgICAgICAgICAgXCJpZFwiICAgICAgICAgOiB0YWdfb2JqZWN0LnR5cGUrXCIvXCIrbXBfaWQsXG4gICAgICAgICAgICBcInByb3BlcnRpZXNcIiA6IHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCIgOiB0YWdfb2JqZWN0LnR5cGUsXG4gICAgICAgICAgICAgIFwiaWRcIiAgIDogbXBfaWQsXG4gICAgICAgICAgICAgIFwidGFnc1wiIDogdGFnX29iamVjdC50YWdzIHx8IHt9LFxuICAgICAgICAgICAgICBcInJlbGF0aW9uc1wiIDogIHJlbHNtYXBbdGFnX29iamVjdC50eXBlXVt0YWdfb2JqZWN0LmlkXSB8fCBbXSxcbiAgICAgICAgICAgICAgXCJtZXRhXCI6IGJ1aWxkX21ldGFfaW5mb3JtYXRpb24odGFnX29iamVjdClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImdlb21ldHJ5XCIgICA6IHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCIgOiBtcF90eXBlLFxuICAgICAgICAgICAgICBcImNvb3JkaW5hdGVzXCIgOiBtcF9jb29yZHMsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChpc190YWludGVkKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy52ZXJib3NlKSBjb25zb2xlLndhcm4oJ011bHRpcG9seWdvbicsIG1wX2dlb21ldHJ5KycvJyttcF9pZCwgJ2lzIHRhaW50ZWQnKTtcbiAgICAgICAgICAgIGZlYXR1cmUucHJvcGVydGllc1tcInRhaW50ZWRcIl0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmVhdHVyZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBwcm9jZXNzIGxpbmVzIGFuZCBwb2x5Z29uc1xuICAgIGZvciAodmFyIGk9MDtpPHdheXMubGVuZ3RoO2krKykge1xuICAgICAgLy8gdG9kbzogcmVmYWN0b3Igc3VjaCB0aGF0IHRoaXMgbG9vcHMgb3ZlciB3YXlpZHMgaW5zdGVhZCBvZiB3YXlzP1xuICAgICAgaWYgKHdheWlkc1t3YXlzW2ldLmlkXSAhPT0gd2F5c1tpXSkge1xuICAgICAgICAvLyBza2lwIHdheSBiZWNhdXNlIGl0J3MgYSBkZWR1cGxpY2F0aW9uIGFydGlmYWN0XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFfLmlzQXJyYXkod2F5c1tpXS5ub2RlcykpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdXYXknLHdheXNbaV0udHlwZSsnLycrd2F5c1tpXS5pZCwnaWdub3JlZCBiZWNhdXNlIGl0IGhhcyBubyBub2RlcycpO1xuICAgICAgICBjb250aW51ZTsgLy8gaWdub3JlIHdheXMgd2l0aG91dCBub2RlcyAoZS5nLiByZXR1cm5lZCBieSBhbiBpZHNfb25seSBxdWVyeSlcbiAgICAgIH1cbiAgICAgIGlmICh3YXlzW2ldLmlzX3NraXBwYWJsZXJlbGF0aW9ubWVtYmVyKVxuICAgICAgICBjb250aW51ZTsgLy8gaWdub3JlIHdheXMgd2hpY2ggYXJlIGFscmVhZHkgcmVuZGVyZWQgYXMgKHBhcnQgb2YpIGEgbXVsdGlwb2x5Z29uXG4gICAgICBpZiAodHlwZW9mIHdheXNbaV0uaWQgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgLy8gcmVtb3ZlIGZ1bGwgZ2VvbWV0cnkgbmFtZXNwYWNlIGZvciBvdXRwdXRcbiAgICAgICAgd2F5c1tpXS5pZCA9ICt3YXlzW2ldLmlkLnJlcGxhY2UoXCJfZnVsbEdlb21cIiwgXCJcIik7XG4gICAgICB9XG4gICAgICB3YXlzW2ldLnRhaW50ZWQgPSBmYWxzZTtcbiAgICAgIHdheXNbaV0uaGlkZGVuID0gZmFsc2U7XG4gICAgICB2YXIgY29vcmRzID0gbmV3IEFycmF5KCk7XG4gICAgICBmb3IgKGo9MDtqPHdheXNbaV0ubm9kZXMubGVuZ3RoO2orKykge1xuICAgICAgICBpZiAodHlwZW9mIHdheXNbaV0ubm9kZXNbal0gPT0gXCJvYmplY3RcIilcbiAgICAgICAgICBjb29yZHMucHVzaChbK3dheXNbaV0ubm9kZXNbal0ubG9uLCArd2F5c1tpXS5ub2Rlc1tqXS5sYXRdKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdXYXknLHdheXNbaV0udHlwZSsnLycrd2F5c1tpXS5pZCwnaXMgdGFpbnRlZCBieSBhbiBpbnZhbGlkIG5vZGUnKTtcbiAgICAgICAgICB3YXlzW2ldLnRhaW50ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY29vcmRzLmxlbmd0aCA8PSAxKSB7IC8vIGludmFsaWQgd2F5IGdlb21ldHJ5XG4gICAgICAgIGlmIChvcHRpb25zLnZlcmJvc2UpIGNvbnNvbGUud2FybignV2F5Jyx3YXlzW2ldLnR5cGUrJy8nK3dheXNbaV0uaWQsJ2lnbm9yZWQgYmVjYXVzZSBpdCBjb250YWlucyB0b28gZmV3IG5vZGVzJyk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFyIHdheV90eXBlID0gXCJMaW5lU3RyaW5nXCI7IC8vIGRlZmF1bHRcbiAgICAgIGlmICh0eXBlb2Ygd2F5c1tpXS5ub2Rlc1swXSAhPSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3YXlzW2ldLm5vZGVzW3dheXNbaV0ubm9kZXMubGVuZ3RoLTFdICE9IFwidW5kZWZpbmVkXCIgJiYgLy8gd2F5IGhhcyBpdHMgc3RhcnQvZW5kIG5vZGVzIGxvYWRlZFxuICAgICAgICB3YXlzW2ldLm5vZGVzWzBdLmlkID09PSB3YXlzW2ldLm5vZGVzW3dheXNbaV0ubm9kZXMubGVuZ3RoLTFdLmlkICYmIC8vIC4uLiBhbmQgZm9ybXMgYSBjbG9zZWQgcmluZ1xuICAgICAgICAoXG4gICAgICAgICAgdHlwZW9mIHdheXNbaV0udGFncyAhPSBcInVuZGVmaW5lZFwiICYmIC8vIC4uLiBhbmQgaGFzIHRhZ3NcbiAgICAgICAgICBfaXNQb2x5Z29uRmVhdHVyZSh3YXlzW2ldLnRhZ3MpIC8vIC4uLiBhbmQgdGFncyBzYXkgaXQgaXMgYSBwb2x5Z29uXG4gICAgICAgICAgfHwgLy8gb3IgaXMgYSBwbGFjZWhvbGRlciBmb3IgYSBib3VuZHMgZ2VvbWV0cnlcbiAgICAgICAgICB3YXlzW2ldLl9faXNfYm91bmRzX3BsYWNlaG9sZGVyXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICB3YXlfdHlwZSA9IFwiUG9seWdvblwiO1xuICAgICAgICBjb29yZHMgPSBbY29vcmRzXTtcbiAgICAgIH1cbiAgICAgIHZhciBmZWF0dXJlID0ge1xuICAgICAgICBcInR5cGVcIiAgICAgICA6IFwiRmVhdHVyZVwiLFxuICAgICAgICBcImlkXCIgICAgICAgICA6IHdheXNbaV0udHlwZStcIi9cIit3YXlzW2ldLmlkLFxuICAgICAgICBcInByb3BlcnRpZXNcIiA6IHtcbiAgICAgICAgICBcInR5cGVcIiA6IHdheXNbaV0udHlwZSxcbiAgICAgICAgICBcImlkXCIgICA6IHdheXNbaV0uaWQsXG4gICAgICAgICAgXCJ0YWdzXCIgOiB3YXlzW2ldLnRhZ3MgfHwge30sXG4gICAgICAgICAgXCJyZWxhdGlvbnNcIiA6IHJlbHNtYXBbXCJ3YXlcIl1bd2F5c1tpXS5pZF0gfHwgW10sXG4gICAgICAgICAgXCJtZXRhXCI6IGJ1aWxkX21ldGFfaW5mb3JtYXRpb24od2F5c1tpXSlcbiAgICAgICAgfSxcbiAgICAgICAgXCJnZW9tZXRyeVwiICAgOiB7XG4gICAgICAgICAgXCJ0eXBlXCIgOiB3YXlfdHlwZSxcbiAgICAgICAgICBcImNvb3JkaW5hdGVzXCIgOiBjb29yZHMsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh3YXlzW2ldLnRhaW50ZWQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMudmVyYm9zZSkgY29uc29sZS53YXJuKCdXYXknLHdheXNbaV0udHlwZSsnLycrd2F5c1tpXS5pZCwnaXMgdGFpbnRlZCcpO1xuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbXCJ0YWludGVkXCJdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmICh3YXlzW2ldLl9faXNfYm91bmRzX3BsYWNlaG9sZGVyKVxuICAgICAgICBmZWF0dXJlLnByb3BlcnRpZXNbXCJnZW9tZXRyeVwiXSA9IFwiYm91bmRzXCI7XG4gICAgICBpZiAoIWZlYXR1cmVDYWxsYmFjaykge1xuICAgICAgICBpZiAod2F5X3R5cGUgPT0gXCJMaW5lU3RyaW5nXCIpXG4gICAgICAgICAgZ2VvanNvbmxpbmVzLnB1c2goZmVhdHVyZSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBnZW9qc29ucG9seWdvbnMucHVzaChmZWF0dXJlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZlYXR1cmVDYWxsYmFjayhyZXdpbmQoZmVhdHVyZSkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmZWF0dXJlQ2FsbGJhY2spXG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGdlb2pzb24gPSB7XG4gICAgICBcInR5cGVcIjogXCJGZWF0dXJlQ29sbGVjdGlvblwiLFxuICAgICAgXCJmZWF0dXJlc1wiOiBbXVxuICAgIH07XG4gICAgZ2VvanNvbi5mZWF0dXJlcyA9IGdlb2pzb24uZmVhdHVyZXMuY29uY2F0KGdlb2pzb25wb2x5Z29ucyk7XG4gICAgZ2VvanNvbi5mZWF0dXJlcyA9IGdlb2pzb24uZmVhdHVyZXMuY29uY2F0KGdlb2pzb25saW5lcyk7XG4gICAgZ2VvanNvbi5mZWF0dXJlcyA9IGdlb2pzb24uZmVhdHVyZXMuY29uY2F0KGdlb2pzb25ub2Rlcyk7XG4gICAgLy8gb3B0aW9uYWxseSwgZmxhdHRlbiBwcm9wZXJ0aWVzXG4gICAgaWYgKG9wdGlvbnMuZmxhdFByb3BlcnRpZXMpIHtcbiAgICAgIGdlb2pzb24uZmVhdHVyZXMuZm9yRWFjaChmdW5jdGlvbihmKSB7XG4gICAgICAgIGYucHJvcGVydGllcyA9IF8ubWVyZ2UoXG4gICAgICAgICAgZi5wcm9wZXJ0aWVzLm1ldGEsXG4gICAgICAgICAgZi5wcm9wZXJ0aWVzLnRhZ3MsXG4gICAgICAgICAge2lkOiBmLnByb3BlcnRpZXMudHlwZStcIi9cIitmLnByb3BlcnRpZXMuaWR9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLy8gZml4IHBvbHlnb24gd2luZGluZ1xuICAgIGdlb2pzb24gPSByZXdpbmQoZ2VvanNvbik7XG4gICAgcmV0dXJuIGdlb2pzb247XG4gIH1cbiAgZnVuY3Rpb24gX2lzUG9seWdvbkZlYXR1cmUoIHRhZ3MgKSB7XG4gICAgdmFyIHBvbHlnb25GZWF0dXJlcyA9IG9wdGlvbnMucG9seWdvbkZlYXR1cmVzO1xuICAgIGlmICh0eXBlb2YgcG9seWdvbkZlYXR1cmVzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICByZXR1cm4gcG9seWdvbkZlYXR1cmVzKHRhZ3MpO1xuICAgIC8vIGV4cGxpY2l0ZWx5IHRhZ2dlZCBub24tYXJlYXNcbiAgICBpZiAoIHRhZ3NbJ2FyZWEnXSA9PT0gJ25vJyApXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgLy8gYXNzdW1pbmcgdGhhdCBhIHR5cGljYWwgT1NNIHdheSBoYXMgaW4gYXZlcmFnZSBsZXNzIHRhZ3MgdGhhblxuICAgIC8vIHRoZSBwb2x5Z29uRmVhdHVyZXMgbGlzdCwgdGhpcyB3YXkgYXJvdW5kIHNob3VsZCBiZSBmYXN0ZXJcbiAgICBmb3IgKCB2YXIga2V5IGluIHRhZ3MgKSB7XG4gICAgICB2YXIgdmFsID0gdGFnc1trZXldO1xuICAgICAgdmFyIHBmayA9IHBvbHlnb25GZWF0dXJlc1trZXldO1xuICAgICAgLy8gY29udGludWUgd2l0aCBuZXh0IGlmIHRhZyBpcyB1bmtub3duIG9yIG5vdCBcImNhdGVnb3JpemluZ1wiXG4gICAgICBpZiAoIHR5cGVvZiBwZmsgPT09ICd1bmRlZmluZWQnIClcbiAgICAgICAgY29udGludWU7XG4gICAgICAvLyBjb250aW51ZSB3aXRoIG5leHQgaWYgdGFnIGlzIGV4cGxpY2l0ZWx5IHVuLXNldCAoXCJidWlsZGluZz1ub1wiKVxuICAgICAgaWYgKCB2YWwgPT09ICdubycgKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIC8vIGNoZWNrIHBvbHlnb24gZmVhdHVyZXMgZm9yOiBnZW5lcmFsIGFjY2VwdGFuY2UsIGluY2x1ZGVkIG9yIGV4Y2x1ZGVkIHZhbHVlc1xuICAgICAgaWYgKCBwZmsgPT09IHRydWUgKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICggcGZrLmluY2x1ZGVkX3ZhbHVlcyAmJiBwZmsuaW5jbHVkZWRfdmFsdWVzW3ZhbF0gPT09IHRydWUgKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGlmICggcGZrLmV4Y2x1ZGVkX3ZhbHVlcyAmJiBwZmsuZXhjbHVkZWRfdmFsdWVzW3ZhbF0gIT09IHRydWUgKVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgLy8gaWYgbm8gdGFncyBtYXRjaGVkLCB0aGlzIGFpbid0IG5vIGFyZWEuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59O1xuXG4vLyBoZWxwZXIgdGhhdCBqb2lucyBhZGphY2VudCBvc20gd2F5cyBpbnRvIGxpbmVzdHJpbmdzIG9yIGxpbmVhciByaW5nc1xuZnVuY3Rpb24gam9pbih3YXlzKSB7XG4gIHZhciBfZmlyc3QgPSBmdW5jdGlvbihhcnIpIHtyZXR1cm4gYXJyWzBdfTtcbiAgdmFyIF9sYXN0ICA9IGZ1bmN0aW9uKGFycikge3JldHVybiBhcnJbYXJyLmxlbmd0aC0xXX07XG4gIHZhciBfZml0VG9nZXRoZXIgPSBmdW5jdGlvbihuMSwgbjIpIHtcbiAgICByZXR1cm4gbjEgIT09IHVuZGVmaW5lZCAmJiBuMiAhPT0gdW5kZWZpbmVkICYmIG4xLmlkID09PSBuMi5pZDtcbiAgfVxuICAvLyBzdG9sZW4gZnJvbSBpRC9yZWxhdGlvbi5qc1xuICB2YXIgam9pbmVkID0gW10sIGN1cnJlbnQsIGZpcnN0LCBsYXN0LCBpLCBob3csIHdoYXQ7XG4gIHdoaWxlICh3YXlzLmxlbmd0aCkge1xuICAgIGN1cnJlbnQgPSB3YXlzLnBvcCgpLm5vZGVzLnNsaWNlKCk7XG4gICAgam9pbmVkLnB1c2goY3VycmVudCk7XG4gICAgd2hpbGUgKHdheXMubGVuZ3RoICYmICFfZml0VG9nZXRoZXIoX2ZpcnN0KGN1cnJlbnQpLCBfbGFzdChjdXJyZW50KSkpIHtcbiAgICAgIGZpcnN0ID0gX2ZpcnN0KGN1cnJlbnQpO1xuICAgICAgbGFzdCAgPSBfbGFzdChjdXJyZW50KTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCB3YXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHdoYXQgPSB3YXlzW2ldLm5vZGVzO1xuICAgICAgICBpZiAoX2ZpdFRvZ2V0aGVyKGxhc3QsIF9maXJzdCh3aGF0KSkpIHtcbiAgICAgICAgICBob3cgID0gY3VycmVudC5wdXNoO1xuICAgICAgICAgIHdoYXQgPSB3aGF0LnNsaWNlKDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKF9maXRUb2dldGhlcihsYXN0LCBfbGFzdCh3aGF0KSkpIHtcbiAgICAgICAgICBob3cgID0gY3VycmVudC5wdXNoO1xuICAgICAgICAgIHdoYXQgPSB3aGF0LnNsaWNlKDAsIC0xKS5yZXZlcnNlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAoX2ZpdFRvZ2V0aGVyKGZpcnN0LCBfbGFzdCh3aGF0KSkpIHtcbiAgICAgICAgICBob3cgID0gY3VycmVudC51bnNoaWZ0O1xuICAgICAgICAgIHdoYXQgPSB3aGF0LnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmIChfZml0VG9nZXRoZXIoZmlyc3QsIF9maXJzdCh3aGF0KSkpIHtcbiAgICAgICAgICBob3cgID0gY3VycmVudC51bnNoaWZ0O1xuICAgICAgICAgIHdoYXQgPSB3aGF0LnNsaWNlKDEpLnJldmVyc2UoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aGF0ID0gaG93ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCF3aGF0KVxuICAgICAgICBicmVhazsgLy8gSW52YWxpZCBnZW9tZXRyeSAoZGFuZ2xpbmcgd2F5LCB1bmNsb3NlZCByaW5nKVxuICAgICAgd2F5cy5zcGxpY2UoaSwgMSk7XG4gICAgICBob3cuYXBwbHkoY3VycmVudCwgd2hhdCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBqb2luZWQ7XG59XG5cbi8vIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxub3NtdG9nZW9qc29uLnRvR2VvanNvbiA9IG9zbXRvZ2VvanNvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBvc210b2dlb2pzb247XG4iLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBleHBvcnRzPVwibm9kZVwiIGluY2x1ZGU9XCJjbG9uZSxtZXJnZSxpc0VtcHR5LGlzQXJyYXksY29tcGFjdCxlYWNoXCIgLWRgXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuOyhmdW5jdGlvbigpIHtcblxuICAvKiogVXNlZCBhcyBhIHNhZmUgcmVmZXJlbmNlIGZvciBgdW5kZWZpbmVkYCBpbiBwcmUtRVM1IGVudmlyb25tZW50cy4gKi9cbiAgdmFyIHVuZGVmaW5lZDtcblxuICAvKiogVXNlZCBhcyB0aGUgc2VtYW50aWMgdmVyc2lvbiBudW1iZXIuICovXG4gIHZhciBWRVJTSU9OID0gJzQuMTUuMCc7XG5cbiAgLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG4gIHZhciBMQVJHRV9BUlJBWV9TSVpFID0gMjAwO1xuXG4gIC8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG4gIHZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbiAgLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xuICB2YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbiAgLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgY29tcGFyaXNvbiBzdHlsZXMuICovXG4gIHZhciBVTk9SREVSRURfQ09NUEFSRV9GTEFHID0gMSxcbiAgICAgIFBBUlRJQUxfQ09NUEFSRV9GTEFHID0gMjtcblxuICAvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbiAgdmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgICBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuICAvKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG4gIHZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgICBib29sVGFnID0gJ1tvYmplY3QgQm9vbGVhbl0nLFxuICAgICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgICAgZ2VuVGFnID0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJyxcbiAgICAgIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICAgIHByb21pc2VUYWcgPSAnW29iamVjdCBQcm9taXNlXScsXG4gICAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJyxcbiAgICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbiAgdmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuICAvKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG4gIHZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvLFxuICAgICAgcmVMZWFkaW5nRG90ID0gL15cXC4vLFxuICAgICAgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuICAvKipcbiAgICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICAgKiBbc3ludGF4IGNoYXJhY3RlcnNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXBhdHRlcm5zKS5cbiAgICovXG4gIHZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbiAgLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG4gIHZhciByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZztcblxuICAvKiogVXNlZCB0byBtYXRjaCBgUmVnRXhwYCBmbGFncyBmcm9tIHRoZWlyIGNvZXJjZWQgc3RyaW5nIHZhbHVlcy4gKi9cbiAgdmFyIHJlRmxhZ3MgPSAvXFx3KiQvO1xuXG4gIC8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbiAgdmFyIHJlSXNIb3N0Q3RvciA9IC9eXFxbb2JqZWN0IC4rP0NvbnN0cnVjdG9yXFxdJC87XG5cbiAgLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xuICB2YXIgcmVJc1VpbnQgPSAvXig/OjB8WzEtOV1cXGQqKSQvO1xuXG4gIC8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbiAgdmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG4gIHR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxuICB0eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG4gIHR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG4gIHR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbiAgdHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG4gIHR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbiAgdHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxuICB0eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG4gIHR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbiAgdHlwZWRBcnJheVRhZ3NbbWFwVGFnXSA9IHR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPVxuICB0eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG4gIHR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbiAgdHlwZWRBcnJheVRhZ3Nbd2Vha01hcFRhZ10gPSBmYWxzZTtcblxuICAvKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBzdXBwb3J0ZWQgYnkgYF8uY2xvbmVgLiAqL1xuICB2YXIgY2xvbmVhYmxlVGFncyA9IHt9O1xuICBjbG9uZWFibGVUYWdzW2FyZ3NUYWddID0gY2xvbmVhYmxlVGFnc1thcnJheVRhZ10gPVxuICBjbG9uZWFibGVUYWdzW2FycmF5QnVmZmVyVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0YVZpZXdUYWddID1cbiAgY2xvbmVhYmxlVGFnc1tib29sVGFnXSA9IGNsb25lYWJsZVRhZ3NbZGF0ZVRhZ10gPVxuICBjbG9uZWFibGVUYWdzW2Zsb2F0MzJUYWddID0gY2xvbmVhYmxlVGFnc1tmbG9hdDY0VGFnXSA9XG4gIGNsb25lYWJsZVRhZ3NbaW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW2ludDE2VGFnXSA9XG4gIGNsb25lYWJsZVRhZ3NbaW50MzJUYWddID0gY2xvbmVhYmxlVGFnc1ttYXBUYWddID1cbiAgY2xvbmVhYmxlVGFnc1tudW1iZXJUYWddID0gY2xvbmVhYmxlVGFnc1tvYmplY3RUYWddID1cbiAgY2xvbmVhYmxlVGFnc1tyZWdleHBUYWddID0gY2xvbmVhYmxlVGFnc1tzZXRUYWddID1cbiAgY2xvbmVhYmxlVGFnc1tzdHJpbmdUYWddID0gY2xvbmVhYmxlVGFnc1tzeW1ib2xUYWddID1cbiAgY2xvbmVhYmxlVGFnc1t1aW50OFRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPVxuICBjbG9uZWFibGVUYWdzW3VpbnQxNlRhZ10gPSBjbG9uZWFibGVUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xuICBjbG9uZWFibGVUYWdzW2Vycm9yVGFnXSA9IGNsb25lYWJsZVRhZ3NbZnVuY1RhZ10gPVxuICBjbG9uZWFibGVUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbiAgLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbiAgdmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4gIC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG4gIHZhciBmcmVlU2VsZiA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYgJiYgc2VsZi5PYmplY3QgPT09IE9iamVjdCAmJiBzZWxmO1xuXG4gIC8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xuICB2YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuICAvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xuICB2YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbiAgLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xuICB2YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4gIC8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG4gIHZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4gIC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xuICB2YXIgZnJlZVByb2Nlc3MgPSBtb2R1bGVFeHBvcnRzICYmIGZyZWVHbG9iYWwucHJvY2VzcztcblxuICAvKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbiAgdmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnJlZVByb2Nlc3MgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH0oKSk7XG5cbiAgLyogTm9kZS5qcyBoZWxwZXIgcmVmZXJlbmNlcy4gKi9cbiAgdmFyIG5vZGVJc1R5cGVkQXJyYXkgPSBub2RlVXRpbCAmJiBub2RlVXRpbC5pc1R5cGVkQXJyYXk7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGtleS12YWx1ZSBgcGFpcmAgdG8gYG1hcGAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBtb2RpZnkuXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhaXIgVGhlIGtleS12YWx1ZSBwYWlyIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgbWFwYC5cbiAgICovXG4gIGZ1bmN0aW9uIGFkZE1hcEVudHJ5KG1hcCwgcGFpcikge1xuICAgIC8vIERvbid0IHJldHVybiBgbWFwLnNldGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gICAgbWFwLnNldChwYWlyWzBdLCBwYWlyWzFdKTtcbiAgICByZXR1cm4gbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYHZhbHVlYCB0byBgc2V0YC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIG1vZGlmeS5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYWRkLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBzZXRgLlxuICAgKi9cbiAgZnVuY3Rpb24gYWRkU2V0RW50cnkoc2V0LCB2YWx1ZSkge1xuICAgIC8vIERvbid0IHJldHVybiBgc2V0LmFkZGAgYmVjYXVzZSBpdCdzIG5vdCBjaGFpbmFibGUgaW4gSUUgMTEuXG4gICAgc2V0LmFkZCh2YWx1ZSk7XG4gICAgcmV0dXJuIHNldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gICAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAgICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gICAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnKTtcbiAgICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH1cblxuICAvKipcbiAgICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICAgKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICAgKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAgICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICAgKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gICAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAgICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IGFycmF5ID8gYXJyYXkubGVuZ3RoIDogMDtcblxuICAgIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICAgIH1cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICAgIH1cbiAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gIH1cblxuICAvKipcbiAgICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnNvbWVgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICAgKiBzaG9ydGhhbmRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW55IGVsZW1lbnQgcGFzc2VzIHRoZSBwcmVkaWNhdGUgY2hlY2ssXG4gICAqICBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheVNvbWUoYXJyYXksIHByZWRpY2F0ZSkge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50aW1lc2Agd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzXG4gICAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHJlc3VsdHMuXG4gICAqL1xuICBmdW5jdGlvbiBiYXNlVGltZXMobiwgaXRlcmF0ZWUpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IG4pIHtcbiAgICAgIHJlc3VsdFtpbmRleF0gPSBpdGVyYXRlZShpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuYyh2YWx1ZSk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICAgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRWYWx1ZShvYmplY3QsIGtleSkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgaG9zdCBvYmplY3QgaW4gSUUgPCA5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBob3N0IG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNIb3N0T2JqZWN0KHZhbHVlKSB7XG4gICAgLy8gTWFueSBob3N0IG9iamVjdHMgYXJlIGBPYmplY3RgIG9iamVjdHMgdGhhdCBjYW4gY29lcmNlIHRvIHN0cmluZ3NcbiAgICAvLyBkZXNwaXRlIGhhdmluZyBpbXByb3Blcmx5IGRlZmluZWQgYHRvU3RyaW5nYCBtZXRob2RzLlxuICAgIHZhciByZXN1bHQgPSBmYWxzZTtcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gISEodmFsdWUgKyAnJyk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGtleS12YWx1ZSBwYWlycy5cbiAgICovXG4gIGZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICAgIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdFsrK2luZGV4XSA9IFtrZXksIHZhbHVlXTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB1bmFyeSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggaXRzIGFyZ3VtZW50IHRyYW5zZm9ybWVkLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICAgIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHJldHVybiBmdW5jKHRyYW5zZm9ybShhcmcpKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGBzZXRgIHRvIGFuIGFycmF5IG9mIGl0cyB2YWx1ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHZhbHVlcy5cbiAgICovXG4gIGZ1bmN0aW9uIHNldFRvQXJyYXkoc2V0KSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICAgIHNldC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXN1bHRbKytpbmRleF0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xuICB2YXIgYXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZSxcbiAgICAgIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuICAvKiogVXNlZCB0byBkZXRlY3Qgb3ZlcnJlYWNoaW5nIGNvcmUtanMgc2hpbXMuICovXG4gIHZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbiAgLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbiAgdmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHVpZCA9IC9bXi5dKyQvLmV4ZWMoY29yZUpzRGF0YSAmJiBjb3JlSnNEYXRhLmtleXMgJiYgY29yZUpzRGF0YS5rZXlzLklFX1BST1RPIHx8ICcnKTtcbiAgICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG4gIH0oKSk7XG5cbiAgLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xuICB2YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4gIC8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xuICB2YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuICAvKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG4gIHZhciBvYmplY3RDdG9yU3RyaW5nID0gZnVuY1RvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuICAvKipcbiAgICogVXNlZCB0byByZXNvbHZlIHRoZVxuICAgKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAgICogb2YgdmFsdWVzLlxuICAgKi9cbiAgdmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbiAgLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbiAgdmFyIHJlSXNOYXRpdmUgPSBSZWdFeHAoJ14nICtcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAgIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuICApO1xuXG4gIC8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xuICB2YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkLFxuICAgICAgU3ltYm9sID0gcm9vdC5TeW1ib2wsXG4gICAgICBVaW50OEFycmF5ID0gcm9vdC5VaW50OEFycmF5LFxuICAgICAgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCksXG4gICAgICBvYmplY3RDcmVhdGUgPSBPYmplY3QuY3JlYXRlLFxuICAgICAgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICAgIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4gIC8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbiAgdmFyIG5hdGl2ZUdldFN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICAgICAgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQsXG4gICAgICBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KSxcbiAgICAgIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4gIC8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbiAgdmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpLFxuICAgICAgTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdNYXAnKSxcbiAgICAgIFByb21pc2UgPSBnZXROYXRpdmUocm9vdCwgJ1Byb21pc2UnKSxcbiAgICAgIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0JyksXG4gICAgICBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyksXG4gICAgICBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbiAgLyoqIERldGVjdCBpZiBwcm9wZXJ0aWVzIHNoYWRvd2luZyB0aG9zZSBvbiBgT2JqZWN0LnByb3RvdHlwZWAgYXJlIG5vbi1lbnVtZXJhYmxlLiAqL1xuICB2YXIgbm9uRW51bVNoYWRvd3MgPSAhcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7ICd2YWx1ZU9mJzogMSB9LCAndmFsdWVPZicpO1xuXG4gIC8qKiBVc2VkIHRvIGxvb2t1cCB1bm1pbmlmaWVkIGZ1bmN0aW9uIG5hbWVzLiAqL1xuICB2YXIgcmVhbE5hbWVzID0ge307XG5cbiAgLyoqIFVzZWQgdG8gZGV0ZWN0IG1hcHMsIHNldHMsIGFuZCB3ZWFrbWFwcy4gKi9cbiAgdmFyIGRhdGFWaWV3Q3RvclN0cmluZyA9IHRvU291cmNlKERhdGFWaWV3KSxcbiAgICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgICAgcHJvbWlzZUN0b3JTdHJpbmcgPSB0b1NvdXJjZShQcm9taXNlKSxcbiAgICAgIHNldEN0b3JTdHJpbmcgPSB0b1NvdXJjZShTZXQpLFxuICAgICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuICAvKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbiAgdmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICAgIHN5bWJvbFZhbHVlT2YgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnZhbHVlT2YgOiB1bmRlZmluZWQsXG4gICAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgYGxvZGFzaGAgb2JqZWN0IHdoaWNoIHdyYXBzIGB2YWx1ZWAgdG8gZW5hYmxlIGltcGxpY2l0IG1ldGhvZFxuICAgKiBjaGFpbiBzZXF1ZW5jZXMuIE1ldGhvZHMgdGhhdCBvcGVyYXRlIG9uIGFuZCByZXR1cm4gYXJyYXlzLCBjb2xsZWN0aW9ucyxcbiAgICogYW5kIGZ1bmN0aW9ucyBjYW4gYmUgY2hhaW5lZCB0b2dldGhlci4gTWV0aG9kcyB0aGF0IHJldHJpZXZlIGEgc2luZ2xlIHZhbHVlXG4gICAqIG9yIG1heSByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUgd2lsbCBhdXRvbWF0aWNhbGx5IGVuZCB0aGUgY2hhaW4gc2VxdWVuY2VcbiAgICogYW5kIHJldHVybiB0aGUgdW53cmFwcGVkIHZhbHVlLiBPdGhlcndpc2UsIHRoZSB2YWx1ZSBtdXN0IGJlIHVud3JhcHBlZFxuICAgKiB3aXRoIGBfI3ZhbHVlYC5cbiAgICpcbiAgICogRXhwbGljaXQgY2hhaW4gc2VxdWVuY2VzLCB3aGljaCBtdXN0IGJlIHVud3JhcHBlZCB3aXRoIGBfI3ZhbHVlYCwgbWF5IGJlXG4gICAqIGVuYWJsZWQgdXNpbmcgYF8uY2hhaW5gLlxuICAgKlxuICAgKiBUaGUgZXhlY3V0aW9uIG9mIGNoYWluZWQgbWV0aG9kcyBpcyBsYXp5LCB0aGF0IGlzLCBpdCdzIGRlZmVycmVkIHVudGlsXG4gICAqIGBfI3ZhbHVlYCBpcyBpbXBsaWNpdGx5IG9yIGV4cGxpY2l0bHkgY2FsbGVkLlxuICAgKlxuICAgKiBMYXp5IGV2YWx1YXRpb24gYWxsb3dzIHNldmVyYWwgbWV0aG9kcyB0byBzdXBwb3J0IHNob3J0Y3V0IGZ1c2lvbi5cbiAgICogU2hvcnRjdXQgZnVzaW9uIGlzIGFuIG9wdGltaXphdGlvbiB0byBtZXJnZSBpdGVyYXRlZSBjYWxsczsgdGhpcyBhdm9pZHNcbiAgICogdGhlIGNyZWF0aW9uIG9mIGludGVybWVkaWF0ZSBhcnJheXMgYW5kIGNhbiBncmVhdGx5IHJlZHVjZSB0aGUgbnVtYmVyIG9mXG4gICAqIGl0ZXJhdGVlIGV4ZWN1dGlvbnMuIFNlY3Rpb25zIG9mIGEgY2hhaW4gc2VxdWVuY2UgcXVhbGlmeSBmb3Igc2hvcnRjdXRcbiAgICogZnVzaW9uIGlmIHRoZSBzZWN0aW9uIGlzIGFwcGxpZWQgdG8gYW4gYXJyYXkgb2YgYXQgbGVhc3QgYDIwMGAgZWxlbWVudHNcbiAgICogYW5kIGFueSBpdGVyYXRlZXMgYWNjZXB0IG9ubHkgb25lIGFyZ3VtZW50LiBUaGUgaGV1cmlzdGljIGZvciB3aGV0aGVyIGFcbiAgICogc2VjdGlvbiBxdWFsaWZpZXMgZm9yIHNob3J0Y3V0IGZ1c2lvbiBpcyBzdWJqZWN0IHRvIGNoYW5nZS5cbiAgICpcbiAgICogQ2hhaW5pbmcgaXMgc3VwcG9ydGVkIGluIGN1c3RvbSBidWlsZHMgYXMgbG9uZyBhcyB0aGUgYF8jdmFsdWVgIG1ldGhvZCBpc1xuICAgKiBkaXJlY3RseSBvciBpbmRpcmVjdGx5IGluY2x1ZGVkIGluIHRoZSBidWlsZC5cbiAgICpcbiAgICogSW4gYWRkaXRpb24gdG8gbG9kYXNoIG1ldGhvZHMsIHdyYXBwZXJzIGhhdmUgYEFycmF5YCBhbmQgYFN0cmluZ2AgbWV0aG9kcy5cbiAgICpcbiAgICogVGhlIHdyYXBwZXIgYEFycmF5YCBtZXRob2RzIGFyZTpcbiAgICogYGNvbmNhdGAsIGBqb2luYCwgYHBvcGAsIGBwdXNoYCwgYHNoaWZ0YCwgYHNvcnRgLCBgc3BsaWNlYCwgYW5kIGB1bnNoaWZ0YFxuICAgKlxuICAgKiBUaGUgd3JhcHBlciBgU3RyaW5nYCBtZXRob2RzIGFyZTpcbiAgICogYHJlcGxhY2VgIGFuZCBgc3BsaXRgXG4gICAqXG4gICAqIFRoZSB3cmFwcGVyIG1ldGhvZHMgdGhhdCBzdXBwb3J0IHNob3J0Y3V0IGZ1c2lvbiBhcmU6XG4gICAqIGBhdGAsIGBjb21wYWN0YCwgYGRyb3BgLCBgZHJvcFJpZ2h0YCwgYGRyb3BXaGlsZWAsIGBmaWx0ZXJgLCBgZmluZGAsXG4gICAqIGBmaW5kTGFzdGAsIGBoZWFkYCwgYGluaXRpYWxgLCBgbGFzdGAsIGBtYXBgLCBgcmVqZWN0YCwgYHJldmVyc2VgLCBgc2xpY2VgLFxuICAgKiBgdGFpbGAsIGB0YWtlYCwgYHRha2VSaWdodGAsIGB0YWtlUmlnaHRXaGlsZWAsIGB0YWtlV2hpbGVgLCBhbmQgYHRvQXJyYXlgXG4gICAqXG4gICAqIFRoZSBjaGFpbmFibGUgd3JhcHBlciBtZXRob2RzIGFyZTpcbiAgICogYGFmdGVyYCwgYGFyeWAsIGBhc3NpZ25gLCBgYXNzaWduSW5gLCBgYXNzaWduSW5XaXRoYCwgYGFzc2lnbldpdGhgLCBgYXRgLFxuICAgKiBgYmVmb3JlYCwgYGJpbmRgLCBgYmluZEFsbGAsIGBiaW5kS2V5YCwgYGNhc3RBcnJheWAsIGBjaGFpbmAsIGBjaHVua2AsXG4gICAqIGBjb21taXRgLCBgY29tcGFjdGAsIGBjb25jYXRgLCBgY29uZm9ybXNgLCBgY29uc3RhbnRgLCBgY291bnRCeWAsIGBjcmVhdGVgLFxuICAgKiBgY3VycnlgLCBgZGVib3VuY2VgLCBgZGVmYXVsdHNgLCBgZGVmYXVsdHNEZWVwYCwgYGRlZmVyYCwgYGRlbGF5YCxcbiAgICogYGRpZmZlcmVuY2VgLCBgZGlmZmVyZW5jZUJ5YCwgYGRpZmZlcmVuY2VXaXRoYCwgYGRyb3BgLCBgZHJvcFJpZ2h0YCxcbiAgICogYGRyb3BSaWdodFdoaWxlYCwgYGRyb3BXaGlsZWAsIGBleHRlbmRgLCBgZXh0ZW5kV2l0aGAsIGBmaWxsYCwgYGZpbHRlcmAsXG4gICAqIGBmbGF0TWFwYCwgYGZsYXRNYXBEZWVwYCwgYGZsYXRNYXBEZXB0aGAsIGBmbGF0dGVuYCwgYGZsYXR0ZW5EZWVwYCxcbiAgICogYGZsYXR0ZW5EZXB0aGAsIGBmbGlwYCwgYGZsb3dgLCBgZmxvd1JpZ2h0YCwgYGZyb21QYWlyc2AsIGBmdW5jdGlvbnNgLFxuICAgKiBgZnVuY3Rpb25zSW5gLCBgZ3JvdXBCeWAsIGBpbml0aWFsYCwgYGludGVyc2VjdGlvbmAsIGBpbnRlcnNlY3Rpb25CeWAsXG4gICAqIGBpbnRlcnNlY3Rpb25XaXRoYCwgYGludmVydGAsIGBpbnZlcnRCeWAsIGBpbnZva2VNYXBgLCBgaXRlcmF0ZWVgLCBga2V5QnlgLFxuICAgKiBga2V5c2AsIGBrZXlzSW5gLCBgbWFwYCwgYG1hcEtleXNgLCBgbWFwVmFsdWVzYCwgYG1hdGNoZXNgLCBgbWF0Y2hlc1Byb3BlcnR5YCxcbiAgICogYG1lbW9pemVgLCBgbWVyZ2VgLCBgbWVyZ2VXaXRoYCwgYG1ldGhvZGAsIGBtZXRob2RPZmAsIGBtaXhpbmAsIGBuZWdhdGVgLFxuICAgKiBgbnRoQXJnYCwgYG9taXRgLCBgb21pdEJ5YCwgYG9uY2VgLCBgb3JkZXJCeWAsIGBvdmVyYCwgYG92ZXJBcmdzYCxcbiAgICogYG92ZXJFdmVyeWAsIGBvdmVyU29tZWAsIGBwYXJ0aWFsYCwgYHBhcnRpYWxSaWdodGAsIGBwYXJ0aXRpb25gLCBgcGlja2AsXG4gICAqIGBwaWNrQnlgLCBgcGxhbnRgLCBgcHJvcGVydHlgLCBgcHJvcGVydHlPZmAsIGBwdWxsYCwgYHB1bGxBbGxgLCBgcHVsbEFsbEJ5YCxcbiAgICogYHB1bGxBbGxXaXRoYCwgYHB1bGxBdGAsIGBwdXNoYCwgYHJhbmdlYCwgYHJhbmdlUmlnaHRgLCBgcmVhcmdgLCBgcmVqZWN0YCxcbiAgICogYHJlbW92ZWAsIGByZXN0YCwgYHJldmVyc2VgLCBgc2FtcGxlU2l6ZWAsIGBzZXRgLCBgc2V0V2l0aGAsIGBzaHVmZmxlYCxcbiAgICogYHNsaWNlYCwgYHNvcnRgLCBgc29ydEJ5YCwgYHNwbGljZWAsIGBzcHJlYWRgLCBgdGFpbGAsIGB0YWtlYCwgYHRha2VSaWdodGAsXG4gICAqIGB0YWtlUmlnaHRXaGlsZWAsIGB0YWtlV2hpbGVgLCBgdGFwYCwgYHRocm90dGxlYCwgYHRocnVgLCBgdG9BcnJheWAsXG4gICAqIGB0b1BhaXJzYCwgYHRvUGFpcnNJbmAsIGB0b1BhdGhgLCBgdG9QbGFpbk9iamVjdGAsIGB0cmFuc2Zvcm1gLCBgdW5hcnlgLFxuICAgKiBgdW5pb25gLCBgdW5pb25CeWAsIGB1bmlvbldpdGhgLCBgdW5pcWAsIGB1bmlxQnlgLCBgdW5pcVdpdGhgLCBgdW5zZXRgLFxuICAgKiBgdW5zaGlmdGAsIGB1bnppcGAsIGB1bnppcFdpdGhgLCBgdXBkYXRlYCwgYHVwZGF0ZVdpdGhgLCBgdmFsdWVzYCxcbiAgICogYHZhbHVlc0luYCwgYHdpdGhvdXRgLCBgd3JhcGAsIGB4b3JgLCBgeG9yQnlgLCBgeG9yV2l0aGAsIGB6aXBgLFxuICAgKiBgemlwT2JqZWN0YCwgYHppcE9iamVjdERlZXBgLCBhbmQgYHppcFdpdGhgXG4gICAqXG4gICAqIFRoZSB3cmFwcGVyIG1ldGhvZHMgdGhhdCBhcmUgKipub3QqKiBjaGFpbmFibGUgYnkgZGVmYXVsdCBhcmU6XG4gICAqIGBhZGRgLCBgYXR0ZW1wdGAsIGBjYW1lbENhc2VgLCBgY2FwaXRhbGl6ZWAsIGBjZWlsYCwgYGNsYW1wYCwgYGNsb25lYCxcbiAgICogYGNsb25lRGVlcGAsIGBjbG9uZURlZXBXaXRoYCwgYGNsb25lV2l0aGAsIGBjb25mb3Jtc1RvYCwgYGRlYnVycmAsXG4gICAqIGBkZWZhdWx0VG9gLCBgZGl2aWRlYCwgYGVhY2hgLCBgZWFjaFJpZ2h0YCwgYGVuZHNXaXRoYCwgYGVxYCwgYGVzY2FwZWAsXG4gICAqIGBlc2NhcGVSZWdFeHBgLCBgZXZlcnlgLCBgZmluZGAsIGBmaW5kSW5kZXhgLCBgZmluZEtleWAsIGBmaW5kTGFzdGAsXG4gICAqIGBmaW5kTGFzdEluZGV4YCwgYGZpbmRMYXN0S2V5YCwgYGZpcnN0YCwgYGZsb29yYCwgYGZvckVhY2hgLCBgZm9yRWFjaFJpZ2h0YCxcbiAgICogYGZvckluYCwgYGZvckluUmlnaHRgLCBgZm9yT3duYCwgYGZvck93blJpZ2h0YCwgYGdldGAsIGBndGAsIGBndGVgLCBgaGFzYCxcbiAgICogYGhhc0luYCwgYGhlYWRgLCBgaWRlbnRpdHlgLCBgaW5jbHVkZXNgLCBgaW5kZXhPZmAsIGBpblJhbmdlYCwgYGludm9rZWAsXG4gICAqIGBpc0FyZ3VtZW50c2AsIGBpc0FycmF5YCwgYGlzQXJyYXlCdWZmZXJgLCBgaXNBcnJheUxpa2VgLCBgaXNBcnJheUxpa2VPYmplY3RgLFxuICAgKiBgaXNCb29sZWFuYCwgYGlzQnVmZmVyYCwgYGlzRGF0ZWAsIGBpc0VsZW1lbnRgLCBgaXNFbXB0eWAsIGBpc0VxdWFsYCxcbiAgICogYGlzRXF1YWxXaXRoYCwgYGlzRXJyb3JgLCBgaXNGaW5pdGVgLCBgaXNGdW5jdGlvbmAsIGBpc0ludGVnZXJgLCBgaXNMZW5ndGhgLFxuICAgKiBgaXNNYXBgLCBgaXNNYXRjaGAsIGBpc01hdGNoV2l0aGAsIGBpc05hTmAsIGBpc05hdGl2ZWAsIGBpc05pbGAsIGBpc051bGxgLFxuICAgKiBgaXNOdW1iZXJgLCBgaXNPYmplY3RgLCBgaXNPYmplY3RMaWtlYCwgYGlzUGxhaW5PYmplY3RgLCBgaXNSZWdFeHBgLFxuICAgKiBgaXNTYWZlSW50ZWdlcmAsIGBpc1NldGAsIGBpc1N0cmluZ2AsIGBpc1VuZGVmaW5lZGAsIGBpc1R5cGVkQXJyYXlgLFxuICAgKiBgaXNXZWFrTWFwYCwgYGlzV2Vha1NldGAsIGBqb2luYCwgYGtlYmFiQ2FzZWAsIGBsYXN0YCwgYGxhc3RJbmRleE9mYCxcbiAgICogYGxvd2VyQ2FzZWAsIGBsb3dlckZpcnN0YCwgYGx0YCwgYGx0ZWAsIGBtYXhgLCBgbWF4QnlgLCBgbWVhbmAsIGBtZWFuQnlgLFxuICAgKiBgbWluYCwgYG1pbkJ5YCwgYG11bHRpcGx5YCwgYG5vQ29uZmxpY3RgLCBgbm9vcGAsIGBub3dgLCBgbnRoYCwgYHBhZGAsXG4gICAqIGBwYWRFbmRgLCBgcGFkU3RhcnRgLCBgcGFyc2VJbnRgLCBgcG9wYCwgYHJhbmRvbWAsIGByZWR1Y2VgLCBgcmVkdWNlUmlnaHRgLFxuICAgKiBgcmVwZWF0YCwgYHJlc3VsdGAsIGByb3VuZGAsIGBydW5JbkNvbnRleHRgLCBgc2FtcGxlYCwgYHNoaWZ0YCwgYHNpemVgLFxuICAgKiBgc25ha2VDYXNlYCwgYHNvbWVgLCBgc29ydGVkSW5kZXhgLCBgc29ydGVkSW5kZXhCeWAsIGBzb3J0ZWRMYXN0SW5kZXhgLFxuICAgKiBgc29ydGVkTGFzdEluZGV4QnlgLCBgc3RhcnRDYXNlYCwgYHN0YXJ0c1dpdGhgLCBgc3R1YkFycmF5YCwgYHN0dWJGYWxzZWAsXG4gICAqIGBzdHViT2JqZWN0YCwgYHN0dWJTdHJpbmdgLCBgc3R1YlRydWVgLCBgc3VidHJhY3RgLCBgc3VtYCwgYHN1bUJ5YCxcbiAgICogYHRlbXBsYXRlYCwgYHRpbWVzYCwgYHRvRmluaXRlYCwgYHRvSW50ZWdlcmAsIGB0b0pTT05gLCBgdG9MZW5ndGhgLFxuICAgKiBgdG9Mb3dlcmAsIGB0b051bWJlcmAsIGB0b1NhZmVJbnRlZ2VyYCwgYHRvU3RyaW5nYCwgYHRvVXBwZXJgLCBgdHJpbWAsXG4gICAqIGB0cmltRW5kYCwgYHRyaW1TdGFydGAsIGB0cnVuY2F0ZWAsIGB1bmVzY2FwZWAsIGB1bmlxdWVJZGAsIGB1cHBlckNhc2VgLFxuICAgKiBgdXBwZXJGaXJzdGAsIGB2YWx1ZWAsIGFuZCBgd29yZHNgXG4gICAqXG4gICAqIEBuYW1lIF9cbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBjYXRlZ29yeSBTZXFcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gd3JhcCBpbiBhIGBsb2Rhc2hgIGluc3RhbmNlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgYGxvZGFzaGAgd3JhcHBlciBpbnN0YW5jZS5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogZnVuY3Rpb24gc3F1YXJlKG4pIHtcbiAgICogICByZXR1cm4gbiAqIG47XG4gICAqIH1cbiAgICpcbiAgICogdmFyIHdyYXBwZWQgPSBfKFsxLCAyLCAzXSk7XG4gICAqXG4gICAqIC8vIFJldHVybnMgYW4gdW53cmFwcGVkIHZhbHVlLlxuICAgKiB3cmFwcGVkLnJlZHVjZShfLmFkZCk7XG4gICAqIC8vID0+IDZcbiAgICpcbiAgICogLy8gUmV0dXJucyBhIHdyYXBwZWQgdmFsdWUuXG4gICAqIHZhciBzcXVhcmVzID0gd3JhcHBlZC5tYXAoc3F1YXJlKTtcbiAgICpcbiAgICogXy5pc0FycmF5KHNxdWFyZXMpO1xuICAgKiAvLyA9PiBmYWxzZVxuICAgKlxuICAgKiBfLmlzQXJyYXkoc3F1YXJlcy52YWx1ZSgpKTtcbiAgICogLy8gPT4gdHJ1ZVxuICAgKi9cbiAgZnVuY3Rpb24gbG9kYXNoKCkge1xuICAgIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBoYXNoIG9iamVjdC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICAgKi9cbiAgZnVuY3Rpb24gSGFzaChlbnRyaWVzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IGVudHJpZXMgPyBlbnRyaWVzLmxlbmd0aCA6IDA7XG5cbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG5hbWUgY2xlYXJcbiAgICogQG1lbWJlck9mIEhhc2hcbiAgICovXG4gIGZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIGRlbGV0ZVxuICAgKiBAbWVtYmVyT2YgSGFzaFxuICAgKiBAcGFyYW0ge09iamVjdH0gaGFzaCBUaGUgaGFzaCB0byBtb2RpZnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICAgIHJldHVybiB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIGdldFxuICAgKiBAbWVtYmVyT2YgSGFzaFxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAgICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gICAgaWYgKG5hdGl2ZUNyZWF0ZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIGhhc2ggdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG5hbWUgaGFzXG4gICAqIEBtZW1iZXJPZiBIYXNoXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbiBlbnRyeSBmb3IgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICAgIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gZGF0YVtrZXldICE9PSB1bmRlZmluZWQgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbmFtZSBzZXRcbiAgICogQG1lbWJlck9mIEhhc2hcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgICBkYXRhW2tleV0gPSAobmF0aXZlQ3JlYXRlICYmIHZhbHVlID09PSB1bmRlZmluZWQpID8gSEFTSF9VTkRFRklORUQgOiB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIEFkZCBtZXRob2RzIHRvIGBIYXNoYC5cbiAgSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG4gIEhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG4gIEhhc2gucHJvdG90eXBlLmdldCA9IGhhc2hHZXQ7XG4gIEhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG4gIEhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGxpc3QgY2FjaGUgb2JqZWN0LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gICAqL1xuICBmdW5jdGlvbiBMaXN0Q2FjaGUoZW50cmllcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBlbnRyaWVzID8gZW50cmllcy5sZW5ndGggOiAwO1xuXG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIGxpc3QgY2FjaGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIGNsZWFyXG4gICAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAgICovXG4gIGZ1bmN0aW9uIGxpc3RDYWNoZUNsZWFyKCkge1xuICAgIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG5hbWUgZGVsZXRlXG4gICAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGxpc3RDYWNoZURlbGV0ZShrZXkpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBsYXN0SW5kZXggPSBkYXRhLmxlbmd0aCAtIDE7XG4gICAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgICAgZGF0YS5wb3AoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG5hbWUgZ2V0XG4gICAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gICAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbmFtZSBoYXNcbiAgICogQG1lbWJlck9mIExpc3RDYWNoZVxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICAgIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGxpc3QgY2FjaGUgYGtleWAgdG8gYHZhbHVlYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG5hbWUgc2V0XG4gICAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIGxpc3RDYWNoZVNldChrZXksIHZhbHVlKSB7XG4gICAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGFbaW5kZXhdWzFdID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG4gIExpc3RDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBsaXN0Q2FjaGVDbGVhcjtcbiAgTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG4gIExpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuICBMaXN0Q2FjaGUucHJvdG90eXBlLmhhcyA9IGxpc3RDYWNoZUhhcztcbiAgTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbWFwIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAgICovXG4gIGZ1bmN0aW9uIE1hcENhY2hlKGVudHJpZXMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gZW50cmllcyA/IGVudHJpZXMubGVuZ3RoIDogMDtcblxuICAgIHRoaXMuY2xlYXIoKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIGNsZWFyXG4gICAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICAgKi9cbiAgZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICAgJ2hhc2gnOiBuZXcgSGFzaCxcbiAgICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbWFwLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbmFtZSBkZWxldGVcbiAgICogQG1lbWJlck9mIE1hcENhY2hlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBtYXBDYWNoZURlbGV0ZShrZXkpIHtcbiAgICByZXR1cm4gZ2V0TWFwRGF0YSh0aGlzLCBrZXkpWydkZWxldGUnXShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIGdldFxuICAgKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gICAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAgICovXG4gIGZ1bmN0aW9uIG1hcENhY2hlR2V0KGtleSkge1xuICAgIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgbWFwIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIGhhc1xuICAgKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBlbnRyeSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIG1hcENhY2hlSGFzKGtleSkge1xuICAgIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuaGFzKGtleSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgbWFwIGBrZXlgIHRvIGB2YWx1ZWAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIHNldFxuICAgKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbWFwIGNhY2hlIGluc3RhbmNlLlxuICAgKi9cbiAgZnVuY3Rpb24gbWFwQ2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICAgIGdldE1hcERhdGEodGhpcywga2V5KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuICBNYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuICBNYXBDYWNoZS5wcm90b3R5cGVbJ2RlbGV0ZSddID0gbWFwQ2FjaGVEZWxldGU7XG4gIE1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbiAgTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuICBNYXBDYWNoZS5wcm90b3R5cGUuc2V0ID0gbWFwQ2FjaGVTZXQ7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qKlxuICAgKlxuICAgKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtBcnJheX0gW3ZhbHVlc10gVGhlIHZhbHVlcyB0byBjYWNoZS5cbiAgICovXG4gIGZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSB2YWx1ZXMgPyB2YWx1ZXMubGVuZ3RoIDogMDtcblxuICAgIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHRoaXMuYWRkKHZhbHVlc1tpbmRleF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAbmFtZSBhZGRcbiAgICogQG1lbWJlck9mIFNldENhY2hlXG4gICAqIEBhbGlhcyBwdXNoXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gICAgdGhpcy5fX2RhdGFfXy5zZXQodmFsdWUsIEhBU0hfVU5ERUZJTkVEKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIGhhc1xuICAgKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xuICB9XG5cbiAgLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cbiAgU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG4gIFNldENhY2hlLnByb3RvdHlwZS5oYXMgPSBzZXRDYWNoZUhhcztcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzdGFjayBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gICAqL1xuICBmdW5jdGlvbiBTdGFjayhlbnRyaWVzKSB7XG4gICAgdGhpcy5fX2RhdGFfXyA9IG5ldyBMaXN0Q2FjaGUoZW50cmllcyk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgc3RhY2suXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIGNsZWFyXG4gICAqIEBtZW1iZXJPZiBTdGFja1xuICAgKi9cbiAgZnVuY3Rpb24gc3RhY2tDbGVhcigpIHtcbiAgICB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgc3RhY2suXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBuYW1lIGRlbGV0ZVxuICAgKiBAbWVtYmVyT2YgU3RhY2tcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIHN0YWNrRGVsZXRlKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YV9fWydkZWxldGUnXShrZXkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG5hbWUgZ2V0XG4gICAqIEBtZW1iZXJPZiBTdGFja1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAgICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gc3RhY2tHZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgc3RhY2sgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG5hbWUgaGFzXG4gICAqIEBtZW1iZXJPZiBTdGFja1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKGtleSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQG5hbWUgc2V0XG4gICAqIEBtZW1iZXJPZiBTdGFja1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAgICovXG4gIGZ1bmN0aW9uIHN0YWNrU2V0KGtleSwgdmFsdWUpIHtcbiAgICB2YXIgY2FjaGUgPSB0aGlzLl9fZGF0YV9fO1xuICAgIGlmIChjYWNoZSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgICAgdmFyIHBhaXJzID0gY2FjaGUuX19kYXRhX187XG4gICAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICAgIHBhaXJzLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgICBjYWNoZSA9IHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGUocGFpcnMpO1xuICAgIH1cbiAgICBjYWNoZS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuICBTdGFjay5wcm90b3R5cGUuY2xlYXIgPSBzdGFja0NsZWFyO1xuICBTdGFjay5wcm90b3R5cGVbJ2RlbGV0ZSddID0gc3RhY2tEZWxldGU7XG4gIFN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcbiAgU3RhY2sucHJvdG90eXBlLmhhcyA9IHN0YWNrSGFzO1xuICBTdGFjay5wcm90b3R5cGUuc2V0ID0gc3RhY2tTZXQ7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIHRoZSBhcnJheS1saWtlIGB2YWx1ZWAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gICAqL1xuICBmdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAgIC8vIFNhZmFyaSA5IG1ha2VzIGBhcmd1bWVudHMubGVuZ3RoYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAgIHZhciByZXN1bHQgPSAoaXNBcnJheSh2YWx1ZSkgfHwgaXNBcmd1bWVudHModmFsdWUpKVxuICAgICAgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpXG4gICAgICA6IFtdO1xuXG4gICAgdmFyIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGgsXG4gICAgICAgIHNraXBJbmRleGVzID0gISFsZW5ndGg7XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICAgIShza2lwSW5kZXhlcyAmJiAoa2V5ID09ICdsZW5ndGgnIHx8IGlzSW5kZXgoa2V5LCBsZW5ndGgpKSkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFzc2lnblZhbHVlYCBleGNlcHQgdGhhdCBpdCBkb2Vzbid0IGFzc2lnblxuICAgKiBgdW5kZWZpbmVkYCB2YWx1ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gICAqL1xuICBmdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICAgIGlmICgodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZXEob2JqZWN0W2tleV0sIHZhbHVlKSkgfHxcbiAgICAgICAgKHR5cGVvZiBrZXkgPT0gJ251bWJlcicgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXNzaWducyBgdmFsdWVgIHRvIGBrZXlgIG9mIGBvYmplY3RgIGlmIHRoZSBleGlzdGluZyB2YWx1ZSBpcyBub3QgZXF1aXZhbGVudFxuICAgKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICAgKiBmb3IgZXF1YWxpdHkgY29tcGFyaXNvbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gICAqL1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSB8fFxuICAgICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAgICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICAgKi9cbiAgZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmFzc2lnbmAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzXG4gICAqIG9yIGBjdXN0b21pemVyYCBmdW5jdGlvbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VBc3NpZ24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgICByZXR1cm4gb2JqZWN0ICYmIGNvcHlPYmplY3Qoc291cmNlLCBrZXlzKHNvdXJjZSksIG9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY2xvbmVgIGFuZCBgXy5jbG9uZURlZXBgIHdoaWNoIHRyYWNrc1xuICAgKiB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2xvbmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRnVsbF0gU3BlY2lmeSBhIGNsb25lIGluY2x1ZGluZyBzeW1ib2xzLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjbG9uaW5nLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2tleV0gVGhlIGtleSBvZiBgdmFsdWVgLlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIHBhcmVudCBvYmplY3Qgb2YgYHZhbHVlYC5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGFuZCB0aGVpciBjbG9uZSBjb3VudGVycGFydHMuXG4gICAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBjbG9uZWQgdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiBiYXNlQ2xvbmUodmFsdWUsIGlzRGVlcCwgaXNGdWxsLCBjdXN0b21pemVyLCBrZXksIG9iamVjdCwgc3RhY2spIHtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICByZXN1bHQgPSBvYmplY3QgPyBjdXN0b21pemVyKHZhbHVlLCBrZXksIG9iamVjdCwgc3RhY2spIDogY3VzdG9taXplcih2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgaWYgKCFpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSk7XG4gICAgaWYgKGlzQXJyKSB7XG4gICAgICByZXN1bHQgPSBpbml0Q2xvbmVBcnJheSh2YWx1ZSk7XG4gICAgICBpZiAoIWlzRGVlcCkge1xuICAgICAgICByZXR1cm4gY29weUFycmF5KHZhbHVlLCByZXN1bHQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKSxcbiAgICAgICAgICBpc0Z1bmMgPSB0YWcgPT0gZnVuY1RhZyB8fCB0YWcgPT0gZ2VuVGFnO1xuXG4gICAgICBpZiAoaXNCdWZmZXIodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBjbG9uZUJ1ZmZlcih2YWx1ZSwgaXNEZWVwKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWcgPT0gb2JqZWN0VGFnIHx8IHRhZyA9PSBhcmdzVGFnIHx8IChpc0Z1bmMgJiYgIW9iamVjdCkpIHtcbiAgICAgICAgaWYgKGlzSG9zdE9iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBpbml0Q2xvbmVPYmplY3QoaXNGdW5jID8ge30gOiB2YWx1ZSk7XG4gICAgICAgIGlmICghaXNEZWVwKSB7XG4gICAgICAgICAgcmV0dXJuIGNvcHlTeW1ib2xzKHZhbHVlLCBiYXNlQXNzaWduKHJlc3VsdCwgdmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCFjbG9uZWFibGVUYWdzW3RhZ10pIHtcbiAgICAgICAgICByZXR1cm4gb2JqZWN0ID8gdmFsdWUgOiB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBpbml0Q2xvbmVCeVRhZyh2YWx1ZSwgdGFnLCBiYXNlQ2xvbmUsIGlzRGVlcCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIENoZWNrIGZvciBjaXJjdWxhciByZWZlcmVuY2VzIGFuZCByZXR1cm4gaXRzIGNvcnJlc3BvbmRpbmcgY2xvbmUuXG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldCh2YWx1ZSk7XG4gICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgIHJldHVybiBzdGFja2VkO1xuICAgIH1cbiAgICBzdGFjay5zZXQodmFsdWUsIHJlc3VsdCk7XG5cbiAgICBpZiAoIWlzQXJyKSB7XG4gICAgICB2YXIgcHJvcHMgPSBpc0Z1bGwgPyBnZXRBbGxLZXlzKHZhbHVlKSA6IGtleXModmFsdWUpO1xuICAgIH1cbiAgICBhcnJheUVhY2gocHJvcHMgfHwgdmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICAgIGlmIChwcm9wcykge1xuICAgICAgICBrZXkgPSBzdWJWYWx1ZTtcbiAgICAgICAgc3ViVmFsdWUgPSB2YWx1ZVtrZXldO1xuICAgICAgfVxuICAgICAgLy8gUmVjdXJzaXZlbHkgcG9wdWxhdGUgY2xvbmUgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIGFzc2lnblZhbHVlKHJlc3VsdCwga2V5LCBiYXNlQ2xvbmUoc3ViVmFsdWUsIGlzRGVlcCwgaXNGdWxsLCBjdXN0b21pemVyLCBrZXksIHZhbHVlLCBzdGFjaykpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uY3JlYXRlYCB3aXRob3V0IHN1cHBvcnQgZm9yIGFzc2lnbmluZ1xuICAgKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHByb3RvdHlwZSBUaGUgb2JqZWN0IHRvIGluaGVyaXQgZnJvbS5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VDcmVhdGUocHJvdG8pIHtcbiAgICByZXR1cm4gaXNPYmplY3QocHJvdG8pID8gb2JqZWN0Q3JlYXRlKHByb3RvKSA6IHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICAgKiBAcmV0dXJucyB7QXJyYXl8T2JqZWN0fSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAgICovXG4gIHZhciBiYXNlRWFjaCA9IGNyZWF0ZUJhc2VFYWNoKGJhc2VGb3JPd24pO1xuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYmFzZUZvck93bmAgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgb2JqZWN0YFxuICAgKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAgICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICAgKi9cbiAgdmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICAgKi9cbiAgZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gICAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICAgKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICAgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gICAqL1xuICBmdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICAgIHBhdGggPSBpc0tleShwYXRoLCBvYmplY3QpID8gW3BhdGhdIDogY2FzdFBhdGgocGF0aCk7XG5cbiAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICAgIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgICB9XG4gICAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICAgKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAgICogc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICAgKi9cbiAgZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgICB2YXIgcmVzdWx0ID0ga2V5c0Z1bmMob2JqZWN0KTtcbiAgICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2AuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICAgKi9cbiAgZnVuY3Rpb24gYmFzZUdldFRhZyh2YWx1ZSkge1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAgICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IGtleSBUaGUga2V5IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGtleWAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBiYXNlSGFzSW4ob2JqZWN0LCBrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0ICE9IG51bGwgJiYga2V5IGluIE9iamVjdChvYmplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzRXF1YWxgIHdoaWNoIHN1cHBvcnRzIHBhcnRpYWwgY29tcGFyaXNvbnNcbiAgICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAgICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JpdG1hc2tdIFRoZSBiaXRtYXNrIG9mIGNvbXBhcmlzb24gZmxhZ3MuXG4gICAqICBUaGUgYml0bWFzayBtYXkgYmUgY29tcG9zZWQgb2YgdGhlIGZvbGxvd2luZyBmbGFnczpcbiAgICogICAgIDEgLSBVbm9yZGVyZWQgY29tcGFyaXNvblxuICAgKiAgICAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICAgKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spIHtcbiAgICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0KHZhbHVlKSAmJiAhaXNPYmplY3RMaWtlKG90aGVyKSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICAgIH1cbiAgICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYmFzZUlzRXF1YWwsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gICAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAgICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbYml0bWFza10gVGhlIGJpdG1hc2sgb2YgY29tcGFyaXNvbiBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGBcbiAgICogIGZvciBtb3JlIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykge1xuICAgIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgICAgb2JqVGFnID0gYXJyYXlUYWcsXG4gICAgICAgIG90aFRhZyA9IGFycmF5VGFnO1xuXG4gICAgaWYgKCFvYmpJc0Fycikge1xuICAgICAgb2JqVGFnID0gZ2V0VGFnKG9iamVjdCk7XG4gICAgICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgICB9XG4gICAgaWYgKCFvdGhJc0Fycikge1xuICAgICAgb3RoVGFnID0gZ2V0VGFnKG90aGVyKTtcbiAgICAgIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuICAgIH1cbiAgICB2YXIgb2JqSXNPYmogPSBvYmpUYWcgPT0gb2JqZWN0VGFnICYmICFpc0hvc3RPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgb3RoSXNPYmogPSBvdGhUYWcgPT0gb2JqZWN0VGFnICYmICFpc0hvc3RPYmplY3Qob3RoZXIpLFxuICAgICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gICAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spXG4gICAgICAgIDogZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCBvYmpUYWcsIGVxdWFsRnVuYywgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoIShiaXRtYXNrICYgUEFSVElBTF9DT01QQVJFX0ZMQUcpKSB7XG4gICAgICB2YXIgb2JqSXNXcmFwcGVkID0gb2JqSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdfX3dyYXBwZWRfXycpLFxuICAgICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgICB2YXIgb2JqVW53cmFwcGVkID0gb2JqSXNXcmFwcGVkID8gb2JqZWN0LnZhbHVlKCkgOiBvYmplY3QsXG4gICAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpVbndyYXBwZWQsIG90aFVud3JhcHBlZCwgY3VzdG9taXplciwgYml0bWFzaywgc3RhY2spO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzU2FtZVRhZykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNNYXRjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAgICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBiYXNlSXNNYXRjaChvYmplY3QsIHNvdXJjZSwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gICAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gIWxlbmd0aDtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIHZhciBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgICAgOiAhKGRhdGFbMF0gaW4gb2JqZWN0KVxuICAgICAgICAgICkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBkYXRhID0gbWF0Y2hEYXRhW2luZGV4XTtcbiAgICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgICAgc3JjVmFsdWUgPSBkYXRhWzFdO1xuXG4gICAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHN0YWNrID0gbmV3IFN0YWNrO1xuICAgICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBjdXN0b21pemVyLCBVTk9SREVSRURfQ09NUEFSRV9GTEFHIHwgUEFSVElBTF9DT01QQVJFX0ZMQUcsIHN0YWNrKVxuICAgICAgICAgICAgICA6IHJlc3VsdFxuICAgICAgICAgICAgKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbixcbiAgICogIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VJc05hdGl2ZSh2YWx1ZSkge1xuICAgIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgcGF0dGVybiA9IChpc0Z1bmN0aW9uKHZhbHVlKSB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSA/IHJlSXNOYXRpdmUgOiByZUlzSG9zdEN0b3I7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICAgIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgISF0eXBlZEFycmF5VGFnc1tvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKV07XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXRlcmF0ZWVgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IFt2YWx1ZT1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBpdGVyYXRlZS5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VJdGVyYXRlZSh2YWx1ZSkge1xuICAgIC8vIERvbid0IHN0b3JlIHRoZSBgdHlwZW9mYCByZXN1bHQgaW4gYSB2YXJpYWJsZSB0byBhdm9pZCBhIEpJVCBidWcgaW4gU2FmYXJpIDkuXG4gICAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpZGVudGl0eTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIGlzQXJyYXkodmFsdWUpXG4gICAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICAgIDogYmFzZU1hdGNoZXModmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICAgKi9cbiAgZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gICAgaWYgKCFpc1Byb3RvdHlwZShvYmplY3QpKSB7XG4gICAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzSW5gIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICAgKi9cbiAgZnVuY3Rpb24gYmFzZUtleXNJbihvYmplY3QpIHtcbiAgICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgICB9XG4gICAgdmFyIGlzUHJvdG8gPSBpc1Byb3RvdHlwZShvYmplY3QpLFxuICAgICAgICByZXN1bHQgPSBbXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGlmICghKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgc3BlYyBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICAgIHZhciBtYXRjaERhdGEgPSBnZXRNYXRjaERhdGEoc291cmNlKTtcbiAgICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gICAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gYmFzZU1hdGNoZXNQcm9wZXJ0eShwYXRoLCBzcmNWYWx1ZSkge1xuICAgIGlmIChpc0tleShwYXRoKSAmJiBpc1N0cmljdENvbXBhcmFibGUoc3JjVmFsdWUpKSB7XG4gICAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgICByZXR1cm4gKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgb2JqVmFsdWUgPT09IHNyY1ZhbHVlKVxuICAgICAgICA/IGhhc0luKG9iamVjdCwgcGF0aClcbiAgICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIHVuZGVmaW5lZCwgVU5PUkRFUkVEX0NPTVBBUkVfRkxBRyB8IFBBUlRJQUxfQ09NUEFSRV9GTEFHKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1lcmdlYCB3aXRob3V0IHN1cHBvcnQgZm9yIG11bHRpcGxlIHNvdXJjZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgbWVyZ2VkIHZhbHVlcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAgICogIGNvdW50ZXJwYXJ0cy5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gICAgaWYgKG9iamVjdCA9PT0gc291cmNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghKGlzQXJyYXkoc291cmNlKSB8fCBpc1R5cGVkQXJyYXkoc291cmNlKSkpIHtcbiAgICAgIHZhciBwcm9wcyA9IGJhc2VLZXlzSW4oc291cmNlKTtcbiAgICB9XG4gICAgYXJyYXlFYWNoKHByb3BzIHx8IHNvdXJjZSwgZnVuY3Rpb24oc3JjVmFsdWUsIGtleSkge1xuICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGtleSA9IHNyY1ZhbHVlO1xuICAgICAgICBzcmNWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgICAgaWYgKGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgICAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgICAgICBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBiYXNlTWVyZ2UsIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICAgICAgPyBjdXN0b21pemVyKG9iamVjdFtrZXldLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlTWVyZ2VgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAgICogZGVlcCBtZXJnZXMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAgICogcmVmZXJlbmNlcyB0byBiZSBtZXJnZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAgICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgc291cmNlIG9iamVjdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBtZXJnZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbWVyZ2VGdW5jIFRoZSBmdW5jdGlvbiB0byBtZXJnZSB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBzb3VyY2UgdmFsdWVzIGFuZCB0aGVpciBtZXJnZWRcbiAgICogIGNvdW50ZXJwYXJ0cy5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIG1lcmdlRnVuYywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgc3JjVmFsdWUgPSBzb3VyY2Vba2V5XSxcbiAgICAgICAgc3RhY2tlZCA9IHN0YWNrLmdldChzcmNWYWx1ZSk7XG5cbiAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgc3RhY2tlZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIChrZXkgKyAnJyksIG9iamVjdCwgc291cmNlLCBzdGFjaylcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGlzQ29tbW9uID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICAgIGlmIChpc0NvbW1vbikge1xuICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgIGlmIChpc0FycmF5KHNyY1ZhbHVlKSB8fCBpc1R5cGVkQXJyYXkoc3JjVmFsdWUpKSB7XG4gICAgICAgIGlmIChpc0FycmF5KG9ialZhbHVlKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNBcnJheUxpa2VPYmplY3Qob2JqVmFsdWUpKSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgICAgbmV3VmFsdWUgPSBiYXNlQ2xvbmUoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHNyY1ZhbHVlKSB8fCBpc0FyZ3VtZW50cyhzcmNWYWx1ZSkpIHtcbiAgICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICAgIG5ld1ZhbHVlID0gdG9QbGFpbk9iamVjdChvYmpWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCAoc3JjSW5kZXggJiYgaXNGdW5jdGlvbihvYmpWYWx1ZSkpKSB7XG4gICAgICAgICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICAgICAgICBuZXdWYWx1ZSA9IGJhc2VDbG9uZShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgbmV3VmFsdWUgPSBvYmpWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc0NvbW1vbikge1xuICAgICAgLy8gUmVjdXJzaXZlbHkgbWVyZ2Ugb2JqZWN0cyBhbmQgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICAgIG1lcmdlRnVuYyhuZXdWYWx1ZSwgc3JjVmFsdWUsIHNyY0luZGV4LCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10oc3JjVmFsdWUpO1xuICAgIH1cbiAgICBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCBuZXdWYWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD1mdW5jLmxlbmd0aC0xXSBUaGUgc3RhcnQgcG9zaXRpb24gb2YgdGhlIHJlc3QgcGFyYW1ldGVyLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VSZXN0KGZ1bmMsIHN0YXJ0KSB7XG4gICAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICAgIGFycmF5ID0gQXJyYXkobGVuZ3RoKTtcblxuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICAgIH1cbiAgICAgIGluZGV4ID0gLTE7XG4gICAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICAgIHdoaWxlICgrK2luZGV4IDwgc3RhcnQpIHtcbiAgICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgICAgfVxuICAgICAgb3RoZXJBcmdzW3N0YXJ0XSA9IGFycmF5O1xuICAgICAgcmV0dXJuIGFwcGx5KGZ1bmMsIHRoaXMsIG90aGVyQXJncyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAgICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAgICovXG4gIGZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAgIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgICByZXR1cm4gc3ltYm9sVG9TdHJpbmcgPyBzeW1ib2xUb1N0cmluZy5jYWxsKHZhbHVlKSA6ICcnO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICAgIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYXN0cyBgdmFsdWVgIHRvIGEgcGF0aCBhcnJheSBpZiBpdCdzIG5vdCBvbmUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICAgKi9cbiAgZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IHN0cmluZ1RvUGF0aCh2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNsb25lIG9mICBgYnVmZmVyYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtCdWZmZXJ9IGJ1ZmZlciBUaGUgYnVmZmVyIHRvIGNsb25lLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICAgKiBAcmV0dXJucyB7QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYnVmZmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgICBpZiAoaXNEZWVwKSB7XG4gICAgICByZXR1cm4gYnVmZmVyLnNsaWNlKCk7XG4gICAgfVxuICAgIHZhciByZXN1bHQgPSBuZXcgYnVmZmVyLmNvbnN0cnVjdG9yKGJ1ZmZlci5sZW5ndGgpO1xuICAgIGJ1ZmZlci5jb3B5KHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgYGFycmF5QnVmZmVyYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtBcnJheUJ1ZmZlcn0gYXJyYXlCdWZmZXIgVGhlIGFycmF5IGJ1ZmZlciB0byBjbG9uZS5cbiAgICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gY2xvbmVBcnJheUJ1ZmZlcihhcnJheUJ1ZmZlcikge1xuICAgIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gICAgbmV3IFVpbnQ4QXJyYXkocmVzdWx0KS5zZXQobmV3IFVpbnQ4QXJyYXkoYXJyYXlCdWZmZXIpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgZGF0YVZpZXdgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YVZpZXcgVGhlIGRhdGEgdmlldyB0byBjbG9uZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIGRhdGEgdmlldy5cbiAgICovXG4gIGZ1bmN0aW9uIGNsb25lRGF0YVZpZXcoZGF0YVZpZXcsIGlzRGVlcCkge1xuICAgIHZhciBidWZmZXIgPSBpc0RlZXAgPyBjbG9uZUFycmF5QnVmZmVyKGRhdGFWaWV3LmJ1ZmZlcikgOiBkYXRhVmlldy5idWZmZXI7XG4gICAgcmV0dXJuIG5ldyBkYXRhVmlldy5jb25zdHJ1Y3RvcihidWZmZXIsIGRhdGFWaWV3LmJ5dGVPZmZzZXQsIGRhdGFWaWV3LmJ5dGVMZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgbWFwYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIGNsb25lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIG1hcC5cbiAgICovXG4gIGZ1bmN0aW9uIGNsb25lTWFwKG1hcCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMobWFwVG9BcnJheShtYXApLCB0cnVlKSA6IG1hcFRvQXJyYXkobWFwKTtcbiAgICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZE1hcEVudHJ5LCBuZXcgbWFwLmNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHJlZ2V4cGAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSByZWdleHAgVGhlIHJlZ2V4cCB0byBjbG9uZS5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHJlZ2V4cC5cbiAgICovXG4gIGZ1bmN0aW9uIGNsb25lUmVnRXhwKHJlZ2V4cCkge1xuICAgIHZhciByZXN1bHQgPSBuZXcgcmVnZXhwLmNvbnN0cnVjdG9yKHJlZ2V4cC5zb3VyY2UsIHJlRmxhZ3MuZXhlYyhyZWdleHApKTtcbiAgICByZXN1bHQubGFzdEluZGV4ID0gcmVnZXhwLmxhc3RJbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgc2V0YC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHNldCBUaGUgc2V0IHRvIGNsb25lLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjbG9uZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNsb25lIHZhbHVlcy5cbiAgICogQHBhcmFtIHtib29sZWFufSBbaXNEZWVwXSBTcGVjaWZ5IGEgZGVlcCBjbG9uZS5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHNldC5cbiAgICovXG4gIGZ1bmN0aW9uIGNsb25lU2V0KHNldCwgaXNEZWVwLCBjbG9uZUZ1bmMpIHtcbiAgICB2YXIgYXJyYXkgPSBpc0RlZXAgPyBjbG9uZUZ1bmMoc2V0VG9BcnJheShzZXQpLCB0cnVlKSA6IHNldFRvQXJyYXkoc2V0KTtcbiAgICByZXR1cm4gYXJyYXlSZWR1Y2UoYXJyYXksIGFkZFNldEVudHJ5LCBuZXcgc2V0LmNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgdGhlIGBzeW1ib2xgIG9iamVjdC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IHN5bWJvbCBUaGUgc3ltYm9sIG9iamVjdCB0byBjbG9uZS5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHN5bWJvbCBvYmplY3QuXG4gICAqL1xuICBmdW5jdGlvbiBjbG9uZVN5bWJvbChzeW1ib2wpIHtcbiAgICByZXR1cm4gc3ltYm9sVmFsdWVPZiA/IE9iamVjdChzeW1ib2xWYWx1ZU9mLmNhbGwoc3ltYm9sKSkgOiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgY2xvbmUgb2YgYHR5cGVkQXJyYXlgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gdHlwZWRBcnJheSBUaGUgdHlwZWQgYXJyYXkgdG8gY2xvbmUuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNsb25lZCB0eXBlZCBhcnJheS5cbiAgICovXG4gIGZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgICB2YXIgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlcjtcbiAgICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3BpZXMgdGhlIHZhbHVlcyBvZiBgc291cmNlYCB0byBgYXJyYXlgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0FycmF5fSBzb3VyY2UgVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIGZyb20uXG4gICAqIEBwYXJhbSB7QXJyYXl9IFthcnJheT1bXV0gVGhlIGFycmF5IHRvIGNvcHkgdmFsdWVzIHRvLlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAgICovXG4gIGZ1bmN0aW9uIGNvcHlBcnJheShzb3VyY2UsIGFycmF5KSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZS5sZW5ndGg7XG5cbiAgICBhcnJheSB8fCAoYXJyYXkgPSBBcnJheShsZW5ndGgpKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gc291cmNlW2luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgLyoqXG4gICAqIENvcGllcyBwcm9wZXJ0aWVzIG9mIGBzb3VyY2VgIHRvIGBvYmplY3RgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb20uXG4gICAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICAgKiBAcGFyYW0ge09iamVjdH0gW29iamVjdD17fV0gVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgdG8uXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvcGllZCB2YWx1ZXMuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gICAqL1xuICBmdW5jdGlvbiBjb3B5T2JqZWN0KHNvdXJjZSwgcHJvcHMsIG9iamVjdCwgY3VzdG9taXplcikge1xuICAgIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuXG4gICAgICB2YXIgbmV3VmFsdWUgPSBjdXN0b21pemVyXG4gICAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCA/IHNvdXJjZVtrZXldIDogbmV3VmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvcGllcyBvd24gc3ltYm9sIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHN5bWJvbHMgZnJvbS5cbiAgICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBzeW1ib2xzIHRvLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICAgKi9cbiAgZnVuY3Rpb24gY29weVN5bWJvbHMoc291cmNlLCBvYmplY3QpIHtcbiAgICByZXR1cm4gY29weU9iamVjdChzb3VyY2UsIGdldFN5bWJvbHMoc291cmNlKSwgb2JqZWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYXNzaWduZXIgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICAgIHJldHVybiBiYXNlUmVzdChmdW5jdGlvbihvYmplY3QsIHNvdXJjZXMpIHtcbiAgICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPiAxID8gc291cmNlc1tsZW5ndGggLSAxXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgPyAobGVuZ3RoLS0sIGN1c3RvbWl6ZXIpXG4gICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICAgIGN1c3RvbWl6ZXIgPSBsZW5ndGggPCAzID8gdW5kZWZpbmVkIDogY3VzdG9taXplcjtcbiAgICAgICAgbGVuZ3RoID0gMTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICAgICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUJhc2VFYWNoKGVhY2hGdW5jLCBmcm9tUmlnaHQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgaXRlcmF0ZWUpIHtcbiAgICAgIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgICB9XG4gICAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiBlYWNoRnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG4gICAgICB9XG4gICAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMSxcbiAgICAgICAgICBpdGVyYWJsZSA9IE9iamVjdChjb2xsZWN0aW9uKTtcblxuICAgICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2luZGV4XSwgaW5kZXgsIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgICBwcm9wcyA9IGtleXNGdW5jKG9iamVjdCksXG4gICAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgICAgdmFyIGtleSA9IHByb3BzW2Zyb21SaWdodCA/IGxlbmd0aCA6ICsraW5kZXhdO1xuICAgICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gICAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gICAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgb2YgY29tcGFyaXNvbiBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGBcbiAgICogIGZvciBtb3JlIGRldGFpbHMuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBhcnJheWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGVxdWFsQXJyYXlzKGFycmF5LCBvdGhlciwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykge1xuICAgIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgUEFSVElBTF9DT01QQVJFX0ZMQUcsXG4gICAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gICAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICAgIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgICAgc2VlbiA9IChiaXRtYXNrICYgVU5PUkRFUkVEX0NPTVBBUkVfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgICBzdGFjay5zZXQoYXJyYXksIG90aGVyKTtcbiAgICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAgIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgICB3aGlsZSAoKytpbmRleCA8IGFyckxlbmd0aCkge1xuICAgICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgICA6IGN1c3RvbWl6ZXIoYXJyVmFsdWUsIG90aFZhbHVlLCBpbmRleCwgYXJyYXksIG90aGVyLCBzdGFjayk7XG4gICAgICB9XG4gICAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoY29tcGFyZWQpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIGFycmF5cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgaWYgKHNlZW4pIHtcbiAgICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgICBpZiAoIXNlZW4uaGFzKG90aEluZGV4KSAmJlxuICAgICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlZW4uYWRkKG90aEluZGV4KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpIHtcbiAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghKFxuICAgICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKVxuICAgICAgICAgICkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICAgIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gICAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gICAqXG4gICAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAgICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICAgKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICAgKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBvZiBjb21wYXJpc29uIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYFxuICAgKiAgZm9yIG1vcmUgZGV0YWlscy5cbiAgICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykge1xuICAgIHN3aXRjaCAodGFnKSB7XG4gICAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgICAob2JqZWN0LmJ5dGVPZmZzZXQgIT0gb3RoZXIuYnl0ZU9mZnNldCkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0ID0gb2JqZWN0LmJ1ZmZlcjtcbiAgICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICAgIGlmICgob2JqZWN0LmJ5dGVMZW5ndGggIT0gb3RoZXIuYnl0ZUxlbmd0aCkgfHxcbiAgICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgY2FzZSBib29sVGFnOlxuICAgICAgY2FzZSBkYXRlVGFnOlxuICAgICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAgIC8vIEludmFsaWQgZGF0ZXMgYXJlIGNvZXJjZWQgdG8gYE5hTmAuXG4gICAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgICByZXR1cm4gb2JqZWN0Lm5hbWUgPT0gb3RoZXIubmFtZSAmJiBvYmplY3QubWVzc2FnZSA9PSBvdGhlci5tZXNzYWdlO1xuXG4gICAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgICAvLyBDb2VyY2UgcmVnZXhlcyB0byBzdHJpbmdzIGFuZCB0cmVhdCBzdHJpbmdzLCBwcmltaXRpdmVzIGFuZCBvYmplY3RzLFxuICAgICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuXG4gICAgICBjYXNlIG1hcFRhZzpcbiAgICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgICBjYXNlIHNldFRhZzpcbiAgICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBQQVJUSUFMX0NPTVBBUkVfRkxBRztcbiAgICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICAgIGlmIChvYmplY3Quc2l6ZSAhPSBvdGhlci5zaXplICYmICFpc1BhcnRpYWwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXNzdW1lIGN5Y2xpYyB2YWx1ZXMgYXJlIGVxdWFsLlxuICAgICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgICAgICB9XG4gICAgICAgIGJpdG1hc2sgfD0gVU5PUkRFUkVEX0NPTVBBUkVfRkxBRztcblxuICAgICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgZXF1YWxGdW5jLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjayk7XG4gICAgICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgICAgaWYgKHN5bWJvbFZhbHVlT2YpIHtcbiAgICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAgICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAgICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIG9mIGNvbXBhcmlzb24gZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgXG4gICAqICBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGJpdG1hc2ssIHN0YWNrKSB7XG4gICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBQQVJUSUFMX0NPTVBBUkVfRkxBRyxcbiAgICAgICAgb2JqUHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgICAgb3RoUHJvcHMgPSBrZXlzKG90aGVyKSxcbiAgICAgICAgb3RoTGVuZ3RoID0gb3RoUHJvcHMubGVuZ3RoO1xuXG4gICAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gICAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICAgIHZhciBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgc3RhY2suc2V0KG90aGVyLCBvYmplY3QpO1xuXG4gICAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICAgIHdoaWxlICgrK2luZGV4IDwgb2JqTGVuZ3RoKSB7XG4gICAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2tleV07XG5cbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICAgID8gY3VzdG9taXplcihvdGhWYWx1ZSwgb2JqVmFsdWUsIGtleSwgb3RoZXIsIG9iamVjdCwgc3RhY2spXG4gICAgICAgICAgOiBjdXN0b21pemVyKG9ialZhbHVlLCBvdGhWYWx1ZSwga2V5LCBvYmplY3QsIG90aGVyLCBzdGFjayk7XG4gICAgICB9XG4gICAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICAgIGlmICghKGNvbXBhcmVkID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBiaXRtYXNrLCBzdGFjaykpXG4gICAgICAgICAgICA6IGNvbXBhcmVkXG4gICAgICAgICAgKSkge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgJiYgIXNraXBDdG9yKSB7XG4gICAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBvdGhDdG9yID0gb3RoZXIuY29uc3RydWN0b3I7XG5cbiAgICAgIC8vIE5vbiBgT2JqZWN0YCBvYmplY3QgaW5zdGFuY2VzIHdpdGggZGlmZmVyZW50IGNvbnN0cnVjdG9ycyBhcmUgbm90IGVxdWFsLlxuICAgICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAgICgnY29uc3RydWN0b3InIGluIG9iamVjdCAmJiAnY29uc3RydWN0b3InIGluIG90aGVyKSAmJlxuICAgICAgICAgICEodHlwZW9mIG9iakN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvYmpDdG9yIGluc3RhbmNlb2Ygb2JqQ3RvciAmJlxuICAgICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHN0YWNrWydkZWxldGUnXShvYmplY3QpO1xuICAgIHN0YWNrWydkZWxldGUnXShvdGhlcik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRBbGxLZXlzKG9iamVjdCkge1xuICAgIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGFwcHJvcHJpYXRlIFwiaXRlcmF0ZWVcIiBmdW5jdGlvbi4gSWYgYF8uaXRlcmF0ZWVgIGlzIGN1c3RvbWl6ZWQsXG4gICAqIHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgY3VzdG9tIG1ldGhvZCwgb3RoZXJ3aXNlIGl0IHJldHVybnMgYGJhc2VJdGVyYXRlZWAuXG4gICAqIElmIGFyZ3VtZW50cyBhcmUgcHJvdmlkZWQsIHRoZSBjaG9zZW4gZnVuY3Rpb24gaXMgaW52b2tlZCB3aXRoIHRoZW0gYW5kXG4gICAqIGl0cyByZXN1bHQgaXMgcmV0dXJuZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gW3ZhbHVlXSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhbiBpdGVyYXRlZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFthcml0eV0gVGhlIGFyaXR5IG9mIHRoZSBjcmVhdGVkIGl0ZXJhdGVlLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGNob3NlbiBmdW5jdGlvbiBvciBpdHMgcmVzdWx0LlxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0ZWUoKSB7XG4gICAgdmFyIHJlc3VsdCA9IGxvZGFzaC5pdGVyYXRlZSB8fCBpdGVyYXRlZTtcbiAgICByZXN1bHQgPSByZXN1bHQgPT09IGl0ZXJhdGVlID8gYmFzZUl0ZXJhdGVlIDogcmVzdWx0O1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID8gcmVzdWx0KGFyZ3VtZW50c1swXSwgYXJndW1lbnRzWzFdKSA6IHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBkYXRhIGZvciBgbWFwYC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG1hcCBUaGUgbWFwIHRvIHF1ZXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICAgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gICAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gICAgcmV0dXJuIGlzS2V5YWJsZShrZXkpXG4gICAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgICAgOiBkYXRhLm1hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gICAqL1xuICBmdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gICAgdmFyIHJlc3VsdCA9IGtleXMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcmVzdWx0Lmxlbmd0aDtcblxuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgdmFyIGtleSA9IHJlc3VsdFtsZW5ndGhdLFxuICAgICAgICAgIHZhbHVlID0gb2JqZWN0W2tleV07XG5cbiAgICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIG5hdGl2ZSBmdW5jdGlvbiBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIG1ldGhvZCB0byBnZXQuXG4gICAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAgICovXG4gIGZ1bmN0aW9uIGdldE5hdGl2ZShvYmplY3QsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgICByZXR1cm4gYmFzZUlzTmF0aXZlKHZhbHVlKSA/IHZhbHVlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHN5bWJvbCBwcm9wZXJ0aWVzIG9mIGBvYmplY3RgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gICAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2Ygc3ltYm9scy5cbiAgICovXG4gIHZhciBnZXRTeW1ib2xzID0gbmF0aXZlR2V0U3ltYm9scyA/IG92ZXJBcmcobmF0aXZlR2V0U3ltYm9scywgT2JqZWN0KSA6IHN0dWJBcnJheTtcblxuICAvKipcbiAgICogR2V0cyB0aGUgYHRvU3RyaW5nVGFnYCBvZiBgdmFsdWVgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAgICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAgICovXG4gIHZhciBnZXRUYWcgPSBiYXNlR2V0VGFnO1xuXG4gIC8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExLFxuICAvLyBmb3IgZGF0YSB2aWV3cyBpbiBFZGdlIDwgMTQsIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzLlxuICBpZiAoKERhdGFWaWV3ICYmIGdldFRhZyhuZXcgRGF0YVZpZXcobmV3IEFycmF5QnVmZmVyKDEpKSkgIT0gZGF0YVZpZXdUYWcpIHx8XG4gICAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgICAoUHJvbWlzZSAmJiBnZXRUYWcoUHJvbWlzZS5yZXNvbHZlKCkpICE9IHByb21pc2VUYWcpIHx8XG4gICAgICAoU2V0ICYmIGdldFRhZyhuZXcgU2V0KSAhPSBzZXRUYWcpIHx8XG4gICAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gICAgZ2V0VGFnID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhciByZXN1bHQgPSBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSxcbiAgICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICAgIGN0b3JTdHJpbmcgPSBDdG9yID8gdG9Tb3VyY2UoQ3RvcikgOiB1bmRlZmluZWQ7XG5cbiAgICAgIGlmIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIHN3aXRjaCAoY3RvclN0cmluZykge1xuICAgICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgICAgY2FzZSBtYXBDdG9yU3RyaW5nOiByZXR1cm4gbWFwVGFnO1xuICAgICAgICAgIGNhc2UgcHJvbWlzZUN0b3JTdHJpbmc6IHJldHVybiBwcm9taXNlVGFnO1xuICAgICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgICBjYXNlIHdlYWtNYXBDdG9yU3RyaW5nOiByZXR1cm4gd2Vha01hcFRhZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgcGF0aGAgZXhpc3RzIG9uIGBvYmplY3RgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gICAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgICBwYXRoID0gaXNLZXkocGF0aCwgb2JqZWN0KSA/IFtwYXRoXSA6IGNhc3RQYXRoKHBhdGgpO1xuXG4gICAgdmFyIHJlc3VsdCxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICAgIGlmICghKHJlc3VsdCA9IG9iamVjdCAhPSBudWxsICYmIGhhc0Z1bmMob2JqZWN0LCBrZXkpKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdFtrZXldO1xuICAgIH1cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gb2JqZWN0ID8gb2JqZWN0Lmxlbmd0aCA6IDA7XG4gICAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW4gYXJyYXkgY2xvbmUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjbG9uZS5cbiAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAgICovXG4gIGZ1bmN0aW9uIGluaXRDbG9uZUFycmF5KGFycmF5KSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgICAgcmVzdWx0ID0gYXJyYXkuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICAgIC8vIEFkZCBwcm9wZXJ0aWVzIGFzc2lnbmVkIGJ5IGBSZWdFeHAjZXhlY2AuXG4gICAgaWYgKGxlbmd0aCAmJiB0eXBlb2YgYXJyYXlbMF0gPT0gJ3N0cmluZycgJiYgaGFzT3duUHJvcGVydHkuY2FsbChhcnJheSwgJ2luZGV4JykpIHtcbiAgICAgIHJlc3VsdC5pbmRleCA9IGFycmF5LmluZGV4O1xuICAgICAgcmVzdWx0LmlucHV0ID0gYXJyYXkuaW5wdXQ7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICAgKi9cbiAgZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICAgIHJldHVybiAodHlwZW9mIG9iamVjdC5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmICFpc1Byb3RvdHlwZShvYmplY3QpKVxuICAgICAgPyBiYXNlQ3JlYXRlKGdldFByb3RvdHlwZShvYmplY3QpKVxuICAgICAgOiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBhbiBvYmplY3QgY2xvbmUgYmFzZWQgb24gaXRzIGB0b1N0cmluZ1RhZ2AuXG4gICAqXG4gICAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY2xvbmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gICAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdCB0byBjbG9uZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2xvbmVGdW5jIFRoZSBmdW5jdGlvbiB0byBjbG9uZSB2YWx1ZXMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGluaXRpYWxpemVkIGNsb25lLlxuICAgKi9cbiAgZnVuY3Rpb24gaW5pdENsb25lQnlUYWcob2JqZWN0LCB0YWcsIGNsb25lRnVuYywgaXNEZWVwKSB7XG4gICAgdmFyIEN0b3IgPSBvYmplY3QuY29uc3RydWN0b3I7XG4gICAgc3dpdGNoICh0YWcpIHtcbiAgICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICAgIHJldHVybiBjbG9uZUFycmF5QnVmZmVyKG9iamVjdCk7XG5cbiAgICAgIGNhc2UgYm9vbFRhZzpcbiAgICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgICAgcmV0dXJuIG5ldyBDdG9yKCtvYmplY3QpO1xuXG4gICAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgICByZXR1cm4gY2xvbmVEYXRhVmlldyhvYmplY3QsIGlzRGVlcCk7XG5cbiAgICAgIGNhc2UgZmxvYXQzMlRhZzogY2FzZSBmbG9hdDY0VGFnOlxuICAgICAgY2FzZSBpbnQ4VGFnOiBjYXNlIGludDE2VGFnOiBjYXNlIGludDMyVGFnOlxuICAgICAgY2FzZSB1aW50OFRhZzogY2FzZSB1aW50OENsYW1wZWRUYWc6IGNhc2UgdWludDE2VGFnOiBjYXNlIHVpbnQzMlRhZzpcbiAgICAgICAgcmV0dXJuIGNsb25lVHlwZWRBcnJheShvYmplY3QsIGlzRGVlcCk7XG5cbiAgICAgIGNhc2UgbWFwVGFnOlxuICAgICAgICByZXR1cm4gY2xvbmVNYXAob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICAgIGNhc2UgbnVtYmVyVGFnOlxuICAgICAgY2FzZSBzdHJpbmdUYWc6XG4gICAgICAgIHJldHVybiBuZXcgQ3RvcihvYmplY3QpO1xuXG4gICAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICAgICAgcmV0dXJuIGNsb25lUmVnRXhwKG9iamVjdCk7XG5cbiAgICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgICByZXR1cm4gY2xvbmVTZXQob2JqZWN0LCBpc0RlZXAsIGNsb25lRnVuYyk7XG5cbiAgICAgIGNhc2Ugc3ltYm9sVGFnOlxuICAgICAgICByZXR1cm4gY2xvbmVTeW1ib2wob2JqZWN0KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGluZGV4LCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gICAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgICAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSAmJlxuICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZ2l2ZW4gYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSB2YWx1ZSBhcmd1bWVudC5cbiAgICogQHBhcmFtIHsqfSBpbmRleCBUaGUgcG90ZW50aWFsIGl0ZXJhdGVlIGluZGV4IG9yIGtleSBhcmd1bWVudC5cbiAgICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYXJndW1lbnRzIGFyZSBmcm9tIGFuIGl0ZXJhdGVlIGNhbGwsXG4gICAqICBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc0l0ZXJhdGVlQ2FsbCh2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICAgIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBpbmRleDtcbiAgICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICAgID8gKGlzQXJyYXlMaWtlKG9iamVjdCkgJiYgaXNJbmRleChpbmRleCwgb2JqZWN0Lmxlbmd0aCkpXG4gICAgICAgICAgOiAodHlwZSA9PSAnc3RyaW5nJyAmJiBpbmRleCBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGVxKG9iamVjdFtpbmRleF0sIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICAgIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgIHZhbHVlID09IG51bGwgfHwgaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkgfHwgIXJlSXNEZWVwUHJvcC50ZXN0KHZhbHVlKSB8fFxuICAgICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3IgdXNlIGFzIHVuaXF1ZSBvYmplY3Qga2V5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGlzS2V5YWJsZSh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgICA/ICh2YWx1ZSAhPT0gJ19fcHJvdG9fXycpXG4gICAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYGZ1bmNgIGlzIG1hc2tlZCwgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICAgIHJldHVybiAhIW1hc2tTcmNLZXkgJiYgKG1hc2tTcmNLZXkgaW4gZnVuYyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvdG90eXBlLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBmdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICAgIHZhciBDdG9yID0gdmFsdWUgJiYgdmFsdWUuY29uc3RydWN0b3IsXG4gICAgICAgIHByb3RvID0gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3Rvci5wcm90b3R5cGUpIHx8IG9iamVjdFByb3RvO1xuXG4gICAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICAgKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAgICovXG4gIGZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAgICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gICAqIEBwYXJhbSB7Kn0gc3JjVmFsdWUgVGhlIHZhbHVlIHRvIG1hdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICAgKi9cbiAgZnVuY3Rpb24gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUoa2V5LCBzcmNWYWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAgIChzcmNWYWx1ZSAhPT0gdW5kZWZpbmVkIHx8IChrZXkgaW4gT2JqZWN0KG9iamVjdCkpKTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZVxuICAgKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gICAqIGV4Y2VwdCB0aGF0IGl0IGluY2x1ZGVzIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAgICovXG4gIGZ1bmN0aW9uIG5hdGl2ZUtleXNJbihvYmplY3QpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBhIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gICAqL1xuICB2YXIgc3RyaW5nVG9QYXRoID0gbWVtb2l6ZShmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGlmIChyZUxlYWRpbmdEb3QudGVzdChzdHJpbmcpKSB7XG4gICAgICByZXN1bHQucHVzaCgnJyk7XG4gICAgfVxuICAgIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdHJpbmcpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHF1b3RlID8gc3RyaW5nLnJlcGxhY2UocmVFc2NhcGVDaGFyLCAnJDEnKSA6IChudW1iZXIgfHwgbWF0Y2gpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcblxuICAvKipcbiAgICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICAgKi9cbiAgZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICAgIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBwcm9jZXNzLlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAgICovXG4gIGZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGFycmF5IHdpdGggYWxsIGZhbHNleSB2YWx1ZXMgcmVtb3ZlZC4gVGhlIHZhbHVlcyBgZmFsc2VgLCBgbnVsbGAsXG4gICAqIGAwYCwgYFwiXCJgLCBgdW5kZWZpbmVkYCwgYW5kIGBOYU5gIGFyZSBmYWxzZXkuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIF9cbiAgICogQHNpbmNlIDAuMS4wXG4gICAqIEBjYXRlZ29yeSBBcnJheVxuICAgKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFjdC5cbiAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBfLmNvbXBhY3QoWzAsIDEsIGZhbHNlLCAyLCAnJywgM10pO1xuICAgKiAvLyA9PiBbMSwgMiwgM11cbiAgICovXG4gIGZ1bmN0aW9uIGNvbXBhY3QoYXJyYXkpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gYXJyYXkgPyBhcnJheS5sZW5ndGggOiAwLFxuICAgICAgICByZXNJbmRleCA9IDAsXG4gICAgICAgIHJlc3VsdCA9IFtdO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKipcbiAgICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBlbGVtZW50LlxuICAgKiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICAgKiBJdGVyYXRlZSBmdW5jdGlvbnMgbWF5IGV4aXQgaXRlcmF0aW9uIGVhcmx5IGJ5IGV4cGxpY2l0bHkgcmV0dXJuaW5nIGBmYWxzZWAuXG4gICAqXG4gICAqICoqTm90ZToqKiBBcyB3aXRoIG90aGVyIFwiQ29sbGVjdGlvbnNcIiBtZXRob2RzLCBvYmplY3RzIHdpdGggYSBcImxlbmd0aFwiXG4gICAqIHByb3BlcnR5IGFyZSBpdGVyYXRlZCBsaWtlIGFycmF5cy4gVG8gYXZvaWQgdGhpcyBiZWhhdmlvciB1c2UgYF8uZm9ySW5gXG4gICAqIG9yIGBfLmZvck93bmAgZm9yIG9iamVjdCBpdGVyYXRpb24uXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIF9cbiAgICogQHNpbmNlIDAuMS4wXG4gICAqIEBhbGlhcyBlYWNoXG4gICAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gICAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gICAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICAgKiBAc2VlIF8uZm9yRWFjaFJpZ2h0XG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIF8oWzEsIDJdKS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAqICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgKiB9KTtcbiAgICogLy8gPT4gTG9ncyBgMWAgdGhlbiBgMmAuXG4gICAqXG4gICAqIF8uZm9yRWFjaCh7ICdhJzogMSwgJ2InOiAyIH0sIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICogICBjb25zb2xlLmxvZyhrZXkpO1xuICAgKiB9KTtcbiAgICogLy8gPT4gTG9ncyAnYScgdGhlbiAnYicgKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZCkuXG4gICAqL1xuICBmdW5jdGlvbiBmb3JFYWNoKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlFYWNoIDogYmFzZUVhY2g7XG4gICAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgZ2V0SXRlcmF0ZWUoaXRlcmF0ZWUsIDMpKTtcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAgICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICAgKiBhcmd1bWVudHMgcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uLiBCeSBkZWZhdWx0LCB0aGUgZmlyc3QgYXJndW1lbnRcbiAgICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAgICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gICAqXG4gICAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAgICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gICAqIGNvbnN0cnVjdG9yIHdpdGggb25lIHdob3NlIGluc3RhbmNlcyBpbXBsZW1lbnQgdGhlXG4gICAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gICAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcmVzb2x2ZXJdIFRoZSBmdW5jdGlvbiB0byByZXNvbHZlIHRoZSBjYWNoZSBrZXkuXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICAgKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gICAqXG4gICAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICAgKiB2YWx1ZXMob2JqZWN0KTtcbiAgICogLy8gPT4gWzEsIDJdXG4gICAqXG4gICAqIHZhbHVlcyhvdGhlcik7XG4gICAqIC8vID0+IFszLCA0XVxuICAgKlxuICAgKiBvYmplY3QuYSA9IDI7XG4gICAqIHZhbHVlcyhvYmplY3QpO1xuICAgKiAvLyA9PiBbMSwgMl1cbiAgICpcbiAgICogLy8gTW9kaWZ5IHRoZSByZXN1bHQgY2FjaGUuXG4gICAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAgICogdmFsdWVzKG9iamVjdCk7XG4gICAqIC8vID0+IFsnYScsICdiJ11cbiAgICpcbiAgICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAgICogXy5tZW1vaXplLkNhY2hlID0gV2Vha01hcDtcbiAgICovXG4gIGZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJyB8fCAocmVzb2x2ZXIgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gICAgfVxuICAgIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgICAgaWYgKGNhY2hlLmhhcyhrZXkpKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICAgIH1cbiAgICAgIHZhciByZXN1bHQgPSBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG4gIH1cblxuICAvLyBBc3NpZ24gY2FjaGUgdG8gYF8ubWVtb2l6ZWAuXG4gIG1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBzaGFsbG93IGNsb25lIG9mIGB2YWx1ZWAuXG4gICAqXG4gICAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uIHRoZVxuICAgKiBbc3RydWN0dXJlZCBjbG9uZSBhbGdvcml0aG1dKGh0dHBzOi8vbWRuLmlvL1N0cnVjdHVyZWRfY2xvbmVfYWxnb3JpdGhtKVxuICAgKiBhbmQgc3VwcG9ydHMgY2xvbmluZyBhcnJheXMsIGFycmF5IGJ1ZmZlcnMsIGJvb2xlYW5zLCBkYXRlIG9iamVjdHMsIG1hcHMsXG4gICAqIG51bWJlcnMsIGBPYmplY3RgIG9iamVjdHMsIHJlZ2V4ZXMsIHNldHMsIHN0cmluZ3MsIHN5bWJvbHMsIGFuZCB0eXBlZFxuICAgKiBhcnJheXMuIFRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0aWVzIG9mIGBhcmd1bWVudHNgIG9iamVjdHMgYXJlIGNsb25lZFxuICAgKiBhcyBwbGFpbiBvYmplY3RzLiBBbiBlbXB0eSBvYmplY3QgaXMgcmV0dXJuZWQgZm9yIHVuY2xvbmVhYmxlIHZhbHVlcyBzdWNoXG4gICAqIGFzIGVycm9yIG9iamVjdHMsIGZ1bmN0aW9ucywgRE9NIG5vZGVzLCBhbmQgV2Vha01hcHMuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIF9cbiAgICogQHNpbmNlIDAuMS4wXG4gICAqIEBjYXRlZ29yeSBMYW5nXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNsb25lLlxuICAgKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgY2xvbmVkIHZhbHVlLlxuICAgKiBAc2VlIF8uY2xvbmVEZWVwXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIHZhciBvYmplY3RzID0gW3sgJ2EnOiAxIH0sIHsgJ2InOiAyIH1dO1xuICAgKlxuICAgKiB2YXIgc2hhbGxvdyA9IF8uY2xvbmUob2JqZWN0cyk7XG4gICAqIGNvbnNvbGUubG9nKHNoYWxsb3dbMF0gPT09IG9iamVjdHNbMF0pO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqL1xuICBmdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICAgIHJldHVybiBiYXNlQ2xvbmUodmFsdWUsIGZhbHNlLCB0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhXG4gICAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gICAqIGNvbXBhcmlzb24gYmV0d2VlbiB0d28gdmFsdWVzIHRvIGRldGVybWluZSBpZiB0aGV5IGFyZSBlcXVpdmFsZW50LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSA0LjAuMFxuICAgKiBAY2F0ZWdvcnkgTGFuZ1xuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICAgKiBAcGFyYW0geyp9IG90aGVyIFRoZSBvdGhlciB2YWx1ZSB0byBjb21wYXJlLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAgICogdmFyIG90aGVyID0geyAnYSc6IDEgfTtcbiAgICpcbiAgICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICpcbiAgICogXy5lcSgnYScsICdhJyk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICpcbiAgICogXy5lcShOYU4sIE5hTik7XG4gICAqIC8vID0+IHRydWVcbiAgICovXG4gIGZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gb3RoZXIgfHwgKHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXIpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGxpa2VseSBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIF9cbiAgICogQHNpbmNlIDAuMS4wXG4gICAqIEBjYXRlZ29yeSBMYW5nXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gICAqICBlbHNlIGBmYWxzZWAuXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICAgKiAvLyA9PiBmYWxzZVxuICAgKi9cbiAgZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgICAvLyBTYWZhcmkgOC4xIG1ha2VzIGBhcmd1bWVudHMuY2FsbGVlYCBlbnVtZXJhYmxlIGluIHN0cmljdCBtb2RlLlxuICAgIHJldHVybiBpc0FycmF5TGlrZU9iamVjdCh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgICAoIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKSB8fCBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBhcmdzVGFnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKiBAY2F0ZWdvcnkgTGFuZ1xuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICAgKiAvLyA9PiBmYWxzZVxuICAgKlxuICAgKiBfLmlzQXJyYXkoJ2FiYycpO1xuICAgKiAvLyA9PiBmYWxzZVxuICAgKlxuICAgKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICovXG4gIHZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICAgKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gICAqIGVxdWFsIHRvIGAwYCBhbmQgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIGBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUmAuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIF9cbiAgICogQHNpbmNlIDQuMC4wXG4gICAqIEBjYXRlZ29yeSBMYW5nXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAgICogLy8gPT4gdHJ1ZVxuICAgKlxuICAgKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICovXG4gIGZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5pc0FycmF5TGlrZWAgZXhjZXB0IHRoYXQgaXQgYWxzbyBjaGVja3MgaWYgYHZhbHVlYFxuICAgKiBpcyBhbiBvYmplY3QuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIF9cbiAgICogQHNpbmNlIDQuMC4wXG4gICAqIEBjYXRlZ29yeSBMYW5nXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAgICogIGVsc2UgYGZhbHNlYC5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogXy5pc0FycmF5TGlrZU9iamVjdChbMSwgMiwgM10pO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaXNBcnJheUxpa2VPYmplY3QoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5pc0FycmF5TGlrZU9iamVjdCgnYWJjJyk7XG4gICAqIC8vID0+IGZhbHNlXG4gICAqXG4gICAqIF8uaXNBcnJheUxpa2VPYmplY3QoXy5ub29wKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICovXG4gIGZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSA0LjMuMFxuICAgKiBAY2F0ZWdvcnkgTGFuZ1xuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAgICogLy8gPT4gdHJ1ZVxuICAgKlxuICAgKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICovXG4gIHZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYW4gZW1wdHkgb2JqZWN0LCBjb2xsZWN0aW9uLCBtYXAsIG9yIHNldC5cbiAgICpcbiAgICogT2JqZWN0cyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgbm8gb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkXG4gICAqIHByb3BlcnRpZXMuXG4gICAqXG4gICAqIEFycmF5LWxpa2UgdmFsdWVzIHN1Y2ggYXMgYGFyZ3VtZW50c2Agb2JqZWN0cywgYXJyYXlzLCBidWZmZXJzLCBzdHJpbmdzLCBvclxuICAgKiBqUXVlcnktbGlrZSBjb2xsZWN0aW9ucyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgYSBgbGVuZ3RoYCBvZiBgMGAuXG4gICAqIFNpbWlsYXJseSwgbWFwcyBhbmQgc2V0cyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgYSBgc2l6ZWAgb2YgYDBgLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKiBAY2F0ZWdvcnkgTGFuZ1xuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZW1wdHksIGVsc2UgYGZhbHNlYC5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogXy5pc0VtcHR5KG51bGwpO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaXNFbXB0eSh0cnVlKTtcbiAgICogLy8gPT4gdHJ1ZVxuICAgKlxuICAgKiBfLmlzRW1wdHkoMSk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5pc0VtcHR5KFsxLCAyLCAzXSk7XG4gICAqIC8vID0+IGZhbHNlXG4gICAqXG4gICAqIF8uaXNFbXB0eSh7ICdhJzogMSB9KTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICovXG4gIGZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgICBpZiAoaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgICAgIChpc0FycmF5KHZhbHVlKSB8fCB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHxcbiAgICAgICAgICB0eXBlb2YgdmFsdWUuc3BsaWNlID09ICdmdW5jdGlvbicgfHwgaXNCdWZmZXIodmFsdWUpIHx8IGlzQXJndW1lbnRzKHZhbHVlKSkpIHtcbiAgICAgIHJldHVybiAhdmFsdWUubGVuZ3RoO1xuICAgIH1cbiAgICB2YXIgdGFnID0gZ2V0VGFnKHZhbHVlKTtcbiAgICBpZiAodGFnID09IG1hcFRhZyB8fCB0YWcgPT0gc2V0VGFnKSB7XG4gICAgICByZXR1cm4gIXZhbHVlLnNpemU7XG4gICAgfVxuICAgIGlmIChub25FbnVtU2hhZG93cyB8fCBpc1Byb3RvdHlwZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiAhbmF0aXZlS2V5cyh2YWx1ZSkubGVuZ3RoO1xuICAgIH1cbiAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrZXkpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBGdW5jdGlvbmAgb2JqZWN0LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKiBAY2F0ZWdvcnkgTGFuZ1xuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBfLmlzRnVuY3Rpb24oXyk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5pc0Z1bmN0aW9uKC9hYmMvKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICovXG4gIGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgICAvLyBpbiBTYWZhcmkgOC05IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gICAgdmFyIHRhZyA9IGlzT2JqZWN0KHZhbHVlKSA/IG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gICAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWc7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAgICpcbiAgICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAgICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyT2YgX1xuICAgKiBAc2luY2UgNC4wLjBcbiAgICogQGNhdGVnb3J5IExhbmdcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgbGVuZ3RoLCBlbHNlIGBmYWxzZWAuXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIF8uaXNMZW5ndGgoMyk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5pc0xlbmd0aChOdW1iZXIuTUlOX1ZBTFVFKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICpcbiAgICogXy5pc0xlbmd0aChJbmZpbml0eSk7XG4gICAqIC8vID0+IGZhbHNlXG4gICAqXG4gICAqIF8uaXNMZW5ndGgoJzMnKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICovXG4gIGZ1bmN0aW9uIGlzTGVuZ3RoKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICAgKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gICAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyT2YgX1xuICAgKiBAc2luY2UgMC4xLjBcbiAgICogQGNhdGVnb3J5IExhbmdcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBfLmlzT2JqZWN0KHt9KTtcbiAgICogLy8gPT4gdHJ1ZVxuICAgKlxuICAgKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5pc09iamVjdChfLm5vb3ApO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaXNPYmplY3QobnVsbCk7XG4gICAqIC8vID0+IGZhbHNlXG4gICAqL1xuICBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICAgIHJldHVybiAhIXZhbHVlICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gICAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyT2YgX1xuICAgKiBAc2luY2UgNC4wLjBcbiAgICogQGNhdGVnb3J5IExhbmdcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAgICogLy8gPT4gdHJ1ZVxuICAgKlxuICAgKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gICAqIC8vID0+IGZhbHNlXG4gICAqXG4gICAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICAgKiAvLyA9PiBmYWxzZVxuICAgKi9cbiAgZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gICAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAgICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSAwLjguMFxuICAgKiBAY2F0ZWdvcnkgTGFuZ1xuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogZnVuY3Rpb24gRm9vKCkge1xuICAgKiAgIHRoaXMuYSA9IDE7XG4gICAqIH1cbiAgICpcbiAgICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICAgKiAvLyA9PiBmYWxzZVxuICAgKlxuICAgKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICpcbiAgICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqL1xuICBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gICAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8XG4gICAgICAgIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpICE9IG9iamVjdFRhZyB8fCBpc0hvc3RPYmplY3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBwcm90byA9IGdldFByb3RvdHlwZSh2YWx1ZSk7XG4gICAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gKHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiZcbiAgICAgIEN0b3IgaW5zdGFuY2VvZiBDdG9yICYmIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSA0LjAuMFxuICAgKiBAY2F0ZWdvcnkgTGFuZ1xuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAgICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICAgKiAvLyA9PiBmYWxzZVxuICAgKi9cbiAgZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSB0eXBlZCBhcnJheS5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyT2YgX1xuICAgKiBAc2luY2UgMy4wLjBcbiAgICogQGNhdGVnb3J5IExhbmdcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogXy5pc1R5cGVkQXJyYXkobmV3IFVpbnQ4QXJyYXkpO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaXNUeXBlZEFycmF5KFtdKTtcbiAgICogLy8gPT4gZmFsc2VcbiAgICovXG4gIHZhciBpc1R5cGVkQXJyYXkgPSBub2RlSXNUeXBlZEFycmF5ID8gYmFzZVVuYXJ5KG5vZGVJc1R5cGVkQXJyYXkpIDogYmFzZUlzVHlwZWRBcnJheTtcblxuICAvKipcbiAgICogQ29udmVydHMgYHZhbHVlYCB0byBhIHBsYWluIG9iamVjdCBmbGF0dGVuaW5nIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZ1xuICAgKiBrZXllZCBwcm9wZXJ0aWVzIG9mIGB2YWx1ZWAgdG8gb3duIHByb3BlcnRpZXMgb2YgdGhlIHBsYWluIG9iamVjdC5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyT2YgX1xuICAgKiBAc2luY2UgMy4wLjBcbiAgICogQGNhdGVnb3J5IExhbmdcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY29udmVydGVkIHBsYWluIG9iamVjdC5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogZnVuY3Rpb24gRm9vKCkge1xuICAgKiAgIHRoaXMuYiA9IDI7XG4gICAqIH1cbiAgICpcbiAgICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAgICpcbiAgICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgbmV3IEZvbyk7XG4gICAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIgfVxuICAgKlxuICAgKiBfLmFzc2lnbih7ICdhJzogMSB9LCBfLnRvUGxhaW5PYmplY3QobmV3IEZvbykpO1xuICAgKiAvLyA9PiB7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDMgfVxuICAgKi9cbiAgZnVuY3Rpb24gdG9QbGFpbk9iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiBjb3B5T2JqZWN0KHZhbHVlLCBrZXlzSW4odmFsdWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nLiBBbiBlbXB0eSBzdHJpbmcgaXMgcmV0dXJuZWQgZm9yIGBudWxsYFxuICAgKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyT2YgX1xuICAgKiBAc2luY2UgNC4wLjBcbiAgICogQGNhdGVnb3J5IExhbmdcbiAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAgICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBfLnRvU3RyaW5nKG51bGwpO1xuICAgKiAvLyA9PiAnJ1xuICAgKlxuICAgKiBfLnRvU3RyaW5nKC0wKTtcbiAgICogLy8gPT4gJy0wJ1xuICAgKlxuICAgKiBfLnRvU3RyaW5nKFsxLCAyLCAzXSk7XG4gICAqIC8vID0+ICcxLDIsMydcbiAgICovXG4gIGZ1bmN0aW9uIHRvU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG4gIH1cblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gICAqIGB1bmRlZmluZWRgLCB0aGUgYGRlZmF1bHRWYWx1ZWAgaXMgcmV0dXJuZWQgaW4gaXRzIHBsYWNlLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSAzLjcuMFxuICAgKiBAY2F0ZWdvcnkgT2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAgICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAgICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAgICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiB2YXIgb2JqZWN0ID0geyAnYSc6IFt7ICdiJzogeyAnYyc6IDMgfSB9XSB9O1xuICAgKlxuICAgKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICAgKiAvLyA9PiAzXG4gICAqXG4gICAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICAgKiAvLyA9PiAzXG4gICAqXG4gICAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAgICogLy8gPT4gJ2RlZmF1bHQnXG4gICAqL1xuICBmdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgICB2YXIgcmVzdWx0ID0gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBiYXNlR2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgcGF0aGAgaXMgYSBkaXJlY3Qgb3IgaW5oZXJpdGVkIHByb3BlcnR5IG9mIGBvYmplY3RgLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSA0LjAuMFxuICAgKiBAY2F0ZWdvcnkgT2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAgICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gICAqXG4gICAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gICAqIC8vID0+IHRydWVcbiAgICpcbiAgICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICAgKiAvLyA9PiB0cnVlXG4gICAqXG4gICAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICAgKiAvLyA9PiBmYWxzZVxuICAgKi9cbiAgZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gICAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICAgKlxuICAgKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICAgKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gICAqIGZvciBtb3JlIGRldGFpbHMuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQHNpbmNlIDAuMS4wXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBjYXRlZ29yeSBPYmplY3RcbiAgICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBmdW5jdGlvbiBGb28oKSB7XG4gICAqICAgdGhpcy5hID0gMTtcbiAgICogICB0aGlzLmIgPSAyO1xuICAgKiB9XG4gICAqXG4gICAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gICAqXG4gICAqIF8ua2V5cyhuZXcgRm9vKTtcbiAgICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICAgKlxuICAgKiBfLmtleXMoJ2hpJyk7XG4gICAqIC8vID0+IFsnMCcsICcxJ11cbiAgICovXG4gIGZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gICAqXG4gICAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSAzLjAuMFxuICAgKiBAY2F0ZWdvcnkgT2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAgICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogZnVuY3Rpb24gRm9vKCkge1xuICAgKiAgIHRoaXMuYSA9IDE7XG4gICAqICAgdGhpcy5iID0gMjtcbiAgICogfVxuICAgKlxuICAgKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICAgKlxuICAgKiBfLmtleXNJbihuZXcgRm9vKTtcbiAgICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gICAqL1xuICBmdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCwgdHJ1ZSkgOiBiYXNlS2V5c0luKG9iamVjdCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5hc3NpZ25gIGV4Y2VwdCB0aGF0IGl0IHJlY3Vyc2l2ZWx5IG1lcmdlcyBvd24gYW5kXG4gICAqIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RzIGludG8gdGhlXG4gICAqIGRlc3RpbmF0aW9uIG9iamVjdC4gU291cmNlIHByb3BlcnRpZXMgdGhhdCByZXNvbHZlIHRvIGB1bmRlZmluZWRgIGFyZVxuICAgKiBza2lwcGVkIGlmIGEgZGVzdGluYXRpb24gdmFsdWUgZXhpc3RzLiBBcnJheSBhbmQgcGxhaW4gb2JqZWN0IHByb3BlcnRpZXNcbiAgICogYXJlIG1lcmdlZCByZWN1cnNpdmVseS4gT3RoZXIgb2JqZWN0cyBhbmQgdmFsdWUgdHlwZXMgYXJlIG92ZXJyaWRkZW4gYnlcbiAgICogYXNzaWdubWVudC4gU291cmNlIG9iamVjdHMgYXJlIGFwcGxpZWQgZnJvbSBsZWZ0IHRvIHJpZ2h0LiBTdWJzZXF1ZW50XG4gICAqIHNvdXJjZXMgb3ZlcndyaXRlIHByb3BlcnR5IGFzc2lnbm1lbnRzIG9mIHByZXZpb3VzIHNvdXJjZXMuXG4gICAqXG4gICAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBtdXRhdGVzIGBvYmplY3RgLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSAwLjUuMFxuICAgKiBAY2F0ZWdvcnkgT2JqZWN0XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIGRlc3RpbmF0aW9uIG9iamVjdC5cbiAgICogQHBhcmFtIHsuLi5PYmplY3R9IFtzb3VyY2VzXSBUaGUgc291cmNlIG9iamVjdHMuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIHZhciBvYmplY3QgPSB7XG4gICAqICAgJ2EnOiBbeyAnYic6IDIgfSwgeyAnZCc6IDQgfV1cbiAgICogfTtcbiAgICpcbiAgICogdmFyIG90aGVyID0ge1xuICAgKiAgICdhJzogW3sgJ2MnOiAzIH0sIHsgJ2UnOiA1IH1dXG4gICAqIH07XG4gICAqXG4gICAqIF8ubWVyZ2Uob2JqZWN0LCBvdGhlcik7XG4gICAqIC8vID0+IHsgJ2EnOiBbeyAnYic6IDIsICdjJzogMyB9LCB7ICdkJzogNCwgJ2UnOiA1IH1dIH1cbiAgICovXG4gIHZhciBtZXJnZSA9IGNyZWF0ZUFzc2lnbmVyKGZ1bmN0aW9uKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCkge1xuICAgIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpO1xuICB9KTtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBzaW5jZSAwLjEuMFxuICAgKiBAbWVtYmVyT2YgX1xuICAgKiBAY2F0ZWdvcnkgVXRpbFxuICAgKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAgICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gICAqXG4gICAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAgICogLy8gPT4gdHJ1ZVxuICAgKi9cbiAgZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYXJndW1lbnRzIG9mIHRoZSBjcmVhdGVkXG4gICAqIGZ1bmN0aW9uLiBJZiBgZnVuY2AgaXMgYSBwcm9wZXJ0eSBuYW1lLCB0aGUgY3JlYXRlZCBmdW5jdGlvbiByZXR1cm5zIHRoZVxuICAgKiBwcm9wZXJ0eSB2YWx1ZSBmb3IgYSBnaXZlbiBlbGVtZW50LiBJZiBgZnVuY2AgaXMgYW4gYXJyYXkgb3Igb2JqZWN0LCB0aGVcbiAgICogY3JlYXRlZCBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCBmb3IgZWxlbWVudHMgdGhhdCBjb250YWluIHRoZSBlcXVpdmFsZW50XG4gICAqIHNvdXJjZSBwcm9wZXJ0aWVzLCBvdGhlcndpc2UgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBzaW5jZSA0LjAuMFxuICAgKiBAbWVtYmVyT2YgX1xuICAgKiBAY2F0ZWdvcnkgVXRpbFxuICAgKiBAcGFyYW0geyp9IFtmdW5jPV8uaWRlbnRpdHldIFRoZSB2YWx1ZSB0byBjb252ZXJ0IHRvIGEgY2FsbGJhY2suXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgY2FsbGJhY2suXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIHZhciB1c2VycyA9IFtcbiAgICogICB7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAgICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICdhZ2UnOiA0MCwgJ2FjdGl2ZSc6IGZhbHNlIH1cbiAgICogXTtcbiAgICpcbiAgICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAgICogXy5maWx0ZXIodXNlcnMsIF8uaXRlcmF0ZWUoeyAndXNlcic6ICdiYXJuZXknLCAnYWN0aXZlJzogdHJ1ZSB9KSk7XG4gICAqIC8vID0+IFt7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfV1cbiAgICpcbiAgICogLy8gVGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICAgKiBfLmZpbHRlcih1c2VycywgXy5pdGVyYXRlZShbJ3VzZXInLCAnZnJlZCddKSk7XG4gICAqIC8vID0+IFt7ICd1c2VyJzogJ2ZyZWQnLCAnYWdlJzogNDAgfV1cbiAgICpcbiAgICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gICAqIF8ubWFwKHVzZXJzLCBfLml0ZXJhdGVlKCd1c2VyJykpO1xuICAgKiAvLyA9PiBbJ2Jhcm5leScsICdmcmVkJ11cbiAgICpcbiAgICogLy8gQ3JlYXRlIGN1c3RvbSBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICAgKiBfLml0ZXJhdGVlID0gXy53cmFwKF8uaXRlcmF0ZWUsIGZ1bmN0aW9uKGl0ZXJhdGVlLCBmdW5jKSB7XG4gICAqICAgcmV0dXJuICFfLmlzUmVnRXhwKGZ1bmMpID8gaXRlcmF0ZWUoZnVuYykgOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICogICAgIHJldHVybiBmdW5jLnRlc3Qoc3RyaW5nKTtcbiAgICogICB9O1xuICAgKiB9KTtcbiAgICpcbiAgICogXy5maWx0ZXIoWydhYmMnLCAnZGVmJ10sIC9lZi8pO1xuICAgKiAvLyA9PiBbJ2RlZiddXG4gICAqL1xuICBmdW5jdGlvbiBpdGVyYXRlZShmdW5jKSB7XG4gICAgcmV0dXJuIGJhc2VJdGVyYXRlZSh0eXBlb2YgZnVuYyA9PSAnZnVuY3Rpb24nID8gZnVuYyA6IGJhc2VDbG9uZShmdW5jLCB0cnVlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdmFsdWUgYXQgYHBhdGhgIG9mIGEgZ2l2ZW4gb2JqZWN0LlxuICAgKlxuICAgKiBAc3RhdGljXG4gICAqIEBtZW1iZXJPZiBfXG4gICAqIEBzaW5jZSAyLjQuMFxuICAgKiBAY2F0ZWdvcnkgVXRpbFxuICAgKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogdmFyIG9iamVjdHMgPSBbXG4gICAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAgICogICB7ICdhJzogeyAnYic6IDEgfSB9XG4gICAqIF07XG4gICAqXG4gICAqIF8ubWFwKG9iamVjdHMsIF8ucHJvcGVydHkoJ2EuYicpKTtcbiAgICogLy8gPT4gWzIsIDFdXG4gICAqXG4gICAqIF8ubWFwKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InXSkpLCAnYS5iJyk7XG4gICAqIC8vID0+IFsxLCAyXVxuICAgKi9cbiAgZnVuY3Rpb24gcHJvcGVydHkocGF0aCkge1xuICAgIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBuZXcgZW1wdHkgYXJyYXkuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIF9cbiAgICogQHNpbmNlIDQuMTMuMFxuICAgKiBAY2F0ZWdvcnkgVXRpbFxuICAgKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBlbXB0eSBhcnJheS5cbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogdmFyIGFycmF5cyA9IF8udGltZXMoMiwgXy5zdHViQXJyYXkpO1xuICAgKlxuICAgKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICAgKiAvLyA9PiBbW10sIFtdXVxuICAgKlxuICAgKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gICAqIC8vID0+IGZhbHNlXG4gICAqL1xuICBmdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAgICpcbiAgICogQHN0YXRpY1xuICAgKiBAbWVtYmVyT2YgX1xuICAgKiBAc2luY2UgNC4xMy4wXG4gICAqIEBjYXRlZ29yeSBVdGlsXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICAgKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICAgKi9cbiAgZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvLyBBZGQgbWV0aG9kcyB0aGF0IHJldHVybiB3cmFwcGVkIHZhbHVlcyBpbiBjaGFpbiBzZXF1ZW5jZXMuXG4gIGxvZGFzaC5jb21wYWN0ID0gY29tcGFjdDtcbiAgbG9kYXNoLml0ZXJhdGVlID0gaXRlcmF0ZWU7XG4gIGxvZGFzaC5rZXlzID0ga2V5cztcbiAgbG9kYXNoLmtleXNJbiA9IGtleXNJbjtcbiAgbG9kYXNoLm1lbW9pemUgPSBtZW1vaXplO1xuICBsb2Rhc2gubWVyZ2UgPSBtZXJnZTtcbiAgbG9kYXNoLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gIGxvZGFzaC50b1BsYWluT2JqZWN0ID0gdG9QbGFpbk9iamVjdDtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgLy8gQWRkIG1ldGhvZHMgdGhhdCByZXR1cm4gdW53cmFwcGVkIHZhbHVlcyBpbiBjaGFpbiBzZXF1ZW5jZXMuXG4gIGxvZGFzaC5jbG9uZSA9IGNsb25lO1xuICBsb2Rhc2guZXEgPSBlcTtcbiAgbG9kYXNoLmZvckVhY2ggPSBmb3JFYWNoO1xuICBsb2Rhc2guZ2V0ID0gZ2V0O1xuICBsb2Rhc2guaGFzSW4gPSBoYXNJbjtcbiAgbG9kYXNoLmlkZW50aXR5ID0gaWRlbnRpdHk7XG4gIGxvZGFzaC5pc0FyZ3VtZW50cyA9IGlzQXJndW1lbnRzO1xuICBsb2Rhc2guaXNBcnJheSA9IGlzQXJyYXk7XG4gIGxvZGFzaC5pc0FycmF5TGlrZSA9IGlzQXJyYXlMaWtlO1xuICBsb2Rhc2guaXNBcnJheUxpa2VPYmplY3QgPSBpc0FycmF5TGlrZU9iamVjdDtcbiAgbG9kYXNoLmlzQnVmZmVyID0gaXNCdWZmZXI7XG4gIGxvZGFzaC5pc0VtcHR5ID0gaXNFbXB0eTtcbiAgbG9kYXNoLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuICBsb2Rhc2guaXNMZW5ndGggPSBpc0xlbmd0aDtcbiAgbG9kYXNoLmlzT2JqZWN0ID0gaXNPYmplY3Q7XG4gIGxvZGFzaC5pc09iamVjdExpa2UgPSBpc09iamVjdExpa2U7XG4gIGxvZGFzaC5pc1BsYWluT2JqZWN0ID0gaXNQbGFpbk9iamVjdDtcbiAgbG9kYXNoLmlzU3ltYm9sID0gaXNTeW1ib2w7XG4gIGxvZGFzaC5pc1R5cGVkQXJyYXkgPSBpc1R5cGVkQXJyYXk7XG4gIGxvZGFzaC5zdHViQXJyYXkgPSBzdHViQXJyYXk7XG4gIGxvZGFzaC5zdHViRmFsc2UgPSBzdHViRmFsc2U7XG4gIGxvZGFzaC50b1N0cmluZyA9IHRvU3RyaW5nO1xuXG4gIC8vIEFkZCBhbGlhc2VzLlxuICBsb2Rhc2guZWFjaCA9IGZvckVhY2g7XG5cbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gIC8qKlxuICAgKiBUaGUgc2VtYW50aWMgdmVyc2lvbiBudW1iZXIuXG4gICAqXG4gICAqIEBzdGF0aWNcbiAgICogQG1lbWJlck9mIF9cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIGxvZGFzaC5WRVJTSU9OID0gVkVSU0lPTjtcblxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICBpZiAoZnJlZU1vZHVsZSkge1xuICAgIC8vIEV4cG9ydCBmb3IgTm9kZS5qcy5cbiAgICAoZnJlZU1vZHVsZS5leHBvcnRzID0gbG9kYXNoKS5fID0gbG9kYXNoO1xuICAgIC8vIEV4cG9ydCBmb3IgQ29tbW9uSlMgc3VwcG9ydC5cbiAgICBmcmVlRXhwb3J0cy5fID0gbG9kYXNoO1xuICB9XG59LmNhbGwodGhpcykpO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVuZHBvaW50IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5pbk1hcCA9IGZhbHNlXG4gICAgICAgIHRoaXMubGF0bG5nID0ge31cbiAgICB9XG5cbiAgICBzZXRDb29yZChsYXRsbmcpIHtcbiAgICAgICAgdGhpcy5sYXRsbmcgPSBsYXRsbmdcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5pbk1hcCA9IGZhbHNlXG4gICAgICAgIHRoaXMuY29vcmQgPSBbXVxuICAgIH1cblxuICAgIGdldExhdExuZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF0bG5nXG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgRW5kcG9pbnQgZnJvbSBcIi4vZW5kcG9pbnRzXCI7XG4vLyBpbXBvcnQgQW50Q29sb255T3B0aW1pemF0aW9uIGZyb20gXCIuL2Fjb1wiO1xubGV0IG9zbXRvZ2VvanNvbiA9IHJlcXVpcmUoXCJvc210b2dlb2pzb25cIik7XG5cbmxldCBzaG93Um91dGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93LXJvdXRlc1wiKTtcbmxldCBoaWRlUm91dGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaWRlLXJvdXRlc1wiKTtcbmxldCBhZGRPcmlnaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1vcmlnaW5cIik7XG5sZXQgYWRkRGVzdGluYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1kZXN0aW5hdGlvblwiKTtcblxubGV0IGVzdGltYXRlZFRpbWVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VzdGltYXRlZC10aW1lXCIpO1xubGV0IGVzdGltYXRlZERpc3RhbmNlRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlc3RpbWF0ZWQtZGlzdGFuY2VcIik7XG5cbmxldCBvcmlnaW4gPSBuZXcgRW5kcG9pbnQoXCJvcmlnaW5cIik7XG5sZXQgZGVzdCA9IG5ldyBFbmRwb2ludChcImRlc3RcIik7XG5cbmxldCBvcmlnaW5NYXJrZXIgPSBudWxsO1xubGV0IGRlc3RNYXJrZXIgPSBudWxsO1xuXG4vLyBNYXAgaW5pdGlhbGl6YXRpb25cbmxldCBtYXAgPSBMLm1hcChcIm1hcFwiKS5zZXRWaWV3KFsxNC41ODcyMjA5OTY4NTA1MywgMTIwLjk4NDM5MjE5MDE4MjcxXSwgMTcpO1xuXG5MLnRpbGVMYXllcihcImh0dHBzOi8vdGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIiwge1xuICBtYXhab29tOiAxOSxcbiAgYXR0cmlidXRpb246XG4gICAgJyZjb3B5OyA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPicsXG59KS5hZGRUbyhtYXApO1xuXG4vLyBNYXAgdXBkYXRlc1xuXG5zaG93Um91dGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBpZiAoIW9yaWdpbk1hcmtlcikge1xuICAgIGFsZXJ0KFxuICAgICAgIWRlc3RNYXJrZXIgPyBcIkFkZCBvcmlnaW4gYW5kIGRlc3RpbmF0aW9uIGZpcnN0XCIgOiBcIkFkZCBhbiBvcmlnaW4gZmlyc3RcIlxuICAgICk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCFkZXN0TWFya2VyKSB7XG4gICAgYWxlcnQoXCJBZGQgYSBkZXN0aW5hdGlvbiBmaXJzdFwiKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBsZXQgYmJveCA9IG1hcC5nZXRCb3VuZHMoKS50b0JCb3hTdHJpbmcoKTtcblxuICAvLyBiYm94ID0gYmJveC5zcGxpdChcIixcIik7XG4gIC8vIGxldCB2YWxpZEJib3ggPSBiYm94WzFdICsgJywnICsgYmJveFswXSArICcsJyArIGJib3hbM10gKyAnLCcgKyBiYm94WzJdXG5cbiAgLy8gbGV0IHZhbGlkQmJveCA9XG4gIC8vICAgb3JpZ2luLmdldExhdExuZygpLmxhdCArXG4gIC8vICAgXCIsXCIgK1xuICAvLyAgIG9yaWdpbi5nZXRMYXRMbmcoKS5sbmcgK1xuICAvLyAgIFwiLFwiICtcbiAgLy8gICBkZXN0LmdldExhdExuZygpLmxhdCArXG4gIC8vICAgXCIsXCIgK1xuICAvLyAgIGRlc3QuZ2V0TGF0TG5nKCkubG5nO1xuICAvLyBjb25zb2xlLmxvZyh2YWxpZEJib3gpO1xuXG4gIC8vIGxldCBvdmVycGFzc1VybCA9XG4gIC8vICAgJ2h0dHBzOi8vd3d3Lm92ZXJwYXNzLWFwaS5kZS9hcGkvaW50ZXJwcmV0ZXI/ZGF0YT1bb3V0Ompzb25dO3dheShhcm91bmQ6NTAwKVtcImhpZ2h3YXlcIl0oJyArXG4gIC8vICAgb3JpZ2luLmdldExhdExuZygpLmxhdCArXG4gIC8vICAgXCIsXCIgK1xuICAvLyAgIG9yaWdpbi5nZXRMYXRMbmcoKS5sbmcgK1xuICAvLyAgICcpO3dheShhcm91bmQ6NTAwKVtcImhpZ2h3YXlcIl0oJyArXG4gIC8vICAgZGVzdC5nZXRMYXRMbmcoKS5sYXQgK1xuICAvLyAgIFwiLFwiICtcbiAgLy8gICBkZXN0LmdldExhdExuZygpLmxuZyArXG4gIC8vICAgXCIpO291dCBib2R5O291dCBza2VsIHF0O1wiO1xuXG4gIC8vIGxldCB2YWxpZFJvdXRlcztcbiAgLy8gZmV0Y2gob3ZlcnBhc3NVcmwpXG4gIC8vICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgLy8gICAgIG1hcC5lYWNoTGF5ZXIoKGxheWVyKSA9PiB7XG4gIC8vICAgICAgIGlmICghbGF5ZXIub3B0aW9ucy5hdHRyaWJ1dGlvbikge1xuICAvLyAgICAgICAgIG1hcC5yZW1vdmVMYXllcihsYXllcik7XG4gIC8vICAgICAgIH1cbiAgLy8gICAgIH0pO1xuICAvLyAgICAgdmFsaWRSb3V0ZXMgPSBMLmdlb0pTT04ob3NtdG9nZW9qc29uKGRhdGEpKTtcbiAgLy8gICB9KTtcblxuICAvLyBjb25zdCBhbnQgPSBuZXcgQW50Q29sb255T3B0aW1pemF0aW9uKDE1LCAxMDAsIDAuNSk7XG4gIC8vIGFudC5pbml0aWFsaXplKHJvdXRlcyk7XG4gIC8vIGNvbnN0IG9wdGltaXplZFJvdXRlID0gYW50Q29sb255T3B0aW1pemF0aW9uLnJ1bigpO1xuXG4gIC8vIG9wdGltaXplZFJvdXRlLmFkZFRvKG1hcCk7XG5cbiAgbWFwLmVhY2hMYXllcigobGF5ZXIpID0+IHtcbiAgICBpZiAobGF5ZXIgaW5zdGFuY2VvZiBMLk1hcmtlcikge1xuICAgICAgbWFwLnJlbW92ZUxheWVyKGxheWVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBjb250cm9sID0gTC5Sb3V0aW5nLmNvbnRyb2woe1xuICAgIHdheXBvaW50czogW1xuICAgICAgb3JpZ2luTWFya2VyLmdldExhdExuZygpLCAvLyBTdGFydCBwb2ludCBjb29yZGluYXRlc1xuICAgICAgZGVzdE1hcmtlci5nZXRMYXRMbmcoKSwgLy8gRW5kIHBvaW50IGNvb3JkaW5hdGVzXG4gICAgXSxcbiAgICByb3V0ZVdoaWxlRHJhZ2dpbmc6IGZhbHNlLFxuICAgIGFkZFdheXBvaW50czogZmFsc2UsXG4gICAgZHJhZ2dhYmxlV2F5cG9pbnRzOiBmYWxzZSxcbiAgfSkuYWRkVG8obWFwKTtcblxuICAvLyBMaXN0ZW4gZm9yIHRoZSAncm91dGVzZWxlY3RlZCcgZXZlbnRcbiAgY29udHJvbC5vbihcInJvdXRlc2VsZWN0ZWRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgcm91dGUgPSBlLnJvdXRlO1xuICAgIGxldCBzdW1tYXJ5ID0gcm91dGUuc3VtbWFyeTtcblxuICAgIC8vIEFjY2VzcyB0aGUgZXN0aW1hdGVkIHRpbWUgYW5kIGRpc3RhbmNlXG4gICAgbGV0IGVzdGltYXRlZFRpbWUgPSBzdW1tYXJ5LnRvdGFsVGltZTsgLy8gaW4gc2Vjb25kc1xuICAgIGxldCBlc3RpbWF0ZWREaXN0YW5jZSA9IHN1bW1hcnkudG90YWxEaXN0YW5jZTsgLy8gaW4gbWV0ZXJzXG5cbiAgICAvLyBDb252ZXJ0IGVzdGltYXRlZCB0aW1lIHRvIG1pbnV0ZXNcbiAgICBsZXQgZXN0aW1hdGVkVGltZUluTWludXRlcyA9IE1hdGgucm91bmQoZXN0aW1hdGVkVGltZSAvIDYwKTtcblxuICAgIGNsZWFyVGltZUFuZERpc3RhbmNlKCk7XG4gICAgZGlzcGxheVRpbWVBbmREaXN0YW5jZShlc3RpbWF0ZWRUaW1lSW5NaW51dGVzLCBlc3RpbWF0ZWREaXN0YW5jZSk7XG5cbiAgICBjb25zb2xlLmxvZyhcIkVzdGltYXRlZCBUaW1lOiBcIiArIGVzdGltYXRlZFRpbWVJbk1pbnV0ZXMgKyBcIiBtaW51dGVzXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiRXN0aW1hdGVkIERpc3RhbmNlOiBcIiArIGVzdGltYXRlZERpc3RhbmNlICsgXCIgbWV0ZXJzXCIpO1xuICB9KTtcbn0pO1xuXG5oaWRlUm91dGVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBtYXAuZWFjaExheWVyKChsYXllcikgPT4ge1xuICAgIGlmICghbGF5ZXIub3B0aW9ucy5hdHRyaWJ1dGlvbikge1xuICAgICAgbWFwLnJlbW92ZUxheWVyKGxheWVyKTtcbiAgICB9XG4gIH0pO1xuICBvcmlnaW4uY2xlYXIoKTtcbiAgZGVzdC5jbGVhcigpO1xuICBjb25zb2xlLmxvZyhcInRoaXMgaGFwcGVuc1wiKTtcbiAgY2xlYXJUaW1lQW5kRGlzdGFuY2UoKTtcbn0pO1xuXG5hZGRPcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gIG1hcC5vZmYoXCJjbGlja1wiKTtcblxuICBtYXAub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zb2xlLmxvZyhcIm9yaWdpbiBjbGlja2VkXCIpO1xuICAgIGlmIChvcmlnaW4uaW5NYXAgPT09IGZhbHNlKSB7XG4gICAgICBpZiAob3JpZ2luTWFya2VyKSB7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihvcmlnaW5NYXJrZXIpOyAvLyBSZW1vdmUgZXhpc3RpbmcgbWFya2VyXG4gICAgICB9XG4gICAgICBvcmlnaW5NYXJrZXIgPSBMLm1hcmtlcihldmVudC5sYXRsbmcsIHsgZHJhZ2dhYmxlOiB0cnVlIH0pLmFkZFRvKG1hcCk7XG4gICAgICBvcmlnaW5NYXJrZXIuYmluZFBvcHVwKFwiVGhpcyBpcyBhbiBvcmlnaW5cIikub3BlblBvcHVwKCk7XG4gICAgICBvcmlnaW4uc2V0Q29vcmQoZXZlbnQubGF0bG5nKTtcbiAgICAgIG9yaWdpbi5pbk1hcCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuO1xufSk7XG5cbmFkZERlc3RpbmF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICBtYXAub2ZmKFwiY2xpY2tcIik7XG4gIGlmIChvcmlnaW4uaW5NYXAgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWFwLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGRlc3QuaW5NYXAgPT09IGZhbHNlKSB7XG4gICAgICBpZiAoZGVzdE1hcmtlcikge1xuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIoZGVzdE1hcmtlcik7IC8vIFJlbW92ZSBleGlzdGluZyBtYXJrZXJcbiAgICAgIH1cbiAgICAgIGRlc3RNYXJrZXIgPSBMLm1hcmtlcihldmVudC5sYXRsbmcsIHsgZHJhZ2dhYmxlOiB0cnVlIH0pLmFkZFRvKG1hcCk7XG4gICAgICBkZXN0TWFya2VyLmJpbmRQb3B1cChcIlRoaXMgaXMgYSBkZXN0aW5hdGlvblwiKS5vcGVuUG9wdXAoKTtcbiAgICAgIGRlc3Quc2V0Q29vcmQoZXZlbnQubGF0bG5nKTtcbiAgICAgIGRlc3QuaW5NYXAgPSB0cnVlO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gY2xlYXJUaW1lQW5kRGlzdGFuY2UoKSB7XG4gIGVzdGltYXRlZFRpbWVEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICBlc3RpbWF0ZWREaXN0YW5jZURpdi50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUaW1lQW5kRGlzdGFuY2UodGltZSwgZGlzdGFuY2UpIHtcbiAgbGV0IHRpbWVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGltZSArIFwiIG1pbnV0ZShzKVwiKTtcbiAgbGV0IGRpc3RhbmNlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGRpc3RhbmNlICsgXCIgbWV0ZXIocylcIik7XG5cbiAgZXN0aW1hdGVkVGltZURpdi5hcHBlbmRDaGlsZCh0aW1lVGV4dCk7XG4gIGVzdGltYXRlZERpc3RhbmNlRGl2LmFwcGVuZENoaWxkKGRpc3RhbmNlVGV4dCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=