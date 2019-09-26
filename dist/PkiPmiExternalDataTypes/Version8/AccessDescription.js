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
class AccessDescription {
    constructor(accessMethod, accessLocation) {
        this.accessMethod = accessMethod;
        this.accessLocation = accessLocation;
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on AccessDescription");
            case -2: throw new errors.X509Error("Invalid construction on AccessDescription");
            case -3: throw new errors.X509Error("Invalid tag number on AccessDescription");
            default: throw new errors.X509Error("Undefined error when validating AccessDescription tag");
        }
        const accessDescriptionElements = value.sequence;
        if (accessDescriptionElements.length !== 2) {
            throw new errors.X509Error("Invalid number of elements in AccessDescription.");
        }
        switch (accessDescriptionElements[0].validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.objectIdentifier])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on AccessDescription.accessMethod");
            case -2: throw new errors.X509Error("Invalid construction on AccessDescription.accessMethod");
            case -3: throw new errors.X509Error("Invalid tag number on AccessDescription.accessMethod");
            default: throw new errors.X509Error("Undefined error when validating AccessDescription.accessMethod tag");
        }
        return new AccessDescription(accessDescriptionElements[0].objectIdentifier, accessDescriptionElements[1]);
    }
    toElement() {
        const accessMethodElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.objectIdentifier);
        accessMethodElement.objectIdentifier = this.accessMethod;
        const accessDescriptionElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        accessDescriptionElement.sequence = [
            accessMethodElement,
            this.accessLocation,
        ];
        return accessDescriptionElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return AccessDescription.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = AccessDescription;
//# sourceMappingURL=AccessDescription.js.map