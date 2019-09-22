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
const errors = __importStar(require("../../errors"));
class UnboundedDirectoryString {
    constructor(value) {
        this.value = value;
    }
    toString() {
        return this.value;
    }
    static print(element) {
        const uds = UnboundedDirectoryString.fromElement(element);
        return uds.toString();
    }
    static fromElement(value) {
        if (value.tagClass !== 0) {
            throw new errors.X509Error("UnboundedDirectoryString must be of universal class");
        }
        if (value.construction !== 0) {
            throw new errors.X509Error("UnboundedDirectoryString must be of primitive construction");
        }
        switch (value.tagNumber) {
            case (20): {
                return new UnboundedDirectoryString("");
            }
            case (19): {
                return new UnboundedDirectoryString(value.printableString);
            }
            case (30): {
                return new UnboundedDirectoryString(value.bmpString);
            }
            case (28): {
                return new UnboundedDirectoryString(value.universalString);
            }
            case (12): {
                return new UnboundedDirectoryString(value.utf8String);
            }
            default:
                throw new errors.X509Error("UnboundedDirectoryString was constituted of an invalid CHOICE");
        }
    }
    toElement() {
        const unboundedDirectoryStringElement = new asn1_ts_1.DERElement(0, 0, 12);
        unboundedDirectoryStringElement.utf8String = this.value;
        return unboundedDirectoryStringElement;
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
exports.default = UnboundedDirectoryString;
//# sourceMappingURL=UnboundedDirectoryString.js.map