
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
    //% block="list of 25x $e"
    export function array25(e: number) : number[] {
        let list: number[] = [];
        for (let i = 0; i <= 24; i++) {
            list.push(e);
        }
        return list;
    }
    /**
     * Plot or unplot a 7-segment 1-digit number.
     */
    //% block="$mode 7-seg number $value offset $offset"
    //% value.min=0 value.max=9 offset.min=0 offset.max=2
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
                        led.unplot(x+offset,y)
            
                    } else {
                    //plot
                        led.plot(x+offset,y)
                    }
                }
            }
        }
    }
    /**
     * Stackable block to create extremely large blocks.
     */
    //% block="$value"
    export function numb(value:number):number{
        return value;
    }
}
