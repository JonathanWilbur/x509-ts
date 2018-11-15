import { DERElement } from 'asn1-ts';
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

type GeneralName = DERElement;
export default GeneralName;