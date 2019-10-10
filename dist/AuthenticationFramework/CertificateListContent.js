"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
const validateTag_1 = __importDefault(require("../validateTag"));
const Version_1 = __importDefault(require("./Version"));
const AlgorithmIdentifier_1 = __importDefault(require("../AuthenticationFramework/AlgorithmIdentifier"));
const AuthenticationFramework_1 = require("../AuthenticationFramework");
const RDNSequence_1 = __importDefault(require("../InformationFramework/RDNSequence"));
class CertificateListContent {
    constructor(ver = Version_1.default.v2, signature, issuer, thisUpdate, nextUpdate, revokedCertificates, crlExtensions) {
        this.ver = ver;
        this.signature = signature;
        this.issuer = issuer;
        this.thisUpdate = thisUpdate;
        this.nextUpdate = nextUpdate;
        this.revokedCertificates = revokedCertificates;
        this.crlExtensions = crlExtensions;
    }
    static fromElement(value) {
        validateTag_1.default(value, "CertificateListContent", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
        const attributeCertificateElements = value.sequence;
        if (attributeCertificateElements.length < 3) {
            throw new errors.X509Error(`CertificateListContent was too short. It contained ${attributeCertificateElements.length} elements.`);
        }
        let encounteredElements = 0;
        let ver = undefined;
        if (attributeCertificateElements[encounteredElements].tagClass === asn1_ts_1.ASN1TagClass.universal
            && attributeCertificateElements[encounteredElements].construction === asn1_ts_1.ASN1Construction.primitive
            && attributeCertificateElements[encounteredElements].tagNumber === asn1_ts_1.ASN1UniversalType.integer) {
            ver = attributeCertificateElements[encounteredElements++].integer;
        }
        const signature = AlgorithmIdentifier_1.default.fromElement(attributeCertificateElements[encounteredElements++]);
        const issuer = RDNSequence_1.default.fromElement(attributeCertificateElements[encounteredElements++]);
        validateTag_1.default(attributeCertificateElements[encounteredElements], "CertificateListContent.thisUpdate", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.utcTime, asn1_ts_1.ASN1UniversalType.generalizedTime]);
        const thisUpdate = (() => {
            if (attributeCertificateElements[encounteredElements].tagNumber === asn1_ts_1.ASN1UniversalType.utcTime) {
                return attributeCertificateElements[encounteredElements++].utcTime;
            }
            else {
                return attributeCertificateElements[encounteredElements++].generalizedTime;
            }
        })();
        let nextUpdate = undefined;
        if (attributeCertificateElements[encounteredElements].tagClass === asn1_ts_1.ASN1TagClass.universal
            && attributeCertificateElements[encounteredElements].construction === asn1_ts_1.ASN1Construction.primitive) {
            if (attributeCertificateElements[encounteredElements].tagNumber === asn1_ts_1.ASN1UniversalType.generalizedTime) {
                validateTag_1.default(attributeCertificateElements[encounteredElements], "CertificateListContent.nextUpdate", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.generalizedTime]);
                nextUpdate = attributeCertificateElements[encounteredElements++].generalizedTime;
            }
            else if (attributeCertificateElements[encounteredElements].tagNumber === asn1_ts_1.ASN1UniversalType.utcTime) {
                validateTag_1.default(attributeCertificateElements[encounteredElements], "CertificateListContent.nextUpdate", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.utcTime]);
                nextUpdate = attributeCertificateElements[encounteredElements++].utcTime;
            }
        }
        let revokedCertificates = undefined;
        if (attributeCertificateElements[encounteredElements].tagClass === asn1_ts_1.ASN1TagClass.universal
            && attributeCertificateElements[encounteredElements].construction === asn1_ts_1.ASN1Construction.primitive
            && attributeCertificateElements[encounteredElements].tagNumber === asn1_ts_1.ASN1UniversalType.sequence) {
            const revokedCertificatesElements = attributeCertificateElements[encounteredElements].sequence;
            revokedCertificates = revokedCertificatesElements.map(rc => {
                validateTag_1.default(rc, "CertificateListContent.revokedCertificates[#]", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
                const rcElements = rc.sequence;
                if (rcElements.length > 3) {
                    throw new errors.X509Error("Too few elements in CertificateListContent.revokedCertificates[#] element.");
                }
                validateTag_1.default(rcElements[0], "CertificateListContent.revokedCertificates[#].serialNumber", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.octetString]);
                validateTag_1.default(rcElements[1], "CertificateListContent.revokedCertificates[#].revocationDate", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.utcTime, asn1_ts_1.ASN1UniversalType.generalizedTime]);
                const serialNumber = rcElements[0].octetString;
                const revocationDate = (() => {
                    if (rcElements[1].tagNumber === asn1_ts_1.ASN1UniversalType.generalizedTime) {
                        return rcElements[1].generalizedTime;
                    }
                    else if (rcElements[1].tagNumber === asn1_ts_1.ASN1UniversalType.utcTime) {
                        return rcElements[1].utcTime;
                    }
                    else {
                        throw new errors.X509Error("CertificateListContent.revokedCertificates[#].revocationDate was not a Time type.");
                    }
                })();
                const crlEntryExtensions = (() => {
                    if (rcElements[2].tagClass !== asn1_ts_1.ASN1TagClass.universal
                        || rcElements[2].construction !== asn1_ts_1.ASN1Construction.constructed
                        || rcElements[2].tagNumber !== asn1_ts_1.ASN1UniversalType.sequence) {
                        return undefined;
                    }
                    return rcElements[2].sequence.map(AuthenticationFramework_1.Extension.fromElement);
                })();
                return {
                    serialNumber,
                    revocationDate: revocationDate,
                    crlEntryExtensions,
                };
            });
        }
        let crlExtensions = undefined;
        const lastIndex = (attributeCertificateElements.length - 1);
        if (attributeCertificateElements[lastIndex].tagClass === asn1_ts_1.ASN1TagClass.context
            && attributeCertificateElements[lastIndex].construction === asn1_ts_1.ASN1Construction.constructed
            && attributeCertificateElements[lastIndex].tagNumber === 0) {
            const crlExtensionsInnerElements = attributeCertificateElements[lastIndex].sequence;
            if (crlExtensionsInnerElements.length !== 1) {
                throw new errors.X509Error("CertificateListContent.crlExtensions did not contain only one inner SEQUENCE.");
            }
            validateTag_1.default(crlExtensionsInnerElements[0], "CertificateListContent.crlExtensions[0]", [asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.constructed], [asn1_ts_1.ASN1UniversalType.sequence]);
            crlExtensions = crlExtensionsInnerElements[0].sequence.map(AuthenticationFramework_1.Extension.fromElement);
        }
        asn1_ts_1.DERElement.isInCanonicalOrder(attributeCertificateElements.slice(encounteredElements, crlExtensions ? (attributeCertificateElements.length - 1) : undefined));
        asn1_ts_1.DERElement.isUniquelyTagged(attributeCertificateElements.slice(encounteredElements, crlExtensions ? (attributeCertificateElements.length - 1) : undefined));
        return new CertificateListContent(ver, signature, issuer, thisUpdate, nextUpdate, revokedCertificates, crlExtensions);
    }
    toElement() {
        const certificateListContentElements = [];
        const versionElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.integer);
        versionElement.integer = this.ver;
        certificateListContentElements.push(versionElement);
        certificateListContentElements.push(this.signature.toElement());
        certificateListContentElements.push(this.issuer.toElement());
        const thisUpdateElement = new asn1_ts_1.DERElement();
        if (this.thisUpdate.getFullYear() >= 2050) {
            thisUpdateElement.tagNumber = asn1_ts_1.ASN1UniversalType.generalizedTime;
            thisUpdateElement.generalizedTime = this.thisUpdate;
        }
        else {
            thisUpdateElement.tagNumber = asn1_ts_1.ASN1UniversalType.utcTime;
            thisUpdateElement.utcTime = this.thisUpdate;
        }
        certificateListContentElements.push(thisUpdateElement);
        if (this.nextUpdate) {
            const nextUpdateElement = new asn1_ts_1.DERElement();
            if (this.thisUpdate.getFullYear() >= 2050) {
                nextUpdateElement.tagNumber = asn1_ts_1.ASN1UniversalType.generalizedTime;
                nextUpdateElement.generalizedTime = this.thisUpdate;
            }
            else {
                nextUpdateElement.tagNumber = asn1_ts_1.ASN1UniversalType.utcTime;
                nextUpdateElement.utcTime = this.thisUpdate;
            }
            certificateListContentElements.push(nextUpdateElement);
        }
        if (this.revokedCertificates) {
            const revokedCertificatesElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
            revokedCertificatesElement.sequence = this.revokedCertificates.map(c => {
                const rcElements = [];
                const rcElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
                const serialNumberElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.integer);
                serialNumberElement.octetString = c.serialNumber;
                rcElements.push(serialNumberElement);
                const revocationDateElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.primitive, asn1_ts_1.ASN1UniversalType.integer);
                if (c.revocationDate.getFullYear() >= 2050) {
                    revocationDateElement.tagNumber = asn1_ts_1.ASN1UniversalType.generalizedTime;
                    revocationDateElement.generalizedTime = c.revocationDate;
                }
                else {
                    revocationDateElement.tagNumber = asn1_ts_1.ASN1UniversalType.utcTime;
                    revocationDateElement.utcTime = c.revocationDate;
                }
                rcElements.push(revocationDateElement);
                if (c.crlEntryExtensions) {
                    const crlEntryExtensionsElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
                    crlEntryExtensionsElement.sequence = c.crlEntryExtensions.map(e => e.toElement());
                    rcElements.push(crlEntryExtensionsElement);
                }
                rcElement.sequence = rcElements;
                return rcElement;
            });
            certificateListContentElements.push(revokedCertificatesElement);
        }
        if (this.crlExtensions) {
            const crlExtensionsOuterElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.context, asn1_ts_1.ASN1Construction.constructed, 0);
            const crlExtensionsInnerElement = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
            crlExtensionsInnerElement.sequence = this.crlExtensions.map(e => e.toElement());
            crlExtensionsOuterElement.sequence = [crlExtensionsInnerElement];
            certificateListContentElements.push(crlExtensionsOuterElement);
        }
        const ret = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.sequence);
        ret.sequence = certificateListContentElements;
        return ret;
    }
    fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return CertificateListContent.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = CertificateListContent;
//# sourceMappingURL=CertificateListContent.js.map