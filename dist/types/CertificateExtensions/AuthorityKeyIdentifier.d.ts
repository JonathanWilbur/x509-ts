import { DERElement } from "asn1-ts";
export default class AuthorityKeyIdentifier {
    readonly keyIdentifier: Uint8Array;
    readonly authorityCertIssuer?: DERElement[] | undefined;
    readonly authorityCertSerialNumber?: Uint8Array | undefined;
    constructor(keyIdentifier: Uint8Array, authorityCertIssuer?: DERElement[] | undefined, authorityCertSerialNumber?: Uint8Array | undefined);
    static fromElement(value: DERElement): AuthorityKeyIdentifier;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): AuthorityKeyIdentifier;
    toBytes(): Uint8Array;
}
