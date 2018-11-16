import { ObjectIdentifier } from "asn1-ts";
export const certificateExtensionsOID : ObjectIdentifier = new ObjectIdentifier([ 2, 5, 1, 26 ]);

export * from "./AuthorityKeyIdentifier";
export * from "./BaseDistance";
export * from "./BasicConstraintsSyntax";
export * from "./CertPolicyId";
export * from "./CRLDistPointsSyntax";
export * from "./DistributionPoint";
export * from "./DistributionPointName";
export * from "./GeneralName";
export * from "./GeneralNames";
export * from "./GeneralSubtree";
export * from "./GeneralSubtrees";
export * from "./IssuingDistPointSyntax";
export * from "./NameConstraintsSyntax";
export * from "./ReasonFlags";
