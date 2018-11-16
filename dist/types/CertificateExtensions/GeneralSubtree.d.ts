import GeneralName from "./GeneralName";
import BaseDistance from "./BaseDistance";
export default class GeneralSubtree {
    readonly base: GeneralName;
    readonly minimum: BaseDistance;
    readonly maximum?: number | undefined;
    constructor(base: GeneralName, minimum?: BaseDistance, maximum?: number | undefined);
}