import { DERElement,ObjectIdentifier, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
import { Byteable, Elementable } from "../interfaces";
import * as errors from "../errors";

// AttributeTypeAndValue ::= SEQUENCE {
//   type                  ATTRIBUTE.&id({SupportedAttributes}),
//   value                 ATTRIBUTE.&Type({SupportedAttributes}{@type}),
//   ... }

// ATTRIBUTE ::= CLASS {
//     &derivation               ATTRIBUTE OPTIONAL,
//     &Type                     OPTIONAL, -- either &Type or &derivation required
//     &equality-match           MATCHING-RULE OPTIONAL,
//     &ordering-match           MATCHING-RULE OPTIONAL,
//     &substrings-match         MATCHING-RULE OPTIONAL,
//     &single-valued            BOOLEAN DEFAULT FALSE,
//     &collective               BOOLEAN DEFAULT FALSE,
//     &dummy                    BOOLEAN DEFAULT FALSE,
//     -- operational extensions
//     &no-user-modification     BOOLEAN DEFAULT FALSE,
//     &usage                    AttributeUsage DEFAULT userApplications,
//     &ldapSyntax               SYNTAX-NAME.&id OPTIONAL,
//     &ldapName                 SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
//     &ldapDesc                 UTF8String OPTIONAL,
//     &obsolete                 BOOLEAN DEFAULT FALSE,
//     &id                       OBJECT IDENTIFIER UNIQUE }
//   WITH SYNTAX {
//     [SUBTYPE OF               &derivation]
//     [WITH SYNTAX              &Type]
//     [EQUALITY MATCHING RULE   &equality-match]
//     [ORDERING MATCHING RULE   &ordering-match]
//     [SUBSTRINGS MATCHING RULE &substrings-match]
//     [SINGLE VALUE             &single-valued]
//     [COLLECTIVE               &collective]
//     [DUMMY                    &dummy]
//     [NO USER MODIFICATION     &no-user-modification]
//     [USAGE                    &usage]
//     [LDAP-SYNTAX              &ldapSyntax]
//     [LDAP-NAME                &ldapName]
//     [LDAP-DESC                &ldapDesc]
//     [OBSOLETE                 &obsolete]
//     ID                        &id }

// MATCHING-RULE ::= CLASS {
//     &ParentMatchingRules    MATCHING-RULE OPTIONAL,
//     &AssertionType          OPTIONAL,
//     &uniqueMatchIndicator   ATTRIBUTE OPTIONAL,
//     &ldapSyntax             SYNTAX-NAME.&id OPTIONAL,
//     &ldapName               SEQUENCE SIZE(1..MAX) OF UTF8String OPTIONAL,
//     &ldapDesc               UTF8String OPTIONAL,
//     &id                     OBJECT IDENTIFIER UNIQUE }
//   WITH SYNTAX {
//     [PARENT                 &ParentMatchingRules]
//     [SYNTAX                 &AssertionType]
//     [UNIQUE-MATCH-INDICATOR &uniqueMatchIndicator]
//     [LDAP-SYNTAX            &ldapSyntax]
//     [LDAP-NAME              &ldapName]
//     [LDAP-DESC              &ldapDesc]
//     ID                      &id }

// SYNTAX-NAME ::= CLASS {
//     &ldapDesc               UTF8String,
//     &Type                   OPTIONAL,
//     &id                     OBJECT IDENTIFIER UNIQUE }
//   WITH SYNTAX {
//     LDAP-DESC               &ldapDesc
//     [DIRECTORY SYNTAX       &Type]
//     ID                      &id }

export default
class AttributeTypeAndValue implements Byteable,Elementable {
    type : ObjectIdentifier;
    value : DERElement;

    public fromElement (value : DERElement) : void {
        const attributeTypeAndValueElements : DERElement[] = value.sequence;
        if (attributeTypeAndValueElements.length !== 2)
            throw new errors.X509Error("Invalid number of elements in AttributeTypeAndValue");
        switch (attributeTypeAndValueElements[0].validateTag(
            [ ASN1TagClass.universal ],
            [ ASN1Construction.primitive ],
            [ ASN1UniversalType.objectIdentifier ])
        ) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on AttributeTypeAndValue.type");
            case -2: throw new errors.X509Error("Invalid construction on AttributeTypeAndValue.type");
            case -3: throw new errors.X509Error("Invalid tag number on AttributeTypeAndValue.type");
            default: throw new errors.X509Error("Undefined error when validating AttributeTypeAndValue.type tag");
        }
        this.type = attributeTypeAndValueElements[0].objectIdentifier;
        this.value = attributeTypeAndValueElements[1];
    }

    public toElement() : DERElement {
        const typeElement : DERElement = new DERElement();
        typeElement.tagNumber = ASN1UniversalType.objectIdentifier;
        typeElement.objectIdentifier = this.type;
        const attributeTypeAndValueElement : DERElement = new DERElement();
        attributeTypeAndValueElement.tagClass = ASN1TagClass.universal;
        attributeTypeAndValueElement.construction = ASN1Construction.constructed;
        attributeTypeAndValueElement.tagNumber = ASN1UniversalType.sequence;
        attributeTypeAndValueElement.sequence = [ typeElement, this.value ];
        return attributeTypeAndValueElement;
    }

    public fromBytes (value : Uint8Array) : void {
        const attributeTypeAndValueElement : DERElement = new DERElement();
        attributeTypeAndValueElement.fromBytes(value);
        this.fromElement(attributeTypeAndValueElement);
    }

    public toBytes () : Uint8Array {
        return this.toElement().toBytes();
    }
}