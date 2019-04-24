
enum Bool {
    and=0,
    or=1,
    nand=2,
    nor=3,
    xor=4,
    xnor=5
}
//% color="#11bb11" block="Extra Functions"
namespace extra {
    //% block="$a $x $b"
    export function op(a: boolean, x: Bool, b: boolean) : boolean {
        if (x==0) {
            return (a && b);
        } else if (x==1) {
            return (a || b);
        } else if (x==2) {
            return !(a && b);
        } else if (x==3) {
            return !(a || b);
        } else if (x==5) {
            return ((!(a) && !(b)) || (a && b));
        } else if (x==4) {
            return ((!(a) && b) || (a && !(b)));
        } else {
            return false;
        }
    }
    //% block="plot led list $leds"
    export function plotLedList(leds: number[]) : void {
        
        for (let i = 0; i <= 24; i++) {
            if (leds[i]==1) {
                led.plot(i % 5, Math.floor(i / 5));
                
            }
           
        }
    }
    //% block="25-array|$e0 $e1 $e2 $e3 $e4|$e5 $e6 $e7 $e8 $e9|$e10 $e11 $e12 $e13 $e14|$e15 $e16 $e17 $e18 $e19|$e20 $e21 $e22 $e23 $e24"
    export function array25(e0: number,e1: number,e2: number,e3: number,e4: number,e5: number,e6: number,e7: number,e8: number,e9: number,e10: number,e11: number,e12: number,e13: number,e14: number,e15: number,e16: number,e17: number,e18: number,e19: number,e20: number,e21: number,e22: number,e23: number,e24: number) : number[] {
        
        return [e0,e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12,e13,e14,e15,e16,e17,e18,e19,e20,e21,e22,e23,e24];
    }
    //% $num.min=0 $num.max=9
    //% block="show 7-seg number $num"
    export function seg7(num:number):void{
        led.plot(1,1);
    }
}

