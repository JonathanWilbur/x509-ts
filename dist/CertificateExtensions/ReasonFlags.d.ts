import { DERElement } from "asn1-ts";
export default class ReasonFlags {
    readonly unused: boolean;
    readonly keyCompromise: boolean;
    readonly cACompromise: boolean;
    readonly affiliationChanged: boolean;
    readonly superseded: boolean;
    readonly cessationOfOperation: boolean;
    readonly certificateHold: boolean;
    readonly privilegeWithdrawn: boolean;
    readonly aACompromise: boolean;
    readonly weakAlgorithmOrKeySize: boolean;
    constructor(unused?: boolean, keyCompromise?: boolean, cACompromise?: boolean, affiliationChanged?: boolean, superseded?: boolean, cessationOfOperation?: boolean, certificateHold?: boolean, privilegeWithdrawn?: boolean, aACompromise?: boolean, weakAlgorithmOrKeySize?: boolean);
    static fromElement(value: DERElement): ReasonFlags;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): ReasonFlags;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=ReasonFlags.d.ts.map