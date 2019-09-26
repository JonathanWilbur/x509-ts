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
class PrivateKeyUsagePeriod {
    constructor(notBefore, notAfter) {
        this.notBefore = notBefore;
        this.notAfter = notAfter;
        if (!notBefore && !notAfter) {
            throw new errors.X509Error("Either notBefore or notAfter must be set in PrivateKeyUsagePeriod");
        }
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on inner sequence of PrivateKeyUsagePeriod");
            case -2: throw new errors.X509Error("Invalid construction on inner sequence of PrivateKeyUsagePeriod");
            case -3: throw new errors.X509Error("Invalid tag number on inner sequence of PrivateKeyUsagePeriod");
            default: {
                throw new errors.X509Error("Undefined error when validating inner sequence of PrivateKeyUsagePeriod tag");
            }
        }
        const privateKeyUsagePeriodElements = value.sequence;
        if (privateKeyUsagePeriodElements.length === 0) {
            throw new errors.X509Error("PrivateKeyUsagePeriod must have at least one element in SEQUENCE");
        }
        let notBefore;
        let notAfter;
        let fixedPositionElementsEncountered = 0;
        privateKeyUsagePeriodElements.forEach((element) => {
            if (element.tagClass === asn1_ts_1.ASN1TagClass.context) {
                if (element.tagNumber === 0) {
                    if (notBefore)
                        throw new errors.X509Error("PrivateKeyUsagePeriod.notBefore already defined");
                    notBefore = element.generalizedTime;
                    fixedPositionElementsEncountered++;
                }
                else if (element.tagNumber === 1) {
                    if (notAfter)
                        throw new errors.X509Error("PrivateKeyUsagePeriod.notAfter already defined");
                    notAfter = element.generalizedTime;
                    fixedPositionElementsEncountered++;
                }
            }
        });
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(privateKeyUsagePeriodElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Extended elements of PrivateKeyUsagePeriod were not in canonical order");
        }
        return new PrivateKeyUsagePeriod(notBefore, notAfter);
    }
    toElement() {
        const privateKeyUsagePeriodElements = [];
        if (this.notBefore) {
            const notBeforeElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.generalizedTime);
            notBeforeElement.generalizedTime = this.notBefore;
            privateKeyUsagePeriodElements.push(notBeforeElement);
        }
        if (this.notAfter) {
            const notAfterElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.generalizedTime);
            notAfterElement.generalizedTime = this.notAfter;
            privateKeyUsagePeriodElements.push(notAfterElement);
        }
        const privateKeyUsagePeriodElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        privateKeyUsagePeriodElement.sequence = privateKeyUsagePeriodElements;
        return privateKeyUsagePeriodElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return PrivateKeyUsagePeriod.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = PrivateKeyUsagePeriod;
//# sourceMappingURL=PrivateKeyUsagePeriod.js.map