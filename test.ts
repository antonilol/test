//% block="ignore me" color="#FFF" icon="?"
namespace IgnoreMe {
/**
 * Plots the given led string to the leds. Works only when list has 25 elements.
 * @param leds eg:"00000 01010 00000 10001 01110"
 */
//% block="plot led string $leds" blockId=plotLedStr
export function plotLedStr(leds: string): void {
    let indexNum = 0;
    for (let char of leds) {
        if (char == '0' || char == '1') {
            if (char == '1') {
                led.plot(indexNum % 5, Math.idiv(indexNum, 5));
            }
            indexNum++;
        }
    }
}

/**
 * Convert the image to a string containing 25x 0 (off) and 1 (on)
 * @param img
 */
//% block="image to string $img" blockId=imgToStr
export function imgToStr(img: Image): string {
    let output = '';
    let temp = 0;
    for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
            temp = 0;
            if (img.pixel(y, x)) {
                temp = 1;
            }
            output = output + temp
        }
        output = output + ' '
    }
    return output;
}

/**
     * Boolean operator not for images
     * @param img eg:null
     */
//% block="inverted $img" blockId=notImg
export function notImg(img: Image): Image {
    let output: Image = null
    output = images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `);
    if (img) {
        for (let imgx = 0; imgx < 5; imgx++) {
            for (let imgy = 0; imgy < 5; imgy++) {
                output.setPixel(imgy, imgx, !img.pixel(imgy, imgx));
            }
        }
    }
    return output;
}}
