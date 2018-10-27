import { DERElement } from "asn1-ts";
import * as errors from "../errors";
export default class AttributeTypeAndValue {
    constructor(type, value) {
        this.type = type;
        this.value = value;
    }
    static fromElement(value) {
        const attributeTypeAndValueElements = value.sequence;
        if (attributeTypeAndValueElements.length !== 2)
            throw new errors.X509Error("Invalid number of elements in AttributeTypeAndValue");
        switch (attributeTypeAndValueElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on AttributeTypeAndValue.type");
            case -2: throw new errors.X509Error("Invalid construction on AttributeTypeAndValue.type");
            case -3: throw new errors.X509Error("Invalid tag number on AttributeTypeAndValue.type");
            default: throw new errors.X509Error("Undefined error when validating AttributeTypeAndValue.type tag");
        }
        return new AttributeTypeAndValue(attributeTypeAndValueElements[0].objectIdentifier, attributeTypeAndValueElements[1]);
    }
    toElement() {
        const typeElement = new DERElement();
        typeElement.tagNumber = 6;
        typeElement.objectIdentifier = this.type;
        const attributeTypeAndValueElement = new DERElement();
        attributeTypeAndValueElement.tagClass = 0;
        attributeTypeAndValueElement.construction = 1;
        attributeTypeAndValueElement.tagNumber = 16;
        attributeTypeAndValueElement.sequence = [typeElement, this.value];
        return attributeTypeAndValueElement;
    }
    static fromBytes(value) {
        const el = new DERElement();
        el.fromBytes(value);
        return AttributeTypeAndValue.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
