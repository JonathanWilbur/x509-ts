/**
 * These tests are based off of issues reported on
 * https://github.com/JonathanWilbur/x509-ts/issues.
 */
const x509 = require("../../dist/index.js");
const asn1 = require("asn1-ts");

describe("Issue #1 - TBSCertificate.toElement() adding subject and issuer", () => {
    const issuerCN = "Mr. Issuer";
    const subjectCN = "Mr. Subject";

    const issuer = new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.utf8String,
    );
    issuer.utf8String = issuerCN;

    const subject = new asn1.DERElement(
        asn1.ASN1TagClass.universal,
        asn1.ASN1Construction.primitive,
        asn1.ASN1UniversalType.utf8String,
    );
    subject.utf8String = subjectCN;

    const cert = new x509.Certificate(
        new x509.TBSCertificate(
            2,
            new Uint8Array([ 0x01, 0x02, 0x03, 0x04 ]),
            new x509.AlgorithmIdentifier(
                new asn1.ObjectIdentifier([ 1, 2, 3, 4 ]),
                new asn1.DERElement(),
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
            new x509.Validity(
                new Date(),
                new Date(),
            ),
            new x509.RDNSequence(
                [
                    new x509.RelativeDistinguishedName(
                        [
                            new x509.AttributeTypeAndValue(
                                new asn1.ObjectIdentifier([ 2, 5, 4, 3 ]), // commonName
                                subject,
                            ),
                        ],
                    ),
                ],
            ),
            new x509.SubjectPublicKeyInfo(
                new x509.AlgorithmIdentifier(
                    new asn1.ObjectIdentifier([ 1, 2, 3, 4 ]),
                    new asn1.DERElement(),
                ),
                [],
            ),
            undefined,
            undefined,
            [],
        ),
        new x509.AlgorithmIdentifier(
            new asn1.ObjectIdentifier([ 1, 2, 3, 4 ]),
            new asn1.DERElement(),
        ),
        [],
    );

    test("TBSCertificate.toElement() adds subject", () => {
        expect(
            Buffer
                .from(cert.toElement().toBytes())
                .indexOf(Buffer.from(subjectCN))
        ).toBeGreaterThan(20);
    });
    test("TBSCertificate.toElement() adds issuer", () => {
        expect(
            Buffer
                .from(cert.toElement().toBytes())
                .indexOf(Buffer.from(subjectCN))
        ).toBeGreaterThan(20);
    });
});

describe("Issue #2 - AlgorithmIdentifier.fromElement() accepting lack of parameters", () => {
    const ai = new x509.AlgorithmIdentifier(
        new asn1.ObjectIdentifier([ 1, 2, 3, 4 ]),
    );
    expect(() => {
        x509.AlgorithmIdentifier.fromElement(ai.toElement())
    }).not.toThrow();
});
