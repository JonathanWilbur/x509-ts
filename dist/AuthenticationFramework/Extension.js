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
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
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
        switch (extensionElements[0].validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.objectIdentifier])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on Extension.identifier");
            case -2: throw new errors.X509Error("Invalid construction on Extension.identifier");
            case -3: throw new errors.X509Error("Invalid tag number on Extension.identifier");
            default: throw new errors.X509Error("Undefined error when validating Extension.identifier tag");
        }
        let critical = false;
        if (extensionElements.length === 3) {
            switch (extensionElements[1].validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.boolean])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag class on Extension.critical");
                case -2: throw new errors.X509Error("Invalid construction on Extension.critical");
                case -3: throw new errors.X509Error("Invalid tag number on Extension.critical");
                default: throw new errors.X509Error("Undefined error when validating Extension.critical tag");
            }
            critical = extensionElements[1].boolean;
        }
        switch (extensionElements[extensionElements.length - 1].validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.octetString])) {
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
        extnIDElement.tagClass = asn1_ts_1.ASN1TagClass.universal;
        extnIDElement.construction = asn1_ts_1.ASN1Construction.primitive;
        extnIDElement.tagNumber = asn1_ts_1.ASN1UniversalType.objectIdentifier;
        extnIDElement.objectIdentifier = this.extnID;
        const extnValueElement = new asn1_ts_1.DERElement();
        extnValueElement.tagClass = asn1_ts_1.ASN1TagClass.universal;
        extnValueElement.construction = asn1_ts_1.ASN1Construction.primitive;
        extnValueElement.tagNumber = asn1_ts_1.ASN1UniversalType.octetString;
        extnValueElement.octetString = this.extnValue;
        const ret = new asn1_ts_1.DERElement();
        ret.tagClass = asn1_ts_1.ASN1TagClass.universal;
        ret.construction = asn1_ts_1.ASN1Construction.constructed;
        ret.tagNumber = asn1_ts_1.ASN1UniversalType.sequence;
        if (this.critical) {
            const criticalElement = new asn1_ts_1.DERElement();
            criticalElement.tagClass = asn1_ts_1.ASN1TagClass.universal;
            criticalElement.construction = asn1_ts_1.ASN1Construction.primitive;
            criticalElement.tagNumber = asn1_ts_1.ASN1UniversalType.boolean;
            criticalElement.boolean = this.critical;
            ret.sequence = [extnIDElement, criticalElement, extnValueElement];
        }
        else {
            ret.sequence = [extnIDElement, extnValueElement];
        }
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