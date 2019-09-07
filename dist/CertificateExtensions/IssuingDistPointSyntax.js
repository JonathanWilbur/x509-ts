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
const ReasonFlags_1 = __importDefault(require("./ReasonFlags"));
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
class IssuingDistPointSyntax {
    constructor(distributionPoint, onlyContainsUserPublicKeyCerts = false, onlyContainsCACerts = false, onlySomeReasons, indirectCRL = false) {
        this.distributionPoint = distributionPoint;
        this.onlyContainsUserPublicKeyCerts = onlyContainsUserPublicKeyCerts;
        this.onlyContainsCACerts = onlyContainsCACerts;
        this.onlySomeReasons = onlySomeReasons;
        this.indirectCRL = indirectCRL;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on IssuingDistPointSyntax");
            case -2: throw new errors.X509Error("Invalid construction on IssuingDistPointSyntax");
            case -3: throw new errors.X509Error("Invalid tag number on IssuingDistPointSyntax");
            default: throw new errors.X509Error("Undefined error when validating IssuingDistPointSyntax tag");
        }
        let distributionPoint;
        let onlyContainsUserPublicKeyCerts;
        let onlyContainsCACerts;
        let onlySomeReasons;
        let indirectCRL;
        const issuingDistPointSyntaxElements = value.sequence;
        let lastEncounteredTagNumber;
        issuingDistPointSyntaxElements.forEach((element) => {
            if (!lastEncounteredTagNumber) {
                lastEncounteredTagNumber = element.tagNumber;
            }
            else if (element.tagNumber <= lastEncounteredTagNumber) {
                throw new errors.X509Error("Elements out of order in IssuingDistPointSyntax.");
            }
            if (element.tagClass === 2) {
                switch (element.tagNumber) {
                    case (0): {
                        distributionPoint = element;
                        break;
                    }
                    case (1): {
                        if (element.construction !== 0) {
                            throw new errors.X509Error("Invalid construction for IssuingDistPointSyntax.onlyContainsUserPublicKeyCerts.");
                        }
                        onlyContainsUserPublicKeyCerts = element.boolean;
                        break;
                    }
                    case (2): {
                        if (element.construction !== 0) {
                            throw new errors.X509Error("Invalid construction for IssuingDistPointSyntax.onlyContainsCACerts.");
                        }
                        onlyContainsCACerts = element.boolean;
                        break;
                    }
                    case (3): {
                        if (element.construction !== 1) {
                            throw new errors.X509Error("Invalid construction for IssuingDistPointSyntax.onlySomeReasons.");
                        }
                        onlySomeReasons = ReasonFlags_1.default.fromElement(element);
                        break;
                    }
                    case (4): {
                        if (element.construction !== 0) {
                            throw new errors.X509Error("Invalid construction for IssuingDistPointSyntax.indirectCRL.");
                        }
                        indirectCRL = element.boolean;
                        break;
                    }
                    default: break;
                }
            }
            lastEncounteredTagNumber = element.tagNumber;
        });
        return new IssuingDistPointSyntax(distributionPoint, onlyContainsUserPublicKeyCerts, onlyContainsCACerts, onlySomeReasons, indirectCRL);
    }
    toElement() {
        const issuingDistPointSyntaxElements = [];
        if (this.distributionPoint) {
            issuingDistPointSyntaxElements.push(this.distributionPoint);
        }
        if (this.onlyContainsUserPublicKeyCerts) {
            const onlyContainsUserPublicKeyCertsElement = new asn1_ts_1.DERElement(2, 0, 1);
            onlyContainsUserPublicKeyCertsElement.boolean = this.onlyContainsUserPublicKeyCerts;
            issuingDistPointSyntaxElements.push(onlyContainsUserPublicKeyCertsElement);
        }
        if (this.onlyContainsCACerts) {
            const onlyContainsCACertsElement = new asn1_ts_1.DERElement(2, 0, 1);
            onlyContainsCACertsElement.boolean = this.onlyContainsUserPublicKeyCerts;
            issuingDistPointSyntaxElements.push(onlyContainsCACertsElement);
        }
        if (this.onlySomeReasons) {
            issuingDistPointSyntaxElements.push(this.onlySomeReasons.toElement());
        }
        if (this.indirectCRL) {
            const indirectCRLElement = new asn1_ts_1.DERElement(2, 0, 1);
            indirectCRLElement.boolean = this.onlyContainsUserPublicKeyCerts;
            issuingDistPointSyntaxElements.push(indirectCRLElement);
        }
        const issuingDistPointSyntaxElement = new asn1_ts_1.DERElement(0, 1, 16);
        issuingDistPointSyntaxElement.sequence = issuingDistPointSyntaxElements;
        return issuingDistPointSyntaxElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return IssuingDistPointSyntax.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = IssuingDistPointSyntax;
//# sourceMappingURL=IssuingDistPointSyntax.js.map