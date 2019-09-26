import { DERElement } from "asn1-ts";
export default class PrivateKeyUsagePeriod {
    readonly notBefore?: Date | undefined;
    readonly notAfter?: Date | undefined;
    constructor(notBefore?: Date | undefined, notAfter?: Date | undefined);
    static fromElement(value: DERElement): PrivateKeyUsagePeriod;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): PrivateKeyUsagePeriod;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=PrivateKeyUsagePeriod.d.ts.map