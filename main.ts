
enum Bool {
    and,
    or,
    nand,
    nor,
    xor,
    xnor
}
//% color="#11bb11" block="Logic - Extra"
namespace logicextra {
    //% block="$a $x $b"
    export function bool(a: boolean, x: Bool, b: boolean) : boolean {
        if (x==0){
            return a && b;
        } else if (x==1){
            return a || b;
        } else if (x==2){
            return !(a && b);
        }
    }
}
