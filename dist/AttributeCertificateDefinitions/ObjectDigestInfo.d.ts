import { DERElement, ObjectIdentifier } from "asn1-ts";
import DigestedObjectType from "./DigestedObjectType";
import AlgorithmIdentifier from "../AuthenticationFramework/AlgorithmIdentifier";
export default class ObjectDigestInfo {
    readonly digestedObjectType: DigestedObjectType;
    readonly otherObjectTypeID: ObjectIdentifier | undefined;
    readonly digestAlgorithm: AlgorithmIdentifier;
    readonly objectDigest: boolean[];
    constructor(digestedObjectType: DigestedObjectType, otherObjectTypeID: ObjectIdentifier | undefined, digestAlgorithm: AlgorithmIdentifier, objectDigest: boolean[]);
    static fromElement(value: DERElement): ObjectDigestInfo;
    toElement(): DERElement;
    static fromBytes(value: Uint8Array): ObjectDigestInfo;
    toBytes(): Uint8Array;
}
//# sourceMappingURL=ObjectDigestInfo.d.ts.map