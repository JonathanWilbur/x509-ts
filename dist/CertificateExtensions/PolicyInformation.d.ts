import PolicyQualifierInfo from "./PolicyQualifierInfo";
import { DERElement, ObjectIdentifier } from "asn1-ts";
export default class PolicyInformation {
    readonly policyIdentifier: ObjectIdentifier;
    readonly policyQualifiers?: PolicyQualifierInfo[] | undefined;
    constructor(policyIdentifier: ObjectIdentifier, policyQualifiers?: PolicyQualifierInfo[] | undefined);
    static fromElement(value: DERElement): PolicyInformation;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): PolicyInformation;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=PolicyInformation.d.ts.map