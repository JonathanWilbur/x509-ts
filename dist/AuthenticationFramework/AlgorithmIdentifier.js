import { DERElement } from "asn1-ts";
import * as errors from "../errors";
export default class AlgorithmIdentifier {
    constructor(algorithm, parameters) {
        this.algorithm = algorithm;
        this.parameters = parameters;
    }
    static fromElement(value) {
        const algorithmIdentifierElements = value.sequence;
        if (algorithmIdentifierElements.length !== 2)
            throw new errors.X509Error("Invalid number of elements in AlgorithmIdentifier");
        switch (algorithmIdentifierElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag number on AlgorithmIdentifier.algorithm");
            case -2: throw new errors.X509Error("Invalid construction on AlgorithmIdentifier.algorithm");
            case -3: throw new errors.X509Error("Invalid tag number on AlgorithmIdentifier.algorithm");
            default: throw new errors.X509Error("Undefined error when validating AlgorithmIdentifier.algorithm tag");
        }
        return new AlgorithmIdentifier(algorithmIdentifierElements[0].objectIdentifier, algorithmIdentifierElements[1]);
    }
    toElement() {
        if (this.algorithm === undefined)
            throw new errors.X509Error("Algorithm is undefined");
        const algorithmElement = new DERElement();
        algorithmElement.tagNumber = 6;
        algorithmElement.objectIdentifier = this.algorithm;
        const algorithmIdentifierElement = new DERElement();
        algorithmIdentifierElement.tagClass = 0;
        algorithmIdentifierElement.construction = 1;
        algorithmIdentifierElement.tagNumber = 16;
        if (this.parameters === undefined) {
            algorithmIdentifierElement.sequence = [algorithmElement];
        }
        else {
            algorithmIdentifierElement.sequence = [algorithmElement, this.parameters];
        }
        return algorithmIdentifierElement;
    }
    static fromBytes(value) {
        const el = new DERElement();
        el.fromBytes(value);
        return AlgorithmIdentifier.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
