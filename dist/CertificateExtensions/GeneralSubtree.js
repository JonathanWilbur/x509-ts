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
class GeneralSubtree {
    constructor(base, minimum = 0, maximum) {
        this.base = base;
        this.minimum = minimum;
        this.maximum = maximum;
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on GeneralSubtree");
            case -2: throw new errors.X509Error("Invalid construction on GeneralSubtree");
            case -3: throw new errors.X509Error("Invalid tag number on GeneralSubtree");
            default: throw new errors.X509Error("Undefined error when validating GeneralSubtree tag");
        }
        const generalSubtreeElements = value.sequence;
        if (generalSubtreeElements.length === 0) {
            throw new errors.X509Error("Invalid number of elements in GeneralSubtree");
        }
        const base = generalSubtreeElements[0];
        let minimum;
        let maximum;
        let fixedPositionElementsEncountered = 1;
        generalSubtreeElements.slice(1).forEach((element) => {
            if (element.tagClass === asn1_ts_1.ASN1TagClass.context) {
                if (element.tagNumber === 0) {
                    if (element.construction !== asn1_ts_1.ASN1Construction.primitive) {
                        throw new errors.X509Error("GeneralSubtree.minimum was not primitively constructed");
                    }
                    if (minimum)
                        throw new errors.X509Error("GeneralSubtree.minimum already defined");
                    minimum = element.integer;
                    fixedPositionElementsEncountered++;
                }
                else if (element.tagNumber === 1) {
                    if (element.construction !== asn1_ts_1.ASN1Construction.primitive) {
                        throw new errors.X509Error("GeneralSubtree.maximum was not primitively constructed");
                    }
                    if (maximum)
                        throw new errors.X509Error("GeneralSubtree.maximum already defined");
                    maximum = element.integer;
                    fixedPositionElementsEncountered++;
                }
            }
        });
        if (!asn1_ts_1.DERElement.isUniquelyTagged(generalSubtreeElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Elements of GeneralSubtree were not uniquely tagged");
        }
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(generalSubtreeElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Extended elements of GeneralSubtree were not in canonical order");
        }
        if (minimum === 0) {
            throw new errors.X509Error("GeneralSubtree.minimum was encoded with the default value, "
                + "which is prohibited by the Distinguished Encoding Rules.");
        }
        if (minimum === undefined)
            minimum = 0;
        return new GeneralSubtree(base, minimum, maximum);
    }
    toElement() {
        const generalSubtreeElements = [this.base];
        if (this.minimum) {
            const minimumElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.primitive, 0);
            minimumElement.integer = this.minimum;
            generalSubtreeElements.push(minimumElement);
        }
        if (this.maximum) {
            const maximumElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.primitive, 1);
            maximumElement.integer = this.minimum;
            generalSubtreeElements.push(maximumElement);
        }
        const generalSubtreeElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        generalSubtreeElement.sequence = generalSubtreeElements;
        return generalSubtreeElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return GeneralSubtree.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = GeneralSubtree;
//# sourceMappingURL=GeneralSubtree.js.map