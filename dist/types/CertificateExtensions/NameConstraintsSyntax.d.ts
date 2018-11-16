import GeneralSubtrees from "./GeneralSubtrees";
export default class NameConstraintsSyntax {
    readonly permittedSubtrees: GeneralSubtrees;
    readonly excludedSubtrees: GeneralSubtrees;
    constructor(permittedSubtrees: GeneralSubtrees, excludedSubtrees: GeneralSubtrees);
}
