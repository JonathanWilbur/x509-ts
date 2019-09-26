import { DERElement } from "asn1-ts";
import AttributeTypeAndValue from "./AttributeTypeAndValue";
export default class RelativeDistinguishedName {
    readonly value: AttributeTypeAndValue[];
    constructor(value: AttributeTypeAndValue[]);
    toString(): string;
    static fromElement(value: DERElement): RelativeDistinguishedName;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): RelativeDistinguishedName;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=RelativeDistinguishedName.d.ts.map