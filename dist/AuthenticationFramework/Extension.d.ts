import { DERElement, ObjectIdentifier } from "asn1-ts";
export default class Extension {
    readonly extnID: ObjectIdentifier;
    readonly critical: boolean;
    readonly extnValue: Uint8Array;
    constructor(extnID: ObjectIdentifier, critical: boolean, extnValue: Uint8Array);
    static fromElement(value: DERElement): Extension;
    toElement(): DERElement;
    fromBytes(value: Uint8Array): void;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=Extension.d.ts.map