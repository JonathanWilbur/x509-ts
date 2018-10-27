import { DERElement } from "asn1-ts";
import * as errors from "../errors";
export default class Validity {
    constructor(notBefore, notAfter) {
        this.notBefore = notBefore;
        this.notAfter = notAfter;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on validity");
            case -2: throw new errors.X509Error("Invalid construction on validity");
            case -3: throw new errors.X509Error("Invalid tag number on validity");
            default: throw new errors.X509Error("Undefined error when validating validity tag");
        }
        const validityElements = value.sequence;
        if (validityElements.length !== 2)
            throw new errors.X509Error("validity contained more than two ASN.1 elements");
        switch (validityElements[0].validateTag([0], [0], [23, 24])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on validity.notBefore");
            case -2: throw new errors.X509Error("Invalid construction on validity.notBefore");
            case -3: throw new errors.X509Error("Invalid tag number on validity.notBefore");
            default: throw new errors.X509Error("Undefined error when validating validity.notBefore tag");
        }
        switch (validityElements[1].validateTag([0], [0], [23, 24])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on validity.notBefore");
            case -2: throw new errors.X509Error("Invalid construction on validity.notBefore");
            case -3: throw new errors.X509Error("Invalid tag number on validity.notBefore");
            default: throw new errors.X509Error("Undefined error when validating validity.notBefore tag");
        }
        return new Validity((validityElements[0].tagNumber === 24) ?
            validityElements[0].generalizedTime : validityElements[0].utcTime, (validityElements[1].tagNumber === 24) ?
            validityElements[1].generalizedTime : validityElements[1].utcTime);
    }
    toElement() {
        const notBeforeElement = new DERElement();
        notBeforeElement.tagNumber = 24;
        notBeforeElement.generalizedTime = this.notBefore;
        const notAfterElement = new DERElement();
        notAfterElement.tagNumber = 24;
        notAfterElement.generalizedTime = this.notBefore;
        const validityElement = new DERElement();
        validityElement.tagClass = 0;
        validityElement.construction = 1;
        validityElement.tagNumber = 16;
        validityElement.sequence = [notBeforeElement, notAfterElement];
        return validityElement;
    }
    static fromBytes(value) {
        const el = new DERElement();
        el.fromBytes(value);
        return Validity.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
