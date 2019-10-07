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
class BasicConstraintsSyntax {
    constructor(ca, pathLenConstraint) {
        this.ca = ca;
        this.pathLenConstraint = pathLenConstraint;
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on BasicConstraintsSyntax");
            case -2: throw new errors.X509Error("Invalid construction on BasicConstraintsSyntax");
            case -3: throw new errors.X509Error("Invalid tag number on BasicConstraintsSyntax");
            default: throw new errors.X509Error("Undefined error when validating BasicConstraintsSyntax tag");
        }
        let ca;
        let pathLenConstraint;
        let fixedPositionElementsEncountered = 0;
        const basicConstraintsSyntaxElements = value.sequence;
        if (!asn1_ts_1.DERElement.isUniquelyTagged(basicConstraintsSyntaxElements)) {
            throw new errors.X509Error("Elements of BasicConstraintsSyntax were not uniquely tagged");
        }
        basicConstraintsSyntaxElements.forEach((element, index) => {
            if (element.tagClass === asn1_ts_1.ASN1TagClass.universal) {
                if (element.tagNumber === asn1_ts_1.ASN1UniversalType.boolean) {
                    if (element.construction !== asn1_ts_1.ASN1Construction.primitive) {
                        throw new errors.X509Error("BasicConstraintsSyntax.ca was not primitively constructed");
                    }
                    if (index !== 0) {
                        throw new errors.X509Error("BasicConstraintsSyntax.ca was not the first element");
                    }
                    ca = element.boolean;
                    fixedPositionElementsEncountered++;
                }
                else if (element.tagNumber === asn1_ts_1.ASN1UniversalType.integer) {
                    if (element.construction !== asn1_ts_1.ASN1Construction.primitive) {
                        throw new errors.X509Error("BasicConstraintsSyntax.pathLenConstraint was not primitively constructed");
                    }
                    if (index > 1) {
                        throw new errors.X509Error("BasicConstraintsSyntax.pathLenConstraint was not the first or second element");
                    }
                    if (index === 1
                        && (basicConstraintsSyntaxElements[0].tagClass !== asn1_ts_1.ASN1TagClass.universal
                            || basicConstraintsSyntaxElements[0].construction !== asn1_ts_1.ASN1Construction.primitive
                            || basicConstraintsSyntaxElements[0].tagNumber !== asn1_ts_1.ASN1UniversalType.boolean)) {
                        throw new errors.X509Error("BasicConstraintsSyntax missing ca element before "
                            + "pathLenConstraint when pathLenConstraint was "
                            + "the second element.");
                    }
                    pathLenConstraint = element.integer;
                    fixedPositionElementsEncountered++;
                }
            }
        });
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(basicConstraintsSyntaxElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Extended elements of BasicConstraintsSyntax were not in canonical order");
        }
        if (ca === false) {
            throw new errors.X509Error("BasicConstraintsSyntax.cA was encoded with the default "
                + "value, which is prohibited by the Distinguished Encoding "
                + "Rules.");
        }
        if (ca === undefined)
            ca = false;
        return new BasicConstraintsSyntax(ca, pathLenConstraint);
    }
    toElement() {
        const basicConstraintsSyntaxElements = [];
        if (this.ca === true) {
            const caElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.boolean);
            caElement.boolean = true;
            basicConstraintsSyntaxElements.push(caElement);
        }
        if (this.pathLenConstraint) {
            const pathLenConstraintElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.integer);
            pathLenConstraintElement.integer = this.pathLenConstraint;
            basicConstraintsSyntaxElements.push(pathLenConstraintElement);
        }
        const basicConstraintsSyntaxElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        basicConstraintsSyntaxElement.sequence = basicConstraintsSyntaxElements;
        return basicConstraintsSyntaxElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return BasicConstraintsSyntax.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = BasicConstraintsSyntax;
//# sourceMappingURL=BasicConstraintsSyntax.js.map