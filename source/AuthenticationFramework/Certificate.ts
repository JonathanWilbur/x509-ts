import TBSCertificate from "./TBSCertificate";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import { Byteable,Elementable } from "../interfaces";
import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import * as errors from "../errors";

// Certificate ::= SIGNED{TBSCertificate}
//
// SIGNED{ToBeSigned} ::= SEQUENCE {
//     toBeSigned ToBeSigned,
//     COMPONENTS OF SIGNATURE,
//     ... }
//
// SIGNATURE ::= SEQUENCE {
//     algorithmIdentifier AlgorithmIdentifier{{SupportedAlgorithms}},
//     signature           BIT STRING,
//     ... }

/**
    Certificate ::= SEQUENCE {
        tbsCertificate TBSCertificate,
        signatureAlgorithm AlgorithmIdentifier,
        signatureValue BIT STRING }
*/
export default
class Certificate implements Byteable,Elementable {
    public static maximumX509CertificateSizeInBytes : number = 100000;
    public tbsCertificate : TBSCertificate;
    public signatureAlgorithm : AlgorithmIdentifier;
    public signatureValue : boolean[];

    constructor (tbsCert : TBSCertificate, sigAlg : AlgorithmIdentifier, sigValue : boolean[]) {
        this.tbsCertificate = tbsCert;
        this.signatureAlgorithm = sigAlg;
        this.signatureValue = sigValue;
    }

    public fromElement (value : DERElement) : void {
        switch(value.validateTag(
            [ ASN1TagClass.universal ],
            [ ASN1Construction.constructed ],
            [ ASN1UniversalType.sequence ]
        )) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on Certificate");
            case -2: throw new errors.X509Error("Invalid construction on Certificate");
            case -3: throw new errors.X509Error("Invalid tag number on Certificate");
            default: throw new errors.X509Error("Undefined error when validating Certificate tag");
        }

        const certificateElements : DERElement[] = value.sequence;
        if (certificateElements.length !== 3)
            throw new errors.X509Error("Invalid number of elements in Certificate");

        switch(certificateElements[2].validateTag(
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.bitString ]
        )) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on Certificate.signatureValue");
            case -2: throw new errors.X509Error("Invalid construction on Certificate.signatureValue");
            case -3: throw new errors.X509Error("Invalid tag number on Certificate.signatureValue");
            default: throw new errors.X509Error("Undefined error when validating Certificate.signatureValue tag");
        }

        const tbsCertificate : TBSCertificate = new TBSCertificate();
        tbsCertificate.fromElement(certificateElements[0]);
        this.tbsCertificate = tbsCertificate;

        const signatureAlgorithm : AlgorithmIdentifier = new AlgorithmIdentifier();
        signatureAlgorithm.fromElement(certificateElements[1]);
        this.signatureAlgorithm = signatureAlgorithm;

        this.signatureValue = certificateElements[2].bitString;
    }

    public toElement () : DERElement {
        const signatureValueElement : DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.primitive,
            ASN1UniversalType.bitString
        );
        signatureValueElement.bitString = this.signatureValue;

        const ret : DERElement = new DERElement(
            ASN1TagClass.universal,
            ASN1Construction.constructed,
            ASN1UniversalType.sequence
        );
        ret.sequence = [
            this.tbsCertificate.toElement(),
            this.signatureAlgorithm.toElement(),
            signatureValueElement
        ];
        return ret;
    }

    public fromBytes (value : Uint8Array) : void {
        const el : DERElement = new DERElement();
        el.fromBytes(value);
        this.fromElement(el);
    }

    public toBytes () : Uint8Array {
        return this.toElement().toBytes();
    }
}