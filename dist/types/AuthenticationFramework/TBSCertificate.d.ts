import { DERElement } from "asn1-ts";
import Name from "../InformationFramework/Name";
import Validity from "./Validity";
import Version from "./Version";
import SubjectPublicKeyInfo from "./SubjectPublicKeyInfo";
import CertificateSerialNumber from "./CertificateSerialNumber";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
import Extension from "./Extension";
export default class TBSCertificate {
    readonly ver: Version;
    readonly serialNumber: CertificateSerialNumber;
    readonly signature: AlgorithmIdentifier;
    readonly issuer: Name;
    readonly validity: Validity;
    readonly subject: Name;
    readonly subjectPublicKeyInfo: SubjectPublicKeyInfo;
    readonly issuerUniqueID?: boolean[] | undefined;
    readonly subjectUniqueID?: boolean[] | undefined;
    readonly extensions?: Extension[] | undefined;
    constructor(ver: Version, serialNumber: CertificateSerialNumber, signature: AlgorithmIdentifier, issuer: Name, validity: Validity, subject: Name, subjectPublicKeyInfo: SubjectPublicKeyInfo, issuerUniqueID?: boolean[] | undefined, subjectUniqueID?: boolean[] | undefined, extensions?: Extension[] | undefined);
    static fromElement(value: DERElement): TBSCertificate;
    toElement(): DERElement;
    fromBytes(value: Uint8Array): TBSCertificate;
    toBytes(): Uint8Array;
}
