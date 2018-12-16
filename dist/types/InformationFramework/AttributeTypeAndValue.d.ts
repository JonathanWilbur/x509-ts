import { DERElement, ObjectIdentifier } from "asn1-ts";
export default class AttributeTypeAndValue {
    readonly type: ObjectIdentifier;
    readonly value: DERElement;
    constructor(type: ObjectIdentifier, value: DERElement);
    static escapeDirectoryCharacters(unescaped: string): string;
    toString(): string;
    static attributeToNameMapping: {
        [oid: string]: string;
    };
    static attributeToValuePrinterMapping: {
        [oid: string]: (element: DERElement) => string;
    };
    static fromElement(value: DERElement): AttributeTypeAndValue;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): AttributeTypeAndValue;
    toBytes(): Uint8Array;
}
