import { DERElement,ObjectIdentifier, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import { Byteable,Elementable } from "../interfaces";
import * as errors from "../errors";
import Name from "../InformationFramework/Name";
import Validity from "./Validity";
import Version from "./Version";
import SubjectPublicKeyInfo from "./SubjectPublicKeyInfo";
import Extensions from "./Extensions";
import CertificateSerialNumber from "./CertificateSerialNumber";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import RelativeDistinguishedName from "../InformationFramework/RelativeDistinguishedName";
import AttributeTypeAndValue from "../InformationFramework/AttributeTypeAndValue";

// TBSCertificate ::= SEQUENCE {
//     version                  [0]  Version DEFAULT v1,
//     serialNumber                  CertificateSerialNumber,
//     signature                     AlgorithmIdentifier{{SupportedAlgorithms}},
//     issuer                        Name,
//     validity                      Validity,
//     subject                       Name,
//     subjectPublicKeyInfo          SubjectPublicKeyInfo,
//     issuerUniqueIdentifier   [1] IMPLICIT UniqueIdentifier OPTIONAL,
//     ...,
//     [[2: -- if present, version shall be v2 or v3
//     subjectUniqueIdentifier  [2] IMPLICIT UniqueIdentifier OPTIONAL]],
//     [[3: -- if present, version shall be v2 or v3
//     extensions               [3]  Extensions OPTIONAL]]
//     -- If present, version shall be v3]]
//    } (CONSTRAINED BY { -- shall be DER encoded -- } )

export default
class TBSCertificate implements Byteable,Elementable {
    public ver : Version = Version.v3;
    public serialNumber : CertificateSerialNumber = new Uint8Array([ 0 ]);
    public signature : AlgorithmIdentifier;
    public issuer : Name;
    public validity : Validity;
    public subject : Name;
    public subjectPublicKeyInfo : SubjectPublicKeyInfo;
    // public issuerUniqueID : boolean[];
    // public subjectUniqueID : boolean[];
    public extensions : Extensions = [];

    constructor (
        signature : AlgorithmIdentifier,
        issuer : Name,
        validity : Validity,
        subject : Name,
        subjectPublicKeyInfo : SubjectPublicKeyInfo
    ) {
        this.signature = signature;
        this.issuer = issuer;
        this.validity = validity;
        this.subject = subject;
        this.subjectPublicKeyInfo = subjectPublicKeyInfo;
    }

    public fromElement (value : DERElement) : void {
        switch (value.validateTag(
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.sequence ]
        )) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate");
            case -2: throw new errors.X509Error("Invalid construction on TBSCertificate");
            case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate");
            default: throw new errors.X509Error("Undefined error when validating TBSCertificate tag");
        }

        const tbsCertificateElements : DERElement[] = value.sequence;
        if (tbsCertificateElements.length > 10)
            throw new errors.X509Error("");
        else if (tbsCertificateElements.length < 7)
            throw new errors.X509Error("");

        // version
        {
            switch (tbsCertificateElements[0].validateTag(
                [ ASN1TagClass.context ],
                [ ASN1Construction.constructed ],
                [ 0 ]
            )) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.version");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.version");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.version");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.version tag");
            }
    
            const versionElements : DERElement[] = tbsCertificateElements[0].sequence;
            if (versionElements.length !== 1)
                throw new errors.X509Error("version can only contain one element");
            switch (versionElements[0].validateTag(
                [ ASN1TagClass.universal ],
                [ ASN1Construction.primitive ],
                [ ASN1UniversalType.integer ]
            )) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.version inner element");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.version inner element");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.version inner element");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.version inner element tag");
            }
    
            switch (versionElements[0].integer) {
                case 0: this.ver = Version.v1; break;
                case 1: this.ver = Version.v2; break;
                case 2: this.ver = Version.v3; break;
                default:
                    throw new errors.X509Error("Invalid X.509 Certificate version.");
            }
    
            // serialNumber
            switch (tbsCertificateElements[1].validateTag(
                [ ASN1TagClass.universal ],
                [ ASN1Construction.primitive ],
                [ ASN1UniversalType.integer ]
            )) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.serialNumber");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.serialNumber");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.serialNumber");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.serialNumber tag");
            }
        }

        // serialNumber
        {
            switch (tbsCertificateElements[1].validateTag(
                [ ASN1TagClass.universal ],
                [ ASN1Construction.primitive ],
                [ ASN1UniversalType.integer ]
            )) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.serialNumber");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.serialNumber");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.serialNumber");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.serialNumber tag");
            }
            this.serialNumber = tbsCertificateElements[1].octetString;
        }

        // signature
        {
            const signature : AlgorithmIdentifier = new AlgorithmIdentifier();
            signature.fromElement(tbsCertificateElements[2]);
            this.signature = signature;
        }

        // issuer
        {
            let issuer : Name = [];
            switch (tbsCertificateElements[3].validateTag(
                [ ASN1TagClass.universal ],
                [ ASN1Construction.constructed ],
                [ ASN1UniversalType.sequence ]
            )) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.issuer");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.issuer");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.issuer");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.issuer tag");
            }

            const rdnElements : DERElement[] = tbsCertificateElements[3].sequence;
            rdnElements.forEach(rdnElement => {
                switch (rdnElement.validateTag(
                    [ ASN1TagClass.universal ],
                    [ ASN1Construction.constructed ],
                    [ ASN1UniversalType.set ]
                )) {
                    case 0: break;
                    case -1: throw new errors.X509Error("Invalid tag number on a TBSCertificate.issuer RDN");
                    case -2: throw new errors.X509Error("Invalid construction on a TBSCertificate.issuer RDN");
                    case -3: throw new errors.X509Error("Invalid tag number on a TBSCertificate.issuer RDN");
                    default: throw new errors.X509Error("Undefined error when validating a TBSCertificate.issuer RDN tag");
                }
                const rdnValues : DERElement[] = rdnElement.set;
                let rdn : RelativeDistinguishedName = [];
                rdnValues.forEach(rdnValue => {
                    const atav : AttributeTypeAndValue = new AttributeTypeAndValue();
                    atav.fromElement(rdnValue);
                    rdn.push(atav);
                });
                issuer.push(rdn);
            });
        }

        // validity
        {
            const validity : Validity = new Validity();
            validity.fromElement(tbsCertificateElements[4]);
            this.validity = validity;
        }

        // subject
        {
            let subject : Name = [];
            switch (tbsCertificateElements[5].validateTag(
                [ ASN1TagClass.universal ],
                [ ASN1Construction.constructed ],
                [ ASN1UniversalType.sequence ]
            )) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag number on TBSCertificate.subject");
                case -2: throw new errors.X509Error("Invalid construction on TBSCertificate.subject");
                case -3: throw new errors.X509Error("Invalid tag number on TBSCertificate.subject");
                default: throw new errors.X509Error("Undefined error when validating TBSCertificate.subject tag");
            }

            const rdnElements : DERElement[] = tbsCertificateElements[3].sequence;
            rdnElements.forEach(rdnElement => {
                switch (rdnElement.validateTag(
                    [ ASN1TagClass.universal ],
                    [ ASN1Construction.constructed ],
                    [ ASN1UniversalType.set ]
                )) {
                    case 0: break;
                    case -1: throw new errors.X509Error("Invalid tag number on a TBSCertificate.subject RDN");
                    case -2: throw new errors.X509Error("Invalid construction on a TBSCertificate.subject RDN");
                    case -3: throw new errors.X509Error("Invalid tag number on a TBSCertificate.subject RDN");
                    default: throw new errors.X509Error("Undefined error when validating a TBSCertificate.subject RDN tag");
                }
                const rdnValues : DERElement[] = rdnElement.set;
                let rdn : RelativeDistinguishedName = [];
                rdnValues.forEach(rdnValue => {
                    const atav : AttributeTypeAndValue = new AttributeTypeAndValue();
                    atav.fromElement(rdnValue);
                    rdn.push(atav);
                });
                subject.push(rdn);
            });
        }

        // subjectPublicKeyInfo
        {
            const spki : SubjectPublicKeyInfo = new SubjectPublicKeyInfo();
            spki.fromElement(tbsCertificateElements[6]);
            this.subjectPublicKeyInfo = spki;
        }
    }

    public toElement () : DERElement {

        let retSequence : DERElement[] = [];

        // version
        {
            const versionInnerElement : DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer
            );
            versionInnerElement.integer = this.ver;

            const versionOuterElement : DERElement = new DERElement(
                ASN1TagClass.context,
                ASN1Construction.constructed,
                0
            );
            versionOuterElement.sequence = [ versionInnerElement ];
            retSequence.push(versionOuterElement);
        }

        // serialNumber
        {
            const serialNumberElement : DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.primitive,
                ASN1UniversalType.integer
            );
            serialNumberElement.octetString = this.serialNumber;
            retSequence.push(serialNumberElement);
        }

        // signature
        {
            retSequence.push(this.signature.toElement());
        }

        // issuer
        {
            let issuerElements : DERElement[] = [];
            this.issuer.forEach(rdn => {
                let rdnElements : DERElement[] = [];
                rdn.forEach(rdnValue => {
                    rdnElements.push(rdnValue.toElement());
                });
                const rdnElement : DERElement = new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.constructed,
                    ASN1UniversalType.set
                );
                rdnElement.sequence = rdnElements;
                issuerElements.push(rdnElement);
            });
            const issuerElement : DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.constructed,
                ASN1UniversalType.sequence
            );
            issuerElement.sequence = issuerElements;
            retSequence.push(issuerElement);
        }

        // validity
        {
            retSequence.push(this.validity.toElement());
        }

        // subject
        {
            let subjectElements : DERElement[] = [];
            this.subject.forEach(rdn => {
                let rdnElements : DERElement[] = [];
                rdn.forEach(rdnValue => {
                    rdnElements.push(rdnValue.toElement());
                });
                const rdnElement : DERElement = new DERElement(
                    ASN1TagClass.universal,
                    ASN1Construction.constructed,
                    ASN1UniversalType.set
                );
                rdnElement.sequence = rdnElements;
                subjectElements.push(rdnElement);
            });
            const subjectElement : DERElement = new DERElement(
                ASN1TagClass.universal,
                ASN1Construction.constructed,
                ASN1UniversalType.sequence
            );
            subjectElement.sequence = subjectElements;
            retSequence.push(subjectElement);
        }

        // subjectPublicKeyInfo
        {
            retSequence.push(this.subjectPublicKeyInfo.toElement());
        }

        const ret : DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence
        );
        return ret;

    }

    public fromBytes (value : Uint8Array) : void {
        const tbsCertificateElement : DERElement = new DERElement();
        tbsCertificateElement.fromBytes(value);
        this.fromElement(tbsCertificateElement);
    }

    public toBytes () : Uint8Array {
        return this.toElement().toBytes();
    }
}