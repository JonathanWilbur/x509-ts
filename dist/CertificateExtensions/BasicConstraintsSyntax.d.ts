import { DERElement } from "asn1-ts";
export default class BasicConstraintsSyntax {
    readonly ca: boolean;
    readonly pathLenConstraint?: number | undefined;
    constructor(ca: boolean, pathLenConstraint?: number | undefined);
    static fromElement(value: DERElement): BasicConstraintsSyntax;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): BasicConstraintsSyntax;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=BasicConstraintsSyntax.d.ts.map