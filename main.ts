
//% color="#AA278D"
namespace test {

    //% block="fooooooo"
    export function foo() {

    }

    //% block="bar x = $x text = $text"
    export function bar(x: number, text: string) {

    }

    //% block="shuffled text = $text x = $x"
    export function shuffled(x: number, text: string) {

    }
}
/**
 * Organize your blocks in groups
 */
//% color="#AA278D"
//% groups="['Fruits', 'Veggies']"
namespace food {
    //% block
    //% group="Veggies"
    export function potato() {

    }

    //% block
    //% group="Veggies"
    export function bean() {

    }

    //% block
    //% group="Fruits"
    export function apple() {

    }

    //% block
    //% group="Fruits"
    export function banana() {

    }
}
