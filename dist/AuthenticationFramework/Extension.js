"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
class Extension {
    constructor(extnID, critical, extnValue) {
        this.extnID = extnID;
        this.critical = critical;
        this.extnValue = extnValue;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on Extension");
            case -2: throw new errors.X509Error("Invalid construction on Extension");
            case -3: throw new errors.X509Error("Invalid tag number on Extension");
            default: throw new errors.X509Error("Undefined error when validating Extension tag");
        }
        const extensionElements = value.sequence;
        if (extensionElements.length > 3) {
            throw new errors.X509Error("An Extension encoded more than three elements");
        }
        else if (extensionElements.length < 2) {
            throw new errors.X509Error("An Extension encoded fewer than two elements");
        }
        switch (extensionElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on Extension.identifier");
            case -2: throw new errors.X509Error("Invalid construction on Extension.identifier");
            case -3: throw new errors.X509Error("Invalid tag number on Extension.identifier");
            default: throw new errors.X509Error("Undefined error when validating Extension.identifier tag");
        }
        let critical = false;
        if (extensionElements.length === 3) {
            switch (extensionElements[1].validateTag([0], [0], [1])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag class on Extension.critical");
                case -2: throw new errors.X509Error("Invalid construction on Extension.critical");
                case -3: throw new errors.X509Error("Invalid tag number on Extension.critical");
                default: throw new errors.X509Error("Undefined error when validating Extension.critical tag");
            }
            critical = extensionElements[1].boolean;
        }
        switch (extensionElements[extensionElements.length - 1].validateTag([0], [0, 1], [4])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on Extension.extnValue");
            case -2: throw new errors.X509Error("Invalid construction on Extension.extnValue");
            case -3: throw new errors.X509Error("Invalid tag number on Extension.extnValue");
            default: throw new errors.X509Error("Undefined error when validating Extension.extnValue tag");
        }
        const extnID = extensionElements[0].objectIdentifier;
        const extnValue = extensionElements[extensionElements.length - 1].octetString;
        return new Extension(extnID, critical, extnValue);
    }
    toElement() {
        if (this.extnID === undefined)
            throw new errors.X509Error("extnID is undefined");
        const extnIDElement = new asn1_ts_1.DERElement();
        extnIDElement.tagClass = 0;
        extnIDElement.construction = 0;
        extnIDElement.tagNumber = 6;
        const criticalElement = new asn1_ts_1.DERElement();
        criticalElement.tagClass = 0;
        criticalElement.construction = 0;
        criticalElement.tagNumber = 1;
        const extnValueElement = new asn1_ts_1.DERElement();
        extnValueElement.tagClass = 0;
        extnValueElement.construction = 0;
        extnValueElement.tagNumber = 4;
        const ret = new asn1_ts_1.DERElement();
        ret.tagClass = 0;
        ret.construction = 1;
        ret.tagNumber = 16;
        ret.sequence = [extnIDElement, criticalElement, extnValueElement];
        return ret;
    }
    fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        Extension.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = Extension;
//# sourceMappingURL=Extension.js.map