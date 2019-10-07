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
class IssuerSerial {
    constructor(issuer, serial, issuerUID) {
        this.issuer = issuer;
        this.serial = serial;
        this.issuerUID = issuerUID;
    }
    static fromElement(value) {
        validateTag_1.default(value, "IssuerElement", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const issuerSerialElements = value.sequence;
        if (issuerSerialElements.length < 2 || issuerSerialElements.length > 3) {
            throw new errors.X509Error(`Invalid number of elements in IssuerSerial: ${issuerSerialElements.length}`);
        }
        validateTag_1.default(issuerSerialElements[0], "IssuerSerial.issuer", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        validateTag_1.default(issuerSerialElements[1], "IssuerSerial.serial", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.integer]);
        if (issuerSerialElements.length === 3) {
            validateTag_1.default(issuerSerialElements[2], "IssuerSerial.issuerUID", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.bitString]);
        }
        const issuer = issuerSerialElements[0].sequence;
        if (issuer.length < 1) {
            throw new errors.X509Error("No GeneralNames provided in IssuerSerial.issuer.");
        }
        const serial = issuerSerialElements[1].octetString;
        const issuerUID = (() => {
            if (issuerSerialElements.length === 3)
                return issuerSerialElements[2].bitString;
            else
                return undefined;
        })();
        return new IssuerSerial(issuer, serial, issuerUID);
    }
    toElement() {
        const issuerSerialElements = [];
        const issuerElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        issuerElement.sequence = this.issuer;
        issuerSerialElements.push(issuerElement);
        const serialElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.integer);
        serialElement.value = this.serial.subarray(0);
        issuerSerialElements.push(serialElement);
        if (this.issuerUID) {
            const issuerUIDElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.bitString);
            issuerUIDElement.bitString = this.issuerUID;
            issuerSerialElements.push(issuerUIDElement);
        }
        const issuerSerialElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        issuerSerialElement.sequence = issuerSerialElements;
        return issuerSerialElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return IssuerSerial.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = IssuerSerial;
//# sourceMappingURL=IssuerSerial.js.map