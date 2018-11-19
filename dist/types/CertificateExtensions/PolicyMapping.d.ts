import { DERElement, ObjectIdentifier } from "asn1-ts";
export default class PolicyMapping {
    readonly issuerDomainPolicy: ObjectIdentifier;
    readonly subjectDomainPolicy: ObjectIdentifier;
    constructor(issuerDomainPolicy: ObjectIdentifier, subjectDomainPolicy: ObjectIdentifier);
    static fromElement(value: DERElement): PolicyMapping;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): PolicyMapping;
    toBytes(): Uint8Array;
}
