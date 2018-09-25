import { DERElement } from "asn1-ts";

export
interface enByteable {
    toBytes () : Uint8Array;
}

export
interface deByteable {
    fromBytes (value : Uint8Array) : void;
}

export
interface Byteable extends enByteable,deByteable {
}

export
interface enElementable {
    toElement () : DERElement;
}

export
interface deElementable {
    fromElement (value : DERElement) : void;
}

export
interface Elementable extends enElementable,deElementable {

}