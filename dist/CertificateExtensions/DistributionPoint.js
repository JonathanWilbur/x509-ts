"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
const ReasonFlags_1 = __importDefault(require("./ReasonFlags"));
class DistributionPoint {
    constructor(distributionPoint, reasons, cRLIssuer) {
        this.distributionPoint = distributionPoint;
        this.reasons = reasons;
        this.cRLIssuer = cRLIssuer;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on DistributionPoint");
            case -2: throw new errors.X509Error("Invalid construction on DistributionPoint");
            case -3: throw new errors.X509Error("Invalid tag number on DistributionPoint");
            default: throw new errors.X509Error("Undefined error when validating DistributionPoint tag");
        }
        const distributionPointElements = value.sequence;
        let distributionPoint;
        let reasons;
        let cRLIssuer;
        distributionPointElements.forEach(element => {
            switch (element.tagNumber) {
                case (0): {
                    distributionPoint = element;
                    break;
                }
                case (1): {
                    if (element.construction !== 0)
                        throw new errors.X509Error("DistributionPoint.reasons may not be constructed.");
                    reasons = ReasonFlags_1.default.fromElement(element);
                    break;
                }
                case (2): {
                    cRLIssuer = element.sequence;
                    break;
                }
                default: break;
            }
        });
        return new DistributionPoint(distributionPoint, reasons, cRLIssuer);
    }
    toElement() {
        let distributionPointElements = [];
        if (this.distributionPoint) {
            distributionPointElements.push(this.distributionPoint);
        }
        if (this.reasons) {
            distributionPointElements.push(this.reasons.toElement());
        }
        if (this.cRLIssuer) {
            const crlIssuerElement = new asn1_ts_1.DERElement(2, 1, 2);
            crlIssuerElement.sequence = this.cRLIssuer;
            distributionPointElements.push(crlIssuerElement);
        }
        const ret = new asn1_ts_1.DERElement(0, 1, 16);
        ret.sequence = distributionPointElements;
        return ret;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return DistributionPoint.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = DistributionPoint;
//# sourceMappingURL=DistributionPoint.js.map