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
class Context {
    constructor(contextType, contextValues, fallback = false) {
        this.contextType = contextType;
        this.contextValues = contextValues;
        this.fallback = fallback;
    }
    static fromElement(value) {
        validateTag_1.default(value, "Context", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const contextElements = value.sequence;
        if (contextElements.length < 2) {
            throw new errors.X509Error(`Invalid number of elements in Context: ${contextElements.length}.`);
        }
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(contextElements)) {
            throw new errors.X509Error("Elements of Context were not in canonical order.");
        }
        validateTag_1.default(contextElements[0], "Context.contextType", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.objectIdentifier]);
        validateTag_1.default(contextElements[1], "Context.contextValues", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.set]);
        const contextType = contextElements[0].objectIdentifier;
        const contextValues = contextElements[1].set;
        const fallback = (() => {
            if (contextElements.length > 2
                && contextElements[2].tagClass === asn1_ts_1.ASN1TagClass.universal
                && contextElements[2].construction === asn1_ts_1.ASN1Construction.primitive
                && contextElements[2].tagNumber === asn1_ts_1.ASN1UniversalType.boolean) {
                return contextElements[2].boolean;
            }
            return undefined;
        })();
        return new Context(contextType, contextValues, fallback);
    }
    toElement() {
        const contextElements = [];
        const contextTypeElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.objectIdentifier);
        contextTypeElement.objectIdentifier = this.contextType;
        contextElements.push(contextTypeElement);
        const contextValuesElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.set);
        contextValuesElement.set = this.contextValues;
        contextElements.push(contextValuesElement);
        if (this.fallback === true) {
            const fallbackElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.boolean);
            fallbackElement.boolean = this.fallback;
            contextElements.push(fallbackElement);
        }
        const contextElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        contextElement.sequence = contextElements;
        return contextElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return Context.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = Context;
//# sourceMappingURL=Context.js.map