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
        switch (value.validateTag([0], [1], [16])) {
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
        switch (validityElements[0].validateTag([0], [0], [23, 24])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on validity.notBefore");
            case -2: throw new errors.X509Error("Invalid construction on validity.notBefore");
            case -3: throw new errors.X509Error("Invalid tag number on validity.notBefore");
            default: throw new errors.X509Error("Undefined error when validating validity.notBefore tag");
        }
        switch (validityElements[1].validateTag([0], [0], [23, 24])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on validity.notBefore");
            case -2: throw new errors.X509Error("Invalid construction on validity.notBefore");
            case -3: throw new errors.X509Error("Invalid tag number on validity.notBefore");
            default: throw new errors.X509Error("Undefined error when validating validity.notBefore tag");
        }
        return new Validity((validityElements[0].tagNumber === 24)
            ? validityElements[0].generalizedTime : validityElements[0].utcTime, (validityElements[1].tagNumber === 24)
            ? validityElements[1].generalizedTime : validityElements[1].utcTime);
    }
    toElement() {
        const notBeforeElement = new asn1_ts_1.DERElement();
        notBeforeElement.tagNumber = 24;
        notBeforeElement.generalizedTime = this.notBefore;
        const notAfterElement = new asn1_ts_1.DERElement();
        notAfterElement.tagNumber = 24;
        notAfterElement.generalizedTime = this.notBefore;
        const validityElement = new asn1_ts_1.DERElement();
        validityElement.tagClass = 0;
        validityElement.construction = 1;
        validityElement.tagNumber = 16;
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