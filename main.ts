
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
        //% block="0"
        s0=0,
        //% block="1"
        s1=1,
        //% block="2"
        s2=2,
        //% block="3"
        s3=3,
        //% block="4"
        s4=4,
        //% block="5"
        s5=5,
        //% block="6"
        s6=6,
        //% block="7"
        s7=7,
        //% block="8"
        s8=8,
        //% block="9"
        s9=9,
        //% block="10"
        s10=10,
        //% block="11"
        s11=11,
        //% block="12"
        s12=12,
        //% block="13"
        s13=13,
        //% block="14"
        s14=14,
        //% block="15"
        s15=15,
        //% block="16"
        s16=16,
        //% block="17"
        s17=17,
        //% block="18"
        s18=18,
        //% block="19"
        s19=19,
        //% block="20"
        s20=20,
        //% block="21"
        s21=21,
        //% block="22"
        s22=22,
        //% block="23"
        s23=23,
        //% block="24"
        s24=24,
        //% block="25"
        s25=25,
        //% block="26"
        s26=26,
        //% block="27"
        s27=27,
        //% block="28"
        s28=28,
        //% block="29"
        s29=29,
        //% block="30"
        s30=30,
        //% block="31"
        s31=31,
        //% block="32"
        s32=32,
        //% block="33"
        s33=33,
        //% block="34"
        s34=34,
        //% block="35"
        s35=35,
        //% block="36"
        s36=36,
        //% block="37"
        s37=37,
        //% block="38"
        s38=38,
        //% block="39"
        s39=39,
        //% block="40"
        s40=40,
        //% block="41"
        s41=41,
        //% block="42"
        s42=42,
        //% block="43"
        s43=43,
        //% block="44"
        s44=44,
        //% block="45"
        s45=45,
        //% block="46"
        s46=46,
        //% block="47"
        s47=47,
        //% block="48"
        s48=48,
        //% block="49"
        s49=49,
        //% block="50"
        s50=50,
        //% block="51"
        s51=51,
        //% block="52"
        s52=52,
        //% block="53"
        s53=53,
        //% block="54"
        s54=54,
        //% block="55"
        s55=55,
        //% block="56"
        s56=56,
        //% block="57"
        s57=57,
        //% block="58"
        s58=58,
        //% block="59"
        s59=59,
        //% block="60"
        s60=60,
        //% block="61"
        s61=61,
        //% block="62"
        s62=62,
        //% block="63"
        s63=63,
        //% block="64"
        s64=64,
        //% block="65"
        s65=65,
        //% block="66"
        s66=66,
        //% block="67"
        s67=67,
        //% block="68"
        s68=68,
        //% block="69"
        s69=69,
        //% block="70"
        s70=70,
        //% block="71"
        s71=71,
        //% block="72"
        s72=72,
        //% block="73"
        s73=73,
        //% block="74"
        s74=74,
        //% block="75"
        s75=75,
        //% block="76"
        s76=76,
        //% block="77"
        s77=77,
        //% block="78"
        s78=78,
        //% block="79"
        s79=79,
        //% block="80"
        s80=80,
        //% block="81"
        s81=81,
        //% block="82"
        s82=82,
        //% block="83"
        s83=83,
        //% block="84"
        s84=84,
        //% block="85"
        s85=85,
        //% block="86"
        s86=86,
        //% block="87"
        s87=87,
        //% block="88"
        s88=88,
        //% block="89"
        s89=89,
        //% block="90"
        s90=90,
        //% block="91"
        s91=91,
        //% block="92"
        s92=92,
        //% block="93"
        s93=93,
        //% block="94"
        s94=94,
        //% block="95"
        s95=95,
        //% block="96"
        s96=96,
        //% block="97"
        s97=97,
        //% block="98"
        s98=98,
        //% block="99"
        s99=99,
        //% block="100"
        s100=100,
        //% block="101"
        s101=101,
        //% block="102"
        s102=102,
        //% block="103"
        s103=103,
        //% block="104"
        s104=104,
        //% block="105"
        s105=105,
        //% block="106"
        s106=106,
        //% block="107"
        s107=107,
        //% block="108"
        s108=108,
        //% block="109"
        s109=109,
        //% block="110"
        s110=110,
        //% block="111"
        s111=111,
        //% block="112"
        s112=112,
        //% block="113"
        s113=113,
        //% block="114"
        s114=114,
        //% block="115"
        s115=115,
        //% block="116"
        s116=116,
        //% block="117"
        s117=117,
        //% block="118"
        s118=118,
        //% block="119"
        s119=119,
        //% block="120"
        s120=120,
        //% block="121"
        s121=121,
        //% block="122"
        s122=122,
        //% block="123"
        s123=123,
        //% block="124"
        s124=124,
        //% block="125"
        s125=125,
        //% block="126"
        s126=126,
        //% block="127"
        s127=127
    }
    
    //% block="Every $ms ms, start directly $startDirectly, " blockId=onEvent
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
    
    
    
    let func: ((x:number) => void)[]=[function(x:number){}];
    for (let _i = 0; _i <= 127; _i++) {
         func.push(function(x:number){})
    }

    
    
    //% slot.fieldEditor="gridpicker" slot.fieldOptions.columns=8
    //% slot.fieldOptions.tooltips="false" slot.fieldOptions.width="300"
    //% block="define function with number arg $slot" blockId=defFunction
    //% group="Extra"
    export function defFunction(slot:Slot,handler: (arg:number) => void) {
        let arg:number;
        
        func[slot]=handler;
        
    }
    //% slot.fieldEditor="gridpicker" slot.fieldOptions.columns=8
    //% slot.fieldOptions.tooltips="false" slot.fieldOptions.width="300"
    //% block="call function with number arg $slot $arg" blockId=callFunction
    //% group="Extra"
    export function callFunction(slot:Slot,arg:number) {
        
        func[slot](arg);
        
    }
    
    
    //% block="plot binary $numb offset $offset reversed $reversed"
    //% group="Default blocks" blockId=plotBin
    export function plotBin(numb:number,offset:number,reversed:boolean) : void {
        for (let index = 0; index <= 24; index++) {
            if (numb >= 2 ** (24 - index)) {
                numb += -1 * 2 ** (24 - index)
                if (reversed) {
                    led.plot((offset-index) % 5, Math.floor((offset-index ) / 5))
                } else {
                    led.plot((offset+24-index) % 5, Math.floor((offset+24-index ) / 5))
                }
            }
        }
    }
    //% block="$a $x $b" blockId=op
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
   
    //% block="list of 25 numbers $e" blockId=array25
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
    //% block="plot led list $leds" blockId=plotLedList
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
    //% block="$mode 7-seg 1-digit number $value offset $offset" blockId=seg7
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
    //% block="$mode 7-seg 2-digit number $value" blockId=seg72
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
    //% block="$value" blockId=numb
    //% group="Returns number"

    export function numb(value:number):number{
        return value;
    }
}
