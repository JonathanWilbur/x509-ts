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
class PolicyMapping {
    constructor(issuerDomainPolicy, subjectDomainPolicy) {
        this.issuerDomainPolicy = issuerDomainPolicy;
        this.subjectDomainPolicy = subjectDomainPolicy;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on inner sequence of PolicyMappingsSyntax");
            case -2: throw new errors.X509Error("Invalid construction on inner sequence of PolicyMappingsSyntax");
            case -3: throw new errors.X509Error("Invalid tag number on inner sequence of PolicyMappingsSyntax");
            default: {
                throw new errors.X509Error("Undefined error when validating inner sequence of PolicyMappingsSyntax tag");
            }
        }
        const policyMappingElements = value.sequence;
        if (policyMappingElements.length < 2) {
            throw new errors.X509Error("Too few elements in inner sequence of PolicyMappingsSyntax");
        }
        switch (policyMappingElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: {
                throw new errors.X509Error("Invalid tag class on inner sequence of PolicyMappingsSyntax."
                    + "SEQUENCE.SEQUENCE.subjectDomainPolicy.");
            }
            case -2: {
                throw new errors.X509Error("Invalid construction on inner sequence of "
                    + "PolicyMappingsSyntax.SEQUENCE.SEQUENCE.subjectDomainPolicy.");
            }
            case -3: {
                throw new errors.X509Error("Invalid tag number on inner sequence of PolicyMappingsSyntax"
                    + ".SEQUENCE.SEQUENCE.subjectDomainPolicy.");
            }
            default: {
                throw new errors.X509Error("Undefined error when validating inner sequence of "
                    + "PolicyMappingsSyntax.SEQUENCE.SEQUENCE.subjectDomainPolicy "
                    + "tag.");
            }
        }
        switch (policyMappingElements[1].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: {
                throw new errors.X509Error("Invalid tag class on inner sequence of PolicyMappingsSyntax"
                    + ".SEQUENCE.SEQUENCE.issuerDomainPolicy.");
            }
            case -2: {
                throw new errors.X509Error("Invalid construction on inner sequence of "
                    + "PolicyMappingsSyntax.SEQUENCE.SEQUENCE.issuerDomainPolicy.");
            }
            case -3: {
                throw new errors.X509Error("Invalid tag number on inner sequence of "
                    + "PolicyMappingsSyntax.SEQUENCE.SEQUENCE.issuerDomainPolicy.");
            }
            default: {
                throw new errors.X509Error("Undefined error when validating inner sequence of "
                    + "PolicyMappingsSyntax.SEQUENCE.SEQUENCE.issuerDomainPolicy "
                    + "tag.");
            }
        }
        return new PolicyMapping(policyMappingElements[0].objectIdentifier, policyMappingElements[1].objectIdentifier);
    }
    toElement() {
        const issuerDomainPolicyElement = new asn1_ts_1.DERElement(0, 0, 6);
        issuerDomainPolicyElement.objectIdentifier = this.issuerDomainPolicy;
        const subjectDomainPolicyElement = new asn1_ts_1.DERElement(0, 0, 6);
        subjectDomainPolicyElement.objectIdentifier = this.subjectDomainPolicy;
        const policyMappingElement = new asn1_ts_1.DERElement(0, 1, 16);
        policyMappingElement.sequence = [
            issuerDomainPolicyElement,
            subjectDomainPolicyElement,
        ];
        return policyMappingElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return PolicyMapping.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = PolicyMapping;
//# sourceMappingURL=PolicyMapping.js.map