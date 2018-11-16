import GeneralSubtrees from "./GeneralSubtrees";

// NameConstraintsSyntax ::= SEQUENCE {
//     permittedSubtrees  [0]  GeneralSubtrees OPTIONAL,
//     excludedSubtrees   [1]  GeneralSubtrees OPTIONAL,
//     ...
//   }
//   (WITH COMPONENTS {
//      ...,
//      permittedSubtrees  PRESENT
//    } | WITH COMPONENTS {
//          ...,
//          excludedSubtrees  PRESENT
//        })

export default
class NameConstraintsSyntax {

    constructor(
        readonly permittedSubtrees : GeneralSubtrees,
        readonly excludedSubtrees : GeneralSubtrees
    ) {}

}