
//% color="#11bb11"
namespace test {

    //% block="$a and $b"
    export function bool(a: boolean, b: boolean): boolean {
        return a;
    }
}
enum Choice {
    Left,
    Right,
    Up,
    Down
}

enum Choice2 {
    //% block="left"
    Left,
    //% block="right"
    Right,
    //% block="up"
    Up,
    //% block="down"
    Down
}


//% color="#AA278D"
namespace basic {

    //% block
    export function turn(choice: Choice) {

    }

    //% block
    export function turn2(choice: Choice2) {

    }
}
