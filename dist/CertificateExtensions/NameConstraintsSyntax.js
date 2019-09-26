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
const GeneralSubtree_1 = __importDefault(require("./GeneralSubtree"));
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
class NameConstraintsSyntax {
    constructor(permittedSubtrees, excludedSubtrees) {
        this.permittedSubtrees = permittedSubtrees;
        this.excludedSubtrees = excludedSubtrees;
        if (!permittedSubtrees && !excludedSubtrees) {
            throw new errors.X509Error("NameConstraintsSyntax requires either permittedSubtrees or excludedSubtrees to be defined.");
        }
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on NameConstraintsSyntax");
            case -2: throw new errors.X509Error("Invalid construction on NameConstraintsSyntax");
            case -3: throw new errors.X509Error("Invalid tag number on NameConstraintsSyntax");
            default: throw new errors.X509Error("Undefined error when validating NameConstraintsSyntax tag");
        }
        const nameConstraintsSyntaxElements = value.sequence;
        if (nameConstraintsSyntaxElements.length === 0) {
            throw new errors.X509Error("NameConstraintsSyntax SEQUENCE was constituted from zero elements");
        }
        let permittedSubtrees;
        let excludedSubtrees;
        let fixedPositionElementsEncountered = 0;
        nameConstraintsSyntaxElements.forEach((element) => {
            if (element.tagClass === asn1_ts_1.ASN1TagClass.context) {
                if (element.tagNumber === 0) {
                    if (element.construction !== asn1_ts_1.ASN1Construction.primitive) {
                        throw new errors.X509Error("NameConstraintsSyntax.permittedSubtrees was not primitively constructed");
                    }
                    if (permittedSubtrees) {
                        throw new errors.X509Error("NameConstraintsSyntax.permittedSubtrees already defined");
                    }
                    permittedSubtrees = element.sequence.map(GeneralSubtree_1.default.fromElement);
                    fixedPositionElementsEncountered++;
                }
                else if (element.tagNumber === 1) {
                    if (element.construction !== asn1_ts_1.ASN1Construction.primitive) {
                        throw new errors.X509Error("NameConstraintsSyntax.excludedSubtrees was not primitively constructed");
                    }
                    if (excludedSubtrees) {
                        throw new errors.X509Error("NameConstraintsSyntax.excludedSubtrees already defined");
                    }
                    excludedSubtrees = element.sequence.map((xsub) => GeneralSubtree_1.default.fromElement(xsub));
                    fixedPositionElementsEncountered++;
                }
            }
        });
        if (!asn1_ts_1.DERElement.isUniquelyTagged(nameConstraintsSyntaxElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Elements of GeneralSubtree were not uniquely tagged");
        }
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(nameConstraintsSyntaxElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Extended elements of GeneralSubtree were not in canonical order");
        }
        return new NameConstraintsSyntax(permittedSubtrees, excludedSubtrees);
    }
    toElement() {
        const nameConstraintsSyntaxElements = [];
        if (this.permittedSubtrees) {
            const permittedSubtreesElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.constructed, 0);
            permittedSubtreesElement.sequence
                = this.permittedSubtrees.map((psub) => psub.toElement());
            nameConstraintsSyntaxElements.push(permittedSubtreesElement);
        }
        if (this.excludedSubtrees) {
            const excludedSubtreesElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.constructed, 1);
            excludedSubtreesElement.sequence
                = this.excludedSubtrees.map((xsub) => xsub.toElement());
            nameConstraintsSyntaxElements.push(excludedSubtreesElement);
        }
        const nameConstraintsSyntaxElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        nameConstraintsSyntaxElement.sequence = nameConstraintsSyntaxElements;
        return nameConstraintsSyntaxElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return NameConstraintsSyntax.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = NameConstraintsSyntax;
//# sourceMappingURL=NameConstraintsSyntax.js.map