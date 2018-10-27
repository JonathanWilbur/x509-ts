import { DERElement } from "asn1-ts";
import * as errors from "../errors";
import AlgorithmIdentifier from "./AlgorithmIdentifier";
export default class SubjectPublicKeyInfo {
    constructor(algorithm, subjectPublicKey) {
        this.algorithm = algorithm;
        this.subjectPublicKey = subjectPublicKey;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on SubjectPublicKeyInfo");
            case -2: throw new errors.X509Error("Invalid construction on SubjectPublicKeyInfo");
            case -3: throw new errors.X509Error("Invalid tag number on SubjectPublicKeyInfo");
            default: throw new errors.X509Error("Undefined error when validating SubjectPublicKeyInfo tag");
        }
        const subjectPublicKeyElements = value.sequence;
        switch (subjectPublicKeyElements[1].validateTag([0], [0], [3])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on SubjectPublicKeyInfo.subjectPublicKey");
            case -2: throw new errors.X509Error("Invalid construction on SubjectPublicKeyInfo.subjectPublicKey");
            case -3: throw new errors.X509Error("Invalid tag number on SubjectPublicKeyInfo.subjectPublicKey");
            default: throw new errors.X509Error("Undefined error when validating SubjectPublicKeyInfo.subjectPublicKey tag");
        }
        return new SubjectPublicKeyInfo(AlgorithmIdentifier.fromElement(subjectPublicKeyElements[1]), subjectPublicKeyElements[1].bitString);
    }
    toElement() {
        if (this.algorithm === undefined)
            throw new errors.X509Error("Algorithm is undefined");
        const ret = new DERElement();
        ret.tagClass = 0;
        ret.construction = 1;
        ret.tagNumber = 16;
        const subjectPublicKeyElement = new DERElement();
        subjectPublicKeyElement.tagClass = 0;
        subjectPublicKeyElement.construction = 0;
        subjectPublicKeyElement.tagNumber = 3;
        subjectPublicKeyElement.bitString = this.subjectPublicKey;
        ret.sequence = [this.algorithm.toElement(), subjectPublicKeyElement];
        return ret;
    }
    static fromBytes(value) {
        const el = new DERElement();
        el.fromBytes(value);
        return SubjectPublicKeyInfo.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
