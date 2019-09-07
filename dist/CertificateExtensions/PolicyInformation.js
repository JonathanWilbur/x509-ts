"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const PolicyQualifierInfo_1 = __importDefault(require("./PolicyQualifierInfo"));
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
class PolicyInformation {
    constructor(policyIdentifier, policyQualifiers) {
        this.policyIdentifier = policyIdentifier;
        this.policyQualifiers = policyQualifiers;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on PolicyInformation");
            case -2: throw new errors.X509Error("Invalid construction on PolicyInformation");
            case -3: throw new errors.X509Error("Invalid tag number on PolicyInformation");
            default: throw new errors.X509Error("Undefined error when validating PolicyInformation tag");
        }
        const policyInformationElements = value.sequence;
        let policyQualifiers;
        switch (policyInformationElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on PolicyInformation.policyIdentifier");
            case -2: throw new errors.X509Error("Invalid construction on PolicyInformation.policyIdentifier");
            case -3: throw new errors.X509Error("Invalid tag number on PolicyInformation.policyIdentifier");
            default: throw new errors.X509Error("Undefined error when validating PolicyInformation.policyIdentifier tag");
        }
        const policyIdentifier = policyInformationElements[0].objectIdentifier;
        let fixedPositionElementsEncountered = 1;
        if (policyInformationElements.length > 1) {
            policyQualifiers = policyInformationElements[1].sequence.map((element) => PolicyQualifierInfo_1.default.fromElement(element));
            fixedPositionElementsEncountered++;
        }
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(policyInformationElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Extended elements of PolicyInformation were not in canonical order");
        }
        return new PolicyInformation(policyIdentifier, policyQualifiers);
    }
    toElement() {
        const policyInformationElements = [
            new asn1_ts_1.DERElement(0, 0, 6),
        ];
        if (this.policyQualifiers) {
            const policyQualifiersElement = new asn1_ts_1.DERElement(0, 1, 16);
            policyQualifiersElement.sequence = this.policyQualifiers.map((pqi) => pqi.toElement());
            policyInformationElements.push(policyQualifiersElement);
        }
        const policyInformationElement = new asn1_ts_1.DERElement(0, 1, 16);
        policyInformationElement.sequence = policyInformationElements;
        return policyInformationElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return PolicyInformation.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = PolicyInformation;
//# sourceMappingURL=PolicyInformation.js.map