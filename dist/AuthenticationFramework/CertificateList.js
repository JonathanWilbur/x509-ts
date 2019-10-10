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
const CertificateListContent_1 = __importDefault(require("./CertificateListContent"));
const AlgorithmIdentifier_1 = __importDefault(require("./AlgorithmIdentifier"));
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
const validateTag_1 = __importDefault(require("../validateTag"));
class CertificateList {
    constructor(certificateListContent, signatureAlgorithm, signatureValue) {
        this.certificateListContent = certificateListContent;
        this.signatureAlgorithm = signatureAlgorithm;
        this.signatureValue = signatureValue;
    }
    static fromElement(value) {
        validateTag_1.default(value, "CertificateList", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const certificateListElements = value.sequence;
        if (certificateListElements.length !== 3) {
            throw new errors.X509Error("Invalid number of elements in CertificateList");
        }
        validateTag_1.default(certificateListElements[2], "CertificateList.signatureValue", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.bitString]);
        return new CertificateList(CertificateListContent_1.default.fromElement(certificateListElements[0]), AlgorithmIdentifier_1.default.fromElement(certificateListElements[1]), certificateListElements[2].bitString);
    }
    toElement() {
        const signatureValueElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.bitString);
        signatureValueElement.bitString = this.signatureValue;
        const ret = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        ret.sequence = [
            this.certificateListContent.toElement(),
            this.signatureAlgorithm.toElement(),
            signatureValueElement,
        ];
        return ret;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return CertificateList.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = CertificateList;
CertificateList.maximumX509CertificateSizeInBytes = 100000;
//# sourceMappingURL=CertificateList.js.map