// import { DERElement, ASN1TagClass, ASN1Construction, ASN1UniversalType } from "asn1-ts";
// import * as errors from "../errors";
import GeneralName from "./GeneralName";
import BaseDistance from "./BaseDistance";

//   GeneralSubtree ::= SEQUENCE {
//     base     GeneralName,
//     minimum  [0]  BaseDistance DEFAULT 0,
//     maximum  [1]  BaseDistance OPTIONAL,
//     ...
//   }

export
class GeneralSubtree {

    constructor(
        readonly base : GeneralName,
        readonly minimum : BaseDistance = 0,
        readonly maximum? : BaseDistance
    ) {}

    // public static fromElement (value : DERElement) {
    //     switch (value.validateTag(
    //         [ ASN1TagClass.universal ],
    //         [ ASN1Construction.constructed ],
    //         [ ASN1UniversalType.sequence ]
    //     )) {
    //         case 0: break;
    //         case -1: throw new errors.X509Error("Invalid tag number on DistributionPoint");
    //         case -2: throw new errors.X509Error("Invalid construction on DistributionPoint");
    //         case -3: throw new errors.X509Error("Invalid tag number on DistributionPoint");
    //         default: throw new errors.X509Error("Undefined error when validating DistributionPoint tag");
    //     }

    //     const generalSubtreeElements : DERElement[] = value.sequence;
    //     if (generalSubtreeElements.length === 0)
    //         throw new errors.X509Error("Invalid number of elements in GeneralSubtree");

    //     // GeneralName is extensible, so tag validation cannot be done.
    //     let base : DERElement = generalSubtreeElements[0];

    //     if (generalSubtreeElements.length > 1) {
    //         generalSubtreeElements.slice(1).forEach(element => {

    //         });
    //     }
    // }

}