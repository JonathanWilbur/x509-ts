const x509 = require("../../dist/node/x509.js");
const asn1 = require("../../node_modules/asn1-ts/dist/node/asn1.js");
const fs = require("fs");

// TBSCertificate ::= SEQUENCE {
//     version                  [0]  Version DEFAULT v1,
//     serialNumber                  CertificateSerialNumber,
//     signature                     AlgorithmIdentifier{{SupportedAlgorithms}},
//     issuer                        Name,
//     validity                      Validity,
//     subject                       Name,
//     subjectPublicKeyInfo          SubjectPublicKeyInfo,
//     issuerUniqueIdentifier   [1] IMPLICIT UniqueIdentifier OPTIONAL,
//     ...,
//     [[2: -- if present, version shall be v2 or v3
//     subjectUniqueIdentifier  [2] IMPLICIT UniqueIdentifier OPTIONAL]],
//     [[3: -- if present, version shall be v2 or v3
//     extensions               [3]  Extensions OPTIONAL]]
//     -- If present, version shall be v3]]
//    } (CONSTRAINED BY { -- shall be DER encoded -- } )

const tbs = new x509.TBSCertificate(
    x509.Version.v3,
    new Uint8Array([ 5, 4, 3, 2, 1 ]),
    new x509.AlgorithmIdentifier(
        new asn1.ObjectIdentifier([ 1, 3, 4, 6 ]),
        new asn1.DERElement()
    ),
    [
        [
            new x509.AttributeTypeAndValue(
                new asn1.ObjectIdentifier([ 1, 3, 4, 6 ]),
                new asn1.DERElement()
            )
        ]
    ],
    new x509.Validity(new Date(), new Date()),
    [
        [
            new x509.AttributeTypeAndValue(
                new asn1.ObjectIdentifier([ 1, 3, 4, 6 ]),
                new asn1.DERElement()
            )
        ]
    ],
    new x509.SubjectPublicKeyInfo(
        new x509.AlgorithmIdentifier(
            new asn1.ObjectIdentifier([ 1, 3, 4, 6 ]),
            new asn1.DERElement()
        ),
        [ true, false, true, true, false, true, true, true ]
    ),
    []
);

const cert = new x509.Certificate(
    tbs,
    new x509.AlgorithmIdentifier(
        new asn1.ObjectIdentifier([ 1, 3, 4, 6 ]),
        new asn1.DERElement()
    ),
    [ true, false, true, true, false, true, true, true ]
);

// console.log(cert.toBytes());
fs.writeFileSync("./test/output.der", cert.toBytes());