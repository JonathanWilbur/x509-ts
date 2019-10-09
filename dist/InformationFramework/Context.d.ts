import { DERElement, ObjectIdentifier } from "asn1-ts";
export default class Context {
    readonly contextType: ObjectIdentifier;
    readonly contextValues: DERElement[];
    readonly fallback: boolean;
    constructor(contextType: ObjectIdentifier, contextValues: DERElement[], fallback?: boolean);
    static fromElement(value: DERElement): Context;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): Context;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=Context.d.ts.map