import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
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
class TBSCertificate {

    constructor (
        readonly ver : Version = Version.v3,
        readonly serialNumber : CertificateSerialNumber,
        readonly signature : AlgorithmIdentifier,
        readonly issuer : Name,
        readonly validity : Validity,
        readonly subject : Name,
        readonly subjectPublicKeyInfo : SubjectPublicKeyInfo,
        readonly issuerUniqueID? : boolean[],
        readonly subjectUniqueID? : boolean[],
        readonly extensions? : Extensions
    ) {}

    public static fromElement (value : DERElement) : TBSCertificate {
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

        let ver : Version = Version.v3;
        let serialNumber : CertificateSerialNumber;
        let signature : AlgorithmIdentifier;
        let issuer : Name = [];
        let validity : Validity;
        let subject : Name = [];
        let subjectPublicKeyInfo : SubjectPublicKeyInfo;
        // let issuerUniqueID : boolean[];
        // let subjectUniqueID : boolean[];
        let extensions : Extensions = [];

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
                case 0: ver = Version.v1; break;
                case 1: ver = Version.v2; break;
                case 2: ver = Version.v3; break;
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
            serialNumber = tbsCertificateElements[1].octetString;
        }

        // signature
        {
            signature = AlgorithmIdentifier.fromElement(tbsCertificateElements[2]);
        }

        // issuer
        {
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
                    rdn.push(AttributeTypeAndValue.fromElement(rdnValue));
                });
                issuer.push(rdn);
            });
        }

        // validity
        {
            validity = Validity.fromElement(tbsCertificateElements[4]);
        }

        // subject
        {
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
                    rdn.push(AttributeTypeAndValue.fromElement(rdnValue));
                });
                subject.push(rdn);
            });
        }

        // subjectPublicKeyInfo
        {
            subjectPublicKeyInfo = SubjectPublicKeyInfo.fromElement(tbsCertificateElements[6]);
        }

        switch (ver) {
            case Version.v1: {
                // FIXME:
                return new TBSCertificate(
                    ver,
                    serialNumber,
                    signature,
                    issuer,
                    validity,
                    subject,
                    subjectPublicKeyInfo,
                    undefined,
                    undefined
                );
            }
            case Version.v2: {
                // FIXME:
                return new TBSCertificate(
                    ver,
                    serialNumber,
                    signature,
                    issuer,
                    validity,
                    subject,
                    subjectPublicKeyInfo,
                    undefined,
                    undefined
                );
            }
            case Version.v3: {
                return new TBSCertificate(
                    ver,
                    serialNumber,
                    signature,
                    issuer,
                    validity,
                    subject,
                    subjectPublicKeyInfo,
                    undefined,
                    undefined,
                    extensions
                );
            }
            default:
                throw new errors.X509Error("Unrecognized X.509 Certificate version.");
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
        ret.sequence = retSequence;
        return ret;

    }

    public fromBytes (value : Uint8Array) : TBSCertificate {
        const el : DERElement = new DERElement();
        el.fromBytes(value);
        return TBSCertificate.fromElement(el);
    }

    public toBytes () : Uint8Array {
        return this.toElement().toBytes();
    }
}