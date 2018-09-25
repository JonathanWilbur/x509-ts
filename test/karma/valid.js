// void main()
// {
//     import std.stdio : stderr, stdout, writefln;

//     X509TBSCertificate tbs = X509TBSCertificate();
//     tbs.ver = X509Version.v3;
//     tbs.serialNumber = 1;
//     tbs.signature = X509AlgorithmIdentifier(
//         new OID(1, 2, 840, 113549, 1, 1, 11),
//         new DERElement([ 0x05u, 0x00u ])
//     );
//     tbs.issuer = [
//         [
//             X509Attribute(
//                 new OID(2, 5, 4, 10),
//                 new DERElement(cast(ubyte[]) [ 0x0Cu, 0x11u ] ~ cast(ubyte[]) "The Wilbur Family")
//             )
//         ],
//         [
//             X509Attribute(
//                 new OID(2, 5, 4, 3),
//                 new DERElement(cast(ubyte[]) [ 0x0Cu, 0x24u ] ~ cast(ubyte[]) "Penultimate Certificate Authority 01")
//             )
//         ]
//     ];
//     tbs.validity = X509Validity(
//         DateTime(2017, 12, 7, 23, 25, 0),
//         DateTime(2020, 12, 7, 23, 25, 0)
//     );
//     tbs.subject = [
//         [
//             X509Attribute(
//                 new OID(2, 5, 4, 10),
//                 new DERElement(cast(ubyte[]) [ 0x0Cu, 0x11u ] ~ cast(ubyte[]) "The Wilbur Family")
//             )
//         ],
//         [
//             X509Attribute(
//                 new OID(2, 5, 4, 3),
//                 new DERElement(cast(ubyte[]) [ 0x0Cu, 0x17u ] ~ cast(ubyte[]) "Jonathan Michael Wilbur")
//             )
//         ]
//     ];
//     tbs.subjectPublicKeyInfo = X509SubjectPublicKeyInfo(
//         X509AlgorithmIdentifier(
//             new OID(1, 2, 840, 113549, 1, 1, 1),
//             new DERElement([ 0x05u, 0x00u ])
//         ),
//         [ true, true, false, true, false, false, true, false ]
//     );
//     tbs.issuerUniqueID = [];
//     tbs.subjectUniqueID = [];
//     tbs.extensions = [
//         X509Extension(
//             new OID(2, 5, 29, 19), false,
//             [ 48u, 0u ]
//         )
//     ];

//     X509Certificate cert = new X509Certificate();
//     cert.tbsCertificate = tbs;
//     cert.signatureAlgorithm = X509AlgorithmIdentifier(
//         new OID(1, 2, 840, 113549, 1, 1, 11),
//         new DERElement([ 0x05u, 0x00u ])
//     );
//     cert.signatureValue = [];

//     version (Windows)
//     {
//         import core.sys.windows.windows;
//         SetConsoleMode(GetStdHandle(-11), 0x0007);
//     }

//     stdout.rawWrite(cert.toBytes);
// }