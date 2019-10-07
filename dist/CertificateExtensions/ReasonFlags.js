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
class ReasonFlags {
    constructor(unused = false, keyCompromise = false, cACompromise = false, affiliationChanged = false, superseded = false, cessationOfOperation = false, certificateHold = false, privilegeWithdrawn = false, aACompromise = false, weakAlgorithmOrKeySize = false) {
        this.unused = unused;
        this.keyCompromise = keyCompromise;
        this.cACompromise = cACompromise;
        this.affiliationChanged = affiliationChanged;
        this.superseded = superseded;
        this.cessationOfOperation = cessationOfOperation;
        this.certificateHold = certificateHold;
        this.privilegeWithdrawn = privilegeWithdrawn;
        this.aACompromise = aACompromise;
        this.weakAlgorithmOrKeySize = weakAlgorithmOrKeySize;
    }
    static fromElement(value) {
        switch (value.validateTag([asn1_ts_1.ASN1TagClass.universal], [asn1_ts_1.ASN1Construction.primitive], [asn1_ts_1.ASN1UniversalType.bitString])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on ReasonFlags");
            case -2: throw new errors.X509Error("Invalid construction on ReasonFlags");
            case -3: throw new errors.X509Error("Invalid tag number on ReasonFlags");
            default: throw new errors.X509Error("Undefined error when validating ReasonFlags tag");
        }
        const bits = value.bitString;
        return new ReasonFlags(((bits.length >= 1) ? bits[0] : false), ((bits.length >= 2) ? bits[1] : false), ((bits.length >= 3) ? bits[2] : false), ((bits.length >= 4) ? bits[3] : false), ((bits.length >= 5) ? bits[4] : false), ((bits.length >= 6) ? bits[5] : false), ((bits.length >= 7) ? bits[6] : false), ((bits.length >= 8) ? bits[7] : false), ((bits.length >= 9) ? bits[8] : false), ((bits.length >= 10) ? bits[9] : false));
    }
    toElement() {
        const ret = new asn1_ts_1.DERElement(asn1_ts_1.ASN1TagClass.universal, asn1_ts_1.ASN1Construction.constructed, asn1_ts_1.ASN1UniversalType.bitString);
        ret.bitString = [
            this.unused,
            this.keyCompromise,
            this.cACompromise,
            this.affiliationChanged,
            this.superseded,
            this.cessationOfOperation,
            this.certificateHold,
            this.privilegeWithdrawn,
            this.aACompromise,
            this.weakAlgorithmOrKeySize,
        ];
        return ret;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return ReasonFlags.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = ReasonFlags;
//# sourceMappingURL=ReasonFlags.js.map