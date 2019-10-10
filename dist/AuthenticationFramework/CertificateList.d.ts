import CertificateListContent from "./CertificateListContent";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import { DERElement } from "asn1-ts";
export default class CertificateList {
    readonly certificateListContent: CertificateListContent;
    readonly signatureAlgorithm: AlgorithmIdentifier;
    readonly signatureValue: boolean[];
    static maximumX509CertificateSizeInBytes: number;
    constructor(certificateListContent: CertificateListContent, signatureAlgorithm: AlgorithmIdentifier, signatureValue: boolean[]);
    static fromElement(value: DERElement): CertificateList;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): CertificateList;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=CertificateList.d.ts.map