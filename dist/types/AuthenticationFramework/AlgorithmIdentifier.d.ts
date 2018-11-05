import { DERElement, ObjectIdentifier } from "asn1-ts";
export default class AlgorithmIdentifier {
    readonly algorithm: ObjectIdentifier;
    readonly parameters: DERElement;
    constructor(algorithm: ObjectIdentifier, parameters: DERElement);
    static fromElement(value: DERElement): AlgorithmIdentifier;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): AlgorithmIdentifier;
    toBytes(): Uint8Array;
}
