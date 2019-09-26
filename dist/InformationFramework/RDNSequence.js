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
const RelativeDistinguishedName_1 = __importDefault(require("./RelativeDistinguishedName"));
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
class RDNSequence {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return this.value.map((rdn) => rdn.toString()).join(",");
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on RDNSequence");
            case -2: throw new errors.X509Error("Invalid construction on RDNSequence");
            case -3: throw new errors.X509Error("Invalid tag number on RDNSequence");
            default: throw new errors.X509Error("Undefined error when validating RDNSequence tag");
        }
        const rdnSequenceElements = value.set;
        return new RDNSequence(rdnSequenceElements.map(RelativeDistinguishedName_1.default.fromElement));
    }
    toElement() {
        const rdnSequenceElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        rdnSequenceElement.set = this.value.map((rdn) => rdn.toElement());
        return rdnSequenceElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return this.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = RDNSequence;
//# sourceMappingURL=RDNSequence.js.map