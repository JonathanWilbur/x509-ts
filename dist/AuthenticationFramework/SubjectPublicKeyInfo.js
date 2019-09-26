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
const AlgorithmIdentifier_1 = __importDefault(require("./AlgorithmIdentifier"));
class SubjectPublicKeyInfo {
    constructor(algorithm, subjectPublicKey) {
        this.algorithm = algorithm;
        this.subjectPublicKey = subjectPublicKey;
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on SubjectPublicKeyInfo");
            case -2: throw new errors.X509Error("Invalid construction on SubjectPublicKeyInfo");
            case -3: throw new errors.X509Error("Invalid tag number on SubjectPublicKeyInfo");
            default: throw new errors.X509Error("Undefined error when validating SubjectPublicKeyInfo tag");
        }
        const subjectPublicKeyElements = value.sequence;
        switch (subjectPublicKeyElements[1].validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.bitString])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on SubjectPublicKeyInfo.subjectPublicKey");
            case -2: throw new errors.X509Error("Invalid construction on SubjectPublicKeyInfo.subjectPublicKey");
            case -3: throw new errors.X509Error("Invalid tag number on SubjectPublicKeyInfo.subjectPublicKey");
            default: {
                throw new errors.X509Error("Undefined error when validating SubjectPublicKeyInfo.subjectPublicKey tag");
            }
        }
        return new SubjectPublicKeyInfo(AlgorithmIdentifier_1.default.fromElement(subjectPublicKeyElements[0]), subjectPublicKeyElements[1].bitString);
    }
    toElement() {
        if (this.algorithm === undefined)
            throw new errors.X509Error("Algorithm is undefined");
        const ret = new asn1_ts_1.DERElement();
        ret.tagClass = asn1_ts_1.ASN1TagClass.universal;
        ret.construction = asn1_ts_1.ASN1Construction.constructed;
        ret.tagNumber = asn1_ts_1.ASN1UniversalType.sequence;
        const subjectPublicKeyElement = new asn1_ts_1.DERElement();
        subjectPublicKeyElement.tagClass = asn1_ts_1.ASN1TagClass.universal;
        subjectPublicKeyElement.construction = asn1_ts_1.ASN1Construction.primitive;
        subjectPublicKeyElement.tagNumber = asn1_ts_1.ASN1UniversalType.bitString;
        subjectPublicKeyElement.bitString = this.subjectPublicKey;
        ret.sequence = [this.algorithm.toElement(), subjectPublicKeyElement];
        return ret;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return SubjectPublicKeyInfo.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = SubjectPublicKeyInfo;
//# sourceMappingURL=SubjectPublicKeyInfo.js.map