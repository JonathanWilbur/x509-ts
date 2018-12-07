import { ObjectIdentifier, DERElement } from "asn1-ts";
export default class AccessDescription {
    readonly accessMethod: ObjectIdentifier;
    readonly accessLocation: DERElement;
    constructor(accessMethod: ObjectIdentifier, accessLocation: DERElement);
    static fromElement(value: DERElement): AccessDescription;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): AccessDescription;
    toBytes(): Uint8Array;
}
