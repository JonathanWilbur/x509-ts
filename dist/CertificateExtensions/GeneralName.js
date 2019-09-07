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
const EDIPartyName_1 = __importDefault(require("./EDIPartyName"));
const InformationFramework_1 = require("../InformationFramework");
const errors = __importStar(require("../errors"));
function printGeneralName(value) {
    if (value.tagClass !== 2)
        return "";
    switch (value.tagNumber) {
        case (0): {
            switch (value.validateTag([0], [1], [8])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag class on INSTANCE OF OTHER-NAME");
                case -2: throw new errors.X509Error("Invalid construction on INSTANCE OF OTHER-NAME");
                case -3: throw new errors.X509Error("Invalid tag number on INSTANCE OF OTHER-NAME");
                default: throw new errors.X509Error("Undefined error when validating INSTANCE OF OTHER-NAME tag");
            }
            const otherNameElements = value.sequence;
            if (otherNameElements.length !== 2) {
                throw new errors.X509Error("Invalid number of elements in INSTANCE OF OTHER-NAME");
            }
            switch (otherNameElements[0].validateTag([0], [0], [6])) {
                case 0: break;
                case -1: throw new errors.X509Error("Invalid tag class on OTHER-NAME.id");
                case -2: throw new errors.X509Error("Invalid construction on OTHER-NAME.id");
                case -3: throw new errors.X509Error("Invalid tag number on OTHER-NAME.id");
                default: throw new errors.X509Error("Undefined error when validating OTHER-NAME.id tag");
            }
            return `otherName:${otherNameElements[0].objectIdentifier}:${otherNameElements[1].value}`;
        }
        case (1): {
            return `rfc822Name:${value.ia5String}`;
        }
        case (2): {
            return `dnsName:${value.ia5String}`;
        }
        case (3): {
            return "";
        }
        case (4): {
            const rdn = InformationFramework_1.RDNSequence.fromElement(value);
            return rdn.toString();
        }
        case (5): {
            const epn = EDIPartyName_1.default.fromElement(value);
            return `ediPartyName:${epn.partyName}`;
        }
        case (6): {
            return `uniformResourceIdentifier:${value.ia5String}`;
        }
        case (7): {
            return `iPAddress:${value.octetString}`;
        }
        case (8): {
            return `registeredID:${value.objectIdentifier}`;
        }
        default: return "UNKNOWN NAME SYNTAX";
    }
}
exports.printGeneralName = printGeneralName;
//# sourceMappingURL=GeneralName.js.map