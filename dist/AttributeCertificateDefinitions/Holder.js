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
class Holder {
    constructor(baseCertificateID, entityName, objectDigestInfo) {
        this.baseCertificateID = baseCertificateID;
        this.entityName = entityName;
        this.objectDigestInfo = objectDigestInfo;
    }
    static fromElement(value) {
        validateTag_1.default(value, "Holder", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const holderElements = value.sequence;
        if (holderElements.length < 1) {
            throw new errors.X509Error(`Invalid number of elements in Holder: ${holderElements.length}.`);
        }
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(holderElements)) {
            throw new errors.X509Error("Elements of Holder were not in canonical order.");
        }
        let baseCertificateID;
        let entityName;
        let objectDigestInfo;
        holderElements.forEach((he) => {
            if (he.tagClass === asn1_ts_1.ASN1TagClass.context && he.construction === asn1_ts_1.ASN1Construction.constructed) {
                if (he.tagNumber === 0) {
                    if (baseCertificateID) {
                        throw new errors.X509Error("Holder.baseCertificateID already defined.");
                    }
                    baseCertificateID = IssuerSerial_1.default.fromElement(he);
                }
                else if (he.tagNumber === 1) {
                    if (entityName) {
                        throw new errors.X509Error("Holder.entityName already defined.");
                    }
                    entityName = he.sequence;
                }
                else if (he.tagNumber === 2) {
                    if (objectDigestInfo) {
                        throw new errors.X509Error("Holder.objectDigestInfo already defined.");
                    }
                    objectDigestInfo = ObjectDigestInfo_1.default.fromElement(he);
                }
            }
        });
        if (!baseCertificateID && !entityName && !objectDigestInfo) {
            throw new errors.X509Error("One of { baseCertificateID, entityName, objectDigestInfo } "
                + "must be defined for a Holder element.");
        }
        return new Holder(baseCertificateID, entityName, objectDigestInfo);
    }
    toElement() {
        const holderElements = [];
        if (this.baseCertificateID) {
            const baseCertificateIDElement = this.baseCertificateID.toElement();
            baseCertificateIDElement.tagClass = asn1_ts_1.ASN1TagClass.context;
            baseCertificateIDElement.tagNumber = 0;
            holderElements.push(baseCertificateIDElement);
        }
        if (this.entityName) {
            const entityNameElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.constructed, 1);
            entityNameElement.sequence = this.entityName;
            holderElements.push(entityNameElement);
        }
        if (this.objectDigestInfo) {
            const objectDigestInfoElement = this.objectDigestInfo.toElement();
            objectDigestInfoElement.tagClass = asn1_ts_1.ASN1TagClass.context;
            objectDigestInfoElement.tagNumber = 2;
            holderElements.push(objectDigestInfoElement);
        }
        const holderElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        holderElement.sequence = holderElements;
        return holderElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return Holder.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = Holder;
//# sourceMappingURL=Holder.js.map