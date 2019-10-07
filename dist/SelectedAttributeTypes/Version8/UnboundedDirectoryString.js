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
const errors = __importStar(require("../../errors"));
class UnboundedDirectoryString {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return this.value;
    }
    static print(element) {
        const uds = UnboundedDirectoryString.fromElement(element);
        return uds.toString();
    }
    static fromElement(value) {
        if (value.tagClass !== asn1_ts_1.ASN1TagClass.universal) {
            throw new errors.X509Error("UnboundedDirectoryString must be of universal class");
        }
        if (value.construction !== asn1_ts_1.ASN1Construction.primitive) {
            throw new errors.X509Error("UnboundedDirectoryString must be of primitive construction");
        }
        switch (value.tagNumber) {
            case (asn1_ts_1.ASN1UniversalType.teletexString): {
                return new UnboundedDirectoryString("");
            }
            case (asn1_ts_1.ASN1UniversalType.printableString): {
                return new UnboundedDirectoryString(value.printableString);
            }
            case (asn1_ts_1.ASN1UniversalType.bmpString): {
                return new UnboundedDirectoryString(value.bmpString);
            }
            case (asn1_ts_1.ASN1UniversalType.universalString): {
                return new UnboundedDirectoryString(value.universalString);
            }
            case (asn1_ts_1.ASN1UniversalType.utf8String): {
                return new UnboundedDirectoryString(value.utf8String);
            }
            default:
                throw new errors.X509Error("UnboundedDirectoryString was constituted of an invalid CHOICE");
        }
    }
    toElement() {
        const unboundedDirectoryStringElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.utf8String);
        unboundedDirectoryStringElement.utf8String = this.value;
        return unboundedDirectoryStringElement;
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
exports.default = UnboundedDirectoryString;
//# sourceMappingURL=UnboundedDirectoryString.js.map