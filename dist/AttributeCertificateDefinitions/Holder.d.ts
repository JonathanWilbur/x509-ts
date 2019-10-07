import { DERElement } from "asn1-ts";
import GeneralNames from "../CertificateExtensions/GeneralNames";
import ObjectDigestInfo from "./ObjectDigestInfo";
import IssuerSerial from "./IssuerSerial";
export default class Holder {
    readonly baseCertificateID: IssuerSerial | undefined;
    readonly entityName: GeneralNames | undefined;
    readonly objectDigestInfo: ObjectDigestInfo | undefined;
    constructor(baseCertificateID: IssuerSerial | undefined, entityName: GeneralNames | undefined, objectDigestInfo: ObjectDigestInfo | undefined);
    static fromElement(value: DERElement): Holder;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): Holder;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=Holder.d.ts.map