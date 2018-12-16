import UnboundedDirectoryString from "../SelectedAttributeTypes/Version8/UnboundedDirectoryString";
import { DERElement } from "asn1-ts";
export default class EDIPartyName {
    readonly nameAssigner: UnboundedDirectoryString | undefined;
    readonly partyName: UnboundedDirectoryString;
    constructor(nameAssigner: UnboundedDirectoryString | undefined, partyName: UnboundedDirectoryString);
    toString(): string;
    static fromElement(value: DERElement): EDIPartyName;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): EDIPartyName;
    toBytes(): Uint8Array;
}
