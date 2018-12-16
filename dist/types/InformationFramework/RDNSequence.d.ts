import RelativeDistinguishedName from "./RelativeDistinguishedName";
import { DERElement } from "asn1-ts";
export default class RDNSequence {
    readonly value: RelativeDistinguishedName[];
    constructor(value: RelativeDistinguishedName[]);
    toString(): string;
    static fromElement(value: DERElement): RDNSequence;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): RDNSequence;
    toBytes(): Uint8Array;
}
