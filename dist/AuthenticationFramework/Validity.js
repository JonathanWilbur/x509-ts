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
class Validity {
    constructor(notBefore, notAfter) {
        this.notBefore = notBefore;
        this.notAfter = notAfter;
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on validity");
            case -2: throw new errors.X509Error("Invalid construction on validity");
            case -3: throw new errors.X509Error("Invalid tag number on validity");
            default: throw new errors.X509Error("Undefined error when validating validity tag");
        }
        const validityElements = value.sequence;
        if (validityElements.length !== 2) {
            throw new errors.X509Error("validity contained more than two ASN.1 elements");
        }
        switch (validityElements[0].validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.utcTime, asn1_ts_1.ASN1UniversalType.generalizedTime])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on validity.notBefore");
            case -2: throw new errors.X509Error("Invalid construction on validity.notBefore");
            case -3: throw new errors.X509Error("Invalid tag number on validity.notBefore");
            default: throw new errors.X509Error("Undefined error when validating validity.notBefore tag");
        }
        switch (validityElements[1].validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.utcTime, asn1_ts_1.ASN1UniversalType.generalizedTime])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on validity.notBefore");
            case -2: throw new errors.X509Error("Invalid construction on validity.notBefore");
            case -3: throw new errors.X509Error("Invalid tag number on validity.notBefore");
            default: throw new errors.X509Error("Undefined error when validating validity.notBefore tag");
        }
        return new Validity((validityElements[0].tagNumber === asn1_ts_1.ASN1UniversalType.generalizedTime)
            ? validityElements[0].generalizedTime : validityElements[0].utcTime, (validityElements[1].tagNumber === asn1_ts_1.ASN1UniversalType.generalizedTime)
            ? validityElements[1].generalizedTime : validityElements[1].utcTime);
    }
    toElement() {
        const notBeforeElement = new asn1_ts_1.DERElement();
        if (this.notBefore.getFullYear() >= 2050) {
            notBeforeElement.tagNumber = asn1_ts_1.ASN1UniversalType.generalizedTime;
            notBeforeElement.generalizedTime = this.notBefore;
        }
        else {
            notBeforeElement.tagNumber = asn1_ts_1.ASN1UniversalType.utcTime;
            notBeforeElement.utcTime = this.notBefore;
        }
        const notAfterElement = new asn1_ts_1.DERElement();
        if (this.notAfter.getFullYear() >= 2050) {
            notAfterElement.tagNumber = asn1_ts_1.ASN1UniversalType.generalizedTime;
            notAfterElement.generalizedTime = this.notAfter;
        }
        else {
            notAfterElement.tagNumber = asn1_ts_1.ASN1UniversalType.utcTime;
            notAfterElement.utcTime = this.notAfter;
        }
        const validityElement = new asn1_ts_1.DERElement();
        validityElement.tagClass = asn1_ts_1.ASN1TagClass.universal;
        validityElement.construction = asn1_ts_1.ASN1Construction.constructed;
        validityElement.tagNumber = asn1_ts_1.ASN1UniversalType.sequence;
        validityElement.sequence = [notBeforeElement, notAfterElement];
        return validityElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return Validity.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = Validity;
//# sourceMappingURL=Validity.js.map