// ENCRYPTED-HASH{ToBeSigned} ::= BIT STRING (CONSTRAINED BY {
//     --shall be the result of applying a hashing procedure to the DER-encoded (see 6.2)
//     --octets of a value of -- ToBeSigned -- and then applying an encipherment procedure
//     --to those octets -- } )

// FINGERPRINT {ToBeFingerprinted} ::= SEQUENCE {
//     algorithmIdentifier  AlgorithmIdentifier{{SupportedAlgorithms}},
//     fingerprint          BIT STRING,
//     ... }

// ALGORITHM ::= CLASS {
//     &Type          OPTIONAL,
//     &id            OBJECT IDENTIFIER UNIQUE }
// WITH SYNTAX {
//     [PARMS        &Type]
//     IDENTIFIED BY &id
// }

// AlgorithmIdentifier{ALGORITHM:SupportedAlgorithms} ::= SEQUENCE {
//     algorithm   ALGORITHM.&id({SupportedAlgorithms}),
//     parameters  ALGORITHM.&Type({SupportedAlgorithms}{@algorithm}) OPTIONAL,
//     ... }

/* The definitions of the following information object set is deferred to
referencing specifications having a requirement for specific information
object sets.*/

// SupportedAlgorithms ALGORITHM ::= {...}

/* The definitions of the following information value set is deferred to
referencingspecifications having a requirement for specific value sets.*/

// SupportedCurves OBJECT IDENTIFIER ::= {dummyCurv, ...}

// dummyCurv OBJECT IDENTIFIER ::= {2 5 5}--public-key certificate definition Certificate ::= SIGNED{TBSCertificate}TBSCertificate ::= SEQUENCE {version                  [0]  Version DEFAULT v1,serialNumber                  CertificateSerialNumber,signature                     AlgorithmIdentifier{{SupportedAlgorithms}},issuer                        Name,validity                      Validity,subject                       Name,subjectPublicKeyInfo          SubjectPublicKeyInfo,issuerUniqueIdentifier   [1] IMPLICIT UniqueIdentifier OPTIONAL,...,[[2: --if present, version shall be v2 or v3subjectUniqueIdentifier  [2] IMPLICIT UniqueIdentifier OPTIONAL]],[[3: --if present, version shall be v2 or v3extensions               [3]  Extensions OPTIONAL]]--If present, version shall be v3]]} (CONSTRAINED BY { --shall be DER encoded --} )Version ::= INTEGER {v1(0), v2(1), v3(2)}CertificateSerialNumber ::= INTEGERValidity ::= SEQUENCE {notBefore  Time,notAfter   Time,... }SubjectPublicKeyInfo ::= SEQUENCE {algorithm         AlgorithmIdentifier{{SupportedAlgorithms}},subjectPublicKey  PublicKey,... }
