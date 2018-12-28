const x509 = require("../../dist/node/x509.js");
const fs = require("fs");

fs.readFile("./test/data/jonathan@wilbur.space.cert.der", (err, data) => {
    if (err) console.log(err);
    console.log(data);
    const cert = x509.Certificate.fromBytes(data);
    console.log(cert.tbsCertificate.issuer.toString());
    console.log(cert.tbsCertificate.subject.toString());
});