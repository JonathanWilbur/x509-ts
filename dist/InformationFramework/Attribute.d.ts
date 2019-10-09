import { DERElement, ObjectIdentifier } from "asn1-ts";
import Context from "./Context";
export default class Attribute {
    readonly type: ObjectIdentifier;
    readonly values: DERElement[];
    readonly valuesWithContext: {
        value: DERElement;
        contextList: Context[];
    }[] | undefined;
    constructor(type: ObjectIdentifier, values: DERElement[], valuesWithContext: {
        value: DERElement;
        contextList: Context[];
    }[] | undefined);
    static fromElement(value: DERElement): Attribute;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): Attribute;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=Attribute.d.ts.map