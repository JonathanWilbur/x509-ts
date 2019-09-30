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

describe("Issue #3 - Validity.toElement() encoding with the right time type", () => {
    // Both dates under 2050.
    const v1 = (new x509.Validity(
        new Date(2017, 10, 15),
        new Date(2019, 10, 15),
    )).toElement();
    // One date under 2050, and one at 2050.
    const v2 = (new x509.Validity(
        new Date(2017, 10, 15),
        new Date(2050, 10, 15),
    )).toElement();
    // Both dates at or above 2050.
    const v3 = (new x509.Validity(
        new Date(2050, 10, 15),
        new Date(2069, 10, 15),
    )).toElement();

    test("Validity with both dates under 2050 encodes both as UTCTime", () => {
        expect(v1.sequence[0].tagNumber).toBe(asn1.ASN1UniversalType.utcTime);
        expect(v1.sequence[1].tagNumber).toBe(asn1.ASN1UniversalType.utcTime);
        expect(v1.sequence[0].printableString).toContain("171115");
        expect(v1.sequence[1].printableString).toContain("191115");
    });

    test("Validity with one date under 2050 and another above encodes both as correct time types", () => {
        expect(v2.sequence[0].tagNumber).toBe(asn1.ASN1UniversalType.utcTime);
        expect(v2.sequence[1].tagNumber).toBe(asn1.ASN1UniversalType.generalizedTime);
        expect(v2.sequence[0].printableString).toContain("171115");
        expect(v2.sequence[1].printableString).toContain("20501115");
    });

    test("Validity with both dates above 2050 encodes both as GeneralizedTime", () => {
        expect(v3.sequence[0].tagNumber).toBe(asn1.ASN1UniversalType.generalizedTime);
        expect(v3.sequence[1].tagNumber).toBe(asn1.ASN1UniversalType.generalizedTime);
        expect(v3.sequence[0].printableString).toContain("20501115");
        expect(v3.sequence[1].printableString).toContain("20691115");
    });
});

describe("Issue #4 - Extension.toElement() actually encodes something", () => {
    const ext = new x509.Extension(
        new asn1.ObjectIdentifier([ 1, 2, 3, 4 ]),
        false,
        new Uint8Array([ 65, 65, 65, 65 ]),
    );

    expect(
        Buffer
            .from(ext.toElement().toBytes())
            .indexOf(Buffer.from("AAAA"))
    ).toBeGreaterThan(0);
});

describe("Issue #7 - KeyIdentifier is included in encoded output", () => {
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
            [
                new x509.Extension(
                    new asn1.ObjectIdentifier([ 2, 5, 29, 35 ]),
                    true,
                    (new x509.AuthorityKeyIdentifier(
                        new Uint8Array([ 0x40, 0x40, 0x40, 0x40 ]), // "@@@@"
                    )).toBytes(),
                ),
            ],
        ),
        new x509.AlgorithmIdentifier(
            new asn1.ObjectIdentifier([ 1, 2, 3, 4 ]),
            new asn1.DERElement(),
        ),
        [],
    );

    test("AuthorityKeyIdentifier.toElement() adds KeyIdentifier", () => {
        expect(
            Buffer
                .from(cert.toElement().toBytes())
                .indexOf(Buffer.from([ 0x40, 0x40, 0x40, 0x40 ]))
        ).toBeGreaterThan(20);
    });
});
