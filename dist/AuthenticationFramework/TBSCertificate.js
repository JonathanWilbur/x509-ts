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
const Validity_1 = __importDefault(require("./Validity"));
const SubjectPublicKeyInfo_1 = __importDefault(require("./SubjectPublicKeyInfo"));
const AlgorithmIdentifier_1 = __importDefault(require("./AlgorithmIdentifier"));
const Extension_1 = __importDefault(require("./Extension"));
const InformationFramework_1 = require("../InformationFramework");
class TBSCertificate {
    constructor(ver = 0, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, issuerUniqueID, subjectUniqueID, extensions) {
        this.ver = ver;
        this.serialNumber = serialNumber;
        this.signature = signature;
        this.issuer = issuer;
        this.validity = validity;
        this.subject = subject;
        this.subjectPublicKeyInfo = subjectPublicKeyInfo;
        this.issuerUniqueID = issuerUniqueID;
        this.subjectUniqueID = subjectUniqueID;
        this.extensions = extensions;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on TBSCertificate");
            case -2: throw new errors.X509Error("Invalid construction on TBSCertificate");
            case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate");
            default: throw new errors.X509Error("Undefined error when validating TBSCertificate tag");
        }
        const tbsCertificateElements = value.sequence;
        if (tbsCertificateElements.length < 6) {
            throw new errors.X509Error(`TBSCertificate was too short. It contained ${tbsCertificateElements.length} elements.`);
        }
        let ver = 0;
        let serialNumber;
        let issuerUniqueID = undefined;
        let subjectUniqueID = undefined;
        let extensions = undefined;
        let encounteredElements = 0;
        {
            if (tbsCertificateElements[encounteredElements].tagClass === 2
                && tbsCertificateElements[encounteredElements].construction === 1
                && tbsCertificateElements[encounteredElements].tagNumber === 0) {
                const versionElements = tbsCertificateElements[encounteredElements].sequence;
                if (versionElements.length !== 1)
                    throw new errors.X509Error("version can only contain one element.");
                switch (versionElements[0].validateTag([0], [0], [2])) {
                    case 0: break;
                    case -1: throw new errors.X509Error("Invalid tag class on TBSCertificate.version inner element");
                    case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.version inner element");
                    case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.version inner element");
                    default: {
                        throw new errors.X509Error("Undefined error when validating TBSCertificate.version inner element tag");
                    }
                }
                switch (versionElements[0].integer) {
                    case 0:
                        ver = 0;
                        break;
                    case 1:
                        ver = 1;
                        break;
                    case 2:
                        ver = 2;
                        break;
                    default:
                        throw new errors.X509Error("Invalid X.509 Certificate version.");
                }
                encounteredElements++;
            }
        }
        {
            switch (tbsCertificateElements[encounteredElements].validateTag([0], [0], [2])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag class on TBSCertificate.serialNumber");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.serialNumber");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.serialNumber");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.serialNumber tag");
            }
            serialNumber = tbsCertificateElements[encounteredElements++].octetString;
        }
        const signature = AlgorithmIdentifier_1.default.fromElement(tbsCertificateElements[encounteredElements++]);
        const issuer = InformationFramework_1.RDNSequence.fromElement(tbsCertificateElements[encounteredElements++]);
        const validity = Validity_1.default.fromElement(tbsCertificateElements[encounteredElements++]);
        const subject = InformationFramework_1.RDNSequence.fromElement(tbsCertificateElements[encounteredElements++]);
        const subjectPublicKeyInfo = SubjectPublicKeyInfo_1.default.fromElement(tbsCertificateElements[encounteredElements++]);
        if (encounteredElements < tbsCertificateElements.length
            && tbsCertificateElements[encounteredElements].tagClass === 2
            && tbsCertificateElements[encounteredElements].construction === 0
            && tbsCertificateElements[encounteredElements].tagNumber === 1) {
            if (ver === 0) {
                throw new errors.X509Error("issuerUniqueIdentifier not allowed in Version 1 X.509 certificate.");
            }
            issuerUniqueID = tbsCertificateElements[encounteredElements].bitString;
            encounteredElements++;
        }
        let endOfTBSCertficateExtensionsIndex = encounteredElements;
        while (endOfTBSCertficateExtensionsIndex < tbsCertificateElements.length
            && !(tbsCertificateElements[encounteredElements].tagClass === 2
                && (tbsCertificateElements[encounteredElements].tagNumber === 2
                    || tbsCertificateElements[encounteredElements].tagNumber === 3)))
            endOfTBSCertficateExtensionsIndex++;
        asn1_ts_1.DERElement.isInCanonicalOrder(tbsCertificateElements.slice(encounteredElements, endOfTBSCertficateExtensionsIndex));
        asn1_ts_1.DERElement.isUniquelyTagged(tbsCertificateElements.slice(encounteredElements, endOfTBSCertficateExtensionsIndex));
        while (encounteredElements < tbsCertificateElements.length) {
            if (tbsCertificateElements[encounteredElements].tagClass === 2) {
                switch (tbsCertificateElements[encounteredElements].tagNumber) {
                    case (2): {
                        if (ver === 0) {
                            throw new errors.X509Error("subjectUniqueIdentifier not allowed in Version 1 X.509 certificate.");
                        }
                        if ((tbsCertificateElements.length - encounteredElements) > 2) {
                            throw new errors.X509Error("subjectUniqueIdentifier must be last or second to last in the TBSCertificate.");
                        }
                        subjectUniqueID = tbsCertificateElements[encounteredElements].bitString;
                        break;
                    }
                    case (3): {
                        if (ver !== 2) {
                            throw new errors.X509Error("extensions not allowed in Version 1 or 2 X.509 certificate.");
                        }
                        if ((tbsCertificateElements.length - encounteredElements) !== 1) {
                            throw new errors.X509Error("extensions must be the last element in the TBSCertificate.");
                        }
                        switch (tbsCertificateElements[encounteredElements].validateTag([2], [1], [3])) {
                            case 0: break;
                            case -1: {
                                throw new errors.X509Error("Invalid tag class on a TBSCertificate.extensions outer element");
                            }
                            case -2: {
                                throw new errors.X509Error("Invalid construction on a TBSCertificate.extensions outer element");
                            }
                            case -3: {
                                throw new errors.X509Error("Invalid tag number on a TBSCertificate.extensions outer element");
                            }
                            default: {
                                throw new errors.X509Error("Undefined error when validating a TBSCertificate.extensions outer element tag");
                            }
                        }
                        const extensionsElement = new asn1_ts_1.DERElement();
                        extensionsElement.fromBytes(tbsCertificateElements[encounteredElements].value);
                        const extensionElements = extensionsElement.sequence;
                        if (extensionElements.length === 0) {
                            throw new errors.X509Error("extensions element may not be present in X.509 "
                                + "TBSCertificate if there are no extensions in it.");
                        }
                        if (typeof extensions === "undefined")
                            extensions = [];
                        extensions = extensions.concat(extensionElements.map(Extension_1.default.fromElement));
                        break;
                    }
                    default: break;
                }
            }
            encounteredElements++;
        }
        return new TBSCertificate(ver, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, issuerUniqueID, subjectUniqueID, extensions);
    }
    toElement() {
        const retSequence = [];
        {
            const versionInnerElement = new asn1_ts_1.DERElement(0, 0, 2);
            versionInnerElement.integer = this.ver;
            const versionOuterElement = new asn1_ts_1.DERElement(2, 1, 0);
            versionOuterElement.sequence = [versionInnerElement];
            retSequence.push(versionOuterElement);
        }
        {
            const serialNumberElement = new asn1_ts_1.DERElement(0, 0, 2);
            serialNumberElement.octetString = this.serialNumber;
            retSequence.push(serialNumberElement);
        }
        {
            retSequence.push(this.signature.toElement());
        }
        {
            const issuerElement = new asn1_ts_1.DERElement(0, 1, 16);
            issuerElement.sequence = this.issuer.value.map((rdn) => {
                const rdnElement = new asn1_ts_1.DERElement(0, 1, 17);
                rdnElement.sequence = rdn.value.map((rdnValue) => rdnValue.toElement());
                return rdnElement;
            });
            retSequence.push(issuerElement);
        }
        {
            retSequence.push(this.validity.toElement());
        }
        {
            const subjectElement = new asn1_ts_1.DERElement(0, 1, 16);
            subjectElement.sequence = this.subject.value.map((rdn) => {
                const rdnElement = new asn1_ts_1.DERElement(0, 1, 17);
                rdnElement.sequence = rdn.value.map((rdnValue) => rdnValue.toElement());
                return rdnElement;
            });
            retSequence.push(subjectElement);
        }
        {
            retSequence.push(this.subjectPublicKeyInfo.toElement());
        }
        if (this.ver !== 0) {
            if (this.issuerUniqueID) {
                const issuerUniqueIdentifierElement = new asn1_ts_1.DERElement(2, 0, 1);
                issuerUniqueIdentifierElement.bitString = this.issuerUniqueID;
                retSequence.push(issuerUniqueIdentifierElement);
            }
            if (this.subjectUniqueID) {
                const subjectUniqueIdentifierElement = new asn1_ts_1.DERElement(2, 0, 2);
                subjectUniqueIdentifierElement.bitString = this.subjectUniqueID;
                retSequence.push(subjectUniqueIdentifierElement);
            }
        }
        if (this.ver === 2) {
            if (this.extensions) {
                const extensionElements = [];
                this.extensions.forEach((extension) => {
                    extensionElements.push(extension.toElement());
                });
                const extensionsElement = new asn1_ts_1.DERElement(0, 1, 16);
                extensionsElement.sequence = extensionElements;
                const extensionsOuterElement = new asn1_ts_1.DERElement(2, 1, 3);
                extensionsOuterElement.sequence = [extensionsElement];
                retSequence.push(extensionsOuterElement);
            }
        }
        const ret = new asn1_ts_1.DERElement(0, 1, 16);
        ret.sequence = retSequence;
        return ret;
    }
    fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return TBSCertificate.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = TBSCertificate;
//# sourceMappingURL=TBSCertificate.js.map