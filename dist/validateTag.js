"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors = __importStar(require("./errors"));
function validateTag(element, name, acceptableTagClasses, acceptableConstructions, acceptableTagNumbers) {
    switch (element.validateTag(acceptableTagClasses, acceptableConstructions, acceptableTagNumbers)) {
        case 0: break;
        case -1: {
            const tagClassName = ({
                0: "UNIVERSAL",
                1: "APPLICATION",
                2: "CONTEXT-SPECIFIC",
                3: "PRIVATE",
            })[element.tagClass];
            throw new errors.X509Error(`Invalid tag class on ${name}. Actual class: ${tagClassName}.`);
        }
        case -2: throw new errors.X509Error(`Invalid construction on ${name}.`);
        case -3: throw new errors.X509Error(`Invalid tag number on ${name}. Actual number was ${element.tagNumber}.`);
        default: throw new errors.X509Error(`Undefined error when validating ${name} tag.`);
    }
}
exports.default = validateTag;
//# sourceMappingURL=validateTag.js.map