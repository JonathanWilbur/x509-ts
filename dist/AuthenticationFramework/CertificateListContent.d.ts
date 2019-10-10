import { DERElement } from "asn1-ts";
import Version from "./Version";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";
import Extensions from "../AuthenticationFramework/Extensions";
import Name from "../InformationFramework/Name";
export default class CertificateListContent {
    readonly ver: Version;
    readonly signature: AlgorithmIdentifier;
    readonly issuer: Name;
    readonly thisUpdate: Date;
    readonly nextUpdate: Date | undefined;
    readonly revokedCertificates: {
        serialNumber: CertificateSerialNumber;
        revocationDate: Date;
        crlEntryExtensions: Extensions | undefined;
    }[] | undefined;
    readonly crlExtensions: Extensions | undefined;
    constructor(ver: Version, signature: AlgorithmIdentifier, issuer: Name, thisUpdate: Date, nextUpdate: Date | undefined, revokedCertificates: {
        serialNumber: CertificateSerialNumber;
        revocationDate: Date;
        crlEntryExtensions: Extensions | undefined;
    }[] | undefined, crlExtensions: Extensions | undefined);
    static fromElement(value: DERElement): CertificateListContent;
    toElement(): DERElement;
    fromBytes(value: Uint8Array): CertificateListContent;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=CertificateListContent.d.ts.map