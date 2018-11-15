import { DERElement } from "asn1-ts";
import { ReasonFlags } from "./ReasonFlags";
export declare class DistributionPoint {
    readonly distributionPoint?: DERElement | undefined;
    readonly reasons?: ReasonFlags | undefined;
    readonly cRLIssuer?: DERElement[] | undefined;
    constructor(distributionPoint?: DERElement | undefined, reasons?: ReasonFlags | undefined, cRLIssuer?: DERElement[] | undefined);
    static fromElement(value: DERElement): DistributionPoint;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): DistributionPoint;
    toBytes(): Uint8Array;
}
