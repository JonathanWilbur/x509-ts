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
const TBSAttributeCertificate_1 = __importDefault(require("./TBSAttributeCertificate"));
const AlgorithmIdentifier_1 = __importDefault(require("../AuthenticationFramework/AlgorithmIdentifier"));
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
const validateTag_1 = __importDefault(require("../validateTag"));
class AttributeCertificate {
    constructor(tbsAttributeCertificate, signatureAlgorithm, signatureValue) {
        this.tbsAttributeCertificate = tbsAttributeCertificate;
        this.signatureAlgorithm = signatureAlgorithm;
        this.signatureValue = signatureValue;
    }
    static fromElement(value) {
        validateTag_1.default(value, "AttributeCertificate", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const attributeCertificateElements = value.sequence;
        if (attributeCertificateElements.length !== 3) {
            throw new errors.X509Error("Invalid number of elements in Certificate");
        }
        validateTag_1.default(attributeCertificateElements[2], "AttributeCertificate.signatureValue", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.bitString]);
        return new AttributeCertificate(TBSAttributeCertificate_1.default.fromElement(attributeCertificateElements[0]), AlgorithmIdentifier_1.default.fromElement(attributeCertificateElements[1]), attributeCertificateElements[2].bitString);
    }
    toElement() {
        const signatureValueElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.bitString);
        signatureValueElement.bitString = this.signatureValue;
        const ret = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        ret.sequence = [
            this.tbsAttributeCertificate.toElement(),
            this.signatureAlgorithm.toElement(),
            signatureValueElement,
        ];
        return ret;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return AttributeCertificate.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = AttributeCertificate;
AttributeCertificate.maximumX509AttributeCertificateSizeInBytes = 100000;
//# sourceMappingURL=AttributeCertificate.js.map