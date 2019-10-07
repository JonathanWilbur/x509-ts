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
const AlgorithmIdentifier_1 = __importDefault(require("../AuthenticationFramework/AlgorithmIdentifier"));
class ObjectDigestInfo {
    constructor(digestedObjectType, otherObjectTypeID, digestAlgorithm, objectDigest) {
        this.digestedObjectType = digestedObjectType;
        this.otherObjectTypeID = otherObjectTypeID;
        this.digestAlgorithm = digestAlgorithm;
        this.objectDigest = objectDigest;
    }
    static fromElement(value) {
        validateTag_1.default(value, "ObjectDigestInfo", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const objectDigestInfoElements = value.sequence;
        if (objectDigestInfoElements.length < 3) {
            throw new errors.X509Error(`Too few elements in ObjectDigestInfo: ${objectDigestInfoElements.length}.`);
        }
        const elements = new Map([
            ["digestedObjectType", objectDigestInfoElements[0]],
        ]);
        if (objectDigestInfoElements[1].tagNumber === asn1_ts_1.ASN1UniversalType.objectIdentifier) {
            if (objectDigestInfoElements.length < 4) {
                throw new errors.X509Error(`Too few elements in ObjectDigestInfo: ${objectDigestInfoElements.length}.`);
            }
            elements.set("otherObjectTypeID", objectDigestInfoElements[1]);
            elements.set("digestAlgorithm", objectDigestInfoElements[2]);
            elements.set("objectDigest", objectDigestInfoElements[3]);
        }
        else {
            elements.set("digestAlgorithm", objectDigestInfoElements[1]);
            elements.set("objectDigest", objectDigestInfoElements[2]);
        }
        validateTag_1.default(elements.get("digestedObjectType"), "ObjectDigestInfo.digestedObjectType", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.enumerated]);
        if (elements.has("otherObjectTypeID")) {
            validateTag_1.default(elements.get("otherObjectTypeID"), "ObjectDigestInfo.otherObjectTypeID", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.objectIdentifier]);
        }
        validateTag_1.default(elements.get("objectDigest"), "ObjectDigestInfo.objectDigest", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.bitString]);
        const digestedObjectType = elements.get("digestedObjectType").enumerated;
        const otherObjectTypeID = elements.has("otherObjectTypeID")
            ? elements.get("otherObjectTypeID").objectIdentifier
            : undefined;
        const digestAlgorithm = AlgorithmIdentifier_1.default
            .fromElement(elements.get("digestAlgorithm"));
        const objectDigest = elements.get("objectDigest").bitString;
        return new ObjectDigestInfo(digestedObjectType, otherObjectTypeID, digestAlgorithm, objectDigest);
    }
    toElement() {
        const objectDigestInfoElements = [];
        const digestedObjectTypeElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.enumerated);
        digestedObjectTypeElement.enumerated = this.digestedObjectType;
        objectDigestInfoElements.push(digestedObjectTypeElement);
        if (this.otherObjectTypeID) {
            const otherObjectTypeIDElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.objectIdentifier);
            otherObjectTypeIDElement.objectIdentifier = this.otherObjectTypeID;
            objectDigestInfoElements.push(otherObjectTypeIDElement);
        }
        const digestAlgorithmElement = this.digestAlgorithm.toElement();
        objectDigestInfoElements.push(digestAlgorithmElement);
        const objectDigestElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.bitString);
        objectDigestElement.bitString = this.objectDigest;
        objectDigestInfoElements.push(objectDigestElement);
        const objectDigestInfoElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        objectDigestInfoElement.sequence = objectDigestInfoElements;
        return objectDigestInfoElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return ObjectDigestInfo.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = ObjectDigestInfo;
//# sourceMappingURL=ObjectDigestInfo.js.map