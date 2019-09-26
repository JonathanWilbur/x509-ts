import { DERElement } from "asn1-ts";
export default class Validity {
    readonly notBefore: Date;
    readonly notAfter: Date;
    constructor(notBefore: Date, notAfter: Date);
    static fromElement(value: DERElement): Validity;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): Validity;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=Validity.d.ts.map