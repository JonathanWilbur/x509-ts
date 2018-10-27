import { DERElement } from "asn1-ts";
import * as errors from "../errors";
import Validity from "./Validity";
import SubjectPublicKeyInfo from "./SubjectPublicKeyInfo";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";
import Extension from "./Extension";
export default class TBSCertificate {
    constructor(ver = 2, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, issuerUniqueID, subjectUniqueID, extensions) {
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
            case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate");
            case -2: throw new errors.X509Error("Invalid construction on TBSCertificate");
            case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate");
            default: throw new errors.X509Error("Undefined error when validating TBSCertificate tag");
        }
        const tbsCertificateElements = value.sequence;
        if (tbsCertificateElements.length > 10)
            throw new errors.X509Error("");
        else if (tbsCertificateElements.length < 7)
            throw new errors.X509Error("");
        let ver = 2;
        let serialNumber;
        let signature;
        let issuer = [];
        let validity;
        let subject = [];
        let subjectPublicKeyInfo;
        let issuerUniqueID = undefined;
        let subjectUniqueID = undefined;
        let extensions = [];
        {
            switch (tbsCertificateElements[0].validateTag([3], [1], [0])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.version");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.version");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.version");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.version tag");
            }
            const versionElements = tbsCertificateElements[0].sequence;
            if (versionElements.length !== 1)
                throw new errors.X509Error("version can only contain one element");
            switch (versionElements[0].validateTag([0], [0], [2])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.version inner element");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.version inner element");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.version inner element");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.version inner element tag");
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
            switch (tbsCertificateElements[1].validateTag([0], [0], [2])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.serialNumber");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.serialNumber");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.serialNumber");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.serialNumber tag");
            }
        }
        {
            switch (tbsCertificateElements[1].validateTag([0], [0], [2])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.serialNumber");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.serialNumber");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.serialNumber");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.serialNumber tag");
            }
            serialNumber = tbsCertificateElements[1].octetString;
        }
        {
            signature = AlgorithmIdentifier.fromElement(tbsCertificateElements[2]);
        }
        {
            switch (tbsCertificateElements[3].validateTag([0], [1], [16])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.issuer");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.issuer");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.issuer");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.issuer tag");
            }
            const rdnElements = tbsCertificateElements[3].sequence;
            rdnElements.forEach(rdnElement => {
                switch (rdnElement.validateTag([0], [1], [17])) {
                    case 0: break;
                    case -1: throw new errors.X509Error("Invalid tag number on a TBSCertificate.issuer RDN");
                    case -2: throw new errors.X509Error("Invalid construction on a TBSCertificate.issuer RDN");
                    case -3: throw new errors.X509Error("Invalid tag number on a TBSCertificate.issuer RDN");
                    default: throw new errors.X509Error("Undefined error when validating a TBSCertificate.issuer RDN tag");
                }
                const rdnValues = rdnElement.set;
                let rdn = [];
                rdnValues.forEach(rdnValue => {
                    rdn.push(AttributeTypeAndValue.fromElement(rdnValue));
                });
                issuer.push(rdn);
            });
        }
        {
            validity = Validity.fromElement(tbsCertificateElements[4]);
        }
        {
            switch (tbsCertificateElements[5].validateTag([0], [1], [16])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.subject");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.subject");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.subject");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.subject tag");
            }
            const rdnElements = tbsCertificateElements[3].sequence;
            rdnElements.forEach(rdnElement => {
                switch (rdnElement.validateTag([0], [1], [17])) {
                    case 0: break;
                    case -1: throw new errors.X509Error("Invalid tag number on a TBSCertificate.subject RDN");
                    case -2: throw new errors.X509Error("Invalid construction on a TBSCertificate.subject RDN");
                    case -3: throw new errors.X509Error("Invalid tag number on a TBSCertificate.subject RDN");
                    default: throw new errors.X509Error("Undefined error when validating a TBSCertificate.subject RDN tag");
                }
                const rdnValues = rdnElement.set;
                let rdn = [];
                rdnValues.forEach(rdnValue => {
                    rdn.push(AttributeTypeAndValue.fromElement(rdnValue));
                });
                subject.push(rdn);
            });
        }
        {
            subjectPublicKeyInfo = SubjectPublicKeyInfo.fromElement(tbsCertificateElements[6]);
        }
        if (tbsCertificateElements.length > 8) {
            for (let i = 8; i < tbsCertificateElements.length; i++) {
                if (tbsCertificateElements[i].tagNumber <= tbsCertificateElements[i - 1].tagNumber)
                    throw new errors.X509Error("TBSCertificate sequence out of order.");
            }
        }
        if (tbsCertificateElements.length > 7) {
            for (let i = 7; i < tbsCertificateElements.length; i++) {
                switch (tbsCertificateElements[i].tagNumber) {
                    case (1): {
                        if (ver === 0)
                            throw new errors.X509Error("issuerUniqueIdentifier not allowed in Version 1 X.509 certificate.");
                        issuerUniqueID = tbsCertificateElements[i].bitString;
                        break;
                    }
                    case (2): {
                        if (ver === 0)
                            throw new errors.X509Error("subjectUniqueIdentifier not allowed in Version 1 X.509 certificate.");
                        subjectUniqueID = tbsCertificateElements[i].bitString;
                        break;
                    }
                    case (3): {
                        if (ver !== 2)
                            throw new errors.X509Error("extensions not allowed in Version 1 or 2 X.509 certificate.");
                        const extensionElements = tbsCertificateElements[i].sequence;
                        if (extensionElements.length === 0)
                            throw new errors.X509Error("extensions element may not be present in X.509 TBSCertificate if there are no extensions in it.");
                        extensionElements.forEach((extensionElement) => {
                            extensions.push(Extension.fromElement(extensionElement));
                        });
                        break;
                    }
                    default:
                        throw new errors.X509Error(`Invalid element with context-specific tag number ${tbsCertificateElements[i].tagNumber} in X.509 TBSCertificate.`);
                }
            }
        }
        switch (ver) {
            case 0: {
                return new TBSCertificate(ver, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, undefined, undefined, undefined);
            }
            case 1: {
                return new TBSCertificate(ver, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, issuerUniqueID, subjectUniqueID, undefined);
            }
            case 2: {
                return new TBSCertificate(ver, serialNumber, signature, issuer, validity, subject, subjectPublicKeyInfo, issuerUniqueID, subjectUniqueID, extensions);
            }
            default:
                throw new errors.X509Error("Unrecognized X.509 Certificate version.");
        }
    }
    toElement() {
        let retSequence = [];
        {
            const versionInnerElement = new DERElement(0, 0, 2);
            versionInnerElement.integer = this.ver;
            const versionOuterElement = new DERElement(3, 1, 0);
            versionOuterElement.sequence = [versionInnerElement];
            retSequence.push(versionOuterElement);
        }
        {
            const serialNumberElement = new DERElement(0, 0, 2);
            serialNumberElement.octetString = this.serialNumber;
            retSequence.push(serialNumberElement);
        }
        {
            retSequence.push(this.signature.toElement());
        }
        {
            let issuerElements = [];
            this.issuer.forEach(rdn => {
                let rdnElements = [];
                rdn.forEach(rdnValue => {
                    rdnElements.push(rdnValue.toElement());
                });
                const rdnElement = new DERElement(0, 1, 17);
                rdnElement.sequence = rdnElements;
                issuerElements.push(rdnElement);
            });
            const issuerElement = new DERElement(0, 1, 16);
            issuerElement.sequence = issuerElements;
            retSequence.push(issuerElement);
        }
        {
            retSequence.push(this.validity.toElement());
        }
        {
            let subjectElements = [];
            this.subject.forEach(rdn => {
                let rdnElements = [];
                rdn.forEach(rdnValue => {
                    rdnElements.push(rdnValue.toElement());
                });
                const rdnElement = new DERElement(0, 1, 17);
                rdnElement.sequence = rdnElements;
                subjectElements.push(rdnElement);
            });
            const subjectElement = new DERElement(0, 1, 16);
            subjectElement.sequence = subjectElements;
            retSequence.push(subjectElement);
        }
        {
            retSequence.push(this.subjectPublicKeyInfo.toElement());
        }
        if (this.ver !== 0) {
            if (this.issuerUniqueID) {
                const issuerUniqueIdentifierElement = new DERElement(3, 0, 1);
                issuerUniqueIdentifierElement.bitString = this.issuerUniqueID;
                retSequence.push(issuerUniqueIdentifierElement);
            }
            if (this.subjectUniqueID) {
                const subjectUniqueIdentifierElement = new DERElement(3, 0, 2);
                subjectUniqueIdentifierElement.bitString = this.subjectUniqueID;
                retSequence.push(subjectUniqueIdentifierElement);
            }
        }
        if (this.ver === 2) {
            if (this.extensions) {
                let extensionElements = [];
                this.extensions.forEach(extension => {
                    extensionElements.push(extension.toElement());
                });
                const extensionsElement = new DERElement(0, 1, 16);
                extensionsElement.sequence = extensionElements;
                retSequence.push(extensionsElement);
            }
        }
        const ret = new DERElement(0, 1, 16);
        ret.sequence = retSequence;
        return ret;
    }
    fromBytes(value) {
        const el = new DERElement();
        el.fromBytes(value);
        return TBSCertificate.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
