import { DERElement } from "asn1-ts";
export interface enByteable {
    toBytes(): Uint8Array;
}
export interface deByteable {
    fromBytes(value: Uint8Array): void;
}
export interface Byteable extends enByteable, deByteable {
}
export interface enElementable {
    toElement(): DERElement;
}
export interface deElementable {
    fromElement(value: DERElement): void;
}
export interface Elementable extends enElementable, deElementable {
}
export interface Byteable2 {
    new (): any;
    fromBytes(): enByteable;
}
export interface Elementable2 {
    new (): any;
    fromElement(): enElementable;
}
//# sourceMappingURL=interfaces.d.ts.map