"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
const validateTag_1 = __importDefault(require("../validateTag"));
class AttCertValidityPeriod {
    constructor(notBefore, notAfter) {
        this.notBefore = notBefore;
        this.notAfter = notAfter;
    }
    static fromElement(value) {
        validateTag_1.default(value, "AttCertValidityPeriod", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const validityElements = value.sequence;
        if (validityElements.length < 2) {
            throw new errors.X509Error("AttCertValidityPeriod contained fewer than two ASN.1 elements.");
        }
        validateTag_1.default(validityElements[0], "AttCertValidityPeriod.notBefore", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.generalizedTime]);
        validateTag_1.default(validityElements[1], "AttCertValidityPeriod.notAfter", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.generalizedTime]);
        return new AttCertValidityPeriod(validityElements[0].generalizedTime, validityElements[1].generalizedTime);
    }
    toElement() {
        const notBeforeElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.generalizedTime);
        notBeforeElement.generalizedTime = this.notBefore;
        const notAfterElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.generalizedTime);
        notAfterElement.generalizedTime = this.notAfter;
        const validityElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        validityElement.sequence = [notBeforeElement, notAfterElement];
        return validityElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return AttCertValidityPeriod.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = AttCertValidityPeriod;
//# sourceMappingURL=AttCertValidityPeriod.js.map