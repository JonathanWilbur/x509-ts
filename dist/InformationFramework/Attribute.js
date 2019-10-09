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
const Context_1 = __importDefault(require("./Context"));
class Attribute {
    constructor(type, values, valuesWithContext) {
        this.type = type;
        this.values = values;
        this.valuesWithContext = valuesWithContext;
    }
    static fromElement(value) {
        validateTag_1.default(value, "Attribute", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const attributeElements = value.sequence;
        if (attributeElements.length < 2) {
            throw new errors.X509Error(`Invalid number of elements in Attribute: ${attributeElements.length}.`);
        }
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(attributeElements)) {
            throw new errors.X509Error("Elements of Attribute were not in canonical order.");
        }
        validateTag_1.default(attributeElements[0], "Attribute.type", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.objectIdentifier]);
        validateTag_1.default(attributeElements[1], "Attribute.values", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.set]);
        const type = attributeElements[0].objectIdentifier;
        const values = attributeElements[1].set;
        const valuesWithContext = (() => {
            if (attributeElements.length <= 2
                || attributeElements[2].tagClass !== asn1_ts_1.ASN1TagClass.universal
                || attributeElements[2].construction !== asn1_ts_1.ASN1Construction.constructed
                || attributeElements[2].tagNumber !== asn1_ts_1.ASN1UniversalType.set) {
                return undefined;
            }
            return attributeElements[2].set.map((vwc) => {
                validateTag_1.default(vwc, "valuesWithContext element", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
                const vwcElements = vwc.sequence;
                if (vwcElements.length < 2) {
                    throw new errors.X509Error("Too few elements in a valuesWithContext element.");
                }
                validateTag_1.default(vwcElements[1], "valuesWithContext.contextList", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.set]);
                const contexts = vwcElements[1].set;
                if (contexts.length < 1) {
                    throw new errors.X509Error("valuesWithContext.contextList must have at least one Context.");
                }
                return {
                    value: vwcElements[0],
                    contextList: contexts.map(Context_1.default.fromElement),
                };
            });
        })();
        return new Attribute(type, values, valuesWithContext);
    }
    toElement() {
        const contextElements = [];
        const typeElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.objectIdentifier);
        typeElement.objectIdentifier = this.type;
        contextElements.push(typeElement);
        const valuesElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.set);
        valuesElement.set = this.values;
        contextElements.push(valuesElement);
        const valuesWithContextElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.set);
        if (this.valuesWithContext) {
            valuesWithContextElement.set = this.valuesWithContext.map((vwc) => {
                const vwcElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
                const contextValueElement = vwc.value;
                const contextListElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.set);
                contextListElement.set = vwc.contextList.map(c => c.toElement());
                vwcElement.sequence = [
                    contextValueElement,
                    contextListElement,
                ];
                return vwcElement;
            });
            contextElements.push(valuesWithContextElement);
        }
        const contextElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        contextElement.sequence = contextElements;
        return contextElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return Attribute.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = Attribute;
//# sourceMappingURL=Attribute.js.map