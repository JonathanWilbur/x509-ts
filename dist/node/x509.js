module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(2);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./source/errors.ts
class ASN1Error extends Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}
class ASN1NotImplementedError extends ASN1Error {
    constructor() {
        super("Not yet implemented.");
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}
class ASN1RecursionError extends ASN1Error {
    constructor() {
        super("Recursion was too deep.");
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}
class ASN1TruncationError extends ASN1Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}
class ASN1OverflowError extends ASN1Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}
class ASN1SizeError extends ASN1Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}
class ASN1PaddingError extends ASN1Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}
class ASN1UndefinedError extends ASN1Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}
class ASN1CharactersError extends ASN1Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}
class ASN1ConstructionError extends ASN1Error {
    constructor(m) {
        super(m);
        Object.setPrototypeOf(this, ASN1Error.prototype);
    }
}

// CONCATENATED MODULE: ./source/asn1.ts

class asn1_ASN1Element {
    constructor() {
        this.recursionCount = 0;
        this.tagClass = 0;
        this.construction = 0;
        this.tagNumber = 0;
        this.value = new Uint8Array(0);
    }
    get length() {
        return this.value.length;
    }
    static validateDateTime(dataType, year, month, date, hours, minutes, seconds) {
        switch (month) {
            case 0:
            case 2:
            case 4:
            case 6:
            case 7:
            case 9:
            case 11:
                if (date > 31)
                    throw new ASN1Error(`Day > 31 encountered in ${dataType} with 31-day month.`);
                break;
            case 3:
            case 5:
            case 8:
            case 10:
                if (date > 30)
                    throw new ASN1Error(`Day > 31 encountered in ${dataType} with 30-day month.`);
                break;
            case 1:
                let isLeapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
                if (isLeapYear) {
                    if (date > 29)
                        throw new ASN1Error(`Day > 29 encountered in ${dataType} with month of February in leap year.`);
                }
                else {
                    if (date > 28)
                        throw new ASN1Error(`Day > 28 encountered in ${dataType} with month of February and non leap year.`);
                }
                break;
            default:
                throw new ASN1Error(`Month greater than 12 encountered in ${dataType}.`);
        }
        if (hours > 23)
            throw new ASN1Error(`Hours > 23 encountered in ${dataType}.`);
        if (minutes > 59)
            throw new ASN1Error(`Minutes > 60 encountered in ${dataType}.`);
        if (seconds > 59)
            throw new ASN1Error(`Seconds > 60 encountered in ${dataType}.`);
    }
    static decodeUnsignedBigEndianInteger(value) {
        if (value.length === 0)
            return 0;
        if (value.length > 4)
            throw new ASN1OverflowError("Number too long to decode.");
        const u8 = new Uint8Array(4);
        u8.set(value, (4 - value.length));
        return new Uint32Array(u8.reverse().buffer)[0];
    }
    static decodeSignedBigEndianInteger(value) {
        if (value.length === 0)
            return 0;
        if (value.length > 4)
            throw new ASN1OverflowError("Number too long to decode.");
        const u8 = new Uint8Array(4);
        if (value[0] >= 0b10000000)
            u8.fill(0xFF);
        u8.set(value, (4 - value.length));
        return new Int32Array(u8.reverse().buffer)[0];
    }
}
asn1_ASN1Element.nestingRecursionLimit = 5;

// CONCATENATED MODULE: ./source/values.ts
const MAX_UINT_32 = 0x00FFFFFFFF;
const MIN_UINT_32 = 0x0000000000;
const MAX_SINT_32 = 0x7FFFFFFF;
const MIN_SINT_32 = -0x80000000;
var ASN1TagClass;
(function (ASN1TagClass) {
    ASN1TagClass[ASN1TagClass["universal"] = 0] = "universal";
    ASN1TagClass[ASN1TagClass["application"] = 1] = "application";
    ASN1TagClass[ASN1TagClass["context"] = 2] = "context";
    ASN1TagClass[ASN1TagClass["private"] = 3] = "private";
})(ASN1TagClass || (ASN1TagClass = {}));
var ASN1Construction;
(function (ASN1Construction) {
    ASN1Construction[ASN1Construction["primitive"] = 0] = "primitive";
    ASN1Construction[ASN1Construction["constructed"] = 1] = "constructed";
})(ASN1Construction || (ASN1Construction = {}));
var LengthEncodingPreference;
(function (LengthEncodingPreference) {
    LengthEncodingPreference[LengthEncodingPreference["definite"] = 0] = "definite";
    LengthEncodingPreference[LengthEncodingPreference["indefinite"] = 1] = "indefinite";
})(LengthEncodingPreference || (LengthEncodingPreference = {}));
var ASN1SpecialRealValue;
(function (ASN1SpecialRealValue) {
    ASN1SpecialRealValue[ASN1SpecialRealValue["plusInfinity"] = 64] = "plusInfinity";
    ASN1SpecialRealValue[ASN1SpecialRealValue["minusInfinity"] = 65] = "minusInfinity";
    ASN1SpecialRealValue[ASN1SpecialRealValue["notANumber"] = 66] = "notANumber";
    ASN1SpecialRealValue[ASN1SpecialRealValue["minusZero"] = 67] = "minusZero";
})(ASN1SpecialRealValue || (ASN1SpecialRealValue = {}));
var ASN1RealEncodingBase;
(function (ASN1RealEncodingBase) {
    ASN1RealEncodingBase[ASN1RealEncodingBase["base2"] = 0] = "base2";
    ASN1RealEncodingBase[ASN1RealEncodingBase["base8"] = 16] = "base8";
    ASN1RealEncodingBase[ASN1RealEncodingBase["base16"] = 32] = "base16";
})(ASN1RealEncodingBase || (ASN1RealEncodingBase = {}));
var ASN1RealEncodingScale;
(function (ASN1RealEncodingScale) {
    ASN1RealEncodingScale[ASN1RealEncodingScale["scale0"] = 0] = "scale0";
    ASN1RealEncodingScale[ASN1RealEncodingScale["scale1"] = 4] = "scale1";
    ASN1RealEncodingScale[ASN1RealEncodingScale["scale2"] = 8] = "scale2";
    ASN1RealEncodingScale[ASN1RealEncodingScale["scale3"] = 12] = "scale3";
})(ASN1RealEncodingScale || (ASN1RealEncodingScale = {}));
var ASN1UniversalType;
(function (ASN1UniversalType) {
    ASN1UniversalType[ASN1UniversalType["endOfContent"] = 0] = "endOfContent";
    ASN1UniversalType[ASN1UniversalType["boolean"] = 1] = "boolean";
    ASN1UniversalType[ASN1UniversalType["integer"] = 2] = "integer";
    ASN1UniversalType[ASN1UniversalType["bitString"] = 3] = "bitString";
    ASN1UniversalType[ASN1UniversalType["octetString"] = 4] = "octetString";
    ASN1UniversalType[ASN1UniversalType["nill"] = 5] = "nill";
    ASN1UniversalType[ASN1UniversalType["objectIdentifier"] = 6] = "objectIdentifier";
    ASN1UniversalType[ASN1UniversalType["objectDescriptor"] = 7] = "objectDescriptor";
    ASN1UniversalType[ASN1UniversalType["external"] = 8] = "external";
    ASN1UniversalType[ASN1UniversalType["realNumber"] = 9] = "realNumber";
    ASN1UniversalType[ASN1UniversalType["enumerated"] = 10] = "enumerated";
    ASN1UniversalType[ASN1UniversalType["embeddedPDV"] = 11] = "embeddedPDV";
    ASN1UniversalType[ASN1UniversalType["utf8String"] = 12] = "utf8String";
    ASN1UniversalType[ASN1UniversalType["relativeOID"] = 13] = "relativeOID";
    ASN1UniversalType[ASN1UniversalType["reserved14"] = 14] = "reserved14";
    ASN1UniversalType[ASN1UniversalType["reserved15"] = 15] = "reserved15";
    ASN1UniversalType[ASN1UniversalType["sequence"] = 16] = "sequence";
    ASN1UniversalType[ASN1UniversalType["set"] = 17] = "set";
    ASN1UniversalType[ASN1UniversalType["numericString"] = 18] = "numericString";
    ASN1UniversalType[ASN1UniversalType["printableString"] = 19] = "printableString";
    ASN1UniversalType[ASN1UniversalType["teletexString"] = 20] = "teletexString";
    ASN1UniversalType[ASN1UniversalType["videotexString"] = 21] = "videotexString";
    ASN1UniversalType[ASN1UniversalType["ia5String"] = 22] = "ia5String";
    ASN1UniversalType[ASN1UniversalType["utcTime"] = 23] = "utcTime";
    ASN1UniversalType[ASN1UniversalType["generalizedTime"] = 24] = "generalizedTime";
    ASN1UniversalType[ASN1UniversalType["graphicString"] = 25] = "graphicString";
    ASN1UniversalType[ASN1UniversalType["visibleString"] = 26] = "visibleString";
    ASN1UniversalType[ASN1UniversalType["generalString"] = 27] = "generalString";
    ASN1UniversalType[ASN1UniversalType["universalString"] = 28] = "universalString";
    ASN1UniversalType[ASN1UniversalType["characterString"] = 29] = "characterString";
    ASN1UniversalType[ASN1UniversalType["bmpString"] = 30] = "bmpString";
})(ASN1UniversalType || (ASN1UniversalType = {}));
const printableStringCharacters = "etaoinsrhdlucmfywgpbvkxqjzETAOINSRHDLUCMFYWGPBVKXQJZ0123456789 '()+,-./:=?";
const utcTimeRegex = /^(?<year>\d{2})(?<month>(?:1[0-2])|(?:0\d))(?<date>(?:3[01])|(?:[0-2]\d))(?<hour>(?:2[0-3])|(?:[01]\d))(?<minute>[0-5]\d)(?<second>[0-5]\d)?(?<offset>(?:(\+|\-)((?:2[0-3])|(?:[01]\d))[0-5]\d)|Z)$/;
const distinguishedUTCTimeRegex = /^(?<year>\d{2})(?<month>(?:1[0-2])|(?:0\d))(?<date>(?:3[01])|(?:[0-2]\d))(?<hour>(?:2[0-3])|(?:[01]\d))(?<minute>[0-5]\d)(?<second>[0-5]\d)?Z$/;
const generalizedTimeRegex = /^(?<year>\d{4})(?<month>(?:1[0-2])|(?:0\d))(?<date>(?:3[01])|(?:[0-2]\d))(?<hour>(?:2[0-3])|(?:[01]\d))(?<minute>[0-5]\d)?(?<second>[0-5]\d)?(?:(\.|,)(?<fraction>\d+))?(?<offset>(?:(\+|\-)((?:2[0-3])|(?:[01]\d))[0-5]\d)|Z)?$/;
const distinguishedGeneralizedTimeRegex = /^(?<year>\d{4})(?<month>(?:1[0-2])|(?:0\d))(?<date>(?:3[01])|(?:[0-2]\d))(?<hour>(?:2[0-3])|(?:[01]\d))(?<minute>[0-5]\d)(?<second>[0-5]\d)(?:(\.|,)(?<fraction>\d*[1-9]))?Z$/;
const nr1Regex = /^\ *(\+|\-)?\d+$/;
const nr2Regex = /^\ *(\+|\-)?(?:\d+(\.|,)\d*)|(?:\d*(\.|,)\d+)$/;
const nr3Regex = /^\ *(\+|\-)?(?:\d+(\.|,)\d*)|(?:\d*(\.|,)\d+)(e|E)(\+|\-)?\d+$/;
const canonicalNR3Regex = /^\ *\-?(?:[1-9]\d*)?[1-9]\.E(?:\+0)|(?:\-?[1-9]\d*)$/;
const distinguishedNR3Regex = /^\ *\-?(?:[1-9]\d*)?[1-9]\.E(?:\+0)|(?:\-?[1-9]\d*)$/;
const CANONICAL_TAG_CLASS_ORDERING = [
    0,
    1,
    3,
    2
];

// CONCATENATED MODULE: ./source/types/objectidentifier.ts
class ObjectIdentifier {
    constructor(nodes) {
        if (nodes.length < 2)
            throw new Error("Cannot construct an OID with less than two nodes!");
        if (nodes.length >= 1 && !(nodes[0] in [0, 1, 2]))
            throw new Error("OIDs first node must be 0, 1, or 2!");
        if (((nodes[0] < 2) && nodes[1] > 39) ||
            (nodes[0] === 2 && nodes[1] > 175))
            throw new Error(`OID Node #2 cannot exceed 39 if node #1 is 0 or 1, and 175 if node #1 is 2. Received these nodes: ${nodes}.`);
        nodes.forEach(node => {
            if (node < 0)
                throw new Error("OID node numbers cannot be negative!");
            if (node > Number.MAX_SAFE_INTEGER)
                throw new Error("OID number was too big!");
        });
        this._nodes = nodes.slice(0);
    }
    get nodes() {
        return this._nodes.slice(0);
    }
    get dotDelimitedNotation() {
        return this._nodes.join(".");
    }
    toString() {
        return this.dotDelimitedNotation;
    }
}

// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(0);

// CONCATENATED MODULE: ./source/x690.ts





class x690_X690Element extends asn1_ASN1Element {
    validateTag(permittedClasses, permittedConstruction, permittedNumbers) {
        if (!permittedClasses.includes(this.tagClass))
            return -1;
        if (!permittedConstruction.includes(this.construction))
            return -2;
        if (!permittedNumbers.includes(this.tagNumber))
            return -3;
        return 0;
    }
    set integer(value) {
        if (value < MIN_SINT_32)
            throw new ASN1OverflowError(`Number ${value} too small to be converted.`);
        if (value > MAX_SINT_32)
            throw new ASN1OverflowError(`Number ${value} too big to be converted.`);
        if (value <= 127 && value >= -128) {
            this.value = new Uint8Array([
                (value & 255)
            ]);
            return;
        }
        else if (value <= 32767 && value >= -32768) {
            this.value = new Uint8Array([
                (value >> 8 & 255),
                (value & 255)
            ]);
            return;
        }
        else if (value <= 8388607 && value >= -8388608) {
            this.value = new Uint8Array([
                ((value >> 16) & 255),
                (value >> 8 & 255),
                (value & 255)
            ]);
            return;
        }
        else {
            this.value = new Uint8Array([
                ((value >> 24) & 255),
                ((value >> 16) & 255),
                (value >> 8 & 255),
                (value & 255)
            ]);
            return;
        }
    }
    get integer() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("INTEGER cannot be constructed.");
        if (this.value.length === 0)
            throw new ASN1SizeError("Number encoded on zero bytes!");
        if (this.value.length > 4)
            throw new ASN1OverflowError("Number too long to decode.");
        if (this.value.length > 2 &&
            ((this.value[0] === 0xFF && this.value[1] >= 0b10000000) ||
                (this.value[0] === 0x00 && this.value[1] < 0b10000000)))
            throw new ASN1PaddingError("Unnecessary padding bytes on INTEGER or ENUMERATED.");
        return asn1_ASN1Element.decodeSignedBigEndianInteger(this.value.subarray(0));
    }
    set objectIdentifier(value) {
        const numbers = value.nodes;
        let pre = [((numbers[0] * 40) + numbers[1])];
        let post = x690_X690Element.encodeObjectIdentifierNodes(numbers.slice(2));
        this.value = new Uint8Array(pre.concat(post));
    }
    get objectIdentifier() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("OBJECT IDENTIFIER cannot be constructed.");
        if (this.value.length === 0)
            throw new ASN1TruncationError("Encoded value was too short to be an OBJECT IDENTIFIER!");
        let numbers = [0, 0];
        if (this.value[0] >= 0x50) {
            numbers[0] = 2;
            numbers[1] = (this.value[0] - 0x50);
        }
        else if (this.value[0] >= 0x28) {
            numbers[0] = 1;
            numbers[1] = (this.value[0] - 0x28);
        }
        else {
            numbers[0] = 0;
            numbers[1] = this.value[0];
        }
        if (this.value.length === 1)
            return new ObjectIdentifier(numbers);
        numbers = numbers.concat(x690_X690Element.decodeObjectIdentifierNodes(this.value.slice(1)));
        return new ObjectIdentifier(numbers);
    }
    set enumerated(value) {
        this.integer = value;
    }
    get enumerated() {
        return this.integer;
    }
    set relativeObjectIdentifier(value) {
        this.value = new Uint8Array(x690_X690Element.encodeObjectIdentifierNodes(value));
    }
    get relativeObjectIdentifier() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("Relative OID cannot be constructed.");
        return x690_X690Element.decodeObjectIdentifierNodes(this.value.slice(0));
    }
    static decodeObjectIdentifierNodes(value) {
        if (value.length === 0)
            return [];
        let numbers = [];
        if (value.length > 0 && (value[(value.length - 1)] & 0b10000000) === 0b10000000)
            throw new ASN1TruncationError("OID truncated");
        let components = 0;
        value.forEach(b => { if (!(b & 0b10000000))
            components++; });
        numbers.length = components;
        let currentNumber = 0;
        let bytesUsedInCurrentNumber = 0;
        value.forEach(b => {
            if (bytesUsedInCurrentNumber === 0 && b === 0b10000000)
                throw new ASN1PaddingError("OID had invalid padding byte.");
            if (numbers[currentNumber] > (Number.MAX_SAFE_INTEGER >>> 7))
                throw new ASN1OverflowError("OID node too big");
            numbers[currentNumber] <<= 7;
            numbers[currentNumber] |= (b & 0x7F);
            if (!(b & 0b10000000)) {
                currentNumber++;
                bytesUsedInCurrentNumber = 0;
            }
            else {
                bytesUsedInCurrentNumber++;
            }
        });
        return numbers;
    }
    static encodeObjectIdentifierNodes(value) {
        let ret = [];
        for (let i = 0; i < value.length; i++) {
            let number = value[i];
            if (number < 128) {
                ret.push(number);
                continue;
            }
            let encodedOIDNode = [];
            while (number !== 0) {
                let numberBytes = [
                    (number & 255),
                    (number >>> 8 & 255),
                    ((number >>> 16) & 255),
                    ((number >>> 24) & 255),
                ];
                if ((numberBytes[0] & 0x80) === 0)
                    numberBytes[0] |= 0x80;
                encodedOIDNode.unshift(numberBytes[0]);
                number >>= 7;
            }
            encodedOIDNode[encodedOIDNode.length - 1] &= 0x7F;
            ret = ret.concat(encodedOIDNode);
        }
        return ret;
    }
    static isInCanonicalOrder(elements) {
        let previousTagClass = null;
        let previousTagNumber = null;
        if (!elements.every((element) => {
            if (!Object(external_util_["isNull"])(previousTagClass) &&
                element.tagClass !== previousTagClass &&
                CANONICAL_TAG_CLASS_ORDERING.indexOf(element.tagClass) <=
                    CANONICAL_TAG_CLASS_ORDERING.indexOf(previousTagClass))
                return false;
            if (element.tagClass !== previousTagClass)
                previousTagNumber = null;
            if (!Object(external_util_["isNull"])(previousTagNumber) && element.tagNumber < previousTagNumber)
                return false;
            previousTagClass = element.tagClass;
            previousTagNumber = element.tagNumber;
            return true;
        }))
            return false;
        return true;
    }
    static isUniquelyTagged(elements) {
        const finds = {};
        for (let i = 0; i < elements.length; i++) {
            const key = `${elements[i].tagClass}.${elements[i].tagNumber}`;
            if (key in finds)
                return false;
            finds[key] = null;
        }
        return true;
    }
}

// CONCATENATED MODULE: ./source/codecs/ber.ts




class ber_BERElement extends x690_X690Element {
    constructor(tagClass = 0, construction = 0, tagNumber = 0) {
        super();
        this.tagClass = tagClass;
        this.construction = construction;
        this.tagNumber = tagNumber;
        this.value = new Uint8Array(0);
    }
    set boolean(value) {
        this.value = new Uint8Array(1);
        this.value[0] = (value ? 0xFF : 0x00);
    }
    get boolean() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("BOOLEAN cannot be constructed.");
        if (this.value.length !== 1)
            throw new ASN1SizeError("BOOLEAN not one byte");
        return (this.value[0] !== 0);
    }
    set bitString(value) {
        if (value.length === 0)
            this.value = new Uint8Array(0);
        let pre = [];
        pre.length = ((value.length >>> 3) + ((value.length % 8) ? 1 : 0)) + 1;
        for (let i = 0; i < value.length; i++) {
            if (value[i] === false)
                continue;
            pre[((i >>> 3) + 1)] |= (0b10000000 >>> (i % 8));
        }
        pre[0] = (8 - (value.length % 8));
        if (pre[0] === 8)
            pre[0] = 0;
        this.value = new Uint8Array(pre);
    }
    get bitString() {
        if (this.construction === 0) {
            if (this.value.length === 0)
                throw new ASN1Error("ASN.1 BIT STRING cannot be encoded on zero bytes!");
            if (this.value.length === 1 && this.value[0] !== 0)
                throw new ASN1Error("ASN.1 BIT STRING encoded with deceptive first byte!");
            if (this.value[0] > 7)
                throw new ASN1Error("First byte of an ASN.1 BIT STRING must be <= 7!");
            let ret = [];
            for (let i = 1; i < this.value.length; i++) {
                ret = ret.concat([
                    (this.value[i] & 0b10000000 ? true : false),
                    (this.value[i] & 0b01000000 ? true : false),
                    (this.value[i] & 0b00100000 ? true : false),
                    (this.value[i] & 0b00010000 ? true : false),
                    (this.value[i] & 0b00001000 ? true : false),
                    (this.value[i] & 0b00000100 ? true : false),
                    (this.value[i] & 0b00000010 ? true : false),
                    (this.value[i] & 0b00000001 ? true : false)
                ]);
            }
            ret.length -= this.value[0];
            return ret;
        }
        else {
            if ((this.recursionCount + 1) > ber_BERElement.nestingRecursionLimit)
                throw new ASN1RecursionError();
            let appendy = [];
            const substrings = this.sequence;
            substrings.slice(0, (substrings.length - 1)).forEach(substring => {
                if (substring.construction === 0 &&
                    substring.value.length > 0 &&
                    substring.value[0] !== 0x00)
                    throw new ASN1Error(`Only the last subelement of a constructed BIT STRING may have a non-zero first value byte.`);
            });
            substrings.forEach(substring => {
                if (substring.tagClass !== this.tagClass)
                    throw new ASN1ConstructionError(`Invalid tag class in recursively-encoded BIT STRING.`);
                if (substring.tagNumber !== this.tagNumber)
                    throw new ASN1ConstructionError(`Invalid tag class in recursively-encoded BIT STRING.`);
                substring.recursionCount = (this.recursionCount + 1);
                appendy = appendy.concat(substring.bitString);
            });
            return appendy;
        }
    }
    set octetString(value) {
        this.value = new Uint8Array(value);
    }
    get octetString() {
        return this.deconstruct("OCTET STRING");
    }
    set objectDescriptor(value) {
        this.graphicString = value;
    }
    get objectDescriptor() {
        return this.graphicString;
    }
    set real(value) {
        if (value === 0.0) {
            this.value = new Uint8Array(0);
            return;
        }
        else if (isNaN(value)) {
            this.value = new Uint8Array([66]);
            return;
        }
        else if (value === -0.0) {
            this.value = new Uint8Array([67]);
            return;
        }
        else if (value === Infinity) {
            this.value = new Uint8Array([64]);
            return;
        }
        else if (value === -Infinity) {
            this.value = new Uint8Array([65]);
            return;
        }
        let valueString = value.toFixed(7);
        valueString = (String.fromCharCode(0b00000011) + valueString);
        this.value = (new TextEncoder()).encode(valueString);
    }
    get real() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("REAL cannot be constructed.");
        if (this.value.length === 0)
            return 0.0;
        switch (this.value[0] & 0b11000000) {
            case (0b01000000): {
                if (this.value[0] === 66)
                    return NaN;
                if (this.value[0] === 67)
                    return -0.0;
                if (this.value[0] === 64)
                    return Infinity;
                if (this.value[0] === 65)
                    return -Infinity;
                throw new ASN1UndefinedError("Unrecognized special REAL value!");
            }
            case (0b00000000): {
                let realString;
                if (typeof TextEncoder !== "undefined") {
                    realString = (new TextDecoder("utf-8")).decode(this.value.slice(1));
                }
                else if (typeof Buffer !== "undefined") {
                    realString = (new Buffer(this.value.slice(1))).toString("utf-8");
                }
                else {
                    throw new ASN1Error("No ability to decode bytes to string!");
                }
                switch (this.value[0] & 0b00111111) {
                    case 1: {
                        if (!nr1Regex.test(realString))
                            throw new ASN1Error("Malformed NR1 Base-10 REAL");
                        return parseFloat(realString);
                    }
                    case 2: {
                        if (!nr2Regex.test(realString))
                            throw new ASN1Error("Malformed NR2 Base-10 REAL");
                        return parseFloat(realString.replace(",", "."));
                    }
                    case 3: {
                        if (!nr3Regex.test(realString))
                            throw new ASN1Error("Malformed NR3 Base-10 REAL");
                        return parseFloat(realString.replace(",", "."));
                    }
                    default:
                        throw new ASN1UndefinedError("Undefined Base-10 REAL encoding.");
                }
            }
            case (0b10000000):
            case (0b11000000): {
                const sign = ((this.value[0] & 0b01000000) ? -1 : 1);
                const base = ((flag) => {
                    switch (flag) {
                        case (0): return 2;
                        case (16): return 8;
                        case (32): return 16;
                        default:
                            throw new ASN1Error("Impossible REAL encoding base encountered.");
                    }
                })(this.value[0] & 0b00110000);
                const scale = ((flag) => {
                    switch (flag) {
                        case (0): return 0;
                        case (4): return 1;
                        case (8): return 2;
                        case (12): return 3;
                        default:
                            throw new ASN1Error("Impossible REAL encoding scale encountered.");
                    }
                })(this.value[0] & 0b00001100);
                let exponent;
                let mantissa;
                switch (this.value[0] & 0b00000011) {
                    case (0b00000000): {
                        if (this.value.length < 3)
                            throw new ASN1TruncationError("Binary-encoded REAL truncated.");
                        exponent = asn1_ASN1Element.decodeSignedBigEndianInteger(this.value.subarray(1, 2));
                        mantissa = asn1_ASN1Element.decodeUnsignedBigEndianInteger(this.value.subarray(2));
                        break;
                    }
                    case (0b00000001): {
                        if (this.value.length < 4)
                            throw new ASN1TruncationError("Binary-encoded REAL truncated.");
                        exponent = asn1_ASN1Element.decodeSignedBigEndianInteger(this.value.subarray(1, 3));
                        mantissa = asn1_ASN1Element.decodeUnsignedBigEndianInteger(this.value.subarray(3));
                        break;
                    }
                    case (0b00000010): {
                        if (this.value.length < 5)
                            throw new ASN1TruncationError("Binary-encoded REAL truncated.");
                        exponent = asn1_ASN1Element.decodeSignedBigEndianInteger(this.value.subarray(1, 4));
                        mantissa = asn1_ASN1Element.decodeUnsignedBigEndianInteger(this.value.subarray(4));
                        break;
                    }
                    case (0b00000011): {
                        if (this.value.length < 3)
                            throw new ASN1TruncationError("Binary-encoded REAL truncated.");
                        let exponentLength = this.value[1];
                        if (this.value.length < (3 + exponentLength))
                            throw new ASN1TruncationError("Binary-encoded REAL truncated.");
                        exponent = asn1_ASN1Element.decodeSignedBigEndianInteger(this.value.subarray(2, (2 + exponentLength)));
                        mantissa = asn1_ASN1Element.decodeUnsignedBigEndianInteger(this.value.subarray((2 + exponentLength)));
                        break;
                    }
                    default:
                        throw new ASN1Error("Impossible binary REAL exponent encoding encountered.");
                }
                return (sign * mantissa * Math.pow(2, scale) * Math.pow(base, exponent));
            }
            default:
                throw new ASN1Error("Impossible REAL format encountered.");
        }
    }
    set utf8String(value) {
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get utf8String() {
        const valueBytes = this.deconstruct("UTF8String");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(valueBytes.buffer);
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        return ret;
    }
    set sequence(value) {
        let encodedElements = [];
        value.forEach(element => {
            encodedElements.push(element.toBytes());
        });
        let totalLength = 0;
        encodedElements.forEach(element => {
            totalLength += element.length;
        });
        const newValue = new Uint8Array(totalLength);
        let currentIndex = 0;
        encodedElements.forEach(element => {
            newValue.set(element, currentIndex);
            currentIndex += element.length;
        });
        this.value = newValue;
        this.construction = 1;
    }
    get sequence() {
        if (this.construction !== 1)
            throw new ASN1ConstructionError("SET or SEQUENCE cannot be primitively constructed.");
        let encodedElements = [];
        if (this.value.length === 0)
            return [];
        let i = 0;
        while (i < this.value.length) {
            const next = new ber_BERElement();
            i += next.fromBytes(this.value.slice(i));
            encodedElements.push(next);
        }
        return encodedElements;
    }
    set set(value) {
        this.sequence = value;
    }
    get set() {
        return this.sequence;
    }
    set numericString(value) {
        for (let i = 0; i < value.length; i++) {
            const characterCode = value.charCodeAt(i);
            if (!((characterCode >= 0x30 && characterCode <= 0x39) || characterCode === 0x20)) {
                throw new ASN1CharactersError("NumericString can only contain characters 0 - 9 and space.");
            }
        }
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get numericString() {
        const valueBytes = this.deconstruct("NumericString");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(valueBytes.buffer);
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        for (let i = 0; i < ret.length; i++) {
            const characterCode = ret.charCodeAt(i);
            if (!((characterCode >= 0x30 && characterCode <= 0x39) || characterCode === 0x20)) {
                throw new ASN1CharactersError("NumericString can only contain characters 0 - 9 and space.");
            }
        }
        return ret;
    }
    set printableString(value) {
        for (let i = 0; i < value.length; i++) {
            if (printableStringCharacters.indexOf(value.charAt(i)) === -1) {
                throw new ASN1CharactersError(`PrintableString can only contain these characters: ${printableStringCharacters}`);
            }
        }
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get printableString() {
        const valueBytes = this.deconstruct("PrintableString");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(valueBytes.buffer);
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        for (let i = 0; i < ret.length; i++) {
            if (printableStringCharacters.indexOf(ret.charAt(i)) === -1) {
                throw new ASN1CharactersError(`PrintableString can only contain these characters: ${printableStringCharacters}`);
            }
        }
        return ret;
    }
    set teletexString(value) {
        this.value = new Uint8Array(value);
    }
    get teletexString() {
        return this.deconstruct("TeletexString");
    }
    set videotexString(value) {
        this.value = new Uint8Array(value);
    }
    get videotexString() {
        return this.deconstruct("VideotexString");
    }
    set ia5String(value) {
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get ia5String() {
        const valueBytes = this.deconstruct("IA5String");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(valueBytes.buffer);
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        return ret;
    }
    set utcTime(value) {
        let year = value.getUTCFullYear().toString();
        year = (year.substring(year.length - 2, year.length));
        const month = (value.getUTCMonth() < 9 ? `0${value.getUTCMonth() + 1}` : `${value.getUTCMonth() + 1}`);
        const day = (value.getUTCDate() < 10 ? `0${value.getUTCDate()}` : `${value.getUTCDate()}`);
        const hour = (value.getUTCHours() < 10 ? `0${value.getUTCHours()}` : `${value.getUTCHours()}`);
        const minute = (value.getUTCMinutes() < 10 ? `0${value.getUTCMinutes()}` : `${value.getUTCMinutes()}`);
        const second = (value.getUTCSeconds() < 10 ? `0${value.getUTCSeconds()}` : `${value.getUTCSeconds()}`);
        const utcString = `${year}${month}${day}${hour}${minute}${second}Z`;
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(utcString);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(utcString, "utf-8");
        }
    }
    get utcTime() {
        const valueBytes = this.deconstruct("UTCTime");
        let dateString = "";
        if (typeof TextEncoder !== "undefined") {
            dateString = (new TextDecoder("utf-8")).decode(valueBytes.buffer);
        }
        else if (typeof Buffer !== "undefined") {
            dateString = (new Buffer(this.value)).toString("utf-8");
        }
        const match = utcTimeRegex.exec(dateString);
        if (match === null)
            throw new ASN1Error("Malformed UTCTime string.");
        if (match.groups === undefined)
            throw new ASN1Error("Malformed UTCTime string.");
        const ret = new Date();
        let year = Number(match.groups.year);
        year = (year < 70 ? (2000 + year) : (1900 + year));
        const month = (Number(match.groups.month) - 1);
        const date = Number(match.groups.date);
        const hours = Number(match.groups.hour);
        const minutes = Number(match.groups.minute);
        const seconds = Number(match.groups.second);
        ber_BERElement.validateDateTime("UTCTime", year, month, date, hours, minutes, seconds);
        ret.setUTCFullYear(year);
        ret.setUTCMonth(month);
        ret.setUTCDate(date);
        ret.setUTCHours(hours);
        ret.setUTCMinutes(minutes);
        ret.setUTCSeconds(seconds);
        return ret;
    }
    set generalizedTime(value) {
        const year = value.getUTCFullYear().toString();
        const month = (value.getUTCMonth() < 9 ? `0${value.getUTCMonth() + 1}` : `${value.getUTCMonth() + 1}`);
        const day = (value.getUTCDate() < 10 ? `0${value.getUTCDate()}` : `${value.getUTCDate()}`);
        const hour = (value.getUTCHours() < 10 ? `0${value.getUTCHours()}` : `${value.getUTCHours()}`);
        const minute = (value.getUTCMinutes() < 10 ? `0${value.getUTCMinutes()}` : `${value.getUTCMinutes()}`);
        const second = (value.getUTCSeconds() < 10 ? `0${value.getUTCSeconds()}` : `${value.getUTCSeconds()}`);
        const timeString = `${year}${month}${day}${hour}${minute}${second}Z`;
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(timeString);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(timeString, "utf-8");
        }
    }
    get generalizedTime() {
        const valueBytes = this.deconstruct("GeneralizedTime");
        let dateString = "";
        if (typeof TextEncoder !== "undefined") {
            dateString = (new TextDecoder("utf-8")).decode(valueBytes.buffer);
        }
        else if (typeof Buffer !== "undefined") {
            dateString = (new Buffer(this.value)).toString("utf-8");
        }
        const match = generalizedTimeRegex.exec(dateString);
        if (match === null)
            throw new ASN1Error("Malformed GeneralizedTime string.");
        if (match.groups === undefined)
            throw new ASN1Error("Malformed GeneralizedTime string.");
        const ret = new Date();
        const year = Number(match.groups.year);
        const month = (Number(match.groups.month) - 1);
        const date = Number(match.groups.date);
        const hours = Number(match.groups.hour);
        const minutes = Number(match.groups.minute);
        const seconds = Number(match.groups.second);
        ber_BERElement.validateDateTime("GeneralizedTime", year, month, date, hours, minutes, seconds);
        ret.setUTCFullYear(year);
        ret.setUTCMonth(month);
        ret.setUTCDate(date);
        ret.setUTCHours(hours);
        ret.setUTCMinutes(minutes);
        ret.setUTCSeconds(seconds);
        return ret;
    }
    set graphicString(value) {
        for (let i = 0; i < value.length; i++) {
            const characterCode = value.charCodeAt(i);
            if (characterCode < 0x20 || characterCode > 0x7E)
                throw new ASN1CharactersError("GraphicString, VisibleString, or ObjectDescriptor " +
                    "can only contain characters between 0x20 and 0x7E.");
        }
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get graphicString() {
        const valueBytes = this.deconstruct("GraphicString, VisibleString, or ObjectDescriptor");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(valueBytes.buffer);
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        for (let i = 0; i < ret.length; i++) {
            const characterCode = ret.charCodeAt(i);
            if (characterCode < 0x20 || characterCode > 0x7E) {
                throw new ASN1CharactersError("GraphicString, VisibleString, or ObjectDescriptor " +
                    "can only contain characters between 0x20 and 0x7E.");
            }
        }
        return ret;
    }
    set visibleString(value) {
        this.graphicString = value;
    }
    get visibleString() {
        return this.graphicString;
    }
    set generalString(value) {
        for (let i = 0; i < value.length; i++) {
            if (value.charCodeAt(i) > 0x7F)
                throw new ASN1CharactersError("GeneralString can only contain ASCII characters.");
        }
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "ascii");
        }
    }
    get generalString() {
        const valueBytes = this.deconstruct("GeneralString");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("windows-1252")).decode(valueBytes.buffer);
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("ascii");
        }
        for (let i = 0; i < ret.length; i++) {
            if (ret.charCodeAt(i) > 0x7F)
                throw new ASN1CharactersError("GeneralString can only contain ASCII characters.");
        }
        return ret;
    }
    set universalString(value) {
        const buf = new Uint8Array(value.length << 2);
        for (let i = 0; i < value.length; i++) {
            buf[(i << 2)] = value.charCodeAt(i) >>> 24;
            buf[(i << 2) + 1] = value.charCodeAt(i) >>> 16;
            buf[(i << 2) + 2] = value.charCodeAt(i) >>> 8;
            buf[(i << 2) + 3] = value.charCodeAt(i);
        }
        this.value = buf;
    }
    get universalString() {
        const valueBytes = this.deconstruct("UniversalString");
        if (valueBytes.length % 4)
            throw new ASN1Error("UniversalString encoded on non-mulitple of four bytes.");
        let ret = "";
        for (let i = 0; i < valueBytes.length; i += 4) {
            ret += String.fromCharCode((valueBytes[i + 0] << 24) +
                (valueBytes[i + 1] << 16) +
                (valueBytes[i + 2] << 8) +
                (valueBytes[i + 3] << 0));
        }
        return ret;
    }
    set bmpString(value) {
        const buf = new Uint8Array(value.length << 1);
        for (let i = 0, strLen = value.length; i < strLen; i++) {
            buf[(i << 1)] = value.charCodeAt(i) >>> 8;
            buf[(i << 1) + 1] = value.charCodeAt(i);
        }
        this.value = buf;
    }
    get bmpString() {
        const valueBytes = this.deconstruct("BMPString");
        if (valueBytes.length % 2)
            throw new ASN1Error("BMPString encoded on non-mulitple of two bytes.");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-16be")).decode(valueBytes.buffer);
        }
        else if (typeof Buffer !== "undefined") {
            const swappedEndianness = new Uint8Array(valueBytes.length);
            for (let i = 0; i < valueBytes.length; i += 2) {
                swappedEndianness[i] = valueBytes[i + 1];
                swappedEndianness[i + 1] = valueBytes[i];
            }
            ret = (new Buffer(swappedEndianness)).toString("utf-16le");
        }
        return ret;
    }
    fromBytes(bytes) {
        if (bytes.length < 2)
            throw new ASN1TruncationError("Tried to decode a BER element that is less than two bytes.");
        if ((this.recursionCount + 1) > ber_BERElement.nestingRecursionLimit)
            throw new ASN1RecursionError();
        let cursor = 0;
        switch (bytes[cursor] & 0b11000000) {
            case (0b00000000):
                this.tagClass = 0;
                break;
            case (0b01000000):
                this.tagClass = 1;
                break;
            case (0b10000000):
                this.tagClass = 2;
                break;
            case (0b11000000):
                this.tagClass = 3;
                break;
            default: this.tagClass = 0;
        }
        this.construction = ((bytes[cursor] & 0b00100000) ?
            1 : 0);
        this.tagNumber = (bytes[cursor] & 0b00011111);
        cursor++;
        if (this.tagNumber >= 31) {
            if (bytes[cursor] === 0b10000000)
                throw new ASN1PaddingError("Leading padding byte on long tag number encoding.");
            this.tagNumber = 0;
            const limit = (((bytes.length - 1) >= 4) ? 4 : (bytes.length - 1));
            while (cursor < limit) {
                if (!(bytes[cursor++] & 0b10000000))
                    break;
            }
            if (bytes[cursor - 1] & 0b10000000) {
                if (limit === bytes.length - 1) {
                    throw new ASN1TruncationError("ASN.1 tag number appears to have been truncated.");
                }
                else
                    throw new ASN1OverflowError("ASN.1 tag number too large.");
            }
            for (let i = 1; i < cursor; i++) {
                this.tagNumber <<= 7;
                this.tagNumber |= (bytes[i] & 0x7F);
            }
            if (this.tagNumber <= 31)
                throw new ASN1Error("ASN.1 tag number could have been encoded in short form.");
        }
        if ((bytes[cursor] & 0b10000000) === 0b10000000) {
            const numberOfLengthOctets = (bytes[cursor] & 0x7F);
            if (numberOfLengthOctets) {
                if (numberOfLengthOctets === 0b01111111)
                    throw new ASN1UndefinedError("Length byte with undefined meaning encountered.");
                if (numberOfLengthOctets > 4)
                    throw new ASN1OverflowError("Element length too long to decode to an integer.");
                if (cursor + numberOfLengthOctets >= bytes.length)
                    throw new ASN1TruncationError("Element length bytes appear to have been truncated.");
                cursor++;
                const lengthNumberOctets = new Uint8Array(4);
                for (let i = numberOfLengthOctets; i > 0; i--) {
                    lengthNumberOctets[(4 - i)] = bytes[(cursor + numberOfLengthOctets - i)];
                }
                let length = 0;
                lengthNumberOctets.forEach(octet => {
                    length <<= 8;
                    length += octet;
                });
                if ((cursor + length) < cursor)
                    throw new ASN1OverflowError("ASN.1 element too large.");
                cursor += (numberOfLengthOctets);
                if ((cursor + length) > bytes.length)
                    throw new ASN1TruncationError("ASN.1 element truncated.");
                this.value = bytes.slice(cursor, (cursor + length));
                return (cursor + length);
            }
            else {
                if (this.construction !== 1)
                    throw new ASN1ConstructionError("Indefinite length ASN.1 element was not of constructed construction.");
                const startOfValue = ++cursor;
                let sentinel = cursor;
                while (sentinel < bytes.length) {
                    const child = new ber_BERElement();
                    child.recursionCount = (this.recursionCount + 1);
                    sentinel += child.fromBytes(bytes.slice(sentinel));
                    if (child.tagClass === 0 &&
                        child.construction === 0 &&
                        child.tagNumber === 0 &&
                        child.value.length === 0)
                        break;
                }
                if (sentinel === bytes.length && (bytes[sentinel - 1] !== 0x00 || bytes[sentinel - 2] !== 0x00))
                    throw new ASN1TruncationError("No END OF CONTENT element found at the end of indefinite length ASN.1 element.");
                this.value = bytes.slice(startOfValue, (sentinel - 2));
                return sentinel;
            }
        }
        else {
            const length = (bytes[cursor++] & 0x7F);
            if ((cursor + length) > bytes.length)
                throw new ASN1TruncationError("ASN.1 element was truncated.");
            this.value = bytes.slice(cursor, (cursor + length));
            return (cursor + length);
        }
    }
    toBytes() {
        let tagBytes = [0x00];
        tagBytes[0] |= (this.tagClass << 6);
        tagBytes[0] |= (this.construction << 5);
        if (this.tagNumber < 31) {
            tagBytes[0] |= this.tagNumber;
        }
        else {
            tagBytes[0] |= 0b00011111;
            let number = this.tagNumber;
            let encodedNumber = [];
            while (number !== 0) {
                encodedNumber.unshift(number & 0x7F);
                number >>>= 7;
                encodedNumber[0] |= 0b10000000;
            }
            encodedNumber[encodedNumber.length - 1] &= 0b01111111;
            tagBytes = tagBytes.concat(encodedNumber);
        }
        let lengthOctets = [0x00];
        switch (ber_BERElement.lengthEncodingPreference) {
            case (0): {
                if (this.value.length < 127) {
                    lengthOctets = [this.value.length];
                }
                else {
                    let length = this.value.length;
                    lengthOctets = [0, 0, 0, 0];
                    for (let i = 0; i < 4; i++) {
                        lengthOctets[i] = ((length >>> ((3 - i) << 3)) & 0xFF);
                    }
                    let startOfNonPadding = 0;
                    for (let i = 0; i < (lengthOctets.length - 1); i++) {
                        if (lengthOctets[i] === 0x00)
                            startOfNonPadding++;
                    }
                    lengthOctets = lengthOctets.slice(startOfNonPadding);
                    lengthOctets.unshift(0b10000000 | lengthOctets.length);
                }
                break;
            }
            case (1): {
                lengthOctets = [0b10000000];
                break;
            }
            default:
                throw new ASN1UndefinedError("Invalid LengthEncodingPreference encountered!");
        }
        const ret = new Uint8Array(tagBytes.length +
            lengthOctets.length +
            this.value.length +
            (ber_BERElement.lengthEncodingPreference === 1 ? 2 : 0));
        ret.set(tagBytes, 0);
        ret.set(lengthOctets, tagBytes.length);
        ret.set(this.value, (tagBytes.length + lengthOctets.length));
        return ret;
    }
    deconstruct(dataType) {
        if (this.construction === 0) {
            return new Uint8Array(this.value);
        }
        else {
            if ((this.recursionCount + 1) > ber_BERElement.nestingRecursionLimit)
                throw new ASN1RecursionError();
            let appendy = [];
            const substrings = this.sequence;
            substrings.forEach(substring => {
                if (substring.tagClass !== this.tagClass)
                    throw new ASN1ConstructionError(`Invalid tag class in recursively-encoded ${dataType}.`);
                if (substring.tagNumber !== this.tagNumber)
                    throw new ASN1ConstructionError(`Invalid tag class in recursively-encoded ${dataType}.`);
                substring.recursionCount = (this.recursionCount + 1);
                appendy = appendy.concat(substring.deconstruct(dataType));
            });
            let totalLength = 0;
            appendy.forEach(substring => {
                totalLength += substring.length;
            });
            const whole = new Uint8Array(totalLength);
            let currentIndex = 0;
            appendy.forEach(substring => {
                whole.set(substring, currentIndex);
                currentIndex += substring.length;
            });
            return whole;
        }
    }
}
ber_BERElement.lengthEncodingPreference = 0;

// CONCATENATED MODULE: ./source/codecs/der.ts




class der_DERElement extends x690_X690Element {
    set boolean(value) {
        this.value = new Uint8Array(1);
        this.value[0] = (value ? 0xFF : 0x00);
    }
    get boolean() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("BOOLEAN cannot be constructed.");
        if (this.value.length !== 1)
            throw new ASN1SizeError("BOOLEAN not one byte");
        if ((this.value[0] !== 0x00) && (this.value[0] !== 0xFF))
            throw new ASN1Error("BOOLEAN must be encoded as 0xFF or 0x00.");
        return (this.value[0] !== 0);
    }
    set bitString(value) {
        if (value.length === 0)
            this.value = new Uint8Array(0);
        let pre = [];
        pre.length = ((value.length >>> 3) + ((value.length % 8) ? 1 : 0)) + 1;
        for (let i = 0; i < value.length; i++) {
            if (value[i] === false)
                continue;
            pre[((i >>> 3) + 1)] |= (0b10000000 >>> (i % 8));
        }
        pre[0] = (8 - (value.length % 8));
        if (pre[0] === 8)
            pre[0] = 0;
        this.value = new Uint8Array(pre);
    }
    get bitString() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("BIT STRING cannot be constructed.");
        if (this.value.length === 0)
            throw new ASN1Error("ASN.1 BIT STRING cannot be encoded on zero bytes!");
        if (this.value.length === 1 && this.value[0] !== 0)
            throw new ASN1Error("ASN.1 BIT STRING encoded with deceptive first byte!");
        if (this.value[0] > 7)
            throw new ASN1Error("First byte of an ASN.1 BIT STRING must be <= 7!");
        let ret = [];
        for (let i = 1; i < this.value.length; i++) {
            ret = ret.concat([
                (this.value[i] & 0b10000000 ? true : false),
                (this.value[i] & 0b01000000 ? true : false),
                (this.value[i] & 0b00100000 ? true : false),
                (this.value[i] & 0b00010000 ? true : false),
                (this.value[i] & 0b00001000 ? true : false),
                (this.value[i] & 0b00000100 ? true : false),
                (this.value[i] & 0b00000010 ? true : false),
                (this.value[i] & 0b00000001 ? true : false)
            ]);
        }
        ret.slice((ret.length - this.value[0])).forEach(bit => {
            if (bit)
                throw new ASN1Error("BIT STRING had a trailing set bit.");
        });
        ret.length -= this.value[0];
        return ret;
    }
    set octetString(value) {
        this.value = new Uint8Array(value);
    }
    get octetString() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("OCTET STRING cannot be constructed.");
        return new Uint8Array(this.value);
    }
    set objectDescriptor(value) {
        this.graphicString = value;
    }
    get objectDescriptor() {
        return this.graphicString;
    }
    set real(value) {
        if (value === 0.0) {
            this.value = new Uint8Array(0);
            return;
        }
        else if (isNaN(value)) {
            this.value = new Uint8Array([66]);
            return;
        }
        else if (value === -0.0) {
            this.value = new Uint8Array([67]);
            return;
        }
        else if (value === Infinity) {
            this.value = new Uint8Array([64]);
            return;
        }
        else if (value === -Infinity) {
            this.value = new Uint8Array([65]);
            return;
        }
        let valueString = value.toFixed(7);
        valueString = (String.fromCharCode(0b00000011) + valueString);
        this.value = (new TextEncoder()).encode(valueString);
    }
    get real() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("REAL cannot be constructed.");
        if (this.value.length === 0)
            return 0.0;
        switch (this.value[0] & 0b11000000) {
            case (0b01000000): {
                if (this.value[0] === 66)
                    return NaN;
                if (this.value[0] === 67)
                    return -0.0;
                if (this.value[0] === 64)
                    return Infinity;
                if (this.value[0] === 65)
                    return -Infinity;
                throw new ASN1UndefinedError("Unrecognized special REAL value!");
            }
            case (0b00000000): {
                let realString;
                if (typeof TextEncoder !== "undefined") {
                    realString = (new TextDecoder("utf-8")).decode(this.value.slice(1));
                }
                else if (typeof Buffer !== "undefined") {
                    realString = (new Buffer(this.value.slice(1))).toString("utf-8");
                }
                else {
                    throw new ASN1Error("No ability to decode bytes to string!");
                }
                switch (this.value[0] & 0b00111111) {
                    case 1:
                    case 2:
                        throw new ASN1Error("DER prohibits NR1 and NR2 Base-10 REAL");
                    case 3: {
                        if (!nr3Regex.test(realString))
                            throw new ASN1Error("Malformed NR3 Base-10 REAL");
                        return parseFloat(realString.replace(",", "."));
                    }
                    default:
                        throw new ASN1UndefinedError("Undefined Base-10 REAL encoding.");
                }
            }
            case (0b10000000):
            case (0b11000000): {
                const sign = ((this.value[0] & 0b01000000) ? -1 : 1);
                const base = ((flag) => {
                    switch (flag) {
                        case (0): return 2;
                        case (16): return 8;
                        case (32): return 16;
                        default:
                            throw new ASN1Error("Impossible REAL encoding base encountered.");
                    }
                })(this.value[0] & 0b00110000);
                const scale = ((flag) => {
                    switch (flag) {
                        case (0): return 0;
                        case (4): return 1;
                        case (8): return 2;
                        case (12): return 3;
                        default:
                            throw new ASN1Error("Impossible REAL encoding scale encountered.");
                    }
                })(this.value[0] & 0b00001100);
                let exponent;
                let mantissa;
                switch (this.value[0] & 0b00000011) {
                    case (0b00000000): {
                        if (this.value.length < 3)
                            throw new ASN1TruncationError("Binary-encoded REAL truncated.");
                        exponent = asn1_ASN1Element.decodeSignedBigEndianInteger(this.value.subarray(1, 2));
                        mantissa = asn1_ASN1Element.decodeUnsignedBigEndianInteger(this.value.subarray(2));
                        break;
                    }
                    case (0b00000001): {
                        if (this.value.length < 4)
                            throw new ASN1TruncationError("Binary-encoded REAL truncated.");
                        exponent = asn1_ASN1Element.decodeSignedBigEndianInteger(this.value.subarray(1, 3));
                        mantissa = asn1_ASN1Element.decodeUnsignedBigEndianInteger(this.value.subarray(3));
                        if (exponent <= 127 && exponent >= -128)
                            throw new ASN1Error("DER-encoded binary-encoded REAL could have encoded exponent on fewer octets.");
                        break;
                    }
                    case (0b00000010):
                    case (0b00000011): {
                        throw new ASN1Error("DER-encoded binary REAL encoded in a way that would either overflow or encode on too many octets.");
                    }
                    default:
                        throw new ASN1Error("Impossible binary REAL exponent encoding encountered.");
                }
                if (mantissa !== 0 && !(mantissa % 2))
                    throw new ASN1Error("DER-encoded REAL may not have an even non-zero mantissa.");
                return (sign * mantissa * Math.pow(2, scale) * Math.pow(base, exponent));
            }
            default:
                throw new ASN1Error("Impossible REAL format encountered.");
        }
    }
    set utf8String(value) {
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get utf8String() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("UTF8String cannot be constructed.");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(new Uint8Array(this.value));
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        return ret;
    }
    set sequence(value) {
        let encodedElements = [];
        value.forEach(element => {
            encodedElements.push(element.toBytes());
        });
        let totalLength = 0;
        encodedElements.forEach(element => {
            totalLength += element.length;
        });
        const newValue = new Uint8Array(totalLength);
        let currentIndex = 0;
        encodedElements.forEach(element => {
            newValue.set(element, currentIndex);
            currentIndex += element.length;
        });
        this.value = newValue;
        this.construction = 1;
    }
    get sequence() {
        if (this.construction !== 1)
            throw new ASN1ConstructionError("SET or SEQUENCE cannot be primitively constructed.");
        let encodedElements = [];
        if (this.value.length === 0)
            return [];
        let i = 0;
        while (i < this.value.length) {
            const next = new der_DERElement();
            i += next.fromBytes(this.value.slice(i));
            encodedElements.push(next);
        }
        return encodedElements;
    }
    set set(value) {
        this.sequence = value;
    }
    get set() {
        return this.sequence;
    }
    set numericString(value) {
        for (let i = 0; i < value.length; i++) {
            const characterCode = value.charCodeAt(i);
            if (!((characterCode >= 0x30 && characterCode <= 0x39) || characterCode === 0x20)) {
                throw new ASN1CharactersError("NumericString can only contain characters 0 - 9 and space.");
            }
        }
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get numericString() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("NumericString cannot be constructed.");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(new Uint8Array(this.value));
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        for (let i = 0; i < ret.length; i++) {
            const characterCode = ret.charCodeAt(i);
            if (!((characterCode >= 0x30 && characterCode <= 0x39) || characterCode === 0x20)) {
                throw new ASN1CharactersError("NumericString can only contain characters 0 - 9 and space.");
            }
        }
        return ret;
    }
    set printableString(value) {
        for (let i = 0; i < value.length; i++) {
            if (printableStringCharacters.indexOf(value.charAt(i)) === -1) {
                throw new ASN1CharactersError(`PrintableString can only contain these characters: ${printableStringCharacters}`);
            }
        }
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get printableString() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("PrintableString cannot be constructed.");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(new Uint8Array(this.value));
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        for (let i = 0; i < ret.length; i++) {
            if (printableStringCharacters.indexOf(ret.charAt(i)) === -1) {
                throw new ASN1CharactersError(`PrintableString can only contain these characters: ${printableStringCharacters}`);
            }
        }
        return ret;
    }
    set teletexString(value) {
        this.value = new Uint8Array(value);
    }
    get teletexString() {
        return this.octetString;
    }
    set videotexString(value) {
        this.value = new Uint8Array(value);
    }
    get videotexString() {
        return this.octetString;
    }
    set ia5String(value) {
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get ia5String() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("IA5String cannot be constructed.");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(new Uint8Array(this.value));
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        return ret;
    }
    set utcTime(value) {
        let year = value.getUTCFullYear().toString();
        year = (year.substring(year.length - 2, year.length));
        const month = (value.getUTCMonth() < 9 ? `0${value.getUTCMonth() + 1}` : `${value.getUTCMonth() + 1}`);
        const day = (value.getUTCDate() < 10 ? `0${value.getUTCDate()}` : `${value.getUTCDate()}`);
        const hour = (value.getUTCHours() < 10 ? `0${value.getUTCHours()}` : `${value.getUTCHours()}`);
        const minute = (value.getUTCMinutes() < 10 ? `0${value.getUTCMinutes()}` : `${value.getUTCMinutes()}`);
        const second = (value.getUTCSeconds() < 10 ? `0${value.getUTCSeconds()}` : `${value.getUTCSeconds()}`);
        const utcString = `${year}${month}${day}${hour}${minute}${second}Z`;
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(utcString);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(utcString, "utf-8");
        }
    }
    get utcTime() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("UTCTime cannot be constructed.");
        let dateString = "";
        if (typeof TextEncoder !== "undefined") {
            dateString = (new TextDecoder("utf-8")).decode(new Uint8Array(this.value));
        }
        else if (typeof Buffer !== "undefined") {
            dateString = (new Buffer(this.value)).toString("utf-8");
        }
        const match = utcTimeRegex.exec(dateString);
        if (match === null)
            throw new ASN1Error("Malformed UTCTime string.");
        if (match.groups === undefined)
            throw new ASN1Error("Malformed UTCTime string.");
        const ret = new Date();
        let year = Number(match.groups.year);
        year = (year < 70 ? (2000 + year) : (1900 + year));
        const month = (Number(match.groups.month) - 1);
        const date = Number(match.groups.date);
        const hours = Number(match.groups.hour);
        const minutes = Number(match.groups.minute);
        const seconds = Number(match.groups.second);
        der_DERElement.validateDateTime("UTCTime", year, month, date, hours, minutes, seconds);
        ret.setUTCFullYear(year);
        ret.setUTCMonth(month);
        ret.setUTCDate(date);
        ret.setUTCHours(hours);
        ret.setUTCMinutes(minutes);
        ret.setUTCSeconds(seconds);
        return ret;
    }
    set generalizedTime(value) {
        const year = value.getUTCFullYear().toString();
        const month = (value.getUTCMonth() < 9 ? `0${value.getUTCMonth() + 1}` : `${value.getUTCMonth() + 1}`);
        const day = (value.getUTCDate() < 10 ? `0${value.getUTCDate()}` : `${value.getUTCDate()}`);
        const hour = (value.getUTCHours() < 10 ? `0${value.getUTCHours()}` : `${value.getUTCHours()}`);
        const minute = (value.getUTCMinutes() < 10 ? `0${value.getUTCMinutes()}` : `${value.getUTCMinutes()}`);
        const second = (value.getUTCSeconds() < 10 ? `0${value.getUTCSeconds()}` : `${value.getUTCSeconds()}`);
        const timeString = `${year}${month}${day}${hour}${minute}${second}Z`;
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(timeString);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(timeString, "utf-8");
        }
    }
    get generalizedTime() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("GeneralizedTime cannot be constructed.");
        let dateString = "";
        if (typeof TextEncoder !== "undefined") {
            dateString = (new TextDecoder("utf-8")).decode(new Uint8Array(this.value));
        }
        else if (typeof Buffer !== "undefined") {
            dateString = (new Buffer(this.value)).toString("utf-8");
        }
        const match = generalizedTimeRegex.exec(dateString);
        if (match === null)
            throw new ASN1Error("Malformed GeneralizedTime string.");
        if (match.groups === undefined)
            throw new ASN1Error("Malformed GeneralizedTime string.");
        const ret = new Date();
        const year = Number(match.groups.year);
        const month = (Number(match.groups.month) - 1);
        const date = Number(match.groups.date);
        const hours = Number(match.groups.hour);
        const minutes = Number(match.groups.minute);
        const seconds = Number(match.groups.second);
        der_DERElement.validateDateTime("GeneralizedTime", year, month, date, hours, minutes, seconds);
        ret.setUTCFullYear(year);
        ret.setUTCMonth(month);
        ret.setUTCDate(date);
        ret.setUTCHours(hours);
        ret.setUTCMinutes(minutes);
        ret.setUTCSeconds(seconds);
        return ret;
    }
    set graphicString(value) {
        for (let i = 0; i < value.length; i++) {
            const characterCode = value.charCodeAt(i);
            if (characterCode < 0x20 || characterCode > 0x7E)
                throw new ASN1CharactersError("GraphicString, VisibleString, or ObjectDescriptor " +
                    "can only contain characters between 0x20 and 0x7E.");
        }
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "utf-8");
        }
    }
    get graphicString() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("GraphicString cannot be constructed.");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-8")).decode(new Uint8Array(this.value));
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("utf-8");
        }
        for (let i = 0; i < ret.length; i++) {
            const characterCode = ret.charCodeAt(i);
            if (characterCode < 0x20 || characterCode > 0x7E) {
                throw new ASN1CharactersError("GraphicString, VisibleString, or ObjectDescriptor " +
                    "can only contain characters between 0x20 and 0x7E.");
            }
        }
        return ret;
    }
    set visibleString(value) {
        this.graphicString = value;
    }
    get visibleString() {
        return this.graphicString;
    }
    set generalString(value) {
        for (let i = 0; i < value.length; i++) {
            if (value.charCodeAt(i) > 0x7F)
                throw new ASN1CharactersError("GeneralString can only contain ASCII characters.");
        }
        if (typeof TextEncoder !== "undefined") {
            this.value = (new TextEncoder()).encode(value);
        }
        else if (typeof Buffer !== "undefined") {
            this.value = Buffer.from(value, "ascii");
        }
    }
    get generalString() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("GeneralString cannot be constructed.");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("windows-1252")).decode(new Uint8Array(this.value));
        }
        else if (typeof Buffer !== "undefined") {
            ret = (new Buffer(this.value)).toString("ascii");
        }
        for (let i = 0; i < ret.length; i++) {
            if (ret.charCodeAt(i) > 0x7F)
                throw new ASN1CharactersError("GeneralString can only contain ASCII characters.");
        }
        return ret;
    }
    set universalString(value) {
        const buf = new Uint8Array(value.length << 2);
        for (let i = 0; i < value.length; i++) {
            buf[(i << 2)] = value.charCodeAt(i) >>> 24;
            buf[(i << 2) + 1] = value.charCodeAt(i) >>> 16;
            buf[(i << 2) + 2] = value.charCodeAt(i) >>> 8;
            buf[(i << 2) + 3] = value.charCodeAt(i);
        }
        this.value = buf;
    }
    get universalString() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("UniversalString cannot be constructed.");
        if (this.value.length % 4)
            throw new ASN1Error("UniversalString encoded on non-mulitple of four bytes.");
        let ret = "";
        for (let i = 0; i < this.value.length; i += 4) {
            ret += String.fromCharCode((this.value[i + 0] << 24) +
                (this.value[i + 1] << 16) +
                (this.value[i + 2] << 8) +
                (this.value[i + 3] << 0));
        }
        return ret;
    }
    set bmpString(value) {
        const buf = new Uint8Array(value.length << 1);
        for (let i = 0, strLen = value.length; i < strLen; i++) {
            buf[(i << 1)] = value.charCodeAt(i) >>> 8;
            buf[(i << 1) + 1] = value.charCodeAt(i);
        }
        this.value = buf;
    }
    get bmpString() {
        if (this.construction !== 0)
            throw new ASN1ConstructionError("BMPString cannot be constructed.");
        if (this.value.length % 2)
            throw new ASN1Error("BMPString encoded on non-mulitple of two bytes.");
        let ret = "";
        if (typeof TextEncoder !== "undefined") {
            ret = (new TextDecoder("utf-16be")).decode(new Uint8Array(this.value));
        }
        else if (typeof Buffer !== "undefined") {
            const swappedEndianness = new Uint8Array(this.value.length);
            for (let i = 0; i < this.value.length; i += 2) {
                swappedEndianness[i] = this.value[i + 1];
                swappedEndianness[i + 1] = this.value[i];
            }
            ret = (new Buffer(swappedEndianness)).toString("utf-16le");
        }
        return ret;
    }
    constructor(tagClass = 0, construction = 0, tagNumber = 0) {
        super();
        this.tagClass = tagClass;
        this.construction = construction;
        this.tagNumber = tagNumber;
        this.value = new Uint8Array(0);
    }
    fromBytes(bytes) {
        if (bytes.length < 2)
            throw new ASN1TruncationError("Tried to decode a DER element that is less than two bytes.");
        if ((this.recursionCount + 1) > der_DERElement.nestingRecursionLimit)
            throw new ASN1RecursionError();
        let cursor = 0;
        switch (bytes[cursor] & 0b11000000) {
            case (0b00000000):
                this.tagClass = 0;
                break;
            case (0b01000000):
                this.tagClass = 1;
                break;
            case (0b10000000):
                this.tagClass = 2;
                break;
            case (0b11000000):
                this.tagClass = 3;
                break;
            default: this.tagClass = 0;
        }
        this.construction = ((bytes[cursor] & 0b00100000) ?
            1 : 0);
        this.tagNumber = (bytes[cursor] & 0b00011111);
        cursor++;
        if (this.tagNumber >= 31) {
            if (bytes[cursor] === 0b10000000)
                throw new ASN1PaddingError("Leading padding byte on long tag number encoding.");
            this.tagNumber = 0;
            const limit = (((bytes.length - 1) >= 4) ? 4 : (bytes.length - 1));
            while (cursor < limit) {
                if (!(bytes[cursor++] & 0b10000000))
                    break;
            }
            if (bytes[cursor - 1] & 0b10000000) {
                if (limit === bytes.length - 1) {
                    throw new ASN1TruncationError("ASN.1 tag number appears to have been truncated.");
                }
                else
                    throw new ASN1OverflowError("ASN.1 tag number too large.");
            }
            for (let i = 1; i < cursor; i++) {
                this.tagNumber <<= 7;
                this.tagNumber |= (bytes[i] & 0x7F);
            }
            if (this.tagNumber <= 31)
                throw new ASN1Error("ASN.1 tag number could have been encoded in short form.");
        }
        if ((bytes[cursor] & 0b10000000) === 0b10000000) {
            const numberOfLengthOctets = (bytes[cursor] & 0x7F);
            if (numberOfLengthOctets === 0b01111111)
                throw new ASN1UndefinedError("Length byte with undefined meaning encountered.");
            if (numberOfLengthOctets > 4)
                throw new ASN1OverflowError("Element length too long to decode to an integer.");
            if (cursor + numberOfLengthOctets >= bytes.length)
                throw new ASN1TruncationError("Element length bytes appear to have been truncated.");
            cursor++;
            const lengthNumberOctets = new Uint8Array(4);
            for (let i = numberOfLengthOctets; i > 0; i--) {
                lengthNumberOctets[(4 - i)] = bytes[(cursor + numberOfLengthOctets - i)];
            }
            let length = 0;
            lengthNumberOctets.forEach(octet => {
                length <<= 8;
                length += octet;
            });
            if ((cursor + length) < cursor)
                throw new ASN1OverflowError("ASN.1 element too large.");
            cursor += (numberOfLengthOctets);
            if ((cursor + length) > bytes.length)
                throw new ASN1TruncationError("ASN.1 element truncated.");
            if (((length <= 127 && length >= -128) && numberOfLengthOctets > 1) ||
                ((length <= 32767 && length >= -32768) && numberOfLengthOctets > 2) ||
                ((length <= 8388607 && length >= -8388608) && numberOfLengthOctets > 3))
                throw new ASN1PaddingError("DER-encoded long-form length encoded on more octets than necessary");
            this.value = bytes.slice(cursor, (cursor + length));
            return (cursor + length);
        }
        else {
            const length = (bytes[cursor++] & 0x7F);
            if ((cursor + length) > bytes.length)
                throw new ASN1TruncationError("ASN.1 element was truncated.");
            this.value = bytes.slice(cursor, (cursor + length));
            return (cursor + length);
        }
    }
    toBytes() {
        let tagBytes = [0x00];
        tagBytes[0] |= (this.tagClass << 6);
        tagBytes[0] |= (this.construction << 5);
        if (this.tagNumber < 31) {
            tagBytes[0] |= this.tagNumber;
        }
        else {
            tagBytes[0] |= 0b00011111;
            let number = this.tagNumber;
            let encodedNumber = [];
            while (number !== 0) {
                encodedNumber.unshift(number & 0x7F);
                number >>>= 7;
                encodedNumber[0] |= 0b10000000;
            }
            encodedNumber[encodedNumber.length - 1] &= 0b01111111;
            tagBytes = tagBytes.concat(encodedNumber);
        }
        let lengthOctets = [0x00];
        if (this.value.length < 127) {
            lengthOctets = [this.value.length];
        }
        else {
            let length = this.value.length;
            lengthOctets = [0, 0, 0, 0];
            for (let i = 0; i < 4; i++) {
                lengthOctets[i] = ((length >>> ((3 - i) << 3)) & 0xFF);
            }
            let startOfNonPadding = 0;
            for (let i = 0; i < (lengthOctets.length - 1); i++) {
                if (lengthOctets[i] === 0x00)
                    startOfNonPadding++;
            }
            lengthOctets = lengthOctets.slice(startOfNonPadding);
            lengthOctets.unshift(0b10000000 | lengthOctets.length);
        }
        const ret = new Uint8Array(tagBytes.length +
            lengthOctets.length +
            this.value.length);
        ret.set(tagBytes, 0);
        ret.set(lengthOctets, tagBytes.length);
        ret.set(this.value, (tagBytes.length + lengthOctets.length));
        return ret;
    }
}

// CONCATENATED MODULE: ./source/index.ts
/* concated harmony reexport ASN1Element */__webpack_require__.d(__webpack_exports__, "ASN1Element", function() { return asn1_ASN1Element; });
/* concated harmony reexport BERElement */__webpack_require__.d(__webpack_exports__, "BERElement", function() { return ber_BERElement; });
/* concated harmony reexport DERElement */__webpack_require__.d(__webpack_exports__, "DERElement", function() { return der_DERElement; });
/* concated harmony reexport ASN1Error */__webpack_require__.d(__webpack_exports__, "ASN1Error", function() { return ASN1Error; });
/* concated harmony reexport ASN1NotImplementedError */__webpack_require__.d(__webpack_exports__, "ASN1NotImplementedError", function() { return ASN1NotImplementedError; });
/* concated harmony reexport ASN1RecursionError */__webpack_require__.d(__webpack_exports__, "ASN1RecursionError", function() { return ASN1RecursionError; });
/* concated harmony reexport ASN1TruncationError */__webpack_require__.d(__webpack_exports__, "ASN1TruncationError", function() { return ASN1TruncationError; });
/* concated harmony reexport ASN1OverflowError */__webpack_require__.d(__webpack_exports__, "ASN1OverflowError", function() { return ASN1OverflowError; });
/* concated harmony reexport ASN1SizeError */__webpack_require__.d(__webpack_exports__, "ASN1SizeError", function() { return ASN1SizeError; });
/* concated harmony reexport ASN1PaddingError */__webpack_require__.d(__webpack_exports__, "ASN1PaddingError", function() { return ASN1PaddingError; });
/* concated harmony reexport ASN1UndefinedError */__webpack_require__.d(__webpack_exports__, "ASN1UndefinedError", function() { return ASN1UndefinedError; });
/* concated harmony reexport ASN1CharactersError */__webpack_require__.d(__webpack_exports__, "ASN1CharactersError", function() { return ASN1CharactersError; });
/* concated harmony reexport ASN1ConstructionError */__webpack_require__.d(__webpack_exports__, "ASN1ConstructionError", function() { return ASN1ConstructionError; });
/* concated harmony reexport ObjectIdentifier */__webpack_require__.d(__webpack_exports__, "ObjectIdentifier", function() { return ObjectIdentifier; });
/* concated harmony reexport MAX_UINT_32 */__webpack_require__.d(__webpack_exports__, "MAX_UINT_32", function() { return MAX_UINT_32; });
/* concated harmony reexport MIN_UINT_32 */__webpack_require__.d(__webpack_exports__, "MIN_UINT_32", function() { return MIN_UINT_32; });
/* concated harmony reexport MAX_SINT_32 */__webpack_require__.d(__webpack_exports__, "MAX_SINT_32", function() { return MAX_SINT_32; });
/* concated harmony reexport MIN_SINT_32 */__webpack_require__.d(__webpack_exports__, "MIN_SINT_32", function() { return MIN_SINT_32; });
/* concated harmony reexport ASN1TagClass */__webpack_require__.d(__webpack_exports__, "ASN1TagClass", function() { return ASN1TagClass; });
/* concated harmony reexport ASN1Construction */__webpack_require__.d(__webpack_exports__, "ASN1Construction", function() { return ASN1Construction; });
/* concated harmony reexport LengthEncodingPreference */__webpack_require__.d(__webpack_exports__, "LengthEncodingPreference", function() { return LengthEncodingPreference; });
/* concated harmony reexport ASN1SpecialRealValue */__webpack_require__.d(__webpack_exports__, "ASN1SpecialRealValue", function() { return ASN1SpecialRealValue; });
/* concated harmony reexport ASN1RealEncodingBase */__webpack_require__.d(__webpack_exports__, "ASN1RealEncodingBase", function() { return ASN1RealEncodingBase; });
/* concated harmony reexport ASN1RealEncodingScale */__webpack_require__.d(__webpack_exports__, "ASN1RealEncodingScale", function() { return ASN1RealEncodingScale; });
/* concated harmony reexport ASN1UniversalType */__webpack_require__.d(__webpack_exports__, "ASN1UniversalType", function() { return ASN1UniversalType; });
/* concated harmony reexport printableStringCharacters */__webpack_require__.d(__webpack_exports__, "printableStringCharacters", function() { return printableStringCharacters; });
/* concated harmony reexport utcTimeRegex */__webpack_require__.d(__webpack_exports__, "utcTimeRegex", function() { return utcTimeRegex; });
/* concated harmony reexport distinguishedUTCTimeRegex */__webpack_require__.d(__webpack_exports__, "distinguishedUTCTimeRegex", function() { return distinguishedUTCTimeRegex; });
/* concated harmony reexport generalizedTimeRegex */__webpack_require__.d(__webpack_exports__, "generalizedTimeRegex", function() { return generalizedTimeRegex; });
/* concated harmony reexport distinguishedGeneralizedTimeRegex */__webpack_require__.d(__webpack_exports__, "distinguishedGeneralizedTimeRegex", function() { return distinguishedGeneralizedTimeRegex; });
/* concated harmony reexport nr1Regex */__webpack_require__.d(__webpack_exports__, "nr1Regex", function() { return nr1Regex; });
/* concated harmony reexport nr2Regex */__webpack_require__.d(__webpack_exports__, "nr2Regex", function() { return nr2Regex; });
/* concated harmony reexport nr3Regex */__webpack_require__.d(__webpack_exports__, "nr3Regex", function() { return nr3Regex; });
/* concated harmony reexport canonicalNR3Regex */__webpack_require__.d(__webpack_exports__, "canonicalNR3Regex", function() { return canonicalNR3Regex; });
/* concated harmony reexport distinguishedNR3Regex */__webpack_require__.d(__webpack_exports__, "distinguishedNR3Regex", function() { return distinguishedNR3Regex; });
/* concated harmony reexport CANONICAL_TAG_CLASS_ORDERING */__webpack_require__.d(__webpack_exports__, "CANONICAL_TAG_CLASS_ORDERING", function() { return CANONICAL_TAG_CLASS_ORDERING; });








/***/ })
/******/ ]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./source/errors.ts
class X509Error extends Error {
    constructor(m) {
        super(m);
    }
}

// EXTERNAL MODULE: ./node_modules/asn1-ts/dist/node/asn1.js
var asn1 = __webpack_require__(0);

// CONCATENATED MODULE: ./source/AttributeCertificateDefinitions/index.ts

const attributeCertificateDefinitionsOID = new asn1["ObjectIdentifier"]([2, 5, 1, 32]);

// CONCATENATED MODULE: ./source/AuthenticationFramework/AlgorithmIdentifier.ts


class AlgorithmIdentifier_AlgorithmIdentifier {
    constructor(algorithm, parameters) {
        this.algorithm = algorithm;
        this.parameters = parameters;
    }
    static fromElement(value) {
        const algorithmIdentifierElements = value.sequence;
        if (algorithmIdentifierElements.length !== 2)
            throw new X509Error("Invalid number of elements in AlgorithmIdentifier");
        switch (algorithmIdentifierElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on AlgorithmIdentifier.algorithm");
            case -2: throw new X509Error("Invalid construction on AlgorithmIdentifier.algorithm");
            case -3: throw new X509Error("Invalid tag number on AlgorithmIdentifier.algorithm");
            default: throw new X509Error("Undefined error when validating AlgorithmIdentifier.algorithm tag");
        }
        return new AlgorithmIdentifier_AlgorithmIdentifier(algorithmIdentifierElements[0].objectIdentifier, algorithmIdentifierElements[1]);
    }
    toElement() {
        if (this.algorithm === undefined)
            throw new X509Error("Algorithm is undefined");
        const algorithmElement = new asn1["DERElement"]();
        algorithmElement.tagNumber = 6;
        algorithmElement.objectIdentifier = this.algorithm;
        const algorithmIdentifierElement = new asn1["DERElement"]();
        algorithmIdentifierElement.tagClass = 0;
        algorithmIdentifierElement.construction = 1;
        algorithmIdentifierElement.tagNumber = 16;
        if (this.parameters === undefined) {
            algorithmIdentifierElement.sequence = [algorithmElement];
        }
        else {
            algorithmIdentifierElement.sequence = [algorithmElement, this.parameters];
        }
        return algorithmIdentifierElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return AlgorithmIdentifier_AlgorithmIdentifier.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/AuthenticationFramework/Validity.ts


class Validity_Validity {
    constructor(notBefore, notAfter) {
        this.notBefore = notBefore;
        this.notAfter = notAfter;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on validity");
            case -2: throw new X509Error("Invalid construction on validity");
            case -3: throw new X509Error("Invalid tag number on validity");
            default: throw new X509Error("Undefined error when validating validity tag");
        }
        const validityElements = value.sequence;
        if (validityElements.length !== 2)
            throw new X509Error("validity contained more than two ASN.1 elements");
        switch (validityElements[0].validateTag([0], [0], [23, 24])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on validity.notBefore");
            case -2: throw new X509Error("Invalid construction on validity.notBefore");
            case -3: throw new X509Error("Invalid tag number on validity.notBefore");
            default: throw new X509Error("Undefined error when validating validity.notBefore tag");
        }
        switch (validityElements[1].validateTag([0], [0], [23, 24])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on validity.notBefore");
            case -2: throw new X509Error("Invalid construction on validity.notBefore");
            case -3: throw new X509Error("Invalid tag number on validity.notBefore");
            default: throw new X509Error("Undefined error when validating validity.notBefore tag");
        }
        return new Validity_Validity((validityElements[0].tagNumber === 24) ?
            validityElements[0].generalizedTime : validityElements[0].utcTime, (validityElements[1].tagNumber === 24) ?
            validityElements[1].generalizedTime : validityElements[1].utcTime);
    }
    toElement() {
        const notBeforeElement = new asn1["DERElement"]();
        notBeforeElement.tagNumber = 24;
        notBeforeElement.generalizedTime = this.notBefore;
        const notAfterElement = new asn1["DERElement"]();
        notAfterElement.tagNumber = 24;
        notAfterElement.generalizedTime = this.notBefore;
        const validityElement = new asn1["DERElement"]();
        validityElement.tagClass = 0;
        validityElement.construction = 1;
        validityElement.tagNumber = 16;
        validityElement.sequence = [notBeforeElement, notAfterElement];
        return validityElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return Validity_Validity.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/AuthenticationFramework/SubjectPublicKeyInfo.ts



class SubjectPublicKeyInfo_SubjectPublicKeyInfo {
    constructor(algorithm, subjectPublicKey) {
        this.algorithm = algorithm;
        this.subjectPublicKey = subjectPublicKey;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on SubjectPublicKeyInfo");
            case -2: throw new X509Error("Invalid construction on SubjectPublicKeyInfo");
            case -3: throw new X509Error("Invalid tag number on SubjectPublicKeyInfo");
            default: throw new X509Error("Undefined error when validating SubjectPublicKeyInfo tag");
        }
        const subjectPublicKeyElements = value.sequence;
        switch (subjectPublicKeyElements[1].validateTag([0], [0], [3])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on SubjectPublicKeyInfo.subjectPublicKey");
            case -2: throw new X509Error("Invalid construction on SubjectPublicKeyInfo.subjectPublicKey");
            case -3: throw new X509Error("Invalid tag number on SubjectPublicKeyInfo.subjectPublicKey");
            default: throw new X509Error("Undefined error when validating SubjectPublicKeyInfo.subjectPublicKey tag");
        }
        return new SubjectPublicKeyInfo_SubjectPublicKeyInfo(AlgorithmIdentifier_AlgorithmIdentifier.fromElement(subjectPublicKeyElements[0]), subjectPublicKeyElements[1].bitString);
    }
    toElement() {
        if (this.algorithm === undefined)
            throw new X509Error("Algorithm is undefined");
        const ret = new asn1["DERElement"]();
        ret.tagClass = 0;
        ret.construction = 1;
        ret.tagNumber = 16;
        const subjectPublicKeyElement = new asn1["DERElement"]();
        subjectPublicKeyElement.tagClass = 0;
        subjectPublicKeyElement.construction = 0;
        subjectPublicKeyElement.tagNumber = 3;
        subjectPublicKeyElement.bitString = this.subjectPublicKey;
        ret.sequence = [this.algorithm.toElement(), subjectPublicKeyElement];
        return ret;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return SubjectPublicKeyInfo_SubjectPublicKeyInfo.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/AuthenticationFramework/Extension.ts


class Extension_Extension {
    constructor(extnID, critical, extnValue) {
        this.extnID = extnID;
        this.critical = critical;
        this.extnValue = extnValue;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on Extension");
            case -2: throw new X509Error("Invalid construction on Extension");
            case -3: throw new X509Error("Invalid tag number on Extension");
            default: throw new X509Error("Undefined error when validating Extension tag");
        }
        const extensionElements = value.sequence;
        if (extensionElements.length > 3)
            throw new X509Error("An Extension encoded more than three elements");
        else if (extensionElements.length < 2)
            throw new X509Error("An Extension encoded fewer than two elements");
        switch (extensionElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on Extension.identifier");
            case -2: throw new X509Error("Invalid construction on Extension.identifier");
            case -3: throw new X509Error("Invalid tag number on Extension.identifier");
            default: throw new X509Error("Undefined error when validating Extension.identifier tag");
        }
        let critical = false;
        if (extensionElements.length === 3) {
            switch (extensionElements[1].validateTag([0], [0], [1])) {
                case 0: break;
                case -1: throw new X509Error("Invalid tag number on Extension.critical");
                case -2: throw new X509Error("Invalid construction on Extension.critical");
                case -3: throw new X509Error("Invalid tag number on Extension.critical");
                default: throw new X509Error("Undefined error when validating Extension.critical tag");
            }
            critical = extensionElements[1].boolean;
        }
        switch (extensionElements[extensionElements.length - 1].validateTag([0], [0, 1], [4])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on Extension.extnValue");
            case -2: throw new X509Error("Invalid construction on Extension.extnValue");
            case -3: throw new X509Error("Invalid tag number on Extension.extnValue");
            default: throw new X509Error("Undefined error when validating Extension.extnValue tag");
        }
        const extnID = extensionElements[0].objectIdentifier;
        const extnValue = extensionElements[extensionElements.length - 1].octetString;
        return new Extension_Extension(extnID, critical, extnValue);
    }
    toElement() {
        if (this.extnID === undefined)
            throw new X509Error("extnID is undefined");
        const extnIDElement = new asn1["DERElement"]();
        extnIDElement.tagClass = 0;
        extnIDElement.construction = 0;
        extnIDElement.tagNumber = 6;
        const criticalElement = new asn1["DERElement"]();
        criticalElement.tagClass = 0;
        criticalElement.construction = 0;
        criticalElement.tagNumber = 1;
        const extnValueElement = new asn1["DERElement"]();
        extnValueElement.tagClass = 0;
        extnValueElement.construction = 0;
        extnValueElement.tagNumber = 4;
        const ret = new asn1["DERElement"]();
        ret.tagClass = 0;
        ret.construction = 1;
        ret.tagNumber = 16;
        ret.sequence = [extnIDElement, criticalElement, extnValueElement];
        return ret;
    }
    fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        Extension_Extension.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/SelectedAttributeTypes/Version8/UnboundedDirectoryString.ts


class UnboundedDirectoryString_UnboundedDirectoryString {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return this.value;
    }
    static print(element) {
        const uds = UnboundedDirectoryString_UnboundedDirectoryString.fromElement(element);
        return uds.toString();
    }
    static fromElement(value) {
        if (value.tagClass !== 0)
            throw new X509Error("UnboundedDirectoryString must be of universal class");
        if (value.construction !== 0)
            throw new X509Error("UnboundedDirectoryString must be of primitive construction");
        switch (value.tagNumber) {
            case (20): {
                return new UnboundedDirectoryString_UnboundedDirectoryString("");
            }
            case (19): {
                return new UnboundedDirectoryString_UnboundedDirectoryString(value.printableString);
            }
            case (30): {
                return new UnboundedDirectoryString_UnboundedDirectoryString(value.bmpString);
            }
            case (28): {
                return new UnboundedDirectoryString_UnboundedDirectoryString(value.universalString);
            }
            case (12): {
                return new UnboundedDirectoryString_UnboundedDirectoryString(value.utf8String);
            }
            default:
                throw new X509Error("UnboundedDirectoryString was constituted of an invalid CHOICE");
        }
    }
    toElement() {
        const unboundedDirectoryStringElement = new asn1["DERElement"](0, 0, 12);
        unboundedDirectoryStringElement.utf8String = this.value;
        return unboundedDirectoryStringElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return this.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/InformationFramework/AttributeTypeAndValue.ts



class AttributeTypeAndValue_AttributeTypeAndValue {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    static escapeDirectoryCharacters(unescaped) {
        return unescaped.replace(",", "\,").replace("+", "\+");
    }
    toString() {
        const oidString = this.type.toString();
        if (oidString in AttributeTypeAndValue_AttributeTypeAndValue.attributeToNameMapping &&
            oidString in AttributeTypeAndValue_AttributeTypeAndValue.attributeToValuePrinterMapping) {
            const attributeNameString = AttributeTypeAndValue_AttributeTypeAndValue.attributeToNameMapping[oidString];
            const valueString = AttributeTypeAndValue_AttributeTypeAndValue.escapeDirectoryCharacters(AttributeTypeAndValue_AttributeTypeAndValue.attributeToValuePrinterMapping[oidString](this.value));
            return `${attributeNameString}=${valueString}`;
        }
        else {
            return `${oidString}=${this.value.toBytes()}`;
        }
    }
    static fromElement(value) {
        const attributeTypeAndValueElements = value.sequence;
        if (attributeTypeAndValueElements.length !== 2)
            throw new X509Error("Invalid number of elements in AttributeTypeAndValue");
        switch (attributeTypeAndValueElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on AttributeTypeAndValue.type");
            case -2: throw new X509Error("Invalid construction on AttributeTypeAndValue.type");
            case -3: throw new X509Error("Invalid tag number on AttributeTypeAndValue.type");
            default: throw new X509Error("Undefined error when validating AttributeTypeAndValue.type tag");
        }
        return new AttributeTypeAndValue_AttributeTypeAndValue(attributeTypeAndValueElements[0].objectIdentifier, attributeTypeAndValueElements[1]);
    }
    toElement() {
        const typeElement = new asn1["DERElement"]();
        typeElement.tagNumber = 6;
        typeElement.objectIdentifier = this.type;
        const attributeTypeAndValueElement = new asn1["DERElement"]();
        attributeTypeAndValueElement.tagClass = 0;
        attributeTypeAndValueElement.construction = 1;
        attributeTypeAndValueElement.tagNumber = 16;
        attributeTypeAndValueElement.sequence = [typeElement, this.value];
        return attributeTypeAndValueElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return AttributeTypeAndValue_AttributeTypeAndValue.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
AttributeTypeAndValue_AttributeTypeAndValue.attributeToNameMapping = {
    "2.5.4.3": "cn",
    "2.5.4.7.1": "c-l",
    "2.5.4.8.1": "c-st",
    "2.5.4.9.1": "c-street",
    "2.5.4.10.1": "c-o",
    "2.5.4.11.1": "c-ou",
    "2.5.4.16.1": "c-PostalAddress",
    "2.5.4.17.1": "c-PostalCode",
    "2.5.4.18.1": "c-PostOfficeBox",
    "2.5.4.19.1": "c-PhysicalDeliveryOfficeName",
    "2.5.4.20.1": "c-TelephoneNumber",
    "2.5.4.21.1": "c-TelexNumber",
    "2.5.4.23.1": "c-FacsimileTelephoneNumber",
    "2.5.4.25.1": "c-InternationalISDNNumber",
    "2.5.4.2": "knowledgeInformation",
    "2.5.4.4": "sn",
    "2.5.4.5": "serialNumber",
    "2.5.4.6": "c",
    "2.5.4.7": "l",
    "2.5.4.8": "st",
    "2.5.4.9": "streetAddress",
    "2.5.4.10": "o",
    "2.5.4.11": "ou",
    "2.5.4.12": "title",
    "2.5.4.14": "searchGuide",
    "2.5.4.15": "businessCategory",
    "2.5.4.16": "postalAddress",
    "2.5.4.17": "postalCode",
    "2.5.4.18": "postOfficeBox",
    "2.5.4.19": "physicalDeliveryOfficeName",
    "2.5.4.20": "telephoneNumber",
    "2.5.4.21": "telexNumber",
    "2.5.4.22": "teletexTerminalIdentifier",
    "2.5.4.23": "facsimileTelephoneNumber",
    "2.5.4.24": "x121Address",
    "2.5.4.25": "internationaliSDNNumber",
    "2.5.4.26": "registeredAddress",
    "2.5.4.27": "destinationIndicator",
    "2.5.4.28": "preferredDeliveryMethod",
    "2.5.4.29": "presentationAddress",
    "2.5.4.30": "supportedApplicationContext",
    "2.5.4.31": "member",
    "2.5.4.32": "owner",
    "2.5.4.33": "roleOccupant",
    "2.5.4.36": "userCertificate",
    "2.5.4.37": "cACertificate",
    "2.5.4.38": "authorityRevocationList",
    "2.5.4.39": "certificateRevocationList",
    "2.5.4.40": "crossCertificatePair",
    "2.5.4.42": "gn",
    "2.5.4.43": "initials",
    "2.5.4.44": "generationQualifier",
    "2.5.4.45": "x500UniqueIdentifier",
    "2.5.4.46": "dnQualifier",
    "2.5.4.47": "enhancedSearchGuide",
    "2.5.4.48": "protocolInformation",
    "2.5.4.50": "uniqueMember",
    "2.5.4.51": "houseIdentifier",
    "2.5.4.52": "supportedAlgorithms",
    "2.5.4.53": "deltaRevocationList",
    "2.5.4.54": "dmdName",
    "2.5.4.65": "pseudonym",
    "0.9.2342.19200300.100.1.3": "mail",
    "0.9.2342.19200300.100.1.25": "dc",
    "0.9.2342.19200300.100.1.37": "associatedDomain",
    "1.2.840.113549.1.9.1": "emailAddress",
    "0.9.2342.19200300.100.1.2": "textEncodedORAddress",
    "0.9.2342.19200300.100.1.4": "info",
    "0.9.2342.19200300.100.1.5": "favouriteDrink",
    "0.9.2342.19200300.100.1.6": "roomNumber",
    "0.9.2342.19200300.100.1.7": "photo",
    "0.9.2342.19200300.100.1.8": "userClass",
    "0.9.2342.19200300.100.1.9": "host",
    "0.9.2342.19200300.100.1.10": "manager",
    "0.9.2342.19200300.100.1.11": "documentIdentifier",
    "0.9.2342.19200300.100.1.12": "documentTitle",
    "0.9.2342.19200300.100.1.13": "documentVersion",
    "0.9.2342.19200300.100.1.14": "documentAuthor",
    "0.9.2342.19200300.100.1.15": "documentLocation",
    "0.9.2342.19200300.100.1.20": "homeTelephoneNumber",
    "0.9.2342.19200300.100.1.21": "secretary",
    "0.9.2342.19200300.100.1.22": "otherMailbox",
    "0.9.2342.19200300.100.1.26": "aRecord",
    "0.9.2342.19200300.100.1.27": "mDRecord",
    "0.9.2342.19200300.100.1.28": "mXRecord",
    "0.9.2342.19200300.100.1.29": "nSRecord",
    "0.9.2342.19200300.100.1.30": "sOARecord",
    "0.9.2342.19200300.100.1.31": "cNAMERecord",
    "0.9.2342.19200300.100.1.38": "associatedName",
    "0.9.2342.19200300.100.1.39": "homePostalAddress",
    "0.9.2342.19200300.100.1.40": "personalTitle",
    "0.9.2342.19200300.100.1.41": "mobileTelephoneNumber",
    "0.9.2342.19200300.100.1.42": "pagerTelephoneNumber",
    "0.9.2342.19200300.100.1.43": "friendlyCountryName",
    "0.9.2342.19200300.100.1.44": "uniqueIdentifier",
    "0.9.2342.19200300.100.1.45": "organizationalStatus",
    "0.9.2342.19200300.100.1.46": "janetMailbox",
    "0.9.2342.19200300.100.1.47": "mailPreferenceOption",
    "0.9.2342.19200300.100.1.48": "buildingName",
    "0.9.2342.19200300.100.1.49": "dSAQuality",
    "0.9.2342.19200300.100.1.50": "singleLevelQuality",
    "0.9.2342.19200300.100.1.51": "subtreeMinimumQuality",
    "0.9.2342.19200300.100.1.52": "subtreeMaximumQuality",
    "0.9.2342.19200300.100.1.53": "personalSignature",
    "0.9.2342.19200300.100.1.54": "dITRedirect",
    "0.9.2342.19200300.100.1.55": "audio",
    "0.9.2342.19200300.100.1.56": "documentPublisher",
    "2.16.840.1.113730.3.1.1": "carLicense",
    "2.16.840.1.113730.3.1.2": "departmentNumber",
    "2.16.840.1.113730.3.1.241": "displayName",
    "2.16.840.1.113730.3.1.3": "employeeNumber",
    "2.16.840.1.113730.3.1.4": "employeeType",
    "0.9.2342.19200300.100.1.60": "jpegPhoto",
    "2.16.840.1.113730.3.1.39": "preferredLanguage",
    "2.16.840.1.113730.3.1.40": "userSMIMECertificate",
    "2.16.840.1.113730.3.1.216": "userPKCS12",
    "2.16.840.1.113730.3.1.13": "mailLocalAddress",
    "2.16.840.1.113730.3.1.18": "mailHost",
    "2.16.840.1.113730.3.1.47": "mailRoutingAddress",
    "1.3.6.1.4.1.42.2.27.2.1.15": "rfc822MailMember",
    "1.3.6.1.1.1.1.2": "gecos",
    "1.3.6.1.1.1.1.3": "homeDirectory",
    "1.3.6.1.1.1.1.4": "loginShell",
    "1.3.6.1.1.1.1.5": "shadowLastChange",
    "1.3.6.1.1.1.1.6": "shadowMin",
    "1.3.6.1.1.1.1.7": "shadowMax",
    "1.3.6.1.1.1.1.8": "shadowWarning",
    "1.3.6.1.1.1.1.9": "shadowInactive",
    "1.3.6.1.1.1.1.10": "shadowExpire",
    "1.3.6.1.1.1.1.11": "shadowFlag",
    "1.3.6.1.1.1.1.12": "memberUid",
    "1.3.6.1.1.1.1.13": "memberNisNetgroup",
    "1.3.6.1.1.1.1.14": "nisNetgroupTriple",
    "1.3.6.1.1.1.1.15": "ipServicePort",
    "1.3.6.1.1.1.1.16": "ipServiceProtocol",
    "1.3.6.1.1.1.1.17": "ipProtocolNumber",
    "1.3.6.1.1.1.1.18": "oncRpcNumber",
    "1.3.6.1.1.1.1.19": "ipHostNumber",
    "1.3.6.1.1.1.1.20": "ipNetworkNumber",
    "1.3.6.1.1.1.1.21": "ipNetmaskNumber",
    "1.3.6.1.1.1.1.22": "macAddress",
    "1.3.6.1.1.1.1.23": "bootParameter",
    "1.3.6.1.1.1.1.24": "bootFile",
    "1.3.6.1.1.1.1.26": "nisMapName",
    "1.3.6.1.1.1.1.27": "nisMapEntry",
    "2.5.4.72": "role",
    "2.5.4.75": "xmlPrivilegeInfo",
    "2.5.4.58": "attributeCertificateA",
    "2.5.4.61": "aACertificate",
    "2.5.4.62": "attributeDescriptorCertificate",
    "2.5.4.59": "attributeCertificateRevocationList",
    "2.5.4.63": "attributeAuthorityRevocationList",
    "2.5.4.73": "delegationPath",
    "2.5.4.71": "privPolicy",
    "2.5.4.74": "protPrivPolicy",
    "2.5.4.76": "xmlPrivPolicy"
};
AttributeTypeAndValue_AttributeTypeAndValue.attributeToValuePrinterMapping = {
    "2.5.4.3": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.4": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.5": (element) => element.printableString,
    "2.5.4.6": (element) => element.printableString,
    "2.5.4.7": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.8": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.9": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.10": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.11": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.12": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.15": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.17": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.18": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.19": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.20": (element) => element.printableString,
    "2.5.4.24": (element) => element.numericString,
    "2.5.4.25": (element) => element.numericString,
    "2.5.4.27": (element) => element.printableString,
    "2.5.4.42": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.43": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.44": (element) => UnboundedDirectoryString_UnboundedDirectoryString.print(element),
    "2.5.4.46": (element) => element.printableString,
};

// CONCATENATED MODULE: ./source/InformationFramework/RelativeDistinguishedName.ts



class RelativeDistinguishedName_RelativeDistinguishedName {
    constructor(value) {
        this.value = value;
        if (value.length < 1)
            throw new X509Error("RelativeDistinguishedName must contain at least one AttributeTypeAndValue.");
    }
    toString() {
        return this.value.map((atav) => {
            return atav.toString();
        }).join("+");
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [17])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on RelativeDistinguishedName");
            case -2: throw new X509Error("Invalid construction on RelativeDistinguishedName");
            case -3: throw new X509Error("Invalid tag number on RelativeDistinguishedName");
            default: throw new X509Error("Undefined error when validating RelativeDistinguishedName tag");
        }
        const relativeDistinguishedNameElements = value.set;
        return new RelativeDistinguishedName_RelativeDistinguishedName(relativeDistinguishedNameElements.map((element) => {
            return AttributeTypeAndValue_AttributeTypeAndValue.fromElement(element);
        }));
    }
    toElement() {
        const relativeDistinguishedNameElement = new asn1["DERElement"](0, 1, 17);
        relativeDistinguishedNameElement.set = this.value.map((atav) => {
            return atav.toElement();
        });
        return relativeDistinguishedNameElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return this.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/InformationFramework/RDNSequence.ts



class RDNSequence_RDNSequence {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return this.value.map((rdn) => {
            return rdn.toString();
        }).join(",");
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on RDNSequence");
            case -2: throw new X509Error("Invalid construction on RDNSequence");
            case -3: throw new X509Error("Invalid tag number on RDNSequence");
            default: throw new X509Error("Undefined error when validating RDNSequence tag");
        }
        const rdnSequenceElements = value.set;
        return new RDNSequence_RDNSequence(rdnSequenceElements.map((element) => {
            return RelativeDistinguishedName_RelativeDistinguishedName.fromElement(element);
        }));
    }
    toElement() {
        const rdnSequenceElement = new asn1["DERElement"](0, 1, 16);
        rdnSequenceElement.set = this.value.map((rdn) => {
            return rdn.toElement();
        });
        return rdnSequenceElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return this.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/InformationFramework/index.ts

const informationFrameworkOID = new asn1["ObjectIdentifier"]([2, 5, 1, 1]);




// CONCATENATED MODULE: ./source/AuthenticationFramework/TBSCertificate.ts







class TBSCertificate_TBSCertificate {
    constructor(ver = 2, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, issuerUniqueID, subjectUniqueID, extensions) {
        this.ver = ver;
        this.serialNumber = serialNumber;
        this.signature = signature;
        this.issuer = issuer;
        this.validity = validity;
        this.subject = subject;
        this.subjectPublicKeyInfo = subjectPublicKeyInfo;
        this.issuerUniqueID = issuerUniqueID;
        this.subjectUniqueID = subjectUniqueID;
        this.extensions = extensions;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on TBSCertificate");
            case -2: throw new X509Error("Invalid construction on TBSCertificate");
            case -3: throw new X509Error("Invalid tag number on TBSCertificate");
            default: throw new X509Error("Undefined error when validating TBSCertificate tag");
        }
        const tbsCertificateElements = value.sequence;
        if (tbsCertificateElements.length > 10)
            throw new X509Error("");
        else if (tbsCertificateElements.length < 7)
            throw new X509Error("");
        let ver = 2;
        let serialNumber;
        let signature;
        let issuer;
        let validity;
        let subject;
        let subjectPublicKeyInfo;
        let issuerUniqueID = undefined;
        let subjectUniqueID = undefined;
        let extensions = [];
        {
            switch (tbsCertificateElements[0].validateTag([2], [1], [0])) {
                case 0: break;
                case -1: throw new X509Error("Invalid tag number on TBSCertificate.version");
                case -2: throw new X509Error("Invalid construction on TBSCertificate.version");
                case -3: throw new X509Error("Invalid tag number on TBSCertificate.version");
                default: throw new X509Error("Undefined error when validating TBSCertificate.version tag");
            }
            const versionElements = tbsCertificateElements[0].sequence;
            if (versionElements.length !== 1)
                throw new X509Error("version can only contain one element");
            switch (versionElements[0].validateTag([0], [0], [2])) {
                case 0: break;
                case -1: throw new X509Error("Invalid tag number on TBSCertificate.version inner element");
                case -2: throw new X509Error("Invalid construction on TBSCertificate.version inner element");
                case -3: throw new X509Error("Invalid tag number on TBSCertificate.version inner element");
                default: throw new X509Error("Undefined error when validating TBSCertificate.version inner element tag");
            }
            switch (versionElements[0].integer) {
                case 0:
                    ver = 0;
                    break;
                case 1:
                    ver = 1;
                    break;
                case 2:
                    ver = 2;
                    break;
                default:
                    throw new X509Error("Invalid X.509 Certificate version.");
            }
            switch (tbsCertificateElements[1].validateTag([0], [0], [2])) {
                case 0: break;
                case -1: throw new X509Error("Invalid tag number on TBSCertificate.serialNumber");
                case -2: throw new X509Error("Invalid construction on TBSCertificate.serialNumber");
                case -3: throw new X509Error("Invalid tag number on TBSCertificate.serialNumber");
                default: throw new X509Error("Undefined error when validating TBSCertificate.serialNumber tag");
            }
        }
        {
            switch (tbsCertificateElements[1].validateTag([0], [0], [2])) {
                case 0: break;
                case -1: throw new X509Error("Invalid tag number on TBSCertificate.serialNumber");
                case -2: throw new X509Error("Invalid construction on TBSCertificate.serialNumber");
                case -3: throw new X509Error("Invalid tag number on TBSCertificate.serialNumber");
                default: throw new X509Error("Undefined error when validating TBSCertificate.serialNumber tag");
            }
            serialNumber = tbsCertificateElements[1].octetString;
        }
        {
            signature = AlgorithmIdentifier_AlgorithmIdentifier.fromElement(tbsCertificateElements[2]);
        }
        {
            issuer = RDNSequence_RDNSequence.fromElement(tbsCertificateElements[3]);
        }
        {
            validity = Validity_Validity.fromElement(tbsCertificateElements[4]);
        }
        {
            subject = RDNSequence_RDNSequence.fromElement(tbsCertificateElements[5]);
        }
        {
            subjectPublicKeyInfo = SubjectPublicKeyInfo_SubjectPublicKeyInfo.fromElement(tbsCertificateElements[6]);
        }
        if (tbsCertificateElements.length > 8) {
            for (let i = 8; i < tbsCertificateElements.length; i++) {
                if (tbsCertificateElements[i].tagNumber <= tbsCertificateElements[i - 1].tagNumber)
                    throw new X509Error("TBSCertificate sequence out of order.");
            }
        }
        if (tbsCertificateElements.length > 7) {
            for (let i = 7; i < tbsCertificateElements.length; i++) {
                switch (tbsCertificateElements[i].tagNumber) {
                    case (1): {
                        if (ver === 0)
                            throw new X509Error("issuerUniqueIdentifier not allowed in Version 1 X.509 certificate.");
                        issuerUniqueID = tbsCertificateElements[i].bitString;
                        break;
                    }
                    case (2): {
                        if (ver === 0)
                            throw new X509Error("subjectUniqueIdentifier not allowed in Version 1 X.509 certificate.");
                        subjectUniqueID = tbsCertificateElements[i].bitString;
                        break;
                    }
                    case (3): {
                        if (ver !== 2)
                            throw new X509Error("extensions not allowed in Version 1 or 2 X.509 certificate.");
                        switch (tbsCertificateElements[i].validateTag([2], [1], [3])) {
                            case 0: break;
                            case -1: throw new X509Error("Invalid tag number on a TBSCertificate.extensions outer element");
                            case -2: throw new X509Error("Invalid construction on a TBSCertificate.extensions outer element");
                            case -3: throw new X509Error("Invalid tag number on a TBSCertificate.extensions outer element");
                            default: throw new X509Error("Undefined error when validating a TBSCertificate.extensions outer element tag");
                        }
                        const extensionsElement = new asn1["DERElement"]();
                        extensionsElement.fromBytes(tbsCertificateElements[i].value);
                        const extensionElements = extensionsElement.sequence;
                        if (extensionElements.length === 0)
                            throw new X509Error("extensions element may not be present in X.509 TBSCertificate if there are no extensions in it.");
                        extensionElements.forEach((extensionElement) => {
                            extensions.push(Extension_Extension.fromElement(extensionElement));
                        });
                        break;
                    }
                    default:
                        throw new X509Error(`Invalid element with context-specific tag number ${tbsCertificateElements[i].tagNumber} in X.509 TBSCertificate.`);
                }
            }
        }
        switch (ver) {
            case 0: {
                return new TBSCertificate_TBSCertificate(ver, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, undefined, undefined, undefined);
            }
            case 1: {
                return new TBSCertificate_TBSCertificate(ver, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, issuerUniqueID, subjectUniqueID, undefined);
            }
            case 2: {
                return new TBSCertificate_TBSCertificate(ver, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, issuerUniqueID, subjectUniqueID, extensions);
            }
            default:
                throw new X509Error("Unrecognized X.509 Certificate version.");
        }
    }
    toElement() {
        let retSequence = [];
        {
            const versionInnerElement = new asn1["DERElement"](0, 0, 2);
            versionInnerElement.integer = this.ver;
            const versionOuterElement = new asn1["DERElement"](2, 1, 0);
            versionOuterElement.sequence = [versionInnerElement];
            retSequence.push(versionOuterElement);
        }
        {
            const serialNumberElement = new asn1["DERElement"](0, 0, 2);
            serialNumberElement.octetString = this.serialNumber;
            retSequence.push(serialNumberElement);
        }
        {
            retSequence.push(this.signature.toElement());
        }
        {
            const issuerElement = new asn1["DERElement"](0, 1, 16);
            issuerElement.sequence = this.issuer.value.map((rdn) => {
                const rdnElement = new asn1["DERElement"](0, 1, 17);
                rdnElement.sequence = rdn.value.map((rdnValue) => {
                    return rdnValue.toElement();
                });
                return rdnElement;
            });
        }
        {
            retSequence.push(this.validity.toElement());
        }
        {
            const subjectElement = new asn1["DERElement"](0, 1, 16);
            subjectElement.sequence = this.subject.value.map((rdn) => {
                const rdnElement = new asn1["DERElement"](0, 1, 17);
                rdnElement.sequence = rdn.value.map((rdnValue) => {
                    return rdnValue.toElement();
                });
                return rdnElement;
            });
        }
        {
            retSequence.push(this.subjectPublicKeyInfo.toElement());
        }
        if (this.ver !== 0) {
            if (this.issuerUniqueID) {
                const issuerUniqueIdentifierElement = new asn1["DERElement"](2, 0, 1);
                issuerUniqueIdentifierElement.bitString = this.issuerUniqueID;
                retSequence.push(issuerUniqueIdentifierElement);
            }
            if (this.subjectUniqueID) {
                const subjectUniqueIdentifierElement = new asn1["DERElement"](2, 0, 2);
                subjectUniqueIdentifierElement.bitString = this.subjectUniqueID;
                retSequence.push(subjectUniqueIdentifierElement);
            }
        }
        if (this.ver === 2) {
            if (this.extensions) {
                let extensionElements = [];
                this.extensions.forEach(extension => {
                    extensionElements.push(extension.toElement());
                });
                const extensionsElement = new asn1["DERElement"](0, 1, 16);
                extensionsElement.sequence = extensionElements;
                const extensionsOuterElement = new asn1["DERElement"](2, 1, 3);
                extensionsOuterElement.sequence = [extensionsElement];
                retSequence.push(extensionsOuterElement);
            }
        }
        const ret = new asn1["DERElement"](0, 1, 16);
        ret.sequence = retSequence;
        return ret;
    }
    fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return TBSCertificate_TBSCertificate.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/AuthenticationFramework/Certificate.ts




class Certificate_Certificate {
    constructor(tbsCertificate, signatureAlgorithm, signatureValue) {
        this.tbsCertificate = tbsCertificate;
        this.signatureAlgorithm = signatureAlgorithm;
        this.signatureValue = signatureValue;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on Certificate");
            case -2: throw new X509Error("Invalid construction on Certificate");
            case -3: throw new X509Error("Invalid tag number on Certificate");
            default: throw new X509Error("Undefined error when validating Certificate tag");
        }
        const certificateElements = value.sequence;
        if (certificateElements.length !== 3)
            throw new X509Error("Invalid number of elements in Certificate");
        switch (certificateElements[2].validateTag([0], [0], [3])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on Certificate.signatureValue");
            case -2: throw new X509Error("Invalid construction on Certificate.signatureValue");
            case -3: throw new X509Error("Invalid tag number on Certificate.signatureValue");
            default: throw new X509Error("Undefined error when validating Certificate.signatureValue tag");
        }
        return new Certificate_Certificate(TBSCertificate_TBSCertificate.fromElement(certificateElements[0]), AlgorithmIdentifier_AlgorithmIdentifier.fromElement(certificateElements[1]), certificateElements[2].bitString);
    }
    toElement() {
        const signatureValueElement = new asn1["DERElement"](0, 0, 3);
        signatureValueElement.bitString = this.signatureValue;
        const ret = new asn1["DERElement"](0, 1, 16);
        ret.sequence = [
            this.tbsCertificate.toElement(),
            this.signatureAlgorithm.toElement(),
            signatureValueElement
        ];
        return ret;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return this.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
Certificate_Certificate.maximumX509CertificateSizeInBytes = 100000;

// CONCATENATED MODULE: ./source/AuthenticationFramework/Version.ts
var Version;
(function (Version) {
    Version[Version["v1"] = 0] = "v1";
    Version[Version["v2"] = 1] = "v2";
    Version[Version["v3"] = 2] = "v3";
})(Version || (Version = {}));
/* harmony default export */ var AuthenticationFramework_Version = (Version);

// CONCATENATED MODULE: ./source/AuthenticationFramework/index.ts

const authenticationFrameworkOID = new asn1["ObjectIdentifier"]([2, 5, 1, 7]);








// CONCATENATED MODULE: ./source/CertificateExtensions/AuthorityKeyIdentifier.ts


class AuthorityKeyIdentifier_AuthorityKeyIdentifier {
    constructor(keyIdentifier, authorityCertIssuer, authorityCertSerialNumber) {
        this.keyIdentifier = keyIdentifier;
        this.authorityCertIssuer = authorityCertIssuer;
        this.authorityCertSerialNumber = authorityCertSerialNumber;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on AuthorityKeyIdentifier");
            case -2: throw new X509Error("Invalid construction on AuthorityKeyIdentifier");
            case -3: throw new X509Error("Invalid tag number on AuthorityKeyIdentifier");
            default: throw new X509Error("Undefined error when validating AuthorityKeyIdentifier tag");
        }
        const authorityKeyIdentifierElements = value.sequence;
        if (authorityKeyIdentifierElements.length !== 1 &&
            authorityKeyIdentifierElements.length !== 3)
            throw new X509Error("Invalid number of elements in AuthorityKeyIdentifier");
        switch (authorityKeyIdentifierElements[0].validateTag([2], [0], [0])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on AuthorityKeyIdentifier.keyIdentifier");
            case -2: throw new X509Error("Invalid construction on AuthorityKeyIdentifier.keyIdentifier");
            case -3: throw new X509Error("Invalid tag number on AuthorityKeyIdentifier.keyIdentifier");
            default: throw new X509Error("Undefined error when validating AuthorityKeyIdentifier.keyIdentifier tag");
        }
        const keyIdentifier = authorityKeyIdentifierElements[0].octetString;
        let authorityCertIssuer;
        let authorityCertSerialNumber;
        if (authorityKeyIdentifierElements.length === 3) {
            switch (authorityKeyIdentifierElements[1].validateTag([2], [1], [1])) {
                case 0: break;
                case -1: throw new X509Error("Invalid tag number on AuthorityKeyIdentifier.authorityCertIssuer");
                case -2: throw new X509Error("Invalid construction on AuthorityKeyIdentifier.authorityCertIssuer");
                case -3: throw new X509Error("Invalid tag number on AuthorityKeyIdentifier.authorityCertIssuer");
                default: throw new X509Error("Undefined error when validating AuthorityKeyIdentifier.authorityCertIssuer tag");
            }
            switch (authorityKeyIdentifierElements[2].validateTag([2], [0], [2])) {
                case 0: break;
                case -1: throw new X509Error("Invalid tag number on AuthorityKeyIdentifier.authorityCertSerialNumber");
                case -2: throw new X509Error("Invalid construction on AuthorityKeyIdentifier.authorityCertSerialNumber");
                case -3: throw new X509Error("Invalid tag number on AuthorityKeyIdentifier.authorityCertSerialNumber");
                default: throw new X509Error("Undefined error when validating AuthorityKeyIdentifier.authorityCertSerialNumber tag");
            }
            authorityCertIssuer = authorityKeyIdentifierElements[1].sequence;
            authorityCertSerialNumber = authorityKeyIdentifierElements[2].octetString;
        }
        return new AuthorityKeyIdentifier_AuthorityKeyIdentifier(keyIdentifier, authorityCertIssuer, authorityCertSerialNumber);
    }
    toElement() {
        let authorityKeyIdentifierElements = [];
        const keyIdentifierElement = new asn1["DERElement"](2, 0, 0);
        authorityKeyIdentifierElements.push(keyIdentifierElement);
        if ((this.authorityCertIssuer && !this.authorityCertSerialNumber) ||
            (!this.authorityCertIssuer && this.authorityCertSerialNumber)) {
            throw new X509Error("AuthorityKeyIdentifer must have both authorityCertIssuer and authorityCertSerialNumber PRESENT or ABSENT");
        }
        else if (this.authorityCertIssuer && this.authorityCertSerialNumber) {
            const authorityCertIssuer = new asn1["DERElement"](2, 1, 1);
            const authorityCertSerialNumber = new asn1["DERElement"](2, 0, 2);
            authorityKeyIdentifierElements.push(authorityCertIssuer);
            authorityKeyIdentifierElements.push(authorityCertSerialNumber);
        }
        const authorityKeyIdentifierElement = new asn1["DERElement"](0, 1, 16);
        authorityKeyIdentifierElement.sequence = authorityKeyIdentifierElements;
        return authorityKeyIdentifierElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return AuthorityKeyIdentifier_AuthorityKeyIdentifier.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/CertificateExtensions/BasicConstraintsSyntax.ts


class BasicConstraintsSyntax_BasicConstraintsSyntax {
    constructor(ca, pathLenConstraint) {
        this.ca = ca;
        this.pathLenConstraint = pathLenConstraint;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on BasicConstraintsSyntax");
            case -2: throw new X509Error("Invalid construction on BasicConstraintsSyntax");
            case -3: throw new X509Error("Invalid tag number on BasicConstraintsSyntax");
            default: throw new X509Error("Undefined error when validating BasicConstraintsSyntax tag");
        }
        let ca;
        let pathLenConstraint;
        let fixedPositionElementsEncountered = 0;
        const basicConstraintsSyntaxElements = value.sequence;
        if (!asn1["DERElement"].isUniquelyTagged(basicConstraintsSyntaxElements))
            throw new X509Error("Elements of BasicConstraintsSyntax were not uniquely tagged");
        basicConstraintsSyntaxElements.forEach((element, index) => {
            if (element.tagClass === 0) {
                if (element.tagNumber === 1) {
                    if (element.construction !== 0)
                        throw new X509Error("BasicConstraintsSyntax.ca was not primitively constructed");
                    if (index !== 0)
                        throw new X509Error("BasicConstraintsSyntax.ca was not the first element");
                    ca = element.boolean;
                    fixedPositionElementsEncountered++;
                }
                else if (element.tagNumber === 2) {
                    if (element.construction !== 0)
                        throw new X509Error("BasicConstraintsSyntax.pathLenConstraint was not primitively constructed");
                    if (index > 1)
                        throw new X509Error("BasicConstraintsSyntax.pathLenConstraint was not the first or second element");
                    if (index === 1 &&
                        (basicConstraintsSyntaxElements[0].tagClass !== 0 ||
                            basicConstraintsSyntaxElements[0].construction !== 0 ||
                            basicConstraintsSyntaxElements[0].tagNumber !== 1))
                        throw new X509Error("BasicConstraintsSyntax missing ca element before pathLenConstraint when pathLenConstraint was the second element");
                    pathLenConstraint = element.integer;
                    fixedPositionElementsEncountered++;
                }
            }
        });
        if (!asn1["DERElement"].isInCanonicalOrder(basicConstraintsSyntaxElements.slice(fixedPositionElementsEncountered)))
            throw new X509Error("Extended elements of BasicConstraintsSyntax were not in canonical order");
        if (ca === false)
            throw new X509Error("BasicConstraintsSyntax.cA was encoded with the default value, which is prohibited by the Distinguished Encoding Rules.");
        if (ca === undefined)
            ca = false;
        return new BasicConstraintsSyntax_BasicConstraintsSyntax(ca, pathLenConstraint);
    }
    toElement() {
        let basicConstraintsSyntaxElements = [];
        if (this.ca === true) {
            const caElement = new asn1["DERElement"](0, 0, 1);
            caElement.boolean = true;
            basicConstraintsSyntaxElements.push(caElement);
        }
        if (this.pathLenConstraint) {
            const pathLenConstraintElement = new asn1["DERElement"](0, 0, 2);
            pathLenConstraintElement.integer = this.pathLenConstraint;
            basicConstraintsSyntaxElements.push(pathLenConstraintElement);
        }
        const basicConstraintsSyntaxElement = new asn1["DERElement"](0, 1, 16);
        basicConstraintsSyntaxElement.sequence = basicConstraintsSyntaxElements;
        return basicConstraintsSyntaxElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return BasicConstraintsSyntax_BasicConstraintsSyntax.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/CertificateExtensions/ReasonFlags.ts


class ReasonFlags_ReasonFlags {
    constructor(unused = false, keyCompromise = false, cACompromise = false, affiliationChanged = false, superseded = false, cessationOfOperation = false, certificateHold = false, privilegeWithdrawn = false, aACompromise = false, weakAlgorithmOrKeySize = false) {
        this.unused = unused;
        this.keyCompromise = keyCompromise;
        this.cACompromise = cACompromise;
        this.affiliationChanged = affiliationChanged;
        this.superseded = superseded;
        this.cessationOfOperation = cessationOfOperation;
        this.certificateHold = certificateHold;
        this.privilegeWithdrawn = privilegeWithdrawn;
        this.aACompromise = aACompromise;
        this.weakAlgorithmOrKeySize = weakAlgorithmOrKeySize;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [0], [3])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on ReasonFlags");
            case -2: throw new X509Error("Invalid construction on ReasonFlags");
            case -3: throw new X509Error("Invalid tag number on ReasonFlags");
            default: throw new X509Error("Undefined error when validating ReasonFlags tag");
        }
        const bits = value.bitString;
        return new ReasonFlags_ReasonFlags(((bits.length >= 1) ? bits[0] : false), ((bits.length >= 2) ? bits[1] : false), ((bits.length >= 3) ? bits[2] : false), ((bits.length >= 4) ? bits[3] : false), ((bits.length >= 5) ? bits[4] : false), ((bits.length >= 6) ? bits[5] : false), ((bits.length >= 7) ? bits[6] : false), ((bits.length >= 8) ? bits[7] : false), ((bits.length >= 9) ? bits[8] : false), ((bits.length >= 10) ? bits[9] : false));
    }
    toElement() {
        const ret = new asn1["DERElement"](0, 1, 3);
        ret.bitString = [
            this.unused,
            this.keyCompromise,
            this.cACompromise,
            this.affiliationChanged,
            this.superseded,
            this.cessationOfOperation,
            this.certificateHold,
            this.privilegeWithdrawn,
            this.aACompromise,
            this.weakAlgorithmOrKeySize
        ];
        return ret;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return ReasonFlags_ReasonFlags.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/CertificateExtensions/DistributionPoint.ts



class DistributionPoint_DistributionPoint {
    constructor(distributionPoint, reasons, cRLIssuer) {
        this.distributionPoint = distributionPoint;
        this.reasons = reasons;
        this.cRLIssuer = cRLIssuer;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on DistributionPoint");
            case -2: throw new X509Error("Invalid construction on DistributionPoint");
            case -3: throw new X509Error("Invalid tag number on DistributionPoint");
            default: throw new X509Error("Undefined error when validating DistributionPoint tag");
        }
        const distributionPointElements = value.sequence;
        let distributionPoint;
        let reasons;
        let cRLIssuer;
        distributionPointElements.forEach(element => {
            switch (element.tagNumber) {
                case (0): {
                    distributionPoint = element;
                    break;
                }
                case (1): {
                    if (element.construction !== 0)
                        throw new X509Error("DistributionPoint.reasons may not be constructed.");
                    reasons = ReasonFlags_ReasonFlags.fromElement(element);
                    break;
                }
                case (2): {
                    cRLIssuer = element.sequence;
                    break;
                }
                default: break;
            }
        });
        return new DistributionPoint_DistributionPoint(distributionPoint, reasons, cRLIssuer);
    }
    toElement() {
        let distributionPointElements = [];
        if (this.distributionPoint) {
            distributionPointElements.push(this.distributionPoint);
        }
        if (this.reasons) {
            distributionPointElements.push(this.reasons.toElement());
        }
        if (this.cRLIssuer) {
            const crlIssuerElement = new asn1["DERElement"](2, 1, 2);
            crlIssuerElement.sequence = this.cRLIssuer;
            distributionPointElements.push(crlIssuerElement);
        }
        const ret = new asn1["DERElement"](0, 1, 16);
        ret.sequence = distributionPointElements;
        return ret;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return DistributionPoint_DistributionPoint.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/CertificateExtensions/GeneralSubtree.ts


class GeneralSubtree_GeneralSubtree {
    constructor(base, minimum = 0, maximum) {
        this.base = base;
        this.minimum = minimum;
        this.maximum = maximum;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on GeneralSubtree");
            case -2: throw new X509Error("Invalid construction on GeneralSubtree");
            case -3: throw new X509Error("Invalid tag number on GeneralSubtree");
            default: throw new X509Error("Undefined error when validating GeneralSubtree tag");
        }
        const generalSubtreeElements = value.sequence;
        if (generalSubtreeElements.length === 0)
            throw new X509Error("Invalid number of elements in GeneralSubtree");
        let base = generalSubtreeElements[0];
        let minimum;
        let maximum;
        let fixedPositionElementsEncountered = 1;
        generalSubtreeElements.slice(1).forEach((element) => {
            if (element.tagClass === 2) {
                if (element.tagNumber === 0) {
                    if (element.construction !== 0)
                        throw new X509Error("GeneralSubtree.minimum was not primitively constructed");
                    if (minimum)
                        throw new X509Error("GeneralSubtree.minimum already defined");
                    minimum = element.integer;
                    fixedPositionElementsEncountered++;
                }
                else if (element.tagNumber === 1) {
                    if (element.construction !== 0)
                        throw new X509Error("GeneralSubtree.maximum was not primitively constructed");
                    if (maximum)
                        throw new X509Error("GeneralSubtree.maximum already defined");
                    maximum = element.integer;
                    fixedPositionElementsEncountered++;
                }
            }
        });
        if (!asn1["DERElement"].isUniquelyTagged(generalSubtreeElements.slice(fixedPositionElementsEncountered)))
            throw new X509Error("Elements of GeneralSubtree were not uniquely tagged");
        if (!asn1["DERElement"].isInCanonicalOrder(generalSubtreeElements.slice(fixedPositionElementsEncountered)))
            throw new X509Error("Extended elements of GeneralSubtree were not in canonical order");
        if (minimum === 0)
            throw new X509Error("GeneralSubtree.minimum was encoded with the default value, which is prohibited by the Distinguished Encoding Rules.");
        if (minimum === undefined)
            minimum = 0;
        return new GeneralSubtree_GeneralSubtree(base, minimum, maximum);
    }
    toElement() {
        let generalSubtreeElements = [this.base];
        if (this.minimum) {
            const minimumElement = new asn1["DERElement"](2, 0, 0);
            minimumElement.integer = this.minimum;
            generalSubtreeElements.push(minimumElement);
        }
        if (this.maximum) {
            const maximumElement = new asn1["DERElement"](2, 0, 1);
            maximumElement.integer = this.minimum;
            generalSubtreeElements.push(maximumElement);
        }
        const generalSubtreeElement = new asn1["DERElement"](0, 1, 16);
        generalSubtreeElement.sequence = generalSubtreeElements;
        return generalSubtreeElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return GeneralSubtree_GeneralSubtree.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/CertificateExtensions/IssuingDistPointSyntax.ts



class IssuingDistPointSyntax_IssuingDistPointSyntax {
    constructor(distributionPoint, onlyContainsUserPublicKeyCerts = false, onlyContainsCACerts = false, onlySomeReasons, indirectCRL = false) {
        this.distributionPoint = distributionPoint;
        this.onlyContainsUserPublicKeyCerts = onlyContainsUserPublicKeyCerts;
        this.onlyContainsCACerts = onlyContainsCACerts;
        this.onlySomeReasons = onlySomeReasons;
        this.indirectCRL = indirectCRL;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on IssuingDistPointSyntax");
            case -2: throw new X509Error("Invalid construction on IssuingDistPointSyntax");
            case -3: throw new X509Error("Invalid tag number on IssuingDistPointSyntax");
            default: throw new X509Error("Undefined error when validating IssuingDistPointSyntax tag");
        }
        let distributionPoint;
        let onlyContainsUserPublicKeyCerts;
        let onlyContainsCACerts;
        let onlySomeReasons;
        let indirectCRL;
        const issuingDistPointSyntaxElements = value.sequence;
        let lastEncounteredTagNumber;
        issuingDistPointSyntaxElements.forEach(element => {
            if (!lastEncounteredTagNumber) {
                lastEncounteredTagNumber = element.tagNumber;
            }
            else if (element.tagNumber <= lastEncounteredTagNumber) {
                throw new X509Error("Elements out of order in IssuingDistPointSyntax");
            }
            if (element.tagClass === 2) {
                switch (element.tagNumber) {
                    case (0): {
                        distributionPoint = element;
                        break;
                    }
                    case (1): {
                        if (element.construction !== 0)
                            throw new X509Error("Invalid construction for IssuingDistPointSyntax.onlyContainsUserPublicKeyCerts");
                        onlyContainsUserPublicKeyCerts = element.boolean;
                        break;
                    }
                    case (2): {
                        if (element.construction !== 0)
                            throw new X509Error("Invalid construction for IssuingDistPointSyntax.onlyContainsCACerts");
                        onlyContainsCACerts = element.boolean;
                        break;
                    }
                    case (3): {
                        if (element.construction !== 1)
                            throw new X509Error("Invalid construction for IssuingDistPointSyntax.onlySomeReasons");
                        onlySomeReasons = ReasonFlags_ReasonFlags.fromElement(element);
                        break;
                    }
                    case (4): {
                        if (element.construction !== 0)
                            throw new X509Error("Invalid construction for IssuingDistPointSyntax.indirectCRL");
                        indirectCRL = element.boolean;
                        break;
                    }
                    default: break;
                }
            }
            lastEncounteredTagNumber = element.tagNumber;
        });
        return new IssuingDistPointSyntax_IssuingDistPointSyntax(distributionPoint, onlyContainsUserPublicKeyCerts, onlyContainsCACerts, onlySomeReasons, indirectCRL);
    }
    toElement() {
        let issuingDistPointSyntaxElements = [];
        if (this.distributionPoint) {
            issuingDistPointSyntaxElements.push(this.distributionPoint);
        }
        if (this.onlyContainsUserPublicKeyCerts) {
            const onlyContainsUserPublicKeyCertsElement = new asn1["DERElement"](2, 0, 1);
            onlyContainsUserPublicKeyCertsElement.boolean = this.onlyContainsUserPublicKeyCerts;
            issuingDistPointSyntaxElements.push(onlyContainsUserPublicKeyCertsElement);
        }
        if (this.onlyContainsCACerts) {
            const onlyContainsCACertsElement = new asn1["DERElement"](2, 0, 1);
            onlyContainsCACertsElement.boolean = this.onlyContainsUserPublicKeyCerts;
            issuingDistPointSyntaxElements.push(onlyContainsCACertsElement);
        }
        if (this.onlySomeReasons) {
            issuingDistPointSyntaxElements.push(this.onlySomeReasons.toElement());
        }
        if (this.indirectCRL) {
            const indirectCRLElement = new asn1["DERElement"](2, 0, 1);
            indirectCRLElement.boolean = this.onlyContainsUserPublicKeyCerts;
            issuingDistPointSyntaxElements.push(indirectCRLElement);
        }
        const issuingDistPointSyntaxElement = new asn1["DERElement"](0, 1, 16);
        issuingDistPointSyntaxElement.sequence = issuingDistPointSyntaxElements;
        return issuingDistPointSyntaxElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return IssuingDistPointSyntax_IssuingDistPointSyntax.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/CertificateExtensions/NameConstraintsSyntax.ts



class NameConstraintsSyntax_NameConstraintsSyntax {
    constructor(permittedSubtrees, excludedSubtrees) {
        this.permittedSubtrees = permittedSubtrees;
        this.excludedSubtrees = excludedSubtrees;
        if (!permittedSubtrees && !excludedSubtrees)
            throw new X509Error("NameConstraintsSyntax requires either permittedSubtrees or excludedSubtrees to be defined");
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on NameConstraintsSyntax");
            case -2: throw new X509Error("Invalid construction on NameConstraintsSyntax");
            case -3: throw new X509Error("Invalid tag number on NameConstraintsSyntax");
            default: throw new X509Error("Undefined error when validating NameConstraintsSyntax tag");
        }
        const nameConstraintsSyntaxElements = value.sequence;
        if (nameConstraintsSyntaxElements.length === 0)
            throw new X509Error("NameConstraintsSyntax SEQUENCE was constituted from zero elements");
        let permittedSubtrees;
        let excludedSubtrees;
        let fixedPositionElementsEncountered = 0;
        nameConstraintsSyntaxElements.forEach((element) => {
            if (element.tagClass === 2) {
                if (element.tagNumber === 0) {
                    if (element.construction !== 0)
                        throw new X509Error("NameConstraintsSyntax.permittedSubtrees was not primitively constructed");
                    if (permittedSubtrees)
                        throw new X509Error("NameConstraintsSyntax.permittedSubtrees already defined");
                    permittedSubtrees = element.sequence.map((psub) => GeneralSubtree_GeneralSubtree.fromElement(psub));
                    fixedPositionElementsEncountered++;
                }
                else if (element.tagNumber === 1) {
                    if (element.construction !== 0)
                        throw new X509Error("NameConstraintsSyntax.excludedSubtrees was not primitively constructed");
                    if (excludedSubtrees)
                        throw new X509Error("NameConstraintsSyntax.excludedSubtrees already defined");
                    excludedSubtrees = element.sequence.map((xsub) => GeneralSubtree_GeneralSubtree.fromElement(xsub));
                    fixedPositionElementsEncountered++;
                }
            }
        });
        if (!asn1["DERElement"].isUniquelyTagged(nameConstraintsSyntaxElements.slice(fixedPositionElementsEncountered)))
            throw new X509Error("Elements of GeneralSubtree were not uniquely tagged");
        if (!asn1["DERElement"].isInCanonicalOrder(nameConstraintsSyntaxElements.slice(fixedPositionElementsEncountered)))
            throw new X509Error("Extended elements of GeneralSubtree were not in canonical order");
        return new NameConstraintsSyntax_NameConstraintsSyntax(permittedSubtrees, excludedSubtrees);
    }
    toElement() {
        let nameConstraintsSyntaxElements = [];
        if (this.permittedSubtrees) {
            const permittedSubtreesElement = new asn1["DERElement"](2, 1, 0);
            permittedSubtreesElement.sequence =
                this.permittedSubtrees.map((psub) => psub.toElement());
            nameConstraintsSyntaxElements.push(permittedSubtreesElement);
        }
        if (this.excludedSubtrees) {
            const excludedSubtreesElement = new asn1["DERElement"](2, 1, 1);
            excludedSubtreesElement.sequence =
                this.excludedSubtrees.map((xsub) => xsub.toElement());
            nameConstraintsSyntaxElements.push(excludedSubtreesElement);
        }
        const nameConstraintsSyntaxElement = new asn1["DERElement"](0, 1, 16);
        nameConstraintsSyntaxElement.sequence = nameConstraintsSyntaxElements;
        return nameConstraintsSyntaxElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return NameConstraintsSyntax_NameConstraintsSyntax.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/CertificateExtensions/index.ts

const certificateExtensionsOID = new asn1["ObjectIdentifier"]([2, 5, 1, 26]);








// CONCATENATED MODULE: ./source/PkiPmiExternalDataTypes/Version8/AccessDescription.ts


class AccessDescription_AccessDescription {
    constructor(accessMethod, accessLocation) {
        this.accessMethod = accessMethod;
        this.accessLocation = accessLocation;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on AccessDescription");
            case -2: throw new X509Error("Invalid construction on AccessDescription");
            case -3: throw new X509Error("Invalid tag number on AccessDescription");
            default: throw new X509Error("Undefined error when validating AccessDescription tag");
        }
        const accessDescriptionElements = value.sequence;
        if (accessDescriptionElements.length !== 2)
            throw new X509Error("Invalid number of elements in AccessDescription.");
        switch (accessDescriptionElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new X509Error("Invalid tag number on AccessDescription.accessMethod");
            case -2: throw new X509Error("Invalid construction on AccessDescription.accessMethod");
            case -3: throw new X509Error("Invalid tag number on AccessDescription.accessMethod");
            default: throw new X509Error("Undefined error when validating AccessDescription.accessMethod tag");
        }
        return new AccessDescription_AccessDescription(accessDescriptionElements[0].objectIdentifier, accessDescriptionElements[1]);
    }
    toElement() {
        const accessMethodElement = new asn1["DERElement"](0, 0, 6);
        accessMethodElement.objectIdentifier = this.accessMethod;
        const accessDescriptionElement = new asn1["DERElement"](0, 1, 16);
        accessDescriptionElement.sequence = [
            accessMethodElement,
            this.accessLocation
        ];
        return accessDescriptionElement;
    }
    static fromBytes(value) {
        const el = new asn1["DERElement"]();
        el.fromBytes(value);
        return AccessDescription_AccessDescription.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}

// CONCATENATED MODULE: ./source/PkiPmiExternalDataTypes/Version8/index.ts

const pkiPmiExternalDataTypesVersion8OID = new asn1["ObjectIdentifier"]([2, 5, 1, 40, 8]);


// CONCATENATED MODULE: ./source/PkiPmiExternalDataTypes/index.ts

const pkiPmiExternalDataTypesOID = new asn1["ObjectIdentifier"]([2, 5, 1, 40]);


// CONCATENATED MODULE: ./source/PkiPMIProtocolSpecifications/Version8/index.ts

const pkiPMIProtocolSpecificationsVersion8OID = new asn1["ObjectIdentifier"]([2, 5, 1, 43, 8]);

// CONCATENATED MODULE: ./source/PkiPMIProtocolSpecifications/index.ts

const pkiPMIProtocolSpecificationsOID = new asn1["ObjectIdentifier"]([2, 5, 1, 43]);


// CONCATENATED MODULE: ./source/index.ts
/* concated harmony reexport X509Error */__webpack_require__.d(__webpack_exports__, "X509Error", function() { return X509Error; });
/* concated harmony reexport attributeCertificateDefinitionsOID */__webpack_require__.d(__webpack_exports__, "attributeCertificateDefinitionsOID", function() { return attributeCertificateDefinitionsOID; });
/* concated harmony reexport authenticationFrameworkOID */__webpack_require__.d(__webpack_exports__, "authenticationFrameworkOID", function() { return authenticationFrameworkOID; });
/* concated harmony reexport AlgorithmIdentifier */__webpack_require__.d(__webpack_exports__, "AlgorithmIdentifier", function() { return AlgorithmIdentifier_AlgorithmIdentifier; });
/* concated harmony reexport Certificate */__webpack_require__.d(__webpack_exports__, "Certificate", function() { return Certificate_Certificate; });
/* concated harmony reexport Extension */__webpack_require__.d(__webpack_exports__, "Extension", function() { return Extension_Extension; });
/* concated harmony reexport SubjectPublicKeyInfo */__webpack_require__.d(__webpack_exports__, "SubjectPublicKeyInfo", function() { return SubjectPublicKeyInfo_SubjectPublicKeyInfo; });
/* concated harmony reexport TBSCertificate */__webpack_require__.d(__webpack_exports__, "TBSCertificate", function() { return TBSCertificate_TBSCertificate; });
/* concated harmony reexport Validity */__webpack_require__.d(__webpack_exports__, "Validity", function() { return Validity_Validity; });
/* concated harmony reexport Version */__webpack_require__.d(__webpack_exports__, "Version", function() { return AuthenticationFramework_Version; });
/* concated harmony reexport certificateExtensionsOID */__webpack_require__.d(__webpack_exports__, "certificateExtensionsOID", function() { return certificateExtensionsOID; });
/* concated harmony reexport AuthorityKeyIdentifier */__webpack_require__.d(__webpack_exports__, "AuthorityKeyIdentifier", function() { return AuthorityKeyIdentifier_AuthorityKeyIdentifier; });
/* concated harmony reexport BasicConstraintsSyntax */__webpack_require__.d(__webpack_exports__, "BasicConstraintsSyntax", function() { return BasicConstraintsSyntax_BasicConstraintsSyntax; });
/* concated harmony reexport DistributionPoint */__webpack_require__.d(__webpack_exports__, "DistributionPoint", function() { return DistributionPoint_DistributionPoint; });
/* concated harmony reexport GeneralSubtree */__webpack_require__.d(__webpack_exports__, "GeneralSubtree", function() { return GeneralSubtree_GeneralSubtree; });
/* concated harmony reexport IssuingDistPointSyntax */__webpack_require__.d(__webpack_exports__, "IssuingDistPointSyntax", function() { return IssuingDistPointSyntax_IssuingDistPointSyntax; });
/* concated harmony reexport NameConstraintsSyntax */__webpack_require__.d(__webpack_exports__, "NameConstraintsSyntax", function() { return NameConstraintsSyntax_NameConstraintsSyntax; });
/* concated harmony reexport ReasonFlags */__webpack_require__.d(__webpack_exports__, "ReasonFlags", function() { return ReasonFlags_ReasonFlags; });
/* concated harmony reexport informationFrameworkOID */__webpack_require__.d(__webpack_exports__, "informationFrameworkOID", function() { return informationFrameworkOID; });
/* concated harmony reexport AttributeTypeAndValue */__webpack_require__.d(__webpack_exports__, "AttributeTypeAndValue", function() { return AttributeTypeAndValue_AttributeTypeAndValue; });
/* concated harmony reexport RDNSequence */__webpack_require__.d(__webpack_exports__, "RDNSequence", function() { return RDNSequence_RDNSequence; });
/* concated harmony reexport RelativeDistinguishedName */__webpack_require__.d(__webpack_exports__, "RelativeDistinguishedName", function() { return RelativeDistinguishedName_RelativeDistinguishedName; });
/* concated harmony reexport pkiPmiExternalDataTypesOID */__webpack_require__.d(__webpack_exports__, "pkiPmiExternalDataTypesOID", function() { return pkiPmiExternalDataTypesOID; });
/* concated harmony reexport pkiPmiExternalDataTypesVersion8OID */__webpack_require__.d(__webpack_exports__, "pkiPmiExternalDataTypesVersion8OID", function() { return pkiPmiExternalDataTypesVersion8OID; });
/* concated harmony reexport AccessDescription */__webpack_require__.d(__webpack_exports__, "AccessDescription", function() { return AccessDescription_AccessDescription; });
/* concated harmony reexport pkiPMIProtocolSpecificationsOID */__webpack_require__.d(__webpack_exports__, "pkiPMIProtocolSpecificationsOID", function() { return pkiPMIProtocolSpecificationsOID; });
/* concated harmony reexport pkiPMIProtocolSpecificationsVersion8OID */__webpack_require__.d(__webpack_exports__, "pkiPMIProtocolSpecificationsVersion8OID", function() { return pkiPMIProtocolSpecificationsVersion8OID; });









/***/ })
/******/ ]);