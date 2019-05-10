enum Bool {
    and=0,
    or=1,
    nand=2,
    nor=3,
    xor=4,
    xnor=5
}
enum Mode {
    plot=0,
    unplot=1
}
//% color="#11bb11" block="Extra Functions"
//% groups="['Functions', 'FUNctions']"
namespace extra {
    //% block="on event"
    export function onEvent(handler: () => void) {
        
    }
    
    //% block="$a $x $b"
    //% group="Functions"

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
    
    //% block="list of 25 numbers $e"
    //% group="Functions"

    export function array25(e: number = 1) : number[] {
        let list: number[] = [];
        for (let i = 0; i <= 24; i++) {
            list.push(e);
        }
        return list;
    }
    /**
     * Plots the given led list to the leds. Works only when list has 25 elements.
     */
    //% block="plot led list $leds"
    //% group="Functions"

    export function plotLedList(leds: number[] = array25(1)) : void {
        if (leds.length==25) {
            for (let i = 0; i <= 24; i++) {
                if (leds[i]==1) {
                    led.plot(i % 5, Math.floor(i / 5));
                }
            }
        }
    }
    /**
     * Plot or unplot a 7-segment 1-digit number.
     */
    //% block="$mode 7-seg 1-digit number $value offset $offset"
    //% value.min=0 value.max=9 offset.min=0 offset.max=2
    //% group="Functions"

    export function seg7(mode:Mode,value:number,offset:number) : void{
        let list: number[][] = [[[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]],
                                [[0,0,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]],
                                [[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]],
                                [[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]],
                                [[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]],
                                [[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]],
                                [[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],
                                [[1,1,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]],
                                [[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]],
                                [[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]]][value];
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 2; x++) {
                if (list[y][x]) {
                    if (mode) {
                    //unplot
                        led.unplot(x+offset,y);
            
                    } else {
                    //plot
                        led.plot(x+offset,y);
                    }
                }
            }
        }
    }
    /**
     * Plot or unplot a 7-segment 2-digit number.
     */
    //% block="$mode 7-seg 2-digit number $value"
    //% value.min=10 value.max=19
    //% group="Functions"

    export function seg72(mode:Mode,value:number):void {
        for (let y = 0; y <= 4; y++) {
        if (mode) {
            //unplot
                led.unplot(0,y);
            
            } else {
            //plot
                led.plot(0,y);
            }
            seg7(mode,value,2);
        }}
    
    /**
     * Stackable block to create extremely large blocks.
     */
    //% block="$value"
    //% group="FUNctions"

    export function numb(value:number):number{
        return value;
    }
}
