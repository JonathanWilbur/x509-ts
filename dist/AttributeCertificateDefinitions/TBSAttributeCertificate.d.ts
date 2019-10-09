import { DERElement } from "asn1-ts";
import AttCertVersion from "./AttCertVersion";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";
import Holder from "./Holder";
import AttCertIssuer from "./AttCertIssuer";
import AttCertValidityPeriod from "./AttCertValidityPeriod";
import Attribute from "../InformationFramework/Attribute";
import { UniqueIdentifier } from "../SelectedAttributeTypes";
import Extensions from "../AuthenticationFramework/Extensions";
export default class TBSAttributeCertificate {
    readonly ver: AttCertVersion;
    readonly holder: Holder;
    readonly issuer: AttCertIssuer;
    readonly signature: AlgorithmIdentifier;
    readonly serialNumber: CertificateSerialNumber;
    readonly attrCertValidityPeriod: AttCertValidityPeriod;
    readonly attributes: Attribute[];
    readonly issuerUniqueID: UniqueIdentifier | undefined;
    readonly extensions: Extensions | undefined;
    constructor(ver: AttCertVersion, holder: Holder, issuer: AttCertIssuer, signature: AlgorithmIdentifier, serialNumber: CertificateSerialNumber, attrCertValidityPeriod: AttCertValidityPeriod, attributes: Attribute[], issuerUniqueID: UniqueIdentifier | undefined, extensions: Extensions | undefined);
    static fromElement(value: DERElement): TBSAttributeCertificate;
    toElement(): DERElement;
    fromBytes(value: Uint8Array): TBSAttributeCertificate;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=TBSAttributeCertificate.d.ts.map