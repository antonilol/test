
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
    export function plotLedList(leds: boolean[]) : boolean {
        for (let i = 0; i <= 24; i++) {
            if (leds[i]) {
                led.plot(i % 5, Math.floor(i / 5))
            }
        }
    }
}
