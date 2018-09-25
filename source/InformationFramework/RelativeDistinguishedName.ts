import AttributeTypeAndValue from "./AttributeTypeAndValue";

// RelativeDistinguishedName is a SET so you can have multi-valued RDNs
// So, for instance, if your DN was gn=Jonathan+sn=Wilbur,dc=example,dc=com,
// The RelativeDistinguishedName would contain an AttributeTypeAndValue
// for "Jonathan" and another for "Wilbur."

// RelativeDistinguishedName ::= SET SIZE (1..MAX) OF AttributeTypeAndValue
type RelativeDistinguishedName = AttributeTypeAndValue[];
export default RelativeDistinguishedName;