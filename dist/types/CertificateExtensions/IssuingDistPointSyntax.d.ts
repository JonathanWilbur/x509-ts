import { ReasonFlags } from "./ReasonFlags";
import { DERElement } from "asn1-ts";
export declare class IssuingDistPointSyntax {
    readonly distributionPoint?: DERElement | undefined;
    readonly onlyContainsUserPublicKeyCerts: boolean;
    readonly onlyContainsCACerts: boolean;
    readonly onlySomeReasons?: ReasonFlags | undefined;
    readonly indirectCRL: boolean;
    constructor(distributionPoint?: DERElement | undefined, onlyContainsUserPublicKeyCerts?: boolean, onlyContainsCACerts?: boolean, onlySomeReasons?: ReasonFlags | undefined, indirectCRL?: boolean);
    static fromElement(value: DERElement): IssuingDistPointSyntax;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): IssuingDistPointSyntax;
    toBytes(): Uint8Array;
}
