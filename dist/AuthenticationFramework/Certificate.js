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
const TBSCertificate_1 = __importDefault(require("./TBSCertificate"));
const AlgorithmIdentifier_1 = __importDefault(require("./AlgorithmIdentifier"));
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
class Certificate {
    constructor(tbsCertificate, signatureAlgorithm, signatureValue) {
        this.tbsCertificate = tbsCertificate;
        this.signatureAlgorithm = signatureAlgorithm;
        this.signatureValue = signatureValue;
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on Certificate");
            case -2: throw new errors.X509Error("Invalid construction on Certificate");
            case -3: throw new errors.X509Error("Invalid tag number on Certificate");
            default: throw new errors.X509Error("Undefined error when validating Certificate tag");
        }
        const certificateElements = value.sequence;
        if (certificateElements.length !== 3)
            throw new errors.X509Error("Invalid number of elements in Certificate");
        switch (certificateElements[2].validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.bitString])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on Certificate.signatureValue");
            case -2: throw new errors.X509Error("Invalid construction on Certificate.signatureValue");
            case -3: throw new errors.X509Error("Invalid tag number on Certificate.signatureValue");
            default: throw new errors.X509Error("Undefined error when validating Certificate.signatureValue tag");
        }
        return new Certificate(TBSCertificate_1.default.fromElement(certificateElements[0]), AlgorithmIdentifier_1.default.fromElement(certificateElements[1]), certificateElements[2].bitString);
    }
    toElement() {
        const signatureValueElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.bitString);
        signatureValueElement.bitString = this.signatureValue;
        const ret = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        ret.sequence = [
            this.tbsCertificate.toElement(),
            this.signatureAlgorithm.toElement(),
            signatureValueElement,
        ];
        return ret;
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
exports.default = Certificate;
Certificate.maximumX509CertificateSizeInBytes = 100000;
//# sourceMappingURL=Certificate.js.map