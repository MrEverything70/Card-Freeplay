// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/CST.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CST = void 0;
var CST = exports.CST = {
  SCENES: {
    LOAD: "LOAD",
    MENU: "MENU"
  }
};
},{}],"src/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Card = exports.Card = /*#__PURE__*/_createClass(function Card(scene, num) {
  _classCallCheck(this, Card);
  var card;
  this.render = function (x, y, isFlip) {
    if (card != undefined) {
      console.log("Hey");
      card.destroy();
    }
    if (isFlip == 1) {
      switch (num) {
        case 0:
          card = scene.add.sprite(x, y, "j");
          break;
        case 1:
          card = scene.add.sprite(x, y, "j");
          break;
        case 2:
          card = scene.add.sprite(x, y, "da");
          break;
        case 3:
          card = scene.add.sprite(x, y, "dk");
          break;
        case 4:
          card = scene.add.sprite(x, y, "dq");
          break;
        case 5:
          card = scene.add.sprite(x, y, "dj");
          break;
        case 6:
          card = scene.add.sprite(x, y, "d10");
          break;
        case 7:
          card = scene.add.sprite(x, y, "d9");
          break;
        case 8:
          card = scene.add.sprite(x, y, "d8");
          break;
        case 9:
          card = scene.add.sprite(x, y, "d7");
          break;
        case 10:
          card = scene.add.sprite(x, y, "d6");
          break;
        case 11:
          card = scene.add.sprite(x, y, "d5");
          break;
        case 12:
          card = scene.add.sprite(x, y, "d4");
          break;
        case 13:
          card = scene.add.sprite(x, y, "d3");
          break;
        case 19:
          card = scene.add.sprite(x, y, "d2");
          break;
        case 14:
          card = scene.add.sprite(x, y, "sa");
          break;
        case 15:
          card = scene.add.sprite(x, y, "sk");
          break;
        case 16:
          card = scene.add.sprite(x, y, "sq");
          break;
        case 17:
          card = scene.add.sprite(x, y, "sj");
          break;
        case 18:
          card = scene.add.sprite(x, y, "s10");
          break;
        case 19:
          card = scene.add.sprite(x, y, "s9");
          break;
        case 20:
          card = scene.add.sprite(x, y, "s8");
          break;
        case 21:
          card = scene.add.sprite(x, y, "s7");
          break;
        case 22:
          card = scene.add.sprite(x, y, "s6");
          break;
        case 24:
          card = scene.add.sprite(x, y, "s5");
          break;
        case 25:
          card = scene.add.sprite(x, y, "s4");
          break;
        case 26:
          card = scene.add.sprite(x, y, "s3");
          break;
        case 27:
          card = scene.add.sprite(x, y, "s2");
          break;
        case 28:
          card = scene.add.sprite(x, y, "ha");
          break;
        case 29:
          card = scene.add.sprite(x, y, "hk");
          break;
        case 30:
          card = scene.add.sprite(x, y, "hq");
          break;
        case 31:
          card = scene.add.sprite(x, y, "hj");
          break;
        case 32:
          card = scene.add.sprite(x, y, "h10");
          break;
        case 33:
          card = scene.add.sprite(x, y, "h9");
          break;
        case 34:
          card = scene.add.sprite(x, y, "h8");
          break;
        case 35:
          card = scene.add.sprite(x, y, "h7");
          break;
        case 36:
          card = scene.add.sprite(x, y, "h6");
          break;
        case 37:
          card = scene.add.sprite(x, y, "h5");
          break;
        case 38:
          card = scene.add.sprite(x, y, "h4");
          break;
        case 39:
          card = scene.add.sprite(x, y, "h3");
          break;
        case 40:
          card = scene.add.sprite(x, y, "h2");
          break;
        case 41:
          card = scene.add.sprite(x, y, "ca");
          break;
        case 42:
          card = scene.add.sprite(x, y, "ck");
          break;
        case 43:
          card = scene.add.sprite(x, y, "cq");
          break;
        case 44:
          card = scene.add.sprite(x, y, "cj");
          break;
        case 45:
          card = scene.add.sprite(x, y, "c10");
          break;
        case 46:
          card = scene.add.sprite(x, y, "c9");
          break;
        case 47:
          card = scene.add.sprite(x, y, "c8");
          break;
        case 48:
          card = scene.add.sprite(x, y, "c7");
          break;
        case 49:
          card = scene.add.sprite(x, y, "c6");
          break;
        case 50:
          card = scene.add.sprite(x, y, "c5");
          break;
        case 51:
          card = scene.add.sprite(x, y, "c4");
          break;
        case 52:
          card = scene.add.sprite(x, y, "c3");
          break;
        case 53:
          card = scene.add.sprite(x, y, "c2");
          break;
        default:
          card = scene.add.sprite(x, y, "cardback");
          break;
      }
      //console.log("true");
    } else {
      card = scene.add.sprite(x, y, "cardback");
      //console.log("false");
    }

    card.displayWidth = 200;
    card.scaleY = card.scaleX;
    card.name = "card";
    card.num = num;
    card.flip = isFlip;
    card.setInteractive();
    scene.input.setDraggable(card);
  };
});
},{}],"src/Holder.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Holder = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Holder = exports.Holder = /*#__PURE__*/_createClass(function Holder(scene) {
  _classCallCheck(this, Holder);
  this.render = function (x, y) {
    var holder = scene.add.image(x, y, "holder");
    holder.displayWidth = 210;
    holder.scaleY = holder.scaleX;
    holder.setInteractive();
    var dropZone = scene.add.zone(x, y, 770, 1070).setRectangleDropZone(770, 1070);
    dropZone.setData({
      "cards": 0,
      "name": "h"
    });
    return dropZone;
  };
});
},{}],"src/Chip.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var Chip = exports.Chip = /*#__PURE__*/_createClass(function Chip(scene) {
  _classCallCheck(this, Chip);
  var chip;
  this.render = function (x, y, color) {
    switch (color) {
      case 1:
        chip = scene.add.image(x, y, "pb");
        break;
      case 2:
        chip = scene.add.image(x, y, "pbl");
        break;
      case 3:
        chip = scene.add.image(x, y, "pg");
        break;
      case 4:
        chip = scene.add.image(x, y, "pgr");
        break;
      case 5:
        chip = scene.add.image(x, y, "plb");
        break;
      case 6:
        chip = scene.add.image(x, y, "po");
        break;
      case 7:
        chip = scene.add.image(x, y, "pp");
        break;
      case 8:
        chip = scene.add.image(x, y, "pr");
        break;
      case 9:
        chip = scene.add.image(x, y, "py");
        break;
      default:
        chip = scene.add.image(x, y, "pb");
        break;
    }
    chip.displayWidth = 110;
    chip.scaleY = chip.scaleX;
    chip.setInteractive();
    scene.input.setDraggable(chip);
  };
});
},{}],"src/scenes/MenuScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuScene = void 0;
var _CST = require("../CST");
var _LoadScene = require("./LoadScene");
var _Card = require("../Card");
var _Holder = require("../Holder");
var _Chip = require("../Chip");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var MenuScene = exports.MenuScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(MenuScene, _Phaser$Scene);
  var _super = _createSuper(MenuScene);
  function MenuScene() {
    var _this;
    _classCallCheck(this, MenuScene);
    _this = _super.call(this, {
      key: _CST.CST.SCENES.MENU
    });
    _this.cards = new Array(_Card.Card);
    _this.holders = new _Holder.Holder();
    _this.chips = new _Chip.Chip();
    return _this;
  }
  _createClass(MenuScene, [{
    key: "init",
    value: function init(data) {
      console.log(data);
    }
  }, {
    key: "create",
    value: function create() {
      var _this2 = this;
      this.input.mouse.disableContextMenu();
      var bg = this.add.image(0, 0, "bg");
      bg.setOrigin(0);
      var tab = this.add.image(-500, 0, "tab");
      tab.name;
      var backButton = this.add.image(-500, 0, "back");
      backButton.name;
      backButton.setInteractive().on("pointerdown", function () {
        return _this2.removeTab(editButton, tab, backButton, deckButton, holderButton, chipButton);
      });
      var editButton = this.add.image(150, 600, "edit");
      editButton.name;
      editButton.setInteractive().on("pointerdown", function () {
        return _this2.sendTab(editButton, tab, backButton, deckButton, holderButton, chipButton);
      });
      var message = "hi";
      var deckButton = this.add.image(-500, 0, "db");
      deckButton.name;
      deckButton.setInteractive().on("pointerdown", function () {
        return _this2.createDeck();
      });
      deckButton.on("pointerup", function () {
        return _this2.saySomething("released");
      });
      var holderButton = this.add.image(-500, 0, "hb");
      holderButton.name;
      holderButton.setInteractive().on("pointerdown", function () {
        return _this2.createHolder();
      });
      holderButton.on("pointerup", function () {
        return _this2.saySomething("released");
      });
      var chipButton = this.add.image(-500, 0, "cb");
      chipButton.name;
      chipButton.setInteractive().on("pointerdown", function () {
        return _this2.sendChipTab(cbg, pbb);
      });
      chipButton.on("pointerup", function () {
        return _this2.saySomething("released");
      });
      var cbg = this.add.image(-2000, 0, "sb");
      cbg.name;
      var pbb = this.add.image(-500, 0, "pb");
      pbb.name;
      pbb.setInteractive().on("pointerdown", function () {
        return _this2.removeChipTab(cbg, pbb, 1);
      });
      this.input.on('pointerdown', this.startDrag, this);
      this.input.on("dragstart", function (pointer, gameObject) {
        this.children.bringToTop(gameObject);
      }, this);
      this.input.on("drag", function (pointer, gameObject) {
        gameObject.x = pointer.x;
        gameObject.y = pointer.y;
      });
      this.input.on("drop", function (pointer, gameObject, dropZone) {
        gameObject.x = dropZone.x;
        gameObject.y = dropZone.y;
      });
      this.input.on("gameobjectdown", function (pointer, gameObject) {
        _this2.flipCard(pointer, gameObject);
      });
    }
  }, {
    key: "flipCard",
    value: function flipCard(pointer, gameObject) {
      if (pointer.rightButtonDown() && gameObject.name == "card" && gameObject !== "undefined") {
        var num = gameObject.num;
        var flipState = gameObject.flip;
        gameObject.destroy();
        this.cards[num] = new _Card.Card(this, num);
        if (flipState == 0) {
          this.cards[num].render(pointer.x, pointer.y, 1);
        } else {
          this.cards[num].render(pointer.x, pointer.y, 0);
        }
      }
    }
  }, {
    key: "saySomething",
    value: function saySomething(message) {
      console.log(message);
    } //test method
  }, {
    key: "sendTab",
    value: function sendTab(editButton, tab, backButton, deckButton, holderButton, chipButton) {
      editButton.setPosition(-100, 600);
      tab.setPosition(250, 540);
      backButton.setPosition(150, 800);
      deckButton.setPosition(160, 400);
      holderButton.setPosition(160, 300);
      chipButton.setPosition(160, 200);
    }
  }, {
    key: "removeTab",
    value: function removeTab(editButton, tab, backButton, deckButton, holderButton, chipButton) {
      editButton.setPosition(150, 600);
      tab.setPosition(-500, 0);
      backButton.setPosition(-500, 0);
      deckButton.setPosition(-500, 0);
      holderButton.setPosition(-500, 0);
      chipButton.setPosition(-500, 0);
    }
  }, {
    key: "createDeck",
    value: function createDeck() {
      for (var i = 0; i < 54; i++) {
        this.cards[i] = new _Card.Card(this, i);
        this.cards[i].num = i; //creates array
      }

      this.shuffle(this.cards);
      console.log(this.cards);
      for (var _i = 0; _i < 54; _i++) {
        this.cards[_i].render(1000, 500, 0); //renders all cards
      }
    }
  }, {
    key: "shuffle",
    value: function shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [array[j], array[i]];
        array[i] = _ref[0];
        array[j] = _ref[1];
      }
      return array;
    }
  }, {
    key: "createHolder",
    value: function createHolder() {
      this.holder = new _Holder.Holder(this);
      this.holder.render(1500, 500);
      this.holder.name = "DD";
    }
  }, {
    key: "sendChipTab",
    value: function sendChipTab(cbg, pp) {
      cbg.setPosition(1000, 500);
      pp.setPosition(1000, 500);
      this.chldren.bringtoTop(pp);
      this.children.bringToTop(cbg);
    }
  }, {
    key: "removeChipTab",
    value: function removeChipTab(cbg, pp, val) {
      cbg.setPosition(-2000, 0);
      pp.setPosition(-500, 0);
      this.chips = new _Chip.Chip(this, val);
      this.chips.render(700, 500);
      this.chips.name = "DD";
    }
  }, {
    key: "startDrag",
    value: function startDrag(pointer, targets) {
      if (pointer.leftButtonDown()) {
        this.input.off('pointerdown', this.startDrag, this);
        this.dragObj = targets[0];
        this.input.on('pointermove', this.doDrag, this);
        this.input.on('pointerup', this.stopDrag, this);
      }
    }
  }, {
    key: "doDrag",
    value: function doDrag(pointer) {
      if (typeof this.dragObj !== "undefined" && this.dragObj.name == "DD") {
        this.dragObj.x = pointer.x;
        this.dragObj.y = pointer.y;
      }
    }
  }, {
    key: "stopDrag",
    value: function stopDrag() {
      this.input.on('pointerdown', this.startDrag, this);
      this.input.off('pointermove', this.doDrag, this);
      this.input.off('pointerup', this.stopDrag, this);
    }
  }]);
  return MenuScene;
}(Phaser.Scene);
},{"../CST":"src/CST.js","./LoadScene":"src/scenes/LoadScene.js","../Card":"src/Card.js","../Holder":"src/Holder.js","../Chip":"src/Chip.js"}],"src/scenes/LoadScene.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadScene = void 0;
var _CST = require("../CST");
var _MenuScene = require("./MenuScene");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var LoadScene = exports.LoadScene = /*#__PURE__*/function (_Phaser$Scene) {
  _inherits(LoadScene, _Phaser$Scene);
  var _super = _createSuper(LoadScene);
  function LoadScene() {
    _classCallCheck(this, LoadScene);
    return _super.call(this, {
      key: _CST.CST.SCENES.LOAD
    });
  }
  _createClass(LoadScene, [{
    key: "preload",
    value: function preload() {
      this.load.image("cardback", "./sprites/cardback.jpg");
      this.load.image("bg", "./sprites/cfbackground.jpg");
      this.load.image("db", "./sprites/AddDeck.png");
      this.load.image("tab", "./sprites/Tab.png");
      this.load.image("edit", "./sprites/Edit.png");
      this.load.image("back", "./sprites/Back.png");
      this.load.image("hb", "./sprites/AddHolder.png");
      this.load.image("holder", "./sprites/Holder.png");
      this.load.image("cb", "./sprites/AddChip.png");
      this.load.image("sb", "./sprites/SelectBG.png");
      this.load.image("c2", "./sprites/cardFronts/C2.png");
      this.load.image("c3", "./sprites/cardFronts/C3.png");
      this.load.image("c4", "./sprites/cardFronts/C4.png");
      this.load.image("c5", "./sprites/cardFronts/C5.png");
      this.load.image("c6", "./sprites/cardFronts/C6.png");
      this.load.image("c7", "./sprites/cardFronts/C7.png");
      this.load.image("c8", "./sprites/cardFronts/C8.png");
      this.load.image("c9", "./sprites/cardFronts/C9.png");
      this.load.image("c10", "./sprites/cardFronts/C10.png");
      this.load.image("cj", "./sprites/cardFronts/CJ.png");
      this.load.image("cq", "./sprites/cardFronts/CQ.png");
      this.load.image("ck", "./sprites/cardFronts/CK.png");
      this.load.image("ca", "./sprites/cardFronts/CA.png");
      this.load.image("h2", "./sprites/cardFronts/H2.png");
      this.load.image("h3", "./sprites/cardFronts/H3.png");
      this.load.image("h4", "./sprites/cardFronts/H4.png");
      this.load.image("h5", "./sprites/cardFronts/H5.png");
      this.load.image("h6", "./sprites/cardFronts/H6.png");
      this.load.image("h7", "./sprites/cardFronts/H7.png");
      this.load.image("h8", "./sprites/cardFronts/H8.png");
      this.load.image("h9", "./sprites/cardFronts/H9.png");
      this.load.image("h10", "./sprites/cardFronts/H10.png");
      this.load.image("hj", "./sprites/cardFronts/HJ.png");
      this.load.image("hq", "./sprites/cardFronts/HQ.png");
      this.load.image("hk", "./sprites/cardFronts/HK.png");
      this.load.image("ha", "./sprites/cardFronts/HA.png");
      this.load.image("s2", "./sprites/cardFronts/S2.png");
      this.load.image("s3", "./sprites/cardFronts/S3.png");
      this.load.image("s4", "./sprites/cardFronts/S4.png");
      this.load.image("s5", "./sprites/cardFronts/S5.png");
      this.load.image("s6", "./sprites/cardFronts/S6.png");
      this.load.image("s7", "./sprites/cardFronts/S7.png");
      this.load.image("s8", "./sprites/cardFronts/S8.png");
      this.load.image("s9", "./sprites/cardFronts/S9.png");
      this.load.image("s10", "./sprites/cardFronts/S10.png");
      this.load.image("sj", "./sprites/cardFronts/SJ.png");
      this.load.image("sq", "./sprites/cardFronts/SQ.png");
      this.load.image("sk", "./sprites/cardFronts/SK.png");
      this.load.image("sa", "./sprites/cardFronts/SA.png");
      this.load.image("d2", "./sprites/cardFronts/D2.png");
      this.load.image("d3", "./sprites/cardFronts/D3.png");
      this.load.image("d4", "./sprites/cardFronts/D4.png");
      this.load.image("d5", "./sprites/cardFronts/D5.png");
      this.load.image("d6", "./sprites/cardFronts/D6.png");
      this.load.image("d7", "./sprites/cardFronts/D7.png");
      this.load.image("d8", "./sprites/cardFronts/D8.png");
      this.load.image("d9", "./sprites/cardFronts/D9.png");
      this.load.image("d10", "./sprites/cardFronts/D10.png");
      this.load.image("dj", "./sprites/cardFronts/DJ.png");
      this.load.image("dq", "./sprites/cardFronts/DQ.png");
      this.load.image("dk", "./sprites/cardFronts/DK.png");
      this.load.image("da", "./sprites/cardFronts/DA.png");
      this.load.image("j", "./sprites/cardFronts/j.png");
      this.load.image("pb", "./sprites/pokerChips/pb.png");
      this.load.image("pbl", "./sprites/pokerChips/pbl.png");
      this.load.image("pg", "./sprites/pokerChips/pg.png");
      this.load.image("pgr", "./sprites/pokerChips/pgr.png");
      this.load.image("plb", "./sprites/pokerChips/plb.png");
      this.load.image("po", "./sprites/pokerChips/po.png");
      this.load.image("pp", "./sprites/pokerChips/pp.png");
      this.load.image("pr", "./sprites/pokerChips/pr.png");
      this.load.image("py", "./sprites/pokerChips/py.png");
    }
  }, {
    key: "create",
    value: function create() {
      this.add.text(1000, 600, "Loading...");
      this.scene.start(_CST.CST.SCENES.MENU);
    }
  }]);
  return LoadScene;
}(Phaser.Scene);
},{"../CST":"src/CST.js","./MenuScene":"src/scenes/MenuScene.js"}],"src/main.js":[function(require,module,exports) {
"use strict";

var _LoadScene = require("./scenes/LoadScene");
var _MenuScene = require("./scenes/MenuScene");
/** @type {import("../typings/phaser")} */

var game = new Phaser.Game({
  width: 1920,
  height: 1080,
  scene: [_LoadScene.LoadScene, _MenuScene.MenuScene]
});
},{"./scenes/LoadScene":"src/scenes/LoadScene.js","./scenes/MenuScene":"src/scenes/MenuScene.js"}],"C:/Users/Sachi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60029" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["C:/Users/Sachi/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/main.js"], null)
//# sourceMappingURL=/main.1e43358e.js.map