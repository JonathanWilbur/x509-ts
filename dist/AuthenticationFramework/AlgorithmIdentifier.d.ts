import { DERElement, ObjectIdentifier } from "asn1-ts";
export default class AlgorithmIdentifier {
    readonly algorithm: ObjectIdentifier;
    readonly parameters?: DERElement | undefined;
    constructor(algorithm: ObjectIdentifier, parameters?: DERElement | undefined);
    static fromElement(value: DERElement): AlgorithmIdentifier;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): AlgorithmIdentifier;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=AlgorithmIdentifier.d.ts.map