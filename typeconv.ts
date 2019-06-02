namespace extra.typeconv {
    //% block="$x" blockId=boolNumb
    export function boolNumb(x: number): boolean {
        return x != 0
    }
    //% block="$x" blockId=numbBool
    export function numbBool(x: boolean): number {
        return x ? 1 : 0
    }
}
