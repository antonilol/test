//% color=190 weight=100 icon="\uf1ec" block="TEST"
//% groups=['LED matrix', 'Control flow', 'others']
namespace test2 {

    enum Logic {
        and = 1,
        or = 2,
        //% blockId="ApB" block="A+B"
        nor = 3,
    }





    //% block="magnitude of 3d vector at x %x and y %y and z %z"
    //% inlineInputMode=inline
    export function mag3d(x: Logic, y: number, z: number): number {
        return Math.sqrt(x * x + y * y + z * z);
    }
    
}
