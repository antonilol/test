
enum Bool {
    and=0,
    or=1,
    nand=2,
    nor=3,
    xor=4,
    xnor=5
}
//% color="#11bb11" block="Logic - Extra"
namespace logicextra {
    //% block="$a $x $b"
    export function bool(a: boolean, x: Bool, b: boolean) : boolean {
        if (x==0) {
            return (a && b);
        } else if (x==1) {
            return (a || b);
        } else if (x==2) {
            return !(a && b);
        }
    }
}
