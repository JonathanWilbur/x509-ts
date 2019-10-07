import { DERElement } from "asn1-ts";
import GeneralNames from "../CertificateExtensions/GeneralNames";
import ObjectDigestInfo from "./ObjectDigestInfo";
import IssuerSerial from "./IssuerSerial";
export default class AttCertIssuer {
    readonly issuerName: GeneralNames | undefined;
    readonly baseCertificateID: IssuerSerial | undefined;
    readonly objectDigestInfo: ObjectDigestInfo | undefined;
    constructor(issuerName: GeneralNames | undefined, baseCertificateID: IssuerSerial | undefined, objectDigestInfo: ObjectDigestInfo | undefined);
    static fromElement(value: DERElement): AttCertIssuer;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): AttCertIssuer;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=AttCertIssuer.d.ts.map