/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/startup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@aurelia/jit/dist/index.umd.js":
/*!*****************************************************!*\
  !*** ./node_modules/@aurelia/jit/dist/index.umd.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(/*! @aurelia/kernel */ "./node_modules/@aurelia/kernel/dist/index.umd.js"), __webpack_require__(/*! @aurelia/runtime */ "./node_modules/@aurelia/runtime/dist/index.umd.js")) :
  undefined;
}(this, (function (exports,kernel,runtime) { 'use strict';

  class AttrSyntax {
      constructor(rawName, rawValue, target, command) {
          this.rawName = rawName;
          this.rawValue = rawValue;
          this.target = target;
          this.command = command;
      }
  }
  const IAttributeParser = kernel.DI.createInterface()
      .withDefault(x => x.singleton(AttributeParser));
  /*@internal*/
  class AttributeParser {
      constructor() {
          this.cache = {};
      }
      parse(name, value) {
          let target;
          let command;
          const existing = this.cache[name];
          if (existing === undefined) {
              let lastIndex = 0;
              target = name;
              for (let i = 0, ii = name.length; i < ii; ++i) {
                  if (name.charCodeAt(i) === 46 /* Dot */) {
                      // set the targetName to only the part that comes before the first dot
                      if (name === target) {
                          target = name.slice(0, i);
                      }
                      lastIndex = i;
                  }
              }
              command = lastIndex > 0 ? name.slice(lastIndex + 1) : null;
              this.cache[name] = [target, command];
          }
          else {
              target = existing[0];
              command = existing[1];
          }
          return new AttrSyntax(name, value, target, command && command.length ? command : null);
      }
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
      else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  // tslint:disable:no-reserved-keywords
  // tslint:disable:no-any
  class TextBindingInstruction {
      constructor(from) {
          this.from = from;
          this.type = "a" /* textBinding */;
      }
  }
  class InterpolationInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "b" /* interpolation */;
      }
  }
  class OneTimeBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "c" /* propertyBinding */;
          this.oneTime = true;
          this.mode = runtime.BindingMode.oneTime;
      }
  }
  class ToViewBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "c" /* propertyBinding */;
          this.oneTime = false;
          this.mode = runtime.BindingMode.toView;
      }
  }
  class FromViewBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "c" /* propertyBinding */;
          this.oneTime = false;
          this.mode = runtime.BindingMode.fromView;
      }
  }
  class TwoWayBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "c" /* propertyBinding */;
          this.oneTime = false;
          this.mode = runtime.BindingMode.twoWay;
      }
  }
  class IteratorBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "d" /* iteratorBinding */;
      }
  }
  class TriggerBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "e" /* listenerBinding */;
          this.strategy = runtime.DelegationStrategy.none;
          this.preventDefault = true;
      }
  }
  class DelegateBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "e" /* listenerBinding */;
          this.strategy = runtime.DelegationStrategy.bubbling;
          this.preventDefault = false;
      }
  }
  class CaptureBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "e" /* listenerBinding */;
          this.strategy = runtime.DelegationStrategy.capturing;
          this.preventDefault = false;
      }
  }
  class CallBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "f" /* callBinding */;
      }
  }
  class RefBindingInstruction {
      constructor(from) {
          this.from = from;
          this.type = "g" /* refBinding */;
      }
  }
  class StylePropertyBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "h" /* stylePropertyBinding */;
      }
  }
  class SetPropertyInstruction {
      constructor(value, to) {
          this.value = value;
          this.to = to;
          this.type = "i" /* setProperty */;
      }
  }
  class SetAttributeInstruction {
      constructor(value, to) {
          this.value = value;
          this.to = to;
          this.type = "j" /* setAttribute */;
      }
  }
  class HydrateElementInstruction {
      constructor(res, instructions, parts, contentOverride) {
          this.res = res;
          this.instructions = instructions;
          this.parts = parts;
          this.contentOverride = contentOverride;
          this.type = "k" /* hydrateElement */;
      }
  }
  class HydrateAttributeInstruction {
      constructor(res, instructions) {
          this.res = res;
          this.instructions = instructions;
          this.type = "l" /* hydrateAttribute */;
      }
  }
  class HydrateTemplateController {
      constructor(def, res, instructions, link) {
          this.def = def;
          this.res = res;
          this.instructions = instructions;
          this.link = link;
          this.type = "m" /* hydrateTemplateController */;
      }
  }
  class LetElementInstruction {
      constructor(instructions, toViewModel) {
          this.instructions = instructions;
          this.toViewModel = toViewModel;
          this.type = "n" /* letElement */;
      }
  }
  class LetBindingInstruction {
      constructor(from, to) {
          this.from = from;
          this.to = to;
          this.type = "o" /* letBinding */;
      }
  }

  function bindingCommand(nameOrSource) {
      return function (target) {
          return BindingCommandResource.define(nameOrSource, target);
      };
  }
  const BindingCommandResource = {
      name: 'binding-command',
      keyFrom(name) {
          return `${this.name}:${name}`;
      },
      // tslint:disable-next-line:no-reserved-keywords
      isType(type) {
          return type.kind === this;
      },
      define(nameOrSource, ctor) {
          const description = typeof nameOrSource === 'string' ? { name: nameOrSource, target: null } : nameOrSource;
          const Type = ctor;
          Type.kind = BindingCommandResource;
          Type.description = description;
          Type.register = function (container) {
              container.register(kernel.Registration.singleton(Type.kind.keyFrom(description.name), Type));
          };
          const proto = Type.prototype;
          proto.handles = proto.handles || defaultHandles;
          return Type;
      }
  };
  function defaultHandles($symbol) {
      return !$symbol.isTemplateController;
  }
  exports.OneTimeBindingCommand = class OneTimeBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          return new OneTimeBindingInstruction(this.parser.parse($symbol.rawValue, 49 /* OneTimeCommand */), $symbol.to);
      }
  };
  exports.OneTimeBindingCommand.inject = [runtime.IExpressionParser];
  exports.OneTimeBindingCommand = __decorate([
      bindingCommand('one-time')
  ], exports.OneTimeBindingCommand);
  exports.ToViewBindingCommand = class ToViewBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          return new ToViewBindingInstruction(this.parser.parse($symbol.rawValue, 50 /* ToViewCommand */), $symbol.to);
      }
  };
  exports.ToViewBindingCommand.inject = [runtime.IExpressionParser];
  exports.ToViewBindingCommand = __decorate([
      bindingCommand('to-view')
  ], exports.ToViewBindingCommand);
  exports.FromViewBindingCommand = class FromViewBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          return new FromViewBindingInstruction(this.parser.parse($symbol.rawValue, 51 /* FromViewCommand */), $symbol.to);
      }
  };
  exports.FromViewBindingCommand.inject = [runtime.IExpressionParser];
  exports.FromViewBindingCommand = __decorate([
      bindingCommand('from-view')
  ], exports.FromViewBindingCommand);
  exports.TwoWayBindingCommand = class TwoWayBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          return new TwoWayBindingInstruction(this.parser.parse($symbol.rawValue, 52 /* TwoWayCommand */), $symbol.to);
      }
  };
  exports.TwoWayBindingCommand.inject = [runtime.IExpressionParser];
  exports.TwoWayBindingCommand = __decorate([
      bindingCommand('two-way')
  ], exports.TwoWayBindingCommand);
  // Not bothering to throw on non-existing modes, should never happen anyway.
  // Keeping all array elements of the same type for better optimizeability.
  const compileMode = ['', '$1', '$2', '', '$4', '', '$6'];
  exports.DefaultBindingCommand = class DefaultBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          return this[compileMode[$symbol.mode]]($symbol);
      }
  };
  exports.DefaultBindingCommand.inject = [runtime.IExpressionParser];
  exports.DefaultBindingCommand = __decorate([
      bindingCommand('bind')
  ], exports.DefaultBindingCommand);
  exports.DefaultBindingCommand.prototype.$1 = exports.OneTimeBindingCommand.prototype.compile;
  exports.DefaultBindingCommand.prototype.$2 = exports.ToViewBindingCommand.prototype.compile;
  exports.DefaultBindingCommand.prototype.$4 = exports.FromViewBindingCommand.prototype.compile;
  exports.DefaultBindingCommand.prototype.$6 = exports.TwoWayBindingCommand.prototype.compile;
  exports.TriggerBindingCommand = class TriggerBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          return new TriggerBindingInstruction(this.parser.parse($symbol.rawValue, 86 /* TriggerCommand */), $symbol.to);
      }
  };
  exports.TriggerBindingCommand.inject = [runtime.IExpressionParser];
  exports.TriggerBindingCommand = __decorate([
      bindingCommand('trigger')
  ], exports.TriggerBindingCommand);
  exports.DelegateBindingCommand = class DelegateBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          return new DelegateBindingInstruction(this.parser.parse($symbol.rawValue, 88 /* DelegateCommand */), $symbol.to);
      }
  };
  exports.DelegateBindingCommand.inject = [runtime.IExpressionParser];
  exports.DelegateBindingCommand = __decorate([
      bindingCommand('delegate')
  ], exports.DelegateBindingCommand);
  exports.CaptureBindingCommand = class CaptureBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          return new CaptureBindingInstruction(this.parser.parse($symbol.rawValue, 87 /* CaptureCommand */), $symbol.to);
      }
  };
  exports.CaptureBindingCommand.inject = [runtime.IExpressionParser];
  exports.CaptureBindingCommand = __decorate([
      bindingCommand('capture')
  ], exports.CaptureBindingCommand);
  exports.CallBindingCommand = class CallBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          return new CallBindingInstruction(this.parser.parse($symbol.rawValue, 153 /* CallCommand */), $symbol.to);
      }
  };
  exports.CallBindingCommand.inject = [runtime.IExpressionParser];
  exports.CallBindingCommand = __decorate([
      bindingCommand('call')
  ], exports.CallBindingCommand);
  exports.ForBindingCommand = class ForBindingCommand {
      constructor(parser) {
          this.parser = parser;
      }
      compile($symbol) {
          const def = {
              name: 'repeat',
              template: $symbol.$element.node,
              instructions: []
          };
          return new HydrateTemplateController(def, 'repeat', [
              new IteratorBindingInstruction(this.parser.parse($symbol.rawValue, 539 /* ForCommand */), 'items'),
              new SetPropertyInstruction('item', 'local')
              // tslint:disable-next-line:align
          ], false);
      }
      handles($symbol) {
          return $symbol.target === 'repeat';
      }
  };
  exports.ForBindingCommand.inject = [runtime.IExpressionParser];
  exports.ForBindingCommand = __decorate([
      bindingCommand('for')
  ], exports.ForBindingCommand);

  /*@internal*/
  function unescapeCode(code) {
      switch (code) {
          case 98 /* LowerB */: return 8 /* Backspace */;
          case 116 /* LowerT */: return 9 /* Tab */;
          case 110 /* LowerN */: return 10 /* LineFeed */;
          case 118 /* LowerV */: return 11 /* VerticalTab */;
          case 102 /* LowerF */: return 12 /* FormFeed */;
          case 114 /* LowerR */: return 13 /* CarriageReturn */;
          case 34 /* DoubleQuote */: return 34 /* DoubleQuote */;
          case 39 /* SingleQuote */: return 39 /* SingleQuote */;
          case 92 /* Backslash */: return 92 /* Backslash */;
          default: return code;
      }
  }

  // tslint:disable:no-non-null-assertion
  const ParserRegistration = {
      register(container) {
          container.registerTransformer(runtime.IExpressionParser, parser => {
              parser['parseCore'] = parseCore;
              return parser;
          });
      }
  };
  const $false = runtime.PrimitiveLiteral.$false;
  const $true = runtime.PrimitiveLiteral.$true;
  const $null = runtime.PrimitiveLiteral.$null;
  const $undefined = runtime.PrimitiveLiteral.$undefined;
  const $this = runtime.AccessThis.$this;
  const $parent = runtime.AccessThis.$parent;
  /*@internal*/
  class ParserState {
      get tokenRaw() {
          return this.input.slice(this.startIndex, this.index);
      }
      constructor(input) {
          this.index = 0;
          this.startIndex = 0;
          this.lastIndex = 0;
          this.input = input;
          this.length = input.length;
          this.currentToken = 1572864 /* EOF */;
          this.tokenValue = '';
          this.currentChar = input.charCodeAt(0);
          this.assignable = true;
      }
  }
  const $state = new ParserState('');
  /*@internal*/
  function parseCore(input, bindingType) {
      $state.input = input;
      $state.length = input.length;
      $state.index = 0;
      $state.currentChar = input.charCodeAt(0);
      return parse($state, 0 /* Reset */, 61 /* Variadic */, bindingType === undefined ? 53 /* BindCommand */ : bindingType);
  }
  /*@internal*/
  function parse(state, access, minPrecedence, bindingType) {
      if (state.index === 0) {
          if (bindingType & 2048 /* Interpolation */) {
              // tslint:disable-next-line:no-any
              return parseInterpolation(state);
          }
          nextToken(state);
          if (state.currentToken & 1048576 /* ExpressionTerminal */) {
              throw kernel.Reporter.error(100 /* InvalidExpressionStart */, { state });
          }
      }
      state.assignable = 448 /* Binary */ > minPrecedence;
      let result = undefined;
      if (state.currentToken & 32768 /* UnaryOp */) {
          /** parseUnaryExpression
           * https://tc39.github.io/ecma262/#sec-unary-operators
           *
           * UnaryExpression :
           *   1. LeftHandSideExpression
           *   2. void UnaryExpression
           *   3. typeof UnaryExpression
           *   4. + UnaryExpression
           *   5. - UnaryExpression
           *   6. ! UnaryExpression
           *
           * IsValidAssignmentTarget
           *   2,3,4,5,6 = false
           *   1 = see parseLeftHandSideExpression
           *
           * Note: technically we should throw on ++ / -- / +++ / ---, but there's nothing to gain from that
           */
          const op = TokenValues[state.currentToken & 63 /* Type */];
          nextToken(state);
          result = new runtime.Unary(op, parse(state, access, 449 /* LeftHandSide */, bindingType));
          state.assignable = false;
      }
      else {
          /** parsePrimaryExpression
           * https://tc39.github.io/ecma262/#sec-primary-expression
           *
           * PrimaryExpression :
           *   1. this
           *   2. IdentifierName
           *   3. Literal
           *   4. ArrayLiteral
           *   5. ObjectLiteral
           *   6. TemplateLiteral
           *   7. ParenthesizedExpression
           *
           * Literal :
           *    NullLiteral
           *    BooleanLiteral
           *    NumericLiteral
           *    StringLiteral
           *
           * ParenthesizedExpression :
           *   ( AssignmentExpression )
           *
           * IsValidAssignmentTarget
           *   1,3,4,5,6,7 = false
           *   2 = true
           */
          primary: switch (state.currentToken) {
              case 3077 /* ParentScope */: // $parent
                  state.assignable = false;
                  do {
                      nextToken(state);
                      access++; // ancestor
                      if (consumeOpt(state, 16392 /* Dot */)) {
                          if (state.currentToken === 16392 /* Dot */) {
                              throw kernel.Reporter.error(102 /* DoubleDot */, { state });
                          }
                          else if (state.currentToken === 1572864 /* EOF */) {
                              throw kernel.Reporter.error(105 /* ExpectedIdentifier */, { state });
                          }
                          continue;
                      }
                      else if (state.currentToken & 524288 /* AccessScopeTerminal */) {
                          const ancestor = access & 511 /* Ancestor */;
                          result = ancestor === 0 ? $this : ancestor === 1 ? $parent : new runtime.AccessThis(ancestor);
                          access = 512 /* This */;
                          break primary;
                      }
                      else {
                          throw kernel.Reporter.error(103 /* InvalidMemberExpression */, { state });
                      }
                  } while (state.currentToken === 3077 /* ParentScope */);
              // falls through
              case 1024 /* Identifier */: // identifier
                  if (bindingType & 512 /* IsIterator */) {
                      result = new runtime.BindingIdentifier(state.tokenValue);
                  }
                  else {
                      result = new runtime.AccessScope(state.tokenValue, access & 511 /* Ancestor */);
                      access = 1024 /* Scope */;
                  }
                  state.assignable = true;
                  nextToken(state);
                  break;
              case 3076 /* ThisScope */: // $this
                  state.assignable = false;
                  nextToken(state);
                  result = $this;
                  access = 512 /* This */;
                  break;
              case 671750 /* OpenParen */: // parenthesized expression
                  nextToken(state);
                  result = parse(state, 0 /* Reset */, 62 /* Assign */, bindingType);
                  consume(state, 1835018 /* CloseParen */);
                  access = 0 /* Reset */;
                  break;
              case 671756 /* OpenBracket */:
                  result = parseArrayLiteralExpression(state, access, bindingType);
                  access = 0 /* Reset */;
                  break;
              case 131079 /* OpenBrace */:
                  result = parseObjectLiteralExpression(state, bindingType);
                  access = 0 /* Reset */;
                  break;
              case 540713 /* TemplateTail */:
                  result = new runtime.Template([state.tokenValue]);
                  state.assignable = false;
                  nextToken(state);
                  access = 0 /* Reset */;
                  break;
              case 540714 /* TemplateContinuation */:
                  result = parseTemplate(state, access, bindingType, result, false);
                  access = 0 /* Reset */;
                  break;
              case 4096 /* StringLiteral */:
              case 8192 /* NumericLiteral */:
                  result = new runtime.PrimitiveLiteral(state.tokenValue);
                  state.assignable = false;
                  nextToken(state);
                  access = 0 /* Reset */;
                  break;
              case 2050 /* NullKeyword */:
              case 2051 /* UndefinedKeyword */:
              case 2049 /* TrueKeyword */:
              case 2048 /* FalseKeyword */:
                  result = TokenValues[state.currentToken & 63 /* Type */];
                  state.assignable = false;
                  nextToken(state);
                  access = 0 /* Reset */;
                  break;
              default:
                  if (state.index >= state.length) {
                      throw kernel.Reporter.error(104 /* UnexpectedEndOfExpression */, { state });
                  }
                  else {
                      throw kernel.Reporter.error(101 /* UnconsumedToken */, { state });
                  }
          }
          if (bindingType & 512 /* IsIterator */) {
              // tslint:disable-next-line:no-any
              return parseForOfStatement(state, result);
          }
          // tslint:disable-next-line:no-any
          if (449 /* LeftHandSide */ < minPrecedence)
              return result;
          /** parseMemberExpression (Token.Dot, Token.OpenBracket, Token.TemplateContinuation)
           * MemberExpression :
           *   1. PrimaryExpression
           *   2. MemberExpression [ AssignmentExpression ]
           *   3. MemberExpression . IdentifierName
           *   4. MemberExpression TemplateLiteral
           *
           * IsValidAssignmentTarget
           *   1,4 = false
           *   2,3 = true
           *
           *
           * parseCallExpression (Token.OpenParen)
           * CallExpression :
           *   1. MemberExpression Arguments
           *   2. CallExpression Arguments
           *   3. CallExpression [ AssignmentExpression ]
           *   4. CallExpression . IdentifierName
           *   5. CallExpression TemplateLiteral
           *
           * IsValidAssignmentTarget
           *   1,2,5 = false
           *   3,4 = true
           */
          let name = state.tokenValue;
          while ((state.currentToken & 16384 /* LeftHandSide */) > 0) {
              switch (state.currentToken) {
                  case 16392 /* Dot */:
                      state.assignable = true;
                      nextToken(state);
                      if ((state.currentToken & 3072 /* IdentifierName */) === 0) {
                          throw kernel.Reporter.error(105 /* ExpectedIdentifier */, { state });
                      }
                      name = state.tokenValue;
                      nextToken(state);
                      // Change $This to $Scope, change $Scope to $Member, keep $Member as-is, change $Keyed to $Member, disregard other flags
                      access = ((access & (512 /* This */ | 1024 /* Scope */)) << 1) | (access & 2048 /* Member */) | ((access & 4096 /* Keyed */) >> 1);
                      if (state.currentToken === 671750 /* OpenParen */) {
                          if (access === 0 /* Reset */) { // if the left hand side is a literal, make sure we parse a CallMember
                              access = 2048 /* Member */;
                          }
                          continue;
                      }
                      if (access & 1024 /* Scope */) {
                          result = new runtime.AccessScope(name, result.ancestor);
                      }
                      else { // if it's not $Scope, it's $Member
                          result = new runtime.AccessMember(result, name);
                      }
                      continue;
                  case 671756 /* OpenBracket */:
                      state.assignable = true;
                      nextToken(state);
                      access = 4096 /* Keyed */;
                      result = new runtime.AccessKeyed(result, parse(state, 0 /* Reset */, 62 /* Assign */, bindingType));
                      consume(state, 1835021 /* CloseBracket */);
                      break;
                  case 671750 /* OpenParen */:
                      state.assignable = false;
                      nextToken(state);
                      const args = new Array();
                      while (state.currentToken !== 1835018 /* CloseParen */) {
                          args.push(parse(state, 0 /* Reset */, 62 /* Assign */, bindingType));
                          if (!consumeOpt(state, 1572875 /* Comma */)) {
                              break;
                          }
                      }
                      consume(state, 1835018 /* CloseParen */);
                      if (access & 1024 /* Scope */) {
                          result = new runtime.CallScope(name, args, result.ancestor);
                      }
                      else if (access & 2048 /* Member */) {
                          result = new runtime.CallMember(result, name, args);
                      }
                      else {
                          result = new runtime.CallFunction(result, args);
                      }
                      access = 0;
                      break;
                  case 540713 /* TemplateTail */:
                      state.assignable = false;
                      const strings = [state.tokenValue];
                      result = new runtime.TaggedTemplate(strings, strings, result);
                      nextToken(state);
                      break;
                  case 540714 /* TemplateContinuation */:
                      result = parseTemplate(state, access, bindingType, result, true);
                  default:
              }
          }
      }
      // tslint:disable-next-line:no-any
      if (448 /* Binary */ < minPrecedence)
          return result;
      /** parseBinaryExpression
       * https://tc39.github.io/ecma262/#sec-multiplicative-operators
       *
       * MultiplicativeExpression : (local precedence 6)
       *   UnaryExpression
       *   MultiplicativeExpression * / % UnaryExpression
       *
       * AdditiveExpression : (local precedence 5)
       *   MultiplicativeExpression
       *   AdditiveExpression + - MultiplicativeExpression
       *
       * RelationalExpression : (local precedence 4)
       *   AdditiveExpression
       *   RelationalExpression < > <= >= instanceof in AdditiveExpression
       *
       * EqualityExpression : (local precedence 3)
       *   RelationalExpression
       *   EqualityExpression == != === !== RelationalExpression
       *
       * LogicalANDExpression : (local precedence 2)
       *   EqualityExpression
       *   LogicalANDExpression && EqualityExpression
       *
       * LogicalORExpression : (local precedence 1)
       *   LogicalANDExpression
       *   LogicalORExpression || LogicalANDExpression
       */
      while ((state.currentToken & 65536 /* BinaryOp */) > 0) {
          const opToken = state.currentToken;
          if ((opToken & 448 /* Precedence */) <= minPrecedence) {
              break;
          }
          nextToken(state);
          result = new runtime.Binary(TokenValues[opToken & 63 /* Type */], result, parse(state, access, opToken & 448 /* Precedence */, bindingType));
          state.assignable = false;
      }
      // tslint:disable-next-line:no-any
      if (63 /* Conditional */ < minPrecedence)
          return result;
      /**
       * parseConditionalExpression
       * https://tc39.github.io/ecma262/#prod-ConditionalExpression
       *
       * ConditionalExpression :
       *   1. BinaryExpression
       *   2. BinaryExpression ? AssignmentExpression : AssignmentExpression
       *
       * IsValidAssignmentTarget
       *   1,2 = false
       */
      if (consumeOpt(state, 1572879 /* Question */)) {
          const yes = parse(state, access, 62 /* Assign */, bindingType);
          consume(state, 1572878 /* Colon */);
          result = new runtime.Conditional(result, yes, parse(state, access, 62 /* Assign */, bindingType));
          state.assignable = false;
      }
      // tslint:disable-next-line:no-any
      if (62 /* Assign */ < minPrecedence)
          return result;
      /** parseAssignmentExpression
       * https://tc39.github.io/ecma262/#prod-AssignmentExpression
       * Note: AssignmentExpression here is equivalent to ES Expression because we don't parse the comma operator
       *
       * AssignmentExpression :
       *   1. ConditionalExpression
       *   2. LeftHandSideExpression = AssignmentExpression
       *
       * IsValidAssignmentTarget
       *   1,2 = false
       */
      if (consumeOpt(state, 1048615 /* Equals */)) {
          if (!state.assignable) {
              throw kernel.Reporter.error(150 /* NotAssignable */, { state });
          }
          result = new runtime.Assign(result, parse(state, access, 62 /* Assign */, bindingType));
      }
      // tslint:disable-next-line:no-any
      if (61 /* Variadic */ < minPrecedence)
          return result;
      /** parseValueConverter
       */
      while (consumeOpt(state, 1572883 /* Bar */)) {
          if (state.currentToken === 1572864 /* EOF */) {
              throw kernel.Reporter.error(112);
          }
          const name = state.tokenValue;
          nextToken(state);
          const args = new Array();
          while (consumeOpt(state, 1572878 /* Colon */)) {
              args.push(parse(state, access, 62 /* Assign */, bindingType));
          }
          result = new runtime.ValueConverter(result, name, args);
      }
      /** parseBindingBehavior
       */
      while (consumeOpt(state, 1572880 /* Ampersand */)) {
          if (state.currentToken === 1572864 /* EOF */) {
              throw kernel.Reporter.error(113);
          }
          const name = state.tokenValue;
          nextToken(state);
          const args = new Array();
          while (consumeOpt(state, 1572878 /* Colon */)) {
              args.push(parse(state, access, 62 /* Assign */, bindingType));
          }
          result = new runtime.BindingBehavior(result, name, args);
      }
      if (state.currentToken !== 1572864 /* EOF */) {
          if (bindingType & 2048 /* Interpolation */) {
              // tslint:disable-next-line:no-any
              return result;
          }
          if (state.tokenRaw === 'of') {
              throw kernel.Reporter.error(151 /* UnexpectedForOf */, { state });
          }
          throw kernel.Reporter.error(101 /* UnconsumedToken */, { state });
      }
      // tslint:disable-next-line:no-any
      return result;
  }
  /**
   * parseArrayLiteralExpression
   * https://tc39.github.io/ecma262/#prod-ArrayLiteral
   *
   * ArrayLiteral :
   *   [ Elision(opt) ]
   *   [ ElementList ]
   *   [ ElementList, Elision(opt) ]
   *
   * ElementList :
   *   Elision(opt) AssignmentExpression
   *   ElementList, Elision(opt) AssignmentExpression
   *
   * Elision :
   *  ,
   *  Elision ,
   */
  function parseArrayLiteralExpression(state, access, bindingType) {
      nextToken(state);
      const elements = new Array();
      while (state.currentToken !== 1835021 /* CloseBracket */) {
          if (consumeOpt(state, 1572875 /* Comma */)) {
              elements.push($undefined);
              if (state.currentToken === 1835021 /* CloseBracket */) {
                  elements.push($undefined);
                  break;
              }
          }
          else {
              elements.push(parse(state, access, 62 /* Assign */, bindingType & ~512 /* IsIterator */));
              if (consumeOpt(state, 1572875 /* Comma */)) {
                  if (state.currentToken === 1835021 /* CloseBracket */) {
                      elements.push($undefined);
                      break;
                  }
              }
              else {
                  break;
              }
          }
      }
      consume(state, 1835021 /* CloseBracket */);
      if (bindingType & 512 /* IsIterator */) {
          return new runtime.ArrayBindingPattern(elements);
      }
      else {
          state.assignable = false;
          return new runtime.ArrayLiteral(elements);
      }
  }
  function parseForOfStatement(state, result) {
      if ((result.$kind & 65536 /* IsForDeclaration */) === 0) {
          throw kernel.Reporter.error(106 /* InvalidForDeclaration */, { state });
      }
      if (state.currentToken !== 1051179 /* OfKeyword */) {
          throw kernel.Reporter.error(106 /* InvalidForDeclaration */, { state });
      }
      nextToken(state);
      const declaration = result;
      const statement = parse(state, 0 /* Reset */, 61 /* Variadic */, 0 /* None */);
      return new runtime.ForOfStatement(declaration, statement);
  }
  /**
   * parseObjectLiteralExpression
   * https://tc39.github.io/ecma262/#prod-Literal
   *
   * ObjectLiteral :
   *   { }
   *   { PropertyDefinitionList }
   *
   * PropertyDefinitionList :
   *   PropertyDefinition
   *   PropertyDefinitionList, PropertyDefinition
   *
   * PropertyDefinition :
   *   IdentifierName
   *   PropertyName : AssignmentExpression
   *
   * PropertyName :
   *   IdentifierName
   *   StringLiteral
   *   NumericLiteral
   */
  function parseObjectLiteralExpression(state, bindingType) {
      const keys = new Array();
      const values = new Array();
      nextToken(state);
      while (state.currentToken !== 1835017 /* CloseBrace */) {
          keys.push(state.tokenValue);
          // Literal = mandatory colon
          if (state.currentToken & 12288 /* StringOrNumericLiteral */) {
              nextToken(state);
              consume(state, 1572878 /* Colon */);
              values.push(parse(state, 0 /* Reset */, 62 /* Assign */, bindingType & ~512 /* IsIterator */));
          }
          else if (state.currentToken & 3072 /* IdentifierName */) {
              // IdentifierName = optional colon
              const { currentChar, currentToken, index } = state;
              nextToken(state);
              if (consumeOpt(state, 1572878 /* Colon */)) {
                  values.push(parse(state, 0 /* Reset */, 62 /* Assign */, bindingType & ~512 /* IsIterator */));
              }
              else {
                  // Shorthand
                  state.currentChar = currentChar;
                  state.currentToken = currentToken;
                  state.index = index;
                  values.push(parse(state, 0 /* Reset */, 450 /* Primary */, bindingType & ~512 /* IsIterator */));
              }
          }
          else {
              throw kernel.Reporter.error(107 /* InvalidObjectLiteralPropertyDefinition */, { state });
          }
          if (state.currentToken !== 1835017 /* CloseBrace */) {
              consume(state, 1572875 /* Comma */);
          }
      }
      consume(state, 1835017 /* CloseBrace */);
      if (bindingType & 512 /* IsIterator */) {
          return new runtime.ObjectBindingPattern(keys, values);
      }
      else {
          state.assignable = false;
          return new runtime.ObjectLiteral(keys, values);
      }
  }
  function parseInterpolation(state) {
      const parts = [];
      const expressions = [];
      const length = state.length;
      let result = '';
      while (state.index < length) {
          switch (state.currentChar) {
              case 36 /* Dollar */:
                  if (state.input.charCodeAt(state.index + 1) === 123 /* OpenBrace */) {
                      parts.push(result);
                      result = '';
                      state.index += 2;
                      state.currentChar = state.input.charCodeAt(state.index);
                      nextToken(state);
                      const expression = parse(state, 0 /* Reset */, 61 /* Variadic */, 2048 /* Interpolation */);
                      expressions.push(expression);
                      continue;
                  }
                  else {
                      result += '$';
                  }
                  break;
              case 92 /* Backslash */:
                  result += String.fromCharCode(unescapeCode(nextChar(state)));
                  break;
              default:
                  result += String.fromCharCode(state.currentChar);
          }
          nextChar(state);
      }
      if (expressions.length) {
          parts.push(result);
          return new runtime.Interpolation(parts, expressions);
      }
      return null;
  }
  /**
   * parseTemplateLiteralExpression
   * https://tc39.github.io/ecma262/#prod-Literal
   *
   * Template :
   *   NoSubstitutionTemplate
   *   TemplateHead
   *
   * NoSubstitutionTemplate :
   *   ` TemplateCharacters(opt) `
   *
   * TemplateHead :
   *   ` TemplateCharacters(opt) ${
   *
   * TemplateSubstitutionTail :
   *   TemplateMiddle
   *   TemplateTail
   *
   * TemplateMiddle :
   *   } TemplateCharacters(opt) ${
   *
   * TemplateTail :
   *   } TemplateCharacters(opt) `
   *
   * TemplateCharacters :
   *   TemplateCharacter TemplateCharacters(opt)
   *
   * TemplateCharacter :
   *   $ [lookahead ≠ {]
   *   \ EscapeSequence
   *   SourceCharacter (but not one of ` or \ or $)
   */
  function parseTemplate(state, access, bindingType, result, tagged) {
      const cooked = [state.tokenValue];
      //const raw = [state.tokenRaw];
      consume(state, 540714 /* TemplateContinuation */);
      const expressions = [parse(state, access, 62 /* Assign */, bindingType)];
      while ((state.currentToken = scanTemplateTail(state)) !== 540713 /* TemplateTail */) {
          cooked.push(state.tokenValue);
          // if (tagged) {
          //   raw.push(state.tokenRaw);
          // }
          consume(state, 540714 /* TemplateContinuation */);
          expressions.push(parse(state, access, 62 /* Assign */, bindingType));
      }
      cooked.push(state.tokenValue);
      state.assignable = false;
      if (tagged) {
          //raw.push(state.tokenRaw);
          nextToken(state);
          return new runtime.TaggedTemplate(cooked, cooked, result, expressions);
      }
      else {
          nextToken(state);
          return new runtime.Template(cooked, expressions);
      }
  }
  function nextToken(state) {
      while (state.index < state.length) {
          state.startIndex = state.index;
          if ((state.currentToken = CharScanners[state.currentChar](state)) !== null) { // a null token means the character must be skipped
              return;
          }
      }
      state.currentToken = 1572864 /* EOF */;
  }
  function nextChar(state) {
      return state.currentChar = state.input.charCodeAt(++state.index);
  }
  function scanIdentifier(state) {
      // run to the next non-idPart
      while (IdParts[nextChar(state)])
          ;
      const token = KeywordLookup[state.tokenValue = state.tokenRaw];
      return token === undefined ? 1024 /* Identifier */ : token;
  }
  function scanNumber(state, isFloat) {
      let char = state.currentChar;
      if (isFloat === false) {
          do {
              char = nextChar(state);
          } while (char <= 57 /* Nine */ && char >= 48 /* Zero */);
          if (char !== 46 /* Dot */) {
              state.tokenValue = parseInt(state.tokenRaw, 10);
              return 8192 /* NumericLiteral */;
          }
          // past this point it's always a float
          char = nextChar(state);
          if (state.index >= state.length) {
              // unless the number ends with a dot - that behaves a little different in native ES expressions
              // but in our AST that behavior has no effect because numbers are always stored in variables
              state.tokenValue = parseInt(state.tokenRaw.slice(0, -1), 10);
              return 8192 /* NumericLiteral */;
          }
      }
      if (char <= 57 /* Nine */ && char >= 48 /* Zero */) {
          do {
              char = nextChar(state);
          } while (char <= 57 /* Nine */ && char >= 48 /* Zero */);
      }
      else {
          state.currentChar = state.input.charCodeAt(--state.index);
      }
      state.tokenValue = parseFloat(state.tokenRaw);
      return 8192 /* NumericLiteral */;
  }
  function scanString(state) {
      const quote = state.currentChar;
      nextChar(state); // Skip initial quote.
      let unescaped = 0;
      const buffer = new Array();
      let marker = state.index;
      while (state.currentChar !== quote) {
          if (state.currentChar === 92 /* Backslash */) {
              buffer.push(state.input.slice(marker, state.index));
              nextChar(state);
              unescaped = unescapeCode(state.currentChar);
              nextChar(state);
              buffer.push(String.fromCharCode(unescaped));
              marker = state.index;
          }
          else if (state.index >= state.length) {
              throw kernel.Reporter.error(108 /* UnterminatedQuote */, { state });
          }
          else {
              nextChar(state);
          }
      }
      const last = state.input.slice(marker, state.index);
      nextChar(state); // Skip terminating quote.
      // Compute the unescaped string value.
      buffer.push(last);
      const unescapedStr = buffer.join('');
      state.tokenValue = unescapedStr;
      return 4096 /* StringLiteral */;
  }
  function scanTemplate(state) {
      let tail = true;
      let result = '';
      while (nextChar(state) !== 96 /* Backtick */) {
          if (state.currentChar === 36 /* Dollar */) {
              if ((state.index + 1) < state.length && state.input.charCodeAt(state.index + 1) === 123 /* OpenBrace */) {
                  state.index++;
                  tail = false;
                  break;
              }
              else {
                  result += '$';
              }
          }
          else if (state.currentChar === 92 /* Backslash */) {
              result += String.fromCharCode(unescapeCode(nextChar(state)));
          }
          else {
              if (state.index >= state.length) {
                  throw kernel.Reporter.error(109 /* UnterminatedTemplate */, { state });
              }
              result += String.fromCharCode(state.currentChar);
          }
      }
      nextChar(state);
      state.tokenValue = result;
      if (tail) {
          return 540713 /* TemplateTail */;
      }
      return 540714 /* TemplateContinuation */;
  }
  function scanTemplateTail(state) {
      if (state.index >= state.length) {
          throw kernel.Reporter.error(109 /* UnterminatedTemplate */, { state });
      }
      state.index--;
      return scanTemplate(state);
  }
  function consumeOpt(state, token) {
      // tslint:disable-next-line:possible-timing-attack
      if (state.currentToken === token) {
          nextToken(state);
          return true;
      }
      return false;
  }
  function consume(state, token) {
      // tslint:disable-next-line:possible-timing-attack
      if (state.currentToken === token) {
          nextToken(state);
      }
      else {
          throw kernel.Reporter.error(110 /* MissingExpectedToken */, { state, expected: token });
      }
  }
  /**
   * Array for mapping tokens to token values. The indices of the values
   * correspond to the token bits 0-38.
   * For this to work properly, the values in the array must be kept in
   * the same order as the token bits.
   * Usage: TokenValues[token & Token.Type]
   */
  const TokenValues = [
      $false, $true, $null, $undefined, '$this', '$parent',
      '(', '{', '.', '}', ')', ',', '[', ']', ':', '?', '\'', '"',
      '&', '|', '||', '&&', '==', '!=', '===', '!==', '<', '>',
      '<=', '>=', 'in', 'instanceof', '+', '-', 'typeof', 'void', '*', '%', '/', '=', '!',
      540713 /* TemplateTail */, 540714 /* TemplateContinuation */,
      'of'
  ];
  const KeywordLookup = Object.create(null);
  KeywordLookup.true = 2049 /* TrueKeyword */;
  KeywordLookup.null = 2050 /* NullKeyword */;
  KeywordLookup.false = 2048 /* FalseKeyword */;
  KeywordLookup.undefined = 2051 /* UndefinedKeyword */;
  KeywordLookup.$this = 3076 /* ThisScope */;
  KeywordLookup.$parent = 3077 /* ParentScope */;
  KeywordLookup.in = 1640798 /* InKeyword */;
  KeywordLookup.instanceof = 1640799 /* InstanceOfKeyword */;
  KeywordLookup.typeof = 34850 /* TypeofKeyword */;
  KeywordLookup.void = 34851 /* VoidKeyword */;
  KeywordLookup.of = 1051179 /* OfKeyword */;
  /**
   * Ranges of code points in pairs of 2 (eg 0x41-0x5B, 0x61-0x7B, ...) where the second value is not inclusive (5-7 means 5 and 6)
   * Single values are denoted by the second value being a 0
   *
   * Copied from output generated with "node build/generate-unicode.js"
   *
   * See also: https://en.wikibooks.org/wiki/Unicode/Character_reference/0000-0FFF
   */
  const codes = {
      /* [$0-9A-Za_a-z] */
      AsciiIdPart: [0x24, 0, 0x30, 0x3A, 0x41, 0x5B, 0x5F, 0, 0x61, 0x7B],
      IdStart: /*IdentifierStart*/ [0x24, 0, 0x41, 0x5B, 0x5F, 0, 0x61, 0x7B, 0xAA, 0, 0xBA, 0, 0xC0, 0xD7, 0xD8, 0xF7, 0xF8, 0x2B9, 0x2E0, 0x2E5, 0x1D00, 0x1D26, 0x1D2C, 0x1D5D, 0x1D62, 0x1D66, 0x1D6B, 0x1D78, 0x1D79, 0x1DBF, 0x1E00, 0x1F00, 0x2071, 0, 0x207F, 0, 0x2090, 0x209D, 0x212A, 0x212C, 0x2132, 0, 0x214E, 0, 0x2160, 0x2189, 0x2C60, 0x2C80, 0xA722, 0xA788, 0xA78B, 0xA7AF, 0xA7B0, 0xA7B8, 0xA7F7, 0xA800, 0xAB30, 0xAB5B, 0xAB5C, 0xAB65, 0xFB00, 0xFB07, 0xFF21, 0xFF3B, 0xFF41, 0xFF5B],
      Digit: /*DecimalNumber*/ [0x30, 0x3A],
      Skip: /*Skippable*/ [0, 0x21, 0x7F, 0xA1]
  };
  /**
   * Decompress the ranges into an array of numbers so that the char code
   * can be used as an index to the lookup
   */
  function decompress(lookup, $set, compressed, value) {
      const rangeCount = compressed.length;
      for (let i = 0; i < rangeCount; i += 2) {
          const start = compressed[i];
          let end = compressed[i + 1];
          end = end > 0 ? end : start + 1;
          if (lookup) {
              lookup.fill(value, start, end);
          }
          if ($set) {
              for (let ch = start; ch < end; ch++) {
                  $set.add(ch);
              }
          }
      }
  }
  // CharFuncLookup functions
  function returnToken(token) {
      return s => {
          nextChar(s);
          return token;
      };
  }
  const unexpectedCharacter = s => {
      throw kernel.Reporter.error(111 /* UnexpectedCharacter */, { state: s });
  };
  unexpectedCharacter.notMapped = true;
  // ASCII IdentifierPart lookup
  const AsciiIdParts = new Set();
  decompress(null, AsciiIdParts, codes.AsciiIdPart, true);
  // IdentifierPart lookup
  const IdParts = new Uint8Array(0xFFFF);
  // tslint:disable-next-line:no-any
  decompress(IdParts, null, codes.IdStart, 1);
  // tslint:disable-next-line:no-any
  decompress(IdParts, null, codes.Digit, 1);
  // Character scanning function lookup
  const CharScanners = new Array(0xFFFF);
  CharScanners.fill(unexpectedCharacter, 0, 0xFFFF);
  decompress(CharScanners, null, codes.Skip, s => {
      nextChar(s);
      return null;
  });
  decompress(CharScanners, null, codes.IdStart, scanIdentifier);
  decompress(CharScanners, null, codes.Digit, s => scanNumber(s, false));
  CharScanners[34 /* DoubleQuote */] =
      CharScanners[39 /* SingleQuote */] = s => {
          return scanString(s);
      };
  CharScanners[96 /* Backtick */] = s => {
      return scanTemplate(s);
  };
  // !, !=, !==
  CharScanners[33 /* Exclamation */] = s => {
      if (nextChar(s) !== 61 /* Equals */) {
          return 32808 /* Exclamation */;
      }
      if (nextChar(s) !== 61 /* Equals */) {
          return 1638679 /* ExclamationEquals */;
      }
      nextChar(s);
      return 1638681 /* ExclamationEqualsEquals */;
  };
  // =, ==, ===
  CharScanners[61 /* Equals */] = s => {
      if (nextChar(s) !== 61 /* Equals */) {
          return 1048615 /* Equals */;
      }
      if (nextChar(s) !== 61 /* Equals */) {
          return 1638678 /* EqualsEquals */;
      }
      nextChar(s);
      return 1638680 /* EqualsEqualsEquals */;
  };
  // &, &&
  CharScanners[38 /* Ampersand */] = s => {
      if (nextChar(s) !== 38 /* Ampersand */) {
          return 1572880 /* Ampersand */;
      }
      nextChar(s);
      return 1638613 /* AmpersandAmpersand */;
  };
  // |, ||
  CharScanners[124 /* Bar */] = s => {
      if (nextChar(s) !== 124 /* Bar */) {
          return 1572883 /* Bar */;
      }
      nextChar(s);
      return 1638548 /* BarBar */;
  };
  // .
  CharScanners[46 /* Dot */] = s => {
      if (nextChar(s) <= 57 /* Nine */ && s.currentChar >= 48 /* Zero */) {
          return scanNumber(s, true);
      }
      return 16392 /* Dot */;
  };
  // <, <=
  CharScanners[60 /* LessThan */] = s => {
      if (nextChar(s) !== 61 /* Equals */) {
          return 1638746 /* LessThan */;
      }
      nextChar(s);
      return 1638748 /* LessThanEquals */;
  };
  // >, >=
  CharScanners[62 /* GreaterThan */] = s => {
      if (nextChar(s) !== 61 /* Equals */) {
          return 1638747 /* GreaterThan */;
      }
      nextChar(s);
      return 1638749 /* GreaterThanEquals */;
  };
  CharScanners[37 /* Percent */] = returnToken(1638885 /* Percent */);
  CharScanners[40 /* OpenParen */] = returnToken(671750 /* OpenParen */);
  CharScanners[41 /* CloseParen */] = returnToken(1835018 /* CloseParen */);
  CharScanners[42 /* Asterisk */] = returnToken(1638884 /* Asterisk */);
  CharScanners[43 /* Plus */] = returnToken(623008 /* Plus */);
  CharScanners[44 /* Comma */] = returnToken(1572875 /* Comma */);
  CharScanners[45 /* Minus */] = returnToken(623009 /* Minus */);
  CharScanners[47 /* Slash */] = returnToken(1638886 /* Slash */);
  CharScanners[58 /* Colon */] = returnToken(1572878 /* Colon */);
  CharScanners[63 /* Question */] = returnToken(1572879 /* Question */);
  CharScanners[91 /* OpenBracket */] = returnToken(671756 /* OpenBracket */);
  CharScanners[93 /* CloseBracket */] = returnToken(1835021 /* CloseBracket */);
  CharScanners[123 /* OpenBrace */] = returnToken(131079 /* OpenBrace */);
  CharScanners[125 /* CloseBrace */] = returnToken(1835017 /* CloseBrace */);

  const domParser = runtime.DOM.createElement('div');
  const marker = runtime.DOM.createElement('au-marker');
  marker.classList.add('au');
  const createMarker = marker.cloneNode.bind(marker, false);
  class ElementSyntax {
      constructor(node, name, $content, $children, $attributes) {
          this.node = node;
          this.name = name;
          this.$content = $content;
          this.$children = $children;
          this.$attributes = $attributes;
      }
      static createMarker() {
          return new ElementSyntax(createMarker(), 'au-marker', null, kernel.PLATFORM.emptyArray, kernel.PLATFORM.emptyArray);
      }
  }
  const IElementParser = kernel.DI.createInterface()
      .withDefault(x => x.singleton(exports.ElementParser));
  /*@internal*/
  exports.ElementParser = class ElementParser {
      constructor(attrParser) {
          this.attrParser = attrParser;
      }
      parse(markupOrNode) {
          let node;
          if (typeof markupOrNode === 'string') {
              domParser.innerHTML = markupOrNode;
              node = domParser.firstElementChild;
              domParser.removeChild(node);
          }
          else {
              node = markupOrNode;
          }
          let children;
          let content;
          if (node.nodeName === 'TEMPLATE') {
              content = this.parse(node.content);
              children = kernel.PLATFORM.emptyArray;
          }
          else {
              content = null;
              const nodeChildNodes = node.childNodes;
              const nodeLen = nodeChildNodes.length;
              if (nodeLen > 0) {
                  children = Array(nodeLen);
                  for (let i = 0, ii = nodeLen; i < ii; ++i) {
                      children[i] = this.parse(nodeChildNodes[i]);
                  }
              }
              else {
                  children = kernel.PLATFORM.emptyArray;
              }
          }
          let attributes;
          const nodeAttributes = node.attributes;
          const attrLen = nodeAttributes === undefined ? 0 : nodeAttributes.length;
          if (attrLen > 0) {
              attributes = Array(attrLen);
              for (let i = 0, ii = attrLen; i < ii; ++i) {
                  const attr = nodeAttributes[i];
                  attributes[i] = this.attrParser.parse(attr.name, attr.value);
              }
          }
          else {
              attributes = kernel.PLATFORM.emptyArray;
          }
          return new ElementSyntax(node, node.nodeName, content, children, attributes);
      }
  };
  exports.ElementParser = __decorate([
      kernel.inject(IAttributeParser)
  ], exports.ElementParser);

  class SemanticModel {
      constructor(definition, resources, attrParser, elParser, exprParser) {
          this.resources = resources;
          this.attrParser = attrParser;
          this.elParser = elParser;
          this.exprParser = exprParser;
          this.isSemanticModel = true;
          this.attrDefCache = {};
          this.elDefCache = {};
          this.commandCache = {};
          const syntax = this.elParser.parse(definition.template);
          definition.template = syntax.node;
          this.root = new ElementSymbol(
          /*   semanticModel*/ this, 
          /*isDefinitionRoot*/ true, 
          /* $definitionRoot*/ null, 
          /*         $parent*/ null, 
          /*          syntax*/ syntax, 
          /*      definition*/ definition);
      }
      static create(definition, resources, attrParser, elParser, exprParser) {
          if ('get' in attrParser) {
              const locator = attrParser;
              attrParser = locator.get(IAttributeParser);
              elParser = locator.get(IElementParser);
              exprParser = locator.get(runtime.IExpressionParser);
          }
          return new SemanticModel(definition, resources, attrParser, elParser, exprParser);
      }
      getAttributeDefinition(name) {
          const existing = this.attrDefCache[name];
          if (existing !== undefined) {
              return existing;
          }
          const definition = this.resources.find(runtime.CustomAttributeResource, name);
          return this.attrDefCache[name] = definition === undefined ? null : definition;
      }
      getElementDefinition(name) {
          const existing = this.elDefCache[name];
          if (existing !== undefined) {
              return existing;
          }
          const definition = this.resources.find(runtime.CustomElementResource, name);
          return this.elDefCache[name] = definition === undefined ? null : definition;
      }
      getBindingCommand(name) {
          const existing = this.commandCache[name];
          if (existing !== undefined) {
              return existing;
          }
          const instance = this.resources.create(BindingCommandResource, name);
          return this.commandCache[name] = instance === undefined ? null : instance;
      }
      getAttributeSymbol(syntax, element) {
          const definition = this.getAttributeDefinition(kernel.PLATFORM.camelCase(syntax.target));
          const command = this.getBindingCommand(syntax.command);
          return new AttributeSymbol(this, element, syntax, definition, command);
      }
      getMultiAttrBindingSymbol(syntax, parent) {
          const command = this.getBindingCommand(syntax.command);
          return new MultiAttributeBindingSymbol(this, parent, syntax, command);
      }
      getElementSymbol(syntax, parent) {
          const node = syntax.node;
          let definition;
          if (node.nodeType === 1 /* Element */) {
              const resourceKey = (node.getAttribute('as-element') || node.nodeName).toLowerCase();
              definition = this.getElementDefinition(resourceKey);
          }
          return new ElementSymbol(
          /*   semanticModel*/ this, 
          /*isDefinitionRoot*/ false, 
          /* $definitionRoot*/ parent.$root, 
          /*         $parent*/ parent, 
          /*          syntax*/ syntax, 
          /*      definition*/ definition);
      }
      getTemplateElementSymbol(syntax, parent, definition, definitionRoot) {
          return new ElementSymbol(
          /*   semanticModel*/ this, 
          /*isDefinitionRoot*/ true, 
          /* $definitionRoot*/ definitionRoot, 
          /*         $parent*/ parent, 
          /*          syntax*/ syntax, 
          /*      definition*/ definition);
      }
  }
  class MultiAttributeBindingSymbol {
      constructor(semanticModel, $parent, syntax, command) {
          this.semanticModel = semanticModel;
          this.$parent = $parent;
          this.syntax = syntax;
          this.command = command;
          this.isMultiAttrBinding = true;
          this.res = null;
          this.bindable = null;
          this.isTemplateController = false;
          this.isCustomAttribute = true;
          this.isAttributeBindable = false;
          this.isDefaultAttributeBindable = false;
          this.onCustomElement = false;
          this.isElementBindable = false;
          this.$element = null;
          this.target = syntax.target;
          this.rawName = syntax.rawName;
          this.rawValue = syntax.rawValue;
          this.rawCommand = syntax.command;
          this.hasBindingCommand = !!command;
          this.isHandledByBindingCommand = this.hasBindingCommand && command.handles(this);
          const bindables = $parent.definition.bindables;
          for (const prop in bindables) {
              const b = bindables[prop];
              if (b.property === syntax.target) {
                  this.to = b.property;
                  this.mode = (b.mode !== undefined && b.mode !== runtime.BindingMode.default) ? b.mode : runtime.BindingMode.toView;
                  this.bindable = b;
                  this.isAttributeBindable = true;
                  break;
              }
          }
          if (!this.isAttributeBindable) {
              const defaultBindingMode = $parent.definition.defaultBindingMode;
              this.to = syntax.target;
              this.mode = defaultBindingMode === undefined ? runtime.BindingMode.toView : defaultBindingMode;
          }
      }
  }
  class AttributeSymbol {
      constructor(semanticModel, $element, syntax, definition, command) {
          this.semanticModel = semanticModel;
          this.$element = $element;
          this.syntax = syntax;
          this.definition = definition;
          this.command = command;
          this.isMultiAttrBinding = false;
          this.res = null;
          this.bindable = null;
          this.isAttributeBindable = false;
          this.isDefaultAttributeBindable = false;
          this.isElementBindable = false;
          this.isBindable = false;
          this.isTemplateController = false;
          this.target = syntax.target;
          this.rawName = syntax.rawName;
          this.rawValue = syntax.rawValue;
          this.rawCommand = syntax.command;
          this.isCustomAttribute = !!definition;
          this.hasBindingCommand = !!command;
          this.isHandledByBindingCommand = this.hasBindingCommand && command.handles(this);
          this.onCustomElement = $element.isCustomElement;
          this._isProcessed = this.rawName === 'as-element'; // as-element is processed by the semantic model and shouldn't be processed by the template compiler
          if (this.isCustomAttribute) {
              this.isTemplateController = !!definition.isTemplateController;
              this.res = definition.name;
              const value = syntax.rawValue;
              let lastIndex = 0;
              let multiAttrBindings;
              for (let i = 0, ii = value.length; i < ii; ++i) {
                  if (value.charCodeAt(i) === 59 /* Semicolon */) {
                      if (!this.isMultiAttrBinding) {
                          multiAttrBindings = [];
                          this.isMultiAttrBinding = true;
                      }
                      const innerAttr = value.slice(lastIndex, i).trim();
                      lastIndex = i + 1;
                      if (innerAttr.length === 0) {
                          continue;
                      }
                      for (let j = 0, jj = innerAttr.length; j < jj; ++j) {
                          if (innerAttr.charCodeAt(j) === 58 /* Colon */) {
                              const innerAttrName = innerAttr.slice(0, j).trim();
                              const innerAttrValue = innerAttr.slice(j + 1).trim();
                              const innerAttrSyntax = this.semanticModel.attrParser.parse(innerAttrName, innerAttrValue);
                              multiAttrBindings.push(this.semanticModel.getMultiAttrBindingSymbol(innerAttrSyntax, this));
                          }
                      }
                  }
              }
              this.$multiAttrBindings = this.isMultiAttrBinding ? multiAttrBindings : kernel.PLATFORM.emptyArray;
              const bindables = definition.bindables;
              if (!this.isMultiAttrBinding) {
                  for (const prop in bindables) {
                      const b = bindables[prop];
                      this.to = b.property;
                      this.mode = (b.mode !== undefined && b.mode !== runtime.BindingMode.default) ? b.mode : (definition.defaultBindingMode || runtime.BindingMode.toView);
                      this.bindable = b;
                      this.isBindable = this.isAttributeBindable = true;
                      break;
                  }
                  if (!this.isAttributeBindable) {
                      const defaultBindingMode = definition.defaultBindingMode;
                      this.to = 'value';
                      this.mode = defaultBindingMode === undefined ? runtime.BindingMode.toView : defaultBindingMode;
                      this.isBindable = this.isAttributeBindable = this.isDefaultAttributeBindable = true;
                  }
              }
          }
          else if ($element.isCustomElement) {
              const bindables = $element.definition.bindables;
              for (const prop in bindables) {
                  const b = bindables[prop];
                  if (b.attribute === syntax.target) {
                      this.to = b.property;
                      this.mode = (b.mode !== undefined && b.mode !== runtime.BindingMode.default) ? b.mode : runtime.BindingMode.toView;
                      this.bindable = b;
                      this.isBindable = this.isElementBindable = true;
                      break;
                  }
              }
              if (!this.isElementBindable) {
                  this.to = syntax.target;
                  this.mode = runtime.BindingMode.toView;
              }
          }
          else {
              this.to = syntax.target;
              this.mode = runtime.BindingMode.toView;
          }
      }
      get isProcessed() {
          return this._isProcessed;
      }
      markAsProcessed() {
          this._isProcessed = true;
          if (this.isTemplateController) {
              this.$element.node.removeAttribute(this.rawName);
          }
      }
  }
  class ElementSymbol {
      constructor(semanticModel, isRoot, $root, $parent, syntax, definition) {
          this.semanticModel = semanticModel;
          this.isRoot = isRoot;
          this.$root = $root;
          this.$parent = $parent;
          this.definition = definition;
          this._$content = null;
          this._isMarker = false;
          this._isTemplate = false;
          this._isSlot = false;
          this._isLet = false;
          this._isLifted = false;
          this.$root = isRoot ? this : $root;
          this._node = syntax.node;
          this._syntax = syntax;
          this._name = this.node.nodeName;
          switch (this.name) {
              case 'TEMPLATE':
                  this._isTemplate = true;
                  this._$content = this.semanticModel.getElementSymbol(syntax.$content, this);
                  break;
              case 'SLOT':
                  this._isSlot = true;
                  break;
              case 'LET':
                  this._isLet = true;
          }
          this._isCustomElement = !isRoot && !!definition;
          const attributes = syntax.$attributes;
          const attrLen = attributes.length;
          if (attrLen > 0) {
              const attrSymbols = Array(attrLen);
              for (let i = 0, ii = attrLen; i < ii; ++i) {
                  attrSymbols[i] = this.semanticModel.getAttributeSymbol(attributes[i], this);
              }
              this.$attributes = attrSymbols;
          }
          else {
              this.$attributes = kernel.PLATFORM.emptyArray;
          }
          const children = syntax.$children;
          const childLen = children.length;
          if (childLen > 0) {
              const childSymbols = Array(childLen);
              for (let i = 0, ii = childLen; i < ii; ++i) {
                  childSymbols[i] = this.semanticModel.getElementSymbol(children[i], this);
              }
              this.$children = childSymbols;
          }
          else {
              this.$children = kernel.PLATFORM.emptyArray;
          }
      }
      get $content() {
          return this._$content;
      }
      get isMarker() {
          return this._isMarker;
      }
      get isTemplate() {
          return this._isTemplate;
      }
      get isSlot() {
          return this._isSlot;
      }
      get isLet() {
          return this._isLet;
      }
      get node() {
          return this._node;
      }
      get syntax() {
          return this._syntax;
      }
      get name() {
          return this._name;
      }
      get isCustomElement() {
          return this._isCustomElement;
      }
      get nextSibling() {
          if (!this.$parent) {
              return null;
          }
          const siblings = this.$parent.$children;
          for (let i = 0, ii = siblings.length; i < ii; ++i) {
              if (siblings[i] === this) {
                  const nextSibling = siblings[i + 1];
                  return nextSibling === undefined ? null : nextSibling;
              }
          }
          return null;
      }
      get firstChild() {
          const firstChild = this.$children[0];
          return firstChild === undefined ? null : firstChild;
      }
      get componentRoot() {
          return this.semanticModel.root;
      }
      get isLifted() {
          return this._isLifted;
      }
      makeTarget() {
          this.node.classList.add('au');
      }
      replaceTextNodeWithMarker() {
          const marker = ElementSyntax.createMarker();
          const node = this.node;
          node.parentNode.insertBefore(marker.node, node);
          node.textContent = ' ';
          while (node.nextSibling && node.nextSibling.nodeType === 3 /* Text */) {
              node.parentNode.removeChild(node.nextSibling);
          }
          this.setToMarker(marker);
      }
      replaceNodeWithMarker() {
          const marker = ElementSyntax.createMarker();
          const node = this.node;
          if (node.parentNode) {
              node.parentNode.replaceChild(marker.node, node);
          }
          else if (this.isTemplate) {
              node.content.appendChild(marker.node);
          }
          this.setToMarker(marker);
      }
      lift(instruction) {
          const template = instruction.def.template = runtime.DOM.createElement('template');
          const node = this.node;
          if (this.isTemplate) {
              // copy remaining attributes over to the newly created template
              const attributes = node.attributes;
              while (attributes.length) {
                  const attr = attributes[0];
                  template.setAttribute(attr.name, attr.value);
                  node.removeAttribute(attr.name);
              }
              template.content.appendChild(node.content);
              this.replaceNodeWithMarker();
          }
          else {
              this.replaceNodeWithMarker();
              template.content.appendChild(node);
          }
          this.addInstructions([instruction]);
          this._isLifted = true;
          return this.semanticModel.getTemplateElementSymbol(this.semanticModel.elParser.parse(template), this, instruction.def, null);
      }
      addInstructions(instructions) {
          const def = this.$root.definition;
          if (def.instructions === kernel.PLATFORM.emptyArray) {
              def.instructions = [];
          }
          def.instructions.push(instructions);
      }
      setToMarker(marker) {
          this._$content = null;
          this._isCustomElement = this._isLet = this._isSlot = this._isTemplate = false;
          this._isMarker = true;
          this._name = 'AU-MARKER';
          this._node = marker.node;
          this._syntax = marker;
      }
  }

  exports.TemplateCompiler = class TemplateCompiler {
      constructor(exprParser, elParser, attrParser) {
          this.exprParser = exprParser;
          this.elParser = elParser;
          this.attrParser = attrParser;
      }
      get name() {
          return 'default';
      }
      compile(definition, resources, flags) {
          const model = SemanticModel.create(definition, resources, this.attrParser, this.elParser, this.exprParser);
          const root = model.root;
          let $el = root.isTemplate ? root.$content : root;
          while ($el = this.compileNode($el))
              ;
          // the flag should be passed correctly from rendering engine
          if (root.isTemplate && (flags & runtime.ViewCompileFlags.surrogate)) {
              this.compileSurrogate(root);
          }
          return definition;
      }
      compileNode($el) {
          const node = $el.node;
          const nextSibling = $el.nextSibling;
          switch (node.nodeType) {
              case 1 /* Element */:
                  if ($el.isSlot) {
                      $el.$root.definition.hasSlots = true;
                  }
                  else if ($el.isLet) {
                      this.compileLetElement($el);
                  }
                  else if ($el.isCustomElement) {
                      this.compileCustomElement($el);
                  }
                  else {
                      this.compileElementNode($el);
                  }
                  if (!$el.isLifted) {
                      let $child = $el.firstChild || $el.$content;
                      while ($child) {
                          $child = this.compileNode($child);
                      }
                  }
                  return nextSibling;
              case 3 /* Text */:
                  const expression = this.exprParser.parse($el.node.wholeText, 2048 /* Interpolation */);
                  if (expression === null) {
                      while (($el = $el.nextSibling) && $el.node.nodeType === 3 /* Text */)
                          ;
                      return $el;
                  }
                  $el.replaceTextNodeWithMarker();
                  $el.addInstructions([new TextBindingInstruction(expression)]);
                  return nextSibling;
              case 8 /* Comment */:
                  return nextSibling;
              case 9 /* Document */:
                  return $el.firstChild;
              case 10 /* DocumentType */:
                  return nextSibling;
              case 11 /* DocumentFragment */:
                  return $el.firstChild;
          }
      }
      compileSurrogate($el) {
          const attributes = $el.$attributes;
          for (let i = 0, ii = attributes.length; i < ii; ++i) {
              const $attr = attributes[i];
              if ($attr.isTemplateController) {
                  throw new Error('Cannot have template controller on surrogate element.');
              }
              const instruction = this.compileAttribute($attr);
              if (instruction !== null) {
                  $el.definition.surrogates.push(instruction);
              }
              else {
                  let attrInst;
                  // Doesn't make sense for these properties as they need to be unique
                  const name = $attr.target;
                  if (name !== 'id' && name !== 'part' && name !== 'replace-part') {
                      switch (name) {
                          // TODO: handle simple surrogate style attribute
                          case 'style':
                              attrInst = new SetAttributeInstruction($attr.rawValue, name);
                              break;
                          default:
                              attrInst = new SetAttributeInstruction($attr.rawValue, name);
                      }
                      $el.definition.surrogates.push(attrInst);
                  }
                  else {
                      throw new Error(`Invalid surrogate attribute: ${name}`);
                  }
              }
          }
      }
      compileElementNode($el) {
          if ($el.$attributes.length === 0) {
              return;
          }
          const attributes = $el.$attributes;
          const attributeInstructions = [];
          for (let i = 0, ii = attributes.length; i < ii; ++i) {
              const $attr = attributes[i];
              if ($attr.isProcessed)
                  continue;
              $attr.markAsProcessed();
              if ($attr.isTemplateController) {
                  let instruction = this.compileAttribute($attr);
                  // compileAttribute will return a HydrateTemplateController if there is a binding command registered that produces one (in our case only "for")
                  if (instruction.type !== "m" /* hydrateTemplateController */) {
                      const name = $attr.res;
                      instruction = new HydrateTemplateController({ name, instructions: [] }, name, [instruction], name === 'else');
                  }
                  // all attribute instructions preceding the template controller become children of the hydrate instruction
                  instruction.instructions.push(...attributeInstructions);
                  this.compileNode($el.lift(instruction));
                  return;
              }
              else if ($attr.isCustomAttribute) {
                  attributeInstructions.push(this.compileCustomAttribute($attr));
              }
              else {
                  const instruction = this.compileAttribute($attr);
                  if (instruction !== null) {
                      attributeInstructions.push(instruction);
                  }
              }
          }
          if (attributeInstructions.length) {
              $el.addInstructions(attributeInstructions);
              $el.makeTarget();
          }
      }
      compileCustomElement($el) {
          if ($el.$attributes.length === 0) {
              $el.addInstructions([new HydrateElementInstruction($el.definition.name, kernel.PLATFORM.emptyArray)]);
              if ($el.definition.containerless) {
                  $el.replaceNodeWithMarker();
              }
              else {
                  $el.makeTarget();
              }
              return;
          }
          const attributeInstructions = [];
          // if there is a custom element, then only the attributes that map to bindables become children of the hydrate instruction,
          // otherwise they become sibling instructions; if there is no custom element, then sibling instructions are never appended to
          const siblingInstructions = [];
          const attributes = $el.$attributes;
          for (let i = 0, ii = attributes.length; i < ii; ++i) {
              const $attr = attributes[i];
              if ($attr.isProcessed)
                  continue;
              $attr.markAsProcessed();
              if ($attr.isTemplateController) {
                  let instruction = this.compileAttribute($attr);
                  // compileAttribute will return a HydrateTemplateController if there is a binding command registered that produces one (in our case only "for")
                  if (instruction.type !== "m" /* hydrateTemplateController */) {
                      const name = $attr.res;
                      instruction = new HydrateTemplateController({ name, instructions: [] }, name, [instruction], name === 'else');
                  }
                  // all attribute instructions preceding the template controller become children of the hydrate instruction
                  instruction.instructions.push(...attributeInstructions);
                  this.compileNode($el.lift(instruction));
                  return;
              }
              else if ($attr.isCustomAttribute) {
                  if ($attr.isAttributeBindable) {
                      siblingInstructions.push(this.compileCustomAttribute($attr));
                  }
                  else {
                      attributeInstructions.push(this.compileCustomAttribute($attr));
                  }
              }
              else {
                  const instruction = this.compileAttribute($attr);
                  if (instruction !== null) {
                      if (!$attr.isElementBindable) {
                          siblingInstructions.push(instruction);
                      }
                      else {
                          attributeInstructions.push(instruction);
                      }
                  }
              }
          }
          $el.addInstructions([new HydrateElementInstruction($el.definition.name, attributeInstructions), ...siblingInstructions]);
          if ($el.definition.containerless) {
              $el.replaceNodeWithMarker();
          }
          else {
              $el.makeTarget();
          }
      }
      compileCustomAttribute($attr) {
          const childInstructions = [];
          if ($attr.isMultiAttrBinding) {
              const mBindings = $attr.$multiAttrBindings;
              for (let j = 0, jj = mBindings.length; j < jj; ++j) {
                  childInstructions.push(this.compileAttribute(mBindings[j]));
              }
          }
          else {
              childInstructions.push(this.compileAttribute($attr));
          }
          return new HydrateAttributeInstruction($attr.res, childInstructions);
      }
      compileLetElement($el) {
          const letInstructions = [];
          const attributes = $el.$attributes;
          let toViewModel = false;
          for (let i = 0, ii = attributes.length; ii > i; ++i) {
              const $attr = attributes[i];
              const to = kernel.PLATFORM.camelCase($attr.to);
              if ($attr.hasBindingCommand) {
                  const expr = this.exprParser.parse($attr.rawValue, 53 /* BindCommand */);
                  letInstructions.push(new LetBindingInstruction(expr, to));
              }
              else if ($attr.rawName === 'to-view-model') {
                  toViewModel = true;
                  $el.node.removeAttribute('to-view-model');
              }
              else {
                  const expr = this.exprParser.parse($attr.rawValue, 2048 /* Interpolation */);
                  if (expr === null) {
                      // Should just be a warning, but throw for now
                      throw new Error(`Invalid let binding. String liternal given for attribute: ${$attr.to}`);
                  }
                  letInstructions.push(new LetBindingInstruction(expr, to));
              }
          }
          $el.addInstructions([new LetElementInstruction(letInstructions, toViewModel)]);
          // theoretically there's no need to replace, but to keep it consistent
          $el.replaceNodeWithMarker();
      }
      compileAttribute($attr) {
          // binding commands get priority over all; they may override default behaviors
          // it is the responsibility of the implementor to ensure they filter out stuff they shouldn't override
          if ($attr.isHandledByBindingCommand) {
              return $attr.command.compile($attr);
          }
          // simple path for ref binding
          const parser = this.exprParser;
          if ($attr.target === 'ref') {
              return new RefBindingInstruction(parser.parse($attr.rawValue, 1280 /* IsRef */));
          }
          // simple path for style bindings (TODO: this doesnt work, but we need to use StylePropertyBindingInstruction right?)
          // if (target === 'style' || target === 'css') {
          //   const expression = parser.parse(value, BindingType.Interpolation);
          //   if (expression === null) {
          //     return null;
          //   }
          //   return new StylePropertyBindingInstruction(expression, target);
          // }
          // plain custom attribute on any kind of element
          if ($attr.isCustomAttribute) {
              if (!$attr.hasBindingCommand) {
                  const expression = parser.parse($attr.rawValue, 2048 /* Interpolation */);
                  if (expression !== null) {
                      return new InterpolationInstruction(expression, $attr.to);
                  }
                  if ($attr.isMultiAttrBinding) {
                      return new SetPropertyInstruction($attr.rawValue, $attr.to);
                  }
              }
              // intentional nested block without a statement to ensure the expression variable isn't shadowed
              // (we're not declaring it at the outer block for better typing without explicit casting)
              {
                  const expression = parser.parse($attr.rawValue, 50 /* ToViewCommand */);
                  switch ($attr.mode) {
                      case runtime.BindingMode.oneTime:
                          return new OneTimeBindingInstruction(expression, $attr.to);
                      case runtime.BindingMode.fromView:
                          return new FromViewBindingInstruction(expression, $attr.to);
                      case runtime.BindingMode.twoWay:
                          return new TwoWayBindingInstruction(expression, $attr.to);
                      case runtime.BindingMode.toView:
                      default:
                          return new ToViewBindingInstruction(expression, $attr.to);
                  }
              }
          }
          // plain attribute on a custom element
          if ($attr.onCustomElement) {
              // bindable attribute
              if ($attr.isElementBindable) {
                  const expression = parser.parse($attr.rawValue, 2048 /* Interpolation */);
                  if (expression === null) {
                      // no interpolation -> make it a setProperty on the component
                      return new SetPropertyInstruction($attr.rawValue, $attr.to);
                  }
                  // interpolation -> behave like toView (e.g. foo="${someProp}")
                  return new InterpolationInstruction(expression, $attr.to);
              }
          }
          {
              // plain attribute on a normal element
              const expression = parser.parse($attr.rawValue, 2048 /* Interpolation */);
              if (expression === null) {
                  // no interpolation -> do not return an instruction
                  return null;
              }
              // interpolation -> behave like toView (e.g. id="${someId}")
              return new InterpolationInstruction(expression, $attr.to);
          }
      }
  };
  exports.TemplateCompiler = __decorate([
      kernel.inject(runtime.IExpressionParser, IElementParser, IAttributeParser)
  ], exports.TemplateCompiler);

  const globalResources = [
      runtime.Compose,
      runtime.If,
      runtime.Else,
      runtime.Repeat,
      runtime.Replaceable,
      runtime.With,
      runtime.SanitizeValueConverter,
      runtime.AttrBindingBehavior,
      runtime.DebounceBindingBehavior,
      runtime.OneTimeBindingBehavior,
      runtime.ToViewBindingBehavior,
      runtime.FromViewBindingBehavior,
      runtime.SelfBindingBehavior,
      runtime.SignalBindingBehavior,
      runtime.ThrottleBindingBehavior,
      runtime.TwoWayBindingBehavior,
      runtime.UpdateTriggerBindingBehavior
  ];
  const defaultBindingLanguage = [
      exports.DefaultBindingCommand,
      exports.OneTimeBindingCommand,
      exports.ToViewBindingCommand,
      exports.FromViewBindingCommand,
      exports.TwoWayBindingCommand,
      exports.TriggerBindingCommand,
      exports.DelegateBindingCommand,
      exports.CaptureBindingCommand,
      exports.CallBindingCommand,
      exports.ForBindingCommand
  ];
  const BasicConfiguration = {
      register(container) {
          container.register(ParserRegistration, kernel.Registration.singleton(runtime.ITemplateCompiler, exports.TemplateCompiler), ...globalResources, ...defaultBindingLanguage);
      }
  };

  exports.AttrSyntax = AttrSyntax;
  exports.IAttributeParser = IAttributeParser;
  exports.AttributeParser = AttributeParser;
  exports.bindingCommand = bindingCommand;
  exports.BindingCommandResource = BindingCommandResource;
  exports.unescapeCode = unescapeCode;
  exports.BasicConfiguration = BasicConfiguration;
  exports.ElementSyntax = ElementSyntax;
  exports.IElementParser = IElementParser;
  exports.ParserRegistration = ParserRegistration;
  exports.ParserState = ParserState;
  exports.parseCore = parseCore;
  exports.parse = parse;
  exports.TextBindingInstruction = TextBindingInstruction;
  exports.InterpolationInstruction = InterpolationInstruction;
  exports.OneTimeBindingInstruction = OneTimeBindingInstruction;
  exports.ToViewBindingInstruction = ToViewBindingInstruction;
  exports.FromViewBindingInstruction = FromViewBindingInstruction;
  exports.TwoWayBindingInstruction = TwoWayBindingInstruction;
  exports.IteratorBindingInstruction = IteratorBindingInstruction;
  exports.TriggerBindingInstruction = TriggerBindingInstruction;
  exports.DelegateBindingInstruction = DelegateBindingInstruction;
  exports.CaptureBindingInstruction = CaptureBindingInstruction;
  exports.CallBindingInstruction = CallBindingInstruction;
  exports.RefBindingInstruction = RefBindingInstruction;
  exports.StylePropertyBindingInstruction = StylePropertyBindingInstruction;
  exports.SetPropertyInstruction = SetPropertyInstruction;
  exports.SetAttributeInstruction = SetAttributeInstruction;
  exports.HydrateElementInstruction = HydrateElementInstruction;
  exports.HydrateAttributeInstruction = HydrateAttributeInstruction;
  exports.HydrateTemplateController = HydrateTemplateController;
  exports.LetElementInstruction = LetElementInstruction;
  exports.LetBindingInstruction = LetBindingInstruction;
  exports.SemanticModel = SemanticModel;
  exports.MultiAttributeBindingSymbol = MultiAttributeBindingSymbol;
  exports.AttributeSymbol = AttributeSymbol;
  exports.ElementSymbol = ElementSymbol;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ "./node_modules/@aurelia/kernel/dist/index.umd.js":
/*!********************************************************!*\
  !*** ./node_modules/@aurelia/kernel/dist/index.umd.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  const camelCaseLookup = {};
  const kebabCaseLookup = {};
  const PLATFORM = {
      global: (function () {
          // Workers don’t have `window`, only `self`
          // https://github.com/Microsoft/tslint-microsoft-contrib/issues/415
          // tslint:disable-next-line:no-typeof-undefined
          if (typeof self !== 'undefined') {
              return self;
          }
          // https://github.com/Microsoft/tslint-microsoft-contrib/issues/415
          // tslint:disable-next-line:no-typeof-undefined
          if (typeof global !== 'undefined') {
              return global;
          }
          // Not all environments allow eval and Function
          // Use only as a last resort:
          // tslint:disable-next-line:no-function-constructor-with-string-args
          return new Function('return this')();
      })(),
      emptyArray: Object.freeze([]),
      emptyObject: Object.freeze({}),
      /* tslint:disable-next-line:no-empty */
      noop() { },
      now() {
          return performance.now();
      },
      camelCase(input) {
          // benchmark: http://jsben.ch/qIz4Z
          let value = camelCaseLookup[input];
          if (value !== undefined)
              return value;
          value = '';
          let first = true;
          let sep = false;
          let char;
          for (let i = 0, ii = input.length; i < ii; ++i) {
              char = input.charAt(i);
              if (char === '-' || char === '.' || char === '_') {
                  sep = true; // skip separators
              }
              else {
                  value = value + (first ? char.toLowerCase() : (sep ? char.toUpperCase() : char));
                  sep = false;
              }
              first = false;
          }
          return camelCaseLookup[input] = value;
      },
      kebabCase(input) {
          // benchmark: http://jsben.ch/v7K9T
          let value = kebabCaseLookup[input];
          if (value !== undefined)
              return value;
          value = '';
          let first = true;
          let char, lower;
          for (let i = 0, ii = input.length; i < ii; ++i) {
              char = input.charAt(i);
              lower = char.toLowerCase();
              value = value + (first ? lower : (char !== lower ? `-${lower}` : lower));
              first = false;
          }
          return kebabCaseLookup[input] = value;
      },
      toArray(input) {
          // benchmark: http://jsben.ch/xjsyF
          const len = input.length;
          const arr = Array(len);
          for (let i = 0; i < len; ++i) {
              arr[i] = input[i];
          }
          return arr;
      },
      requestAnimationFrame(callback) {
          return requestAnimationFrame(callback);
      }
  };

  const Reporter = {
      /* tslint:disable-next-line:no-empty */
      write(code, ...params) { },
      error(code, ...params) { return new Error(`Code ${code}`); }
  };

  // Shims to augment the Reflect object with methods used from the Reflect Metadata API proposal:
  // https://www.typescriptlang.org/docs/handbook/decorators.html#metadata
  // https://rbuckton.github.io/reflect-metadata/
  // As the official spec proposal uses "any", we use it here as well and suppress related typedef linting warnings.
  if (!('getOwnMetadata' in Reflect)) {
      // tslint:disable-next-line:no-any
      Reflect.getOwnMetadata = function (metadataKey, target) {
          return target[metadataKey];
      };
      // tslint:disable-next-line:no-any
      Reflect.metadata = function (metadataKey, metadataValue) {
          return function (target) {
              target[metadataKey] = metadataValue;
          };
      };
  }
  const DI = {
      createContainer() {
          return new Container();
      },
      getDesignParamTypes(target) {
          return Reflect.getOwnMetadata('design:paramtypes', target) || PLATFORM.emptyArray;
      },
      getDependencies(type) {
          let dependencies;
          if (type.inject === undefined) {
              dependencies = DI.getDesignParamTypes(type);
          }
          else {
              dependencies = [];
              let ctor = type;
              while (typeof ctor === 'function') {
                  if (ctor.hasOwnProperty('inject')) {
                      dependencies.push(...ctor.inject);
                  }
                  ctor = Object.getPrototypeOf(ctor);
              }
          }
          return dependencies;
      },
      createInterface(friendlyName) {
          const Key = function (target, property, index) {
              Key.friendlyName = friendlyName || 'Interface';
              (target.inject || (target.inject = []))[index] = Key;
              return target;
          };
          Key.noDefault = function () {
              return Key;
          };
          Key.withDefault = function (configure) {
              Key.withDefault = function () {
                  throw Reporter.error(17, Key);
              };
              Key.register = function (container, key) {
                  const trueKey = key || Key;
                  return configure({
                      instance(value) {
                          return container.registerResolver(trueKey, new Resolver(trueKey, 0 /* instance */, value));
                      },
                      singleton(value) {
                          return container.registerResolver(trueKey, new Resolver(trueKey, 1 /* singleton */, value));
                      },
                      transient(value) {
                          return container.registerResolver(trueKey, new Resolver(trueKey, 2 /* transient */, value));
                      },
                      callback(value) {
                          return container.registerResolver(trueKey, new Resolver(trueKey, 3 /* callback */, value));
                      },
                      aliasTo(destinationKey) {
                          return container.registerResolver(trueKey, new Resolver(trueKey, 5 /* alias */, destinationKey));
                      },
                  });
              };
              return Key;
          };
          return Key;
      },
      inject(...dependencies) {
          return function (target, key, descriptor) {
              if (typeof descriptor === 'number') { // It's a parameter decorator.
                  if (!target.hasOwnProperty('inject')) {
                      target.inject = DI.getDesignParamTypes(target).slice();
                  }
                  if (dependencies.length === 1) {
                      target.inject[descriptor] = dependencies[0];
                  }
              }
              else if (key) { // It's a property decorator. Not supported by the container without plugins.
                  const actualTarget = target.constructor;
                  (actualTarget.inject || (actualTarget.inject = {}))[key] = dependencies[0];
              }
              else if (descriptor) { // It's a function decorator (not a Class constructor)
                  const fn = descriptor.value;
                  fn.inject = dependencies;
              }
              else { // It's a class decorator.
                  if (!dependencies || dependencies.length === 0) {
                      target.inject = DI.getDesignParamTypes(target).slice();
                  }
                  else {
                      target.inject = dependencies;
                  }
              }
          };
      },
      // tslint:disable:jsdoc-format
      /**
       * Registers the `target` class as a transient dependency; each time the dependency is resolved
       * a new instance will be created.
       *
       * @param target The class / constructor function to register as transient.
       * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
       *
       * Example usage:
    ```ts
    // On an existing class
    class Foo { }
    DI.transient(Foo);
    
    // Inline declaration
    const Foo = DI.transient(class { });
    // Foo is now strongly typed with register
    Foo.register(container);
    ```
       */
      // tslint:enable:jsdoc-format
      transient(target) {
          target.register = function register(container) {
              return Registration.transient(target, target).register(container, target);
          };
          return target;
      },
      // tslint:disable:jsdoc-format
      /**
       * Registers the `target` class as a singleton dependency; the class will only be created once. Each
       * consecutive time the dependency is resolved, the same instance will be returned.
       *
       * @param target The class / constructor function to register as a singleton.
       * @returns The same class, with a static `register` method that takes a container and returns the appropriate resolver.
       * Example usage:
    ```ts
    // On an existing class
    class Foo { }
    DI.singleton(Foo);
    
    // Inline declaration
    const Foo = DI.singleton(class { });
    // Foo is now strongly typed with register
    Foo.register(container);
    ```
       */
      // tslint:enable:jsdoc-format
      singleton(target) {
          target.register = function register(container) {
              return Registration.singleton(target, target).register(container, target);
          };
          return target;
      }
  };
  const IContainer = DI.createInterface().noDefault();
  const IServiceLocator = IContainer;
  function createResolver(getter) {
      return function (key) {
          const Key = function Key(target, property, descriptor) {
              return DI.inject(Key)(target, property, descriptor);
          };
          Key.resolve = function (handler, requestor) {
              return getter(key, handler, requestor);
          };
          return Key;
      };
  }
  const inject = DI.inject;
  function transientDecorator(target) {
      return DI.transient(target);
  }
  function transient(target) {
      return target === undefined ? transientDecorator : transientDecorator(target);
  }
  function singletonDecorator(target) {
      return DI.singleton(target);
  }
  function singleton(target) {
      return target === undefined ? singletonDecorator : singletonDecorator(target);
  }
  const all = createResolver((key, handler, requestor) => requestor.getAll(key));
  const lazy = createResolver((key, handler, requestor) => {
      let instance = null; // cache locally so that lazy always returns the same instance once resolved
      return () => {
          if (instance === null) {
              instance = requestor.get(key);
          }
          return instance;
      };
  });
  const optional = createResolver((key, handler, requestor) => {
      if (requestor.has(key, true)) {
          return requestor.get(key);
      }
      else {
          return null;
      }
  });
  /*@internal*/
  class Resolver {
      constructor(key, strategy, state) {
          this.key = key;
          this.strategy = strategy;
          this.state = state;
      }
      register(container, key) {
          return container.registerResolver(key || this.key, this);
      }
      resolve(handler, requestor) {
          switch (this.strategy) {
              case 0 /* instance */:
                  return this.state;
              case 1 /* singleton */:
                  this.strategy = 0 /* instance */;
                  return this.state = handler.getFactory(this.state).construct(handler);
              case 2 /* transient */:
                  // Always create transients from the requesting container
                  return handler.getFactory(this.state).construct(requestor);
              case 3 /* callback */:
                  return this.state(handler, requestor, this);
              case 4 /* array */:
                  return this.state[0].resolve(handler, requestor);
              case 5 /* alias */:
                  return handler.get(this.state);
              default:
                  throw Reporter.error(6, this.strategy);
          }
      }
      getFactory(container) {
          switch (this.strategy) {
              case 1 /* singleton */:
              case 2 /* transient */:
                  return container.getFactory(this.state);
              default:
                  return null;
          }
      }
  }
  /*@internal*/
  class Factory {
      constructor(type, invoker, dependencies) {
          this.type = type;
          this.invoker = invoker;
          this.dependencies = dependencies;
          this.transformers = null;
      }
      static create(type) {
          const dependencies = DI.getDependencies(type);
          const invoker = classInvokers[dependencies.length] || fallbackInvoker;
          return new Factory(type, invoker, dependencies);
      }
      construct(container, dynamicDependencies) {
          const transformers = this.transformers;
          let instance = dynamicDependencies !== undefined
              ? this.invoker.invokeWithDynamicDependencies(container, this.type, this.dependencies, dynamicDependencies)
              : this.invoker.invoke(container, this.type, this.dependencies);
          if (transformers === null) {
              return instance;
          }
          for (let i = 0, ii = transformers.length; i < ii; ++i) {
              instance = transformers[i](instance);
          }
          return instance;
      }
      registerTransformer(transformer) {
          if (this.transformers === null) {
              this.transformers = [];
          }
          this.transformers.push(transformer);
          return true;
      }
  }
  const containerResolver = {
      resolve(handler, requestor) {
          return requestor;
      }
  };
  function isRegistry(obj) {
      return typeof obj.register === 'function';
  }
  /*@internal*/
  class Container {
      constructor(configuration = {}) {
          this.parent = null;
          this.resolvers = new Map();
          this.configuration = configuration;
          this.factories = configuration.factories || (configuration.factories = new Map());
          this.resolvers.set(IContainer, containerResolver);
      }
      register(...params) {
          for (let i = 0, ii = params.length; i < ii; ++i) {
              const current = params[i];
              if (isRegistry(current)) {
                  current.register(this);
              }
              else {
                  const keys = Object.keys(current);
                  for (let j = 0, jj = keys.length; j < jj; ++j) {
                      const value = current[keys[j]];
                      // note: we could remove this if-branch and call this.register directly
                      // - the extra check is just a perf tweak to create fewer unnecessary arrays by the spread operator
                      if (isRegistry(value)) {
                          value.register(this);
                      }
                      else {
                          this.register(value);
                      }
                  }
              }
          }
      }
      registerResolver(key, resolver) {
          validateKey(key);
          const resolvers = this.resolvers;
          const result = resolvers.get(key);
          if (result === undefined) {
              resolvers.set(key, resolver);
          }
          else if (result instanceof Resolver && result.strategy === 4 /* array */) {
              result.state.push(resolver);
          }
          else {
              resolvers.set(key, new Resolver(key, 4 /* array */, [result, resolver]));
          }
          return resolver;
      }
      registerTransformer(key, transformer) {
          const resolver = this.getResolver(key);
          if (resolver === null) {
              return false;
          }
          if (resolver.getFactory) {
              const handler = resolver.getFactory(this);
              if (handler === null) {
                  return false;
              }
              return handler.registerTransformer(transformer);
          }
          return false;
      }
      getResolver(key, autoRegister = true) {
          validateKey(key);
          if (key.resolve) {
              return key;
          }
          let current = this;
          while (current !== null) {
              const resolver = current.resolvers.get(key);
              if (resolver === undefined) {
                  if (current.parent === null) {
                      return autoRegister ? this.jitRegister(key, current) : null;
                  }
                  current = current.parent;
              }
              else {
                  return resolver;
              }
          }
          return null;
      }
      has(key, searchAncestors = false) {
          return this.resolvers.has(key)
              ? true
              : searchAncestors && this.parent !== null
                  ? this.parent.has(key, true)
                  : false;
      }
      get(key) {
          validateKey(key);
          if (key.resolve) {
              return key.resolve(this, this);
          }
          let current = this;
          while (current !== null) {
              const resolver = current.resolvers.get(key);
              if (resolver === undefined) {
                  if (current.parent === null) {
                      return this.jitRegister(key, current).resolve(current, this);
                  }
                  current = current.parent;
              }
              else {
                  return resolver.resolve(current, this);
              }
          }
      }
      getAll(key) {
          validateKey(key);
          let current = this;
          while (current !== null) {
              const resolver = current.resolvers.get(key);
              if (resolver === undefined) {
                  if (this.parent === null) {
                      return PLATFORM.emptyArray;
                  }
                  current = current.parent;
              }
              else {
                  return buildAllResponse(resolver, current, this);
              }
          }
          return PLATFORM.emptyArray;
      }
      getFactory(type) {
          let factory = this.factories.get(type);
          if (factory === undefined) {
              factory = Factory.create(type);
              this.factories.set(type, factory);
          }
          return factory;
      }
      createChild() {
          const child = new Container(this.configuration);
          child.parent = this;
          return child;
      }
      jitRegister(keyAsValue, handler) {
          if (keyAsValue.register) {
              const registrationResolver = keyAsValue.register(handler, keyAsValue);
              if (!(registrationResolver && registrationResolver.resolve)) {
                  throw Reporter.error(40); // did not return a valid resolver from the static register method
              }
              return registrationResolver;
          }
          const resolver = new Resolver(keyAsValue, 1 /* singleton */, keyAsValue);
          handler.resolvers.set(keyAsValue, resolver);
          return resolver;
      }
  }
  const Registration = {
      instance(key, value) {
          return new Resolver(key, 0 /* instance */, value);
      },
      singleton(key, value) {
          return new Resolver(key, 1 /* singleton */, value);
      },
      transient(key, value) {
          return new Resolver(key, 2 /* transient */, value);
      },
      callback(key, callback) {
          return new Resolver(key, 3 /* callback */, callback);
      },
      alias(originalKey, aliasKey) {
          return new Resolver(aliasKey, 5 /* alias */, originalKey);
      },
      interpret(interpreterKey, ...rest) {
          return {
              register(container) {
                  const resolver = container.getResolver(interpreterKey);
                  if (resolver !== null) {
                      let registry = null;
                      if (resolver.getFactory) {
                          const factory = resolver.getFactory(container);
                          if (factory !== null) {
                              registry = factory.construct(container, rest);
                          }
                      }
                      else {
                          registry = resolver.resolve(container, container);
                      }
                      if (registry !== null) {
                          registry.register(container);
                      }
                  }
              }
          };
      }
  };
  /*@internal*/
  function validateKey(key) {
      // note: design:paramTypes which will default to Object if the param types cannot be statically analyzed by tsc
      // this check is intended to properly report on that problem - under no circumstance should Object be a valid key anyway
      if (key === null || key === undefined || key === Object) {
          throw Reporter.error(5);
      }
  }
  function buildAllResponse(resolver, handler, requestor) {
      if (resolver instanceof Resolver && resolver.strategy === 4 /* array */) {
          const state = resolver.state;
          let i = state.length;
          const results = new Array(i);
          while (i--) {
              results[i] = state[i].get(handler, requestor);
          }
          return results;
      }
      return [resolver.resolve(handler, requestor)];
  }
  /*@internal*/
  const classInvokers = [
      {
          invoke(container, Type) {
              return new Type();
          },
          invokeWithDynamicDependencies
      },
      {
          invoke(container, Type, deps) {
              return new Type(container.get(deps[0]));
          },
          invokeWithDynamicDependencies
      },
      {
          invoke(container, Type, deps) {
              return new Type(container.get(deps[0]), container.get(deps[1]));
          },
          invokeWithDynamicDependencies
      },
      {
          invoke(container, Type, deps) {
              return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]));
          },
          invokeWithDynamicDependencies
      },
      {
          invoke(container, Type, deps) {
              return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]));
          },
          invokeWithDynamicDependencies
      },
      {
          invoke(container, Type, deps) {
              return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]), container.get(deps[4]));
          },
          invokeWithDynamicDependencies
      }
  ];
  /*@internal*/
  const fallbackInvoker = {
      invoke: invokeWithDynamicDependencies,
      invokeWithDynamicDependencies
  };
  /*@internal*/
  function invokeWithDynamicDependencies(container, Type, staticDependencies, dynamicDependencies) {
      let i = staticDependencies.length;
      let args = new Array(i);
      let lookup;
      while (i--) {
          lookup = staticDependencies[i];
          if (lookup === null || lookup === undefined) {
              throw Reporter.error(7, `Index ${i}.`);
          }
          else {
              args[i] = container.get(lookup);
          }
      }
      if (dynamicDependencies !== undefined) {
          args = args.concat(dynamicDependencies);
      }
      return Reflect.construct(Type, args);
  }

  exports.DI = DI;
  exports.IContainer = IContainer;
  exports.IServiceLocator = IServiceLocator;
  exports.inject = inject;
  exports.transient = transient;
  exports.singleton = singleton;
  exports.all = all;
  exports.lazy = lazy;
  exports.optional = optional;
  exports.Resolver = Resolver;
  exports.Factory = Factory;
  exports.Container = Container;
  exports.Registration = Registration;
  exports.validateKey = validateKey;
  exports.classInvokers = classInvokers;
  exports.fallbackInvoker = fallbackInvoker;
  exports.invokeWithDynamicDependencies = invokeWithDynamicDependencies;
  exports.PLATFORM = PLATFORM;
  exports.Reporter = Reporter;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@aurelia/runtime/dist/index.umd.js":
/*!*********************************************************!*\
  !*** ./node_modules/@aurelia/runtime/dist/index.umd.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports, __webpack_require__(/*! @aurelia/kernel */ "./node_modules/@aurelia/kernel/dist/index.umd.js")) :
    undefined;
}(this, (function (exports,kernel) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    (function (LifecycleFlags) {
        LifecycleFlags[LifecycleFlags["none"] = 0] = "none";
        LifecycleFlags[LifecycleFlags["mustEvaluate"] = 524288] = "mustEvaluate";
        LifecycleFlags[LifecycleFlags["mutation"] = 3] = "mutation";
        LifecycleFlags[LifecycleFlags["isCollectionMutation"] = 1] = "isCollectionMutation";
        LifecycleFlags[LifecycleFlags["isInstanceMutation"] = 2] = "isInstanceMutation";
        LifecycleFlags[LifecycleFlags["update"] = 28] = "update";
        LifecycleFlags[LifecycleFlags["updateTargetObserver"] = 4] = "updateTargetObserver";
        LifecycleFlags[LifecycleFlags["updateTargetInstance"] = 8] = "updateTargetInstance";
        LifecycleFlags[LifecycleFlags["updateSourceExpression"] = 16] = "updateSourceExpression";
        LifecycleFlags[LifecycleFlags["from"] = 524256] = "from";
        LifecycleFlags[LifecycleFlags["fromFlush"] = 96] = "fromFlush";
        LifecycleFlags[LifecycleFlags["fromAsyncFlush"] = 32] = "fromAsyncFlush";
        LifecycleFlags[LifecycleFlags["fromSyncFlush"] = 64] = "fromSyncFlush";
        LifecycleFlags[LifecycleFlags["fromStartTask"] = 128] = "fromStartTask";
        LifecycleFlags[LifecycleFlags["fromStopTask"] = 256] = "fromStopTask";
        LifecycleFlags[LifecycleFlags["fromBind"] = 512] = "fromBind";
        LifecycleFlags[LifecycleFlags["fromUnbind"] = 1024] = "fromUnbind";
        LifecycleFlags[LifecycleFlags["fromAttach"] = 2048] = "fromAttach";
        LifecycleFlags[LifecycleFlags["fromDetach"] = 4096] = "fromDetach";
        LifecycleFlags[LifecycleFlags["fromCache"] = 8192] = "fromCache";
        LifecycleFlags[LifecycleFlags["fromCreate"] = 16384] = "fromCreate";
        LifecycleFlags[LifecycleFlags["fromDOMEvent"] = 32768] = "fromDOMEvent";
        LifecycleFlags[LifecycleFlags["fromObserverSetter"] = 65536] = "fromObserverSetter";
        LifecycleFlags[LifecycleFlags["fromBindableHandler"] = 131072] = "fromBindableHandler";
        LifecycleFlags[LifecycleFlags["fromLifecycleTask"] = 262144] = "fromLifecycleTask";
        LifecycleFlags[LifecycleFlags["parentUnmountQueued"] = 1048576] = "parentUnmountQueued";
        // this flag is for the synchronous flush before detach (no point in updating the
        // DOM if it's about to be detached)
        LifecycleFlags[LifecycleFlags["doNotUpdateDOM"] = 2097152] = "doNotUpdateDOM";
    })(exports.LifecycleFlags || (exports.LifecycleFlags = {}));
    (function (MutationKind) {
        MutationKind[MutationKind["instance"] = 1] = "instance";
        MutationKind[MutationKind["collection"] = 2] = "collection";
    })(exports.MutationKind || (exports.MutationKind = {}));

    const IRenderable = kernel.DI.createInterface().noDefault();
    const IViewFactory = kernel.DI.createInterface().noDefault();
    const marker = Object.freeze(Object.create(null));
    const ILifecycle = kernel.DI.createInterface().withDefault(x => x.singleton(Lifecycle));
    const IFlushLifecycle = ILifecycle;
    const IBindLifecycle = ILifecycle;
    const IAttachLifecycle = ILifecycle;
    /*@internal*/
    class Lifecycle {
        constructor() {
            /*@internal*/ this.bindDepth = 0;
            /*@internal*/ this.attachDepth = 0;
            /*@internal*/ this.detachDepth = 0;
            /*@internal*/ this.unbindDepth = 0;
            /*@internal*/ this.flushHead = this;
            /*@internal*/ this.flushTail = this;
            /*@internal*/ this.connectHead = this; // this cast is safe because we know exactly which properties we'll use
            /*@internal*/ this.connectTail = this;
            /*@internal*/ this.patchHead = this;
            /*@internal*/ this.patchTail = this;
            /*@internal*/ this.boundHead = this;
            /*@internal*/ this.boundTail = this;
            /*@internal*/ this.mountHead = this;
            /*@internal*/ this.mountTail = this;
            /*@internal*/ this.attachedHead = this;
            /*@internal*/ this.attachedTail = this;
            /*@internal*/ this.unmountHead = this;
            /*@internal*/ this.unmountTail = this;
            /*@internal*/ this.detachedHead = this; //LOL
            /*@internal*/ this.detachedTail = this;
            /*@internal*/ this.unbindAfterDetachHead = this;
            /*@internal*/ this.unbindAfterDetachTail = this;
            /*@internal*/ this.unboundHead = this;
            /*@internal*/ this.unboundTail = this;
            /*@internal*/ this.flushed = null;
            /*@internal*/ this.promise = Promise.resolve();
            /*@internal*/ this.flushCount = 0;
            /*@internal*/ this.connectCount = 0;
            /*@internal*/ this.patchCount = 0;
            /*@internal*/ this.boundCount = 0;
            /*@internal*/ this.mountCount = 0;
            /*@internal*/ this.attachedCount = 0;
            /*@internal*/ this.unmountCount = 0;
            /*@internal*/ this.detachedCount = 0;
            /*@internal*/ this.unbindAfterDetachCount = 0;
            /*@internal*/ this.unboundCount = 0;
            // These are dummy properties to make the lifecycle conform to the interfaces
            // of the components it manages. This allows the lifecycle itself to be the first link
            // in the chain and removes the need for an additional null check on each addition.
            /*@internal*/ this.$nextFlush = marker;
            /*@internal*/ this.flush = kernel.PLATFORM.noop;
            /*@internal*/ this.$nextConnect = marker;
            /*@internal*/ this.connect = kernel.PLATFORM.noop;
            /*@internal*/ this.$nextPatch = marker;
            /*@internal*/ this.patch = kernel.PLATFORM.noop;
            /*@internal*/ this.$nextBound = marker;
            /*@internal*/ this.bound = kernel.PLATFORM.noop;
            /*@internal*/ this.$nextMount = marker;
            /*@internal*/ this.$mount = kernel.PLATFORM.noop;
            /*@internal*/ this.$nextAttached = marker;
            /*@internal*/ this.attached = kernel.PLATFORM.noop;
            /*@internal*/ this.$nextUnmount = marker;
            /*@internal*/ this.$unmount = kernel.PLATFORM.noop;
            /*@internal*/ this.$nextDetached = marker;
            /*@internal*/ this.detached = kernel.PLATFORM.noop;
            /*@internal*/ this.$nextUnbindAfterDetach = marker;
            /*@internal*/ this.$unbind = kernel.PLATFORM.noop;
            /*@internal*/ this.$nextUnbound = marker;
            /*@internal*/ this.unbound = kernel.PLATFORM.noop;
            /*@internal*/ this.task = null;
        }
        registerTask(task) {
            if (this.task === null) {
                this.task = new AggregateLifecycleTask();
            }
            this.task.addTask(task);
        }
        finishTask(task) {
            if (this.task !== null) {
                if (this.task === task) {
                    this.task = null;
                }
                else {
                    this.task.removeTask(task);
                }
            }
        }
        enqueueFlush(requestor) {
            // Queue a flush() callback; the depth is just for debugging / testing purposes and has
            // no effect on execution. flush() will automatically be invoked when the promise resolves,
            // or it can be manually invoked synchronously.
            if (this.flushHead === this) {
                this.flushed = this.promise.then(() => this.processFlushQueue(exports.LifecycleFlags.fromAsyncFlush));
            }
            if (requestor.$nextFlush === null) {
                requestor.$nextFlush = marker;
                this.flushTail.$nextFlush = requestor;
                this.flushTail = requestor;
                ++this.flushCount;
            }
            return this.flushed;
        }
        processFlushQueue(flags) {
            flags |= exports.LifecycleFlags.fromSyncFlush;
            // flush callbacks may lead to additional flush operations, so keep looping until
            // the flush head is back to `this` (though this will typically happen in the first iteration)
            while (this.flushCount > 0) {
                let current = this.flushHead.$nextFlush;
                this.flushHead = this.flushTail = this;
                this.flushCount = 0;
                let next;
                do {
                    next = current.$nextFlush;
                    current.$nextFlush = null;
                    current.flush(flags);
                    current = next;
                } while (current !== marker);
            }
        }
        beginBind() {
            ++this.bindDepth;
        }
        enqueueBound(requestor) {
            // build a standard singly linked list for bound callbacks
            if (requestor.$nextBound === null) {
                requestor.$nextBound = marker;
                this.boundTail.$nextBound = requestor;
                this.boundTail = requestor;
                ++this.boundCount;
            }
        }
        enqueueConnect(requestor) {
            // enqueue connect and patch calls in separate lists so that they can be invoked
            // independently from eachother
            // TODO: see if we can eliminate/optimize some of this, because this is a relatively hot path
            // (first get all the necessary integration tests working, then look for optimizations)
            // build a standard singly linked list for connect callbacks
            if (requestor.$nextConnect === null) {
                requestor.$nextConnect = marker;
                this.connectTail.$nextConnect = requestor;
                this.connectTail = requestor;
                ++this.connectCount;
            }
            // build a standard singly linked list for patch callbacks
            if (requestor.$nextPatch === null) {
                requestor.$nextPatch = marker;
                this.patchTail.$nextPatch = requestor;
                this.patchTail = requestor;
                ++this.patchCount;
            }
        }
        processConnectQueue(flags) {
            // connects cannot lead to additional connects, so we don't need to loop here
            if (this.connectCount > 0) {
                this.connectCount = 0;
                let current = this.connectHead.$nextConnect;
                this.connectHead = this.connectTail = this;
                let next;
                do {
                    current.connect(flags);
                    next = current.$nextConnect;
                    current.$nextConnect = null;
                    current = next;
                } while (current !== marker);
            }
        }
        processPatchQueue(flags) {
            // flush before patching, but only if this is the initial bind;
            // no DOM is attached yet so we can safely let everything propagate
            if (flags & exports.LifecycleFlags.fromStartTask) {
                this.processFlushQueue(flags | exports.LifecycleFlags.fromSyncFlush);
            }
            // patch callbacks may lead to additional bind operations, so keep looping until
            // the patch head is back to `this` (though this will typically happen in the first iteration)
            while (this.patchCount > 0) {
                this.patchCount = 0;
                let current = this.patchHead.$nextPatch;
                this.patchHead = this.patchTail = this;
                let next;
                do {
                    current.patch(flags);
                    next = current.$nextPatch;
                    current.$nextPatch = null;
                    current = next;
                } while (current !== marker);
            }
        }
        endBind(flags) {
            // close / shrink a bind batch
            if (--this.bindDepth === 0) {
                if (this.task !== null && !this.task.done) {
                    this.task.owner = this;
                    return this.task;
                }
                this.processBindQueue(flags);
                return LifecycleTask.done;
            }
        }
        processBindQueue(flags) {
            // flush before processing bound callbacks, but only if this is the initial bind;
            // no DOM is attached yet so we can safely let everything propagate
            if (flags & exports.LifecycleFlags.fromStartTask) {
                this.processFlushQueue(flags | exports.LifecycleFlags.fromSyncFlush);
            }
            // bound callbacks may lead to additional bind operations, so keep looping until
            // the bound head is back to `this` (though this will typically happen in the first iteration)
            while (this.boundCount > 0) {
                this.boundCount = 0;
                let current = this.boundHead.$nextBound;
                let next;
                this.boundHead = this.boundTail = this;
                do {
                    current.bound(flags);
                    next = current.$nextBound;
                    current.$nextBound = null;
                    current = next;
                } while (current !== marker);
            }
        }
        beginUnbind() {
            // open up / expand an unbind batch; the very first caller will close it again with endUnbind
            ++this.unbindDepth;
        }
        enqueueUnbound(requestor) {
            // This method is idempotent; adding the same item more than once has the same effect as
            // adding it once.
            // build a standard singly linked list for unbound callbacks
            if (requestor.$nextUnbound === null) {
                requestor.$nextUnbound = marker;
                this.unboundTail.$nextUnbound = requestor;
                this.unboundTail = requestor;
                ++this.unboundCount;
            }
        }
        endUnbind(flags) {
            // close / shrink an unbind batch
            if (--this.unbindDepth === 0) {
                if (this.task !== null && !this.task.done) {
                    this.task.owner = this;
                    return this.task;
                }
                this.processUnbindQueue(flags);
                return LifecycleTask.done;
            }
        }
        processUnbindQueue(flags) {
            // unbound callbacks may lead to additional unbind operations, so keep looping until
            // the unbound head is back to `this` (though this will typically happen in the first iteration)
            while (this.unboundCount > 0) {
                this.unboundCount = 0;
                let current = this.unboundHead.$nextUnbound;
                let next;
                this.unboundHead = this.unboundTail = this;
                do {
                    current.unbound(flags);
                    next = current.$nextUnbound;
                    current.$nextUnbound = null;
                    current = next;
                } while (current !== marker);
            }
        }
        beginAttach() {
            // open up / expand an attach batch; the very first caller will close it again with endAttach
            ++this.attachDepth;
        }
        enqueueMount(requestor) {
            // This method is idempotent; adding the same item more than once has the same effect as
            // adding it once.
            // build a standard singly linked list for mount callbacks
            if (requestor.$nextMount === null) {
                requestor.$nextMount = marker;
                this.mountTail.$nextMount = requestor;
                this.mountTail = requestor;
                ++this.mountCount;
            }
        }
        enqueueAttached(requestor) {
            // This method is idempotent; adding the same item more than once has the same effect as
            // adding it once.
            // build a standard singly linked list for attached callbacks
            if (requestor.$nextAttached === null) {
                requestor.$nextAttached = marker;
                this.attachedTail.$nextAttached = requestor;
                this.attachedTail = requestor;
                ++this.attachedCount;
            }
        }
        endAttach(flags) {
            // close / shrink an attach batch
            if (--this.attachDepth === 0) {
                if (this.task !== null && !this.task.done) {
                    this.task.owner = this;
                    return this.task;
                }
                this.processAttachQueue(flags);
                return LifecycleTask.done;
            }
        }
        processAttachQueue(flags) {
            // flush and patch before starting the attach lifecycle to ensure batched collection changes are propagated to repeaters
            // and the DOM is updated
            this.processFlushQueue(flags | exports.LifecycleFlags.fromSyncFlush);
            // TODO: prevent duplicate updates coming from the patch queue (or perhaps it's just not needed in its entirety?)
            //this.processPatchQueue(flags | LifecycleFlags.fromSyncFlush);
            if (this.mountCount > 0) {
                this.mountCount = 0;
                let currentMount = this.mountHead.$nextMount;
                this.mountHead = this.mountTail = this;
                let nextMount;
                do {
                    currentMount.$mount(flags);
                    nextMount = currentMount.$nextMount;
                    currentMount.$nextMount = null;
                    currentMount = nextMount;
                } while (currentMount !== marker);
            }
            // Connect all connect-queued bindings AFTER mounting is done, so that the DOM is visible asap,
            // but connect BEFORE running the attached callbacks to ensure any changes made during those callbacks
            // are still accounted for.
            // TODO: add a flag/option to further delay connect with a RAF callback (the tradeoff would be that we'd need
            // to run an additional patch cycle before that connect, which can be expensive and unnecessary in most real
            // world scenarios, but can significantly speed things up with nested, highly volatile data like in dbmonster)
            this.processConnectQueue(exports.LifecycleFlags.mustEvaluate);
            if (this.attachedCount > 0) {
                this.attachedCount = 0;
                let currentAttached = this.attachedHead.$nextAttached;
                this.attachedHead = this.attachedTail = this;
                let nextAttached;
                do {
                    currentAttached.attached(flags);
                    nextAttached = currentAttached.$nextAttached;
                    currentAttached.$nextAttached = null;
                    currentAttached = nextAttached;
                } while (currentAttached !== marker);
            }
        }
        beginDetach() {
            // open up / expand a detach batch; the very first caller will close it again with endDetach
            ++this.detachDepth;
        }
        enqueueUnmount(requestor) {
            // This method is idempotent; adding the same item more than once has the same effect as
            // adding it once.
            // build a standard singly linked list for unmount callbacks
            if (requestor.$nextUnmount === null) {
                requestor.$nextUnmount = marker;
                this.unmountTail.$nextUnmount = requestor;
                this.unmountTail = requestor;
                ++this.unmountCount;
            }
        }
        enqueueDetached(requestor) {
            // This method is idempotent; adding the same item more than once has the same effect as
            // adding it once.
            // build a standard singly linked list for detached callbacks
            if (requestor.$nextDetached === null) {
                requestor.$nextDetached = marker;
                this.detachedTail.$nextDetached = requestor;
                this.detachedTail = requestor;
                ++this.detachedCount;
            }
        }
        enqueueUnbindAfterDetach(requestor) {
            // This method is idempotent; adding the same item more than once has the same effect as
            // adding it once.
            // build a standard singly linked list for unbindAfterDetach callbacks
            if (requestor.$nextUnbindAfterDetach === null) {
                requestor.$nextUnbindAfterDetach = marker;
                this.unbindAfterDetachTail.$nextUnbindAfterDetach = requestor;
                this.unbindAfterDetachTail = requestor;
                ++this.unbindAfterDetachCount;
            }
        }
        endDetach(flags) {
            // close / shrink a detach batch
            if (--this.detachDepth === 0) {
                if (this.task !== null && !this.task.done) {
                    this.task.owner = this;
                    return this.task;
                }
                this.processDetachQueue(flags);
                return LifecycleTask.done;
            }
        }
        processDetachQueue(flags) {
            // flush before unmounting to ensure batched collection changes propagate to the repeaters,
            // which may lead to additional unmount operations
            this.processFlushQueue(flags | exports.LifecycleFlags.fromFlush | exports.LifecycleFlags.doNotUpdateDOM);
            if (this.unmountCount > 0) {
                this.unmountCount = 0;
                let currentUnmount = this.unmountHead.$nextUnmount;
                this.unmountHead = this.unmountTail = this;
                let nextUnmount;
                do {
                    currentUnmount.$unmount(flags);
                    nextUnmount = currentUnmount.$nextUnmount;
                    currentUnmount.$nextUnmount = null;
                    currentUnmount = nextUnmount;
                } while (currentUnmount !== marker);
            }
            if (this.detachedCount > 0) {
                this.detachedCount = 0;
                let currentDetached = this.detachedHead.$nextDetached;
                this.detachedHead = this.detachedTail = this;
                let nextDetached;
                do {
                    currentDetached.detached(flags);
                    nextDetached = currentDetached.$nextDetached;
                    currentDetached.$nextDetached = null;
                    currentDetached = nextDetached;
                } while (currentDetached !== marker);
            }
            if (this.unbindAfterDetachCount > 0) {
                this.beginUnbind();
                this.unbindAfterDetachCount = 0;
                let currentUnbind = this.unbindAfterDetachHead.$nextUnbindAfterDetach;
                this.unbindAfterDetachHead = this.unbindAfterDetachTail = this;
                let nextUnbind;
                do {
                    currentUnbind.$unbind(flags);
                    nextUnbind = currentUnbind.$nextUnbindAfterDetach;
                    currentUnbind.$nextUnbindAfterDetach = null;
                    currentUnbind = nextUnbind;
                } while (currentUnbind !== marker);
                this.endUnbind(flags);
            }
        }
    }
    exports.CompositionCoordinator = class CompositionCoordinator {
        constructor($lifecycle) {
            this.$lifecycle = $lifecycle;
            this.onSwapComplete = kernel.PLATFORM.noop;
            this.queue = null;
            this.swapTask = LifecycleTask.done;
            this.currentView = null;
            this.isBound = false;
            this.isAttached = false;
        }
        static register(container) {
            return kernel.Registration.transient(this, this).register(container, this);
        }
        compose(value, flags) {
            if (this.swapTask.done) {
                if (value instanceof Promise) {
                    this.enqueue(new PromiseSwap(this, value));
                    this.processNext();
                }
                else {
                    this.swap(value, flags);
                }
            }
            else {
                if (value instanceof Promise) {
                    this.enqueue(new PromiseSwap(this, value));
                }
                else {
                    this.enqueue(value);
                }
                if (this.swapTask.canCancel()) {
                    this.swapTask.cancel();
                }
            }
        }
        binding(flags, scope) {
            this.scope = scope;
            this.isBound = true;
            if (this.currentView !== null) {
                this.currentView.$bind(flags, scope);
            }
        }
        attaching(flags) {
            this.isAttached = true;
            if (this.currentView !== null) {
                this.currentView.$attach(flags);
            }
        }
        detaching(flags) {
            this.isAttached = false;
            if (this.currentView !== null) {
                this.currentView.$detach(flags);
            }
        }
        unbinding(flags) {
            this.isBound = false;
            if (this.currentView !== null) {
                this.currentView.$unbind(flags);
            }
        }
        caching(flags) {
            this.currentView = null;
        }
        enqueue(view) {
            if (this.queue === null) {
                this.queue = [];
            }
            this.queue.push(view);
        }
        swap(view, flags) {
            if (this.currentView === view) {
                return;
            }
            const $lifecycle = this.$lifecycle;
            const swapTask = new AggregateLifecycleTask();
            let lifecycleTask;
            let currentView = this.currentView;
            if (currentView === null) {
                lifecycleTask = LifecycleTask.done;
            }
            else {
                $lifecycle.enqueueUnbindAfterDetach(currentView);
                $lifecycle.beginDetach();
                currentView.$detach(flags);
                lifecycleTask = $lifecycle.endDetach(flags);
            }
            swapTask.addTask(lifecycleTask);
            currentView = this.currentView = view;
            if (currentView === null) {
                lifecycleTask = LifecycleTask.done;
            }
            else {
                if (this.isBound) {
                    $lifecycle.beginBind();
                    currentView.$bind(flags, this.scope);
                    $lifecycle.endBind(flags);
                }
                if (this.isAttached) {
                    $lifecycle.beginAttach();
                    currentView.$attach(flags);
                    lifecycleTask = $lifecycle.endAttach(flags);
                }
                else {
                    lifecycleTask = LifecycleTask.done;
                }
            }
            swapTask.addTask(lifecycleTask);
            if (swapTask.done) {
                this.swapTask = LifecycleTask.done;
                this.onSwapComplete();
            }
            else {
                this.swapTask = swapTask;
                this.swapTask.wait().then(() => {
                    this.onSwapComplete();
                    this.processNext();
                });
            }
        }
        processNext() {
            if (this.queue !== null && this.queue.length > 0) {
                const next = this.queue.pop();
                this.queue.length = 0;
                if (PromiseSwap.is(next)) {
                    this.swapTask = next.start();
                }
                else {
                    this.swap(next, exports.LifecycleFlags.fromLifecycleTask);
                }
            }
            else {
                this.swapTask = LifecycleTask.done;
            }
        }
    };
    exports.CompositionCoordinator = __decorate([
        kernel.inject(ILifecycle)
    ], exports.CompositionCoordinator);
    const LifecycleTask = {
        done: {
            done: true,
            canCancel() { return false; },
            // tslint:disable-next-line:no-empty
            cancel() { },
            wait() { return Promise.resolve(); }
        }
    };
    class AggregateLifecycleTask {
        constructor() {
            this.done = true;
            /*@internal*/
            this.owner = null;
            this.tasks = [];
            this.waiter = null;
            this.resolve = null;
        }
        addTask(task) {
            if (!task.done) {
                this.done = false;
                this.tasks.push(task);
                task.wait().then(() => this.tryComplete());
            }
        }
        removeTask(task) {
            if (task.done) {
                const idx = this.tasks.indexOf(task);
                if (idx !== -1) {
                    this.tasks.splice(idx, 1);
                }
            }
            if (this.tasks.length === 0) {
                if (this.owner !== null) {
                    this.owner.finishTask(this);
                    this.owner = null;
                }
            }
        }
        canCancel() {
            if (this.done) {
                return false;
            }
            return this.tasks.every(x => x.canCancel());
        }
        cancel() {
            if (this.canCancel()) {
                this.tasks.forEach(x => x.cancel());
                this.done = false;
            }
        }
        wait() {
            if (this.waiter === null) {
                if (this.done) {
                    this.waiter = Promise.resolve();
                }
                else {
                    // tslint:disable-next-line:promise-must-complete
                    this.waiter = new Promise((resolve) => this.resolve = resolve);
                }
            }
            return this.waiter;
        }
        tryComplete() {
            if (this.done) {
                return;
            }
            if (this.tasks.every(x => x.done)) {
                this.complete(true);
            }
        }
        complete(notCancelled) {
            this.done = true;
            if (notCancelled && this.owner !== null) {
                this.owner.processDetachQueue(exports.LifecycleFlags.fromLifecycleTask);
                this.owner.processUnbindQueue(exports.LifecycleFlags.fromLifecycleTask);
                this.owner.processBindQueue(exports.LifecycleFlags.fromLifecycleTask);
                this.owner.processAttachQueue(exports.LifecycleFlags.fromLifecycleTask);
            }
            this.owner.finishTask(this);
            if (this.resolve !== null) {
                this.resolve();
            }
        }
    }
    /*@internal*/
    class PromiseSwap {
        constructor(coordinator, promise) {
            this.coordinator = coordinator;
            this.promise = promise;
            this.done = false;
            this.isCancelled = false;
        }
        static is(object) {
            return 'start' in object;
        }
        start() {
            if (this.isCancelled) {
                return LifecycleTask.done;
            }
            this.promise = this.promise.then(x => {
                this.onResolve(x);
                return x;
            });
            return this;
        }
        canCancel() {
            return !this.done;
        }
        cancel() {
            if (this.canCancel()) {
                this.isCancelled = true;
            }
        }
        wait() {
            return this.promise;
        }
        onResolve(value) {
            if (this.isCancelled) {
                return;
            }
            this.done = true;
            this.coordinator.compose(value, exports.LifecycleFlags.fromLifecycleTask);
        }
    }
    // tslint:disable:jsdoc-format
    /**
     * A general-purpose ILifecycleTask implementation that can be placed
     * before an attached, detached, bound or unbound hook during attaching,
     * detaching, binding or unbinding, respectively.
     *
     * The provided promise will be awaited before the corresponding lifecycle
     * hook (and any hooks following it) is invoked.
     *
     * The provided callback will be invoked after the promise is resolved
     * and before the next lifecycle hook.
     *
     * Example:
    ```ts
    export class MyViewModel {
      private $lifecycle: ILifecycle; // set before created() hook
      private answer: number;

      public binding(flags: LifecycleFlags): void {
        // this.answer === undefined
        this.$lifecycle.registerTask(new PromiseTask(
          this.getAnswerAsync,
          answer => {
            this.answer = answer;
          }
        ));
      }

      public bound(flags: LifecycleFlags): void {
        // this.answer === 42
      }

      private getAnswerAsync(): Promise<number> {
        return Promise.resolve().then(() => 42);
      }
    }
    ```
     */
    // tslint:enable:jsdoc-format
    class PromiseTask {
        constructor(promise, callback) {
            this.done = false;
            this.isCancelled = false;
            this.callback = callback;
            this.promise = promise.then(value => {
                if (this.isCancelled === true) {
                    return;
                }
                this.done = true;
                this.callback(value);
                return value;
            });
        }
        canCancel() {
            return !this.done;
        }
        cancel() {
            if (this.canCancel()) {
                this.isCancelled = true;
            }
        }
        wait() {
            return this.promise;
        }
    }

    function bindingBehavior(nameOrSource) {
        return function (target) {
            return BindingBehaviorResource.define(nameOrSource, target);
        };
    }
    const BindingBehaviorResource = {
        name: 'binding-behavior',
        keyFrom(name) {
            return `${this.name}:${name}`;
        },
        isType(Type) {
            return Type.kind === this;
        },
        define(nameOrSource, ctor) {
            const Type = ctor;
            const description = typeof nameOrSource === 'string'
                ? { name: nameOrSource }
                : nameOrSource;
            Type.kind = BindingBehaviorResource;
            Type.description = description;
            Type.register = register;
            return Type;
        }
    };
    function register(container) {
        container.register(kernel.Registration.singleton(BindingBehaviorResource.keyFrom(this.description.name), this));
    }

    const ELEMENT_NODE = 1;
    const ATTRIBUTE_NODE = 2;
    const TEXT_NODE = 3;
    const COMMENT_NODE = 8;
    const DOCUMENT_FRAGMENT_NODE = 11;
    function isRenderLocation(node) {
        return node.textContent === 'au-end';
    }
    const INode = kernel.DI.createInterface().noDefault();
    const IRenderLocation = kernel.DI.createInterface().noDefault();
    // tslint:disable:no-any
    const DOM = {
        createDocumentFragment(markupOrNode) {
            if (markupOrNode === undefined || markupOrNode === null) {
                return document.createDocumentFragment();
            }
            if (markupOrNode.nodeType > 0) {
                if (markupOrNode.content !== undefined) {
                    return markupOrNode.content;
                }
                const fragment = document.createDocumentFragment();
                fragment.appendChild(markupOrNode);
                return fragment;
            }
            return DOM.createTemplate(markupOrNode).content;
        },
        createTemplate(markup) {
            if (markup === undefined) {
                return document.createElement('template');
            }
            const template = document.createElement('template');
            template.innerHTML = markup;
            return template;
        },
        addClass(node, className) {
            node.classList.add(className);
        },
        addEventListener(eventName, subscriber, publisher, options) {
            (publisher || document).addEventListener(eventName, subscriber, options);
        },
        appendChild(parent, child) {
            parent.appendChild(child);
        },
        attachShadow(host, options) {
            return host.attachShadow(options);
        },
        cloneNode(node, deep) {
            return node.cloneNode(deep !== false); // use true unless the caller explicitly passes in false
        },
        convertToRenderLocation(node) {
            if (isRenderLocation(node)) {
                return node; // it's already a RenderLocation (converted by FragmentNodeSequence)
            }
            if (node.parentNode === null) {
                throw kernel.Reporter.error(52);
            }
            const locationEnd = document.createComment('au-end');
            const locationStart = document.createComment('au-start');
            DOM.replaceNode(locationEnd, node);
            DOM.insertBefore(locationStart, locationEnd);
            locationEnd.$start = locationStart;
            locationStart.$nodes = null;
            return locationEnd;
        },
        createComment(text) {
            return document.createComment(text);
        },
        createElement(name) {
            return document.createElement(name);
        },
        createNodeObserver(target, callback, options) {
            const observer = new MutationObserver(callback);
            observer.observe(target, options);
            return observer;
        },
        createTextNode(text) {
            return document.createTextNode(text);
        },
        getAttribute(node, name) {
            return node.getAttribute(name);
        },
        hasClass(node, className) {
            return node.classList.contains(className);
        },
        insertBefore(nodeToInsert, referenceNode) {
            referenceNode.parentNode.insertBefore(nodeToInsert, referenceNode);
        },
        isAllWhitespace(node) {
            if (node.auInterpolationTarget === true) {
                return false;
            }
            const text = node.textContent;
            const len = text.length;
            let i = 0;
            // for perf benchmark of this compared to the regex method: http://jsben.ch/p70q2 (also a general case against using regex)
            while (i < len) {
                // charCodes 0-0x20(32) can all be considered whitespace (non-whitespace chars in this range don't have a visual representation anyway)
                if (text.charCodeAt(i) > 0x20) {
                    return false;
                }
                i++;
            }
            return true;
        },
        isCommentNodeType(node) {
            return node.nodeType === COMMENT_NODE;
        },
        isDocumentFragmentType(node) {
            return node.nodeType === DOCUMENT_FRAGMENT_NODE;
        },
        isElementNodeType(node) {
            return node.nodeType === ELEMENT_NODE;
        },
        isNodeInstance(potentialNode) {
            return potentialNode.nodeType > 0;
        },
        isTextNodeType(node) {
            return node.nodeType === TEXT_NODE;
        },
        migrateChildNodes(currentParent, newParent) {
            while (currentParent.firstChild) {
                DOM.appendChild(newParent, currentParent.firstChild);
            }
        },
        registerElementResolver(container, resolver) {
            container.registerResolver(INode, resolver);
            container.registerResolver(Element, resolver);
            container.registerResolver(HTMLElement, resolver);
            container.registerResolver(SVGElement, resolver);
        },
        remove(node) {
            if (node.remove) {
                node.remove();
            }
            else {
                node.parentNode.removeChild(node);
            }
        },
        removeAttribute(node, name) {
            node.removeAttribute(name);
        },
        removeClass(node, className) {
            node.classList.remove(className);
        },
        removeEventListener(eventName, subscriber, publisher, options) {
            (publisher || document).removeEventListener(eventName, subscriber, options);
        },
        replaceNode(newChild, oldChild) {
            if (oldChild.parentNode) {
                oldChild.parentNode.replaceChild(newChild, oldChild);
            }
        },
        setAttribute(node, name, value) {
            node.setAttribute(name, value);
        },
        treatAsNonWhitespace(node) {
            // see isAllWhitespace above
            node.auInterpolationTarget = true;
        }
    };
    // This is an implementation of INodeSequence that represents "no DOM" to render.
    // It's used in various places to avoid null and to encode
    // the explicit idea of "no view".
    const emptySequence = {
        firstChild: null,
        lastChild: null,
        childNodes: kernel.PLATFORM.emptyArray,
        findTargets() { return kernel.PLATFORM.emptyArray; },
        insertBefore(refNode) { },
        appendTo(parent) { },
        remove() { }
    };
    const NodeSequence = {
        empty: emptySequence
    };
    /**
     * An specialized INodeSequence with optimizations for text (interpolation) bindings
     * The contract of this INodeSequence is:
     * - the previous element is an `au-marker` node
     * - text is the actual text node
     */
    class TextNodeSequence {
        constructor(text) {
            this.firstChild = text;
            this.lastChild = text;
            this.childNodes = [text];
            this.targets = [new AuMarker(text)];
        }
        findTargets() {
            return this.targets;
        }
        insertBefore(refNode) {
            refNode.parentNode.insertBefore(this.firstChild, refNode);
        }
        appendTo(parent) {
            parent.appendChild(this.firstChild);
        }
        remove() {
            this.firstChild.remove();
        }
    }
    // tslint:enable:no-any
    // This is the most common form of INodeSequence.
    // Every custom element or template controller whose node sequence is based on an HTML template
    // has an instance of this under the hood. Anyone who wants to create a node sequence from
    // a string of markup would also receive an instance of this.
    // CompiledTemplates create instances of FragmentNodeSequence.
    /*@internal*/
    class FragmentNodeSequence {
        constructor(fragment) {
            this.fragment = fragment;
            // tslint:disable-next-line:no-any
            const targetNodeList = fragment.querySelectorAll('.au');
            let i = 0;
            let ii = targetNodeList.length;
            const targets = this.targets = Array(ii);
            while (i < ii) {
                // eagerly convert all markers to IRenderLocations (otherwise the renderer
                // will do it anyway) and store them in the target list (since the comments
                // can't be queried)
                const target = targetNodeList[i];
                if (target.nodeName === 'AU-MARKER') {
                    // note the renderer will still call this method, but it will just return the
                    // location if it sees it's already a location
                    targets[i] = DOM.convertToRenderLocation(target);
                }
                else {
                    // also store non-markers for consistent ordering
                    targets[i] = target;
                }
                ++i;
            }
            const childNodeList = fragment.childNodes;
            i = 0;
            ii = childNodeList.length;
            const childNodes = this.childNodes = Array(ii);
            while (i < ii) {
                childNodes[i] = childNodeList[i];
                ++i;
            }
            this.firstChild = fragment.firstChild;
            this.lastChild = fragment.lastChild;
            this.start = this.end = null;
        }
        findTargets() {
            // tslint:disable-next-line:no-any
            return this.targets;
        }
        insertBefore(refNode) {
            // tslint:disable-next-line:no-any
            refNode.parentNode.insertBefore(this.fragment, refNode);
            // internally we could generally assume that this is an IRenderLocation,
            // but since this is also public API we still need to double check
            // (or horrible things might happen)
            if (isRenderLocation(refNode)) {
                this.end = refNode;
                const start = this.start = refNode.$start;
                if (start.$nodes === null) {
                    start.$nodes = this;
                }
                else {
                    // if more than one NodeSequence uses the same RenderLocation, it's an child
                    // of a repeater (or something similar) and we shouldn't remove all nodes between
                    // start - end since that would always remove all items from a repeater, even
                    // when only one is removed
                    // so we set $nodes to PLATFORM.emptyObject to 1) tell other sequences that it's
                    // occupied and 2) prevent start.$nodes === this from ever evaluating to true
                    // during remove()
                    start.$nodes = kernel.PLATFORM.emptyObject;
                }
            }
        }
        appendTo(parent) {
            // tslint:disable-next-line:no-any
            parent.appendChild(this.fragment);
            // this can never be a RenderLocation, and if for whatever reason we moved
            // from a RenderLocation to a host, make sure "start" and "end" are null
            this.start = this.end = null;
        }
        remove() {
            const fragment = this.fragment;
            if (this.start !== null && this.start.$nodes === this) {
                // if we're between a valid "start" and "end" (e.g. if/else, containerless, or a
                // repeater with a single item) then simply remove everything in-between (but not
                // the comments themselves as they belong to the parent)
                const end = this.end;
                let next;
                let current = this.start.nextSibling;
                while (current !== end) {
                    next = current.nextSibling;
                    // tslint:disable-next-line:no-any
                    fragment.appendChild(current);
                    current = next;
                }
                this.start.$nodes = null;
                this.start = this.end = null;
            }
            else {
                // otherwise just remove from first to last child in the regular way
                let current = this.firstChild;
                if (current.parentNode !== fragment) {
                    const end = this.lastChild;
                    let next;
                    while (current !== null) {
                        next = current.nextSibling;
                        // tslint:disable-next-line:no-any
                        fragment.appendChild(current);
                        if (current === end) {
                            break;
                        }
                        current = next;
                    }
                }
            }
        }
    }
    class NodeSequenceFactory {
        constructor(fragment) {
            const childNodes = fragment.childNodes;
            switch (childNodes.length) {
                case 0:
                    this.createNodeSequence = () => NodeSequence.empty;
                    return;
                case 2:
                    const target = childNodes[0];
                    if (target.nodeName === 'AU-MARKER' || target.nodeName === '#comment') {
                        const text = childNodes[1];
                        if (text.nodeType === TEXT_NODE && text.textContent === ' ') {
                            text.textContent = '';
                            this.deepClone = false;
                            this.node = text;
                            this.Type = TextNodeSequence;
                            return;
                        }
                    }
                // falls through if not returned
                default:
                    this.deepClone = true;
                    this.node = fragment;
                    this.Type = FragmentNodeSequence;
            }
        }
        static createFor(markupOrNode) {
            const fragment = DOM.createDocumentFragment(markupOrNode);
            return new NodeSequenceFactory(fragment);
        }
        createNodeSequence() {
            return new this.Type(this.node.cloneNode(this.deepClone));
        }
    }
    /*@internal*/
    class AuMarker {
        constructor(next) {
            this.textContent = '';
            this.nextSibling = next;
        }
        get parentNode() {
            return this.nextSibling.parentNode;
        }
        remove() { }
    }
    (proto => {
        proto.previousSibling = null;
        proto.firstChild = null;
        proto.lastChild = null;
        proto.childNodes = kernel.PLATFORM.emptyArray;
        proto.nodeName = 'AU-MARKER';
        proto.nodeType = ELEMENT_NODE;
    })(AuMarker.prototype);

    function subscriberCollection(mutationKind) {
        return function (target) {
            const proto = target.prototype;
            proto._subscriberFlags = 0 /* None */;
            proto._subscriber0 = null;
            proto._subscriber1 = null;
            proto._subscriber2 = null;
            proto._subscribersRest = null;
            proto.addSubscriber = addSubscriber;
            proto.removeSubscriber = removeSubscriber;
            proto.hasSubscriber = hasSubscriber;
            proto.hasSubscribers = hasSubscribers;
            proto.callSubscribers = (mutationKind === exports.MutationKind.instance ? callPropertySubscribers : callCollectionSubscribers);
        };
    }
    function addSubscriber(subscriber) {
        if (this.hasSubscriber(subscriber)) {
            return false;
        }
        const subscriberFlags = this._subscriberFlags;
        if (!(subscriberFlags & 1 /* Subscriber0 */)) {
            this._subscriber0 = subscriber;
            this._subscriberFlags |= 1 /* Subscriber0 */;
            return true;
        }
        if (!(subscriberFlags & 2 /* Subscriber1 */)) {
            this._subscriber1 = subscriber;
            this._subscriberFlags |= 2 /* Subscriber1 */;
            return true;
        }
        if (!(subscriberFlags & 4 /* Subscriber2 */)) {
            this._subscriber2 = subscriber;
            this._subscriberFlags |= 4 /* Subscriber2 */;
            return true;
        }
        if (!(subscriberFlags & 8 /* SubscribersRest */)) {
            this._subscribersRest = [subscriber];
            this._subscriberFlags |= 8 /* SubscribersRest */;
            return true;
        }
        this._subscribersRest.push(subscriber);
        return true;
    }
    function removeSubscriber(subscriber) {
        const subscriberFlags = this._subscriberFlags;
        if ((subscriberFlags & 1 /* Subscriber0 */) && this._subscriber0 === subscriber) {
            this._subscriber0 = null;
            this._subscriberFlags &= ~1 /* Subscriber0 */;
            return true;
        }
        if ((subscriberFlags & 2 /* Subscriber1 */) && this._subscriber1 === subscriber) {
            this._subscriber1 = null;
            this._subscriberFlags &= ~2 /* Subscriber1 */;
            return true;
        }
        if ((subscriberFlags & 4 /* Subscriber2 */) && this._subscriber2 === subscriber) {
            this._subscriber2 = null;
            this._subscriberFlags &= ~4 /* Subscriber2 */;
            return true;
        }
        if (subscriberFlags & 8 /* SubscribersRest */) {
            const subscribers = this._subscribersRest;
            for (let i = 0, ii = subscribers.length; i < ii; ++i) {
                if (subscribers[i] === subscriber) {
                    subscribers.splice(i, 1);
                    if (ii === 1) {
                        this._subscriberFlags &= ~8 /* SubscribersRest */;
                    }
                    return true;
                }
            }
        }
        return false;
    }
    function callPropertySubscribers(newValue, previousValue, flags) {
        /**
         * Note: change handlers may have the side-effect of adding/removing subscribers to this collection during this
         * callSubscribers invocation, so we're caching them all before invoking any.
         * Subscribers added during this invocation are not invoked (and they shouldn't be).
         * Subscribers removed during this invocation will still be invoked (and they also shouldn't be,
         * however this is accounted for via $isBound and similar flags on the subscriber objects)
         */
        const subscriber0 = this._subscriber0;
        const subscriber1 = this._subscriber1;
        const subscriber2 = this._subscriber2;
        let subscribers = this._subscribersRest;
        if (subscribers !== null) {
            subscribers = subscribers.slice();
        }
        if (subscriber0 !== null) {
            subscriber0.handleChange(newValue, previousValue, flags);
        }
        if (subscriber1 !== null) {
            subscriber1.handleChange(newValue, previousValue, flags);
        }
        if (subscriber2 !== null) {
            subscriber2.handleChange(newValue, previousValue, flags);
        }
        const length = subscribers && subscribers.length;
        if (length !== undefined && length > 0) {
            for (let i = 0; i < length; ++i) {
                const subscriber = subscribers[i];
                if (subscriber !== null) {
                    subscriber.handleChange(newValue, previousValue, flags);
                }
            }
        }
    }
    function callCollectionSubscribers(origin, args, flags) {
        const subscriber0 = this._subscriber0;
        const subscriber1 = this._subscriber1;
        const subscriber2 = this._subscriber2;
        let subscribers = this._subscribersRest;
        if (subscribers !== null) {
            subscribers = subscribers.slice();
        }
        if (subscriber0 !== null) {
            subscriber0.handleChange(origin, args, flags);
        }
        if (subscriber1 !== null) {
            subscriber1.handleChange(origin, args, flags);
        }
        if (subscriber2 !== null) {
            subscriber2.handleChange(origin, args, flags);
        }
        const length = subscribers && subscribers.length;
        if (length !== undefined && length > 0) {
            for (let i = 0; i < length; ++i) {
                const subscriber = subscribers[i];
                if (subscriber !== null) {
                    subscriber.handleChange(origin, args, flags);
                }
            }
        }
        this.lifecycle.enqueueFlush(this);
    }
    function hasSubscribers() {
        return this._subscriberFlags !== 0 /* None */;
    }
    function hasSubscriber(subscriber) {
        // Flags here is just a perf tweak
        // Compared to not using flags, it's a moderate speed-up when this collection does not have the subscriber;
        // and minor slow-down when it does, and the former is more common than the latter.
        const subscriberFlags = this._subscriberFlags;
        if ((subscriberFlags & 1 /* Subscriber0 */) && this._subscriber0 === subscriber) {
            return true;
        }
        if ((subscriberFlags & 2 /* Subscriber1 */) && this._subscriber1 === subscriber) {
            return true;
        }
        if ((subscriberFlags & 4 /* Subscriber2 */) && this._subscriber2 === subscriber) {
            return true;
        }
        if (subscriberFlags & 8 /* SubscribersRest */) {
            // no need to check length; if the flag is set, there's always at least one
            const subscribers = this._subscribersRest;
            for (let i = 0, ii = subscribers.length; i < ii; ++i) {
                if (subscribers[i] === subscriber) {
                    return true;
                }
            }
        }
        return false;
    }
    function batchedSubscriberCollection() {
        return function (target) {
            const proto = target.prototype;
            proto._batchedSubscriberFlags = 0 /* None */;
            proto._batchedSubscriber0 = null;
            proto._batchedSubscriber1 = null;
            proto._batchedSubscriber2 = null;
            proto._batchedSubscribersRest = null;
            proto.addBatchedSubscriber = addBatchedSubscriber;
            proto.removeBatchedSubscriber = removeBatchedSubscriber;
            proto.hasBatchedSubscriber = hasBatchedSubscriber;
            proto.hasBatchedSubscribers = hasBatchedSubscribers;
            proto.callBatchedSubscribers = callBatchedCollectionSubscribers;
        };
    }
    function addBatchedSubscriber(subscriber) {
        if (this.hasBatchedSubscriber(subscriber)) {
            return false;
        }
        const subscriberFlags = this._batchedSubscriberFlags;
        if (!(subscriberFlags & 1 /* Subscriber0 */)) {
            this._batchedSubscriber0 = subscriber;
            this._batchedSubscriberFlags |= 1 /* Subscriber0 */;
            return true;
        }
        if (!(subscriberFlags & 2 /* Subscriber1 */)) {
            this._batchedSubscriber1 = subscriber;
            this._batchedSubscriberFlags |= 2 /* Subscriber1 */;
            return true;
        }
        if (!(subscriberFlags & 4 /* Subscriber2 */)) {
            this._batchedSubscriber2 = subscriber;
            this._batchedSubscriberFlags |= 4 /* Subscriber2 */;
            return true;
        }
        if (!(subscriberFlags & 8 /* SubscribersRest */)) {
            this._batchedSubscribersRest = [subscriber];
            this._batchedSubscriberFlags |= 8 /* SubscribersRest */;
            return true;
        }
        this._batchedSubscribersRest.push(subscriber);
        return true;
    }
    function removeBatchedSubscriber(subscriber) {
        const subscriberFlags = this._batchedSubscriberFlags;
        if ((subscriberFlags & 1 /* Subscriber0 */) && this._batchedSubscriber0 === subscriber) {
            this._batchedSubscriber0 = null;
            this._batchedSubscriberFlags &= ~1 /* Subscriber0 */;
            return true;
        }
        if ((subscriberFlags & 2 /* Subscriber1 */) && this._batchedSubscriber1 === subscriber) {
            this._batchedSubscriber1 = null;
            this._batchedSubscriberFlags &= ~2 /* Subscriber1 */;
            return true;
        }
        if ((subscriberFlags & 4 /* Subscriber2 */) && this._batchedSubscriber2 === subscriber) {
            this._batchedSubscriber2 = null;
            this._batchedSubscriberFlags &= ~4 /* Subscriber2 */;
            return true;
        }
        if (subscriberFlags & 8 /* SubscribersRest */) {
            const subscribers = this._batchedSubscribersRest;
            for (let i = 0, ii = subscribers.length; i < ii; ++i) {
                if (subscribers[i] === subscriber) {
                    subscribers.splice(i, 1);
                    if (ii === 1) {
                        this._batchedSubscriberFlags &= ~8 /* SubscribersRest */;
                    }
                    return true;
                }
            }
        }
        return false;
    }
    function callBatchedCollectionSubscribers(indexMap) {
        const subscriber0 = this._batchedSubscriber0;
        const subscriber1 = this._batchedSubscriber1;
        const subscriber2 = this._batchedSubscriber2;
        let subscribers = this._batchedSubscribersRest;
        if (subscribers !== null) {
            subscribers = subscribers.slice();
        }
        if (subscriber0 !== null) {
            subscriber0.handleBatchedChange(indexMap);
        }
        if (subscriber1 !== null) {
            subscriber1.handleBatchedChange(indexMap);
        }
        if (subscriber2 !== null) {
            subscriber2.handleBatchedChange(indexMap);
        }
        const length = subscribers && subscribers.length;
        if (length !== undefined && length > 0) {
            for (let i = 0; i < length; ++i) {
                const subscriber = subscribers[i];
                if (subscriber !== null) {
                    subscriber.handleBatchedChange(indexMap);
                }
            }
        }
    }
    function hasBatchedSubscribers() {
        return this._batchedSubscriberFlags !== 0 /* None */;
    }
    function hasBatchedSubscriber(subscriber) {
        // Flags here is just a perf tweak
        // Compared to not using flags, it's a moderate speed-up when this collection does not have the subscriber;
        // and minor slow-down when it does, and the former is more common than the latter.
        const subscriberFlags = this._batchedSubscriberFlags;
        if ((subscriberFlags & 1 /* Subscriber0 */) && this._batchedSubscriber0 === subscriber) {
            return true;
        }
        if ((subscriberFlags & 2 /* Subscriber1 */) && this._batchedSubscriber1 === subscriber) {
            return true;
        }
        if ((subscriberFlags & 4 /* Subscriber2 */) && this._batchedSubscriber2 === subscriber) {
            return true;
        }
        if (subscriberFlags & 8 /* SubscribersRest */) {
            // no need to check length; if the flag is set, there's always at least one
            const subscribers = this._batchedSubscribersRest;
            for (let i = 0, ii = subscribers.length; i < ii; ++i) {
                if (subscribers[i] === subscriber) {
                    return true;
                }
            }
        }
        return false;
    }

    function setValue(newValue, flags) {
        const currentValue = this.currentValue;
        newValue = newValue === null || newValue === undefined ? this.defaultValue : newValue;
        if (currentValue !== newValue) {
            this.currentValue = newValue;
            if ((flags & (exports.LifecycleFlags.fromFlush | exports.LifecycleFlags.fromBind)) &&
                !((flags & exports.LifecycleFlags.doNotUpdateDOM) && DOM.isNodeInstance(this.obj))) {
                this.setValueCore(newValue, flags);
            }
            else {
                this.currentFlags = flags;
                return this.lifecycle.enqueueFlush(this);
            }
        }
        return Promise.resolve();
    }
    function flush(flags) {
        if (flags & exports.LifecycleFlags.doNotUpdateDOM) {
            if (DOM.isNodeInstance(this.obj)) {
                // re-queue the change so it will still propagate on flush when it's attached again
                this.lifecycle.enqueueFlush(this);
                return;
            }
        }
        const currentValue = this.currentValue;
        // we're doing this check because a value could be set multiple times before a flush, and the final value could be the same as the original value
        // in which case the target doesn't need to be updated
        if (this.oldValue !== currentValue) {
            this.setValueCore(currentValue, this.currentFlags | flags | exports.LifecycleFlags.updateTargetInstance);
            this.oldValue = this.currentValue;
        }
    }
    function dispose() {
        this.currentValue = null;
        this.oldValue = null;
        this.defaultValue = null;
        this.obj = null;
        this.propertyKey = '';
    }
    function targetObserver(defaultValue = null) {
        return function (target) {
            subscriberCollection(exports.MutationKind.instance)(target);
            const proto = target.prototype;
            proto.$nextFlush = null;
            proto.currentValue = defaultValue;
            proto.oldValue = defaultValue;
            proto.defaultValue = defaultValue;
            proto.obj = null;
            proto.propertyKey = '';
            proto.setValue = proto.setValue || setValue;
            proto.flush = proto.flush || flush;
            proto.dispose = proto.dispose || dispose;
        };
    }

    // tslint:disable-next-line:no-http-string
    const xlinkAttributeNS = 'http://www.w3.org/1999/xlink';
    exports.XLinkAttributeAccessor = class XLinkAttributeAccessor {
        // xlink namespaced attributes require getAttributeNS/setAttributeNS
        // (even though the NS version doesn't work for other namespaces
        // in html5 documents)
        // Using very HTML-specific code here since this isn't likely to get
        // called unless operating against a real HTML element.
        constructor(lifecycle, obj, propertyKey, attributeName) {
            this.lifecycle = lifecycle;
            this.obj = obj;
            this.propertyKey = propertyKey;
            this.attributeName = attributeName;
            this.oldValue = this.currentValue = this.getValue();
        }
        getValue() {
            return this.obj.getAttributeNS(xlinkAttributeNS, this.attributeName);
        }
        setValueCore(newValue) {
            this.obj.setAttributeNS(xlinkAttributeNS, this.attributeName, newValue);
        }
    };
    exports.XLinkAttributeAccessor = __decorate([
        targetObserver('')
    ], exports.XLinkAttributeAccessor);
    exports.XLinkAttributeAccessor.prototype.attributeName = '';
    exports.DataAttributeAccessor = class DataAttributeAccessor {
        constructor(lifecycle, obj, propertyKey) {
            this.lifecycle = lifecycle;
            this.obj = obj;
            this.propertyKey = propertyKey;
            this.oldValue = this.currentValue = this.getValue();
        }
        getValue() {
            return DOM.getAttribute(this.obj, this.propertyKey);
        }
        setValueCore(newValue) {
            if (newValue === null) {
                DOM.removeAttribute(this.obj, this.propertyKey);
            }
            else {
                DOM.setAttribute(this.obj, this.propertyKey, newValue);
            }
        }
    };
    exports.DataAttributeAccessor = __decorate([
        targetObserver()
    ], exports.DataAttributeAccessor);
    exports.StyleAttributeAccessor = class StyleAttributeAccessor {
        constructor(lifecycle, obj) {
            this.lifecycle = lifecycle;
            this.obj = obj;
            this.oldValue = this.currentValue = obj.style.cssText;
        }
        getValue() {
            return this.obj.style.cssText;
        }
        // tslint:disable-next-line:function-name
        _setProperty(style, value) {
            let priority = '';
            if (value !== null && value !== undefined && typeof value.indexOf === 'function' && value.indexOf('!important') !== -1) {
                priority = 'important';
                value = value.replace('!important', '');
            }
            this.obj.style.setProperty(style, value, priority);
        }
        setValueCore(newValue) {
            const styles = this.styles || {};
            let style;
            let version = this.version;
            if (newValue !== null) {
                if (newValue instanceof Object) {
                    let value;
                    for (style in newValue) {
                        if (newValue.hasOwnProperty(style)) {
                            value = newValue[style];
                            style = style.replace(/([A-Z])/g, m => `-${m.toLowerCase()}`);
                            styles[style] = version;
                            this._setProperty(style, value);
                        }
                    }
                }
                else if (newValue.length) {
                    const rx = /\s*([\w\-]+)\s*:\s*((?:(?:[\w\-]+\(\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[\w\-]+\(\s*(?:^"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^\)]*)\),?|[^\)]*)\),?|"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^;]*),?\s*)+);?/g;
                    let pair;
                    while ((pair = rx.exec(newValue)) !== null) {
                        style = pair[1];
                        if (!style) {
                            continue;
                        }
                        styles[style] = version;
                        this._setProperty(style, pair[2]);
                    }
                }
            }
            this.styles = styles;
            this.version += 1;
            if (version === 0) {
                return;
            }
            version -= 1;
            for (style in styles) {
                if (!styles.hasOwnProperty(style) || styles[style] !== version) {
                    continue;
                }
                this.obj.style.removeProperty(style);
            }
        }
    };
    exports.StyleAttributeAccessor = __decorate([
        targetObserver()
    ], exports.StyleAttributeAccessor);
    exports.StyleAttributeAccessor.prototype.styles = null;
    exports.StyleAttributeAccessor.prototype.version = 0;
    exports.StyleAttributeAccessor.prototype.propertyKey = 'style';
    exports.ClassAttributeAccessor = class ClassAttributeAccessor {
        constructor(lifecycle, obj) {
            this.lifecycle = lifecycle;
            this.obj = obj;
        }
        getValue() {
            return this.currentValue;
        }
        setValueCore(newValue) {
            const nameIndex = this.nameIndex || {};
            let version = this.version;
            let names;
            let name;
            // Add the classes, tracking the version at which they were added.
            if (newValue.length) {
                const node = this.obj;
                names = newValue.split(/\s+/);
                for (let i = 0, length = names.length; i < length; i++) {
                    name = names[i];
                    if (!name.length) {
                        continue;
                    }
                    nameIndex[name] = version;
                    DOM.addClass(node, name);
                }
            }
            // Update state variables.
            this.nameIndex = nameIndex;
            this.version += 1;
            // First call to setValue?  We're done.
            if (version === 0) {
                return;
            }
            // Remove classes from previous version.
            version -= 1;
            for (name in nameIndex) {
                if (!nameIndex.hasOwnProperty(name) || nameIndex[name] !== version) {
                    continue;
                }
                // TODO: this has the side-effect that classes already present which are added again,
                // will be removed if they're not present in the next update.
                // Better would be do have some configurability for this behavior, allowing the user to
                // decide whether initial classes always need to be kept, always removed, or something in between
                DOM.removeClass(this.obj, name);
            }
        }
    };
    exports.ClassAttributeAccessor = __decorate([
        targetObserver('')
    ], exports.ClassAttributeAccessor);
    exports.ClassAttributeAccessor.prototype.doNotCache = true;
    exports.ClassAttributeAccessor.prototype.version = 0;
    exports.ClassAttributeAccessor.prototype.nameIndex = null;
    exports.ElementPropertyAccessor = class ElementPropertyAccessor {
        constructor(lifecycle, obj, propertyKey) {
            this.lifecycle = lifecycle;
            this.obj = obj;
            this.propertyKey = propertyKey;
        }
        getValue() {
            return this.obj[this.propertyKey];
        }
        setValueCore(value) {
            this.obj[this.propertyKey] = value;
        }
    };
    exports.ElementPropertyAccessor = __decorate([
        targetObserver('')
    ], exports.ElementPropertyAccessor);
    class PropertyAccessor {
        constructor(obj, propertyKey) {
            this.obj = obj;
            this.propertyKey = propertyKey;
        }
        getValue() {
            return this.obj[this.propertyKey];
        }
        setValue(value) {
            this.obj[this.propertyKey] = value;
        }
    }

    exports.AttrBindingBehavior = class AttrBindingBehavior {
        bind(flags, scope, binding) {
            binding.targetObserver = new exports.DataAttributeAccessor(binding.locator.get(ILifecycle), binding.target, binding.targetProperty);
        }
        // tslint:disable-next-line:no-empty
        unbind(flags, scope, binding) { }
    };
    exports.AttrBindingBehavior = __decorate([
        bindingBehavior('attr')
    ], exports.AttrBindingBehavior);

    /*
    * Note: the oneTime binding now has a non-zero value for 2 reasons:
    *  - plays nicer with bitwise operations (more consistent code, more explicit settings)
    *  - allows for potentially having something like BindingMode.oneTime | BindingMode.fromView, where an initial value is set once to the view but updates from the view also propagate back to the view model
    *
    * Furthermore, the "default" mode would be for simple ".bind" expressions to make it explicit for our logic that the default is being used.
    * This essentially adds extra information which binding could use to do smarter things and allows bindingBehaviors that add a mode instead of simply overwriting it
    */
    (function (BindingMode) {
        BindingMode[BindingMode["oneTime"] = 1] = "oneTime";
        BindingMode[BindingMode["toView"] = 2] = "toView";
        BindingMode[BindingMode["fromView"] = 4] = "fromView";
        BindingMode[BindingMode["twoWay"] = 6] = "twoWay";
        BindingMode[BindingMode["default"] = 8] = "default";
    })(exports.BindingMode || (exports.BindingMode = {}));

    const { oneTime, toView, fromView, twoWay } = exports.BindingMode;
    class BindingModeBehavior {
        constructor(mode) {
            this.mode = mode;
        }
        bind(flags, scope, binding) {
            binding.originalMode = binding.mode;
            binding.mode = this.mode;
        }
        unbind(flags, scope, binding) {
            binding.mode = binding.originalMode;
            binding.originalMode = null;
        }
    }
    exports.OneTimeBindingBehavior = class OneTimeBindingBehavior extends BindingModeBehavior {
        constructor() {
            super(oneTime);
        }
    };
    exports.OneTimeBindingBehavior = __decorate([
        bindingBehavior('oneTime')
    ], exports.OneTimeBindingBehavior);
    exports.ToViewBindingBehavior = class ToViewBindingBehavior extends BindingModeBehavior {
        constructor() {
            super(toView);
        }
    };
    exports.ToViewBindingBehavior = __decorate([
        bindingBehavior('toView')
    ], exports.ToViewBindingBehavior);
    exports.FromViewBindingBehavior = class FromViewBindingBehavior extends BindingModeBehavior {
        constructor() {
            super(fromView);
        }
    };
    exports.FromViewBindingBehavior = __decorate([
        bindingBehavior('fromView')
    ], exports.FromViewBindingBehavior);
    exports.TwoWayBindingBehavior = class TwoWayBindingBehavior extends BindingModeBehavior {
        constructor() {
            super(twoWay);
        }
    };
    exports.TwoWayBindingBehavior = __decorate([
        bindingBehavior('twoWay')
    ], exports.TwoWayBindingBehavior);

    const defineProperty = Reflect.defineProperty;
    // note: we're reusing the same object for setting all descriptors, just changing some properties as needed
    //   this works, because the properties are copied by defineProperty (so changing them afterwards doesn't affect existing descriptors)
    // see also: https://tc39.github.io/ecma262/#sec-topropertydescriptor
    const observedPropertyDescriptor = {
        get: undefined,
        set: undefined,
        enumerable: true,
        configurable: true
    };
    function subscribe(subscriber) {
        if (this.observing === false) {
            this.observing = true;
            const { obj, propertyKey } = this;
            this.currentValue = obj[propertyKey];
            observedPropertyDescriptor.get = () => this.getValue();
            observedPropertyDescriptor.set = value => { this.setValue(value, exports.LifecycleFlags.updateTargetInstance); };
            if (!defineProperty(obj, propertyKey, observedPropertyDescriptor)) {
                kernel.Reporter.write(1, propertyKey, obj);
            }
        }
        this.addSubscriber(subscriber);
    }
    function dispose$1() {
        delete this.obj[this.propertyKey];
        this.obj = null;
        this.propertyKey = null;
        this.currentValue = null;
    }
    function propertyObserver() {
        return function (target) {
            subscriberCollection(exports.MutationKind.instance)(target);
            const proto = target.prototype;
            proto.observing = false;
            proto.obj = null;
            proto.propertyKey = null;
            // Note: this will generate some "false positive" changes when setting a target undefined from a source undefined,
            // but those aren't harmful because the changes won't be propagated through to subscribers during $bind anyway.
            // It will, however, solve some "false negative" changes when the source value is undefined but the target value is not;
            // in such cases, this.currentValue in the observer being undefined will block the change from propagating to the target.
            // This is likely not working correctly in vCurrent either.
            proto.currentValue = Symbol();
            proto.subscribe = proto.subscribe || subscribe;
            proto.unsubscribe = proto.unsubscribe || proto.removeSubscriber;
            proto.dispose = proto.dispose || dispose$1;
        };
    }

    const noop = kernel.PLATFORM.noop;
    // note: string.length is the only property of any primitive that is not a function,
    // so we can hardwire it to that and simply return undefined for anything else
    // note#2: a modified primitive constructor prototype would not work (and really, it shouldn't..)
    class PrimitiveObserver {
        constructor(obj, propertyKey) {
            this.doNotCache = true;
            // we don't need to store propertyName because only 'length' can return a useful value
            if (propertyKey === 'length') {
                // deliberately not checking for typeof string as users probably still want to know via an error that their string is undefined
                this.obj = obj;
                this.getValue = this.getStringLength;
            }
            else {
                this.getValue = this.returnUndefined;
            }
        }
        getStringLength() {
            return this.obj.length;
        }
        returnUndefined() {
            return undefined;
        }
    }
    PrimitiveObserver.prototype.setValue = noop;
    PrimitiveObserver.prototype.subscribe = noop;
    PrimitiveObserver.prototype.unsubscribe = noop;
    PrimitiveObserver.prototype.dispose = noop;
    exports.SetterObserver = class SetterObserver {
        constructor(obj, propertyKey) {
            this.obj = obj;
            this.propertyKey = propertyKey;
        }
        getValue() {
            return this.currentValue;
        }
        setValue(newValue, flags) {
            const currentValue = this.currentValue;
            if (currentValue !== newValue) {
                this.currentValue = newValue;
                if (!(flags & exports.LifecycleFlags.fromBind)) {
                    this.callSubscribers(newValue, currentValue, flags);
                }
                // If subscribe() has been called, the target property descriptor is replaced by these getter/setter methods,
                // so calling obj[propertyKey] will actually return this.currentValue.
                // However, if subscribe() was not yet called (indicated by !this.observing), the target descriptor
                // is unmodified and we need to explicitly set the property value.
                // This will happen in one-time, to-view and two-way bindings during $bind, meaning that the $bind will not actually update the target value.
                // This wasn't visible in vCurrent due to connect-queue always doing a delayed update, so in many cases it didn't matter whether $bind updated the target or not.
                if (!this.observing) {
                    this.obj[this.propertyKey] = newValue;
                }
            }
        }
    };
    exports.SetterObserver = __decorate([
        propertyObserver()
    ], exports.SetterObserver);
    exports.Observer = class Observer {
        constructor(instance, propertyName, callbackName) {
            this.obj = instance;
            this.propertyKey = propertyName;
            this.currentValue = instance[propertyName];
            this.callback = callbackName in instance
                ? instance[callbackName].bind(instance)
                : noop;
        }
        getValue() {
            return this.currentValue;
        }
        setValue(newValue, flags) {
            const currentValue = this.currentValue;
            if (currentValue !== newValue) {
                this.currentValue = newValue;
                if (!(flags & exports.LifecycleFlags.fromBind)) {
                    const coercedValue = this.callback(newValue, currentValue);
                    if (coercedValue !== undefined) {
                        this.currentValue = newValue = coercedValue;
                    }
                    this.callSubscribers(newValue, currentValue, flags);
                }
            }
        }
    };
    exports.Observer = __decorate([
        propertyObserver()
    ], exports.Observer);

    /*@internal*/
    class InternalObserversLookup {
        getOrCreate(obj, key) {
            let observer = this[key];
            if (observer === undefined) {
                observer = this[key] = new exports.SetterObserver(obj, key);
            }
            return observer;
        }
    }
    class BindingContext {
        constructor(keyOrObj, value) {
            this.$synthetic = true;
            if (keyOrObj !== undefined) {
                if (value !== undefined) {
                    // if value is defined then it's just a property and a value to initialize with
                    // tslint:disable-next-line:no-any
                    this[keyOrObj] = value;
                }
                else {
                    // can either be some random object or another bindingContext to clone from
                    for (const prop in keyOrObj) {
                        if (keyOrObj.hasOwnProperty(prop)) {
                            this[prop] = keyOrObj[prop];
                        }
                    }
                }
            }
        }
        static create(keyOrObj, value) {
            return new BindingContext(keyOrObj, value);
        }
        // tslint:disable-next-line:no-reserved-keywords
        static get(scope, name, ancestor) {
            if (scope === undefined) {
                throw kernel.Reporter.error(250 /* UndefinedScope */);
            }
            if (scope === null) {
                throw kernel.Reporter.error(251 /* NullScope */);
            }
            let overrideContext = scope.overrideContext;
            if (ancestor > 0) {
                // jump up the required number of ancestor contexts (eg $parent.$parent requires two jumps)
                while (ancestor > 0) {
                    if (overrideContext.parentOverrideContext === null) {
                        return undefined;
                    }
                    ancestor--;
                    overrideContext = overrideContext.parentOverrideContext;
                }
                return name in overrideContext ? overrideContext : overrideContext.bindingContext;
            }
            // traverse the context and it's ancestors, searching for a context that has the name.
            while (overrideContext && !(name in overrideContext) && !(overrideContext.bindingContext && name in overrideContext.bindingContext)) {
                overrideContext = overrideContext.parentOverrideContext;
            }
            if (overrideContext) {
                // we located a context with the property.  return it.
                return name in overrideContext ? overrideContext : overrideContext.bindingContext;
            }
            // the name wasn't found.  return the root binding context.
            return scope.bindingContext || scope.overrideContext;
        }
        getObservers() {
            let observers = this.$observers;
            if (observers === undefined) {
                this.$observers = observers = new InternalObserversLookup();
            }
            return observers;
        }
    }
    class Scope {
        constructor(bindingContext, overrideContext) {
            this.bindingContext = bindingContext;
            this.overrideContext = overrideContext;
        }
        static create(bc, oc) {
            return new Scope(bc, oc === null || oc === undefined ? OverrideContext.create(bc, oc) : oc);
        }
        static fromOverride(oc) {
            if (oc === null || oc === undefined) {
                throw kernel.Reporter.error(252 /* NilOverrideContext */);
            }
            return new Scope(oc.bindingContext, oc);
        }
        static fromParent(ps, bc) {
            if (ps === null || ps === undefined) {
                throw kernel.Reporter.error(253 /* NilParentScope */);
            }
            return new Scope(bc, OverrideContext.create(bc, ps.overrideContext));
        }
    }
    class OverrideContext {
        constructor(bindingContext, parentOverrideContext) {
            this.bindingContext = bindingContext;
            this.parentOverrideContext = parentOverrideContext;
            this.$synthetic = true;
        }
        static create(bc, poc) {
            return new OverrideContext(bc, poc === undefined ? null : poc);
        }
        getObservers() {
            let observers = this.$observers;
            if (observers === undefined) {
                this.$observers = observers = new InternalObserversLookup();
            }
            return observers;
        }
    }

    const ISignaler = kernel.DI.createInterface().withDefault(x => x.singleton(Signaler));
    /*@internal*/
    class Signaler {
        constructor() {
            this.signals = Object.create(null);
        }
        dispatchSignal(name, flags) {
            const listeners = this.signals[name];
            if (listeners === undefined) {
                return;
            }
            for (const listener of listeners.keys()) {
                listener.handleChange(undefined, undefined, flags | exports.LifecycleFlags.updateTargetInstance);
            }
        }
        addSignalListener(name, listener) {
            const signals = this.signals;
            const listeners = signals[name];
            if (listeners === undefined) {
                signals[name] = new Set([listener]);
            }
            else {
                listeners.add(listener);
            }
        }
        removeSignalListener(name, listener) {
            const listeners = this.signals[name];
            if (listeners) {
                listeners.delete(listener);
            }
        }
    }

    function valueConverter(nameOrSource) {
        return function (target) {
            return ValueConverterResource.define(nameOrSource, target);
        };
    }
    const ValueConverterResource = {
        name: 'value-converter',
        keyFrom(name) {
            return `${this.name}:${name}`;
        },
        isType(Type) {
            return Type.kind === this;
        },
        define(nameOrSource, ctor) {
            const Type = ctor;
            const description = typeof nameOrSource === 'string'
                ? { name: nameOrSource }
                : nameOrSource;
            Type.kind = ValueConverterResource;
            Type.description = description;
            Type.register = register$1;
            return Type;
        }
    };
    function register$1(container) {
        container.register(kernel.Registration.singleton(ValueConverterResource.keyFrom(this.description.name), this));
    }

    function connects(expr) {
        return (expr.$kind & 32 /* Connects */) === 32 /* Connects */;
    }
    function observes(expr) {
        return (expr.$kind & 64 /* Observes */) === 64 /* Observes */;
    }
    function callsFunction(expr) {
        return (expr.$kind & 128 /* CallsFunction */) === 128 /* CallsFunction */;
    }
    function hasAncestor(expr) {
        return (expr.$kind & 256 /* HasAncestor */) === 256 /* HasAncestor */;
    }
    function isAssignable(expr) {
        return (expr.$kind & 8192 /* IsAssignable */) === 8192 /* IsAssignable */;
    }
    function isLeftHandSide(expr) {
        return (expr.$kind & 1024 /* IsLeftHandSide */) === 1024 /* IsLeftHandSide */;
    }
    function isPrimary(expr) {
        return (expr.$kind & 512 /* IsPrimary */) === 512 /* IsPrimary */;
    }
    function isResource(expr) {
        return (expr.$kind & 32768 /* IsResource */) === 32768 /* IsResource */;
    }
    function hasBind(expr) {
        return (expr.$kind & 2048 /* HasBind */) === 2048 /* HasBind */;
    }
    function hasUnbind(expr) {
        return (expr.$kind & 4096 /* HasUnbind */) === 4096 /* HasUnbind */;
    }
    function isLiteral(expr) {
        return (expr.$kind & 16384 /* IsLiteral */) === 16384 /* IsLiteral */;
    }
    function arePureLiterals(expressions) {
        if (expressions === undefined || expressions.length === 0) {
            return true;
        }
        for (let i = 0; i < expressions.length; ++i) {
            if (!isPureLiteral(expressions[i])) {
                return false;
            }
        }
        return true;
    }
    function isPureLiteral(expr) {
        if (isLiteral(expr)) {
            switch (expr.$kind) {
                case 17955 /* ArrayLiteral */:
                    return arePureLiterals(expr.elements);
                case 17956 /* ObjectLiteral */:
                    return arePureLiterals(expr.values);
                case 17958 /* Template */:
                    return arePureLiterals(expr.expressions);
                case 17925 /* PrimitiveLiteral */:
                    return true;
            }
        }
        return false;
    }
    class BindingBehavior {
        constructor(expression, name, args) {
            this.expression = expression;
            this.name = name;
            this.args = args;
            this.behaviorKey = BindingBehaviorResource.keyFrom(this.name);
            this.expressionHasBind = hasBind(expression);
            this.expressionHasUnbind = hasUnbind(expression);
        }
        evaluate(flags, scope, locator) {
            return this.expression.evaluate(flags, scope, locator);
        }
        assign(flags, scope, locator, value) {
            return this.expression.assign(flags, scope, locator, value);
        }
        connect(flags, scope, binding) {
            this.expression.connect(flags, scope, binding);
        }
        bind(flags, scope, binding) {
            if (scope === undefined) {
                throw kernel.Reporter.error(250 /* UndefinedScope */, this);
            }
            if (scope === null) {
                throw kernel.Reporter.error(251 /* NullScope */, this);
            }
            if (!binding) {
                throw kernel.Reporter.error(206 /* NoBinding */, this);
            }
            const locator = binding.locator;
            if (!locator) {
                throw kernel.Reporter.error(202 /* NoLocator */, this);
            }
            if (this.expressionHasBind) {
                this.expression.bind(flags, scope, binding);
            }
            const behaviorKey = this.behaviorKey;
            const behavior = locator.get(behaviorKey);
            if (!behavior) {
                throw kernel.Reporter.error(203 /* NoBehaviorFound */, this);
            }
            if (binding[behaviorKey] !== undefined && binding[behaviorKey] !== null) {
                throw kernel.Reporter.error(204 /* BehaviorAlreadyApplied */, this);
            }
            binding[behaviorKey] = behavior;
            behavior.bind.apply(behavior, [flags, scope, binding].concat(evalList(flags, scope, locator, this.args)));
        }
        unbind(flags, scope, binding) {
            const behaviorKey = this.behaviorKey;
            binding[behaviorKey].unbind(flags, scope, binding);
            binding[behaviorKey] = null;
            if (this.expressionHasUnbind) {
                this.expression.unbind(flags, scope, binding);
            }
        }
        accept(visitor) {
            return visitor.visitBindingBehavior(this);
        }
    }
    class ValueConverter {
        constructor(expression, name, args) {
            this.expression = expression;
            this.name = name;
            this.args = args;
            this.converterKey = ValueConverterResource.keyFrom(this.name);
        }
        evaluate(flags, scope, locator) {
            if (!locator) {
                throw kernel.Reporter.error(202 /* NoLocator */, this);
            }
            const converter = locator.get(this.converterKey);
            if (!converter) {
                throw kernel.Reporter.error(205 /* NoConverterFound */, this);
            }
            if ('toView' in converter) {
                const args = this.args;
                const len = args.length;
                const result = Array(len + 1);
                result[0] = this.expression.evaluate(flags, scope, locator);
                for (let i = 0; i < len; ++i) {
                    result[i + 1] = args[i].evaluate(flags, scope, locator);
                }
                return converter.toView.apply(converter, result);
            }
            return this.expression.evaluate(flags, scope, locator);
        }
        assign(flags, scope, locator, value) {
            if (!locator) {
                throw kernel.Reporter.error(202 /* NoLocator */, this);
            }
            const converter = locator.get(this.converterKey);
            if (!converter) {
                throw kernel.Reporter.error(205 /* NoConverterFound */, this);
            }
            if ('fromView' in converter) {
                value = converter.fromView.apply(converter, [value].concat(evalList(flags, scope, locator, this.args)));
            }
            return this.expression.assign(flags, scope, locator, value);
        }
        connect(flags, scope, binding) {
            if (scope === undefined) {
                throw kernel.Reporter.error(250 /* UndefinedScope */, this);
            }
            if (scope === null) {
                throw kernel.Reporter.error(251 /* NullScope */, this);
            }
            if (!binding) {
                throw kernel.Reporter.error(206 /* NoBinding */, this);
            }
            const locator = binding.locator;
            if (!locator) {
                throw kernel.Reporter.error(202 /* NoLocator */, this);
            }
            this.expression.connect(flags, scope, binding);
            const args = this.args;
            for (let i = 0, ii = args.length; i < ii; ++i) {
                args[i].connect(flags, scope, binding);
            }
            const converter = locator.get(this.converterKey);
            if (!converter) {
                throw kernel.Reporter.error(205 /* NoConverterFound */, this);
            }
            const signals = converter.signals;
            if (signals === undefined) {
                return;
            }
            const signaler = locator.get(ISignaler);
            for (let i = 0, ii = signals.length; i < ii; ++i) {
                signaler.addSignalListener(signals[i], binding);
            }
        }
        unbind(flags, scope, binding) {
            const locator = binding.locator;
            const converter = locator.get(this.converterKey);
            const signals = converter.signals;
            if (signals === undefined) {
                return;
            }
            const signaler = locator.get(ISignaler);
            for (let i = 0, ii = signals.length; i < ii; ++i) {
                signaler.removeSignalListener(signals[i], binding);
            }
        }
        accept(visitor) {
            return visitor.visitValueConverter(this);
        }
    }
    class Assign {
        constructor(target, value) {
            this.target = target;
            this.value = value;
        }
        evaluate(flags, scope, locator) {
            return this.target.assign(flags, scope, locator, this.value.evaluate(flags, scope, locator));
        }
        connect(flags, scope, binding) {
            return;
        }
        assign(flags, scope, locator, value) {
            this.value.assign(flags, scope, locator, value);
            return this.target.assign(flags, scope, locator, value);
        }
        accept(visitor) {
            return visitor.visitAssign(this);
        }
    }
    class Conditional {
        constructor(condition, yes, no) {
            this.condition = condition;
            this.yes = yes;
            this.no = no;
        }
        evaluate(flags, scope, locator) {
            return (!!this.condition.evaluate(flags, scope, locator))
                ? this.yes.evaluate(flags, scope, locator)
                : this.no.evaluate(flags, scope, locator);
        }
        connect(flags, scope, binding) {
            const condition = this.condition;
            if (condition.evaluate(flags, scope, null)) {
                this.condition.connect(flags, scope, binding);
                this.yes.connect(flags, scope, binding);
            }
            else {
                this.condition.connect(flags, scope, binding);
                this.no.connect(flags, scope, binding);
            }
        }
        accept(visitor) {
            return visitor.visitConditional(this);
        }
    }
    class AccessThis {
        constructor(ancestor = 0) {
            this.ancestor = ancestor;
        }
        evaluate(flags, scope, locator) {
            if (scope === undefined) {
                throw kernel.Reporter.error(250 /* UndefinedScope */, this);
            }
            if (scope === null) {
                throw kernel.Reporter.error(251 /* NullScope */, this);
            }
            let oc = scope.overrideContext;
            let i = this.ancestor;
            while (i-- && oc) {
                oc = oc.parentOverrideContext;
            }
            return i < 1 && oc ? oc.bindingContext : undefined;
        }
        accept(visitor) {
            return visitor.visitAccessThis(this);
        }
    }
    AccessThis.$this = new AccessThis(0);
    AccessThis.$parent = new AccessThis(1);
    class AccessScope {
        constructor(name, ancestor = 0) {
            this.name = name;
            this.ancestor = ancestor;
        }
        evaluate(flags, scope, locator) {
            const name = this.name;
            return BindingContext.get(scope, name, this.ancestor)[name];
        }
        assign(flags, scope, locator, value) {
            const name = this.name;
            const context = BindingContext.get(scope, name, this.ancestor);
            return context ? (context[name] = value) : undefined;
        }
        connect(flags, scope, binding) {
            const name = this.name;
            const context = BindingContext.get(scope, name, this.ancestor);
            binding.observeProperty(context, name);
        }
        accept(visitor) {
            return visitor.visitAccessScope(this);
        }
    }
    class AccessMember {
        constructor(object, name) {
            this.object = object;
            this.name = name;
        }
        evaluate(flags, scope, locator) {
            const instance = this.object.evaluate(flags, scope, locator);
            return instance === null || instance === undefined ? instance : instance[this.name];
        }
        assign(flags, scope, locator, value) {
            let instance = this.object.evaluate(flags, scope, locator);
            if (instance === null || typeof instance !== 'object') {
                instance = {};
                this.object.assign(flags, scope, locator, instance);
            }
            instance[this.name] = value;
            return value;
        }
        connect(flags, scope, binding) {
            const obj = this.object.evaluate(flags, scope, null);
            this.object.connect(flags, scope, binding);
            if (obj) {
                binding.observeProperty(obj, this.name);
            }
        }
        accept(visitor) {
            return visitor.visitAccessMember(this);
        }
    }
    class AccessKeyed {
        constructor(object, key) {
            this.object = object;
            this.key = key;
        }
        evaluate(flags, scope, locator) {
            const instance = this.object.evaluate(flags, scope, locator);
            if (instance === null || instance === undefined) {
                return undefined;
            }
            const key = this.key.evaluate(flags, scope, locator);
            // note: getKeyed and setKeyed are removed because they are identical to the default spec behavior
            // and the runtime does this this faster
            // tslint:disable-next-line:no-any
            return instance[key];
        }
        assign(flags, scope, locator, value) {
            const instance = this.object.evaluate(flags, scope, locator);
            const key = this.key.evaluate(flags, scope, locator);
            // tslint:disable-next-line:no-any
            return instance[key] = value;
        }
        connect(flags, scope, binding) {
            const obj = this.object.evaluate(flags, scope, null);
            this.object.connect(flags, scope, binding);
            if (typeof obj === 'object' && obj !== null) {
                this.key.connect(flags, scope, binding);
                const key = this.key.evaluate(flags, scope, null);
                // observe the property represented by the key as long as it's not an array indexer
                // (note: string indexers behave the same way as numeric indexers as long as they represent numbers)
                if (!(Array.isArray(obj) && isNumeric(key))) {
                    binding.observeProperty(obj, key);
                }
            }
        }
        accept(visitor) {
            return visitor.visitAccessKeyed(this);
        }
    }
    class CallScope {
        constructor(name, args, ancestor = 0) {
            this.name = name;
            this.args = args;
            this.ancestor = ancestor;
        }
        evaluate(flags, scope, locator) {
            const args = evalList(flags, scope, locator, this.args);
            const context = BindingContext.get(scope, this.name, this.ancestor);
            const func = getFunction(flags, context, this.name);
            if (func) {
                return func.apply(context, args);
            }
            return undefined;
        }
        connect(flags, scope, binding) {
            const args = this.args;
            for (let i = 0, ii = args.length; i < ii; ++i) {
                args[i].connect(flags, scope, binding);
            }
        }
        accept(visitor) {
            return visitor.visitCallScope(this);
        }
    }
    class CallMember {
        constructor(object, name, args) {
            this.object = object;
            this.name = name;
            this.args = args;
        }
        evaluate(flags, scope, locator) {
            const instance = this.object.evaluate(flags, scope, locator);
            const args = evalList(flags, scope, locator, this.args);
            const func = getFunction(flags, instance, this.name);
            if (func) {
                return func.apply(instance, args);
            }
            return undefined;
        }
        connect(flags, scope, binding) {
            const obj = this.object.evaluate(flags, scope, null);
            this.object.connect(flags, scope, binding);
            if (getFunction(flags & ~exports.LifecycleFlags.mustEvaluate, obj, this.name)) {
                const args = this.args;
                for (let i = 0, ii = args.length; i < ii; ++i) {
                    args[i].connect(flags, scope, binding);
                }
            }
        }
        accept(visitor) {
            return visitor.visitCallMember(this);
        }
    }
    class CallFunction {
        constructor(func, args) {
            this.func = func;
            this.args = args;
        }
        evaluate(flags, scope, locator) {
            const func = this.func.evaluate(flags, scope, locator); // not sure why this cast is needed..
            if (typeof func === 'function') {
                return func.apply(null, evalList(flags, scope, locator, this.args));
            }
            if (!(flags & exports.LifecycleFlags.mustEvaluate) && (func === null || func === undefined)) {
                return undefined;
            }
            throw kernel.Reporter.error(207 /* NotAFunction */, this);
        }
        connect(flags, scope, binding) {
            const func = this.func.evaluate(flags, scope, null);
            this.func.connect(flags, scope, binding);
            if (typeof func === 'function') {
                const args = this.args;
                for (let i = 0, ii = args.length; i < ii; ++i) {
                    args[i].connect(flags, scope, binding);
                }
            }
        }
        accept(visitor) {
            return visitor.visitCallFunction(this);
        }
    }
    class Binary {
        constructor(operation, left, right) {
            this.operation = operation;
            this.left = left;
            this.right = right;
            // what we're doing here is effectively moving the large switch statement from evaluate to the constructor
            // so that the check only needs to be done once, and evaluate (which is called many times) will have a lot less
            // work to do; we can do this because the operation can't change after it's parsed
            this.evaluate = this[operation];
        }
        evaluate(flags, scope, locator) {
            throw kernel.Reporter.error(208 /* UnknownOperator */, this);
        }
        connect(flags, scope, binding) {
            const left = this.left.evaluate(flags, scope, null);
            this.left.connect(flags, scope, binding);
            if (this.operation === '&&' && !left || this.operation === '||' && left) {
                return;
            }
            this.right.connect(flags, scope, binding);
        }
        ['&&'](f, s, l) {
            return this.left.evaluate(f, s, l) && this.right.evaluate(f, s, l);
        }
        ['||'](f, s, l) {
            return this.left.evaluate(f, s, l) || this.right.evaluate(f, s, l);
        }
        ['=='](f, s, l) {
            // tslint:disable-next-line:triple-equals
            return this.left.evaluate(f, s, l) == this.right.evaluate(f, s, l);
        }
        ['==='](f, s, l) {
            return this.left.evaluate(f, s, l) === this.right.evaluate(f, s, l);
        }
        ['!='](f, s, l) {
            // tslint:disable-next-line:triple-equals
            return this.left.evaluate(f, s, l) != this.right.evaluate(f, s, l);
        }
        ['!=='](f, s, l) {
            return this.left.evaluate(f, s, l) !== this.right.evaluate(f, s, l);
        }
        ['instanceof'](f, s, l) {
            const right = this.right.evaluate(f, s, l);
            if (typeof right === 'function') {
                return this.left.evaluate(f, s, l) instanceof right;
            }
            return false;
        }
        ['in'](f, s, l) {
            const right = this.right.evaluate(f, s, l);
            if (right !== null && typeof right === 'object') {
                return this.left.evaluate(f, s, l) in right;
            }
            return false;
        }
        // note: autoConvertAdd (and the null check) is removed because the default spec behavior is already largely similar
        // and where it isn't, you kind of want it to behave like the spec anyway (e.g. return NaN when adding a number to undefined)
        // this makes bugs in user code easier to track down for end users
        // also, skipping these checks and leaving it to the runtime is a nice little perf boost and simplifies our code
        ['+'](f, s, l) {
            // tslint:disable-next-line:no-any
            return this.left.evaluate(f, s, l) + this.right.evaluate(f, s, l);
        }
        ['-'](f, s, l) {
            // tslint:disable-next-line:no-any
            return this.left.evaluate(f, s, l) - this.right.evaluate(f, s, l);
        }
        ['*'](f, s, l) {
            // tslint:disable-next-line:no-any
            return this.left.evaluate(f, s, l) * this.right.evaluate(f, s, l);
        }
        ['/'](f, s, l) {
            // tslint:disable-next-line:no-any
            return this.left.evaluate(f, s, l) / this.right.evaluate(f, s, l);
        }
        ['%'](f, s, l) {
            // tslint:disable-next-line:no-any
            return this.left.evaluate(f, s, l) % this.right.evaluate(f, s, l);
        }
        ['<'](f, s, l) {
            return this.left.evaluate(f, s, l) < this.right.evaluate(f, s, l);
        }
        ['>'](f, s, l) {
            return this.left.evaluate(f, s, l) > this.right.evaluate(f, s, l);
        }
        ['<='](f, s, l) {
            return this.left.evaluate(f, s, l) <= this.right.evaluate(f, s, l);
        }
        ['>='](f, s, l) {
            return this.left.evaluate(f, s, l) >= this.right.evaluate(f, s, l);
        }
        // tslint:disable-next-line:member-ordering
        accept(visitor) {
            return visitor.visitBinary(this);
        }
    }
    class Unary {
        constructor(operation, expression) {
            this.operation = operation;
            this.expression = expression;
            // see Binary (we're doing the same thing here)
            // tslint:disable-next-line:no-any
            this.evaluate = this[operation];
        }
        evaluate(flags, scope, locator) {
            throw kernel.Reporter.error(208 /* UnknownOperator */, this);
        }
        connect(flags, scope, binding) {
            this.expression.connect(flags, scope, binding);
        }
        ['void'](f, s, l) {
            return void this.expression.evaluate(f, s, l);
        }
        ['typeof'](f, s, l) {
            return typeof this.expression.evaluate(f, s, l);
        }
        ['!'](f, s, l) {
            return !this.expression.evaluate(f, s, l);
        }
        ['-'](f, s, l) {
            return -this.expression.evaluate(f, s, l);
        }
        ['+'](f, s, l) {
            return +this.expression.evaluate(f, s, l);
        }
        // tslint:disable-next-line:member-ordering
        accept(visitor) {
            return visitor.visitUnary(this);
        }
    }
    class PrimitiveLiteral {
        constructor(value) {
            this.value = value;
        }
        evaluate(flags, scope, locator) {
            return this.value;
        }
        accept(visitor) {
            return visitor.visitPrimitiveLiteral(this);
        }
    }
    PrimitiveLiteral.$undefined = new PrimitiveLiteral(undefined);
    PrimitiveLiteral.$null = new PrimitiveLiteral(null);
    PrimitiveLiteral.$true = new PrimitiveLiteral(true);
    PrimitiveLiteral.$false = new PrimitiveLiteral(false);
    PrimitiveLiteral.$empty = new PrimitiveLiteral('');
    class HtmlLiteral {
        constructor(parts) {
            this.parts = parts;
        }
        evaluate(flags, scope, locator) {
            const elements = this.parts;
            let result = '';
            for (let i = 0, ii = elements.length; i < ii; ++i) {
                const value = elements[i].evaluate(flags, scope, locator);
                if (value === undefined || value === null) {
                    continue;
                }
                result += value;
            }
            return result;
        }
        connect(flags, scope, binding) {
            for (let i = 0, ii = this.parts.length; i < ii; ++i) {
                this.parts[i].connect(flags, scope, binding);
            }
        }
        accept(visitor) {
            return visitor.visitHtmlLiteral(this);
        }
    }
    class ArrayLiteral {
        constructor(elements) {
            this.elements = elements;
        }
        evaluate(flags, scope, locator) {
            const elements = this.elements;
            const length = elements.length;
            const result = Array(length);
            for (let i = 0; i < length; ++i) {
                result[i] = elements[i].evaluate(flags, scope, locator);
            }
            return result;
        }
        connect(flags, scope, binding) {
            const elements = this.elements;
            for (let i = 0, ii = elements.length; i < ii; ++i) {
                elements[i].connect(flags, scope, binding);
            }
        }
        accept(visitor) {
            return visitor.visitArrayLiteral(this);
        }
    }
    ArrayLiteral.$empty = new ArrayLiteral(kernel.PLATFORM.emptyArray);
    class ObjectLiteral {
        constructor(keys, values) {
            this.keys = keys;
            this.values = values;
        }
        evaluate(flags, scope, locator) {
            const instance = {};
            const keys = this.keys;
            const values = this.values;
            for (let i = 0, ii = keys.length; i < ii; ++i) {
                instance[keys[i]] = values[i].evaluate(flags, scope, locator);
            }
            return instance;
        }
        connect(flags, scope, binding) {
            const keys = this.keys;
            const values = this.values;
            for (let i = 0, ii = keys.length; i < ii; ++i) {
                values[i].connect(flags, scope, binding);
            }
        }
        accept(visitor) {
            return visitor.visitObjectLiteral(this);
        }
    }
    ObjectLiteral.$empty = new ObjectLiteral(kernel.PLATFORM.emptyArray, kernel.PLATFORM.emptyArray);
    class Template {
        constructor(cooked, expressions) {
            this.cooked = cooked;
            this.expressions = expressions;
            this.expressions = expressions || kernel.PLATFORM.emptyArray;
        }
        evaluate(flags, scope, locator) {
            const expressions = this.expressions;
            const cooked = this.cooked;
            let result = cooked[0];
            for (let i = 0, ii = expressions.length; i < ii; ++i) {
                result += expressions[i].evaluate(flags, scope, locator);
                result += cooked[i + 1];
            }
            return result;
        }
        connect(flags, scope, binding) {
            const expressions = this.expressions;
            for (let i = 0, ii = expressions.length; i < ii; ++i) {
                expressions[i].connect(flags, scope, binding);
                i++;
            }
        }
        accept(visitor) {
            return visitor.visitTemplate(this);
        }
    }
    Template.$empty = new Template(['']);
    class TaggedTemplate {
        constructor(cooked, raw, func, expressions) {
            this.cooked = cooked;
            this.func = func;
            this.expressions = expressions;
            cooked.raw = raw;
            this.expressions = expressions || kernel.PLATFORM.emptyArray;
        }
        evaluate(flags, scope, locator) {
            const expressions = this.expressions;
            const len = expressions.length;
            const results = Array(len);
            for (let i = 0, ii = len; i < ii; ++i) {
                results[i] = expressions[i].evaluate(flags, scope, locator);
            }
            const func = this.func.evaluate(flags, scope, locator); // not sure why this cast is needed..
            if (typeof func !== 'function') {
                throw kernel.Reporter.error(207 /* NotAFunction */, this);
            }
            return func.apply(null, [this.cooked].concat(results));
        }
        connect(flags, scope, binding) {
            const expressions = this.expressions;
            for (let i = 0, ii = expressions.length; i < ii; ++i) {
                expressions[i].connect(flags, scope, binding);
            }
            this.func.connect(flags, scope, binding);
        }
        accept(visitor) {
            return visitor.visitTaggedTemplate(this);
        }
    }
    class ArrayBindingPattern {
        // We'll either have elements, or keys+values, but never all 3
        constructor(elements) {
            this.elements = elements;
        }
        // tslint:disable-next-line:no-any
        evaluate(flags, scope, locator) {
            // TODO
        }
        // tslint:disable-next-line:no-any
        assign(flags, scope, locator, obj) {
            // TODO
        }
        connect(flags, scope, binding) {
            return;
        }
        accept(visitor) {
            return visitor.visitArrayBindingPattern(this);
        }
    }
    class ObjectBindingPattern {
        // We'll either have elements, or keys+values, but never all 3
        constructor(keys, values) {
            this.keys = keys;
            this.values = values;
        }
        // tslint:disable-next-line:no-any
        evaluate(flags, scope, locator) {
            // TODO
        }
        // tslint:disable-next-line:no-any
        assign(flags, scope, locator, obj) {
            // TODO
        }
        connect(flags, scope, binding) {
            return;
        }
        accept(visitor) {
            return visitor.visitObjectBindingPattern(this);
        }
    }
    class BindingIdentifier {
        constructor(name) {
            this.name = name;
        }
        evaluate(flags, scope, locator) {
            return this.name;
        }
        connect(flags, scope, binding) {
            return;
        }
        accept(visitor) {
            return visitor.visitBindingIdentifier(this);
        }
    }
    const toStringTag = Object.prototype.toString;
    // https://tc39.github.io/ecma262/#sec-iteration-statements
    // https://tc39.github.io/ecma262/#sec-for-in-and-for-of-statements
    class ForOfStatement {
        constructor(declaration, iterable) {
            this.declaration = declaration;
            this.iterable = iterable;
        }
        evaluate(flags, scope, locator) {
            return this.iterable.evaluate(flags, scope, locator);
        }
        count(result) {
            return CountForOfStatement[toStringTag.call(result)](result);
        }
        // tslint:disable-next-line:no-any
        iterate(result, func) {
            IterateForOfStatement[toStringTag.call(result)](result, func);
        }
        connect(flags, scope, binding) {
            this.declaration.connect(flags, scope, binding);
            this.iterable.connect(flags, scope, binding);
        }
        accept(visitor) {
            return visitor.visitForOfStatement(this);
        }
    }
    /*
    * Note: this implementation is far simpler than the one in vCurrent and might be missing important stuff (not sure yet)
    * so while this implementation is identical to Template and we could reuse that one, we don't want to lock outselves in to potentially the wrong abstraction
    * but this class might be a candidate for removal if it turns out it does provide all we need
    */
    class Interpolation {
        constructor(parts, expressions) {
            this.parts = parts;
            this.expressions = expressions;
            this.isMulti = expressions.length > 1;
            this.firstExpression = expressions[0];
        }
        evaluate(flags, scope, locator) {
            if (this.isMulti) {
                const expressions = this.expressions;
                const parts = this.parts;
                let result = parts[0];
                for (let i = 0, ii = expressions.length; i < ii; ++i) {
                    result += expressions[i].evaluate(flags, scope, locator);
                    result += parts[i + 1];
                }
                return result;
            }
            else {
                const parts = this.parts;
                return parts[0] + this.firstExpression.evaluate(flags, scope, locator) + parts[1];
            }
        }
        connect(flags, scope, binding) {
            return;
        }
        accept(visitor) {
            return visitor.visitInterpolation(this);
        }
    }
    /*
    * Note: for a property that is always the same, directly assigning it to the prototype is more efficient CPU wise
    * (gets assigned once, instead of per constructor call) as well as memory wise (stored once, instead of per instance)
    *
    * This gives us a cheap way to add some extra information to the AST for the runtime to do things more efficiently.
    */
    BindingBehavior.prototype.$kind = 38962 /* BindingBehavior */;
    ValueConverter.prototype.$kind = 36913 /* ValueConverter */;
    Assign.prototype.$kind = 8208 /* Assign */;
    Conditional.prototype.$kind = 63 /* Conditional */;
    AccessThis.prototype.$kind = 1793 /* AccessThis */;
    AccessScope.prototype.$kind = 10082 /* AccessScope */;
    AccessMember.prototype.$kind = 9323 /* AccessMember */;
    AccessKeyed.prototype.$kind = 9324 /* AccessKeyed */;
    CallScope.prototype.$kind = 1448 /* CallScope */;
    CallMember.prototype.$kind = 1161 /* CallMember */;
    CallFunction.prototype.$kind = 1162 /* CallFunction */;
    Binary.prototype.$kind = 46 /* Binary */;
    Unary.prototype.$kind = 39 /* Unary */;
    PrimitiveLiteral.prototype.$kind = 17925 /* PrimitiveLiteral */;
    HtmlLiteral.prototype.$kind = 51 /* HtmlLiteral */;
    ArrayLiteral.prototype.$kind = 17955 /* ArrayLiteral */;
    ObjectLiteral.prototype.$kind = 17956 /* ObjectLiteral */;
    Template.prototype.$kind = 17958 /* Template */;
    TaggedTemplate.prototype.$kind = 1197 /* TaggedTemplate */;
    ArrayBindingPattern.prototype.$kind = 65556 /* ArrayBindingPattern */;
    ObjectBindingPattern.prototype.$kind = 65557 /* ObjectBindingPattern */;
    BindingIdentifier.prototype.$kind = 65558 /* BindingIdentifier */;
    ForOfStatement.prototype.$kind = 55 /* ForOfStatement */;
    Interpolation.prototype.$kind = 24 /* Interpolation */;
    /// Evaluate the [list] in context of the [scope].
    function evalList(flags, scope, locator, list) {
        const len = list.length;
        const result = Array(len);
        for (let i = 0; i < len; ++i) {
            result[i] = list[i].evaluate(flags, scope, locator);
        }
        return result;
    }
    function getFunction(flags, obj, name) {
        const func = obj === null || obj === undefined ? null : obj[name];
        if (typeof func === 'function') {
            return func;
        }
        if (!(flags & exports.LifecycleFlags.mustEvaluate) && (func === null || func === undefined)) {
            return null;
        }
        throw kernel.Reporter.error(207 /* NotAFunction */, obj, name, func);
    }
    function isNumeric(value) {
        const valueType = typeof value;
        if (valueType === 'number')
            return true;
        if (valueType !== 'string')
            return false;
        const len = value.length;
        if (len === 0)
            return false;
        for (let i = 0; i < len; ++i) {
            const char = value.charCodeAt(i);
            if (char < 0x30 /*0*/ || char > 0x39 /*9*/) {
                return false;
            }
        }
        return true;
    }
    /*@internal*/
    const IterateForOfStatement = {
        ['[object Array]'](result, func) {
            for (let i = 0, ii = result.length; i < ii; ++i) {
                func(result, i, result[i]);
            }
        },
        ['[object Map]'](result, func) {
            const arr = Array(result.size);
            let i = -1;
            for (const entry of result.entries()) {
                arr[++i] = entry;
            }
            IterateForOfStatement['[object Array]'](arr, func);
        },
        ['[object Set]'](result, func) {
            const arr = Array(result.size);
            let i = -1;
            for (const key of result.keys()) {
                arr[++i] = key;
            }
            IterateForOfStatement['[object Array]'](arr, func);
        },
        ['[object Number]'](result, func) {
            const arr = Array(result);
            for (let i = 0; i < result; ++i) {
                arr[i] = i;
            }
            IterateForOfStatement['[object Array]'](arr, func);
        },
        ['[object Null]'](result, func) {
            return;
        },
        ['[object Undefined]'](result, func) {
            return;
        }
    };
    /*@internal*/
    const CountForOfStatement = {
        ['[object Array]'](result) { return result.length; },
        ['[object Map]'](result) { return result.size; },
        ['[object Set]'](result) { return result.size; },
        ['[object Number]'](result) { return result; },
        ['[object Null]'](result) { return 0; },
        ['[object Undefined]'](result) { return 0; }
    };
    // Give each AST class a noop for each interface method if and only if it's not already defined
    // This accomplishes the following:
    //   1) no runtime error due to bad AST structure (it's the parser's job to guard against that)
    //   2) no runtime error due to a bad binding such as two-way on a literal (no need, since it doesn't threaten the integrity of the app's state)
    //   3) should we decide something else, we can easily change the global behavior of 1) and 2) by simply assigning a different method here (either in the source or via AOT)
    const ast = [AccessThis, AccessScope, ArrayLiteral, ObjectLiteral, PrimitiveLiteral, Template, Unary, CallFunction, CallMember, CallScope, AccessMember, AccessKeyed, TaggedTemplate, Binary, Conditional, Assign, ForOfStatement];
    for (let i = 0, ii = ast.length; i < ii; ++i) {
        const proto = ast[i].prototype;
        // tslint:disable-next-line:no-any
        proto.assign = proto.assign || kernel.PLATFORM.noop;
        proto.connect = proto.connect || kernel.PLATFORM.noop;
    }

    // TODO: add connect-queue (or something similar) back in when everything else is working, to improve startup time
    const slotNames = [];
    const versionSlotNames = [];
    let lastSlot = -1;
    function ensureEnoughSlotNames(currentSlot) {
        if (currentSlot === lastSlot) {
            lastSlot += 5;
            const ii = slotNames.length = versionSlotNames.length = lastSlot + 1;
            for (let i = currentSlot + 1; i < ii; ++i) {
                slotNames[i] = `_observer${i}`;
                versionSlotNames[i] = `_observerVersion${i}`;
            }
        }
    }
    ensureEnoughSlotNames(-1);
    /*@internal*/
    function addObserver(observer) {
        // find the observer.
        const observerSlots = this.observerSlots === undefined ? 0 : this.observerSlots;
        let i = observerSlots;
        while (i-- && this[slotNames[i]] !== observer)
            ;
        // if we are not already observing, put the observer in an open slot and subscribe.
        if (i === -1) {
            i = 0;
            while (this[slotNames[i]]) {
                i++;
            }
            this[slotNames[i]] = observer;
            observer.subscribe(this);
            // increment the slot count.
            if (i === observerSlots) {
                this.observerSlots = i + 1;
            }
        }
        // set the "version" when the observer was used.
        if (this.version === undefined) {
            this.version = 0;
        }
        this[versionSlotNames[i]] = this.version;
        ensureEnoughSlotNames(i);
    }
    /*@internal*/
    function observeProperty(obj, propertyName) {
        const observer = this.observerLocator.getObserver(obj, propertyName);
        /* Note: we need to cast here because we can indeed get an accessor instead of an observer,
         *  in which case the call to observer.subscribe will throw. It's not very clean and we can solve this in 2 ways:
         *  1. Fail earlier: only let the locator resolve observers from .getObserver, and throw if no branches are left (e.g. it would otherwise return an accessor)
         *  2. Fail silently (without throwing): give all accessors a no-op subscribe method
         *
         * We'll probably want to implement some global configuration (like a "strict" toggle) so users can pick between enforced correctness vs. ease-of-use
         */
        this.addObserver(observer);
    }
    /*@internal*/
    function unobserve(all) {
        const slots = this.observerSlots;
        let slotName;
        let observer;
        if (all === true) {
            for (let i = 0; i < slots; ++i) {
                slotName = slotNames[i];
                observer = this[slotName];
                if (observer !== null && observer !== undefined) {
                    this[slotName] = null;
                    observer.unsubscribe(this);
                }
            }
        }
        else {
            const version = this.version;
            for (let i = 0; i < slots; ++i) {
                if (this[versionSlotNames[i]] !== version) {
                    slotName = slotNames[i];
                    observer = this[slotName];
                    if (observer !== null && observer !== undefined) {
                        this[slotName] = null;
                        observer.unsubscribe(this);
                    }
                }
            }
        }
    }
    function connectableDecorator(target) {
        const proto = target.prototype;
        if (!proto.hasOwnProperty('observeProperty'))
            proto.observeProperty = observeProperty;
        if (!proto.hasOwnProperty('unobserve'))
            proto.unobserve = unobserve;
        if (!proto.hasOwnProperty('addObserver'))
            proto.addObserver = addObserver;
        return target;
    }
    function connectable(target) {
        return target === undefined ? connectableDecorator : connectableDecorator(target);
    }

    // BindingMode is not a const enum (and therefore not inlined), so assigning them to a variable to save a member accessor is a minor perf tweak
    const { oneTime: oneTime$1, toView: toView$1, fromView: fromView$1 } = exports.BindingMode;
    // pre-combining flags for bitwise checks is a minor perf tweak
    const toViewOrOneTime = toView$1 | oneTime$1;
    exports.Binding = class Binding {
        constructor(sourceExpression, target, targetProperty, mode, observerLocator, locator) {
            this.sourceExpression = sourceExpression;
            this.target = target;
            this.targetProperty = targetProperty;
            this.mode = mode;
            this.observerLocator = observerLocator;
            this.locator = locator;
            this.$nextConnect = null;
            this.$nextPatch = null;
            this.$nextBind = null;
            this.$prevBind = null;
            this.$state = 0 /* none */;
            this.$scope = null;
            this.$lifecycle = locator.get(ILifecycle);
        }
        updateTarget(value, flags) {
            this.targetObserver.setValue(value, flags | exports.LifecycleFlags.updateTargetInstance);
        }
        updateSource(value, flags) {
            this.sourceExpression.assign(flags | exports.LifecycleFlags.updateSourceExpression, this.$scope, this.locator, value);
        }
        handleChange(newValue, previousValue, flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            const sourceExpression = this.sourceExpression;
            const $scope = this.$scope;
            const locator = this.locator;
            if (flags & exports.LifecycleFlags.updateTargetInstance) {
                const targetObserver = this.targetObserver;
                const mode = this.mode;
                previousValue = targetObserver.getValue();
                // if the only observable is an AccessScope then we can assume the passed-in newValue is the correct and latest value
                if (sourceExpression.$kind !== 10082 /* AccessScope */ || this.observerSlots > 1) {
                    newValue = sourceExpression.evaluate(flags, $scope, locator);
                }
                if (newValue !== previousValue) {
                    this.updateTarget(newValue, flags);
                }
                if ((mode & oneTime$1) === 0) {
                    this.version++;
                    sourceExpression.connect(flags, $scope, this);
                    this.unobserve(false);
                }
                return;
            }
            if (flags & exports.LifecycleFlags.updateSourceExpression) {
                if (newValue !== sourceExpression.evaluate(flags, $scope, locator)) {
                    this.updateSource(newValue, flags);
                }
                return;
            }
            throw kernel.Reporter.error(15, exports.LifecycleFlags[flags]);
        }
        $bind(flags, scope) {
            if (this.$state & 2 /* isBound */) {
                if (this.$scope === scope) {
                    return;
                }
                this.$unbind(flags | exports.LifecycleFlags.fromBind);
            }
            // add isBinding flag
            this.$state |= 1 /* isBinding */;
            this.$scope = scope;
            let sourceExpression = this.sourceExpression;
            if (hasBind(sourceExpression)) {
                sourceExpression.bind(flags, scope, this);
            }
            const mode = this.mode;
            let targetObserver = this.targetObserver;
            if (!targetObserver) {
                if (mode & fromView$1) {
                    targetObserver = this.targetObserver = this.observerLocator.getObserver(this.target, this.targetProperty);
                }
                else {
                    targetObserver = this.targetObserver = this.observerLocator.getAccessor(this.target, this.targetProperty);
                }
            }
            if (targetObserver.bind) {
                targetObserver.bind(flags);
            }
            // during bind, binding behavior might have changed sourceExpression
            sourceExpression = this.sourceExpression;
            if (mode & toViewOrOneTime) {
                this.updateTarget(sourceExpression.evaluate(flags, scope, this.locator), flags);
            }
            if (mode & toView$1) {
                this.$lifecycle.enqueueConnect(this);
            }
            if (mode & fromView$1) {
                targetObserver.subscribe(this);
            }
            // add isBound flag and remove isBinding flag
            this.$state |= 2 /* isBound */;
            this.$state &= ~1 /* isBinding */;
        }
        $unbind(flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            // add isUnbinding flag
            this.$state |= 64 /* isUnbinding */;
            const sourceExpression = this.sourceExpression;
            if (hasUnbind(sourceExpression)) {
                sourceExpression.unbind(flags, this.$scope, this);
            }
            this.$scope = null;
            const targetObserver = this.targetObserver;
            if (targetObserver.unbind) {
                targetObserver.unbind(flags);
            }
            if (targetObserver.unsubscribe) {
                targetObserver.unsubscribe(this);
            }
            this.unobserve(true);
            // remove isBound and isUnbinding flags
            this.$state &= ~(2 /* isBound */ | 64 /* isUnbinding */);
        }
        connect(flags) {
            if (this.$state & 2 /* isBound */) {
                this.sourceExpression.connect(flags | exports.LifecycleFlags.mustEvaluate, this.$scope, this);
            }
        }
        patch(flags) {
            if (this.$state & 2 /* isBound */) {
                this.updateTarget(this.sourceExpression.evaluate(flags | exports.LifecycleFlags.mustEvaluate, this.$scope, this.locator), flags);
            }
        }
    };
    exports.Binding = __decorate([
        connectable()
    ], exports.Binding);

    const unset = {};
    /*@internal*/
    function debounceCallSource(event) {
        const state = this.debounceState;
        clearTimeout(state.timeoutId);
        state.timeoutId = setTimeout(() => this.debouncedMethod(event), state.delay);
    }
    /*@internal*/
    function debounceCall(newValue, oldValue, flags) {
        const state = this.debounceState;
        clearTimeout(state.timeoutId);
        if (!(flags & state.callContextToDebounce)) {
            state.oldValue = unset;
            this.debouncedMethod(newValue, oldValue, flags);
            return;
        }
        if (state.oldValue === unset) {
            state.oldValue = oldValue;
        }
        state.timeoutId = setTimeout(() => {
            const ov = state.oldValue;
            state.oldValue = unset;
            this.debouncedMethod(newValue, ov, flags);
        }, state.delay);
    }
    const fromView$2 = exports.BindingMode.fromView;
    exports.DebounceBindingBehavior = class DebounceBindingBehavior {
        bind(flags, scope, binding, delay = 200) {
            let methodToDebounce;
            let callContextToDebounce;
            let debouncer;
            if (binding instanceof exports.Binding) {
                methodToDebounce = 'handleChange';
                debouncer = debounceCall;
                callContextToDebounce = binding.mode & fromView$2 ? exports.LifecycleFlags.updateSourceExpression : exports.LifecycleFlags.updateTargetInstance;
            }
            else {
                methodToDebounce = 'callSource';
                debouncer = debounceCallSource;
                callContextToDebounce = exports.LifecycleFlags.updateTargetInstance;
            }
            // stash the original method and it's name.
            // note: a generic name like "originalMethod" is not used to avoid collisions
            // with other binding behavior types.
            binding.debouncedMethod = binding[methodToDebounce];
            binding.debouncedMethod.originalName = methodToDebounce;
            // replace the original method with the debouncing version.
            binding[methodToDebounce] = debouncer;
            // create the debounce state.
            binding.debounceState = {
                callContextToDebounce,
                delay,
                timeoutId: 0,
                oldValue: unset
            };
        }
        unbind(flags, scope, binding) {
            // restore the state of the binding.
            const methodToRestore = binding.debouncedMethod.originalName;
            binding[methodToRestore] = binding.debouncedMethod;
            binding.debouncedMethod = null;
            clearTimeout(binding.debounceState.timeoutId);
            binding.debounceState = null;
        }
    };
    exports.DebounceBindingBehavior = __decorate([
        bindingBehavior('debounce')
    ], exports.DebounceBindingBehavior);

    const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
    const ISanitizer = kernel.DI.createInterface()
        .withDefault(x => x.singleton(class {
        sanitize(input) {
            return input.replace(SCRIPT_REGEX, '');
        }
    }));
    /**
     * Simple html sanitization converter to preserve whitelisted elements and attributes on a bound property containing html.
     */
    exports.SanitizeValueConverter = class SanitizeValueConverter {
        constructor(sanitizer) {
            this.sanitizer = sanitizer;
            this.sanitizer = sanitizer;
        }
        /**
         * Process the provided markup that flows to the view.
         * @param untrustedMarkup The untrusted markup to be sanitized.
         */
        toView(untrustedMarkup) {
            if (untrustedMarkup === null || untrustedMarkup === undefined) {
                return null;
            }
            return this.sanitizer.sanitize(untrustedMarkup);
        }
    };
    exports.SanitizeValueConverter = __decorate([
        valueConverter('sanitize'),
        kernel.inject(ISanitizer)
    ], exports.SanitizeValueConverter);

    //Note: path and deepPath are designed to handle v0 and v1 shadow dom specs respectively
    /*@internal*/
    function findOriginalEventTarget(event) {
        return (event.composedPath && event.composedPath()[0]) || (event.deepPath && event.deepPath()[0]) || (event.path && event.path[0]) || event.target;
    }
    function stopPropagation() {
        this.standardStopPropagation();
        this.propagationStopped = true;
    }
    function handleCapturedEvent(event) {
        event.propagationStopped = false;
        let target = findOriginalEventTarget(event);
        const orderedCallbacks = [];
        /**
         * During capturing phase, event 'bubbles' down from parent. Needs to reorder callback from root down to target
         */
        while (target) {
            if (target.capturedCallbacks) {
                const callback = target.capturedCallbacks[event.type];
                if (callback) {
                    if (event.stopPropagation !== stopPropagation) {
                        event.standardStopPropagation = event.stopPropagation;
                        event.stopPropagation = stopPropagation;
                    }
                    orderedCallbacks.push(callback);
                }
            }
            target = target.parentNode;
        }
        for (let i = orderedCallbacks.length - 1; i >= 0 && !event.propagationStopped; i--) {
            const orderedCallback = orderedCallbacks[i];
            if ('handleEvent' in orderedCallback) {
                orderedCallback.handleEvent(event);
            }
            else {
                orderedCallback(event);
            }
        }
    }
    function handleDelegatedEvent(event) {
        event.propagationStopped = false;
        let target = findOriginalEventTarget(event);
        while (target && !event.propagationStopped) {
            if (target.delegatedCallbacks) {
                const callback = target.delegatedCallbacks[event.type];
                if (callback) {
                    if (event.stopPropagation !== stopPropagation) {
                        event.standardStopPropagation = event.stopPropagation;
                        event.stopPropagation = stopPropagation;
                    }
                    if ('handleEvent' in callback) {
                        callback.handleEvent(event);
                    }
                    else {
                        callback(event);
                    }
                }
            }
            target = target.parentNode;
        }
    }
    class ListenerTracker {
        constructor(eventName, listener, capture) {
            this.eventName = eventName;
            this.listener = listener;
            this.capture = capture;
            this.count = 0;
        }
        increment() {
            this.count++;
            if (this.count === 1) {
                DOM.addEventListener(this.eventName, this.listener, null, this.capture);
            }
        }
        decrement() {
            this.count--;
            if (this.count === 0) {
                DOM.removeEventListener(this.eventName, this.listener, null, this.capture);
            }
        }
    }
    /**
     * Enable dispose() pattern for `delegate` & `capture` commands
     */
    class DelegateOrCaptureSubscription {
        constructor(entry, lookup, targetEvent, callback) {
            this.entry = entry;
            this.lookup = lookup;
            this.targetEvent = targetEvent;
            lookup[targetEvent] = callback;
        }
        dispose() {
            this.entry.decrement();
            this.lookup[this.targetEvent] = null;
        }
    }
    /**
     * Enable dispose() pattern for addEventListener for `trigger`
     */
    class TriggerSubscription {
        constructor(target, targetEvent, callback) {
            this.target = target;
            this.targetEvent = targetEvent;
            this.callback = callback;
            DOM.addEventListener(targetEvent, callback, target);
        }
        dispose() {
            DOM.removeEventListener(this.targetEvent, this.callback, this.target);
        }
    }
    (function (DelegationStrategy) {
        DelegationStrategy[DelegationStrategy["none"] = 0] = "none";
        DelegationStrategy[DelegationStrategy["capturing"] = 1] = "capturing";
        DelegationStrategy[DelegationStrategy["bubbling"] = 2] = "bubbling";
    })(exports.DelegationStrategy || (exports.DelegationStrategy = {}));
    class EventSubscriber {
        constructor(events) {
            this.events = events;
            this.events = events;
            this.target = null;
            this.handler = null;
        }
        subscribe(node, callbackOrListener) {
            this.target = node;
            this.handler = callbackOrListener;
            const add = DOM.addEventListener;
            const events = this.events;
            for (let i = 0, ii = events.length; ii > i; ++i) {
                add(events[i], callbackOrListener, node);
            }
        }
        dispose() {
            const node = this.target;
            const callbackOrListener = this.handler;
            const events = this.events;
            const remove = DOM.removeEventListener;
            for (let i = 0, ii = events.length; ii > i; ++i) {
                remove(events[i], callbackOrListener, node);
            }
            this.target = this.handler = null;
        }
    }
    const IEventManager = kernel.DI.createInterface()
        .withDefault(x => x.singleton(EventManager));
    /*@internal*/
    class EventManager {
        constructor() {
            this.elementHandlerLookup = {};
            this.delegatedHandlers = {};
            this.capturedHandlers = {};
            this.registerElementConfiguration({
                tagName: 'INPUT',
                properties: {
                    value: ['change', 'input'],
                    checked: ['change', 'input'],
                    files: ['change', 'input']
                }
            });
            this.registerElementConfiguration({
                tagName: 'TEXTAREA',
                properties: {
                    value: ['change', 'input']
                }
            });
            this.registerElementConfiguration({
                tagName: 'SELECT',
                properties: {
                    value: ['change']
                }
            });
            this.registerElementConfiguration({
                tagName: 'content editable',
                properties: {
                    value: ['change', 'input', 'blur', 'keyup', 'paste']
                }
            });
            this.registerElementConfiguration({
                tagName: 'scrollable element',
                properties: {
                    scrollTop: ['scroll'],
                    scrollLeft: ['scroll']
                }
            });
        }
        registerElementConfiguration(config) {
            const properties = config.properties;
            const lookup = this.elementHandlerLookup[config.tagName] = {};
            for (const propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                    lookup[propertyName] = properties[propertyName];
                }
            }
        }
        getElementHandler(target, propertyName) {
            const tagName = target['tagName'];
            const lookup = this.elementHandlerLookup;
            if (tagName) {
                if (lookup[tagName] && lookup[tagName][propertyName]) {
                    return new EventSubscriber(lookup[tagName][propertyName]);
                }
                if (propertyName === 'textContent' || propertyName === 'innerHTML') {
                    return new EventSubscriber(lookup['content editable'].value);
                }
                if (propertyName === 'scrollTop' || propertyName === 'scrollLeft') {
                    return new EventSubscriber(lookup['scrollable element'][propertyName]);
                }
            }
            return null;
        }
        addEventListener(target, targetEvent, callbackOrListener, strategy) {
            let delegatedHandlers;
            let capturedHandlers;
            let handlerEntry;
            if (strategy === exports.DelegationStrategy.bubbling) {
                delegatedHandlers = this.delegatedHandlers;
                handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new ListenerTracker(targetEvent, handleDelegatedEvent, false));
                handlerEntry.increment();
                const delegatedCallbacks = target.delegatedCallbacks || (target.delegatedCallbacks = {});
                return new DelegateOrCaptureSubscription(handlerEntry, delegatedCallbacks, targetEvent, callbackOrListener);
            }
            if (strategy === exports.DelegationStrategy.capturing) {
                capturedHandlers = this.capturedHandlers;
                handlerEntry = capturedHandlers[targetEvent] || (capturedHandlers[targetEvent] = new ListenerTracker(targetEvent, handleCapturedEvent, true));
                handlerEntry.increment();
                const capturedCallbacks = target.capturedCallbacks || (target.capturedCallbacks = {});
                return new DelegateOrCaptureSubscription(handlerEntry, capturedCallbacks, targetEvent, callbackOrListener);
            }
            return new TriggerSubscription(target, targetEvent, callbackOrListener);
        }
    }

    /*@internal*/
    function handleSelfEvent(event) {
        const target = findOriginalEventTarget(event);
        if (this.target !== target) {
            return;
        }
        return this.selfEventCallSource(event);
    }
    exports.SelfBindingBehavior = class SelfBindingBehavior {
        bind(flags, scope, binding) {
            if (!binding.callSource || !binding.targetEvent) {
                throw kernel.Reporter.error(8);
            }
            binding.selfEventCallSource = binding.callSource;
            binding.callSource = handleSelfEvent;
        }
        unbind(flags, scope, binding) {
            binding.callSource = binding.selfEventCallSource;
            binding.selfEventCallSource = null;
        }
    };
    exports.SelfBindingBehavior = __decorate([
        bindingBehavior('self')
    ], exports.SelfBindingBehavior);

    exports.SignalBindingBehavior = class SignalBindingBehavior {
        constructor(signaler) {
            this.signaler = signaler;
        }
        bind(flags, scope, binding) {
            if (!binding.updateTarget) {
                throw kernel.Reporter.error(11);
            }
            if (arguments.length === 4) {
                const name = arguments[3];
                this.signaler.addSignalListener(name, binding);
                binding.signal = name;
            }
            else if (arguments.length > 4) {
                const names = Array.prototype.slice.call(arguments, 3);
                let i = names.length;
                while (i--) {
                    const name = names[i];
                    this.signaler.addSignalListener(name, binding);
                }
                binding.signal = names;
            }
            else {
                throw kernel.Reporter.error(12);
            }
        }
        unbind(flags, scope, binding) {
            const name = binding.signal;
            binding.signal = null;
            if (Array.isArray(name)) {
                const names = name;
                let i = names.length;
                while (i--) {
                    this.signaler.removeSignalListener(names[i], binding);
                }
            }
            else {
                this.signaler.removeSignalListener(name, binding);
            }
        }
    };
    exports.SignalBindingBehavior = __decorate([
        bindingBehavior('signal'),
        kernel.inject(ISignaler)
    ], exports.SignalBindingBehavior);

    /*@internal*/
    function throttle(newValue) {
        const state = this.throttleState;
        const elapsed = +new Date() - state.last;
        if (elapsed >= state.delay) {
            clearTimeout(state.timeoutId);
            state.timeoutId = null;
            state.last = +new Date();
            this.throttledMethod(newValue);
            return;
        }
        state.newValue = newValue;
        if (state.timeoutId === null) {
            state.timeoutId = setTimeout(() => {
                state.timeoutId = null;
                state.last = +new Date();
                this.throttledMethod(state.newValue);
            }, state.delay - elapsed);
        }
    }
    exports.ThrottleBindingBehavior = class ThrottleBindingBehavior {
        bind(flags, scope, binding, delay = 200) {
            let methodToThrottle;
            if (binding instanceof exports.Binding) {
                if (binding.mode === exports.BindingMode.twoWay) {
                    methodToThrottle = 'updateSource';
                }
                else {
                    methodToThrottle = 'updateTarget';
                }
            }
            else {
                methodToThrottle = 'callSource';
            }
            // stash the original method and it's name.
            // note: a generic name like "originalMethod" is not used to avoid collisions
            // with other binding behavior types.
            binding.throttledMethod = binding[methodToThrottle];
            binding.throttledMethod.originalName = methodToThrottle;
            // replace the original method with the throttling version.
            binding[methodToThrottle] = throttle;
            // create the throttle state.
            binding.throttleState = {
                delay: delay,
                last: 0,
                timeoutId: null
            };
        }
        unbind(flags, scope, binding) {
            // restore the state of the binding.
            const methodToRestore = binding.throttledMethod.originalName;
            binding[methodToRestore] = binding.throttledMethod;
            binding.throttledMethod = null;
            clearTimeout(binding.throttleState.timeoutId);
            binding.throttleState = null;
        }
    };
    exports.ThrottleBindingBehavior = __decorate([
        bindingBehavior('throttle')
    ], exports.ThrottleBindingBehavior);

    function flush$1() {
        this.callBatchedSubscribers(this.indexMap);
        this.resetIndexMap();
    }
    function dispose$2() {
        this.collection.$observer = undefined;
        this.collection = null;
        this.indexMap = null;
    }
    function resetIndexMapIndexed() {
        const len = this.collection.length;
        const indexMap = (this.indexMap = Array(len));
        let i = 0;
        while (i < len) {
            indexMap[i] = i++;
        }
        indexMap.deletedItems = [];
    }
    function resetIndexMapKeyed() {
        const len = this.collection.size;
        const indexMap = (this.indexMap = Array(len));
        let i = 0;
        while (i < len) {
            indexMap[i] = i++;
        }
        indexMap.deletedItems = [];
    }
    function getLengthObserver() {
        return this.lengthObserver || (this.lengthObserver = new exports.CollectionLengthObserver(this, this.lengthPropertyName));
    }
    function collectionObserver(kind) {
        return function (target) {
            subscriberCollection(exports.MutationKind.collection)(target);
            batchedSubscriberCollection()(target);
            const proto = target.prototype;
            proto.$nextFlush = null;
            proto.collection = null;
            proto.indexMap = null;
            proto.hasChanges = false;
            proto.lengthPropertyName = kind & 8 /* indexed */ ? 'length' : 'size';
            proto.collectionKind = kind;
            proto.resetIndexMap = kind & 8 /* indexed */ ? resetIndexMapIndexed : resetIndexMapKeyed;
            proto.flush = flush$1;
            proto.dispose = dispose$2;
            proto.getLengthObserver = getLengthObserver;
            proto.subscribe = proto.subscribe || proto.addSubscriber;
            proto.unsubscribe = proto.unsubscribe || proto.removeSubscriber;
            proto.subscribeBatched = proto.subscribeBatched || proto.addBatchedSubscriber;
            proto.unsubscribeBatched = proto.unsubscribeBatched || proto.removeBatchedSubscriber;
        };
    }
    exports.CollectionLengthObserver = class CollectionLengthObserver {
        constructor(obj, propertyKey) {
            this.obj = obj;
            this.propertyKey = propertyKey;
            this.currentValue = obj[propertyKey];
        }
        getValue() {
            return this.obj[this.propertyKey];
        }
        setValueCore(newValue) {
            this.obj[this.propertyKey] = newValue;
        }
        subscribe(subscriber) {
            this.addSubscriber(subscriber);
        }
        unsubscribe(subscriber) {
            this.removeSubscriber(subscriber);
        }
    };
    exports.CollectionLengthObserver = __decorate([
        targetObserver()
    ], exports.CollectionLengthObserver);

    const proto = Array.prototype;
    const nativePush = proto.push; // TODO: probably want to make these internal again
    const nativeUnshift = proto.unshift;
    const nativePop = proto.pop;
    const nativeShift = proto.shift;
    const nativeSplice = proto.splice;
    const nativeReverse = proto.reverse;
    const nativeSort = proto.sort;
    // https://tc39.github.io/ecma262/#sec-array.prototype.push
    function observePush() {
        const o = this.$observer;
        if (o === undefined) {
            return nativePush.apply(this, arguments);
        }
        const len = this.length;
        const argCount = arguments.length;
        if (argCount === 0) {
            return len;
        }
        this.length = o.indexMap.length = len + argCount;
        let i = len;
        while (i < this.length) {
            this[i] = arguments[i - len];
            o.indexMap[i] = -2;
            i++;
        }
        o.callSubscribers('push', arguments, exports.LifecycleFlags.isCollectionMutation);
        return this.length;
    }
    // https://tc39.github.io/ecma262/#sec-array.prototype.unshift
    function observeUnshift() {
        const o = this.$observer;
        if (o === undefined) {
            return nativeUnshift.apply(this, arguments);
        }
        const argCount = arguments.length;
        const inserts = new Array(argCount);
        let i = 0;
        while (i < argCount) {
            inserts[i++] = -2;
        }
        nativeUnshift.apply(o.indexMap, inserts);
        const len = nativeUnshift.apply(this, arguments);
        o.callSubscribers('unshift', arguments, exports.LifecycleFlags.isCollectionMutation);
        return len;
    }
    // https://tc39.github.io/ecma262/#sec-array.prototype.pop
    function observePop() {
        const o = this.$observer;
        if (o === undefined) {
            return nativePop.call(this);
        }
        const indexMap = o.indexMap;
        const element = nativePop.call(this);
        // only mark indices as deleted if they actually existed in the original array
        const index = indexMap.length - 1;
        if (indexMap[index] > -1) {
            nativePush.call(indexMap.deletedItems, element);
        }
        nativePop.call(indexMap);
        o.callSubscribers('pop', arguments, exports.LifecycleFlags.isCollectionMutation);
        return element;
    }
    // https://tc39.github.io/ecma262/#sec-array.prototype.shift
    function observeShift() {
        const o = this.$observer;
        if (o === undefined) {
            return nativeShift.call(this);
        }
        const indexMap = o.indexMap;
        const element = nativeShift.call(this);
        // only mark indices as deleted if they actually existed in the original array
        if (indexMap[0] > -1) {
            nativePush.call(indexMap.deletedItems, element);
        }
        nativeShift.call(indexMap);
        o.callSubscribers('shift', arguments, exports.LifecycleFlags.isCollectionMutation);
        return element;
    }
    // https://tc39.github.io/ecma262/#sec-array.prototype.splice
    function observeSplice(start, deleteCount) {
        const o = this.$observer;
        if (o === undefined) {
            return nativeSplice.apply(this, arguments);
        }
        const indexMap = o.indexMap;
        if (deleteCount > 0) {
            let i = isNaN(start) ? 0 : start;
            const to = i + deleteCount;
            while (i < to) {
                if (indexMap[i] > -1) {
                    nativePush.call(indexMap.deletedItems, this[i]);
                }
                i++;
            }
        }
        const argCount = arguments.length;
        if (argCount > 2) {
            const itemCount = argCount - 2;
            const inserts = new Array(itemCount);
            let i = 0;
            while (i < itemCount) {
                inserts[i++] = -2;
            }
            nativeSplice.call(indexMap, start, deleteCount, ...inserts);
        }
        else if (argCount === 2) {
            nativeSplice.call(indexMap, start, deleteCount);
        }
        const deleted = nativeSplice.apply(this, arguments);
        o.callSubscribers('splice', arguments, exports.LifecycleFlags.isCollectionMutation);
        return deleted;
    }
    // https://tc39.github.io/ecma262/#sec-array.prototype.reverse
    function observeReverse() {
        const o = this.$observer;
        if (o === undefined) {
            return nativeReverse.call(this);
        }
        const len = this.length;
        const middle = (len / 2) | 0;
        let lower = 0;
        while (lower !== middle) {
            const upper = len - lower - 1;
            const lowerValue = this[lower];
            const lowerIndex = o.indexMap[lower];
            const upperValue = this[upper];
            const upperIndex = o.indexMap[upper];
            this[lower] = upperValue;
            o.indexMap[lower] = upperIndex;
            this[upper] = lowerValue;
            o.indexMap[upper] = lowerIndex;
            lower++;
        }
        o.callSubscribers('reverse', arguments, exports.LifecycleFlags.isCollectionMutation);
        return this;
    }
    // https://tc39.github.io/ecma262/#sec-array.prototype.sort
    // https://github.com/v8/v8/blob/master/src/js/array.js
    function observeSort(compareFn) {
        const o = this.$observer;
        if (o === undefined) {
            return nativeSort.call(this, compareFn);
        }
        const len = this.length;
        if (len < 2) {
            return this;
        }
        quickSort(this, o.indexMap, 0, len, preSortCompare);
        let i = 0;
        while (i < len) {
            if (this[i] === undefined) {
                break;
            }
            i++;
        }
        if (compareFn === undefined || typeof compareFn !== 'function' /*spec says throw a TypeError, should we do that too?*/) {
            compareFn = sortCompare;
        }
        quickSort(this, o.indexMap, 0, i, compareFn);
        o.callSubscribers('sort', arguments, exports.LifecycleFlags.isCollectionMutation);
        return this;
    }
    // https://tc39.github.io/ecma262/#sec-sortcompare
    function sortCompare(x, y) {
        if (x === y) {
            return 0;
        }
        x = x === null ? 'null' : x.toString();
        y = y === null ? 'null' : y.toString();
        return x < y ? -1 : 1;
    }
    function preSortCompare(x, y) {
        if (x === undefined) {
            if (y === undefined) {
                return 0;
            }
            else {
                return 1;
            }
        }
        if (y === undefined) {
            return -1;
        }
        return 0;
    }
    function insertionSort(arr, indexMap, fromIndex, toIndex, compareFn) {
        let velement, ielement, vtmp, itmp, order;
        let i, j;
        for (i = fromIndex + 1; i < toIndex; i++) {
            velement = arr[i];
            ielement = indexMap[i];
            for (j = i - 1; j >= fromIndex; j--) {
                vtmp = arr[j];
                itmp = indexMap[j];
                order = compareFn(vtmp, velement);
                if (order > 0) {
                    arr[j + 1] = vtmp;
                    indexMap[j + 1] = itmp;
                }
                else {
                    break;
                }
            }
            arr[j + 1] = velement;
            indexMap[j + 1] = ielement;
        }
    }
    function quickSort(arr, indexMap, fromIndex, toIndex, compareFn) {
        let thirdIndex = 0, i = 0;
        let v0, v1, v2;
        let i0, i1, i2;
        let c01, c02, c12;
        let vtmp, itmp;
        let vpivot, ipivot, lowEnd, highStart;
        let velement, ielement, order, vtopElement;
        // tslint:disable-next-line:no-constant-condition
        while (true) {
            if (toIndex - fromIndex <= 10) {
                insertionSort(arr, indexMap, fromIndex, toIndex, compareFn);
                return;
            }
            thirdIndex = fromIndex + ((toIndex - fromIndex) >> 1);
            v0 = arr[fromIndex];
            i0 = indexMap[fromIndex];
            v1 = arr[toIndex - 1];
            i1 = indexMap[toIndex - 1];
            v2 = arr[thirdIndex];
            i2 = indexMap[thirdIndex];
            c01 = compareFn(v0, v1);
            if (c01 > 0) {
                vtmp = v0;
                itmp = i0;
                v0 = v1;
                i0 = i1;
                v1 = vtmp;
                i1 = itmp;
            }
            c02 = compareFn(v0, v2);
            if (c02 >= 0) {
                vtmp = v0;
                itmp = i0;
                v0 = v2;
                i0 = i2;
                v2 = v1;
                i2 = i1;
                v1 = vtmp;
                i1 = itmp;
            }
            else {
                c12 = compareFn(v1, v2);
                if (c12 > 0) {
                    vtmp = v1;
                    itmp = i1;
                    v1 = v2;
                    i1 = i2;
                    v2 = vtmp;
                    i2 = itmp;
                }
            }
            arr[fromIndex] = v0;
            indexMap[fromIndex] = i0;
            arr[toIndex - 1] = v2;
            indexMap[toIndex - 1] = i2;
            vpivot = v1;
            ipivot = i1;
            lowEnd = fromIndex + 1;
            highStart = toIndex - 1;
            arr[thirdIndex] = arr[lowEnd];
            indexMap[thirdIndex] = indexMap[lowEnd];
            arr[lowEnd] = vpivot;
            indexMap[lowEnd] = ipivot;
            partition: for (i = lowEnd + 1; i < highStart; i++) {
                velement = arr[i];
                ielement = indexMap[i];
                order = compareFn(velement, vpivot);
                if (order < 0) {
                    arr[i] = arr[lowEnd];
                    indexMap[i] = indexMap[lowEnd];
                    arr[lowEnd] = velement;
                    indexMap[lowEnd] = ielement;
                    lowEnd++;
                }
                else if (order > 0) {
                    do {
                        highStart--;
                        // tslint:disable-next-line:triple-equals
                        if (highStart == i) {
                            break partition;
                        }
                        vtopElement = arr[highStart];
                        order = compareFn(vtopElement, vpivot);
                    } while (order > 0);
                    arr[i] = arr[highStart];
                    indexMap[i] = indexMap[highStart];
                    arr[highStart] = velement;
                    indexMap[highStart] = ielement;
                    if (order < 0) {
                        velement = arr[i];
                        ielement = indexMap[i];
                        arr[i] = arr[lowEnd];
                        indexMap[i] = indexMap[lowEnd];
                        arr[lowEnd] = velement;
                        indexMap[lowEnd] = ielement;
                        lowEnd++;
                    }
                }
            }
            if (toIndex - highStart < lowEnd - fromIndex) {
                quickSort(arr, indexMap, highStart, toIndex, compareFn);
                toIndex = lowEnd;
            }
            else {
                quickSort(arr, indexMap, fromIndex, lowEnd, compareFn);
                fromIndex = highStart;
            }
        }
    }
    for (const observe of [observePush, observeUnshift, observePop, observeShift, observeSplice, observeReverse, observeSort]) {
        Object.defineProperty(observe, 'observing', { value: true, writable: false, configurable: false, enumerable: false });
    }
    function enableArrayObservation() {
        if (proto.push['observing'] !== true)
            proto.push = observePush;
        if (proto.unshift['observing'] !== true)
            proto.unshift = observeUnshift;
        if (proto.pop['observing'] !== true)
            proto.pop = observePop;
        if (proto.shift['observing'] !== true)
            proto.shift = observeShift;
        if (proto.splice['observing'] !== true)
            proto.splice = observeSplice;
        if (proto.reverse['observing'] !== true)
            proto.reverse = observeReverse;
        if (proto.sort['observing'] !== true)
            proto.sort = observeSort;
    }
    enableArrayObservation();
    function disableArrayObservation() {
        if (proto.push['observing'] === true)
            proto.push = nativePush;
        if (proto.unshift['observing'] === true)
            proto.unshift = nativeUnshift;
        if (proto.pop['observing'] === true)
            proto.pop = nativePop;
        if (proto.shift['observing'] === true)
            proto.shift = nativeShift;
        if (proto.splice['observing'] === true)
            proto.splice = nativeSplice;
        if (proto.reverse['observing'] === true)
            proto.reverse = nativeReverse;
        if (proto.sort['observing'] === true)
            proto.sort = nativeSort;
    }
    exports.ArrayObserver = class ArrayObserver {
        constructor(lifecycle, array) {
            this.lifecycle = lifecycle;
            array.$observer = this;
            this.collection = array;
            this.resetIndexMap();
        }
    };
    exports.ArrayObserver = __decorate([
        collectionObserver(9 /* array */)
    ], exports.ArrayObserver);
    function getArrayObserver(lifecycle, array) {
        return array.$observer || new exports.ArrayObserver(lifecycle, array);
    }

    function computed(config) {
        return function (target, key) {
            (target.computed || (target.computed = {}))[key] = config;
        };
    }
    const noProxy = !(typeof Proxy !== undefined);
    const computedOverrideDefaults = { static: false, volatile: false };
    /* @internal */
    function createComputedObserver(observerLocator, dirtyChecker, lifecycle, 
    // tslint:disable-next-line:no-reserved-keywords
    instance, propertyName, descriptor) {
        if (descriptor.configurable === false) {
            return dirtyChecker.createProperty(instance, propertyName);
        }
        if (descriptor.get) {
            const overrides = instance.constructor.computed
                ? instance.constructor.computed[propertyName] || computedOverrideDefaults
                : computedOverrideDefaults;
            if (descriptor.set) {
                if (overrides.volatile) {
                    return noProxy
                        ? dirtyChecker.createProperty(instance, propertyName)
                        : new exports.GetterObserver(overrides, instance, propertyName, descriptor, observerLocator, lifecycle);
                }
                return new exports.CustomSetterObserver(instance, propertyName, descriptor, lifecycle);
            }
            return noProxy
                ? dirtyChecker.createProperty(instance, propertyName)
                : new exports.GetterObserver(overrides, instance, propertyName, descriptor, observerLocator, lifecycle);
        }
        throw kernel.Reporter.error(18, propertyName);
    }
    // Used when the getter is dependent solely on changes that happen within the setter.
    exports.CustomSetterObserver = class CustomSetterObserver {
        constructor(obj, propertyKey, descriptor, lifecycle) {
            this.obj = obj;
            this.propertyKey = propertyKey;
            this.descriptor = descriptor;
            this.lifecycle = lifecycle;
            this.$nextFlush = null;
            this.observing = false;
        }
        getValue() {
            return this.obj[this.propertyKey];
        }
        setValue(newValue) {
            this.obj[this.propertyKey] = newValue;
        }
        flush(flags) {
            const oldValue = this.oldValue;
            const newValue = this.currentValue;
            this.callSubscribers(newValue, oldValue, flags | exports.LifecycleFlags.updateTargetInstance);
        }
        subscribe(subscriber) {
            if (!this.observing) {
                this.convertProperty();
            }
            this.addSubscriber(subscriber);
        }
        unsubscribe(subscriber) {
            this.removeSubscriber(subscriber);
        }
        convertProperty() {
            const setter = this.descriptor.set;
            const that = this;
            this.observing = true;
            this.currentValue = this.obj[this.propertyKey];
            Reflect.defineProperty(this.obj, this.propertyKey, {
                set: function (newValue) {
                    setter.call(that.obj, newValue);
                    const oldValue = this.currentValue;
                    if (oldValue !== newValue) {
                        that.oldValue = oldValue;
                        this.lifecycle.queueFlush(that);
                        that.currentValue = newValue;
                    }
                }
            });
        }
    };
    exports.CustomSetterObserver = __decorate([
        subscriberCollection(exports.MutationKind.instance)
    ], exports.CustomSetterObserver);
    exports.CustomSetterObserver.prototype.dispose = kernel.PLATFORM.noop;
    // Used when there is no setter, and the getter is dependent on other properties of the object;
    // Used when there is a setter but the value of the getter can change based on properties set outside of the setter.
    /*@internal*/
    exports.GetterObserver = class GetterObserver {
        constructor(overrides, obj, propertyKey, descriptor, observerLocator, lifecycle) {
            this.overrides = overrides;
            this.obj = obj;
            this.propertyKey = propertyKey;
            this.descriptor = descriptor;
            this.observerLocator = observerLocator;
            this.lifecycle = lifecycle;
            this.controller = new GetterController(overrides, obj, propertyKey, descriptor, this, observerLocator, lifecycle);
        }
        getValue() {
            return this.controller.value;
        }
        // tslint:disable-next-line:no-empty
        setValue(newValue) { }
        flush(flags) {
            const oldValue = this.controller.value;
            const newValue = this.controller.getValueAndCollectDependencies();
            if (oldValue !== newValue) {
                this.callSubscribers(newValue, oldValue, flags | exports.LifecycleFlags.updateTargetInstance);
            }
        }
        subscribe(subscriber) {
            this.addSubscriber(subscriber);
            this.controller.onSubscriberAdded();
        }
        unsubscribe(subscriber) {
            this.removeSubscriber(subscriber);
            this.controller.onSubscriberRemoved();
        }
    };
    exports.GetterObserver = __decorate([
        subscriberCollection(exports.MutationKind.instance)
    ], exports.GetterObserver);
    exports.GetterObserver.prototype.dispose = kernel.PLATFORM.noop;
    /*@internal*/
    class GetterController {
        constructor(overrides, instance, propertyName, descriptor, owner, observerLocator, lifecycle) {
            this.overrides = overrides;
            this.instance = instance;
            this.propertyName = propertyName;
            this.owner = owner;
            this.lifecycle = lifecycle;
            this.isCollecting = false;
            this.dependencies = [];
            this.subscriberCount = 0;
            const proxy = new Proxy(instance, createGetterTraps(observerLocator, this));
            const getter = descriptor.get;
            const ctrl = this;
            Reflect.defineProperty(instance, propertyName, {
                get: function () {
                    if (ctrl.subscriberCount < 1 || ctrl.isCollecting) {
                        ctrl.value = getter.apply(proxy);
                    }
                    return ctrl.value;
                }
            });
        }
        addDependency(subscribable) {
            if (this.dependencies.includes(subscribable)) {
                return;
            }
            this.dependencies.push(subscribable);
        }
        onSubscriberAdded() {
            this.subscriberCount++;
            if (this.subscriberCount > 1) {
                return;
            }
            this.getValueAndCollectDependencies(true);
        }
        getValueAndCollectDependencies(requireCollect = false) {
            const dynamicDependencies = !this.overrides.static || requireCollect;
            if (dynamicDependencies) {
                this.unsubscribeAllDependencies();
                this.isCollecting = true;
            }
            this.value = this.instance[this.propertyName]; // triggers observer collection
            if (dynamicDependencies) {
                this.isCollecting = false;
                this.dependencies.forEach(x => { x.subscribe(this); });
            }
            return this.value;
        }
        onSubscriberRemoved() {
            this.subscriberCount--;
            if (this.subscriberCount === 0) {
                this.unsubscribeAllDependencies();
            }
        }
        handleChange() {
            this.lifecycle.enqueueFlush(this.owner);
        }
        unsubscribeAllDependencies() {
            this.dependencies.forEach(x => { x.unsubscribe(this); });
            this.dependencies.length = 0;
        }
    }
    function createGetterTraps(observerLocator, controller) {
        return {
            get: function (instance, key) {
                const value = instance[key];
                if (key === '$observers' || typeof value === 'function' || !controller.isCollecting) {
                    return value;
                }
                // TODO: fix this
                if (instance instanceof Array) {
                    controller.addDependency(observerLocator.getArrayObserver(instance));
                    if (key === 'length') {
                        controller.addDependency(observerLocator.getArrayObserver(instance).getLengthObserver());
                    }
                }
                else if (instance instanceof Map) {
                    controller.addDependency(observerLocator.getMapObserver(instance));
                    if (key === 'size') {
                        controller.addDependency(observerLocator.getMapObserver(instance).getLengthObserver());
                    }
                }
                else if (instance instanceof Set) {
                    controller.addDependency(observerLocator.getSetObserver(instance));
                    if (key === 'size') {
                        return observerLocator.getSetObserver(instance).getLengthObserver();
                    }
                }
                else {
                    controller.addDependency(observerLocator.getObserver(instance, key));
                }
                return proxyOrValue(observerLocator, controller, value);
            }
        };
    }
    function proxyOrValue(observerLocator, controller, value) {
        if (!(value instanceof Object)) {
            return value;
        }
        return new Proxy(value, createGetterTraps(observerLocator, controller));
    }

    const IDirtyChecker = kernel.DI.createInterface()
        .withDefault(x => x.singleton(DirtyChecker));
    /*@internal*/
    class DirtyChecker {
        constructor() {
            this.tracked = [];
            this.checkDelay = 120;
        }
        createProperty(obj, propertyName) {
            return new exports.DirtyCheckProperty(this, obj, propertyName);
        }
        addProperty(property) {
            const tracked = this.tracked;
            tracked.push(property);
            if (tracked.length === 1) {
                this.scheduleDirtyCheck();
            }
        }
        removeProperty(property) {
            const tracked = this.tracked;
            tracked.splice(tracked.indexOf(property), 1);
        }
        scheduleDirtyCheck() {
            setTimeout(() => { this.check(); }, this.checkDelay);
        }
        check() {
            const tracked = this.tracked;
            let i = tracked.length;
            while (i--) {
                const current = tracked[i];
                if (current.isDirty()) {
                    current.flush(exports.LifecycleFlags.fromFlush);
                }
            }
            if (tracked.length) {
                this.scheduleDirtyCheck();
            }
        }
    }
    /*@internal*/
    exports.DirtyCheckProperty = class DirtyCheckProperty {
        constructor(dirtyChecker, obj, propertyKey) {
            this.dirtyChecker = dirtyChecker;
            this.obj = obj;
            this.propertyKey = propertyKey;
        }
        isDirty() {
            return this.oldValue !== this.obj[this.propertyKey];
        }
        getValue() {
            return this.obj[this.propertyKey];
        }
        setValue(newValue) {
            this.obj[this.propertyKey] = newValue;
        }
        flush(flags) {
            const oldValue = this.oldValue;
            const newValue = this.getValue();
            this.callSubscribers(newValue, oldValue, flags | exports.LifecycleFlags.updateTargetInstance);
            this.oldValue = newValue;
        }
        subscribe(subscriber) {
            if (!this.hasSubscribers()) {
                this.oldValue = this.getValue();
                this.dirtyChecker.addProperty(this);
            }
            this.addSubscriber(subscriber);
        }
        unsubscribe(subscriber) {
            if (this.removeSubscriber(subscriber) && !this.hasSubscribers()) {
                this.dirtyChecker.removeProperty(this);
            }
        }
    };
    exports.DirtyCheckProperty = __decorate([
        propertyObserver()
    ], exports.DirtyCheckProperty);

    const inputValueDefaults = {
        ['button']: '',
        ['checkbox']: 'on',
        ['color']: '#000000',
        ['date']: '',
        ['datetime-local']: '',
        ['email']: '',
        ['file']: '',
        ['hidden']: '',
        ['image']: '',
        ['month']: '',
        ['number']: '',
        ['password']: '',
        ['radio']: 'on',
        ['range']: '50',
        ['reset']: '',
        ['search']: '',
        ['submit']: '',
        ['tel']: '',
        ['text']: '',
        ['time']: '',
        ['url']: '',
        ['week']: ''
    };
    const handleEventFlags = exports.LifecycleFlags.fromDOMEvent | exports.LifecycleFlags.updateSourceExpression;
    exports.ValueAttributeObserver = class ValueAttributeObserver {
        constructor(lifecycle, obj, propertyKey, handler) {
            // note: input.files can be assigned and this was fixed in Firefox 57:
            // https://bugzilla.mozilla.org/show_bug.cgi?id=1384030
            this.lifecycle = lifecycle;
            this.obj = obj;
            this.propertyKey = propertyKey;
            this.handler = handler;
            // input.value (for type='file') however, can only be assigned an empty string
            if (propertyKey === 'value') {
                const nodeType = obj['type'];
                this.defaultValue = inputValueDefaults[nodeType || 'text'];
                if (nodeType === 'file') {
                    this.flush = this.flushFileChanges;
                }
            }
            else {
                this.defaultValue = '';
            }
            this.oldValue = this.currentValue = obj[propertyKey];
        }
        getValue() {
            return this.obj[this.propertyKey];
        }
        setValueCore(newValue, flags) {
            this.obj[this.propertyKey] = newValue;
            if (flags & exports.LifecycleFlags.fromBind) {
                return;
            }
            this.callSubscribers(this.currentValue, this.oldValue, flags);
        }
        handleEvent() {
            const oldValue = this.oldValue = this.currentValue;
            const newValue = this.currentValue = this.getValue();
            if (oldValue !== newValue) {
                this.callSubscribers(newValue, oldValue, handleEventFlags);
                this.oldValue = newValue;
            }
        }
        subscribe(subscriber) {
            if (!this.hasSubscribers()) {
                this.oldValue = this.getValue();
                this.handler.subscribe(this.obj, this);
            }
            this.addSubscriber(subscriber);
        }
        unsubscribe(subscriber) {
            if (this.removeSubscriber(subscriber) && !this.hasSubscribers()) {
                this.handler.dispose();
            }
        }
        flushFileChanges() {
            const currentValue = this.currentValue;
            if (this.oldValue !== currentValue) {
                if (currentValue === '') {
                    this.setValueCore(currentValue, this.currentFlags);
                    this.oldValue = this.currentValue;
                }
            }
        }
    };
    exports.ValueAttributeObserver = __decorate([
        targetObserver('')
    ], exports.ValueAttributeObserver);
    exports.ValueAttributeObserver.prototype.propertyKey = '';
    exports.ValueAttributeObserver.prototype.handler = null;
    const defaultHandleBatchedChangeFlags = exports.LifecycleFlags.fromFlush | exports.LifecycleFlags.updateTargetInstance;
    exports.CheckedObserver = class CheckedObserver {
        constructor(lifecycle, obj, handler, observerLocator) {
            this.lifecycle = lifecycle;
            this.obj = obj;
            this.handler = handler;
            this.observerLocator = observerLocator;
        }
        getValue() {
            return this.currentValue;
        }
        setValueCore(newValue, flags) {
            if (!this.valueObserver) {
                this.valueObserver = this.obj['$observers'] && (this.obj['$observers'].model || this.obj['$observers'].value);
                if (this.valueObserver) {
                    this.valueObserver.subscribe(this);
                }
            }
            if (this.arrayObserver) {
                this.arrayObserver.unsubscribeBatched(this);
                this.arrayObserver = null;
            }
            if (this.obj.type === 'checkbox' && Array.isArray(newValue)) {
                this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
                this.arrayObserver.subscribeBatched(this);
            }
            this.synchronizeElement();
        }
        // handleBatchedCollectionChange (todo: rename to make this explicit?)
        handleBatchedChange() {
            this.synchronizeElement();
            this.notify(defaultHandleBatchedChangeFlags);
        }
        // handlePropertyChange (todo: rename normal subscribe methods in target observers to batched, since that's what they really are)
        handleChange(newValue, previousValue, flags) {
            this.synchronizeElement();
            this.notify(flags);
        }
        synchronizeElement() {
            const value = this.currentValue;
            const element = this.obj;
            const elementValue = element.hasOwnProperty('model') ? element['model'] : element.value;
            const isRadio = element.type === 'radio';
            const matcher = element['matcher'] || ((a, b) => a === b);
            if (isRadio) {
                element.checked = !!matcher(value, elementValue);
            }
            else if (value === true) {
                element.checked = true;
            }
            else if (Array.isArray(value)) {
                element.checked = value.findIndex(item => !!matcher(item, elementValue)) !== -1;
            }
            else {
                element.checked = false;
            }
        }
        notify(flags) {
            if (flags & exports.LifecycleFlags.fromBind) {
                return;
            }
            const oldValue = this.oldValue;
            const newValue = this.currentValue;
            if (newValue === oldValue) {
                return;
            }
            this.callSubscribers(this.currentValue, this.oldValue, flags);
        }
        handleEvent() {
            let value = this.currentValue;
            const element = this.obj;
            const elementValue = element.hasOwnProperty('model') ? element['model'] : element.value;
            let index;
            const matcher = element['matcher'] || defaultMatcher;
            if (element.type === 'checkbox') {
                if (Array.isArray(value)) {
                    index = value.findIndex(item => !!matcher(item, elementValue));
                    if (element.checked && index === -1) {
                        value.push(elementValue);
                    }
                    else if (!element.checked && index !== -1) {
                        value.splice(index, 1);
                    }
                    // when existing value is array, do not invoke callback as only the array element has changed
                    return;
                }
                value = element.checked;
            }
            else if (element.checked) {
                value = elementValue;
            }
            else {
                return;
            }
            this.oldValue = this.currentValue;
            this.currentValue = value;
            this.notify(handleEventFlags);
        }
        subscribe(subscriber) {
            if (!this.hasSubscribers()) {
                this.handler.subscribe(this.obj, this);
            }
            this.addSubscriber(subscriber);
        }
        unsubscribe(subscriber) {
            if (this.removeSubscriber(subscriber) && !this.hasSubscribers()) {
                this.handler.dispose();
            }
        }
        unbind() {
            if (this.arrayObserver) {
                this.arrayObserver.unsubscribeBatched(this);
                this.arrayObserver = null;
            }
            if (this.valueObserver) {
                this.valueObserver.unsubscribe(this);
            }
        }
    };
    exports.CheckedObserver = __decorate([
        targetObserver()
    ], exports.CheckedObserver);
    exports.CheckedObserver.prototype.handler = null;
    exports.CheckedObserver.prototype.observerLocator = null;
    const childObserverOptions = {
        childList: true,
        subtree: true,
        characterData: true
    };
    function defaultMatcher(a, b) {
        return a === b;
    }
    exports.SelectValueObserver = class SelectValueObserver {
        constructor(lifecycle, obj, handler, observerLocator) {
            this.lifecycle = lifecycle;
            this.obj = obj;
            this.handler = handler;
            this.observerLocator = observerLocator;
        }
        getValue() {
            return this.currentValue;
        }
        setValueCore(newValue, flags) {
            const isArray = Array.isArray(newValue);
            if (!isArray && newValue !== null && newValue !== undefined && this.obj.multiple) {
                throw new Error('Only null or Array instances can be bound to a multi-select.');
            }
            if (this.arrayObserver) {
                this.arrayObserver.unsubscribeBatched(this);
                this.arrayObserver = null;
            }
            if (isArray) {
                this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
                this.arrayObserver.subscribeBatched(this);
            }
            this.synchronizeOptions();
            this.notify(flags);
        }
        // called when the array mutated (items sorted/added/removed, etc)
        handleBatchedChange(indexMap) {
            // we don't need to go through the normal setValue logic and can directly call synchronizeOptions here,
            // because the change already waited one tick (batched) and there's no point in calling notify when the instance didn't change
            this.synchronizeOptions(indexMap);
        }
        // called when a different value was assigned
        handleChange(newValue, previousValue, flags) {
            this.setValue(newValue, flags);
        }
        notify(flags) {
            if (flags & exports.LifecycleFlags.fromBind) {
                return;
            }
            const oldValue = this.oldValue;
            const newValue = this.currentValue;
            if (newValue === oldValue) {
                return;
            }
            this.callSubscribers(newValue, oldValue, flags);
        }
        handleEvent() {
            // "from-view" changes are always synchronous now, so immediately sync the value and notify subscribers
            const shouldNotify = this.synchronizeValue();
            if (shouldNotify) {
                this.notify(handleEventFlags);
            }
        }
        synchronizeOptions(indexMap) {
            const currentValue = this.currentValue;
            const isArray = Array.isArray(currentValue);
            const obj = this.obj;
            const matcher = obj.matcher || defaultMatcher;
            const options = obj.options;
            let i = options.length;
            while (i--) {
                const option = options[i];
                const optionValue = option.hasOwnProperty('model') ? option.model : option.value;
                if (isArray) {
                    option.selected = currentValue.findIndex(item => !!matcher(optionValue, item)) !== -1;
                    continue;
                }
                option.selected = !!matcher(optionValue, currentValue);
            }
        }
        synchronizeValue() {
            // Spec for synchronizing value from `SelectObserver` to `<select/>`
            // When synchronizing value to observed <select/> element, do the following steps:
            // A. If `<select/>` is multiple
            //    1. Check if current value, called `currentValue` is an array
            //      a. If not an array, return true to signal value has changed
            //      b. If is an array:
            //        i. gather all current selected <option/>, in to array called `values`
            //        ii. loop through the `currentValue` array and remove items that are nolonger selected based on matcher
            //        iii. loop through the `values` array and add items that are selected based on matcher
            //        iv. Return false to signal value hasn't changed
            // B. If the select is single
            //    1. Let `value` equal the first selected option, if no option selected, then `value` is `null`
            //    2. assign `this.currentValue` to `this.oldValue`
            //    3. assign `value` to `this.currentValue`
            //    4. return `true` to signal value has changed
            const obj = this.obj;
            const options = obj.options;
            const len = options.length;
            const currentValue = this.currentValue;
            let i = 0;
            if (obj.multiple) {
                // A.
                if (!Array.isArray(currentValue)) {
                    // A.1.a
                    return true;
                }
                // A.1.b
                // multi select
                let option;
                const matcher = obj.matcher || defaultMatcher;
                // A.1.b.i
                const values = [];
                while (i < len) {
                    option = options[i];
                    if (option.selected) {
                        values.push(option.hasOwnProperty('model')
                            ? option.model
                            : option.value);
                    }
                    ++i;
                }
                // A.1.b.ii
                i = 0;
                while (i < currentValue.length) {
                    const a = currentValue[i];
                    // Todo: remove arrow fn
                    if (values.findIndex(b => !!matcher(a, b)) === -1) {
                        currentValue.splice(i, 1);
                    }
                    else {
                        ++i;
                    }
                }
                // A.1.b.iii
                i = 0;
                while (i < values.length) {
                    const a = values[i];
                    // Todo: remove arrow fn
                    if (currentValue.findIndex(b => !!matcher(a, b)) === -1) {
                        currentValue.push(a);
                    }
                    ++i;
                }
                // A.1.b.iv
                return false;
            }
            // B. single select
            // B.1
            let value = null;
            while (i < len) {
                const option = options[i];
                if (option.selected) {
                    value = option.hasOwnProperty('model')
                        ? option.model
                        : option.value;
                    break;
                }
                ++i;
            }
            // B.2
            this.oldValue = this.currentValue;
            // B.3
            this.currentValue = value;
            // B.4
            return true;
        }
        subscribe(subscriber) {
            if (!this.hasSubscribers()) {
                this.handler.subscribe(this.obj, this);
            }
            this.addSubscriber(subscriber);
        }
        unsubscribe(subscriber) {
            if (this.removeSubscriber(subscriber) && !this.hasSubscribers()) {
                this.handler.dispose();
            }
        }
        bind() {
            this.nodeObserver = DOM.createNodeObserver(this.obj, this.handleNodeChange.bind(this), childObserverOptions);
        }
        unbind() {
            this.nodeObserver.disconnect();
            this.nodeObserver = null;
            if (this.arrayObserver) {
                this.arrayObserver.unsubscribeBatched(this);
                this.arrayObserver = null;
            }
        }
        handleNodeChange() {
            this.synchronizeOptions();
            const shouldNotify = this.synchronizeValue();
            if (shouldNotify) {
                this.notify(handleEventFlags);
            }
        }
    };
    exports.SelectValueObserver = __decorate([
        targetObserver()
    ], exports.SelectValueObserver);
    exports.SelectValueObserver.prototype.handler = null;
    exports.SelectValueObserver.prototype.observerLocator = null;

    const proto$1 = Map.prototype;
    const nativeSet = proto$1.set; // TODO: probably want to make these internal again
    const nativeClear = proto$1.clear;
    const nativeDelete = proto$1.delete;
    // note: we can't really do much with Map due to the internal data structure not being accessible so we're just using the native calls
    // fortunately, map/delete/clear are easy to reconstruct for the indexMap
    // https://tc39.github.io/ecma262/#sec-map.prototype.map
    function observeSet(key, value) {
        const o = this.$observer;
        if (o === undefined) {
            return nativeSet.call(this, key, value);
        }
        const oldSize = this.size;
        nativeSet.call(this, key, value);
        const newSize = this.size;
        if (newSize === oldSize) {
            let i = 0;
            for (const entry of this.entries()) {
                if (entry[0] === key) {
                    if (entry[1] !== value) {
                        o.indexMap[i] = -2;
                    }
                    return this;
                }
                i++;
            }
            return this;
        }
        o.indexMap[oldSize] = -2;
        o.callSubscribers('set', arguments, exports.LifecycleFlags.isCollectionMutation);
        return this;
    }
    // https://tc39.github.io/ecma262/#sec-map.prototype.clear
    function observeClear() {
        const o = this.$observer;
        if (o === undefined) {
            return nativeClear.call(this);
        }
        const size = this.size;
        if (size > 0) {
            const indexMap = o.indexMap;
            let i = 0;
            for (const entry of this.keys()) {
                if (indexMap[i] > -1) {
                    nativePush.call(indexMap.deletedItems, entry);
                }
                i++;
            }
            nativeClear.call(this);
            indexMap.length = 0;
            o.callSubscribers('clear', arguments, exports.LifecycleFlags.isCollectionMutation);
        }
        return undefined;
    }
    // https://tc39.github.io/ecma262/#sec-map.prototype.delete
    function observeDelete(value) {
        const o = this.$observer;
        if (o === undefined) {
            return nativeDelete.call(this, value);
        }
        const size = this.size;
        if (size === 0) {
            return false;
        }
        let i = 0;
        const indexMap = o.indexMap;
        for (const entry of this.keys()) {
            if (entry === value) {
                if (indexMap[i] > -1) {
                    nativePush.call(indexMap.deletedItems, entry);
                }
                nativeSplice.call(indexMap, i, 1);
                return nativeDelete.call(this, value);
            }
            i++;
        }
        o.callSubscribers('delete', arguments, exports.LifecycleFlags.isCollectionMutation);
        return false;
    }
    for (const observe of [observeSet, observeClear, observeDelete]) {
        Object.defineProperty(observe, 'observing', { value: true, writable: false, configurable: false, enumerable: false });
    }
    function enableMapObservation() {
        if (proto$1.set['observing'] !== true)
            proto$1.set = observeSet;
        if (proto$1.clear['observing'] !== true)
            proto$1.clear = observeClear;
        if (proto$1.delete['observing'] !== true)
            proto$1.delete = observeDelete;
    }
    enableMapObservation();
    function disableMapObservation() {
        if (proto$1.set['observing'] === true)
            proto$1.set = nativeSet;
        if (proto$1.clear['observing'] === true)
            proto$1.clear = nativeClear;
        if (proto$1.delete['observing'] === true)
            proto$1.delete = nativeDelete;
    }
    exports.MapObserver = class MapObserver {
        constructor(lifecycle, map) {
            this.lifecycle = lifecycle;
            map.$observer = this;
            this.collection = map;
            this.resetIndexMap();
        }
    };
    exports.MapObserver = __decorate([
        collectionObserver(6 /* map */)
    ], exports.MapObserver);
    function getMapObserver(lifecycle, map) {
        return map.$observer || new exports.MapObserver(lifecycle, map);
    }

    const proto$2 = Set.prototype;
    const nativeAdd = proto$2.add; // TODO: probably want to make these internal again
    const nativeClear$1 = proto$2.clear;
    const nativeDelete$1 = proto$2.delete;
    // note: we can't really do much with Set due to the internal data structure not being accessible so we're just using the native calls
    // fortunately, add/delete/clear are easy to reconstruct for the indexMap
    // https://tc39.github.io/ecma262/#sec-set.prototype.add
    function observeAdd(value) {
        const o = this.$observer;
        if (o === undefined) {
            return nativeAdd.call(this, value);
        }
        const oldSize = this.size;
        nativeAdd.call(this, value);
        const newSize = this.size;
        if (newSize === oldSize) {
            return this;
        }
        o.indexMap[oldSize] = -2;
        o.callSubscribers('add', arguments, exports.LifecycleFlags.isCollectionMutation);
        return this;
    }
    // https://tc39.github.io/ecma262/#sec-set.prototype.clear
    function observeClear$1() {
        const o = this.$observer;
        if (o === undefined) {
            return nativeClear$1.call(this);
        }
        const size = this.size;
        if (size > 0) {
            const indexMap = o.indexMap;
            let i = 0;
            for (const entry of this.keys()) {
                if (indexMap[i] > -1) {
                    nativePush.call(indexMap.deletedItems, entry);
                }
                i++;
            }
            nativeClear$1.call(this);
            indexMap.length = 0;
            o.callSubscribers('clear', arguments, exports.LifecycleFlags.isCollectionMutation);
        }
        return undefined;
    }
    // https://tc39.github.io/ecma262/#sec-set.prototype.delete
    function observeDelete$1(value) {
        const o = this.$observer;
        if (o === undefined) {
            return nativeDelete$1.call(this, value);
        }
        const size = this.size;
        if (size === 0) {
            return false;
        }
        let i = 0;
        const indexMap = o.indexMap;
        for (const entry of this.keys()) {
            if (entry === value) {
                if (indexMap[i] > -1) {
                    nativePush.call(indexMap.deletedItems, entry);
                }
                nativeSplice.call(indexMap, i, 1);
                return nativeDelete$1.call(this, value);
            }
            i++;
        }
        o.callSubscribers('delete', arguments, exports.LifecycleFlags.isCollectionMutation);
        return false;
    }
    for (const observe of [observeAdd, observeClear$1, observeDelete$1]) {
        Object.defineProperty(observe, 'observing', { value: true, writable: false, configurable: false, enumerable: false });
    }
    function enableSetObservation() {
        if (proto$2.add['observing'] !== true)
            proto$2.add = observeAdd;
        if (proto$2.clear['observing'] !== true)
            proto$2.clear = observeClear$1;
        if (proto$2.delete['observing'] !== true)
            proto$2.delete = observeDelete$1;
    }
    enableSetObservation();
    function disableSetObservation() {
        if (proto$2.add['observing'] === true)
            proto$2.add = nativeAdd;
        if (proto$2.clear['observing'] === true)
            proto$2.clear = nativeClear$1;
        if (proto$2.delete['observing'] === true)
            proto$2.delete = nativeDelete$1;
    }
    exports.SetObserver = class SetObserver {
        constructor(lifecycle, observedSet) {
            this.lifecycle = lifecycle;
            observedSet.$observer = this;
            this.collection = observedSet;
            this.resetIndexMap();
        }
    };
    exports.SetObserver = __decorate([
        collectionObserver(7 /* set */)
    ], exports.SetObserver);
    function getSetObserver(lifecycle, observedSet) {
        return observedSet.$observer || new exports.SetObserver(lifecycle, observedSet);
    }

    const ISVGAnalyzer = kernel.DI.createInterface()
        .withDefault(x => x.singleton(class {
        isStandardSvgAttribute(node, attributeName) {
            return false;
        }
    }));

    const toStringTag$1 = Object.prototype.toString;
    const IObserverLocator = kernel.DI.createInterface()
        .withDefault(x => x.singleton(exports.ObserverLocator));
    function getPropertyDescriptor(subject, name) {
        let pd = Object.getOwnPropertyDescriptor(subject, name);
        let proto = Object.getPrototypeOf(subject);
        while (pd === undefined && proto !== null) {
            pd = Object.getOwnPropertyDescriptor(proto, name);
            proto = Object.getPrototypeOf(proto);
        }
        return pd;
    }
    exports.ObserverLocator = 
    /*@internal*/
    class ObserverLocator {
        constructor(lifecycle, eventManager, dirtyChecker, svgAnalyzer) {
            this.lifecycle = lifecycle;
            this.eventManager = eventManager;
            this.dirtyChecker = dirtyChecker;
            this.svgAnalyzer = svgAnalyzer;
            this.adapters = [];
        }
        getObserver(obj, propertyName) {
            if (obj.$synthetic === true) {
                return obj.getObservers().getOrCreate(obj, propertyName);
            }
            let observersLookup = obj.$observers;
            let observer;
            if (observersLookup && propertyName in observersLookup) {
                return observersLookup[propertyName];
            }
            observer = this.createPropertyObserver(obj, propertyName);
            if (!observer.doNotCache) {
                if (observersLookup === undefined) {
                    observersLookup = this.getOrCreateObserversLookup(obj);
                }
                observersLookup[propertyName] = observer;
            }
            return observer;
        }
        addAdapter(adapter) {
            this.adapters.push(adapter);
        }
        getAccessor(obj, propertyName) {
            if (DOM.isNodeInstance(obj)) {
                const tagName = obj['tagName'];
                // this check comes first for hot path optimization
                if (propertyName === 'textContent') {
                    return new exports.ElementPropertyAccessor(this.lifecycle, obj, propertyName);
                }
                // TODO: optimize and make pluggable
                if (propertyName === 'class' || propertyName === 'style' || propertyName === 'css'
                    || propertyName === 'value' && (tagName === 'INPUT' || tagName === 'SELECT')
                    || propertyName === 'checked' && tagName === 'INPUT'
                    || propertyName === 'model' && tagName === 'INPUT'
                    || /^xlink:.+$/.exec(propertyName)) {
                    return this.getObserver(obj, propertyName);
                }
                if (/^\w+:|^data-|^aria-/.test(propertyName)
                    || this.svgAnalyzer.isStandardSvgAttribute(obj, propertyName)
                    || tagName === 'IMG' && propertyName === 'src'
                    || tagName === 'A' && propertyName === 'href') {
                    return new exports.DataAttributeAccessor(this.lifecycle, obj, propertyName);
                }
                return new exports.ElementPropertyAccessor(this.lifecycle, obj, propertyName);
            }
            return new PropertyAccessor(obj, propertyName);
        }
        getArrayObserver(observedArray) {
            return getArrayObserver(this.lifecycle, observedArray);
        }
        getMapObserver(observedMap) {
            return getMapObserver(this.lifecycle, observedMap);
        }
        getSetObserver(observedSet) {
            return getSetObserver(this.lifecycle, observedSet);
        }
        getOrCreateObserversLookup(obj) {
            return obj.$observers || this.createObserversLookup(obj);
        }
        createObserversLookup(obj) {
            const value = {};
            if (!Reflect.defineProperty(obj, '$observers', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: value
            })) {
                kernel.Reporter.write(0, obj);
            }
            return value;
        }
        getAdapterObserver(obj, propertyName, descriptor) {
            for (let i = 0, ii = this.adapters.length; i < ii; i++) {
                const adapter = this.adapters[i];
                const observer = adapter.getObserver(obj, propertyName, descriptor);
                if (observer) {
                    return observer;
                }
            }
            return null;
        }
        createPropertyObserver(obj, propertyName) {
            if (!(obj instanceof Object)) {
                return new PrimitiveObserver(obj, propertyName);
            }
            let isNode;
            if (DOM.isNodeInstance(obj)) {
                if (propertyName === 'class') {
                    return new exports.ClassAttributeAccessor(this.lifecycle, obj);
                }
                if (propertyName === 'style' || propertyName === 'css') {
                    return new exports.StyleAttributeAccessor(this.lifecycle, obj);
                }
                const tagName = obj['tagName'];
                const handler = this.eventManager.getElementHandler(obj, propertyName);
                if (propertyName === 'value' && tagName === 'SELECT') {
                    return new exports.SelectValueObserver(this.lifecycle, obj, handler, this);
                }
                if (propertyName === 'checked' && tagName === 'INPUT') {
                    return new exports.CheckedObserver(this.lifecycle, obj, handler, this);
                }
                if (handler) {
                    return new exports.ValueAttributeObserver(this.lifecycle, obj, propertyName, handler);
                }
                const xlinkResult = /^xlink:(.+)$/.exec(propertyName);
                if (xlinkResult) {
                    return new exports.XLinkAttributeAccessor(this.lifecycle, obj, propertyName, xlinkResult[1]);
                }
                if (propertyName === 'role'
                    || /^\w+:|^data-|^aria-/.test(propertyName)
                    || this.svgAnalyzer.isStandardSvgAttribute(obj, propertyName)) {
                    return new exports.DataAttributeAccessor(this.lifecycle, obj, propertyName);
                }
                isNode = true;
            }
            const tag = toStringTag$1.call(obj);
            switch (tag) {
                case '[object Array]':
                    if (propertyName === 'length') {
                        return this.getArrayObserver(obj).getLengthObserver();
                    }
                    return this.dirtyChecker.createProperty(obj, propertyName);
                case '[object Map]':
                    if (propertyName === 'size') {
                        return this.getMapObserver(obj).getLengthObserver();
                    }
                    return this.dirtyChecker.createProperty(obj, propertyName);
                case '[object Set]':
                    if (propertyName === 'size') {
                        return this.getSetObserver(obj).getLengthObserver();
                    }
                    return this.dirtyChecker.createProperty(obj, propertyName);
            }
            const descriptor = getPropertyDescriptor(obj, propertyName);
            if (descriptor) {
                if (descriptor.get || descriptor.set) {
                    if (descriptor.get && descriptor.get.getObserver) {
                        return descriptor.get.getObserver(obj);
                    }
                    // attempt to use an adapter before resorting to dirty checking.
                    const adapterObserver = this.getAdapterObserver(obj, propertyName, descriptor);
                    if (adapterObserver) {
                        return adapterObserver;
                    }
                    if (isNode) {
                        // TODO: use MutationObserver
                        return this.dirtyChecker.createProperty(obj, propertyName);
                    }
                    return createComputedObserver(this, this.dirtyChecker, this.lifecycle, obj, propertyName, descriptor);
                }
            }
            return new exports.SetterObserver(obj, propertyName);
        }
    };
    exports.ObserverLocator = __decorate([
        kernel.inject(ILifecycle, IEventManager, IDirtyChecker, ISVGAnalyzer)
        /*@internal*/
    ], exports.ObserverLocator);
    function getCollectionObserver(lifecycle, collection) {
        switch (toStringTag$1.call(collection)) {
            case '[object Array]':
                return getArrayObserver(lifecycle, collection);
            case '[object Map]':
                return getMapObserver(lifecycle, collection);
            case '[object Set]':
                return getSetObserver(lifecycle, collection);
        }
        return null;
    }

    exports.UpdateTriggerBindingBehavior = class UpdateTriggerBindingBehavior {
        constructor(observerLocator) {
            this.observerLocator = observerLocator;
        }
        bind(flags, scope, binding, ...events) {
            if (events.length === 0) {
                throw kernel.Reporter.error(9);
            }
            if (binding.mode !== exports.BindingMode.twoWay && binding.mode !== exports.BindingMode.fromView) {
                throw kernel.Reporter.error(10);
            }
            // ensure the binding's target observer has been set.
            const targetObserver = this.observerLocator.getObserver(binding.target, binding.targetProperty);
            if (!targetObserver.handler) {
                throw kernel.Reporter.error(10);
            }
            binding.targetObserver = targetObserver;
            // stash the original element subscribe function.
            targetObserver.originalHandler = binding.targetObserver.handler;
            // replace the element subscribe function with one that uses the correct events.
            targetObserver.handler = new EventSubscriber(events);
        }
        unbind(flags, scope, binding) {
            // restore the state of the binding.
            binding.targetObserver.handler.dispose();
            binding.targetObserver.handler = binding.targetObserver.originalHandler;
            binding.targetObserver.originalHandler = null;
        }
    };
    exports.UpdateTriggerBindingBehavior = __decorate([
        bindingBehavior('updateTrigger'),
        kernel.inject(IObserverLocator)
    ], exports.UpdateTriggerBindingBehavior);

    class Call {
        constructor(sourceExpression, target, targetProperty, observerLocator, locator) {
            this.sourceExpression = sourceExpression;
            this.locator = locator;
            this.$nextBind = null;
            this.$prevBind = null;
            this.$state = 0 /* none */;
            this.targetObserver = observerLocator.getObserver(target, targetProperty);
        }
        callSource(args) {
            const overrideContext = this.$scope.overrideContext;
            Object.assign(overrideContext, args);
            const result = this.sourceExpression.evaluate(exports.LifecycleFlags.mustEvaluate, this.$scope, this.locator);
            for (const prop in args) {
                delete overrideContext[prop];
            }
            return result;
        }
        $bind(flags, scope) {
            if (this.$state & 2 /* isBound */) {
                if (this.$scope === scope) {
                    return;
                }
                this.$unbind(flags | exports.LifecycleFlags.fromBind);
            }
            // add isBinding flag
            this.$state |= 1 /* isBinding */;
            this.$scope = scope;
            const sourceExpression = this.sourceExpression;
            if (hasBind(sourceExpression)) {
                sourceExpression.bind(flags, scope, this);
            }
            this.targetObserver.setValue($args => this.callSource($args), flags);
            // add isBound flag and remove isBinding flag
            this.$state |= 2 /* isBound */;
            this.$state &= ~1 /* isBinding */;
        }
        $unbind(flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            // add isUnbinding flag
            this.$state |= 64 /* isUnbinding */;
            const sourceExpression = this.sourceExpression;
            if (hasUnbind(sourceExpression)) {
                sourceExpression.unbind(flags, this.$scope, this);
            }
            this.$scope = null;
            this.targetObserver.setValue(null, flags);
            // remove isBound and isUnbinding flags
            this.$state &= ~(2 /* isBound */ | 64 /* isUnbinding */);
        }
        // tslint:disable:no-empty no-any
        observeProperty(obj, propertyName) { }
        handleChange(newValue, previousValue, flags) { }
    }

    const IExpressionParser = kernel.DI.createInterface()
        .withDefault(x => x.singleton(ExpressionParser));
    /*@internal*/
    class ExpressionParser {
        constructor() {
            this.expressionLookup = Object.create(null);
            this.interpolationLookup = Object.create(null);
            this.forOfLookup = Object.create(null);
        }
        parse(expression, bindingType) {
            switch (bindingType) {
                case 2048 /* Interpolation */:
                    {
                        let found = this.interpolationLookup[expression];
                        if (found === undefined) {
                            found = this.interpolationLookup[expression] = this.parseCore(expression, bindingType);
                        }
                        return found;
                    }
                case 539 /* ForCommand */:
                    {
                        let found = this.forOfLookup[expression];
                        if (found === undefined) {
                            found = this.forOfLookup[expression] = this.parseCore(expression, bindingType);
                        }
                        return found;
                    }
                default:
                    {
                        // Allow empty strings for normal bindings and those that are empty by default (such as a custom attribute without an equals sign)
                        // But don't cache it, because empty strings are always invalid for any other type of binding
                        if (expression.length === 0 && (bindingType & (53 /* BindCommand */ | 49 /* OneTimeCommand */ | 50 /* ToViewCommand */))) {
                            return PrimitiveLiteral.$empty;
                        }
                        let found = this.expressionLookup[expression];
                        if (found === undefined) {
                            found = this.expressionLookup[expression] = this.parseCore(expression, bindingType);
                        }
                        return found;
                    }
            }
        }
        cache(expressions) {
            const { forOfLookup, expressionLookup, interpolationLookup } = this;
            for (const expression in expressions) {
                const expr = expressions[expression];
                switch (expr.$kind) {
                    case 24 /* Interpolation */:
                        interpolationLookup[expression] = expr;
                        break;
                    case 55 /* ForOfStatement */:
                        forOfLookup[expression] = expr;
                        break;
                    default:
                        expressionLookup[expression] = expr;
                }
            }
        }
        parseCore(expression, bindingType) {
            try {
                const parts = expression.split('.');
                const firstPart = parts[0];
                let current;
                if (firstPart.endsWith('()')) {
                    current = new CallScope(firstPart.replace('()', ''), kernel.PLATFORM.emptyArray);
                }
                else {
                    current = new AccessScope(parts[0]);
                }
                let index = 1;
                while (index < parts.length) {
                    const currentPart = parts[index];
                    if (currentPart.endsWith('()')) {
                        current = new CallMember(current, currentPart.replace('()', ''), kernel.PLATFORM.emptyArray);
                    }
                    else {
                        current = new AccessMember(current, parts[index]);
                    }
                    index++;
                }
                return current;
            }
            catch (e) {
                throw kernel.Reporter.error(3, e);
            }
        }
    }

    // tslint:disable:no-any
    const { toView: toView$2, oneTime: oneTime$2 } = exports.BindingMode;
    class MultiInterpolationBinding {
        constructor(observerLocator, interpolation, target, targetProperty, mode, locator) {
            this.observerLocator = observerLocator;
            this.interpolation = interpolation;
            this.target = target;
            this.targetProperty = targetProperty;
            this.mode = mode;
            this.locator = locator;
            this.$nextBind = null;
            this.$prevBind = null;
            this.$state = 0 /* none */;
            this.$scope = null;
            // Note: the child expressions of an Interpolation expression are full Aurelia expressions, meaning they may include
            // value converters and binding behaviors.
            // Each expression represents one ${interpolation}, and for each we create a child TextBinding unless there is only one,
            // in which case the renderer will create the TextBinding directly
            const expressions = interpolation.expressions;
            const parts = this.parts = Array(expressions.length);
            for (let i = 0, ii = expressions.length; i < ii; ++i) {
                parts[i] = new exports.InterpolationBinding(expressions[i], interpolation, target, targetProperty, mode, observerLocator, locator, i === 0);
            }
        }
        $bind(flags, scope) {
            if (this.$state & 2 /* isBound */) {
                if (this.$scope === scope) {
                    return;
                }
                this.$unbind(flags);
            }
            this.$state |= 2 /* isBound */;
            this.$scope = scope;
            const parts = this.parts;
            for (let i = 0, ii = parts.length; i < ii; ++i) {
                parts[i].$bind(flags, scope);
            }
        }
        $unbind(flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            this.$state &= ~2 /* isBound */;
            this.$scope = null;
            const parts = this.parts;
            for (let i = 0, ii = parts.length; i < ii; ++i) {
                parts[i].$unbind(flags);
            }
        }
    }
    exports.InterpolationBinding = class InterpolationBinding {
        constructor(sourceExpression, interpolation, target, targetProperty, mode, observerLocator, locator, isFirst) {
            this.sourceExpression = sourceExpression;
            this.interpolation = interpolation;
            this.target = target;
            this.targetProperty = targetProperty;
            this.mode = mode;
            this.observerLocator = observerLocator;
            this.locator = locator;
            this.isFirst = isFirst;
            this.$state = 0 /* none */;
            this.targetObserver = observerLocator.getAccessor(target, targetProperty);
        }
        updateTarget(value, flags) {
            this.targetObserver.setValue(value, flags | exports.LifecycleFlags.updateTargetInstance);
        }
        handleChange(newValue, previousValue, flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            previousValue = this.targetObserver.getValue();
            newValue = this.interpolation.evaluate(flags, this.$scope, this.locator);
            if (newValue !== previousValue) {
                this.updateTarget(newValue, flags);
            }
            if ((this.mode & oneTime$2) === 0) {
                this.version++;
                this.sourceExpression.connect(flags, this.$scope, this);
                this.unobserve(false);
            }
        }
        $bind(flags, scope) {
            if (this.$state & 2 /* isBound */) {
                if (this.$scope === scope) {
                    return;
                }
                this.$unbind(flags);
            }
            this.$state |= 2 /* isBound */;
            this.$scope = scope;
            const sourceExpression = this.sourceExpression;
            if (sourceExpression.bind) {
                sourceExpression.bind(flags, scope, this);
            }
            // since the interpolation already gets the whole value, we only need to let the first
            // text binding do the update if there are multiple
            if (this.isFirst) {
                this.updateTarget(this.interpolation.evaluate(flags, scope, this.locator), flags);
            }
            if (this.mode & toView$2) {
                sourceExpression.connect(flags, scope, this);
            }
        }
        $unbind(flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            this.$state &= ~2 /* isBound */;
            const sourceExpression = this.sourceExpression;
            if (sourceExpression.unbind) {
                sourceExpression.unbind(flags, this.$scope, this);
            }
            this.$scope = null;
            this.unobserve(true);
        }
    };
    exports.InterpolationBinding = __decorate([
        connectable()
    ], exports.InterpolationBinding);

    exports.LetBinding = class LetBinding {
        constructor(sourceExpression, targetProperty, observerLocator, locator, toViewModel = false) {
            this.sourceExpression = sourceExpression;
            this.targetProperty = targetProperty;
            this.observerLocator = observerLocator;
            this.locator = locator;
            this.toViewModel = toViewModel;
            this.$nextBind = null;
            this.$prevBind = null;
            this.$state = 0 /* none */;
            this.$scope = null;
            this.target = null;
            this.$lifecycle = locator.get(ILifecycle);
        }
        handleChange(newValue, previousValue, flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            if (flags & exports.LifecycleFlags.updateTargetInstance) {
                const { target, targetProperty } = this;
                previousValue = target[targetProperty];
                newValue = this.sourceExpression.evaluate(flags, this.$scope, this.locator);
                if (newValue !== previousValue) {
                    target[targetProperty] = newValue;
                }
                return;
            }
            throw kernel.Reporter.error(15, flags);
        }
        $bind(flags, scope) {
            if (this.$state & 2 /* isBound */) {
                if (this.$scope === scope) {
                    return;
                }
                this.$unbind(flags | exports.LifecycleFlags.fromBind);
            }
            // add isBinding flag
            this.$state |= 1 /* isBinding */;
            this.$scope = scope;
            this.target = this.toViewModel ? scope.bindingContext : scope.overrideContext;
            const sourceExpression = this.sourceExpression;
            if (sourceExpression.bind) {
                sourceExpression.bind(flags, scope, this);
            }
            // sourceExpression might have been changed during bind
            this.target[this.targetProperty] = this.sourceExpression.evaluate(exports.LifecycleFlags.fromBind, scope, this.locator);
            this.sourceExpression.connect(flags, scope, this);
            // add isBound flag and remove isBinding flag
            this.$state |= 2 /* isBound */;
            this.$state &= ~1 /* isBinding */;
        }
        $unbind(flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            // add isUnbinding flag
            this.$state |= 64 /* isUnbinding */;
            const sourceExpression = this.sourceExpression;
            if (sourceExpression.unbind) {
                sourceExpression.unbind(flags, this.$scope, this);
            }
            this.$scope = null;
            this.unobserve(true);
            // remove isBound and isUnbinding flags
            this.$state &= ~(2 /* isBound */ | 64 /* isUnbinding */);
        }
    };
    exports.LetBinding = __decorate([
        connectable()
    ], exports.LetBinding);

    class Listener {
        constructor(targetEvent, delegationStrategy, sourceExpression, target, preventDefault, eventManager, locator) {
            this.targetEvent = targetEvent;
            this.delegationStrategy = delegationStrategy;
            this.sourceExpression = sourceExpression;
            this.target = target;
            this.preventDefault = preventDefault;
            this.eventManager = eventManager;
            this.locator = locator;
            this.$nextBind = null;
            this.$prevBind = null;
            this.$state = 0 /* none */;
        }
        callSource(event) {
            const overrideContext = this.$scope.overrideContext;
            overrideContext['$event'] = event;
            const result = this.sourceExpression.evaluate(exports.LifecycleFlags.mustEvaluate, this.$scope, this.locator);
            delete overrideContext['$event'];
            if (result !== true && this.preventDefault) {
                event.preventDefault();
            }
            return result;
        }
        handleEvent(event) {
            this.callSource(event);
        }
        $bind(flags, scope) {
            if (this.$state & 2 /* isBound */) {
                if (this.$scope === scope) {
                    return;
                }
                this.$unbind(flags | exports.LifecycleFlags.fromBind);
            }
            // add isBinding flag
            this.$state |= 1 /* isBinding */;
            this.$scope = scope;
            const sourceExpression = this.sourceExpression;
            if (hasBind(sourceExpression)) {
                sourceExpression.bind(flags, scope, this);
            }
            this.handler = this.eventManager.addEventListener(this.target, this.targetEvent, this, this.delegationStrategy);
            // add isBound flag and remove isBinding flag
            this.$state |= 2 /* isBound */;
            this.$state &= ~1 /* isBinding */;
        }
        $unbind(flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            // add isUnbinding flag
            this.$state |= 64 /* isUnbinding */;
            const sourceExpression = this.sourceExpression;
            if (hasUnbind(sourceExpression)) {
                sourceExpression.unbind(flags, this.$scope, this);
            }
            this.$scope = null;
            this.handler.dispose();
            this.handler = null;
            // remove isBound and isUnbinding flags
            this.$state &= ~(2 /* isBound */ | 64 /* isUnbinding */);
        }
        // tslint:disable:no-empty no-any
        observeProperty(obj, propertyName) { }
        handleChange(newValue, previousValue, flags) { }
    }

    class Ref {
        constructor(sourceExpression, target, locator) {
            this.sourceExpression = sourceExpression;
            this.target = target;
            this.locator = locator;
            this.$nextBind = null;
            this.$prevBind = null;
            this.$state = 0 /* none */;
        }
        $bind(flags, scope) {
            if (this.$state & 2 /* isBound */) {
                if (this.$scope === scope) {
                    return;
                }
                this.$unbind(flags | exports.LifecycleFlags.fromBind);
            }
            // add isBinding flag
            this.$state |= 1 /* isBinding */;
            this.$scope = scope;
            const sourceExpression = this.sourceExpression;
            if (hasBind(sourceExpression)) {
                sourceExpression.bind(flags, scope, this);
            }
            this.sourceExpression.assign(flags, this.$scope, this.locator, this.target);
            // add isBound flag and remove isBinding flag
            this.$state |= 2 /* isBound */;
            this.$state &= ~1 /* isBinding */;
        }
        $unbind(flags) {
            if (!(this.$state & 2 /* isBound */)) {
                return;
            }
            // add isUnbinding flag
            this.$state |= 64 /* isUnbinding */;
            if (this.sourceExpression.evaluate(flags, this.$scope, this.locator) === this.target) {
                this.sourceExpression.assign(flags, this.$scope, this.locator, null);
            }
            const sourceExpression = this.sourceExpression;
            if (hasUnbind(sourceExpression)) {
                sourceExpression.unbind(flags, this.$scope, this);
            }
            this.$scope = null;
            // remove isBound and isUnbinding flags
            this.$state &= ~(2 /* isBound */ | 64 /* isUnbinding */);
        }
        // tslint:disable:no-empty no-any
        observeProperty(obj, propertyName) { }
        handleChange(newValue, previousValue, flags) { }
    }

    // tslint:disable:no-reserved-keywords
    /*@internal*/
    const customElementName = 'custom-element';
    /*@internal*/
    function customElementKey(name) {
        return `${customElementName}:${name}`;
    }
    /*@internal*/
    function customElementBehavior(node) {
        return node.$customElement || null;
    }
    /*@internal*/
    const customAttributeName = 'custom-attribute';
    /*@internal*/
    function customAttributeKey(name) {
        return `${customAttributeName}:${name}`;
    }
    const instructionTypeValues = 'abcdefghijkl';
    const ITargetedInstruction = kernel.DI.createInterface();
    function isTargetedInstruction(value) {
        const type = value.type;
        return typeof type === 'string' && instructionTypeValues.indexOf(type) !== -1;
    }
    /*@internal*/
    const buildRequired = Object.freeze({
        required: true,
        compiler: 'default'
    });
    const buildNotRequired = Object.freeze({
        required: false,
        compiler: 'default'
    });
    // Note: this is a little perf thing; having one predefined class with the properties always
    // assigned in the same order ensures the browser can keep reusing the same generated hidden
    // class
    class DefaultTemplateDefinition {
        constructor() {
            this.name = 'unnamed';
            this.template = null;
            this.cache = 0;
            this.build = buildNotRequired;
            this.bindables = kernel.PLATFORM.emptyObject;
            this.instructions = kernel.PLATFORM.emptyArray;
            this.dependencies = kernel.PLATFORM.emptyArray;
            this.surrogates = kernel.PLATFORM.emptyArray;
            this.containerless = false;
            this.shadowOptions = null;
            this.hasSlots = false;
        }
    }
    const templateDefinitionAssignables = [
        'name',
        'template',
        'cache',
        'build',
        'containerless',
        'shadowOptions',
        'hasSlots'
    ];
    const templateDefinitionArrays = [
        'instructions',
        'dependencies',
        'surrogates'
    ];
    function buildTemplateDefinition(ctor, nameOrDef, template, cache, build, bindables, instructions, dependencies, surrogates, containerless, shadowOptions, hasSlots) {
        const def = new DefaultTemplateDefinition();
        // all cases fall through intentionally
        const argLen = arguments.length;
        switch (argLen) {
            case 12: if (hasSlots !== null)
                def.hasSlots = hasSlots;
            case 11: if (shadowOptions !== null)
                def.shadowOptions = shadowOptions;
            case 10: if (containerless !== null)
                def.containerless = containerless;
            case 9: if (surrogates !== null)
                def.surrogates = kernel.PLATFORM.toArray(surrogates);
            case 8: if (dependencies !== null)
                def.dependencies = kernel.PLATFORM.toArray(dependencies);
            case 7: if (instructions !== null)
                def.instructions = kernel.PLATFORM.toArray(instructions);
            case 6: if (bindables !== null)
                def.bindables = Object.assign({}, bindables);
            case 5: if (build !== null)
                def.build = build === true ? buildRequired : build === false ? buildNotRequired : Object.assign({}, build);
            case 4: if (cache !== null)
                def.cache = cache;
            case 3: if (template !== null)
                def.template = template;
            case 2:
                if (ctor !== null) {
                    if (ctor['bindables']) {
                        def.bindables = Object.assign({}, ctor.bindables);
                    }
                    if (ctor['containerless']) {
                        def.containerless = ctor.containerless;
                    }
                    if (ctor['shadowOptions']) {
                        def.shadowOptions = ctor.shadowOptions;
                    }
                }
                if (typeof nameOrDef === 'string') {
                    if (nameOrDef.length > 0) {
                        def.name = nameOrDef;
                    }
                }
                else if (nameOrDef !== null) {
                    templateDefinitionAssignables.forEach(prop => {
                        if (nameOrDef[prop]) {
                            def[prop] = nameOrDef[prop];
                        }
                    });
                    templateDefinitionArrays.forEach(prop => {
                        if (nameOrDef[prop]) {
                            def[prop] = kernel.PLATFORM.toArray(nameOrDef[prop]);
                        }
                    });
                    if (nameOrDef['bindables']) {
                        if (def.bindables === kernel.PLATFORM.emptyObject) {
                            def.bindables = Object.assign({}, nameOrDef.bindables);
                        }
                        else {
                            Object.assign(def.bindables, nameOrDef.bindables);
                        }
                    }
                }
        }
        // special handling for invocations that quack like a @customElement decorator
        if (argLen === 2 && ctor !== null) {
            if (typeof nameOrDef === 'string' || !('build' in nameOrDef)) {
                def.build = buildRequired;
            }
        }
        return def;
    }

    function bindable(configOrTarget, prop) {
        let config;
        const decorator = function decorate($target, $prop) {
            const Type = $target.constructor;
            let bindables = Type.bindables;
            if (bindables === undefined) {
                bindables = Type.bindables = {};
            }
            if (!config.attribute) {
                config.attribute = kernel.PLATFORM.kebabCase($prop);
            }
            if (!config.callback) {
                config.callback = `${$prop}Changed`;
            }
            if (!config.mode) {
                config.mode = exports.BindingMode.toView;
            }
            if (arguments.length > 1) {
                // Non invocation:
                // - @bindable
                // Invocation with or w/o opts:
                // - @bindable()
                // - @bindable({...opts})
                config.property = $prop;
            }
            bindables[config.property] = config;
        };
        if (arguments.length > 1) {
            // Non invocation:
            // - @bindable
            config = {};
            return decorator(configOrTarget, prop);
        }
        else if (typeof configOrTarget === 'string') {
            // ClassDecorator
            // - @bindable('bar')
            // Direct call:
            // - @bindable('bar')(Foo)
            config = {};
            return decorator;
        }
        // Invocation with or w/o opts:
        // - @bindable()
        // - @bindable({...opts})
        config = (configOrTarget || {});
        return decorator;
    }

    function createElement(tagOrType, props, children) {
        if (typeof tagOrType === 'string') {
            return createElementForTag(tagOrType, props, children);
        }
        else {
            return createElementForType(tagOrType, props, children);
        }
    }
    class RenderPlan {
        constructor(node, instructions, dependencies) {
            this.node = node;
            this.instructions = instructions;
            this.dependencies = dependencies;
        }
        get definition() {
            return this.lazyDefinition || (this.lazyDefinition =
                buildTemplateDefinition(null, null, this.node, null, typeof this.node === 'string', null, this.instructions, this.dependencies));
        }
        getElementTemplate(engine, Type) {
            return engine.getElementTemplate(this.definition, Type);
        }
        createView(engine, parentContext) {
            return this.getViewFactory(engine, parentContext).create();
        }
        getViewFactory(engine, parentContext) {
            return engine.getViewFactory(this.definition, parentContext);
        }
        /*@internal*/
        mergeInto(parent, instructions, dependencies) {
            DOM.appendChild(parent, this.node);
            instructions.push(...this.instructions);
            dependencies.push(...this.dependencies);
        }
    }
    function createElementForTag(tagName, props, children) {
        const instructions = [];
        const allInstructions = [];
        const dependencies = [];
        const element = DOM.createElement(tagName);
        let hasInstructions = false;
        if (props) {
            Object.keys(props)
                .forEach(to => {
                const value = props[to];
                if (isTargetedInstruction(value)) {
                    hasInstructions = true;
                    instructions.push(value);
                }
                else {
                    DOM.setAttribute(element, to, value);
                }
            });
        }
        if (hasInstructions) {
            DOM.setAttribute(element, 'class', 'au');
            allInstructions.push(instructions);
        }
        if (children) {
            addChildren(element, children, allInstructions, dependencies);
        }
        return new RenderPlan(element, allInstructions, dependencies);
    }
    function createElementForType(Type, props, children) {
        const tagName = Type.description.name;
        const instructions = [];
        const allInstructions = [instructions];
        const dependencies = [];
        const childInstructions = [];
        const bindables = Type.description.bindables;
        const element = DOM.createElement(tagName);
        DOM.setAttribute(element, 'class', 'au');
        if (!dependencies.includes(Type)) {
            dependencies.push(Type);
        }
        instructions.push({
            type: "k" /* hydrateElement */,
            res: tagName,
            instructions: childInstructions
        });
        if (props) {
            Object.keys(props)
                .forEach(to => {
                const value = props[to];
                if (isTargetedInstruction(value)) {
                    childInstructions.push(value);
                }
                else {
                    const bindable = bindables[to];
                    if (bindable) {
                        childInstructions.push({
                            type: "i" /* setProperty */,
                            to,
                            value
                        });
                    }
                    else {
                        childInstructions.push({
                            type: "j" /* setAttribute */,
                            to,
                            value
                        });
                    }
                }
            });
        }
        if (children) {
            addChildren(element, children, allInstructions, dependencies);
        }
        return new RenderPlan(element, allInstructions, dependencies);
    }
    function addChildren(parent, children, allInstructions, dependencies) {
        for (let i = 0, ii = children.length; i < ii; ++i) {
            const current = children[i];
            if (typeof current === 'string') {
                DOM.appendChild(parent, DOM.createTextNode(current));
            }
            else if (DOM.isNodeInstance(current)) {
                DOM.appendChild(parent, current);
            }
            else {
                current.mergeInto(parent, allInstructions, dependencies);
            }
        }
    }

    /*@internal*/
    function $attachAttribute(flags) {
        if (this.$state & 8 /* isAttached */) {
            return;
        }
        const lifecycle = this.$lifecycle;
        lifecycle.beginAttach();
        // add isAttaching flag
        this.$state |= 4 /* isAttaching */;
        flags |= exports.LifecycleFlags.fromAttach;
        const hooks = this.$hooks;
        if (hooks & 16 /* hasAttaching */) {
            this.attaching(flags);
        }
        // add isAttached flag, remove isAttaching flag
        this.$state |= 8 /* isAttached */;
        this.$state &= ~4 /* isAttaching */;
        if (hooks & 32 /* hasAttached */) {
            lifecycle.enqueueAttached(this);
        }
        lifecycle.endAttach(flags);
    }
    /*@internal*/
    function $attachElement(flags) {
        if (this.$state & 8 /* isAttached */) {
            return;
        }
        const lifecycle = this.$lifecycle;
        lifecycle.beginAttach();
        // add isAttaching flag
        this.$state |= 4 /* isAttaching */;
        flags |= exports.LifecycleFlags.fromAttach;
        const hooks = this.$hooks;
        if (hooks & 16 /* hasAttaching */) {
            this.attaching(flags);
        }
        let current = this.$attachableHead;
        while (current !== null) {
            current.$attach(flags);
            current = current.$nextAttach;
        }
        if (!(this.$state & 16 /* isMounted */)) {
            lifecycle.enqueueMount(this);
        }
        // add isAttached flag, remove isAttaching flag
        this.$state |= 8 /* isAttached */;
        this.$state &= ~4 /* isAttaching */;
        if (hooks & 32 /* hasAttached */) {
            lifecycle.enqueueAttached(this);
        }
        lifecycle.endAttach(flags);
    }
    /*@internal*/
    function $attachView(flags) {
        if (this.$state & 8 /* isAttached */) {
            return;
        }
        // add isAttaching flag
        this.$state |= 4 /* isAttaching */;
        flags |= exports.LifecycleFlags.fromAttach;
        let current = this.$attachableHead;
        while (current !== null) {
            current.$attach(flags);
            current = current.$nextAttach;
        }
        if (!(this.$state & 16 /* isMounted */)) {
            this.$lifecycle.enqueueMount(this);
        }
        // add isAttached flag, remove isAttaching flag
        this.$state |= 8 /* isAttached */;
        this.$state &= ~4 /* isAttaching */;
    }
    /*@internal*/
    function $detachAttribute(flags) {
        if (this.$state & 8 /* isAttached */) {
            const lifecycle = this.$lifecycle;
            lifecycle.beginDetach();
            // add isDetaching flag
            this.$state |= 32 /* isDetaching */;
            flags |= exports.LifecycleFlags.fromDetach;
            const hooks = this.$hooks;
            if (hooks & 64 /* hasDetaching */) {
                this.detaching(flags);
            }
            // remove isAttached and isDetaching flags
            this.$state &= ~(8 /* isAttached */ | 32 /* isDetaching */);
            if (hooks & 128 /* hasDetached */) {
                lifecycle.enqueueDetached(this);
            }
            lifecycle.endDetach(flags);
        }
    }
    /*@internal*/
    function $detachElement(flags) {
        if (this.$state & 8 /* isAttached */) {
            const lifecycle = this.$lifecycle;
            lifecycle.beginDetach();
            // add isDetaching flag
            this.$state |= 32 /* isDetaching */;
            flags |= exports.LifecycleFlags.fromDetach;
            if (this.$state & 16 /* isMounted */) {
                // Only unmount if either:
                // - No parent view/element is queued for unmount yet, or
                // - Aurelia is stopping (in which case all nodes need to return to their fragments for a clean mount on next start)
                if (((flags & exports.LifecycleFlags.parentUnmountQueued) ^ exports.LifecycleFlags.parentUnmountQueued) | (flags & exports.LifecycleFlags.fromStopTask)) {
                    lifecycle.enqueueUnmount(this);
                    flags |= exports.LifecycleFlags.parentUnmountQueued;
                }
            }
            const hooks = this.$hooks;
            if (hooks & 64 /* hasDetaching */) {
                this.detaching(flags);
            }
            let current = this.$attachableTail;
            while (current !== null) {
                current.$detach(flags);
                current = current.$prevAttach;
            }
            // remove isAttached and isDetaching flags
            this.$state &= ~(8 /* isAttached */ | 32 /* isDetaching */);
            if (hooks & 128 /* hasDetached */) {
                lifecycle.enqueueDetached(this);
            }
            lifecycle.endDetach(flags);
        }
    }
    /*@internal*/
    function $detachView(flags) {
        if (this.$state & 8 /* isAttached */) {
            // add isDetaching flag
            this.$state |= 32 /* isDetaching */;
            flags |= exports.LifecycleFlags.fromDetach;
            if (this.$state & 16 /* isMounted */) {
                // Only unmount if either:
                // - No parent view/element is queued for unmount yet, or
                // - Aurelia is stopping (in which case all nodes need to return to their fragments for a clean mount on next start)
                if (((flags & exports.LifecycleFlags.parentUnmountQueued) ^ exports.LifecycleFlags.parentUnmountQueued) | (flags & exports.LifecycleFlags.fromStopTask)) {
                    this.$lifecycle.enqueueUnmount(this);
                    flags |= exports.LifecycleFlags.parentUnmountQueued;
                }
            }
            let current = this.$attachableTail;
            while (current !== null) {
                current.$detach(flags);
                current = current.$prevAttach;
            }
            // remove isAttached and isDetaching flags
            this.$state &= ~(8 /* isAttached */ | 32 /* isDetaching */);
        }
    }
    /*@internal*/
    function $cacheAttribute(flags) {
        flags |= exports.LifecycleFlags.fromCache;
        if (this.$hooks & 2048 /* hasCaching */) {
            this.caching(flags);
        }
    }
    /*@internal*/
    function $cacheElement(flags) {
        flags |= exports.LifecycleFlags.fromCache;
        if (this.$hooks & 2048 /* hasCaching */) {
            this.caching(flags);
        }
        let current = this.$attachableTail;
        while (current !== null) {
            current.$cache(flags);
            current = current.$prevAttach;
        }
    }
    /*@internal*/
    function $cacheView(flags) {
        flags |= exports.LifecycleFlags.fromCache;
        let current = this.$attachableTail;
        while (current !== null) {
            current.$cache(flags);
            current = current.$prevAttach;
        }
    }
    /*@internal*/
    function $mountElement(flags) {
        this.$state |= 16 /* isMounted */;
        this.$projector.project(this.$nodes);
    }
    /*@internal*/
    function $unmountElement(flags) {
        this.$state &= ~16 /* isMounted */;
        this.$projector.take(this.$nodes);
    }
    /*@internal*/
    function $mountView(flags) {
        this.$state |= 16 /* isMounted */;
        this.$state &= ~256 /* needsMount */;
        this.$nodes.insertBefore(this.location);
    }
    /*@internal*/
    function $unmountView(flags) {
        this.$state &= ~16 /* isMounted */;
        this.$state |= 256 /* needsMount */;
        this.$nodes.remove();
        if (this.isFree) {
            this.isFree = false;
            if (this.cache.tryReturnToCache(this)) {
                this.$state |= 128 /* isCached */;
                return true;
            }
        }
        return false;
    }

    /*@internal*/
    function $bindAttribute(flags, scope) {
        flags |= exports.LifecycleFlags.fromBind;
        if (this.$state & 2 /* isBound */) {
            if (this.$scope === scope) {
                return;
            }
            this.$unbind(flags);
        }
        const lifecycle = this.$lifecycle;
        lifecycle.beginBind();
        // add isBinding flag
        this.$state |= 1 /* isBinding */;
        const hooks = this.$hooks;
        if (hooks & 8 /* hasBound */) {
            lifecycle.enqueueBound(this);
        }
        this.$scope = scope;
        if (hooks & 4 /* hasBinding */) {
            this.binding(flags);
        }
        // add isBound flag and remove isBinding flag
        this.$state |= 2 /* isBound */;
        this.$state &= ~1 /* isBinding */;
        lifecycle.endBind(flags);
    }
    /*@internal*/
    function $bindElement(flags) {
        if (this.$state & 2 /* isBound */) {
            return;
        }
        const lifecycle = this.$lifecycle;
        lifecycle.beginBind();
        // add isBinding flag
        this.$state |= 1 /* isBinding */;
        const hooks = this.$hooks;
        flags |= exports.LifecycleFlags.fromBind;
        if (hooks & 8 /* hasBound */) {
            lifecycle.enqueueBound(this);
        }
        if (hooks & 4 /* hasBinding */) {
            this.binding(flags);
        }
        const scope = this.$scope;
        let current = this.$bindableHead;
        while (current !== null) {
            current.$bind(flags, scope);
            current = current.$nextBind;
        }
        // add isBound flag and remove isBinding flag
        this.$state |= 2 /* isBound */;
        this.$state &= ~1 /* isBinding */;
        lifecycle.endBind(flags);
    }
    /*@internal*/
    function $bindView(flags, scope) {
        flags |= exports.LifecycleFlags.fromBind;
        if (this.$state & 2 /* isBound */) {
            if (this.$scope === scope) {
                return;
            }
            this.$unbind(flags);
        }
        // add isBinding flag
        this.$state |= 1 /* isBinding */;
        this.$scope = scope;
        let current = this.$bindableHead;
        while (current !== null) {
            current.$bind(flags, scope);
            current = current.$nextBind;
        }
        // add isBound flag and remove isBinding flag
        this.$state |= 2 /* isBound */;
        this.$state &= ~1 /* isBinding */;
    }
    /*@internal*/
    function $unbindAttribute(flags) {
        if (this.$state & 2 /* isBound */) {
            const lifecycle = this.$lifecycle;
            lifecycle.beginUnbind();
            // add isUnbinding flag
            this.$state |= 64 /* isUnbinding */;
            const hooks = this.$hooks;
            flags |= exports.LifecycleFlags.fromUnbind;
            if (hooks & 512 /* hasUnbound */) {
                lifecycle.enqueueUnbound(this);
            }
            if (hooks & 256 /* hasUnbinding */) {
                this.unbinding(flags);
            }
            // remove isBound and isUnbinding flags
            this.$state &= ~(2 /* isBound */ | 64 /* isUnbinding */);
            lifecycle.endUnbind(flags);
        }
    }
    /*@internal*/
    function $unbindElement(flags) {
        if (this.$state & 2 /* isBound */) {
            const lifecycle = this.$lifecycle;
            lifecycle.beginUnbind();
            // add isUnbinding flag
            this.$state |= 64 /* isUnbinding */;
            const hooks = this.$hooks;
            flags |= exports.LifecycleFlags.fromUnbind;
            if (hooks & 512 /* hasUnbound */) {
                lifecycle.enqueueUnbound(this);
            }
            if (hooks & 256 /* hasUnbinding */) {
                this.unbinding(flags);
            }
            let current = this.$bindableTail;
            while (current !== null) {
                current.$unbind(flags);
                current = current.$prevBind;
            }
            // remove isBound and isUnbinding flags
            this.$state &= ~(2 /* isBound */ | 64 /* isUnbinding */);
            lifecycle.endUnbind(flags);
        }
    }
    /*@internal*/
    function $unbindView(flags) {
        if (this.$state & 2 /* isBound */) {
            // add isUnbinding flag
            this.$state |= 64 /* isUnbinding */;
            flags |= exports.LifecycleFlags.fromUnbind;
            let current = this.$bindableTail;
            while (current !== null) {
                current.$unbind(flags);
                current = current.$prevBind;
            }
            // remove isBound and isUnbinding flags
            this.$state &= ~(2 /* isBound */ | 64 /* isUnbinding */);
            this.$scope = null;
        }
    }

    /*@internal*/
    class View {
        constructor($lifecycle, cache) {
            this.$lifecycle = $lifecycle;
            this.cache = cache;
            this.$bindableHead = null;
            this.$bindableTail = null;
            this.$nextBind = null;
            this.$prevBind = null;
            this.$attachableHead = null;
            this.$attachableTail = null;
            this.$nextAttach = null;
            this.$prevAttach = null;
            this.$nextMount = null;
            this.$mountFlags = 0;
            this.$nextUnmount = null;
            this.$unmountFlags = 0;
            this.$nextUnbindAfterDetach = null;
            this.$state = 0 /* none */;
            this.$scope = null;
            this.isFree = false;
        }
        hold(location, flags) {
            if (!location.parentNode) { // unmet invariant: location must be a child of some other node
                throw kernel.Reporter.error(60); // TODO: organize error codes
            }
            this.location = location;
            const lastChild = this.$nodes.lastChild;
            if (lastChild && lastChild.nextSibling === location) {
                this.$state &= ~256 /* needsMount */;
            }
            else {
                this.$state |= 256 /* needsMount */;
            }
        }
        lockScope(scope) {
            this.$scope = scope;
            this.$bind = lockedBind;
        }
        release(flags) {
            this.isFree = true;
            if (this.$state & 8 /* isAttached */) {
                return this.cache.canReturnToCache(this);
            }
            return this.$unmount(flags);
        }
    }
    /*@internal*/
    class ViewFactory {
        constructor(name, template, lifecycle) {
            this.name = name;
            this.template = template;
            this.lifecycle = lifecycle;
            this.isCaching = false;
            this.cacheSize = -1;
            this.cache = null;
        }
        setCacheSize(size, doNotOverrideIfAlreadySet) {
            if (size) {
                if (size === '*') {
                    size = ViewFactory.maxCacheSize;
                }
                else if (typeof size === 'string') {
                    size = parseInt(size, 10);
                }
                if (this.cacheSize === -1 || !doNotOverrideIfAlreadySet) {
                    this.cacheSize = size;
                }
            }
            if (this.cacheSize > 0) {
                this.cache = [];
            }
            else {
                this.cache = null;
            }
            this.isCaching = this.cacheSize > 0;
        }
        canReturnToCache(view) {
            return this.cache !== null && this.cache.length < this.cacheSize;
        }
        tryReturnToCache(view) {
            if (this.canReturnToCache(view)) {
                view.$cache(exports.LifecycleFlags.none);
                this.cache.push(view);
                return true;
            }
            return false;
        }
        create() {
            const cache = this.cache;
            let view;
            if (cache !== null && cache.length > 0) {
                view = cache.pop();
                view.$state &= ~128 /* isCached */;
                return view;
            }
            view = new View(this.lifecycle, this);
            this.template.render(view);
            if (!view.$nodes) {
                throw kernel.Reporter.error(90);
            }
            return view;
        }
    }
    ViewFactory.maxCacheSize = 0xFFFF;
    function lockedBind(flags) {
        if (this.$state & 2 /* isBound */) {
            return;
        }
        flags |= exports.LifecycleFlags.fromBind;
        const lockedScope = this.$scope;
        let current = this.$bindableHead;
        while (current !== null) {
            current.$bind(flags, lockedScope);
            current = current.$nextBind;
        }
        this.$state |= 2 /* isBound */;
    }
    ((proto) => {
        proto.$bind = $bindView;
        proto.$unbind = $unbindView;
        proto.$attach = $attachView;
        proto.$detach = $detachView;
        proto.$cache = $cacheView;
        proto.$mount = $mountView;
        proto.$unmount = $unmountView;
    })(View.prototype);

    function renderStrategy(nameOrSource) {
        return target => RenderStrategyResource.define(nameOrSource, target);
    }
    const RenderStrategyResource = {
        name: 'render-strategy',
        keyFrom(name) {
            return `${this.name}:${name}`;
        },
        isType(Type) {
            return Type.kind === this;
        },
        define(nameOrSource, ctor) {
            const description = typeof nameOrSource === 'string' ? { name: nameOrSource } : nameOrSource;
            const Type = ctor;
            Type.kind = RenderStrategyResource;
            Type.description = description;
            Type.register = registerRenderStrategy;
            return Type;
        }
    };
    /*@internal*/
    function registerRenderStrategy(container) {
        const resourceKey = RenderStrategyResource.keyFrom(this.description.name);
        container.register(kernel.Registration.singleton(resourceKey, this));
    }
    const ITemplateCompiler = kernel.DI.createInterface().noDefault();
    (function (ViewCompileFlags) {
        ViewCompileFlags[ViewCompileFlags["none"] = 1] = "none";
        ViewCompileFlags[ViewCompileFlags["surrogate"] = 2] = "surrogate";
        ViewCompileFlags[ViewCompileFlags["shadowDOM"] = 4] = "shadowDOM";
    })(exports.ViewCompileFlags || (exports.ViewCompileFlags = {}));
    /*@internal*/
    function $hydrateAttribute(renderingEngine) {
        const Type = this.constructor;
        renderingEngine.applyRuntimeBehavior(Type, this);
        if (this.$hooks & 2 /* hasCreated */) {
            this.created();
        }
    }
    /*@internal*/
    function $hydrateElement(renderingEngine, host, options = kernel.PLATFORM.emptyObject) {
        const Type = this.constructor;
        const description = Type.description;
        this.$scope = Scope.create(this, null);
        renderingEngine.applyRuntimeBehavior(Type, this);
        if (this.$hooks & 1024 /* hasRender */) {
            const result = this.render(host, options.parts);
            if (result && 'getElementTemplate' in result) {
                const template = result.getElementTemplate(renderingEngine, Type);
                template.render(this, host, options.parts);
            }
        }
        else {
            const template = renderingEngine.getElementTemplate(description, Type);
            template.render(this, host, options.parts);
        }
        this.$host = host;
        this.$projector = determineProjector(this, host, description);
        if (this.$hooks & 2 /* hasCreated */) {
            this.created();
        }
    }
    /*@internal*/
    const defaultShadowOptions = {
        mode: 'open'
    };
    function determineProjector($customElement, host, definition) {
        if (definition.shadowOptions || definition.hasSlots) {
            if (definition.containerless) {
                throw kernel.Reporter.error(21);
            }
            return new ShadowDOMProjector($customElement, host, definition);
        }
        if (definition.containerless) {
            return new ContainerlessProjector($customElement, host);
        }
        return new HostProjector($customElement, host);
    }
    const IRenderingEngine = kernel.DI.createInterface()
        .withDefault(x => x.singleton(exports.RenderingEngine));
    const defaultCompilerName = 'default';
    exports.RenderingEngine = 
    /*@internal*/
    class RenderingEngine {
        constructor(container, lifecycle, observerLocator, eventManager, parser, templateCompilers) {
            this.container = container;
            this.lifecycle = lifecycle;
            this.observerLocator = observerLocator;
            this.eventManager = eventManager;
            this.parser = parser;
            this.templateLookup = new Map();
            this.factoryLookup = new Map();
            this.behaviorLookup = new Map();
            this.compilers = templateCompilers.reduce((acc, item) => {
                acc[item.name] = item;
                return acc;
            }, Object.create(null));
        }
        getElementTemplate(definition, componentType) {
            if (!definition) {
                return null;
            }
            let found = this.templateLookup.get(definition);
            if (!found) {
                found = this.templateFromSource(definition);
                //If the element has a view, support Recursive Components by adding self to own view template container.
                if (found.renderContext !== null && componentType) {
                    componentType.register(found.renderContext);
                }
                this.templateLookup.set(definition, found);
            }
            return found;
        }
        getViewFactory(definition, parentContext) {
            if (!definition) {
                return null;
            }
            let factory = this.factoryLookup.get(definition);
            if (!factory) {
                const validSource = buildTemplateDefinition(null, definition);
                const template = this.templateFromSource(validSource, parentContext);
                factory = new ViewFactory(validSource.name, template, this.lifecycle);
                factory.setCacheSize(validSource.cache, true);
                this.factoryLookup.set(definition, factory);
            }
            return factory;
        }
        applyRuntimeBehavior(Type, instance) {
            let found = this.behaviorLookup.get(Type);
            if (!found) {
                found = RuntimeBehavior.create(Type, instance);
                this.behaviorLookup.set(Type, found);
            }
            found.applyTo(instance, this.lifecycle);
        }
        createRenderer(context) {
            return new Renderer(context, this.observerLocator, this.eventManager, this.parser, this);
        }
        templateFromSource(definition, parentContext) {
            parentContext = parentContext || this.container;
            if (definition && definition.template) {
                if (definition.build.required) {
                    const compilerName = definition.build.compiler || defaultCompilerName;
                    const compiler = this.compilers[compilerName];
                    if (!compiler) {
                        throw kernel.Reporter.error(20, compilerName);
                    }
                    definition = compiler.compile(definition, new RuntimeCompilationResources(parentContext), exports.ViewCompileFlags.surrogate);
                }
                return new CompiledTemplate(this, parentContext, definition);
            }
            return noViewTemplate;
        }
    };
    exports.RenderingEngine = __decorate([
        kernel.inject(kernel.IContainer, ILifecycle, IObserverLocator, IEventManager, IExpressionParser, kernel.all(ITemplateCompiler))
        /*@internal*/
    ], exports.RenderingEngine);
    const childObserverOptions$1 = { childList: true };
    /*@internal*/
    class ShadowDOMProjector {
        constructor($customElement, host, definition) {
            this.host = host;
            this.shadowRoot = DOM.attachShadow(host, definition.shadowOptions || defaultShadowOptions);
            host.$customElement = $customElement;
            this.shadowRoot.$customElement = $customElement;
        }
        get children() {
            return this.host.childNodes;
        }
        subscribeToChildrenChange(callback) {
            DOM.createNodeObserver(this.host, callback, childObserverOptions$1);
        }
        provideEncapsulationSource(parentEncapsulationSource) {
            return this.shadowRoot;
        }
        project(nodes) {
            nodes.appendTo(this.host);
            this.project = kernel.PLATFORM.noop;
        }
        take(nodes) {
            // No special behavior is required because the host element removal
            // will result in the projected nodes being removed, since they are in
            // the ShadowDOM.
        }
    }
    /*@internal*/
    class ContainerlessProjector {
        constructor($customElement, host) {
            this.$customElement = $customElement;
            if (host.childNodes.length) {
                this.childNodes = kernel.PLATFORM.toArray(host.childNodes);
            }
            else {
                this.childNodes = kernel.PLATFORM.emptyArray;
            }
            this.host = DOM.convertToRenderLocation(host);
            this.host.$customElement = $customElement;
        }
        get children() {
            return this.childNodes;
        }
        subscribeToChildrenChange(callback) {
            // Do nothing since this scenario will never have children.
        }
        provideEncapsulationSource(parentEncapsulationSource) {
            if (!parentEncapsulationSource) {
                throw kernel.Reporter.error(22);
            }
            return parentEncapsulationSource;
        }
        project(nodes) {
            if (this.$customElement.$state & 256 /* needsMount */) {
                this.$customElement.$state &= ~256 /* needsMount */;
                nodes.insertBefore(this.host);
            }
        }
        take(nodes) {
            this.$customElement.$state |= 256 /* needsMount */;
            nodes.remove();
        }
    }
    /*@internal*/
    class HostProjector {
        constructor($customElement, host) {
            this.host = host;
            host.$customElement = $customElement;
            this.isAppHost = host.hasOwnProperty('$au');
        }
        get children() {
            return kernel.PLATFORM.emptyArray;
        }
        subscribeToChildrenChange(callback) {
            // Do nothing since this scenario will never have children.
        }
        provideEncapsulationSource(parentEncapsulationSource) {
            return parentEncapsulationSource || this.host;
        }
        project(nodes) {
            nodes.appendTo(this.host);
            if (!this.isAppHost) {
                this.project = kernel.PLATFORM.noop;
            }
        }
        take(nodes) {
            // No special behavior is required because the host element removal
            // will result in the projected nodes being removed, since they are children.
            if (this.isAppHost) {
                // The only exception to that is the app host, which is not part of a removable node sequence
                nodes.remove();
            }
        }
    }
    /** @internal */
    class RuntimeBehavior {
        constructor() { }
        static create(Component, instance) {
            const behavior = new RuntimeBehavior();
            behavior.bindables = Component.description.bindables;
            return behavior;
        }
        applyTo(instance, lifecycle) {
            instance.$lifecycle = lifecycle;
            if ('$projector' in instance) {
                this.applyToElement(lifecycle, instance);
            }
            else {
                this.applyToCore(instance);
            }
        }
        applyToElement(lifecycle, instance) {
            const observers = this.applyToCore(instance);
            observers.$children = new exports.ChildrenObserver(lifecycle, instance);
            Reflect.defineProperty(instance, '$children', {
                enumerable: false,
                get: function () {
                    return this.$observers.$children.getValue();
                }
            });
        }
        applyToCore(instance) {
            const observers = {};
            const bindables = this.bindables;
            const observableNames = Object.getOwnPropertyNames(bindables);
            for (let i = 0, ii = observableNames.length; i < ii; ++i) {
                const name = observableNames[i];
                observers[name] = new exports.Observer(instance, name, bindables[name].callback);
                createGetterSetter(instance, name);
            }
            Reflect.defineProperty(instance, '$observers', {
                enumerable: false,
                value: observers
            });
            return observers;
        }
    }
    function createGetterSetter(instance, name) {
        Reflect.defineProperty(instance, name, {
            enumerable: true,
            get: function () { return this.$observers[name].getValue(); },
            set: function (value) { this.$observers[name].setValue(value, exports.LifecycleFlags.updateTargetInstance); }
        });
    }
    /*@internal*/
    exports.ChildrenObserver = class ChildrenObserver {
        constructor(lifecycle, customElement) {
            this.lifecycle = lifecycle;
            this.customElement = customElement;
            this.hasChanges = false;
            this.children = null;
            this.observing = false;
        }
        getValue() {
            if (!this.observing) {
                this.observing = true;
                this.customElement.$projector.subscribeToChildrenChange(() => this.onChildrenChanged());
                this.children = findElements(this.customElement.$projector.children);
            }
            return this.children;
        }
        setValue(newValue) { }
        flush(flags) {
            this.callSubscribers(this.children, undefined, flags | exports.LifecycleFlags.updateTargetInstance);
            this.hasChanges = false;
        }
        subscribe(subscriber) {
            this.addSubscriber(subscriber);
        }
        unsubscribe(subscriber) {
            this.removeSubscriber(subscriber);
        }
        onChildrenChanged() {
            this.children = findElements(this.customElement.$projector.children);
            if ('$childrenChanged' in this.customElement) {
                this.customElement.$childrenChanged();
            }
            this.lifecycle.enqueueFlush(this);
            this.hasChanges = true;
        }
    };
    exports.ChildrenObserver = __decorate([
        subscriberCollection(exports.MutationKind.instance)
    ], exports.ChildrenObserver);
    /*@internal*/
    function findElements(nodes) {
        const components = [];
        for (let i = 0, ii = nodes.length; i < ii; ++i) {
            const current = nodes[i];
            const component = customElementBehavior(current);
            if (component !== null) {
                components.push(component);
            }
        }
        return components;
    }
    /*@internal*/
    class RuntimeCompilationResources {
        constructor(context) {
            this.context = context;
        }
        find(kind, name) {
            const key = kind.keyFrom(name);
            const resolver = this.context.getResolver(key, false);
            if (resolver !== null && resolver.getFactory) {
                const factory = resolver.getFactory(this.context);
                if (factory !== null) {
                    return factory.type.description || null;
                }
            }
            return null;
        }
        create(kind, name) {
            const key = kind.keyFrom(name);
            if (this.context.has(key, false)) {
                return this.context.get(key) || null;
            }
            return null;
        }
    }
    // This is the main implementation of ITemplate.
    // It is used to create instances of IView based on a compiled TemplateDefinition.
    // TemplateDefinitions are hand-coded today, but will ultimately be the output of the
    // TemplateCompiler either through a JIT or AOT process.
    // Essentially, CompiledTemplate wraps up the small bit of code that is needed to take a TemplateDefinition
    // and create instances of it on demand.
    /*@internal*/
    class CompiledTemplate {
        constructor(renderingEngine, parentRenderContext, templateDefinition) {
            this.templateDefinition = templateDefinition;
            this.factory = NodeSequenceFactory.createFor(templateDefinition.template);
            this.renderContext = createRenderContext(renderingEngine, parentRenderContext, templateDefinition.dependencies);
        }
        render(renderable, host, parts) {
            const nodes = renderable.$nodes = this.factory.createNodeSequence();
            renderable.$context = this.renderContext;
            this.renderContext.render(renderable, nodes.findTargets(), this.templateDefinition, host, parts);
        }
    }
    // This is an implementation of ITemplate that always returns a node sequence representing "no DOM" to render.
    /*@internal*/
    const noViewTemplate = {
        renderContext: null,
        render(renderable) {
            renderable.$nodes = NodeSequence.empty;
            renderable.$context = null;
        }
    };
    function createRenderContext(renderingEngine, parentRenderContext, dependencies) {
        const context = parentRenderContext.createChild();
        const renderableProvider = new InstanceProvider();
        const elementProvider = new InstanceProvider();
        const instructionProvider = new InstanceProvider();
        const factoryProvider = new ViewFactoryProvider(renderingEngine);
        const renderLocationProvider = new InstanceProvider();
        const renderer = renderingEngine.createRenderer(context);
        DOM.registerElementResolver(context, elementProvider);
        context.registerResolver(IViewFactory, factoryProvider);
        context.registerResolver(IRenderable, renderableProvider);
        context.registerResolver(ITargetedInstruction, instructionProvider);
        context.registerResolver(IRenderLocation, renderLocationProvider);
        if (dependencies) {
            context.register(...dependencies);
        }
        context.render = function (renderable, targets, templateDefinition, host, parts) {
            renderer.render(renderable, targets, templateDefinition, host, parts);
        };
        context.beginComponentOperation = function (renderable, target, instruction, factory, parts, location) {
            renderableProvider.prepare(renderable);
            elementProvider.prepare(target);
            instructionProvider.prepare(instruction);
            if (factory) {
                factoryProvider.prepare(factory, parts);
            }
            if (location) {
                renderLocationProvider.prepare(location);
            }
            return context;
        };
        context.dispose = function () {
            factoryProvider.dispose();
            renderableProvider.dispose();
            instructionProvider.dispose();
            elementProvider.dispose();
            renderLocationProvider.dispose();
        };
        return context;
    }
    /*@internal*/
    class InstanceProvider {
        constructor() {
            this.instance = null;
        }
        prepare(instance) {
            this.instance = instance;
        }
        resolve(handler, requestor) {
            if (this.instance === undefined) { // unmet precondition: call prepare
                throw kernel.Reporter.error(50); // TODO: organize error codes
            }
            return this.instance;
        }
        dispose() {
            this.instance = null;
        }
    }
    /*@internal*/
    class ViewFactoryProvider {
        constructor(renderingEngine) {
            this.renderingEngine = renderingEngine;
        }
        prepare(factory, parts) {
            this.factory = factory;
            this.replacements = parts || kernel.PLATFORM.emptyObject;
        }
        resolve(handler, requestor) {
            const factory = this.factory;
            if (factory === undefined) { // unmet precondition: call prepare
                throw kernel.Reporter.error(50); // TODO: organize error codes
            }
            if (!factory.name || !factory.name.length) { // unmet invariant: factory must have a name
                throw kernel.Reporter.error(51); // TODO: organize error codes
            }
            const found = this.replacements[factory.name];
            if (found) {
                return this.renderingEngine.getViewFactory(found, requestor);
            }
            return this.factory;
        }
        dispose() {
            this.factory = null;
            this.replacements = null;
        }
    }
    function addBindable(renderable, bindable) {
        bindable.$prevBind = renderable.$bindableTail;
        bindable.$nextBind = null;
        if (renderable.$bindableTail === null) {
            renderable.$bindableHead = bindable;
        }
        else {
            renderable.$bindableTail.$nextBind = bindable;
        }
        renderable.$bindableTail = bindable;
    }
    function addAttachable(renderable, attachable) {
        attachable.$prevAttach = renderable.$attachableTail;
        attachable.$nextAttach = null;
        if (renderable.$attachableTail === null) {
            renderable.$attachableHead = attachable;
        }
        else {
            renderable.$attachableTail.$nextAttach = attachable;
        }
        renderable.$attachableTail = attachable;
    }
    // tslint:disable:function-name
    // tslint:disable:no-any
    /* @internal */
    class Renderer {
        constructor(context, observerLocator, eventManager, parser, renderingEngine) {
            this.context = context;
            this.observerLocator = observerLocator;
            this.eventManager = eventManager;
            this.parser = parser;
            this.renderingEngine = renderingEngine;
        }
        render(renderable, targets, definition, host, parts) {
            const targetInstructions = definition.instructions;
            if (targets.length !== targetInstructions.length) {
                if (targets.length > targetInstructions.length) {
                    throw kernel.Reporter.error(30);
                }
                else {
                    throw kernel.Reporter.error(31);
                }
            }
            for (let i = 0, ii = targets.length; i < ii; ++i) {
                const instructions = targetInstructions[i];
                const target = targets[i];
                for (let j = 0, jj = instructions.length; j < jj; ++j) {
                    const current = instructions[j];
                    this[current.type](renderable, target, current, parts);
                }
            }
            if (host) {
                const surrogateInstructions = definition.surrogates;
                for (let i = 0, ii = surrogateInstructions.length; i < ii; ++i) {
                    const current = surrogateInstructions[i];
                    this[current.type](renderable, host, current, parts);
                }
            }
        }
        hydrateElementInstance(renderable, target, instruction, component) {
            const childInstructions = instruction.instructions;
            component.$hydrate(this.renderingEngine, target, instruction);
            for (let i = 0, ii = childInstructions.length; i < ii; ++i) {
                const current = childInstructions[i];
                const currentType = current.type;
                this[currentType](renderable, component, current);
            }
            addBindable(renderable, component);
            addAttachable(renderable, component);
        }
        ["a" /* textBinding */](renderable, target, instruction) {
            const next = target.nextSibling;
            DOM.treatAsNonWhitespace(next);
            DOM.remove(target);
            const $from = instruction.from;
            const expr = ($from.$kind ? $from : this.parser.parse($from, 2048 /* Interpolation */));
            if (expr.isMulti) {
                addBindable(renderable, new MultiInterpolationBinding(this.observerLocator, expr, next, 'textContent', exports.BindingMode.toView, this.context));
            }
            else {
                addBindable(renderable, new exports.InterpolationBinding(expr.firstExpression, expr, next, 'textContent', exports.BindingMode.toView, this.observerLocator, this.context, true));
            }
        }
        ["b" /* interpolation */](renderable, target, instruction) {
            const $from = instruction.from;
            const expr = ($from.$kind ? $from : this.parser.parse($from, 2048 /* Interpolation */));
            if (expr.isMulti) {
                addBindable(renderable, new MultiInterpolationBinding(this.observerLocator, expr, target, instruction.to, exports.BindingMode.toView, this.context));
            }
            else {
                addBindable(renderable, new exports.InterpolationBinding(expr.firstExpression, expr, target, instruction.to, exports.BindingMode.toView, this.observerLocator, this.context, true));
            }
        }
        ["c" /* propertyBinding */](renderable, target, instruction) {
            const $from = instruction.from;
            addBindable(renderable, new exports.Binding($from.$kind ? $from : this.parser.parse($from, 48 /* IsPropertyCommand */ | instruction.mode), target, instruction.to, instruction.mode, this.observerLocator, this.context));
        }
        ["d" /* iteratorBinding */](renderable, target, instruction) {
            const $from = instruction.from;
            addBindable(renderable, new exports.Binding($from.$kind ? $from : this.parser.parse($from, 539 /* ForCommand */), target, instruction.to, exports.BindingMode.toView, this.observerLocator, this.context));
        }
        ["e" /* listenerBinding */](renderable, target, instruction) {
            const $from = instruction.from;
            addBindable(renderable, new Listener(instruction.to, instruction.strategy, $from.$kind ? $from : this.parser.parse($from, 80 /* IsEventCommand */ | (instruction.strategy + 6 /* DelegationStrategyDelta */)), target, instruction.preventDefault, this.eventManager, this.context));
        }
        ["f" /* callBinding */](renderable, target, instruction) {
            const $from = instruction.from;
            addBindable(renderable, new Call($from.$kind ? $from : this.parser.parse($from, 153 /* CallCommand */), target, instruction.to, this.observerLocator, this.context));
        }
        ["g" /* refBinding */](renderable, target, instruction) {
            const $from = instruction.from;
            addBindable(renderable, new Ref($from.$kind ? $from : this.parser.parse($from, 1280 /* IsRef */), target, this.context));
        }
        ["h" /* stylePropertyBinding */](renderable, target, instruction) {
            const $from = instruction.from;
            addBindable(renderable, new exports.Binding($from.$kind ? $from : this.parser.parse($from, 48 /* IsPropertyCommand */ | exports.BindingMode.toView), target.style, instruction.to, exports.BindingMode.toView, this.observerLocator, this.context));
        }
        ["i" /* setProperty */](renderable, target, instruction) {
            target[instruction.to] = instruction.value;
        }
        ["j" /* setAttribute */](renderable, target, instruction) {
            DOM.setAttribute(target, instruction.to, instruction.value);
        }
        ["k" /* hydrateElement */](renderable, target, instruction) {
            const context = this.context;
            const operation = context.beginComponentOperation(renderable, target, instruction, null, null, target, true);
            const component = context.get(customElementKey(instruction.res));
            this.hydrateElementInstance(renderable, target, instruction, component);
            operation.dispose();
        }
        ["l" /* hydrateAttribute */](renderable, target, instruction) {
            const childInstructions = instruction.instructions;
            const context = this.context;
            const operation = context.beginComponentOperation(renderable, target, instruction);
            const component = context.get(customAttributeKey(instruction.res));
            component.$hydrate(this.renderingEngine);
            for (let i = 0, ii = childInstructions.length; i < ii; ++i) {
                const current = childInstructions[i];
                this[current.type](renderable, component, current);
            }
            addBindable(renderable, component);
            addAttachable(renderable, component);
            operation.dispose();
        }
        ["m" /* hydrateTemplateController */](renderable, target, instruction, parts) {
            const childInstructions = instruction.instructions;
            const factory = this.renderingEngine.getViewFactory(instruction.def, this.context);
            const context = this.context;
            const operation = context.beginComponentOperation(renderable, target, instruction, factory, parts, DOM.convertToRenderLocation(target), false);
            const component = context.get(customAttributeKey(instruction.res));
            component.$hydrate(this.renderingEngine);
            if (instruction.link) {
                component.link(renderable.$attachableTail);
            }
            for (let i = 0, ii = childInstructions.length; i < ii; ++i) {
                const current = childInstructions[i];
                this[current.type](renderable, component, current);
            }
            addBindable(renderable, component);
            addAttachable(renderable, component);
            operation.dispose();
        }
        ["z" /* renderStrategy */](renderable, target, instruction) {
            const strategyName = instruction.name;
            if (this[strategyName] === undefined) {
                const strategy = this.context.get(RenderStrategyResource.keyFrom(strategyName));
                if (strategy === null || strategy === undefined) {
                    throw new Error(`Unknown renderStrategy "${strategyName}"`);
                }
                this[strategyName] = strategy.render.bind(strategy);
            }
            this[strategyName](renderable, target, instruction);
        }
        ["n" /* letElement */](renderable, target, instruction) {
            target.remove();
            const childInstructions = instruction.instructions;
            const toViewModel = instruction.toViewModel;
            for (let i = 0, ii = childInstructions.length; i < ii; ++i) {
                const childInstruction = childInstructions[i];
                const $from = childInstruction.from;
                addBindable(renderable, new exports.LetBinding($from.$kind ? $from : this.parser.parse($from, 48 /* IsPropertyCommand */), childInstruction.to, this.observerLocator, this.context, toViewModel));
            }
        }
    }

    /**
     * Decorator: Indicates that the decorated class is a custom element.
     */
    function customElement(nameOrSource) {
        return target => CustomElementResource.define(nameOrSource, target);
    }
    function useShadowDOM(targetOrOptions) {
        const options = typeof targetOrOptions === 'function' || !targetOrOptions
            ? defaultShadowOptions
            : targetOrOptions;
        function useShadowDOMDecorator(target) {
            target.shadowOptions = options;
            return target;
        }
        return typeof targetOrOptions === 'function' ? useShadowDOMDecorator(targetOrOptions) : useShadowDOMDecorator;
    }
    function containerlessDecorator(target) {
        target.containerless = true;
        return target;
    }
    function containerless(target) {
        return target === undefined ? containerlessDecorator : containerlessDecorator(target);
    }
    const CustomElementResource = {
        name: customElementName,
        keyFrom: customElementKey,
        isType(Type) {
            return Type.kind === this;
        },
        behaviorFor: customElementBehavior,
        define(nameOrSource, ctor = null) {
            if (!nameOrSource) {
                throw kernel.Reporter.error(70);
            }
            const Type = (ctor === null ? class HTMLOnlyElement {
            } : ctor);
            const description = buildTemplateDefinition(Type, nameOrSource);
            const proto = Type.prototype;
            Type.kind = CustomElementResource;
            Type.description = description;
            Type.register = registerElement;
            proto.$hydrate = $hydrateElement;
            proto.$bind = $bindElement;
            proto.$attach = $attachElement;
            proto.$detach = $detachElement;
            proto.$unbind = $unbindElement;
            proto.$cache = $cacheElement;
            proto.$prevBind = null;
            proto.$nextBind = null;
            proto.$prevAttach = null;
            proto.$nextAttach = null;
            proto.$nextUnbindAfterDetach = null;
            proto.$scope = null;
            proto.$hooks = 0;
            proto.$state = 256 /* needsMount */;
            proto.$bindableHead = null;
            proto.$bindableTail = null;
            proto.$attachableHead = null;
            proto.$attachableTail = null;
            proto.$mount = $mountElement;
            proto.$unmount = $unmountElement;
            proto.$nextMount = null;
            proto.$nextUnmount = null;
            proto.$projector = null;
            if ('flush' in proto) {
                proto.$nextFlush = null;
            }
            if ('binding' in proto)
                proto.$hooks |= 4 /* hasBinding */;
            if ('bound' in proto) {
                proto.$hooks |= 8 /* hasBound */;
                proto.$nextBound = null;
            }
            if ('unbinding' in proto)
                proto.$hooks |= 256 /* hasUnbinding */;
            if ('unbound' in proto) {
                proto.$hooks |= 512 /* hasUnbound */;
                proto.$nextUnbound = null;
            }
            if ('render' in proto)
                proto.$hooks |= 1024 /* hasRender */;
            if ('created' in proto)
                proto.$hooks |= 2 /* hasCreated */;
            if ('attaching' in proto)
                proto.$hooks |= 16 /* hasAttaching */;
            if ('attached' in proto) {
                proto.$hooks |= 32 /* hasAttached */;
                proto.$nextAttached = null;
            }
            if ('detaching' in proto)
                proto.$hooks |= 64 /* hasDetaching */;
            if ('caching' in proto)
                proto.$hooks |= 2048 /* hasCaching */;
            if ('detached' in proto) {
                proto.$hooks |= 128 /* hasDetached */;
                proto.$nextDetached = null;
            }
            return Type;
        }
    };
    /*@internal*/
    function registerElement(container) {
        const resourceKey = CustomElementResource.keyFrom(this.description.name);
        container.register(kernel.Registration.transient(resourceKey, this));
    }
    // tslint:enable:align
    // TODO
    // ## DefaultSlotProjector
    // An implementation of IElementProjector that can handle a subset of default
    // slot projection scenarios without needing real Shadow DOM.
    // ### Conditions
    // We can do a one-time, static composition of the content and view,
    // to emulate shadow DOM, if the following constraints are met:
    // * There must be exactly one slot and it must be a default slot.
    // * The default slot must not have any fallback content.
    // * The default slot must not have a custom element as its immediate parent or
    //   a slot attribute (re-projection).
    // ### Projection
    // The projector copies all content nodes to the slot's location.
    // The copy process should inject a comment node before and after the slotted
    // content, so that the bounds of the content can be clearly determined,
    // even if the slotted content has template controllers or string interpolation.
    // ### Encapsulation Source
    // Uses the same strategy as HostProjector.
    // ### Children
    // The projector adds a mutation observer to the parent node of the
    // slot comment. When direct children of that node change, the projector
    // will gather up all nodes between the start and end slot comments.

    const composeSource = {
        name: 'au-compose',
        containerless: true
    };
    const composeProps = ['subject', 'composing'];
    exports.Compose = class Compose {
        constructor(renderable, instruction, renderingEngine, coordinator) {
            this.renderable = renderable;
            this.renderingEngine = renderingEngine;
            this.coordinator = coordinator;
            this.subject = null;
            this.composing = false;
            this.properties = null;
            this.lastSubject = null;
            this.coordinator.onSwapComplete = () => {
                this.composing = false;
            };
            this.properties = instruction.instructions
                .filter((x) => !composeProps.includes(x.to))
                .reduce((acc, item) => {
                if (item.to) {
                    acc[item.to] = item;
                }
                return acc;
            }, {});
        }
        binding(flags) {
            this.startComposition(this.subject, undefined, flags);
            this.coordinator.binding(flags, this.$scope);
        }
        attaching(flags) {
            this.coordinator.attaching(flags);
        }
        detaching(flags) {
            this.coordinator.detaching(flags);
        }
        unbinding(flags) {
            this.lastSubject = null;
            this.coordinator.unbinding(flags);
        }
        caching(flags) {
            this.coordinator.caching(flags);
        }
        subjectChanged(newValue, previousValue, flags) {
            this.startComposition(newValue, previousValue, flags);
        }
        startComposition(subject, previousSubject, flags) {
            if (this.lastSubject === subject) {
                return;
            }
            this.lastSubject = subject;
            if (subject instanceof Promise) {
                subject = subject.then(x => this.resolveView(x, flags));
            }
            else {
                subject = this.resolveView(subject, flags);
            }
            this.composing = true;
            this.coordinator.compose(subject, flags);
        }
        resolveView(subject, flags) {
            const view = this.provideViewFor(subject);
            if (view) {
                view.hold(this.$projector.host, flags);
                view.lockScope(this.renderable.$scope);
                return view;
            }
            return null;
        }
        provideViewFor(subject) {
            if (!subject) {
                return null;
            }
            if ('lockScope' in subject) { // IView
                return subject;
            }
            if ('createView' in subject) { // RenderPlan
                return subject.createView(this.renderingEngine, this.renderable.$context);
            }
            if ('create' in subject) { // IViewFactory
                return subject.create();
            }
            if ('template' in subject) { // Raw Template Definition
                return this.renderingEngine.getViewFactory(subject, this.renderable.$context).create();
            }
            // Constructable (Custom Element Constructor)
            return createElement(subject, this.properties, this.$projector.children).createView(this.renderingEngine, this.renderable.$context);
        }
    };
    __decorate([
        bindable
    ], exports.Compose.prototype, "subject", void 0);
    __decorate([
        bindable
    ], exports.Compose.prototype, "composing", void 0);
    exports.Compose = __decorate([
        customElement(composeSource),
        kernel.inject(IRenderable, ITargetedInstruction, IRenderingEngine, exports.CompositionCoordinator)
    ], exports.Compose);

    /**
     * Decorator: Indicates that the decorated class is a custom attribute.
     */
    function customAttribute(nameOrDef) {
        return target => CustomAttributeResource.define(nameOrDef, target);
    }
    /**
     * Decorator: Applied to custom attributes. Indicates that whatever element the
     * attribute is placed on should be converted into a template and that this
     * attribute controls the instantiation of the template.
     */
    function templateController(nameOrDef) {
        return target => CustomAttributeResource.define(typeof nameOrDef === 'string'
            ? { isTemplateController: true, name: nameOrDef }
            : Object.assign({ isTemplateController: true }, nameOrDef), target);
    }
    const CustomAttributeResource = {
        name: customAttributeName,
        keyFrom: customAttributeKey,
        isType(Type) {
            return Type.kind === this;
        },
        define(nameOrSource, ctor) {
            const Type = ctor;
            const description = createCustomAttributeDescription(typeof nameOrSource === 'string' ? { name: nameOrSource } : nameOrSource, Type);
            const proto = Type.prototype;
            Type.kind = CustomAttributeResource;
            Type.description = description;
            Type.register = registerAttribute;
            proto.$hydrate = $hydrateAttribute;
            proto.$bind = $bindAttribute;
            proto.$attach = $attachAttribute;
            proto.$detach = $detachAttribute;
            proto.$unbind = $unbindAttribute;
            proto.$cache = $cacheAttribute;
            proto.$prevBind = null;
            proto.$nextBind = null;
            proto.$prevAttach = null;
            proto.$nextAttach = null;
            proto.$nextUnbindAfterDetach = null;
            proto.$scope = null;
            proto.$hooks = 0;
            proto.$state = 0;
            if ('flush' in proto) {
                proto.$nextFlush = null;
            }
            if ('binding' in proto)
                proto.$hooks |= 4 /* hasBinding */;
            if ('bound' in proto) {
                proto.$hooks |= 8 /* hasBound */;
                proto.$nextBound = null;
            }
            if ('unbinding' in proto)
                proto.$hooks |= 256 /* hasUnbinding */;
            if ('unbound' in proto) {
                proto.$hooks |= 512 /* hasUnbound */;
                proto.$nextUnbound = null;
            }
            if ('created' in proto)
                proto.$hooks |= 2 /* hasCreated */;
            if ('attaching' in proto)
                proto.$hooks |= 16 /* hasAttaching */;
            if ('attached' in proto) {
                proto.$hooks |= 32 /* hasAttached */;
                proto.$nextAttached = null;
            }
            if ('detaching' in proto)
                proto.$hooks |= 64 /* hasDetaching */;
            if ('caching' in proto)
                proto.$hooks |= 2048 /* hasCaching */;
            if ('detached' in proto) {
                proto.$hooks |= 128 /* hasDetached */;
                proto.$nextDetached = null;
            }
            return Type;
        }
    };
    /*@internal*/
    function registerAttribute(container) {
        const description = this.description;
        const resourceKey = CustomAttributeResource.keyFrom(description.name);
        const aliases = description.aliases;
        container.register(kernel.Registration.transient(resourceKey, this));
        for (let i = 0, ii = aliases.length; i < ii; ++i) {
            const aliasKey = CustomAttributeResource.keyFrom(aliases[i]);
            container.register(kernel.Registration.alias(resourceKey, aliasKey));
        }
    }
    /*@internal*/
    function createCustomAttributeDescription(def, Type) {
        return {
            name: def.name,
            aliases: def.aliases || kernel.PLATFORM.emptyArray,
            defaultBindingMode: def.defaultBindingMode || exports.BindingMode.toView,
            isTemplateController: def.isTemplateController || false,
            bindables: Object.assign({}, Type.bindables, def.bindables)
        };
    }

    exports.If = class If {
        constructor(ifFactory, location, coordinator) {
            this.ifFactory = ifFactory;
            this.location = location;
            this.coordinator = coordinator;
            this.value = false;
            this.elseFactory = null;
            this.ifView = null;
            this.elseView = null;
        }
        binding(flags) {
            const view = this.updateView(flags);
            this.coordinator.compose(view, flags);
            this.coordinator.binding(flags, this.$scope);
        }
        attaching(flags) {
            this.coordinator.attaching(flags);
        }
        detaching(flags) {
            this.coordinator.detaching(flags);
        }
        unbinding(flags) {
            this.coordinator.unbinding(flags);
        }
        caching(flags) {
            if (this.ifView !== null && this.ifView.release(flags)) {
                this.ifView = null;
            }
            if (this.elseView !== null && this.elseView.release(flags)) {
                this.elseView = null;
            }
            this.coordinator.caching(flags);
        }
        valueChanged(newValue, oldValue, flags) {
            if (flags & exports.LifecycleFlags.fromFlush) {
                const view = this.updateView(flags);
                this.coordinator.compose(view, flags);
            }
            else {
                this.$lifecycle.enqueueFlush(this);
            }
        }
        flush(flags) {
            const view = this.updateView(flags);
            this.coordinator.compose(view, flags);
        }
        /*@internal*/
        updateView(flags) {
            let view;
            if (this.value) {
                view = this.ifView = this.ensureView(this.ifView, this.ifFactory, flags);
            }
            else if (this.elseFactory !== null) {
                view = this.elseView = this.ensureView(this.elseView, this.elseFactory, flags);
            }
            else {
                view = null;
            }
            return view;
        }
        /*@internal*/
        ensureView(view, factory, flags) {
            if (view === null) {
                view = factory.create();
            }
            view.hold(this.location, flags);
            return view;
        }
    };
    __decorate([
        bindable
    ], exports.If.prototype, "value", void 0);
    exports.If = __decorate([
        templateController('if'),
        kernel.inject(IViewFactory, IRenderLocation, exports.CompositionCoordinator)
    ], exports.If);
    exports.Else = class Else {
        constructor(factory) {
            this.factory = factory;
        }
        link(ifBehavior) {
            ifBehavior.elseFactory = this.factory;
        }
    };
    exports.Else = __decorate([
        templateController('else'),
        kernel.inject(IViewFactory)
    ], exports.Else);

    exports.Repeat = class Repeat {
        constructor(location, renderable, factory) {
            this.location = location;
            this.renderable = renderable;
            this.factory = factory;
            this.encapsulationSource = null;
            this.views = [];
            this.observer = null;
            this.hasPendingInstanceMutation = false;
        }
        binding(flags) {
            this.checkCollectionObserver();
        }
        bound(flags) {
            let current = this.renderable.$bindableHead;
            while (current !== null) {
                if (current.target === this && current.targetProperty === 'items') {
                    this.forOf = current.sourceExpression;
                    break;
                }
                current = current.$nextBind;
            }
            this.local = this.forOf.declaration.evaluate(flags, this.$scope, null);
            this.processViews(null, flags);
        }
        attaching(flags) {
            const { views, location } = this;
            for (let i = 0, ii = views.length; i < ii; ++i) {
                const view = views[i];
                view.hold(location, flags);
                view.$attach(flags);
            }
        }
        detaching(flags) {
            const { views } = this;
            for (let i = 0, ii = views.length; i < ii; ++i) {
                const view = views[i];
                view.$detach(flags);
                view.release(flags);
            }
        }
        unbound(flags) {
            this.checkCollectionObserver();
            const { views } = this;
            for (let i = 0, ii = views.length; i < ii; ++i) {
                const view = views[i];
                view.$unbind(flags);
            }
        }
        // called by SetterObserver (sync)
        itemsChanged(newValue, oldValue, flags) {
            this.checkCollectionObserver();
            this.processViews(null, flags | exports.LifecycleFlags.updateTargetInstance);
        }
        // called by a CollectionObserver (async)
        handleBatchedChange(indexMap) {
            this.processViews(indexMap, exports.LifecycleFlags.fromFlush | exports.LifecycleFlags.updateTargetInstance);
        }
        // if the indexMap === null, it is an instance mutation, otherwise it's an items mutation
        processViews(indexMap, flags) {
            const { views, $lifecycle } = this;
            if (this.$state & 2 /* isBound */) {
                const { local, $scope, factory, forOf, items } = this;
                const oldLength = views.length;
                const newLength = forOf.count(items);
                if (oldLength < newLength) {
                    views.length = newLength;
                    for (let i = oldLength; i < newLength; ++i) {
                        views[i] = factory.create();
                    }
                }
                else if (newLength < oldLength) {
                    $lifecycle.beginDetach();
                    for (let i = newLength, view = views[i]; i < oldLength; view = views[++i]) {
                        view.release(flags);
                        view.$detach(flags);
                    }
                    $lifecycle.endDetach(flags);
                    $lifecycle.beginUnbind();
                    for (let i = newLength, view = views[i]; i < oldLength; view = views[++i]) {
                        view.$unbind(flags);
                    }
                    $lifecycle.endUnbind(flags);
                    views.length = newLength;
                    if (newLength === 0) {
                        return;
                    }
                }
                else if (newLength === 0) {
                    return;
                }
                $lifecycle.beginBind();
                if (indexMap === null) {
                    forOf.iterate(items, (arr, i, item) => {
                        const view = views[i];
                        if (!!view.$scope && view.$scope.bindingContext[local] === item) {
                            view.$bind(flags, Scope.fromParent($scope, view.$scope.bindingContext));
                        }
                        else {
                            view.$bind(flags, Scope.fromParent($scope, BindingContext.create(local, item)));
                        }
                    });
                }
                else {
                    forOf.iterate(items, (arr, i, item) => {
                        const view = views[i];
                        if (indexMap[i] === i && !!view.$scope) {
                            view.$bind(flags, Scope.fromParent($scope, view.$scope.bindingContext));
                        }
                        else {
                            view.$bind(flags, Scope.fromParent($scope, BindingContext.create(local, item)));
                        }
                    });
                }
                $lifecycle.endBind(flags);
            }
            if (this.$state & 8 /* isAttached */) {
                const { location } = this;
                $lifecycle.beginAttach();
                if (indexMap === null) {
                    for (let i = 0, ii = views.length; i < ii; ++i) {
                        const view = views[i];
                        view.hold(location, flags);
                        view.$attach(flags);
                    }
                }
                else {
                    for (let i = 0, ii = views.length; i < ii; ++i) {
                        if (indexMap[i] !== i) {
                            const view = views[i];
                            view.hold(location, flags);
                            view.$attach(flags);
                        }
                    }
                }
                $lifecycle.endAttach(flags);
            }
        }
        checkCollectionObserver() {
            const oldObserver = this.observer;
            if (this.$state & (2 /* isBound */ | 1 /* isBinding */)) {
                const newObserver = this.observer = getCollectionObserver(this.$lifecycle, this.items);
                if (oldObserver !== newObserver) {
                    if (oldObserver) {
                        oldObserver.unsubscribeBatched(this);
                    }
                }
                if (newObserver) {
                    newObserver.subscribeBatched(this);
                }
            }
            else if (oldObserver) {
                oldObserver.unsubscribeBatched(this);
            }
        }
    };
    __decorate([
        bindable
    ], exports.Repeat.prototype, "items", void 0);
    exports.Repeat = __decorate([
        kernel.inject(IRenderLocation, IRenderable, IViewFactory),
        templateController('repeat')
    ], exports.Repeat);

    exports.Replaceable = class Replaceable {
        constructor(factory, location) {
            this.factory = factory;
            this.currentView = this.factory.create();
            this.currentView.hold(location, exports.LifecycleFlags.fromCreate);
        }
        binding(flags) {
            this.currentView.$bind(flags, this.$scope);
        }
        attaching(flags) {
            this.currentView.$attach(flags);
        }
        detaching(flags) {
            this.currentView.$detach(flags);
        }
        unbinding(flags) {
            this.currentView.$unbind(flags);
        }
    };
    exports.Replaceable = __decorate([
        templateController('replaceable'),
        kernel.inject(IViewFactory, IRenderLocation)
    ], exports.Replaceable);

    exports.With = class With {
        constructor(factory, location) {
            this.factory = factory;
            this.value = null;
            this.currentView = null;
            this.currentView = this.factory.create();
            this.currentView.hold(location, exports.LifecycleFlags.fromCreate);
        }
        valueChanged() {
            if (this.$state & 2 /* isBound */) {
                this.bindChild(exports.LifecycleFlags.fromBindableHandler);
            }
        }
        binding(flags) {
            this.bindChild(flags);
        }
        attaching(flags) {
            this.currentView.$attach(flags);
        }
        detaching(flags) {
            this.currentView.$detach(flags);
        }
        unbinding(flags) {
            this.currentView.$unbind(flags);
        }
        bindChild(flags) {
            const scope = Scope.fromParent(this.$scope, this.value);
            this.currentView.$bind(flags, scope);
        }
    };
    __decorate([
        bindable
    ], exports.With.prototype, "value", void 0);
    exports.With = __decorate([
        templateController('with'),
        kernel.inject(IViewFactory, IRenderLocation)
    ], exports.With);

    class Aurelia {
        constructor(container = kernel.DI.createContainer()) {
            this.container = container;
            this.components = [];
            this.startTasks = [];
            this.stopTasks = [];
            this.isStarted = false;
            this._root = null;
            kernel.Registration
                .instance(Aurelia, this)
                .register(container, Aurelia);
        }
        register(...params) {
            this.container.register(...params);
            return this;
        }
        app(config) {
            const component = config.component;
            const host = config.host;
            const startTask = () => {
                host.$au = this;
                if (!this.components.includes(component)) {
                    this._root = component;
                    this.components.push(component);
                    const re = this.container.get(IRenderingEngine);
                    component.$hydrate(re, host);
                }
                component.$bind(exports.LifecycleFlags.fromStartTask | exports.LifecycleFlags.fromBind);
                component.$attach(exports.LifecycleFlags.fromStartTask);
            };
            this.startTasks.push(startTask);
            this.stopTasks.push(() => {
                component.$detach(exports.LifecycleFlags.fromStopTask);
                component.$unbind(exports.LifecycleFlags.fromStopTask | exports.LifecycleFlags.fromUnbind);
                host.$au = null;
            });
            if (this.isStarted) {
                startTask();
            }
            return this;
        }
        root() {
            return this._root;
        }
        start() {
            for (const runStartTask of this.startTasks) {
                runStartTask();
            }
            this.isStarted = true;
            return this;
        }
        stop() {
            this.isStarted = false;
            for (const runStopTask of this.stopTasks) {
                runStopTask();
            }
            return this;
        }
    }
    kernel.PLATFORM.global.Aurelia = Aurelia;

    exports.enableArrayObservation = enableArrayObservation;
    exports.disableArrayObservation = disableArrayObservation;
    exports.nativePush = nativePush;
    exports.nativePop = nativePop;
    exports.nativeShift = nativeShift;
    exports.nativeUnshift = nativeUnshift;
    exports.nativeSplice = nativeSplice;
    exports.nativeReverse = nativeReverse;
    exports.nativeSort = nativeSort;
    exports.enableMapObservation = enableMapObservation;
    exports.disableMapObservation = disableMapObservation;
    exports.nativeSet = nativeSet;
    exports.nativeMapDelete = nativeDelete;
    exports.nativeMapClear = nativeClear;
    exports.enableSetObservation = enableSetObservation;
    exports.disableSetObservation = disableSetObservation;
    exports.nativeAdd = nativeAdd;
    exports.nativeSetDelete = nativeDelete$1;
    exports.nativeSetClear = nativeClear$1;
    exports.BindingModeBehavior = BindingModeBehavior;
    exports.debounceCallSource = debounceCallSource;
    exports.debounceCall = debounceCall;
    exports.ISanitizer = ISanitizer;
    exports.handleSelfEvent = handleSelfEvent;
    exports.throttle = throttle;
    exports.connects = connects;
    exports.observes = observes;
    exports.callsFunction = callsFunction;
    exports.hasAncestor = hasAncestor;
    exports.isAssignable = isAssignable;
    exports.isLeftHandSide = isLeftHandSide;
    exports.isPrimary = isPrimary;
    exports.isResource = isResource;
    exports.hasBind = hasBind;
    exports.hasUnbind = hasUnbind;
    exports.isLiteral = isLiteral;
    exports.arePureLiterals = arePureLiterals;
    exports.isPureLiteral = isPureLiteral;
    exports.BindingBehavior = BindingBehavior;
    exports.ValueConverter = ValueConverter;
    exports.Assign = Assign;
    exports.Conditional = Conditional;
    exports.AccessThis = AccessThis;
    exports.AccessScope = AccessScope;
    exports.AccessMember = AccessMember;
    exports.AccessKeyed = AccessKeyed;
    exports.CallScope = CallScope;
    exports.CallMember = CallMember;
    exports.CallFunction = CallFunction;
    exports.Binary = Binary;
    exports.Unary = Unary;
    exports.PrimitiveLiteral = PrimitiveLiteral;
    exports.HtmlLiteral = HtmlLiteral;
    exports.ArrayLiteral = ArrayLiteral;
    exports.ObjectLiteral = ObjectLiteral;
    exports.Template = Template;
    exports.TaggedTemplate = TaggedTemplate;
    exports.ArrayBindingPattern = ArrayBindingPattern;
    exports.ObjectBindingPattern = ObjectBindingPattern;
    exports.BindingIdentifier = BindingIdentifier;
    exports.ForOfStatement = ForOfStatement;
    exports.Interpolation = Interpolation;
    exports.IterateForOfStatement = IterateForOfStatement;
    exports.CountForOfStatement = CountForOfStatement;
    exports.bindingBehavior = bindingBehavior;
    exports.BindingBehaviorResource = BindingBehaviorResource;
    exports.InternalObserversLookup = InternalObserversLookup;
    exports.BindingContext = BindingContext;
    exports.Scope = Scope;
    exports.OverrideContext = OverrideContext;
    exports.Call = Call;
    exports.collectionObserver = collectionObserver;
    exports.computed = computed;
    exports.createComputedObserver = createComputedObserver;
    exports.GetterController = GetterController;
    exports.IDirtyChecker = IDirtyChecker;
    exports.DirtyChecker = DirtyChecker;
    exports.findOriginalEventTarget = findOriginalEventTarget;
    exports.ListenerTracker = ListenerTracker;
    exports.DelegateOrCaptureSubscription = DelegateOrCaptureSubscription;
    exports.TriggerSubscription = TriggerSubscription;
    exports.EventSubscriber = EventSubscriber;
    exports.IEventManager = IEventManager;
    exports.EventManager = EventManager;
    exports.IExpressionParser = IExpressionParser;
    exports.ExpressionParser = ExpressionParser;
    exports.MultiInterpolationBinding = MultiInterpolationBinding;
    exports.Listener = Listener;
    exports.IObserverLocator = IObserverLocator;
    exports.getCollectionObserver = getCollectionObserver;
    exports.PrimitiveObserver = PrimitiveObserver;
    exports.Ref = Ref;
    exports.ISignaler = ISignaler;
    exports.Signaler = Signaler;
    exports.subscriberCollection = subscriberCollection;
    exports.batchedSubscriberCollection = batchedSubscriberCollection;
    exports.ISVGAnalyzer = ISVGAnalyzer;
    exports.PropertyAccessor = PropertyAccessor;
    exports.targetObserver = targetObserver;
    exports.valueConverter = valueConverter;
    exports.ValueConverterResource = ValueConverterResource;
    exports.bindable = bindable;
    exports.createElement = createElement;
    exports.RenderPlan = RenderPlan;
    exports.customAttribute = customAttribute;
    exports.templateController = templateController;
    exports.CustomAttributeResource = CustomAttributeResource;
    exports.registerAttribute = registerAttribute;
    exports.createCustomAttributeDescription = createCustomAttributeDescription;
    exports.customElement = customElement;
    exports.useShadowDOM = useShadowDOM;
    exports.containerless = containerless;
    exports.CustomElementResource = CustomElementResource;
    exports.registerElement = registerElement;
    exports.$attachAttribute = $attachAttribute;
    exports.$attachElement = $attachElement;
    exports.$attachView = $attachView;
    exports.$detachAttribute = $detachAttribute;
    exports.$detachElement = $detachElement;
    exports.$detachView = $detachView;
    exports.$cacheAttribute = $cacheAttribute;
    exports.$cacheElement = $cacheElement;
    exports.$cacheView = $cacheView;
    exports.$mountElement = $mountElement;
    exports.$unmountElement = $unmountElement;
    exports.$mountView = $mountView;
    exports.$unmountView = $unmountView;
    exports.$bindAttribute = $bindAttribute;
    exports.$bindElement = $bindElement;
    exports.$bindView = $bindView;
    exports.$unbindAttribute = $unbindAttribute;
    exports.$unbindElement = $unbindElement;
    exports.$unbindView = $unbindView;
    exports.renderStrategy = renderStrategy;
    exports.RenderStrategyResource = RenderStrategyResource;
    exports.registerRenderStrategy = registerRenderStrategy;
    exports.ITemplateCompiler = ITemplateCompiler;
    exports.$hydrateAttribute = $hydrateAttribute;
    exports.$hydrateElement = $hydrateElement;
    exports.defaultShadowOptions = defaultShadowOptions;
    exports.IRenderingEngine = IRenderingEngine;
    exports.ShadowDOMProjector = ShadowDOMProjector;
    exports.ContainerlessProjector = ContainerlessProjector;
    exports.HostProjector = HostProjector;
    exports.RuntimeBehavior = RuntimeBehavior;
    exports.findElements = findElements;
    exports.RuntimeCompilationResources = RuntimeCompilationResources;
    exports.CompiledTemplate = CompiledTemplate;
    exports.noViewTemplate = noViewTemplate;
    exports.createRenderContext = createRenderContext;
    exports.InstanceProvider = InstanceProvider;
    exports.ViewFactoryProvider = ViewFactoryProvider;
    exports.addBindable = addBindable;
    exports.addAttachable = addAttachable;
    exports.Renderer = Renderer;
    exports.View = View;
    exports.ViewFactory = ViewFactory;
    exports.Aurelia = Aurelia;
    exports.customElementName = customElementName;
    exports.customElementKey = customElementKey;
    exports.customElementBehavior = customElementBehavior;
    exports.customAttributeName = customAttributeName;
    exports.customAttributeKey = customAttributeKey;
    exports.ITargetedInstruction = ITargetedInstruction;
    exports.isTargetedInstruction = isTargetedInstruction;
    exports.buildRequired = buildRequired;
    exports.buildTemplateDefinition = buildTemplateDefinition;
    exports.ELEMENT_NODE = ELEMENT_NODE;
    exports.ATTRIBUTE_NODE = ATTRIBUTE_NODE;
    exports.TEXT_NODE = TEXT_NODE;
    exports.COMMENT_NODE = COMMENT_NODE;
    exports.DOCUMENT_FRAGMENT_NODE = DOCUMENT_FRAGMENT_NODE;
    exports.INode = INode;
    exports.IRenderLocation = IRenderLocation;
    exports.DOM = DOM;
    exports.NodeSequence = NodeSequence;
    exports.TextNodeSequence = TextNodeSequence;
    exports.FragmentNodeSequence = FragmentNodeSequence;
    exports.NodeSequenceFactory = NodeSequenceFactory;
    exports.AuMarker = AuMarker;
    exports.IRenderable = IRenderable;
    exports.IViewFactory = IViewFactory;
    exports.ILifecycle = ILifecycle;
    exports.IFlushLifecycle = IFlushLifecycle;
    exports.IBindLifecycle = IBindLifecycle;
    exports.IAttachLifecycle = IAttachLifecycle;
    exports.Lifecycle = Lifecycle;
    exports.LifecycleTask = LifecycleTask;
    exports.AggregateLifecycleTask = AggregateLifecycleTask;
    exports.PromiseSwap = PromiseSwap;
    exports.PromiseTask = PromiseTask;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _aurelia_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia/runtime */ "./node_modules/@aurelia/runtime/dist/index.umd.js");
/* harmony import */ var _aurelia_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_0__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import template from './app.html';
const template = document.createElement('template');
const div = document.createElement('div');
const marker = document.createElement('au-marker');
marker.classList.add('au');
const text = document.createTextNode(' ');
div.appendChild(marker);
div.appendChild(text);
template.appendChild(div);
let App = class App {
    constructor() {
        this.message = 'Hello World!';
    }
};
App = __decorate([
    Object(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_0__["customElement"])({
        name: 'app',
        build: { required: false },
        template,
        instructions: [[
                { type: "a" /* textBinding */, from: 'message' }
            ]]
    })
], App);



/***/ }),

/***/ "./src/startup.ts":
/*!************************!*\
  !*** ./src/startup.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aurelia_jit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aurelia/jit */ "./node_modules/@aurelia/jit/dist/index.umd.js");
/* harmony import */ var _aurelia_jit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aurelia_jit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aurelia_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aurelia/runtime */ "./node_modules/@aurelia/runtime/dist/index.umd.js");
/* harmony import */ var _aurelia_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aurelia_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/app.ts");



const au = new _aurelia_runtime__WEBPACK_IMPORTED_MODULE_1__["Aurelia"]();
au.register(_aurelia_jit__WEBPACK_IMPORTED_MODULE_0__["BasicConfiguration"]);
au.app({
    host: document.querySelector('app'),
    component: new _app__WEBPACK_IMPORTED_MODULE_2__["App"](),
});
au.start();


/***/ })

/******/ });