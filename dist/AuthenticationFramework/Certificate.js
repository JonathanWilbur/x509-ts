import TBSCertificate from "./TBSCertificate";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import { DERElement } from "asn1-ts";
import * as errors from "../errors";
export default class Certificate {
    constructor(tbsCertificate, signatureAlgorithm, signatureValue) {
        this.tbsCertificate = tbsCertificate;
        this.signatureAlgorithm = signatureAlgorithm;
        this.signatureValue = signatureValue;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on Certificate");
            case -2: throw new errors.X509Error("Invalid construction on Certificate");
            case -3: throw new errors.X509Error("Invalid tag number on Certificate");
            default: throw new errors.X509Error("Undefined error when validating Certificate tag");
        }
        const certificateElements = value.sequence;
        if (certificateElements.length !== 3)
            throw new errors.X509Error("Invalid number of elements in Certificate");
        switch (certificateElements[2].validateTag([0], [0], [3])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on Certificate.signatureValue");
            case -2: throw new errors.X509Error("Invalid construction on Certificate.signatureValue");
            case -3: throw new errors.X509Error("Invalid tag number on Certificate.signatureValue");
            default: throw new errors.X509Error("Undefined error when validating Certificate.signatureValue tag");
        }
        return new Certificate(TBSCertificate.fromElement(certificateElements[0]), AlgorithmIdentifier.fromElement(certificateElements[1]), certificateElements[2].bitString);
    }
    toElement() {
        const signatureValueElement = new DERElement(0, 0, 3);
        signatureValueElement.bitString = this.signatureValue;
        const ret = new DERElement(0, 1, 16);
        ret.sequence = [
            this.tbsCertificate.toElement(),
            this.signatureAlgorithm.toElement(),
            signatureValueElement
        ];
        return ret;
    }
    static fromBytes(value) {
        const el = new DERElement();
        el.fromBytes(value);
        return this.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
Certificate.maximumX509CertificateSizeInBytes = 100000;
