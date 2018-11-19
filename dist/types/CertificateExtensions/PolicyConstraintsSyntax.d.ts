import { DERElement } from "asn1-ts";
export default class PolicyConstraintsSyntax {
    readonly requireExplicitPolicy?: number | undefined;
    readonly inhibitPolicyMapping?: number | undefined;
    constructor(requireExplicitPolicy?: number | undefined, inhibitPolicyMapping?: number | undefined);
    static fromElement(value: DERElement): PolicyConstraintsSyntax;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): PolicyConstraintsSyntax;
    toBytes(): Uint8Array;
}
