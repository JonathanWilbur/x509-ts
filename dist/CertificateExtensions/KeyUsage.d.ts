import { DERElement } from "asn1-ts";
export default class KeyUsage {
    readonly digitalSignature: boolean;
    readonly contentCommitment: boolean;
    readonly keyEncipherment: boolean;
    readonly dataEncipherment: boolean;
    readonly keyAgreement: boolean;
    readonly keyCertSign: boolean;
    readonly cRLSign: boolean;
    readonly encipherOnly: boolean;
    readonly decipherOnly: boolean;
    constructor(digitalSignature: boolean, contentCommitment: boolean, keyEncipherment: boolean, dataEncipherment: boolean, keyAgreement: boolean, keyCertSign: boolean, cRLSign: boolean, encipherOnly: boolean, decipherOnly: boolean);
    static fromElement(value: DERElement): KeyUsage;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): KeyUsage;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=KeyUsage.d.ts.map