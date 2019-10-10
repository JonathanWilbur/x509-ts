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
const AttCertVersion_1 = __importDefault(require("./AttCertVersion"));
const AlgorithmIdentifier_1 = __importDefault(require("../AuthenticationFramework/AlgorithmIdentifier"));
const Holder_1 = __importDefault(require("./Holder"));
const AttCertIssuer_1 = __importDefault(require("./AttCertIssuer"));
const AttCertValidityPeriod_1 = __importDefault(require("./AttCertValidityPeriod"));
const Attribute_1 = __importDefault(require("../InformationFramework/Attribute"));
const AuthenticationFramework_1 = require("../AuthenticationFramework");
class TBSAttributeCertificate {
    constructor(ver = AttCertVersion_1.default.v2, holder, issuer, signature, serialNumber, attrCertValidityPeriod, attributes, issuerUniqueID, extensions) {
        this.ver = ver;
        this.holder = holder;
        this.issuer = issuer;
        this.signature = signature;
        this.serialNumber = serialNumber;
        this.attrCertValidityPeriod = attrCertValidityPeriod;
        this.attributes = attributes;
        this.issuerUniqueID = issuerUniqueID;
        this.extensions = extensions;
    }
    static fromElement(value) {
        validateTag_1.default(value, "TBSAttributeCertificate", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const attributeCertificateElements = value.sequence;
        if (attributeCertificateElements.length < 7) {
            throw new errors.X509Error(`TBSAttributeCertificate was too short. It contained ${attributeCertificateElements.length} elements.`);
        }
        validateTag_1.default(attributeCertificateElements[0], "TBSAttributeCertificate.version", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.integer]);
        validateTag_1.default(attributeCertificateElements[4], "TBSAttributeCertificate.serialNumber", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.integer]);
        validateTag_1.default(attributeCertificateElements[6], "TBSAttributeCertificate.attributes", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const ver = attributeCertificateElements[0].integer;
        const holder = Holder_1.default.fromElement(attributeCertificateElements[1]);
        const issuer = AttCertIssuer_1.default.fromElement(attributeCertificateElements[2]);
        const signature = AlgorithmIdentifier_1.default.fromElement(attributeCertificateElements[3]);
        const serialNumber = attributeCertificateElements[4].octetString;
        const attrCertValidityPeriod = AttCertValidityPeriod_1.default.fromElement(attributeCertificateElements[5]);
        const attributes = attributeCertificateElements[6].sequence.map(Attribute_1.default.fromElement);
        let encounteredElements = 7;
        let issuerUniqueID = undefined;
        if (attributeCertificateElements.length > 7
            && attributeCertificateElements[7].tagClass === asn1_ts_1.ASN1TagClass.universal
            && attributeCertificateElements[7].construction === asn1_ts_1.ASN1Construction.primitive
            && attributeCertificateElements[7].tagNumber === asn1_ts_1.ASN1UniversalType.bitString) {
            issuerUniqueID = attributeCertificateElements[7].bitString;
            encounteredElements++;
        }
        let extensions = undefined;
        if (attributeCertificateElements.length > 8
            && attributeCertificateElements[attributeCertificateElements.length - 1].tagClass === asn1_ts_1.ASN1TagClass.universal
            && attributeCertificateElements[attributeCertificateElements.length - 1].construction === asn1_ts_1.ASN1Construction.constructed
            && attributeCertificateElements[attributeCertificateElements.length - 1].tagNumber === asn1_ts_1.ASN1UniversalType.sequence) {
            extensions = attributeCertificateElements[attributeCertificateElements.length - 1].sequence.map(AuthenticationFramework_1.Extension.fromElement);
        }
        asn1_ts_1.DERElement.isInCanonicalOrder(attributeCertificateElements.slice(encounteredElements, extensions ? (attributeCertificateElements.length - 1) : undefined));
        asn1_ts_1.DERElement.isUniquelyTagged(attributeCertificateElements.slice(encounteredElements, extensions ? (attributeCertificateElements.length - 1) : undefined));
        return new TBSAttributeCertificate(ver, holder, issuer, signature, serialNumber, attrCertValidityPeriod, attributes, issuerUniqueID, extensions);
    }
    toElement() {
        const attributeCertificateElements = [];
        const versionElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.integer);
        versionElement.integer = this.ver;
        attributeCertificateElements.push(versionElement);
        attributeCertificateElements.push(this.holder.toElement());
        attributeCertificateElements.push(this.issuer.toElement());
        attributeCertificateElements.push(this.signature.toElement());
        const serialNumberElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.integer);
        serialNumberElement.octetString = this.serialNumber;
        attributeCertificateElements.push(serialNumberElement);
        attributeCertificateElements.push(this.attrCertValidityPeriod.toElement());
        const attributesElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        attributesElement.sequence = this.attributes.map(a => a.toElement());
        attributeCertificateElements.push(attributesElement);
        if (this.issuerUniqueID) {
            const issuerUniqueIDElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.bitString);
            issuerUniqueIDElement.bitString = this.issuerUniqueID;
            attributeCertificateElements.push(issuerUniqueIDElement);
        }
        if (this.extensions) {
            const extensionsElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
            extensionsElement.sequence = this.extensions.map(e => e.toElement());
            attributeCertificateElements.push(extensionsElement);
        }
        const ret = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        ret.sequence = attributeCertificateElements;
        return ret;
    }
    fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return TBSAttributeCertificate.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = TBSAttributeCertificate;
//# sourceMappingURL=TBSAttributeCertificate.js.map