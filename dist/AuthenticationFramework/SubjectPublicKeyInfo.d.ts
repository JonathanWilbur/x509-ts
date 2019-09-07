import { DERElement } from "asn1-ts";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import PublicKey from "./PublicKey";
export default class SubjectPublicKeyInfo {
    readonly algorithm: AlgorithmIdentifier;
    readonly subjectPublicKey: PublicKey;
    constructor(algorithm: AlgorithmIdentifier, subjectPublicKey: PublicKey);
    static fromElement(value: DERElement): SubjectPublicKeyInfo;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): SubjectPublicKeyInfo;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=SubjectPublicKeyInfo.d.ts.map