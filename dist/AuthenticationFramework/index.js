import { ObjectIdentifier } from "asn1-ts";
export const authenticationFrameworkOID = new ObjectIdentifier([2, 5, 1, 7]);
export { default as AlgorithmIdentifier } from "./AlgorithmIdentifier";
export { default as Certificate } from "./Certificate";
export { default as Extension } from "./Extension";
export { default as SubjectPublicKeyInfo } from "./SubjectPublicKeyInfo";
export { default as TBSCertificate } from "./TBSCertificate";
export { default as Validity } from "./Validity";
export { default as Version } from "./Version";
