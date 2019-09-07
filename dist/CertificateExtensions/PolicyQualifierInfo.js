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
class PolicyQualifierInfo {
    constructor(policyQualifierId, qualifier) {
        this.policyQualifierId = policyQualifierId;
        this.qualifier = qualifier;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on PolicyQualifierInfo");
            case -2: throw new errors.X509Error("Invalid construction on PolicyQualifierInfo");
            case -3: throw new errors.X509Error("Invalid tag number on PolicyQualifierInfo");
            default: throw new errors.X509Error("Undefined error when validating PolicyQualifierInfo tag");
        }
        const policyQualifierInfoElements = value.sequence;
        let qualifier;
        if (policyQualifierInfoElements.length === 0) {
            throw new errors.X509Error("PolicyQualifierInfo contained zero elements");
        }
        switch (policyQualifierInfoElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on PolicyQualifierInfo.policyQualifierId");
            case -2: throw new errors.X509Error("Invalid construction on PolicyQualifierInfo.policyQualifierId");
            case -3: throw new errors.X509Error("Invalid tag number on PolicyQualifierInfo.policyQualifierId");
            default: {
                throw new errors.X509Error("Undefined error when validating PolicyQualifierInfo.policyQualifierId tag");
            }
        }
        const policyQualifierId = policyQualifierInfoElements[0].objectIdentifier;
        let fixedPositionElementsEncountered = 1;
        if (policyQualifierInfoElements.length > 1) {
            qualifier = policyQualifierInfoElements[1];
            fixedPositionElementsEncountered++;
        }
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(policyQualifierInfoElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Extended elements of PolicyQualifierInfo were not in canonical order");
        }
        return new PolicyQualifierInfo(policyQualifierId, qualifier);
    }
    toElement() {
        const policyQualifierInfoElements = [
            new asn1_ts_1.DERElement(0, 0, 6),
        ];
        if (this.qualifier)
            policyQualifierInfoElements.push(this.qualifier);
        const policyQualifierInfoElement = new asn1_ts_1.DERElement(0, 1, 16);
        policyQualifierInfoElement.sequence = policyQualifierInfoElements;
        return policyQualifierInfoElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return PolicyQualifierInfo.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = PolicyQualifierInfo;
//# sourceMappingURL=PolicyQualifierInfo.js.map