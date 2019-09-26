import { DERElement } from "asn1-ts";
import GeneralName from "./GeneralName";
import BaseDistance from "./BaseDistance";
export default class GeneralSubtree {
    readonly base: GeneralName;
    readonly minimum: BaseDistance;
    readonly maximum?: number | undefined;
    constructor(base: GeneralName, minimum?: BaseDistance, maximum?: number | undefined);
    static fromElement(value: DERElement): GeneralSubtree;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): GeneralSubtree;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=GeneralSubtree.d.ts.map