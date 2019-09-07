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
const UnboundedDirectoryString_1 = __importDefault(require("../SelectedAttributeTypes/Version8/UnboundedDirectoryString"));
const asn1_ts_1 = require("asn1-ts");
const errors = __importStar(require("../errors"));
class EDIPartyName {
    constructor(nameAssigner, partyName) {
        this.nameAssigner = nameAssigner;
        this.partyName = partyName;
    }
    toString() {
        return this.partyName.toString();
    }
    static fromElement(value) {
        switch (value.validateTag([0], [1], [16])) {
            case 0: break;
            case -1: throw new errors.X509Error("Invalid tag class on EDIPartyName");
            case -2: throw new errors.X509Error("Invalid construction on EDIPartyName");
            case -3: throw new errors.X509Error("Invalid tag number on EDIPartyName");
            default: throw new errors.X509Error("Undefined error when validating EDIPartyName tag");
        }
        const ediPartNameElements = value.sequence;
        if (!asn1_ts_1.DERElement.isUniquelyTagged(ediPartNameElements)) {
            throw new errors.X509Error("Elements of EDIPartyName were not uniquely tagged");
        }
        let nameAssigner;
        let partyName;
        let fixedPositionElementsEncountered = 0;
        ediPartNameElements.forEach((element, index) => {
            if (element.tagClass === 2) {
                if (element.tagNumber === 0) {
                    if (element.construction !== 0) {
                        throw new errors.X509Error("EDIPartyName.nameAssigner was not primitively constructed");
                    }
                    if (index !== 0)
                        throw new errors.X509Error("nameAssigner out of order in EDIPartyName");
                    nameAssigner = UnboundedDirectoryString_1.default.fromElement(element);
                    fixedPositionElementsEncountered++;
                }
                else if (element.tagNumber === 1) {
                    if (element.construction !== 0) {
                        throw new errors.X509Error("EDIPartyName.partyName was not primitively constructed");
                    }
                    if (index > 1) {
                        throw new errors.X509Error("partyName out of order in EDIPartyName");
                    }
                    if (index === 1
                        && (ediPartNameElements[0].tagClass !== 2
                            || ediPartNameElements[0].construction !== 0
                            || ediPartNameElements[0].tagNumber !== 1)) {
                        throw new errors.X509Error("EDIPartyName missing nameAssigner element before "
                            + "partyName when partyName was the second "
                            + "element.");
                    }
                    partyName = UnboundedDirectoryString_1.default.fromElement(element);
                    fixedPositionElementsEncountered++;
                }
            }
        });
        if (!partyName)
            throw new errors.X509Error("EDIPartyName.partyName was not defined");
        if (!asn1_ts_1.DERElement.isInCanonicalOrder(ediPartNameElements.slice(fixedPositionElementsEncountered))) {
            throw new errors.X509Error("Extended elements of EDIPartyName were not in canonical order");
        }
        return new EDIPartyName(nameAssigner, partyName);
    }
    toElement() {
        const ediPartNameElements = [];
        if (this.nameAssigner) {
            ediPartNameElements.push(this.nameAssigner.toElement());
            ediPartNameElements[0].tagNumber = 0;
        }
        ediPartNameElements.push(this.partyName.toElement());
        ediPartNameElements[(ediPartNameElements.length - 1)].tagNumber = 1;
        const ediPartNameElement = new asn1_ts_1.DERElement(0, 1, 16);
        ediPartNameElement.sequence = ediPartNameElements;
        return ediPartNameElement;
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
exports.default = EDIPartyName;
//# sourceMappingURL=EDIPartyName.js.map