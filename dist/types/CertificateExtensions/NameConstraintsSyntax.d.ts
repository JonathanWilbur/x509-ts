import GeneralSubtrees from "./GeneralSubtrees";
export declare class NameConstraintsSyntax {
    readonly permittedSubtrees: GeneralSubtrees;
    readonly excludedSubtrees: GeneralSubtrees;
    constructor(permittedSubtrees: GeneralSubtrees, excludedSubtrees: GeneralSubtrees);
}
