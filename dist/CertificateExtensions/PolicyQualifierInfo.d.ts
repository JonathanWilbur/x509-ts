import { ObjectIdentifier, DERElement } from "asn1-ts";
export default class PolicyQualifierInfo {
    readonly policyQualifierId: ObjectIdentifier;
    readonly qualifier?: DERElement | undefined;
    constructor(policyQualifierId: ObjectIdentifier, qualifier?: DERElement | undefined);
    static fromElement(value: DERElement): PolicyQualifierInfo;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): PolicyQualifierInfo;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=PolicyQualifierInfo.d.ts.map