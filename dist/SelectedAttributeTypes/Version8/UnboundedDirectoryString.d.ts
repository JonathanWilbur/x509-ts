import { DERElement } from "asn1-ts";
export default class UnboundedDirectoryString {
    readonly value: string;
    constructor(value: string);
    toString(): string;
    static print(element: DERElement): string;
    static fromElement(value: DERElement): UnboundedDirectoryString;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): UnboundedDirectoryString;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=UnboundedDirectoryString.d.ts.map