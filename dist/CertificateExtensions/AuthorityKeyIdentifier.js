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
class AuthorityKeyIdentifier {
    constructor(keyIdentifier, authorityCertIssuer, authorityCertSerialNumber) {
        this.keyIdentifier = keyIdentifier;
        this.authorityCertIssuer = authorityCertIssuer;
        this.authorityCertSerialNumber = authorityCertSerialNumber;
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on AuthorityKeyIdentifier");
            case -2: throw new errors.X509Error("Invalid construction on AuthorityKeyIdentifier");
            case -3: throw new errors.X509Error("Invalid tag number on AuthorityKeyIdentifier");
            default: throw new errors.X509Error("Undefined error when validating AuthorityKeyIdentifier tag");
        }
        const authorityKeyIdentifierElements = value.sequence;
        if (authorityKeyIdentifierElements.length !== 1
            && authorityKeyIdentifierElements.length !== 3)
            throw new errors.X509Error("Invalid number of elements in AuthorityKeyIdentifier");
        switch (authorityKeyIdentifierElements[0].validateTag([asn1_ts_1.ASN1TagClass.context], [asn1_ts_1.ASN1Construction.primitive], [0])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on AuthorityKeyIdentifier.keyIdentifier");
            case -2: throw new errors.X509Error("Invalid construction on AuthorityKeyIdentifier.keyIdentifier");
            case -3: throw new errors.X509Error("Invalid tag number on AuthorityKeyIdentifier.keyIdentifier");
            default: throw new errors.X509Error("Undefined error when validating AuthorityKeyIdentifier.keyIdentifier tag");
        }
        const keyIdentifier = authorityKeyIdentifierElements[0].octetString;
        let authorityCertIssuer;
        let authorityCertSerialNumber;
        if (authorityKeyIdentifierElements.length === 3) {
            switch (authorityKeyIdentifierElements[1].validateTag([asn1_ts_1.ASN1TagClass.context], [asn1_ts_1.ASN1Construction.constructed], [1])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag class on AuthorityKeyIdentifier.authorityCertIssuer");
                case -2: throw new errors.X509Error("Invalid construction on AuthorityKeyIdentifier.authorityCertIssuer");
                case -3: throw new errors.X509Error("Invalid tag number on AuthorityKeyIdentifier.authorityCertIssuer");
                default: {
                    throw new errors.X509Error("Undefined error when validating AuthorityKeyIdentifier.authorityCertIssuer tag");
                }
            }
            switch (authorityKeyIdentifierElements[2].validateTag([asn1_ts_1.ASN1TagClass.context], [asn1_ts_1.ASN1Construction.primitive], [2])) {
                case 0: break;
                case -1: {
                    throw new errors.X509Error("Invalid tag class on AuthorityKeyIdentifier.authorityCertSerialNumber");
                }
                case -2: {
                    throw new errors.X509Error("Invalid construction on AuthorityKeyIdentifier.authorityCertSerialNumber");
                }
                case -3: {
                    throw new errors.X509Error("Invalid tag number on AuthorityKeyIdentifier.authorityCertSerialNumber");
                }
                default: {
                    throw new errors.X509Error("Undefined error when validating AuthorityKeyIdentifier.authorityCertSerialNumber tag");
                }
            }
            authorityCertIssuer = authorityKeyIdentifierElements[1].sequence;
            authorityCertSerialNumber = authorityKeyIdentifierElements[2].octetString;
        }
        return new AuthorityKeyIdentifier(keyIdentifier, authorityCertIssuer, authorityCertSerialNumber);
    }
    toElement() {
        const authorityKeyIdentifierElements = [];
        const keyIdentifierElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.primitive, 0);
        authorityKeyIdentifierElements.push(keyIdentifierElement);
        if ((this.authorityCertIssuer && !this.authorityCertSerialNumber)
            || (!this.authorityCertIssuer && this.authorityCertSerialNumber)) {
            throw new errors.X509Error("AuthorityKeyIdentifer must have both authorityCertIssuer and "
                + "authorityCertSerialNumber PRESENT or ABSENT.");
        }
        else if (this.authorityCertIssuer && this.authorityCertSerialNumber) {
            const authorityCertIssuer = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.constructed, 1);
            const authorityCertSerialNumber = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.primitive, 2);
            authorityKeyIdentifierElements.push(authorityCertIssuer);
            authorityKeyIdentifierElements.push(authorityCertSerialNumber);
        }
        const authorityKeyIdentifierElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        authorityKeyIdentifierElement.sequence = authorityKeyIdentifierElements;
        return authorityKeyIdentifierElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return AuthorityKeyIdentifier.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = AuthorityKeyIdentifier;
//# sourceMappingURL=AuthorityKeyIdentifier.js.map