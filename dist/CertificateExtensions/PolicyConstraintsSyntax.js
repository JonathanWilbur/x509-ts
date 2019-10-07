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
class PolicyConstraintsSyntax {
    constructor(requireExplicitPolicy, inhibitPolicyMapping) {
        this.requireExplicitPolicy = requireExplicitPolicy;
        this.inhibitPolicyMapping = inhibitPolicyMapping;
        if (!requireExplicitPolicy && !inhibitPolicyMapping) {
            throw new errors.X509Error("PolicyConstraintsSyntax must have either requireExplicitPolicy or inhibitPolicyMapping set.");
        }
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on PolicyConstraintsSyntax");
            case -2: throw new errors.X509Error("Invalid construction on PolicyConstraintsSyntax");
            case -3: throw new errors.X509Error("Invalid tag number on PolicyConstraintsSyntax");
            default: throw new errors.X509Error("Undefined error when validating PolicyConstraintsSyntax tag");
        }
        const policyConstraintsSyntaxElements = value.sequence;
        if (policyConstraintsSyntaxElements.length === 0) {
            throw new errors.X509Error("PolicyConstraintsSyntax SEQUENCE was constituted from zero elements");
        }
        let requireExplicitPolicy;
        let inhibitPolicyMapping;
        let fixedPositionElementsEncountered = 0;
        policyConstraintsSyntaxElements.forEach((element, index) => {
            if (element.tagClass === asn1_ts_1.ASN1TagClass.context) {
                if (element.tagNumber === 0) {
                    if (element.construction !== asn1_ts_1.ASN1Construction.primitive) {
                        throw new errors.X509Error("PolicyConstraintsSyntax.requireExplicitPolicy was not primitively constructed.");
                    }
                    if (requireExplicitPolicy) {
                        throw new errors.X509Error("PolicyConstraintsSyntax.requireExplicitPolicy already defined.");
                    }
                    requireExplicitPolicy = element.integer;
                    fixedPositionElementsEncountered++;
                }
                else if (element.tagNumber === 1) {
                    if (element.construction !== asn1_ts_1.ASN1Construction.primitive) {
                        throw new errors.X509Error("PolicyConstraintsSyntax.inhibitPolicyMapping was not primitively constructed.");
                    }
                    if (inhibitPolicyMapping) {
                        throw new errors.X509Error("PolicyConstraintsSyntax.inhibitPolicyMapping already defined.");
                    }
                    if (index === 1
                        && (policyConstraintsSyntaxElements[0].tagClass !== asn1_ts_1.ASN1TagClass.universal
                            || policyConstraintsSyntaxElements[0].construction !== asn1_ts_1.ASN1Construction.primitive
                            || policyConstraintsSyntaxElements[0].tagNumber !== asn1_ts_1.ASN1UniversalType.integer)) {
                        throw new errors.X509Error("PolicyConstraintsSyntax missing "
                            + "requireExplicitPolicy element before "
                            + "inhibitPolicyMapping when "
                            + "inhibitPolicyMapping was the second element.");
                    }
                    inhibitPolicyMapping = element.integer;
                    fixedPositionElementsEncountered++;
                }
            }
        });
        if (!asn1_ts_1.DERElement.isUniquelyTagged(policyConstraintsSyntaxElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Elements of PolicyConstraintsSyntax were not uniquely tagged");
        }
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(policyConstraintsSyntaxElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Extended elements of PolicyConstraintsSyntax were not in canonical order");
        }
        return new PolicyConstraintsSyntax(requireExplicitPolicy, inhibitPolicyMapping);
    }
    toElement() {
        const policyConstraintsSyntaxElements = [];
        if (this.requireExplicitPolicy) {
            const requireExplicitPolicyElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.primitive, 0);
            requireExplicitPolicyElement.integer = this.requireExplicitPolicy;
            policyConstraintsSyntaxElements.push(requireExplicitPolicyElement);
        }
        if (this.inhibitPolicyMapping) {
            const inhibitPolicyMappingElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.primitive, 1);
            inhibitPolicyMappingElement.integer = this.inhibitPolicyMapping;
            policyConstraintsSyntaxElements.push(inhibitPolicyMappingElement);
        }
        const policyConstraintsSyntaxElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        policyConstraintsSyntaxElement.sequence = policyConstraintsSyntaxElements;
        return policyConstraintsSyntaxElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return PolicyConstraintsSyntax.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = PolicyConstraintsSyntax;
//# sourceMappingURL=PolicyConstraintsSyntax.js.map