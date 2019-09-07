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
class KeyUsage {
    constructor(digitalSignature, contentCommitment, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign, encipherOnly, decipherOnly) {
        this.digitalSignature = digitalSignature;
        this.contentCommitment = contentCommitment;
        this.keyEncipherment = keyEncipherment;
        this.dataEncipherment = dataEncipherment;
        this.keyAgreement = keyAgreement;
        this.keyCertSign = keyCertSign;
        this.cRLSign = cRLSign;
        this.encipherOnly = encipherOnly;
        this.decipherOnly = decipherOnly;
    }
    static fromElement(value) {
        switch (value.validateTag([0], [0], [3])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on KeyUsage");
            case -2: throw new errors.X509Error("Invalid construction on KeyUsage");
            case -3: throw new errors.X509Error("Invalid tag number on KeyUsage");
            default: throw new errors.X509Error("Undefined error when validating KeyUsage tag");
        }
        const bits = value.bitString;
        return new KeyUsage(((bits.length > 0) ? bits[0] : false), ((bits.length > 1) ? bits[1] : false), ((bits.length > 2) ? bits[2] : false), ((bits.length > 3) ? bits[3] : false), ((bits.length > 4) ? bits[4] : false), ((bits.length > 5) ? bits[5] : false), ((bits.length > 6) ? bits[6] : false), ((bits.length > 7) ? bits[7] : false), ((bits.length > 8) ? bits[8] : false));
    }
    toElement() {
        const keyUsageElement = new asn1_ts_1.DERElement(0, 0, 3);
        keyUsageElement.bitString = [
            this.digitalSignature,
            this.contentCommitment,
            this.keyEncipherment,
            this.dataEncipherment,
            this.keyAgreement,
            this.keyCertSign,
            this.cRLSign,
            this.encipherOnly,
            this.decipherOnly,
        ];
        return keyUsageElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return KeyUsage.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = KeyUsage;
//# sourceMappingURL=KeyUsage.js.map