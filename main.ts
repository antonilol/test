
enum Bool {
    //% block="and"
    and,
    //% block="or"
    or,
    //% block="nand"
    nand,
    //% block="nor"
    nor,
    //% block="xor"
    xor,
    //% block="xnor"
    xnor
    
}
//% color="#11bb11"
namespace test {

    //% block="$a $x $b"
    export function bool(a: boolean, x: Bool, b: boolean): boolean {
        return a;
    }

    
}
