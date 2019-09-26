"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const asn1_ts_1 = require("asn1-ts");
const UnboundedDirectoryString_1 = __importDefault(require("../SelectedAttributeTypes/Version8/UnboundedDirectoryString"));
const errors = __importStar(require("../errors"));
class AttributeTypeAndValue {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    static escapeDirectoryCharacters(unescaped) {
        return unescaped.replace(",", "\\,").replace("+", "\\+");
    }
    toString() {
        const oidString = this.type.toString();
        if (oidString in AttributeTypeAndValue.attributeToNameMapping
            && oidString in AttributeTypeAndValue.attributeToValuePrinterMapping) {
            const attributeNameString = AttributeTypeAndValue.attributeToNameMapping[oidString];
            const valueString = AttributeTypeAndValue.escapeDirectoryCharacters(AttributeTypeAndValue.attributeToValuePrinterMapping[oidString](this.value));
            return `${attributeNameString}=${valueString}`;
        }
        else {
            return `${oidString}=${this.value.toBytes()}`;
        }
    }
    static fromElement(value) {
        const attributeTypeAndValueElements = value.sequence;
        if (attributeTypeAndValueElements.length !== 2) {
            throw new errors.X509Error("Invalid number of elements in AttributeTypeAndValue");
        }
        switch (attributeTypeAndValueElements[0].validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.objectIdentifier])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on AttributeTypeAndValue.type");
            case -2: throw new errors.X509Error("Invalid construction on AttributeTypeAndValue.type");
            case -3: throw new errors.X509Error("Invalid tag number on AttributeTypeAndValue.type");
            default: throw new errors.X509Error("Undefined error when validating AttributeTypeAndValue.type tag");
        }
        return new AttributeTypeAndValue(attributeTypeAndValueElements[0].objectIdentifier, attributeTypeAndValueElements[1]);
    }
    toElement() {
        const typeElement = new asn1_ts_1.DERElement();
        typeElement.tagNumber = asn1_ts_1.ASN1UniversalType.objectIdentifier;
        typeElement.objectIdentifier = this.type;
        const attributeTypeAndValueElement = new asn1_ts_1.DERElement();
        attributeTypeAndValueElement.tagClass = asn1_ts_1.ASN1TagClass.universal;
        attributeTypeAndValueElement.construction = asn1_ts_1.ASN1Construction.constructed;
        attributeTypeAndValueElement.tagNumber = asn1_ts_1.ASN1UniversalType.sequence;
        attributeTypeAndValueElement.sequence = [typeElement, this.value];
        return attributeTypeAndValueElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return AttributeTypeAndValue.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = AttributeTypeAndValue;
AttributeTypeAndValue.attributeToNameMapping = {
    "2.5.4.3": "cn",
    "2.5.4.7.1": "c-l",
    "2.5.4.8.1": "c-st",
    "2.5.4.9.1": "c-street",
    "2.5.4.10.1": "c-o",
    "2.5.4.11.1": "c-ou",
    "2.5.4.16.1": "c-PostalAddress",
    "2.5.4.17.1": "c-PostalCode",
    "2.5.4.18.1": "c-PostOfficeBox",
    "2.5.4.19.1": "c-PhysicalDeliveryOfficeName",
    "2.5.4.20.1": "c-TelephoneNumber",
    "2.5.4.21.1": "c-TelexNumber",
    "2.5.4.23.1": "c-FacsimileTelephoneNumber",
    "2.5.4.25.1": "c-InternationalISDNNumber",
    "2.5.4.2": "knowledgeInformation",
    "2.5.4.4": "sn",
    "2.5.4.5": "serialNumber",
    "2.5.4.6": "c",
    "2.5.4.7": "l",
    "2.5.4.8": "st",
    "2.5.4.9": "streetAddress",
    "2.5.4.10": "o",
    "2.5.4.11": "ou",
    "2.5.4.12": "title",
    "2.5.4.14": "searchGuide",
    "2.5.4.15": "businessCategory",
    "2.5.4.16": "postalAddress",
    "2.5.4.17": "postalCode",
    "2.5.4.18": "postOfficeBox",
    "2.5.4.19": "physicalDeliveryOfficeName",
    "2.5.4.20": "telephoneNumber",
    "2.5.4.21": "telexNumber",
    "2.5.4.22": "teletexTerminalIdentifier",
    "2.5.4.23": "facsimileTelephoneNumber",
    "2.5.4.24": "x121Address",
    "2.5.4.25": "internationaliSDNNumber",
    "2.5.4.26": "registeredAddress",
    "2.5.4.27": "destinationIndicator",
    "2.5.4.28": "preferredDeliveryMethod",
    "2.5.4.29": "presentationAddress",
    "2.5.4.30": "supportedApplicationContext",
    "2.5.4.31": "member",
    "2.5.4.32": "owner",
    "2.5.4.33": "roleOccupant",
    "2.5.4.36": "userCertificate",
    "2.5.4.37": "cACertificate",
    "2.5.4.38": "authorityRevocationList",
    "2.5.4.39": "certificateRevocationList",
    "2.5.4.40": "crossCertificatePair",
    "2.5.4.42": "gn",
    "2.5.4.43": "initials",
    "2.5.4.44": "generationQualifier",
    "2.5.4.45": "x500UniqueIdentifier",
    "2.5.4.46": "dnQualifier",
    "2.5.4.47": "enhancedSearchGuide",
    "2.5.4.48": "protocolInformation",
    "2.5.4.50": "uniqueMember",
    "2.5.4.51": "houseIdentifier",
    "2.5.4.52": "supportedAlgorithms",
    "2.5.4.53": "deltaRevocationList",
    "2.5.4.54": "dmdName",
    "2.5.4.65": "pseudonym",
    "0.9.2342.19200300.100.1.3": "mail",
    "0.9.2342.19200300.100.1.25": "dc",
    "0.9.2342.19200300.100.1.37": "associatedDomain",
    "1.2.840.113549.1.9.1": "emailAddress",
    "0.9.2342.19200300.100.1.2": "textEncodedORAddress",
    "0.9.2342.19200300.100.1.4": "info",
    "0.9.2342.19200300.100.1.5": "favouriteDrink",
    "0.9.2342.19200300.100.1.6": "roomNumber",
    "0.9.2342.19200300.100.1.7": "photo",
    "0.9.2342.19200300.100.1.8": "userClass",
    "0.9.2342.19200300.100.1.9": "host",
    "0.9.2342.19200300.100.1.10": "manager",
    "0.9.2342.19200300.100.1.11": "documentIdentifier",
    "0.9.2342.19200300.100.1.12": "documentTitle",
    "0.9.2342.19200300.100.1.13": "documentVersion",
    "0.9.2342.19200300.100.1.14": "documentAuthor",
    "0.9.2342.19200300.100.1.15": "documentLocation",
    "0.9.2342.19200300.100.1.20": "homeTelephoneNumber",
    "0.9.2342.19200300.100.1.21": "secretary",
    "0.9.2342.19200300.100.1.22": "otherMailbox",
    "0.9.2342.19200300.100.1.26": "aRecord",
    "0.9.2342.19200300.100.1.27": "mDRecord",
    "0.9.2342.19200300.100.1.28": "mXRecord",
    "0.9.2342.19200300.100.1.29": "nSRecord",
    "0.9.2342.19200300.100.1.30": "sOARecord",
    "0.9.2342.19200300.100.1.31": "cNAMERecord",
    "0.9.2342.19200300.100.1.38": "associatedName",
    "0.9.2342.19200300.100.1.39": "homePostalAddress",
    "0.9.2342.19200300.100.1.40": "personalTitle",
    "0.9.2342.19200300.100.1.41": "mobileTelephoneNumber",
    "0.9.2342.19200300.100.1.42": "pagerTelephoneNumber",
    "0.9.2342.19200300.100.1.43": "friendlyCountryName",
    "0.9.2342.19200300.100.1.44": "uniqueIdentifier",
    "0.9.2342.19200300.100.1.45": "organizationalStatus",
    "0.9.2342.19200300.100.1.46": "janetMailbox",
    "0.9.2342.19200300.100.1.47": "mailPreferenceOption",
    "0.9.2342.19200300.100.1.48": "buildingName",
    "0.9.2342.19200300.100.1.49": "dSAQuality",
    "0.9.2342.19200300.100.1.50": "singleLevelQuality",
    "0.9.2342.19200300.100.1.51": "subtreeMinimumQuality",
    "0.9.2342.19200300.100.1.52": "subtreeMaximumQuality",
    "0.9.2342.19200300.100.1.53": "personalSignature",
    "0.9.2342.19200300.100.1.54": "dITRedirect",
    "0.9.2342.19200300.100.1.55": "audio",
    "0.9.2342.19200300.100.1.56": "documentPublisher",
    "2.16.840.1.113730.3.1.1": "carLicense",
    "2.16.840.1.113730.3.1.2": "departmentNumber",
    "2.16.840.1.113730.3.1.241": "displayName",
    "2.16.840.1.113730.3.1.3": "employeeNumber",
    "2.16.840.1.113730.3.1.4": "employeeType",
    "0.9.2342.19200300.100.1.60": "jpegPhoto",
    "2.16.840.1.113730.3.1.39": "preferredLanguage",
    "2.16.840.1.113730.3.1.40": "userSMIMECertificate",
    "2.16.840.1.113730.3.1.216": "userPKCS12",
    "2.16.840.1.113730.3.1.13": "mailLocalAddress",
    "2.16.840.1.113730.3.1.18": "mailHost",
    "2.16.840.1.113730.3.1.47": "mailRoutingAddress",
    "1.3.6.1.4.1.42.2.27.2.1.15": "rfc822MailMember",
    "1.3.6.1.1.1.1.2": "gecos",
    "1.3.6.1.1.1.1.3": "homeDirectory",
    "1.3.6.1.1.1.1.4": "loginShell",
    "1.3.6.1.1.1.1.5": "shadowLastChange",
    "1.3.6.1.1.1.1.6": "shadowMin",
    "1.3.6.1.1.1.1.7": "shadowMax",
    "1.3.6.1.1.1.1.8": "shadowWarning",
    "1.3.6.1.1.1.1.9": "shadowInactive",
    "1.3.6.1.1.1.1.10": "shadowExpire",
    "1.3.6.1.1.1.1.11": "shadowFlag",
    "1.3.6.1.1.1.1.12": "memberUid",
    "1.3.6.1.1.1.1.13": "memberNisNetgroup",
    "1.3.6.1.1.1.1.14": "nisNetgroupTriple",
    "1.3.6.1.1.1.1.15": "ipServicePort",
    "1.3.6.1.1.1.1.16": "ipServiceProtocol",
    "1.3.6.1.1.1.1.17": "ipProtocolNumber",
    "1.3.6.1.1.1.1.18": "oncRpcNumber",
    "1.3.6.1.1.1.1.19": "ipHostNumber",
    "1.3.6.1.1.1.1.20": "ipNetworkNumber",
    "1.3.6.1.1.1.1.21": "ipNetmaskNumber",
    "1.3.6.1.1.1.1.22": "macAddress",
    "1.3.6.1.1.1.1.23": "bootParameter",
    "1.3.6.1.1.1.1.24": "bootFile",
    "1.3.6.1.1.1.1.26": "nisMapName",
    "1.3.6.1.1.1.1.27": "nisMapEntry",
    "2.5.4.72": "role",
    "2.5.4.75": "xmlPrivilegeInfo",
    "2.5.4.58": "attributeCertificateA",
    "2.5.4.61": "aACertificate",
    "2.5.4.62": "attributeDescriptorCertificate",
    "2.5.4.59": "attributeCertificateRevocationList",
    "2.5.4.63": "attributeAuthorityRevocationList",
    "2.5.4.73": "delegationPath",
    "2.5.4.71": "privPolicy",
    "2.5.4.74": "protPrivPolicy",
    "2.5.4.76": "xmlPrivPolicy",
};
AttributeTypeAndValue.attributeToValuePrinterMapping = {
    "2.5.4.3": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.4": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.5": (element) => element.printableString,
    "2.5.4.6": (element) => element.printableString,
    "2.5.4.7": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.8": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.9": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.10": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.11": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.12": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.15": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.17": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.18": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.19": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.20": (element) => element.printableString,
    "2.5.4.24": (element) => element.numericString,
    "2.5.4.25": (element) => element.numericString,
    "2.5.4.27": (element) => element.printableString,
    "2.5.4.42": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.43": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.44": (element) => UnboundedDirectoryString_1.default.print(element),
    "2.5.4.46": (element) => element.printableString,
};
//# sourceMappingURL=AttributeTypeAndValue.js.map