import { DERElement } from "asn1-ts";
import GeneralNames from "../CertificateExtensions/GeneralNames";
import CertificateSerialNumber from "../AuthenticationFramework/CertificateSerialNumber";
export default class IssuerSerial {
    readonly issuer: GeneralNames;
    readonly serial: CertificateSerialNumber;
    readonly issuerUID?: boolean[] | undefined;
    constructor(issuer: GeneralNames, serial: CertificateSerialNumber, issuerUID?: boolean[] | undefined);
    static fromElement(value: DERElement): IssuerSerial;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): IssuerSerial;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=IssuerSerial.d.ts.map