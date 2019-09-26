import TBSCertificate from "./TBSCertificate";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import { DERElement } from "asn1-ts";
export default class Certificate {
    readonly tbsCertificate: TBSCertificate;
    readonly signatureAlgorithm: AlgorithmIdentifier;
    readonly signatureValue: boolean[];
    static maximumX509CertificateSizeInBytes: number;
    constructor(tbsCertificate: TBSCertificate, signatureAlgorithm: AlgorithmIdentifier, signatureValue: boolean[]);
    static fromElement(value: DERElement): Certificate;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): Certificate;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=Certificate.d.ts.map