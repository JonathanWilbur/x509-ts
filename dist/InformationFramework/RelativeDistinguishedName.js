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
const asn1_ts_1 = require("asn1-ts");
const AttributeTypeAndValue_1 = __importDefault(require("./AttributeTypeAndValue"));
const errors = __importStar(require("../errors"));
class RelativeDistinguishedName {
    constructor(value) {
        this.value = value;
        if (value.length < 1)
            throw new errors.X509Error("RelativeDistinguishedName must contain at least one AttributeTypeAndValue.");
    }
    toString() {
        return this.value.map((atav) => {
            return atav.toString();
        }).join("+");
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [17])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on RelativeDistinguishedName");
            case -2: throw new errors.X509Error("Invalid construction on RelativeDistinguishedName");
            case -3: throw new errors.X509Error("Invalid tag number on RelativeDistinguishedName");
            default: throw new errors.X509Error("Undefined error when validating RelativeDistinguishedName tag");
        }
        const relativeDistinguishedNameElements = value.set;
        return new RelativeDistinguishedName(relativeDistinguishedNameElements.map((element) => {
            return AttributeTypeAndValue_1.default.fromElement(element);
        }));
    }
    toElement() {
        const relativeDistinguishedNameElement = new asn1_ts_1.DERElement(0, 1, 17);
        relativeDistinguishedNameElement.set = this.value.map((atav) => {
            return atav.toElement();
        });
        return relativeDistinguishedNameElement;
    }
    static fromBytes(value) {
        const el = new asn1_ts_1.DERElement();
        el.fromBytes(value);
        return this.fromElement(el);
    }
    toBytes() {
        return this.toElement().toBytes();
    }
}
exports.default = RelativeDistinguishedName;
//# sourceMappingURL=RelativeDistinguishedName.js.map