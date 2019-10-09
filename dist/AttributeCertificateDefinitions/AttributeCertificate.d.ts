import TBSAttributeCertificate from "./TBSAttributeCertificate";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";
import { DERElement } from "asn1-ts";
export default class AttributeCertificate {
    readonly tbsAttributeCertificate: TBSAttributeCertificate;
    readonly signatureAlgorithm: AlgorithmIdentifier;
    readonly signatureValue: boolean[];
    static maximumX509AttributeCertificateSizeInBytes: number;
    constructor(tbsAttributeCertificate: TBSAttributeCertificate, signatureAlgorithm: AlgorithmIdentifier, signatureValue: boolean[]);
    static fromElement(value: DERElement): AttributeCertificate;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): AttributeCertificate;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=AttributeCertificate.d.ts.map