"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
class AlgorithmIdentifier {
    constructor(algorithm, parameters) {
        this.algorithm = algorithm;
        this.parameters = parameters;
    }
    static fromElement(value) {
        const algorithmIdentifierElements = value.sequence;
        if (algorithmIdentifierElements.length === 0) {
            throw new errors.X509Error("AlgorithmIdentifier may not contain zero elements.");
        }
        if (algorithmIdentifierElements.length > 2) {
            throw new errors.X509Error("Too many elements in AlgorithmIdentifier.");
        }
        switch (algorithmIdentifierElements[0].validateTag([0], [0], [6])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on AlgorithmIdentifier.algorithm");
            case -2: throw new errors.X509Error("Invalid construction on AlgorithmIdentifier.algorithm");
            case -3: throw new errors.X509Error("Invalid tag number on AlgorithmIdentifier.algorithm");
            default: throw new errors.X509Error("Undefined error when validating AlgorithmIdentifier.algorithm tag");
        }
        return new AlgorithmIdentifier(algorithmIdentifierElements[0].objectIdentifier, algorithmIdentifierElements.length === 2 ? algorithmIdentifierElements[1] : undefined);
    }
    toElement() {
        if (this.algorithm === undefined)
            throw new errors.X509Error("Algorithm is undefined");
        const algorithmElement = new asn1_ts_1.DERElement();
        algorithmElement.tagNumber = 6;
        algorithmElement.objectIdentifier = this.algorithm;
        const algorithmIdentifierElement = new asn1_ts_1.DERElement();
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
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return AlgorithmIdentifier.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = AlgorithmIdentifier;
//# sourceMappingURL=AlgorithmIdentifier.js.map