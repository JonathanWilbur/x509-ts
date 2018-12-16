import { DERElement } from 'asn1-ts';
import EDIPartyName from './EDIPartyName';
import { RDNSequence } from '../InformationFramework';
// GeneralName ::= CHOICE {
//   otherName                  [0]  INSTANCE OF OTHER-NAME,
//   rfc822Name                 [1]  IA5String,
//   dNSName                    [2]  IA5String,
//   x400Address                [3]  ORAddress,
//   directoryName              [4]  Name,
//   ediPartyName               [5]  EDIPartyName,
//   uniformResourceIdentifier  [6]  IA5String,
//   iPAddress                  [7]  OCTET STRING,
//   registeredID               [8]  OBJECT IDENTIFIER,
//   ...
// }

// OTHER-NAME ::= TYPE-IDENTIFIER

// ORAddress ::= SEQUENCE {
//     built-in-standard-attributes        BuiltInStandardAttributes,
//     built-in-domain-defined-attributes  BuiltInDomainDefinedAttributes OPTIONAL,
//     -- see also teletex-domain-defined-attributes
//     extension-attributes                ExtensionAttributes OPTIONAL
//   }

//   --	The OR-address is semantically absent from the OR-name if the built-in-standard-attribute
//   --	sequence is empty and the built-in-domain-defined-attributes and extension-attributes are both omitted.
//   --	Built-in Standard Attributes
//   BuiltInStandardAttributes ::= SEQUENCE {
//     country-name                CountryName OPTIONAL,
//     administration-domain-name  AdministrationDomainName OPTIONAL,
//     network-address             [0]  NetworkAddress OPTIONAL,
//     -- see also extended-network-address
//     terminal-identifier         [1]  TerminalIdentifier OPTIONAL,
//     private-domain-name         [2]  PrivateDomainName OPTIONAL,
//     organization-name           [3]  OrganizationName OPTIONAL,
//     -- see also teletex-organization-name
//     numeric-user-identifier     [4]  NumericUserIdentifier OPTIONAL,
//     personal-name               [5]  PersonalName OPTIONAL,
//     -- see also teletex-personal-name
//     organizational-unit-names   [6]  OrganizationalUnitNames OPTIONAL
//     -- see also teletex-organizational-unit-names
//   }

// EDIPartyName ::= SEQUENCE {
//     nameAssigner  [0]  UnboundedDirectoryString OPTIONAL,
//     partyName     [1]  UnboundedDirectoryString,
//     ...
//   }

// toString()
// UnboundedDirectoryString ::= CHOICE {
//     teletexString    TeletexString(SIZE (1..MAX)),
//     printableString  PrintableString(SIZE (1..MAX)),
//     bmpString        BMPString(SIZE (1..MAX)),
//     universalString  UniversalString(SIZE (1..MAX)),
//     uTF8String       UTF8String(SIZE (1..MAX)) }

type GeneralName = DERElement;
export default GeneralName;

export
function printGeneralName (value : DERElement) : string {
    switch (value.tagNumber) {
        case (0): { // otherName
            return ""; // TODO:
        }
        case (1): { // rfc822Name
            return `rfc822Name:${value.ia5String}`;
        }
        case (2): { // dNSName
            return `dnsName:${value.ia5String}`;
        }
        case (3): { // x400Address
            return ""; // TODO:
        }
        case (4): { // directoryName
            const rdn : RDNSequence = RDNSequence.fromElement(value);
            return rdn.toString();
        }
        case (5): { // ediPartyName
            const epn : EDIPartyName = EDIPartyName.fromElement(value);
            return `ediPartyName:${epn.partyName}`;
        }
        case (6): { // uniformResourceIdentifier
            return `uniformResourceIdentifier:${value.ia5String}`;
        }
        case (7): { // iPAddress
            return `iPAddress:${value.octetString}`;
        }
        case (8): { // registeredID
            return `registeredID:${value.objectIdentifier}`;
        }
        default: return "UNKNOWN NAME SYNTAX";
    }
}