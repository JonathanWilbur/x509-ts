const x509 = require("../../dist/index.js");
const asn1 = require("asn1-ts");

describe("Certificate Revocation List", () => {
    const issuerCN = "Mr. Issuer";
    const issuer = new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.utf8String,
    );
    issuer.utf8String = issuerCN;

    const crl = new x509.CertificateList(
        new x509.CertificateListContent(
            x509.Version.v2,
            new x509.AlgorithmIdentifier(
                new asn1.ObjectIdentifier([ 1, 2, 3 ]),
            ),
            new x509.RDNSequence(
                [
                    new x509.RelativeDistinguishedName(
                        [
                            new x509.AttributeTypeAndValue(
                                new asn1.ObjectIdentifier([ 2, 5, 4, 3 ]), // commonName
                                issuer,
                            ),
                        ],
                    ),
                ],
            ),
            new Date(),
            new Date() + 1000,
            [
                {
                    serialNumber: new Uint8Array([ 69 ]),
                    revocationDate: new Date(),
                    crlEntryExtensions: [],
                },
            ],
            [],
        ),
        new x509.AlgorithmIdentifier(
            new asn1.ObjectIdentifier([ 1, 2, 3 ]),
        ),
        [ true, true, true, false, true, true, true, true ],
    );

    test("CRL can fully encode and decode from bytes", () => {
        expect(() => {
            x509.CertificateList.fromBytes(crl.toBytes())
        }).not.toThrow();
    });
});
