
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
    export function bool(a: boolean, x: Bool, b: boolean): boolean {
        if (x==and){
            return 1;
        }else{
            return 0;
        }
        
    }

    
}
