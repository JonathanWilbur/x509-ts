import GeneralSubtree from "./GeneralSubtree";
import { DERElement } from "asn1-ts";
export default class NameConstraintsSyntax {
    readonly permittedSubtrees?: GeneralSubtree[] | undefined;
    readonly excludedSubtrees?: GeneralSubtree[] | undefined;
    constructor(permittedSubtrees?: GeneralSubtree[] | undefined, excludedSubtrees?: GeneralSubtree[] | undefined);
    static fromElement(value: DERElement): NameConstraintsSyntax;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): NameConstraintsSyntax;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=NameConstraintsSyntax.d.ts.map