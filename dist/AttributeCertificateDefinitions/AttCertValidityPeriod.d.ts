import { DERElement } from "asn1-ts";
export default class AttCertValidityPeriod {
    readonly notBefore: Date;
    readonly notAfter: Date;
    constructor(notBefore: Date, notAfter: Date);
    static fromElement(value: DERElement): AttCertValidityPeriod;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): AttCertValidityPeriod;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=AttCertValidityPeriod.d.ts.map