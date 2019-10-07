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
const ObjectDigestInfo_1 = __importDefault(require("./ObjectDigestInfo"));
const IssuerSerial_1 = __importDefault(require("./IssuerSerial"));
class AttCertIssuer {
    constructor(issuerName, baseCertificateID, objectDigestInfo) {
        this.issuerName = issuerName;
        this.baseCertificateID = baseCertificateID;
        this.objectDigestInfo = objectDigestInfo;
    }
    static fromElement(value) {
        validateTag_1.default(value, "AttCertIssuer", [asn1_ts_1.ASN1TagClass.context], [asn1_ts_1.ASN1Construction.constructed], [0]);
        const holderElements = value.sequence;
        if (holderElements.length < 1) {
            throw new errors.X509Error(`Invalid number of elements in AttCertIssuer: ${holderElements.length}.`);
        }
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(holderElements)) {
            throw new errors.X509Error("Elements of AttCertIssuer were not in canonical order.");
        }
        let issuerName;
        let baseCertificateID;
        let objectDigestInfo;
        holderElements.forEach((he) => {
            if (he.construction !== asn1_ts_1.ASN1Construction.constructed)
                return;
            if (he.tagClass === asn1_ts_1.ASN1TagClass.context) {
                if (he.tagNumber === 0) {
                    if (baseCertificateID) {
                        throw new errors.X509Error("AttCertIssuer.baseCertificateID already defined.");
                    }
                    baseCertificateID = IssuerSerial_1.default.fromElement(he);
                }
                else if (he.tagNumber === 1) {
                    if (objectDigestInfo) {
                        throw new errors.X509Error("AttCertIssuer.objectDigestInfo already defined.");
                    }
                    objectDigestInfo = ObjectDigestInfo_1.default.fromElement(he);
                }
            }
            else if (he.tagClass === asn1_ts_1.ASN1TagClass.universal
                && he.tagNumber === asn1_ts_1.ASN1UniversalType.sequence) {
                if (issuerName) {
                    throw new errors.X509Error("AttCertIssuer.issuerName already defined.");
                }
                issuerName = he.sequence;
            }
        });
        if (!baseCertificateID && !issuerName && !objectDigestInfo) {
            throw new errors.X509Error("One of { baseCertificateID, issuerName, objectDigestInfo } "
                + "must be defined for a AttCertIssuer element.");
        }
        return new AttCertIssuer(issuerName, baseCertificateID, objectDigestInfo);
    }
    toElement() {
        const attCertIssuerElements = [];
        if (this.issuerName) {
            const issuerNameElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
            issuerNameElement.sequence = this.issuerName;
            attCertIssuerElements.push(issuerNameElement);
        }
        if (this.baseCertificateID) {
            const baseCertificateIDElement = this.baseCertificateID.toElement();
            baseCertificateIDElement.tagClass = asn1_ts_1.ASN1TagClass.context;
            baseCertificateIDElement.tagNumber = 0;
            attCertIssuerElements.push(baseCertificateIDElement);
        }
        if (this.objectDigestInfo) {
            const objectDigestInfoElement = this.objectDigestInfo.toElement();
            objectDigestInfoElement.tagClass = asn1_ts_1.ASN1TagClass.context;
            objectDigestInfoElement.tagNumber = 1;
            attCertIssuerElements.push(objectDigestInfoElement);
        }
        const attCertIssuerElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        attCertIssuerElement.sequence = attCertIssuerElements;
        return attCertIssuerElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return AttCertIssuer.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = AttCertIssuer;
//# sourceMappingURL=AttCertIssuer.js.map