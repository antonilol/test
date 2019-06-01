//% color="#11BB11" block="Extra Functions Images" weight=100 icon="\uf03e"
namespace extraImg {
    
    export enum Bool {
        and = 0,
        or = 1,
        nand = 2,
        nor = 3,
        xor = 4,
        xnor = 5
    
    
    }
    /**
     * Returns an empty image
     * Replace me with an create image block
     */
    //% block="empty image" blockId=emptyImage
    export function emptyImage(): Image {
        return images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `);
    }



    /**
     * Boolean operators for images
     * @param imgA eg:extraImg.emptyImage()
     * @param imgB eg:extraImg.emptyImage()
     */
    //% block="$imgA $x $imgB" blockId=opImg
    export function opImg(imgA: Image, x: Bool, imgB: Image): Image {
        let output: Image = null
        output = images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `);
        if (imgA && imgB){
            let a: boolean = false;
            let b: boolean = false;
            for (let imgx = 0; imgx < 5; imgx++) {
                for (let imgy = 0; imgy < 5; imgy++) {
                    a = imgA.pixel(imgy, imgx);
                    b = imgB.pixel(imgy, imgx);
                    if (x == 0) {
                        output.setPixel(imgy, imgx, a && b);
                    } else if (x == 1) {
                        output.setPixel(imgy, imgx, a || b);
                    } else if (x == 2) {
                        output.setPixel(imgy, imgx, !(a && b));
                    } else if (x == 3) {
                        output.setPixel(imgy, imgx, !(a || b));
                    } else if (x == 5) {
                        output.setPixel(imgy, imgx, (!(a) && !(b)) || (a && b));
                    } else if (x == 4) {
                        output.setPixel(imgy, imgx, (!(a) && b) || (a && !(b)));
                    } else {
                        output.setPixel(imgy, imgx, false);
                    }
                }
            }
        }
        return output;
    }
    /**
     * Boolean operator not for images
     * @param img eg:extraImg.emptyImage()
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
    }
    /**
     * Shows the given image
     * @param img eg:extraImg.emptyImage()
     */
    //% block="show image $img" blockId=showImage
    export function showImg(img: Image): void {
        if (img){
            img.showImage(0)
        }
    }
}