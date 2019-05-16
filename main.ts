
//% color="#11bb11" block="Extra Functions"
//% groups="['Returns boolean', 'Returns number', 'Returns string', 'Returns list of numbers', 'Default blocks', 'Events', 'Extra']"
namespace extra {
    
    export enum Bool {
        and=0,
        or=1,
        nand=2,
        nor=3,
        xor=4,
        xnor=5
    }
    export enum Mode {
        plot=0,
        unplot=1
    }
    export enum Slot {
        //% block="slot 0"
        s0=0,
        //% block="slot 1"
        s1=1
    }
    
    //% block="Every $ms ms, start directly $startDirectly, "
    //% group="Events"
    export function onEvent(ms:number,startDirectly:boolean,handler: (indexNum: number, totalWaitingTime: number) => void) {
        let indexNum : number = 1;
        let totalWaitingTime : number = 0;
        if (ms>0){
            
            while (true){
                if (!(startDirectly && indexNum==1)){
                    basic.pause(ms);
                    totalWaitingTime = totalWaitingTime + ms
                }
                handler(indexNum, totalWaitingTime);
                indexNum = indexNum + 1;
            }
        }
    }
    
    
    let func: ((x:number) => void)=function(x:number){};
    
    
    
    //% block="Define function with number arg"
    //% group="Extra"
    export function defFunction(slot:Slot,handler: (arg:number) => void) {
        let arg:number;
        func=handler;
        
    }
  
    //% block="Call function with number arg $arg"
    //% group="Extra"
    export function callFunction(arg:number) {
        func(arg);
        
    }
    
    
    //% block="$a $x $b"
    //% group="Returns boolean"

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
    //% group="Returns list of numbers"

    export function array25(e: number) : number[] {
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
    //% group="Default blocks"

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
    //% group="Default blocks"

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
    //% group="Default blocks"

    export function seg72(mode:Mode,value:number=10):void {
        for (let y = 0; y <= 4; y++) {
        if (mode) {
            //unplot
                led.unplot(0,y);
            
            } else {
            //plot
                led.plot(0,y);
            }
            seg7(mode,value-10,2);
        }}
    
    /**
     * Stackable block to create extremely large blocks.
     */
    //% block="$value"
    //% group="Returns number"

    export function numb(value:number):number{
        return value;
    }
}
